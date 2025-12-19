// ui.js
import { t } from './i18n.js';
import { removeItem, clearAll } from './state.js';

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
    };

    function updateQualityUI() {
        const mime = els.format.value;
        const isJpeg = mime === 'image/jpeg';
        els.qualityWrap.style.display = isJpeg ? 'grid' : 'none';
        els.qualityVal.textContent = Number(els.quality.value).toFixed(2);
    }

    els.updateQualityUI = updateQualityUI;

    return els;
}

export function render({ els, state, convertItem, downloadAllZip }) {
    els.list.innerHTML = '';
    for (const item of state.items) {
        els.list.appendChild(renderCard({ item, convertItem, state }));
    }
    setButtonsEnabled(els, state, convertItem, downloadAllZip);
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
            render({ els, state, convertItem });
        });

        els.quality.addEventListener('input', () => els.updateQualityUI());

        els.convertAll.addEventListener('click', async () => {
            for (const item of state.items) {
                if (!item.outBlob && !item.error) {
                    await convertItem(item);
                }
            }
        });

        els.clearAll.addEventListener('click', () => {
            clearAll(state);
            render({ els, state, convertItem });
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
        img.alt = item.file.name;
        thumb.appendChild(img);
    } else {
        thumb.textContent = item.thumbError ? t('thumb.failed') : t('card.noPreview');
    }

    const meta = document.createElement('div');
    meta.className = 'meta';

    const filename = document.createElement('div');
    filename.className = 'filename';
    filename.textContent = item.file.name;

    const status = document.createElement('div');
    status.className = 'status';
    status.textContent = item.status;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const btnConvert = document.createElement('button');
    btnConvert.className = 'btn primary';
    btnConvert.textContent = item.outBlob ? t('card.reconvert') : t('card.convert');
    btnConvert.disabled = item.status.startsWith('Decoding') || item.status.startsWith('Encoding');
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
        // Caller will re-render
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
