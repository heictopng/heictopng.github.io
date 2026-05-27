// ui.js
import { t } from './internationalization/i18n.js';
import { removeItem, clearAll } from './state.js';
import { runWithLimit, computeConcurrencyFromPct } from './workers/pool.js';
import { createVirtualScroller } from './virtual-scroll.js';

// --- Lazy thumbnail generation with LRU eviction ---
// Only ~40 cards are visible at once (virtual scrolling), so we cap cached
// thumb blob-URLs to avoid holding O(n) memory for 10 000+ images.
const THUMB_CACHE_MAX = 200;
const _thumbLru = [];
const _thumbPending = new Set();

function clearThumbCache() {
    for (const item of _thumbLru) {
        if (item.thumbUrl) {
            URL.revokeObjectURL(item.thumbUrl);
            item.thumbUrl = null;
        }
    }
    _thumbLru.length = 0;
    _thumbPending.clear();
}

function evictOldThumbs() {
    while (_thumbLru.length > THUMB_CACHE_MAX) {
        const old = _thumbLru.shift();
        if (old.thumbUrl) {
            URL.revokeObjectURL(old.thumbUrl);
            old.thumbUrl = null;
        }
    }
}

async function generateThumbUrl(item) {
    let source = item.outBlob;
    if (!source && item.fileHandle) source = await item.fileHandle.getFile();
    if (!source) return null;

    const bmp = await createImageBitmap(source);
    const maxDim = Math.max(bmp.width, bmp.height);
    const scale = Math.min(1, 150 / maxDim);
    const tw = Math.max(1, Math.round(bmp.width * scale));
    const th = Math.max(1, Math.round(bmp.height * scale));

    const canvas = new OffscreenCanvas(tw, th);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bmp, 0, 0, tw, th);
    bmp.close?.();

    const blob = await canvas.convertToBlob({ type: 'image/jpeg', quality: 0.6 });
    return URL.createObjectURL(blob);
}

function requestLazyThumb(item, thumbEl) {
    if (_thumbPending.has(item.id)) return;
    _thumbPending.add(item.id);

    generateThumbUrl(item).then(url => {
        _thumbPending.delete(item.id);
        if (!url) return;
        item.thumbUrl = url;
        // Track in LRU
        const idx = _thumbLru.indexOf(item);
        if (idx >= 0) _thumbLru.splice(idx, 1);
        _thumbLru.push(item);
        evictOldThumbs();

        if (thumbEl.isConnected) {
            thumbEl.textContent = '';
            const img = document.createElement('img');
            img.src = url;
            img.alt = item.originalName || '';
            thumbEl.appendChild(img);
        }
    }).catch(() => {
        _thumbPending.delete(item.id);
    });
}

export function initUI() {
    const els = {
        dropzone: document.getElementById('dropzone'),
        fileInput: document.getElementById('fileInput'),
        list: document.getElementById('list'),
        format: document.getElementById('format'),
        quality: document.getElementById('quality'),
        qualityVal: document.getElementById('qualityVal'),
        qualityWrap: document.getElementById('qualityWrap'),
        convertAll: document.getElementById('convertAll'),
        clearAll: document.getElementById('clearAll'),
        downloadZip: document.getElementById('downloadZip'),
        progressBar: document.getElementById('progressBar'),
        progressLabel: document.getElementById('progressLabel'),
        zipOverlay: document.getElementById('zipOverlay'),
        zipOverlayBar: document.getElementById('zipOverlayBar'),
        zipOverlayLabel: document.getElementById('zipOverlayLabel'),
        zipOverlayPartLabel: document.getElementById('zipOverlayPartLabel'),
        zipOverlayPartProgress: document.getElementById('zipOverlayPartProgress'),
        concurrencyPct: document.getElementById('concurrencyPct'),
        concurrencyPctVal: document.getElementById('concurrencyPctVal'),
        concurrencyWarn: document.getElementById('concurrencyWarn'),
        saveToFolder: document.getElementById('saveToFolder'),
        retryFailed: document.getElementById('retryFailed'),
        cancelBatch: document.getElementById('cancelBatch'),
    };

    function updateQualityUI() {
        const mime = els.format.value;
        const isJpeg = mime === 'image/jpeg';
        els.qualityWrap.style.display = isJpeg ? 'grid' : 'none';
        els.qualityVal.textContent = Number(els.quality.value).toFixed(2);
    }

    function updateConcurrencyUI() {
        if (!els.concurrencyPct) return;

        const pct = Number(els.concurrencyPct.value || 50);
        if (els.concurrencyPctVal) els.concurrencyPctVal.textContent = `${pct}%`;
        if (els.concurrencyWarn) els.concurrencyWarn.hidden = pct < 75;
    }

    els.updateQualityUI = updateQualityUI;
    els.updateConcurrencyUI = updateConcurrencyUI;
    els.updateQualityUI();
    els.updateConcurrencyUI();
    if (els.concurrencyPct) {
        els.concurrencyPct.addEventListener('input', els.updateConcurrencyUI);
        els.concurrencyPct.addEventListener('change', els.updateConcurrencyUI);
    }

    els.scroller = createVirtualScroller(els.list);

    return els;
}

