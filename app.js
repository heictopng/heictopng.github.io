// app.js
import { t, translateDocument } from './i18n.js';
import { createState } from './state.js';
import { initUI, render } from './ui.js';
import { createConverter } from './converter.js';
import { createDnD } from './dnd.js';

const els = initUI();
const state = createState();

const converter = createConverter({
    els,
    state,
    render: () => render({ els, state, convertItem }),
});

async function convertItem(item) {
    await converter.convertItem(item);
}

createDnD({
    els,
    state,
    render: () => render({ els, state, convertItem }),
});

translateDocument();
els.updateQualityUI();
render({ els, state, convertItem });