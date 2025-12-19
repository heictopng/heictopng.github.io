// app.js
import { translateDocument } from './i18n.js';
import { createState } from './state.js';
import { initUI, render } from './ui.js';
import { createConverter } from './converter.js';
import { createDnD } from './dnd.js';
import { downloadAllAsZip } from './zip.js';

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
    await downloadAllAsZip({ state, render: rerender });
}

createDnD({
    els,
    state,
    render: rerender,
});

translateDocument();
els.updateQualityUI();
rerender();