// Single O(n) pass over items — used by both button state and progress bar.
function computeStats(items) {
    let canConvert = false;
    let hasConverted = false;
    let canRetry = false;
    let converted = 0;
    let errors = 0;
    let done = 0;
    let skipped = 0;

    for (let i = 0; i < items.length; i++) {
        const x = items[i];
        const isConverted = !!(x.outBlob || x.savedToDisk);
        const isError = !!x.error;

        if (isConverted) {
            hasConverted = true;
            if (x.skippedExisting) { skipped++; } else { converted++; }
        }
        if (isError) { errors++; if (x.file) canRetry = true; }
        if (isConverted || isError) done++;
        if (!isConverted && !isError) canConvert = true;
    }

    return { total: items.length, canConvert, hasConverted, canRetry, converted, errors, done, skipped };
}

export function render({ els, state, convertItem, downloadAllZip, handleSaveToFolder, scanAndSkipExisting }) {
    els.scroller.setItems(
        state.items,
        (item) => renderCard({ item, convertItem, state }),
    );
    const stats = computeStats(state.items);
    setButtonsEnabled(els, state, stats, convertItem, downloadAllZip, handleSaveToFolder, scanAndSkipExisting);
    updateProgressUI(els, stats);

    // Update save-to-folder button text when a directory is active
    if (els.saveToFolder && !els.saveToFolder.hidden) {
        if (state.outputDirHandle) {
            els.saveToFolder.textContent = `\u{1F4C1} ${state.outputDirHandle.name}`;
        } else {
            els.saveToFolder.textContent = t('buttons.saveToFolder');
        }
    }
}

