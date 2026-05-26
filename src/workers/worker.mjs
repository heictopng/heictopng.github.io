// ./workers/worker.mjs
import libheif from 'https://cdn.jsdelivr.net/npm/libheif-js@1.19.8/libheif-wasm/libheif-bundle.mjs';

let modulePromise = null;

function ensureModule() {
    if (!modulePromise) {
        modulePromise = libheif({});
    }
    return modulePromise;
}

function canEncodeInWorker() {
    return typeof OffscreenCanvas !== 'undefined'
        && typeof OffscreenCanvas.prototype.convertToBlob === 'function'
        && typeof ImageData !== 'undefined';
}

async function encodeRgbaOffscreen(rgba, width, height, mime, quality) {
    const canvas = new OffscreenCanvas(width, height);
    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    const imageData = new ImageData(rgba, width, height);
    ctx.putImageData(imageData, 0, 0);

    // Release big refs ASAP
    rgba = null;

    const blob = await canvas.convertToBlob({
        type: mime,
        quality: mime === 'image/jpeg' ? quality : undefined
    });

    const buf = await blob.arrayBuffer();

    // Release big refs ASAP
    // (canvas/ctx become GC candidates when out of scope)
    return buf;
}

async function makeThumbOffscreen(rgba, width, height, maxSize) {
    const maxDim = Math.max(width, height);
    const scale = Math.min(1, maxSize / maxDim);
    const tw = Math.max(1, Math.round(width * scale));
    const th = Math.max(1, Math.round(height * scale));

    const src = new OffscreenCanvas(width, height);
    const sctx = src.getContext('2d', { willReadFrequently: false });
    sctx.putImageData(new ImageData(rgba, width, height), 0, 0);

    const dst = new OffscreenCanvas(tw, th);
    const dctx = dst.getContext('2d', { willReadFrequently: false });
    dctx.drawImage(src, 0, 0, tw, th);

    // Thumb is preview-only: always JPEG (small+fast)
    const blob = await dst.convertToBlob({ type: 'image/jpeg', quality: 0.8 });
    const buf = await blob.arrayBuffer();

    return buf;
}

// --- Hardware-accelerated decoding via WebCodecs ImageDecoder ---
// Uses the platform's hardware HEVC/HEIF decoder (GPU) instead of
// CPU-based WASM.  Falls back transparently when unavailable.

let _hwDecodeMime; // undefined = untested

async function getHwDecodeMime() {
    if (_hwDecodeMime !== undefined) return _hwDecodeMime;

    if (typeof ImageDecoder === 'undefined') {
        _hwDecodeMime = false;
        return false;
    }

    for (const type of ['image/heic', 'image/heif']) {
        try {
            if (await ImageDecoder.isTypeSupported(type)) {
                _hwDecodeMime = type;
                console.log(`[worker] Hardware-accelerated decode available: ${type}`);
                return type;
            }
        } catch { /* not supported */ }
    }

    _hwDecodeMime = false;
    return false;
}

// Pre-warm: check support as soon as the worker loads
getHwDecodeMime();

async function tryHwDecode(arrayBuffer, id, fileName, mime, quality, thumbMax) {
    const supportedType = await getHwDecodeMime();
    if (!supportedType) return false;

    try {
        const decoder = new ImageDecoder({
            data: arrayBuffer,
            type: supportedType,
        });

        await decoder.completed;
        const { image } = await decoder.decode({ frameIndex: 0 });

        const width = image.displayWidth;
        const height = image.displayHeight;

        // VideoFrame → OffscreenCanvas (GPU → GPU, no RGBA round-trip)
        const canvas = new OffscreenCanvas(width, height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);

        const outBlob = await canvas.convertToBlob({
            type: mime,
            quality: mime === 'image/jpeg' ? quality : undefined,
        });
        const outBuf = await outBlob.arrayBuffer();

        // Optional thumbnail
        let thumbBuf = null;
        if (thumbMax > 0) {
            const maxDim = Math.max(width, height);
            const scale = Math.min(1, thumbMax / maxDim);
            const tw = Math.max(1, Math.round(width * scale));
            const th = Math.max(1, Math.round(height * scale));

            const tc = new OffscreenCanvas(tw, th);
            const tctx = tc.getContext('2d');
            tctx.drawImage(image, 0, 0, tw, th);

            const tBlob = await tc.convertToBlob({ type: 'image/jpeg', quality: 0.8 });
            thumbBuf = await tBlob.arrayBuffer();
        }

        image.close();
        decoder.close();

        const transfer = [outBuf];
        if (thumbBuf) transfer.push(thumbBuf);

        self.postMessage({
            id,
            ok: true,
            fileName,
            width,
            height,
            encoded: outBuf,
            thumb: thumbBuf,
            encodedMime: mime,
            thumbMime: thumbBuf ? 'image/jpeg' : undefined,
        }, transfer);

        return true;
    } catch (err) {
        console.warn(`[worker] ImageDecoder failed for ${fileName}, falling back to WASM:`, err);
        return false;
    }
}

self.onmessage = async (e) => {
    const { id, arrayBuffer, fileName, mime, quality, thumbMax = 300 } = e.data;

    // Try hardware-accelerated decode first (WebCodecs ImageDecoder)
    if (await tryHwDecode(arrayBuffer, id, fileName, mime, quality, thumbMax)) {
        return;
    }

    // Fall back to WASM (libheif)
    let mod = null;
    let decoder = null;
    let images = null;
    let img = null;
    let rgba = null;

    try {
        mod = await ensureModule();

        decoder = new mod.HeifDecoder();
        images = decoder.decode(arrayBuffer);

        // Drop input ASAP (it was transferred, but still drop ref)
        // eslint-disable-next-line no-param-reassign
        // arrayBuffer = null; // can't reassign const, but ref dies after scope

        if (!images?.length) throw new Error('No images found in HEIF file');

        img = images[0];
        const width = img.get_width();
        const height = img.get_height();

        rgba = new Uint8ClampedArray(width * height * 4);

        await new Promise((resolve, reject) => {
            img.display({ data: rgba, width, height }, (result) => {
                if (!result || !result.data) return reject(new Error('Display/decode failed'));
                resolve();
            });
        });

        if (canEncodeInWorker() && mime) {
            // Encode in worker; optionally generate thumb
            const encodeP = encodeRgbaOffscreen(rgba, width, height, mime, Number(quality || 0.9));
            const thumbP = thumbMax > 0
                ? makeThumbOffscreen(rgba, width, height, Number(thumbMax))
                : Promise.resolve(null);
            const [outBuf, thumbBuf] = await Promise.all([encodeP, thumbP]);

            // Release big refs ASAP
            rgba = null;
            img = null;
            images = null;
            decoder = null;

            const transfer = [outBuf];
            if (thumbBuf) transfer.push(thumbBuf);

            self.postMessage(
                {
                    id,
                    ok: true,
                    fileName,
                    width,
                    height,
                    encoded: outBuf,
                    thumb: thumbBuf,
                    encodedMime: mime,
                    thumbMime: thumbBuf ? 'image/jpeg' : undefined
                },
                transfer
            );
            return;
        }

        // Fallback: old path (send rgba)
        const rgbaBuf = rgba.buffer;
        self.postMessage({ id, ok: true, fileName, width, height, rgba }, [rgbaBuf]);
    } catch (err) {
        self.postMessage({ id, ok: false, fileName, error: String(err?.message || err) });
    } finally {
        // Drop refs ASAP
        rgba = null;
        img = null;
        images = null;
        decoder = null;
        mod = null;
    }
};