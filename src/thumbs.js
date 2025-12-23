// thumbs.js
const THUMB_MAX = 300;

export async function makeThumbFromRgba(rgbaUint8, width, height, maxSize = THUMB_MAX) {
    const maxDim = Math.max(width, height);
    const scale = Math.min(1, maxSize / maxDim);
    const tw = Math.max(1, Math.round(width * scale));
    const th = Math.max(1, Math.round(height * scale));

    const imageData = new ImageData(new Uint8ClampedArray(rgbaUint8), width, height);
    const bmp = await createImageBitmap(imageData);

    const canvas = document.createElement('canvas');
    canvas.width = tw;
    canvas.height = th;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(bmp, 0, 0, tw, th);
    bmp.close?.();

    const blob = await new Promise((resolve, reject) => {
        canvas.toBlob(
            b => (b ? resolve(b) : reject(new Error('Thumbnail encoding failed'))),
            'image/jpeg',
            0.8
        );
    });

    return blob;
}

export async function makeThumbFromImage(img, maxSize = THUMB_MAX) {
    const w = img.naturalWidth || img.width;
    const h = img.naturalHeight || img.height;

    const maxDim = Math.max(w, h);
    const scale = Math.min(1, maxSize / maxDim);
    const tw = Math.max(1, Math.round(w * scale));
    const th = Math.max(1, Math.round(h * scale));

    const canvas = document.createElement('canvas');
    canvas.width = tw;
    canvas.height = th;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, tw, th);

    const blob = await new Promise((resolve, reject) => {
        canvas.toBlob(
            b => (b ? resolve(b) : reject(new Error('Thumbnail encoding failed'))),
            'image/jpeg',
            0.8
        );
    });

    return blob;
}