function setButtonsEnabled(els, state, stats, convertItem, downloadAllZip, handleSaveToFolder, scanAndSkipExisting) {
    els.convertAll.disabled = !(stats.total > 0 && stats.canConvert);
    els.clearAll.disabled = stats.total === 0;
    els.downloadZip.disabled = !stats.hasConverted;

    if (els.retryFailed) {
        els.retryFailed.hidden = !stats.canRetry;
        els.retryFailed.disabled = !stats.canRetry;
    }

    if (!els._wired) {
        els._wired = true;

        els.format.addEventListener('change', () => {
            els.updateQualityUI();
            state.items.forEach(x => {
                x.outBlob = null;
                x.outName = null;
                x.error = null;
                x.savedToDisk = false;
                x.skippedExisting = false;
                x.fileHandle = null;
                x.outSize = 0;
                if (x.thumbUrl) { URL.revokeObjectURL(x.thumbUrl); x.thumbUrl = null; }
                if (x.originalFile) x.file = x.originalFile; // restore for reconversion
            });
            clearThumbCache();
            render({ els, state, convertItem, downloadAllZip, handleSaveToFolder, scanAndSkipExisting });
        });

        els.quality.addEventListener('input', () => els.updateQualityUI());

        let _batchAbort = null;

        els.convertAll.addEventListener('click', async () => {
            const pct = Number(els.concurrencyPct?.value ?? 100);
            const limit = computeConcurrencyFromPct(pct);
            _batchAbort = new AbortController();

            if (els.cancelBatch) { els.cancelBatch.hidden = false; els.convertAll.hidden = true; }

            try {
                // Scan destination folder and skip already-converted files
                if (scanAndSkipExisting) await scanAndSkipExisting();

                let todo = state.items.filter(x => !x.outBlob && !x.error && !x.savedToDisk);
                let prevRemaining = todo.length;

                while (todo.length > 0 && !_batchAbort.signal.aborted) {
                    await runWithLimit(todo, limit, convertItem, _batchAbort.signal);
                    todo = state.items.filter(x => !x.outBlob && !x.error && !x.savedToDisk);
                    if (todo.length >= prevRemaining) break;
                    prevRemaining = todo.length;
                    if (todo.length > 0) {
                        console.warn(`[app] ${todo.length} items still pending after batch, retrying...`);
                    }
                }
            } finally {
                _batchAbort = null;
                if (els.cancelBatch) { els.cancelBatch.hidden = true; els.convertAll.hidden = false; }
                render({ els, state, convertItem, downloadAllZip, handleSaveToFolder, scanAndSkipExisting });
            }
        });

        if (els.cancelBatch) {
            els.cancelBatch.addEventListener('click', () => {
                if (_batchAbort) _batchAbort.abort();
            });
        }

        els.clearAll.addEventListener('click', () => {
            clearAll(state);
            clearThumbCache();
            render({ els, state, convertItem, downloadAllZip, handleSaveToFolder, scanAndSkipExisting });
        });

        if (els.saveToFolder) {
            els.saveToFolder.addEventListener('click', () => handleSaveToFolder());
        }

        if (els.retryFailed) {
            els.retryFailed.addEventListener('click', async () => {
                const pct = Number(els.concurrencyPct?.value ?? 100);
                const limit = computeConcurrencyFromPct(pct);

                let failed = state.items.filter(x => x.error && x.file);
                let prevRemaining = failed.length;

                while (failed.length > 0) {
                    failed.forEach(x => {
                        x.error = null;
                        x.status = t('status.queued');
                    });
                    render({ els, state, convertItem, downloadAllZip, handleSaveToFolder, scanAndSkipExisting });
                    await runWithLimit(failed, limit, convertItem);
                    failed = state.items.filter(x => x.error && x.file);
                    if (failed.length >= prevRemaining) break; // no progress, stop
                    prevRemaining = failed.length;
                    if (failed.length > 0) {
                        console.warn(`[app] ${failed.length} items still failed after retry, retrying...`);
                    }
                }
            });
        }

        els.downloadZip.addEventListener('click', async () => {
            await downloadAllZip();
        });
    }
}

function renderCard({ item, convertItem, state }) {
    const card = document.createElement('div');
    card.className = 'card';

    const thumb = document.createElement('div');
    thumb.className = 'thumb';

    if (item.thumbUrl) {
        const img = document.createElement('img');
        img.src = item.thumbUrl;
        img.alt = (item.file?.name || item.originalName || '');
        thumb.appendChild(img);
    } else if (item.outBlob || item.savedToDisk) {
        thumb.textContent = '\u23F3';
        requestLazyThumb(item, thumb);
    } else {
        thumb.textContent = item.thumbError ? t('thumb.failed') : t('card.noPreview');
    }

    const meta = document.createElement('div');
    meta.className = 'meta';

    const filename = document.createElement('div');
    filename.className = 'filename';
    filename.textContent = (item.file?.name || item.originalName || '');

    const status = document.createElement('div');
    status.className = 'status';
    status.textContent = item.status;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const btnConvert = document.createElement('button');
    btnConvert.className = 'btn primary';
    btnConvert.textContent = (item.outBlob || item.savedToDisk) ? t('card.reconvert') : t('card.convert');
    btnConvert.disabled = item.converting || !item.file;
    btnConvert.onclick = () => convertItem(item);

    const btnDownload = document.createElement('button');
    btnDownload.className = 'btn';
    if (item.savedToDisk) {
        btnDownload.textContent = item.skippedExisting ? t('card.skipped') : t('card.saved');
        btnDownload.disabled = true;
    } else {
        btnDownload.textContent = t('card.download');
        btnDownload.disabled = !item.outBlob;
        btnDownload.onclick = () => downloadBlob(item.outBlob, item.outName);
    }

    const btnRemove = document.createElement('button');
    btnRemove.className = 'btn danger';
    btnRemove.textContent = t('card.remove');
    btnRemove.onclick = () => {
        removeItem(state, item.id);
        const ev = new CustomEvent('app:rerender');
        window.dispatchEvent(ev);
    };

    actions.append(btnConvert, btnDownload, btnRemove);
    meta.append(filename, status, actions);

    card.append(thumb, meta);
    return card;
}

