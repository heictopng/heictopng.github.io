// ui.js
import { t } from './i18n.js';
import { removeItem, clearAll } from './state.js';
import { runWithLimit, computeConcurrencyFromPct } from './workers/pool.js';

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
        concurrencyPct: document.getElementById('concurrencyPct'),
        concurrencyPctVal: document.getElementById('concurrencyPctVal'),
        concurrencyWarn: document.getElementById('concurrencyWarn'),
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

    return els;
}

export function render({ els, state, convertItem, downloadAllZip }) {
    els.list.innerHTML = '';
    for (const item of state.items) {
        els.list.appendChild(renderCard({ item, convertItem, state }));
    }
    setButtonsEnabled(els, state, convertItem, downloadAllZip);
    updateProgressUI(els, state);
}

function setButtonsEnabled(els, state, convertItem, downloadAllZip) {
    const hasItems = state.items.length > 0;
    const canConvert = state.items.some(x => !x.outBlob && !x.error);
    const hasConverted = state.items.some(x => x.outBlob);
    els.convertAll.disabled = !(hasItems && canConvert);
    els.clearAll.disabled = !hasItems;
    els.downloadZip.disabled = !hasConverted;

    if (!els._wired) {
        els._wired = true;

        els.format.addEventListener('change', () => {
            els.updateQualityUI();
            state.items.forEach(x => {
                x.outBlob = null;
                x.outName = null;
                x.error = null;
            });
            render({ els, state, convertItem, downloadAllZip });
        });

        els.quality.addEventListener('input', () => els.updateQualityUI());

        els.convertAll.addEventListener('click', async () => {
            const todo = state.items.filter(x => !x.outBlob && !x.error);
            const pct = Number(els.concurrencyPct?.value ?? 100);
            const limit = computeConcurrencyFromPct(pct);
            await runWithLimit(todo, limit, convertItem);
        });

        els.clearAll.addEventListener('click', () => {
            clearAll(state);
            render({ els, state, convertItem, downloadAllZip });
        });

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
    btnConvert.textContent = item.outBlob ? t('card.reconvert') : t('card.convert');
    btnConvert.disabled = item.status.startsWith('Decoding') || item.status.startsWith('Encoding') || !item.file || item.file === null;
    btnConvert.onclick = () => convertItem(item);

    const btnDownload = document.createElement('button');
    btnDownload.className = 'btn';
    btnDownload.textContent = t('card.download');
    btnDownload.disabled = !item.outBlob;
    btnDownload.onclick = () => downloadBlob(item.outBlob, item.outName);

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

function updateProgressUI(els, state) {
    const total = state.items.length;
    const converted = state.items.filter(x => x.outBlob).length;
    const errors = state.items.filter(x => x.error).length;
    const done = state.items.filter(x => x.outBlob || x.error).length;

    const ratio = total > 0 ? done / total : 0;

    if (els.progressBar) {
        els.progressBar.max = 1;
        els.progressBar.value = ratio;
        els.progressBar.setAttribute('aria-label', t('progress.aria'));
    }

    if (els.progressLabel) {
        els.progressLabel.textContent = total === 0
            ? ''
            : t('progress.label', { done, total, converted, errors });
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

export function hideZipOverlay(els) {
    if (!els.zipOverlay) return;

    els.zipOverlay.hidden = true;

    if (els.zipOverlayBar) {
        els.zipOverlayBar.value = 0;
    }

    if (els.zipOverlayLabel) {
        els.zipOverlayLabel.textContent = '';
    }
}