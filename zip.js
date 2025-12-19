// zip.js
import { t } from './i18n.js';

async function loadJSZip() {
    // ESM build via jsDelivr. For true offline, vendor this file locally and import that instead.
    const mod = await import('https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm');
    return mod.default;
}

function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

function fallbackName(item, index) {
    const type = item.outBlob?.type || '';
    const ext = type === 'image/png' ? 'png' : (type === 'image/jpeg' ? 'jpg' : 'bin');
    return `converted_${String(index + 1).padStart(3, '0')}.${ext}`;
}

export async function downloadAllAsZip({ state, render }) {
    const converted = state.items.filter(x => x.outBlob);

    if (converted.length === 0) {
        alert(t('alert.noConverted'));
        return;
    }

    // Optional: show status on first item (minimal UI change)
    const first = converted[0];
    const prevStatus = first.status;
    first.status = t('status.zipping');
    render();

    try {
        const JSZip = await loadJSZip();
        const zip = new JSZip();

        for (let i = 0; i < converted.length; i++) {
            const item = converted[i];
            const name = item.outName || fallbackName(item, i);
            const buf = await item.outBlob.arrayBuffer();
            zip.file(name, buf);
        }

        const zipBlob = await zip.generateAsync({
            type: 'blob',
            compression: 'DEFLATE',
            compressionOptions: { level: 6 },
        });

        downloadBlob(zipBlob, 'converted_images.zip');
    } catch (err) {
        console.error(err);
        alert(t('alert.zipFailed'));
    } finally {
        // Restore status
        first.status = prevStatus;
        render();
    }
}