function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'converted';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

function updateProgressUI(els, stats) {
    const { total, converted, errors, done, skipped } = stats;
    const ratio = total > 0 ? done / total : 0;

    if (els.progressBar) {
        els.progressBar.max = 1;
        els.progressBar.value = ratio;
        els.progressBar.setAttribute('aria-label', t('progress.aria'));
    }

    if (els.progressLabel) {
        if (total === 0) {
            els.progressLabel.textContent = '';
        } else if (skipped > 0) {
            els.progressLabel.textContent = t('progress.labelWithSkipped', {
                done, total, converted, errors, skipped
            });
        } else {
            els.progressLabel.textContent = t('progress.label', {
                done, total, converted, errors
            });
        }
    }
}

export function showZipOverlay(els) {
    if (!els.zipOverlay) return;

    els.zipOverlay.hidden = false;

    if (els.zipOverlayBar) {
        els.zipOverlayBar.max = 1;
        els.zipOverlayBar.value = 0;
    }

    if (els.zipOverlayLabel) {
        els.zipOverlayLabel.textContent = '0%';
    }

    if (els.zipOverlayPartLabel) {
        els.zipOverlayPartLabel.textContent = '';
    }
    if (els.zipOverlayPartProgress) {
        els.zipOverlayPartProgress.max = 1;
        els.zipOverlayPartProgress.value = 0;
    }
}

export function updateZipOverlayProgress(els, current, total) {
    if (!els.zipOverlay || els.zipOverlay.hidden) return;

    const safeTotal = Math.max(1, Number(total || 1));
    const safeCurrent = Math.min(safeTotal, Math.max(0, Number(current || 0)));
    const ratio = safeCurrent / safeTotal;

    const pct = Math.round(ratio * 100);

    if (els.zipOverlayBar) {
        els.zipOverlayBar.value = ratio;
    }

    if (els.zipOverlayLabel) {
        els.zipOverlayLabel.textContent = t('zip.overlay.progress', {
            pct,
            current: safeCurrent,
            total: safeTotal
        });
    }
}

export function updateZipOverlayPartProgress(els, partIndex, totalParts) {
    if (!els.zipOverlay || els.zipOverlay.hidden) return;

    const safeTotal = Math.max(1, Number(totalParts || 1));
    const safeIndex = Math.min(safeTotal, Math.max(1, Number(partIndex || 1)));
    const ratio = safeIndex / safeTotal;

    if (els.zipOverlayPartLabel) {
        els.zipOverlayPartLabel.textContent = t('zip.overlay.part', {
            current: safeIndex,
            total: safeTotal
        });
    }

    if (els.zipOverlayPartProgress) {
        els.zipOverlayPartProgress.value = ratio;
    }
}

export function hideZipOverlay(els) {
    if (!els.zipOverlay) return;

    els.zipOverlay.hidden = true;

    if (els.zipOverlayBar) {
        els.zipOverlayBar.value = 0;
    }

    if (els.zipOverlayLabel) {
        els.zipOverlayLabel.textContent = '';
    }

    if (els.zipOverlayPartLabel) {
        els.zipOverlayPartLabel.textContent = '';
    }

    if (els.zipOverlayPartProgress) {
        els.zipOverlayPartProgress.value = 0;
    }
}