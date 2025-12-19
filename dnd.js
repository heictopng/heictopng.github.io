// dnd.js
import { addFiles } from './state.js';

export function createDnD({ els, state, render }) {
    els.fileInput.addEventListener('change', () => {
        addFiles(state, els.fileInput.files);
        els.fileInput.value = '';
        render();
    });

    const dz = els.dropzone;

    const prevent = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    ['dragenter', 'dragover'].forEach(evt =>
        dz.addEventListener(evt, (e) => {
            prevent(e);
            dz.classList.add('dragover');
        })
    );

    ['dragleave', 'drop'].forEach(evt =>
        dz.addEventListener(evt, (e) => {
            prevent(e);
            dz.classList.remove('dragover');
        })
    );

    dz.addEventListener('drop', (e) => {
        addFiles(state, e.dataTransfer.files);
        render();
    });

    dz.addEventListener('click', () => els.fileInput.click());

    dz.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') els.fileInput.click();
    });

    window.addEventListener('app:rerender', render);
}