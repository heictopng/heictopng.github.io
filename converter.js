// converter.js
import { t } from './i18n.js';
import { encodeRgbaToBlob, imageToBlob, replaceExt, detectDecodeMode } from './convert-utils.js';
import { makeThumbFromRgba, makeThumbFromImage } from './thumbs.js';

let worker = null;

function ensureWorker() {
    if (worker) return worker;

    worker = new Worker('./worker.mjs', { type: 'module' });

    return worker;
}

export function createConverter({ els, state, render }) {
    const w = ensureWorker();

    w.onmessage = async (e) => {
        const msg = e.data;
        const item = state.items.find(x => x.id === msg.id);
        if (!item) return;

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
            const ext = mime === 'image/png' ? 'png' : 'jpg';
            item.outName = replaceExt((item.file?.name || item.originalName || ''), ext);
            if (item.file) {
                item.originalName = (item.file?.name || item.originalName || '');
                item.file = null;
            }
            item.outBlob = blob;
            item.status = t('status.ready', { fmt: ext.toUpperCase() });
        } catch (err) {
            item.status = t('status.error', { msg: String(err?.message || err) });
            item.error = String(err?.message || err);
        }

        render();
    };

    w.onerror = (e) => {
        console.error('Worker error:', e);
        alert(t('alert.wasmWorkerFailed'));
    };

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
                const ext = mime === 'image/png' ? 'png' : 'jpg';

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
            } catch (err) {
                state.decodeMode = 'wasm';
                item.status = t('status.nativeFailedSwitching');
                render();

                const arrayBuffer = await item.file.arrayBuffer();
                ensureWorker().postMessage({ id: item.id, fileName: (item.file?.name || item.originalName || ''), arrayBuffer }, [arrayBuffer]);
                return;
            } finally {
                URL.revokeObjectURL(url);
            }

            render();
            return;
        }

        item.status = t('status.wasmDecoding');
        render();

        const arrayBuffer = await item.file.arrayBuffer();
        ensureWorker().postMessage({ id: item.id, fileName: (item.file?.name || item.originalName || ''), arrayBuffer }, [arrayBuffer]);
    }

    return { convertItem };
}