// worker.mjs
import libheif from 'https://cdn.jsdelivr.net/npm/libheif-js@1.19.8/libheif-wasm/libheif-bundle.mjs';

let modulePromise = null;

function ensureModule() {
    if (!modulePromise) {
        modulePromise = libheif({});
    }
    return modulePromise;
}

self.onmessage = async (e) => {
    const { id, arrayBuffer, fileName } = e.data;

    let decoder = null;
    let images = null;
    let img = null;
    let rgba = null;

    try {
        const mod = await ensureModule();

        decoder = new mod.HeifDecoder();
        images = decoder.decode(arrayBuffer);

        if (!images || images.length === 0) {
            throw new Error('No images found in HEIF file');
        }

        img = images[0];

        const width = img.get_width();
        const height = img.get_height();

        rgba = new Uint8ClampedArray(width * height * 4);

        await new Promise((resolve, reject) => {
            img.display({ data: rgba, width, height }, (result) => {
                if (!result || !result.data) {
                    reject(new Error('Display/decode failed'));
                    return;
                }
                resolve();
            });
        });

        // Drop references to libheif objects ASAP (helps GC / wasm heap pressure)
        images = null;
        img?.free?.();
        img = null;
        decoder?.free?.();
        decoder = null;

        // Transfer the underlying buffer to avoid copying
        self.postMessage({ id, ok: true, fileName, width, height, rgba }, [rgba.buffer]);

        // After transfer, rgba.buffer is detached on the worker side.
        rgba = null;
    } catch (err) {
        // Best-effort cleanup
        try { img?.free?.(); } catch {}
        try { decoder?.free?.(); } catch {}

        self.postMessage({
            id,
            ok: false,
            fileName,
            error: String(err?.message || err),
        });
    } finally {
        // Ensure references are dropped even on error
        decoder = null;
        images = null;
        img = null;
        rgba = null;
        // arrayBuffer will be released when no longer referenced by main thread either
    }
};