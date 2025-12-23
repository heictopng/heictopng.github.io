// convert-utils.js
export function replaceExt(name, ext) {
    return name.replace(/\.[^.]+$/, '') + '.' + ext;
}

export async function encodeRgbaToBlob(rgbaUint8, width, height, mime, quality) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    const imageData = new ImageData(new Uint8ClampedArray(rgbaUint8), width, height);
    ctx.putImageData(imageData, 0, 0);

    const blob = await new Promise((resolve, reject) => {
        const q = mime === 'image/jpeg' ? quality : undefined;
        canvas.toBlob(
            (b) => (b ? resolve(b) : reject(new Error('Canvas encoding failed'))),
            mime,
            q
        );
    });

    return blob;
}

export async function imageToBlob(img, mime, quality) {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const blob = await new Promise((resolve, reject) => {
        const q = mime === 'image/jpeg' ? quality : undefined;
        canvas.toBlob(
            b => (b ? resolve(b) : reject(new Error('Canvas encoding failed'))),
            mime,
            q
        );
    });

    return blob;
}

export async function detectDecodeMode(file) {
    const url = URL.createObjectURL(file);
    try {
        const img = new Image();
        img.src = url;
        await img.decode();
        return { mode: 'native', reason: 'Browser decoded the file natively (img.decode() succeeded).' };
    } catch (e) {
        return { mode: 'wasm', reason: `Native decode failed (img.decode() threw): ${String(e?.message || e)}` };
    } finally {
        URL.revokeObjectURL(url);
    }
}