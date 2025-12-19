// app.js
import { t, setLocale, getLocale, translateDocument } from './i18n.js';

const els = {
  dropzone: document.getElementById('dropzone'),
  fileInput: document.getElementById('fileInput'),
  list: document.getElementById('list'),
  format: document.getElementById('format'),
  quality: document.getElementById('quality'),
  qualityVal: document.getElementById('qualityVal'),
  qualityWrap: document.getElementById('qualityWrap'),
  convertAll: document.getElementById('convertAll'),
  clearAll: document.getElementById('clearAll'),
};

const state = {
  items: [], // { id, file, status, thumbUrl?, outBlob?, outName?, error? }
  nextId: 1,
  decodeMode: 'unknown', // 'unknown' | 'native' | 'wasm'
};

let worker = null;

function ensureWorker() {
  if (worker) return worker;

  worker = new Worker('./worker.mjs', { type: 'module' });

  worker.onmessage = async (e) => {
    const msg = e.data;
    const item = state.items.find(x => x.id === msg.id);
    if (!item) return;

    if (!msg.ok) {
      item.status = t('status.error', { msg: msg.error });
      item.error = msg.error;
      render();
      return;
    }

    item.status = t('status.decodedEncoding', { width: msg.width, height: msg.height });
    render();

    try {
      const mime = els.format.value;
      const quality = Number(els.quality.value);

      const blob = await encodeRgbaToBlob(msg.rgba, msg.width, msg.height, mime, quality);
      const ext = mime === 'image/png' ? 'png' : 'jpg';
      item.outBlob = blob;
      item.outName = replaceExt(item.file.name, ext);
      item.status = t('status.ready', { fmt: ext.toUpperCase() });

      if (item.thumbUrl) URL.revokeObjectURL(item.thumbUrl);
      item.thumbUrl = URL.createObjectURL(blob);
    } catch (err) {
      item.status = t('status.error', { msg: String(err?.message || err) });
      item.error = String(err?.message || err);
    }

    render();
  };

  worker.onerror = (e) => {
    console.error('Worker error:', e);
    alert(t('alert.wasmWorkerFailed'));
  };

  return worker;
}

function replaceExt(name, ext) {
  return name.replace(/\.[^.]+$/, '') + '.' + ext;
}

function setButtonsEnabled() {
  const hasItems = state.items.length > 0;
  const canConvert = state.items.some(x => !x.outBlob && !x.error);
  els.convertAll.disabled = !(hasItems && canConvert);
  els.clearAll.disabled = !hasItems;
}

function updateQualityUI() {
  const mime = els.format.value;
  const isJpeg = mime === 'image/jpeg';
  els.qualityWrap.style.display = isJpeg ? 'grid' : 'none';
  els.qualityVal.textContent = Number(els.quality.value).toFixed(2);
}

els.format.addEventListener('change', () => {
  updateQualityUI();
  // Mark outputs stale if user changes format after converting
  state.items.forEach(x => { x.outBlob = null; x.outName = null; x.error = null; });
  render();
});
els.quality.addEventListener('input', () => updateQualityUI());

function render() {
  els.list.innerHTML = '';
  for (const item of state.items) {
    els.list.appendChild(renderCard(item));
  }
  setButtonsEnabled();
}

function renderCard(item) {
  const card = document.createElement('div');
  card.className = 'card';

  const thumb = document.createElement('div');
  thumb.className = 'thumb';

  if (item.thumbUrl) {
    const img = document.createElement('img');
    img.src = item.thumbUrl;
    img.alt = item.file.name;
    thumb.appendChild(img);
  } else {
    thumb.textContent = t('card.noPreview');
  }

  const meta = document.createElement('div');
  meta.className = 'meta';

  const filename = document.createElement('div');
  filename.className = 'filename';
  filename.textContent = item.file.name;

  const status = document.createElement('div');
  status.className = 'status';
  status.textContent = item.status;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const btnConvert = document.createElement('button');
  btnConvert.className = 'btn primary';
  btnConvert.textContent = item.outBlob ? t('card.reconvert') : t('card.convert');
  btnConvert.disabled = item.status.startsWith('Decoding') || item.status.startsWith('Encoding');
  btnConvert.onclick = () => convertItem(item);

  const btnDownload = document.createElement('button');
  btnDownload.className = 'btn';
  btnDownload.textContent = t('card.download');
  btnDownload.disabled = !item.outBlob;
  btnDownload.onclick = () => downloadBlob(item.outBlob, item.outName);

  const btnRemove = document.createElement('button');
  btnRemove.className = 'btn danger';
  btnRemove.textContent = t('card.remove');
  btnRemove.onclick = () => removeItem(item.id);

  actions.append(btnConvert, btnDownload, btnRemove);
  meta.append(filename, status, actions);

  card.append(thumb, meta);
  return card;
}

