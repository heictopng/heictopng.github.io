// state.js
import { t } from './i18n.js';

export function createState() {
    return {
        items: [],
        nextId: 1,
        decodeMode: 'unknown', // 'unknown' | 'native' | 'wasm'
    };
}

export function addFiles(state, fileList) {
    const files = Array.from(fileList || []);
    for (const file of files) {
        const id = state.nextId++;
        state.items.push({
            id,
            file,
            status: t('status.queued'),
            thumbUrl: null,
            outBlob: null,
            outName: null,
            error: null,
            thumbError: false,
        });
    }
}

export function removeItem(state, id) {
    const idx = state.items.findIndex(x => x.id === id);
    if (idx >= 0) {
        const it = state.items[idx];
        if (it.thumbUrl) URL.revokeObjectURL(it.thumbUrl);
        state.items.splice(idx, 1);
    }
}

export function clearAll(state) {
    state.items.forEach(x => x.thumbUrl && URL.revokeObjectURL(x.thumbUrl));
    state.items = [];
}