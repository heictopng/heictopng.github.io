// src/app.js
import { translateDocument } from './internationalization/i18n.js';
import { createState } from './state.js';
import { initUI, render } from './ui.js';
import { createConverter } from './converter.js';
import { createDnD } from './dnd.js';
import { downloadAllAsZip } from './zip.js';
import { showZipOverlay, hideZipOverlay } from './ui.js';

const els = initUI();
const state = createState();

function rerender() {
    render({
        els,
        state,
        convertItem,
        downloadAllZip,
    });
}

const converter = createConverter({
    els,
    state,
    render: rerender,
});

async function convertItem(item) {
    await converter.convertItem(item);
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

translateDocument();
els.updateQualityUI();
rerender();