function removeItem(id) {
  const idx = state.items.findIndex(x => x.id === id);
  if (idx >= 0) {
    const it = state.items[idx];
    if (it.thumbUrl) URL.revokeObjectURL(it.thumbUrl);
    state.items.splice(idx, 1);
    render();
  }
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'converted';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function encodeRgbaToBlob(rgbaUint8, width, height, mime, quality) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d', { willReadFrequently: false });
  const imageData = new ImageData(new Uint8ClampedArray(rgbaUint8), width, height);
  ctx.putImageData(imageData, 0, 0);

  const blob = await new Promise((resolve, reject) => {
    const q = mime === 'image/jpeg' ? quality : undefined;
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Canvas encoding failed'))), mime, q);
  });

  return blob;
}

async function detectDecodeMode(file) {
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

async function convertItem(item) {
  item.status = t('status.preparing');
  item.error = null;
  item.outBlob = null;
  item.outName = null;
  render();

  const mime = els.format.value;
  const quality = Number(els.quality.value);

  // Decide once
  if (state.decodeMode === 'unknown') {
    item.status = t('status.checkingSupport');
    render();

    const result = await detectDecodeMode(item.file);
    state.decodeMode = result.mode;

    alert(t('alert.decodeModeSelected', {
      mode: state.decodeMode.toUpperCase(),
      reason: result.reason
    }));
  }

  if (state.decodeMode === 'native') {
    item.status = t('status.nativeDecodingEncoding');
    render();

    const url = URL.createObjectURL(item.file);
    try {
      const img = new Image();
      img.src = url;
      await img.decode();

      const blob = await imageToBlob(img, mime, quality);
      const ext = mime === 'image/png' ? 'png' : 'jpg';

      item.outBlob = blob;
      item.outName = replaceExt(item.file.name, ext);
      item.status = t('status.ready', { fmt: ext.toUpperCase() });

      if (item.thumbUrl) URL.revokeObjectURL(item.thumbUrl);
      item.thumbUrl = URL.createObjectURL(blob);
    } catch (err) {
      // If native unexpectedly fails later, fallback permanently to WASM
      state.decodeMode = 'wasm';
      item.status = t('status.nativeFailedSwitching');
      render();

      const arrayBuffer = await item.file.arrayBuffer();
      ensureWorker().postMessage({ id: item.id, fileName: item.file.name, arrayBuffer }, [arrayBuffer]);
      return;
    } finally {
      URL.revokeObjectURL(url);
    }

    render();
    return;
  }

  // WASM path
  item.status = t('status.wasmDecoding');
  render();

  const arrayBuffer = await item.file.arrayBuffer();
  ensureWorker().postMessage({ id: item.id, fileName: item.file.name, arrayBuffer }, [arrayBuffer]);
}

els.convertAll.addEventListener('click', async () => {
  for (const item of state.items) {
    if (!item.outBlob && !item.error) {
      await convertItem(item);
      // Note: conversions proceed as worker replies arrive; this just queues them.
    }
  }
});

els.clearAll.addEventListener('click', () => {
  state.items.forEach(x => x.thumbUrl && URL.revokeObjectURL(x.thumbUrl));
  state.items = [];
  render();
});

function addFiles(fileList) {
  const files = Array.from(fileList || []);
  for (const file of files) {
    const id = state.nextId++;
    state.items.push({
      id,
      file,
      status: t('status.queued'),
      thumbUrl: null,
      outBlob: null,
      outName: null,
      error: null
    });
  }
  render();
}

els.fileInput.addEventListener('change', () => {
  addFiles(els.fileInput.files);
  els.fileInput.value = '';
});

function setupDnD() {
  const dz = els.dropzone;

  const prevent = (e) => { e.preventDefault(); e.stopPropagation(); };

  ['dragenter', 'dragover'].forEach(evt =>
    dz.addEventListener(evt, (e) => { prevent(e); dz.classList.add('dragover'); })
  );
  ['dragleave', 'drop'].forEach(evt =>
    dz.addEventListener(evt, (e) => { prevent(e); dz.classList.remove('dragover'); })
  );

  dz.addEventListener('drop', (e) => addFiles(e.dataTransfer.files));
  dz.addEventListener('click', () => els.fileInput.click());
  dz.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') els.fileInput.click();
  });
}

async function tryNativeDecodeToImage(file) {
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.src = url;
    await img.decode(); // succeeds only if browser can decode HEIF
    return img;
  } catch {
    return null;
  } finally {
    // Don't revoke here if returning img? Actually safe to revoke after draw.
    // We'll revoke immediately after we draw in the caller.
  }
}

async function imageToBlob(img, mime, quality) {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth || img.width;
  canvas.height = img.naturalHeight || img.height;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  const blob = await new Promise((resolve, reject) => {
    const q = mime === 'image/jpeg' ? quality : undefined;
    canvas.toBlob(b => (b ? resolve(b) : reject(new Error('Canvas encoding failed'))), mime, q);
  });

  return blob;
}

// Optional: allow changing locale via URL query (?lang=es) already supported by i18n.js.
// If you later add a language picker, call setLocale('es') and re-render:
translateDocument();
updateQualityUI();
setupDnD();
render();