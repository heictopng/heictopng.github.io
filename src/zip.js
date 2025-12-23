// zip.js
import { t } from './internationalization/i18n.js';

// ESM build via jsDelivr. For true offline, vendor this file locally and import that instead.
async function loadJSZip() {
    const mod = await import('https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm');
    return mod.default;
}

function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

function fallbackName(item, index) {
    const type = item.outBlob?.type || '';
    const ext = type === 'image/png' ? 'png' : (type === 'image/jpeg' ? 'jpg' : (type === 'image/webp' ? 'webp' : 'bin'));
    return `converted_${String(index + 1).padStart(3, '0')}.${ext}`;
}

// ---------- Estimation helpers ----------

function sampleMeanSize(blobs, sampleCount = 3) {
    const n = blobs.length;
    const k = Math.min(sampleCount, n);
    if (k === 0) return { mean: 0, sampled: [] };

    const picked = new Set();
    while (picked.size < k) picked.add(Math.floor(Math.random() * n));

    const sampled = [...picked].map((i) => blobs[i]?.size || 0);
    const mean = sampled.reduce((a, b) => a + b, 0) / k;

    return { mean, sampled };
}

function estimateTotalBytesFromMean(meanBytes, count) {
    return Math.round(meanBytes * count);
}

function estimatePeakRamBytes(totalInputBytes, multiplier = 3.0) {
    return Math.ceil(totalInputBytes * multiplier);
}

function estimateUsableRamBytes() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    // Best signal (Chrome/Chromium): JS heap stats
    const pm = performance && performance.memory ? performance.memory : null;
    if (
        pm &&
        typeof pm.jsHeapSizeLimit === 'number' &&
        typeof pm.usedJSHeapSize === 'number'
    ) {
        const remainingHeap = pm.jsHeapSizeLimit - pm.usedJSHeapSize;
        // Safety margin: only use 60% of remaining heap
        return Math.max(0, Math.floor(remainingHeap * 0.6));
    }

    // Fallback: coarse device RAM estimate (not supported everywhere)
    const deviceGB =
        typeof navigator.deviceMemory === 'number' ? navigator.deviceMemory : null;
    if (deviceGB) {
        const deviceBytes = deviceGB * 1024 * 1024 * 1024;
        // Conservative slice for JS allocations
        const fraction = isMobile ? 0.08 : 0.15;
        return Math.floor(deviceBytes * fraction);
    }

    // Last resort defaults
    return isMobile ? 150 * 1024 * 1024 : 400 * 1024 * 1024;
}

function formatBytes(bytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let v = bytes;
    let i = 0;
    while (v >= 1024 && i < units.length - 1) {
        v /= 1024;
        i++;
    }
    return `${v.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

function getZipSizeEstimate(converted) {
    const blobs = converted.map((x) => x.outBlob).filter(Boolean);
    const { mean, sampled } = sampleMeanSize(blobs, 3);
    const estTotalInput = estimateTotalBytesFromMean(mean, blobs.length);

    // JSZip is memory-hungry: input buffers + internal buffers + output blob
    const estPeakRam = estimatePeakRamBytes(estTotalInput, 3.0);

    const usableRam = estimateUsableRamBytes();

    return {
        sampled,
        meanBytes: mean,
        count: blobs.length,
        estTotalInputBytes: estTotalInput,
        estPeakRamBytes: estPeakRam,
        usableRamBytes: usableRam,
    };
}

// ---------- Split + cleanup helpers ----------

function computeItemsPerZip(est, peakMultiplier = 3.0) {
    const mean = est.meanBytes || 0;
    if (mean <= 0) return 1;

    // Keep a bit of headroom even inside "usable" budget
    const budgetBytes = Math.floor(est.usableRamBytes * 0.9);
    const maxTotalInputBytesPerZip = Math.floor(budgetBytes / peakMultiplier);

    const items = Math.max(1, Math.floor(maxTotalInputBytesPerZip / mean));
    return items;
}

function chunkArray(arr, chunkSize) {
    const out = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        out.push(arr.slice(i, i + chunkSize));
    }
    return out;
}

async function yieldForGC() {
    // Give the event loop a chance to run so the engine can reclaim memory.
    await new Promise((r) => setTimeout(r, 0));
    await new Promise((r) => requestAnimationFrame(() => r()));
    if (typeof requestIdleCallback === 'function') {
        await new Promise((r) => requestIdleCallback(() => r(), { timeout: 250 }));
    }
    // In some dev builds / flags, this can exist; harmless otherwise.
    if (typeof window !== 'undefined' && typeof window.gc === 'function') {
        try { window.gc(); } catch (_) { /* noop */ }
    }
}

async function buildAndDownloadZip({ JSZip, batch, partIndex, totalParts, els }) {
    let zip = null;
    let zipBlob = null;

    try {
        zip = new JSZip();

        for (let i = 0; i < batch.length; i++) {
            const item = batch[i];
            const name = item.outName || fallbackName(item, i);
            let buf = await item.outBlob.arrayBuffer();
            zip.file(name, buf);
            // Drop our reference ASAP (JSZip keeps what it needs internally)
            buf = null;
        }

        zipBlob = await zip.generateAsync(
            {
                type: 'blob',
                compression: 'DEFLATE',
            }, (meta) => {
                const pct = Math.round(meta.percent || 0);
                if (els.zipOverlayBar) els.zipOverlayBar.value = pct / 100;
                if (els.zipOverlayLabel) {
                    els.zipOverlayLabel.textContent = `${pct}%`;
                }
            }
        );

        const filename = totalParts > 1
            ? `converted_images_part${String(partIndex + 1).padStart(3, '0')}.zip`
            : 'converted_images.zip';

        downloadBlob(zipBlob, filename);
    } finally {
        // Explicitly drop references so GC can reclaim memory sooner.
        zipBlob = null;
        zip = null;
        await yieldForGC();
    }
}

// ---------- Main export ----------

export async function downloadAllAsZip({ state, render, els }) {
    const converted = state.items.filter((x) => x.outBlob);

    if (converted.length === 0) {
        alert(t('alert.noConverted'));
        return;
    }

    // --- Preflight: estimate size & memory budget ---
    const est = getZipSizeEstimate(converted);

    console.info('[zip] sampled sizes:', est.sampled.map(formatBytes));
    console.info('[zip] mean size:', formatBytes(est.meanBytes));
    console.info('[zip] count:', est.count);
    console.info('[zip] est total input:', formatBytes(est.estTotalInputBytes));
    console.info('[zip] est peak RAM:', formatBytes(est.estPeakRamBytes));
    console.info('[zip] usable RAM budget:', formatBytes(est.usableRamBytes));

    // Decide split size based on estimates
    const itemsPerZip = computeItemsPerZip(est, 3.0);
    const batches = chunkArray(converted, itemsPerZip);

    // Optional: show status on first item (minimal UI change)
    const first = converted[0];
    const prevStatus = first.status;
    first.status = t('status.zipping');
    render();

    try {
        const JSZip = await loadJSZip();

        for (let partIndex = 0; partIndex < batches.length; partIndex++) {
            const batch = batches[partIndex];
            await buildAndDownloadZip({
                JSZip,
                batch,
                partIndex,
                totalParts: batches.length,
                els,
            });

            if (els.zipOverlayBar) els.zipOverlayBar.value = 0;
            if (els.zipOverlayLabel) els.zipOverlayLabel.textContent = '';
        };
    } catch (err) {
        console.error(err);
        alert(t('alert.zipFailed'));
    } finally {
        // Restore status
        first.status = prevStatus;
        render();
    }
}