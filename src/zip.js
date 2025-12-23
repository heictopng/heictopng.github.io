// zip.js
import { t } from './internationalization/i18n.js';


// Constants
const PEAK_RAM_MULTIPLIER = 1.2;
const FREE_RAM_PERCENTAGE = 0.6;
const DEFAULT_MOBILE_RAM_PERCENTAGE = 0.15;
const DEFAULT_DESKTOP_RAM_PERCENTAGE = 0.25;
const DEFAULT_MOBILE_RAM_BYTES = 150 * 1024 * 1024;
const DEFAULT_DESKTOP_RAM_BYTES = 400 * 1024 * 1024;


// Streaming ZIP via fflate.
// For true offline, vendor this file locally and import that instead.
async function loadFflate() {
    return await import('https://cdn.jsdelivr.net/npm/fflate@0.8.2/esm/browser.js');
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
        return Math.max(0, Math.floor(remainingHeap * FREE_RAM_PERCENTAGE));
    }

    // Fallback: coarse device RAM estimate (not supported everywhere)
    const deviceGB =
        typeof navigator.deviceMemory === 'number' ? navigator.deviceMemory : null;
    if (deviceGB) {
        const deviceBytes = deviceGB * 1024 * 1024 * 1024;
        // Conservative slice for JS allocations
        const fraction = isMobile ? DEFAULT_MOBILE_RAM_PERCENTAGE : DEFAULT_DESKTOP_RAM_PERCENTAGE;
        return Math.floor(deviceBytes * fraction);
    }

    // Last resort defaults
    return isMobile ? DEFAULT_MOBILE_RAM_BYTES : DEFAULT_DESKTOP_RAM_BYTES;
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

    // With streaming, peak RAM is much lower, but keep conservative estimate.
    const estPeakRam = estimatePeakRamBytes(estTotalInput, PEAK_RAM_MULTIPLIER);

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

function computeItemsPerZip(est, peakMultiplier = PEAK_RAM_MULTIPLIER) {
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

function canStreamToDisk() {
    return typeof window !== 'undefined' && typeof window.showSaveFilePicker === 'function';
}

function canPickDirectory() {
    return typeof window !== 'undefined' && typeof window.showDirectoryPicker === 'function';
}

async function streamBlobIntoZipEntry(fflate, zip, name, blob, onChunkProgress) {
    const def = new fflate.ZipDeflate(name, { level: 6 });
    zip.add(def);

    const reader = blob.stream().getReader();
    try {
        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            def.push(value, false);
            if (onChunkProgress) onChunkProgress(value.byteLength);
        }
        def.push(new Uint8Array(0), true);
    } finally {
        try { reader.releaseLock(); } catch (_) { /* noop */ }
    }
}

async function createZipWritableStream(filename) {
    const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [
            {
                description: 'ZIP archive',
                accept: { 'application/zip': ['.zip'] },
            },
        ],
    });
    return await handle.createWritable();
}

async function createMultiZipWriter(totalParts) {
    // Best: one prompt, write multiple files into chosen directory (Chromium).
    if (totalParts > 1 && canPickDirectory()) {
        const dirHandle = await window.showDirectoryPicker();
        return {
            async open(filename) {
                const fileHandle = await dirHandle.getFileHandle(filename, { create: true });
                return await fileHandle.createWritable();
            },
            async closeAll() { },
        };
    }

    // Fallback: one save dialog per part (may be blocked by browsers, but this is the only
    // true stream-to-disk option without directory access).
    if (canStreamToDisk()) {
        return {
            async open(filename) {
                return await createZipWritableStream(filename);
            },
            async closeAll() { },
        };
    }

    // No disk streaming available.
    return {
        async open() { return null; },
        async closeAll() { },
    };
}

async function buildZipStream({ fflate, batch, els, writable }) {
    const totalBytes = batch.reduce((sum, item) => sum + (item.outBlob?.size || 0), 0);
    let processedBytes = 0;

    const onProgress = (delta) => {
        processedBytes += delta;
        const pct = totalBytes > 0 ? Math.round((processedBytes / totalBytes) * 100) : 0;
        if (els.zipOverlayBar) els.zipOverlayBar.value = pct / 100;
        if (els.zipOverlayLabel) els.zipOverlayLabel.textContent = `${pct}%`;
    };

    let zip = null;
    let chunks = null;

    try {
        if (!writable) {
            chunks = [];
        }

        zip = new fflate.Zip((err, data, final) => {
            if (err) throw err;
            if (data && data.length) {
                if (writable) {
                    writable.write(data);
                } else {
                    chunks.push(data);
                }
            }
            if (final) {
                // handled after zip.end()
            }
        });

        for (let i = 0; i < batch.length; i++) {
            const item = batch[i];
            const name = item.outName || fallbackName(item, i);
            await streamBlobIntoZipEntry(fflate, zip, name, item.outBlob, onProgress);
        }

        zip.end();

        // If writing to disk, nothing to return.
        if (writable) return null;

        return new Blob(chunks, { type: 'application/zip' });
    } finally {
        zip = null;
        chunks = null;
    }
}

async function buildAndDownloadZipStreaming({ fflate, batch, partIndex, totalParts, els, writer }) {
    const filename = totalParts > 1
        ? `converted_images_part${String(partIndex + 1).padStart(3, '0')}.zip`
        : 'converted_images.zip';

    let writable = null;

    try {
        writable = await writer.open(filename);

        const zipBlob = await buildZipStream({
            fflate,
            batch,
            els,
            writable,
        });

        if (writable) {
            await writable.close();
        } else if (zipBlob) {
            downloadBlob(zipBlob, filename);
        }
    } finally {
        try {
            if (writable) await writable.abort();
        } catch (_) { /* noop */ }

        writable = null;
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
    const itemsPerZip = computeItemsPerZip(est, 1.5);
    const batches = chunkArray(converted, itemsPerZip);

    // Optional: show status on first item (minimal UI change)
    const first = converted[0];
    const prevStatus = first.status;
    first.status = t('status.zipping');
    render();

    let writer = null;

    try {
        const fflate = await loadFflate();
        writer = await createMultiZipWriter(batches.length);

        for (let partIndex = 0; partIndex < batches.length; partIndex++) {
            const batch = batches[partIndex];

            if (els.zipOverlayPartLabel) {
                els.zipOverlayPartLabel.textContent = `${partIndex + 1}/${batches.length}`;
            }
            if (els.zipOverlayPartProgress) {
                els.zipOverlayPartProgress.value = (partIndex + 1) / batches.length;
            }

            await buildAndDownloadZipStreaming({
                fflate,
                batch,
                partIndex,
                totalParts: batches.length,
                els,
                writer,
            });

            if (els.zipOverlayBar) els.zipOverlayBar.value = 0;
            if (els.zipOverlayLabel) els.zipOverlayLabel.textContent = '';
        };
    } catch (err) {
        console.error(err);
        alert(t('alert.zipFailed'));
    } finally {
        try {
            if (writer) await writer.closeAll();
        } catch (_) { /* noop */ }

        writer = null;
        first.status = prevStatus;
        render();
    }
}