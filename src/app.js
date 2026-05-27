// src/app.js
import { t } from './internationalization/i18n.js';
import { translateDocument } from './internationalization/i18n.js';
import { createState, getGeneration } from './state.js';
import { initUI, render } from './ui.js';
import { createConverter } from './converter.js';
import { createDnD } from './dnd.js';
import { downloadAllAsZip } from './zip.js';
import { showZipOverlay, hideZipOverlay } from './ui.js';
import { canSaveToDisk, pickOutputDirectory, saveItemToDisk, scanExistingFiles } from './disk-stream.js';

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
            scanAndSkipExisting,
        });
    });
}

const converter = createConverter({
    els,
    state,
    render: rerender,
});

async function convertItem(item) {
    const gen = getGeneration();
    await converter.convertItem(item);

    // Items were cleared while this conversion was in-flight
    if (getGeneration() !== gen) return;

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

async function scanAndSkipExisting() {
    if (!state.outputDirHandle) return 0;

    const existing = await scanExistingFiles(state.outputDirHandle);

    const mime = document.getElementById('format').value;
    const ext = mime === 'image/png' ? 'png' : (mime === 'image/webp' ? 'webp' : 'jpg');

    let skipped = 0;
    for (const item of state.items) {
        if (item.outBlob || item.savedToDisk || item.error) continue;
        const predictedName = (item.outName)
            || ((item.file?.name || item.originalName || '').replace(/\.[^.]+$/, '') + '.' + ext);
        if (existing.has(predictedName.toLowerCase())) {
            item.savedToDisk = true;
            item.skippedExisting = true;
            item.outName = predictedName;
            try { item.fileHandle = await state.outputDirHandle.getFileHandle(predictedName); } catch {}
            item.status = t('status.skippedExisting');
            skipped++;
        }
    }
    if (skipped > 0) {
        console.log(`[scan] Skipped ${skipped} items already in destination`);
        rerender();
    }
    return skipped;
}

async function handleSaveToFolder() {
    try {
        const dirHandle = await pickOutputDirectory();
        state.outputDirHandle = dirHandle;

        await scanAndSkipExisting();

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

// When the page resumes after Win+L / OS sleep, re-render so the user
// sees updated statuses (errors, "Retry failed" button, etc.)
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') rerender();
});

translateDocument();
els.updateQualityUI();
rerender();