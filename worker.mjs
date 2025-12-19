import libheif from 'https://cdn.jsdelivr.net/npm/libheif-js@1.19.8/libheif-wasm/libheif-bundle.mjs';

let modulePromise = null;

// Create the wasm module once
function ensureModule() {
  if (!modulePromise) {
    modulePromise = libheif({
      // The .mjs bundle will fetch its matching wasm from the same folder on jsDelivr
      // so we usually don't need locateFile here.
    });
  }
  return modulePromise;
}

self.onmessage = async (e) => {
  const { id, arrayBuffer, fileName } = e.data;

  try {
    const mod = await ensureModule();

    const decoder = new mod.HeifDecoder();
    const images = decoder.decode(arrayBuffer);
    if (!images?.length) throw new Error('No images found in HEIF file');

    const img = images[0];
    const width = img.get_width();
    const height = img.get_height();

    const rgba = new Uint8ClampedArray(width * height * 4);

    // IMPORTANT: this build’s display() is callback-based (async)
    await new Promise((resolve, reject) => {
      img.display({ data: rgba, width, height }, (result) => {
        if (!result || !result.data) return reject(new Error('Display/decode failed'));
        resolve();
      });
    });

    self.postMessage({ id, ok: true, fileName, width, height, rgba }, [rgba.buffer]);
  } catch (err) {
    self.postMessage({ id, ok: false, fileName, error: String(err?.message || err) });
  }
};
