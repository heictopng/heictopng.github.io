// src/app.js
import { t } from './internationalization/i18n.js';
import { translateDocument } from './internationalization/i18n.js';
import { createState } from './state.js';
import { initUI, render } from './ui.js';
import { createConverter } from './converter.js';
import { createDnD } from './dnd.js';
import { downloadAllAsZip } from './zip.js';
import { showZipOverlay, hideZipOverlay } from './ui.js';
import { canSaveToDisk, pickOutputDirectory, saveItemToDisk } from './disk-stream.js';

const els = initUI();
const state = createState();

// Debounce renders via rAF so that the 4-5 status updates per item
// during conversion coalesce into a single DOM update per frame.
let _renderRafId = 0;
function rerender() {
    if (_renderRafId) return;
    _renderRafId = requestAnimationFrame(() => {
        _renderRafId = 0;
        render({
            els,
            state,
            convertItem,
            downloadAllZip,
            handleSaveToFolder,
        });
    });
}

const converter = createConverter({
    els,
    state,
    render: rerender,
});

async function convertItem(item) {
    await converter.convertItem(item);

    // Auto-save to disk if an output directory is set
    if (state.outputDirHandle && item.outBlob) {
        try {
            await saveItemToDisk(state.outputDirHandle, item);
            item.status = t('status.savedToDisk');
        } catch (err) {
            console.error('Failed to save to disk:', err);
            // Keep the blob in memory as fallback
        }
        rerender();
    }
}

async function handleSaveToFolder() {
    try {
        const dirHandle = await pickOutputDirectory();
        state.outputDirHandle = dirHandle;

        // Save any already-converted items still in memory
        for (const item of state.items) {
            if (item.outBlob) {
                try {
                    await saveItemToDisk(dirHandle, item);
                    item.status = t('status.savedToDisk');
                } catch (err) {
                    console.error('Failed to save to disk:', err);
                }
            }
        }
        rerender();
    } catch (err) {
        if (err.name !== 'AbortError') {
            console.error('Directory picker failed:', err);
        }
    }
}

async function downloadAllZip() {
    showZipOverlay(els);
    await downloadAllAsZip({ state, render: rerender, els });
    hideZipOverlay(els);
}

createDnD({
    els,
    state,
    render: rerender,
});

// Show save-to-folder button when File System Access API is available
if (canSaveToDisk() && els.saveToFolder) {
    els.saveToFolder.hidden = false;
}

translateDocument();
els.updateQualityUI();
rerender();