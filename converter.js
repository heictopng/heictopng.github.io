// converter.js
import { t } from './i18n.js';
import { encodeRgbaToBlob, imageToBlob, replaceExt, detectDecodeMode } from './convert-utils.js';
import { makeThumbFromRgba, makeThumbFromImage } from './thumbs.js';
import { createWorkerPool } from './workers/pool.js';


export function createConverter({ els, state, render }) {
    const pool = createWorkerPool('./workers/worker.mjs', { concurrencyPct: Number(els.concurrencyPct?.value ?? 100) });

    async function handleDecodedMessage({ msg, item }) {
        if (!msg.ok) {
            item.status = t('status.error', { msg: msg.error });
            item.error = msg.error;
            render();
            return;
        }

        item.status = t('status.decodedEncoding', { width: msg.width, height: msg.height });
        render();

        try {
            const mime = els.format.value;
            const quality = Number(els.quality.value);

            const blob = await encodeRgbaToBlob(msg.rgba, msg.width, msg.height, mime, quality);

            try {
                const thumbBlob = await makeThumbFromRgba(msg.rgba, msg.width, msg.height);
                msg.rgba = null;
                item.thumbError = false;

                if (item.thumbUrl) URL.revokeObjectURL(item.thumbUrl);
                item.thumbUrl = URL.createObjectURL(thumbBlob);
            } catch {
                msg.rgba = null;
                item.thumbError = true;

                if (item.thumbUrl) URL.revokeObjectURL(item.thumbUrl);
                item.thumbUrl = null;
            }

            const ext = mime === 'image/png' ? 'png' : (mime === 'image/webp' ? 'webp' : 'jpg');

            item.outName = replaceExt((item.file?.name || item.originalName || ''), ext);

            if (item.file) {
                item.originalName = item.file.name || item.originalName || '';
                item.file = null;
            }

            item.outBlob = blob;
            item.status = t('status.ready', { fmt: ext.toUpperCase() });
        } catch (err) {
            item.status = t('status.error', { msg: String(err?.message || err) });
            item.error = String(err?.message || err);
        }

        render();
    }

    async function decodeWithWasm(item) {
        const arrayBuffer = await item.file.arrayBuffer();

        try {
            const mime = els.format.value;
            const quality = Number(els.quality.value);

            const msg = await pool.run({
                id: item.id,
                payload: {
                    id: item.id,
                    fileName: (item.file?.name || item.originalName || ''),
                    arrayBuffer,
                    mime,
                    quality,
                    thumbMax: 300
                },
                transfer: [arrayBuffer]
            });

            // Error
            if (!msg.ok) {
                item.status = t('status.error', { msg: msg.error });
                item.error = msg.error;
                render();
                return;
            }

            // --- NEW: worker already encoded + thumb ---
            if (msg.encoded && msg.thumb) {
                const outBlob = new Blob([msg.encoded], { type: msg.encodedMime || mime });
                const thumbBlob = new Blob([msg.thumb], { type: msg.thumbMime || 'image/jpeg' });

                // Release large buffers ASAP
                msg.encoded = null;
                msg.thumb = null;

                const ext = mime === 'image/png' ? 'png' : (mime === 'image/webp' ? 'webp' : 'jpg');
                item.outName = replaceExt((item.file?.name || item.originalName || ''), ext);

                if (item.thumbUrl) URL.revokeObjectURL(item.thumbUrl);
                item.thumbUrl = URL.createObjectURL(thumbBlob);
                item.thumbError = false;

                item.outBlob = outBlob;
                item.status = t('status.ready', { fmt: ext.toUpperCase() });

                // Drop original file to reduce RAM
                if (item.file) {
                    item.originalName = item.file.name || item.originalName || '';
                    item.file = null;
                }

                render();
                return;
            }

            // --- Fallback: old rgba path (main-thread encode) ---
            await handleDecodedMessage({ msg, item });
        } catch (err) {
            console.error('Worker error:', err);
            item.status = t('status.error', { msg: String(err?.message || err) });
            item.error = String(err?.message || err);
            render();
            alert(t('alert.wasmWorkerFailed'));
        }
    }

    async function convertItem(item) {
        item.status = t('status.preparing');
        item.error = null;
        item.outBlob = null;
        item.outName = null;
        item.thumbError = false;
        render();

        const mime = els.format.value;
        const quality = Number(els.quality.value);

        if (state.decodeMode === 'unknown') {
            item.status = t('status.checkingSupport');
            render();

            const result = await detectDecodeMode(item.file);
            state.decodeMode = result.mode;
        }

        if (state.decodeMode === 'native') {
            item.status = t('status.nativeDecodingEncoding');
            render();

            const url = URL.createObjectURL(item.file);

            try {
                const img = new Image();
                img.src = url;
                await img.decode();

                const blob = await imageToBlob(img, mime, quality);
                const ext = mime === 'image/png' ? 'png' : (mime === 'image/webp' ? 'webp' : 'jpg');

                item.outBlob = blob;
                item.outName = replaceExt((item.file?.name || item.originalName || ''), ext);
                item.status = t('status.ready', { fmt: ext.toUpperCase() });

                try {
                    const thumbBlob = await makeThumbFromImage(img);
                    item.thumbError = false;

                    if (item.thumbUrl) URL.revokeObjectURL(item.thumbUrl);
                    item.thumbUrl = URL.createObjectURL(thumbBlob);
                } catch {
                    item.thumbError = true;

                    if (item.thumbUrl) URL.revokeObjectURL(item.thumbUrl);
                    item.thumbUrl = null;
                }

                // Reduce retained RAM
                if (item.file) {
                    item.originalName = item.file.name || item.originalName || '';
                    item.file = null;
                }
            } catch (err) {
                // If native fails, permanently switch to WASM
                state.decodeMode = 'wasm';
                item.status = t('status.nativeFailedSwitching');
                render();

                URL.revokeObjectURL(url);
                await decodeWithWasm(item);
                return;
            } finally {
                URL.revokeObjectURL(url);
            }

            render();
            return;
        }

        item.status = t('status.wasmDecoding');
        render();

        await decodeWithWasm(item);
    }

    return { convertItem };
}