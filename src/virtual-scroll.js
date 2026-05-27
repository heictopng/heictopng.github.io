// src/virtual-scroll.js
// Virtual scroller for the image card grid.
// Only renders cards visible in the viewport + a buffer, reducing DOM nodes
// from O(n) to O(visible) regardless of how many images are queued.

const BUFFER_ROWS = 3;
const MIN_COL_WIDTH = 230; // must match CSS: repeat(auto-fill, minmax(230px, 1fr))

export function createVirtualScroller(listEl) {
    let items = [];
    let renderItemFn = null;
    let rowHeight = 0;
    let cols = 1;
    let gap = 12;
    let measured = false;
    let rafId = 0;
    let prevStartIdx = -1;
    let prevEndIdx = -1;

    function measureGrid() {
        const style = getComputedStyle(listEl);

        // Row gap
        let rg = parseFloat(style.rowGap);
        if (!Number.isFinite(rg)) rg = parseFloat(style.gap);
        if (!Number.isFinite(rg)) rg = 12;
        gap = rg;

        // Column count from resolved grid tracks (most reliable when cards exist)
        const colDef = style.gridTemplateColumns;
        if (colDef && colDef !== 'none') {
            const tracks = colDef.trim().split(/\s+/);
            if (tracks.length > 0 && tracks[0] !== 'none') {
                cols = tracks.length;
                return;
            }
        }

        // Fallback: calculate from container width and minmax
        let cg = parseFloat(style.columnGap);
        if (!Number.isFinite(cg)) cg = gap;
        const width = listEl.clientWidth;
        cols = Math.max(1, Math.floor((width + cg) / (MIN_COL_WIDTH + cg)));
    }

    function totalRows() {
        return Math.ceil(items.length / cols);
    }

    function getVisibleRange() {
        if (!measured || rowHeight <= 0) {
            return { startIdx: 0, endIdx: items.length };
        }

        const effectiveRowH = rowHeight + gap;
        const listRect = listEl.getBoundingClientRect();
        const padTop = parseFloat(listEl.style.paddingTop) || 0;

        // How far into the virtual content we've scrolled
        const scrollIntoList = padTop - listRect.top;
        const viewportH = window.innerHeight;

        const firstRow = Math.max(0, Math.floor(scrollIntoList / effectiveRowH) - BUFFER_ROWS);
        const rowsVisible = Math.ceil(viewportH / effectiveRowH) + 2 * BUFFER_ROWS;
        const lastRow = Math.min(totalRows(), firstRow + rowsVisible);

        return {
            startIdx: firstRow * cols,
            endIdx: Math.min(items.length, lastRow * cols),
        };
    }

    function renderVisible(force) {
        if (!items.length || !renderItemFn) {
            listEl.innerHTML = '';
            listEl.style.paddingTop = '';
            listEl.style.paddingBottom = '';
            prevStartIdx = -1;
            prevEndIdx = -1;
            return;
        }

        // First render: create probe cards to measure row height
        if (!measured) {
            listEl.style.paddingTop = '';
            listEl.style.paddingBottom = '';
            listEl.innerHTML = '';

            const probeCount = Math.min(items.length, Math.max(cols, 1));
            for (let i = 0; i < probeCount; i++) {
                listEl.appendChild(renderItemFn(items[i]));
            }

            measureGrid();

            const card = listEl.querySelector('.card');
            if (!card) return;
            rowHeight = card.offsetHeight;
            measured = true;
            // Fall through to do proper virtual render
        } else {
            measureGrid();
        }

        const { startIdx, endIdx } = getVisibleRange();

        if (!force && startIdx === prevStartIdx && endIdx === prevEndIdx) {
            // Same visible range — rebuild only the visible cards (fast, ~20-40 cards)
            const frag = document.createDocumentFragment();
            for (let i = startIdx; i < endIdx; i++) {
                frag.appendChild(renderItemFn(items[i]));
            }
            listEl.innerHTML = '';
            listEl.appendChild(frag);
            return;
        }
        prevStartIdx = startIdx;
        prevEndIdx = endIdx;

        // Build visible cards in a fragment for a single reflow
        const frag = document.createDocumentFragment();
        for (let i = startIdx; i < endIdx; i++) {
            frag.appendChild(renderItemFn(items[i]));
        }
        listEl.innerHTML = '';
        listEl.appendChild(frag);

        // Padding above and below fakes the scroll height for off-screen rows
        const effectiveRowH = rowHeight + gap;
        const startRow = Math.floor(startIdx / cols);
        const endRow = Math.ceil(endIdx / cols);

        listEl.style.paddingTop = (startRow * effectiveRowH) + 'px';
        listEl.style.paddingBottom = (Math.max(0, totalRows() - endRow) * effectiveRowH) + 'px';
    }

    let prevItemCount = 0;

    function setItems(newItems, renderFn) {
        const changed = newItems !== items || newItems.length !== prevItemCount;
        items = newItems;
        prevItemCount = items.length;
        if (renderFn) renderItemFn = renderFn;

        if (!items.length) {
            measured = false;
            rowHeight = 0;
        }

        if (changed) {
            prevStartIdx = -1;
            prevEndIdx = -1;
        }
        renderVisible(changed);
    }

    function scheduleUpdate() {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
            rafId = 0;
            renderVisible(false);
        });
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', () => {
        measured = false;
        prevStartIdx = -1;
        prevEndIdx = -1;
        scheduleUpdate();
    }, { passive: true });

    return { setItems, scheduleUpdate };
}
