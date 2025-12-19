// worker.js
let libheifModule = null;
let ready = false;

async function ensureDecoder() {
  if (ready) return;

  // Only load ONCE
  importScripts('./vendor/libheif.js');

  if (typeof self.libheif !== 'function') {
    throw new Error('self.libheif is not a function. Wrong libheif.js loaded or path is wrong.');
  }

  // Create module (may be a Promise or a plain object)
  let mod = self.libheif({
    locateFile: (path) => './vendor/' + path, // must find libheif.wasm
  });

  // If it's a Promise, await it
  if (mod && typeof mod.then === 'function') {
    mod = await mod;
  }

  // If it exposes a "ready" Promise, await it
  if (mod && mod.ready && typeof mod.ready.then === 'function') {
    await mod.ready;
  }

  // Otherwise wait for onRuntimeInitialized if needed
  if (mod && !mod.calledRun) {
    await new Promise((resolve) => {
      const prev = mod.onRuntimeInitialized;
      mod.onRuntimeInitialized = () => {
        try { prev && prev(); } finally { resolve(); }
      };
    });
  }

  libheifModule = mod;
  console.log('libheif loaded:', {
    hasHeifDecoder: typeof libheifModule.HeifDecoder,
    calledRun: libheifModule.calledRun,
    });
  ready = true;
}

self.onmessage = async (e) => {
    console.log('Worker received message:', e);
  const { id, arrayBuffer, fileName } = e.data;

  try {
    await ensureDecoder();

    const decoder = new libheifModule.HeifDecoder();
    const images = decoder.decode(arrayBuffer);
    if (!images || !images.length) {
      throw new Error('No images found in HEIF file');
    }

    const img = images[0];
    const width = img.get_width();
    const height = img.get_height();

    const imageData = img.display({
      data: new Uint8ClampedArray(width * height * 4),
      width,
      height
    });

    self.postMessage(
      { id, ok: true, width, height, rgba: imageData.data },
      [imageData.data.buffer]
    );
  } catch (err) {
    self.postMessage({
      id,
      ok: false,
      error: String(err?.message || err)
    });
  }
};