// src/disk-stream.js
// File System Access API helpers for streaming converted images to disk.
// When available, blobs are written directly to a user-chosen folder and
// released from memory, keeping RAM flat regardless of batch size.

export function canSaveToDisk() {
    return typeof window !== 'undefined'
        && typeof window.showDirectoryPicker === 'function';
}

export async function pickOutputDirectory() {
    return await window.showDirectoryPicker({ mode: 'readwrite' });
}

// Scan the directory for existing filenames (fast — reads entries only, not content).
export async function scanExistingFiles(dirHandle) {
    const names = new Set();
    for await (const [name, handle] of dirHandle.entries()) {
        if (handle.kind === 'file') names.add(name.toLowerCase());
    }
    return names;
}

export async function saveItemToDisk(dirHandle, item) {
    if (!item.outBlob || !item.outName) return false;

    const fileHandle = await dirHandle.getFileHandle(item.outName, { create: true });
    const writable = await fileHandle.createWritable();
    await writable.write(item.outBlob);
    await writable.close();

    item.outSize = item.outBlob.size;
    item.fileHandle = fileHandle;
    item.outBlob = null;
    item.savedToDisk = true;

    return true;
}

export async function getItemBlob(item) {
    if (item.outBlob) return item.outBlob;
    if (item.fileHandle) {
        return await item.fileHandle.getFile();
    }
    return null;
}
