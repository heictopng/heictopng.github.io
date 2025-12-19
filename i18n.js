// i18n.js
const DICTS = {
  en: {
    "app.title": "HEIC / HEIF /HIF (.hif/.heic) → JPG / PNG Converter",
    "header.title": "HEIC / HEIF /HIF → JPG / PNG",
    "header.sub": "Client-side. No uploads. Works offline once loaded.",

    "dropzone.ariaLabel": "Drop HEIC / HEIF /HIF files here",
    "dropzone.strong": "Drop .hif/.heic/.heif files",
    "dropzone.or": "or",
    "dropzone.choose": "Choose files",

    "options.output": "Output",
    "options.jpg": "JPG",
    "options.png": "PNG",
    "options.jpgQuality": "JPG quality",

    "buttons.convertAll": "Convert all",
    "buttons.clear": "Clear",

    "queue.title": "Queue",

    "footer.tip": "Tip: Large batches decode faster if you keep the tab focused.",

    // Runtime strings (app.js)
    "card.noPreview": "No preview yet",
    "card.convert": "Convert",
    "card.reconvert": "Re-convert",
    "card.download": "Download",
    "card.remove": "Remove",
    "status.queued": "Queued",
    "status.preparing": "Preparing…",
    "status.checkingSupport": "Checking browser support (one-time)…",
    "status.nativeDecodingEncoding": "Decoding natively. Encoding…",
    "status.nativeFailedSwitching": "Native failed. Switching to WASM…",
    "status.wasmDecoding": "Decoding with WASM…",
    "status.decodedEncoding": "Decoded {width}×{height}. Encoding…",
    "status.ready": "Ready ({fmt})",
    "status.error": "Error: {msg}",
    "alert.decodeModeSelected": "Decode mode selected: {mode}\n\n{reason}",
    "alert.wasmWorkerFailed": "WASM worker failed to load/run. Check console.",

    "thumb.failed": "Preview unavailable (thumbnail failed).",
  },

  es: {
    "app.title": "Convertidor HEIC / HEIF /HIF (.hif/.heic) → JPG / PNG",
    "header.title": "HEIC / HEIF /HIF → JPG / PNG",
    "header.sub": "En tu dispositivo. Sin subidas. Funciona sin conexión una vez cargado.",

    "dropzone.ariaLabel": "Suelta archivos HEIC / HEIF /HIF aquí",
    "dropzone.strong": "Suelta archivos .hif/.heic/.heif",
    "dropzone.or": "o",
    "dropzone.choose": "Elegir archivos",

    "options.output": "Salida",
    "options.jpg": "JPG",
    "options.png": "PNG",
    "options.jpgQuality": "Calidad JPG",

    "buttons.convertAll": "Convertir todo",
    "buttons.clear": "Limpiar",

    "queue.title": "Cola",

    "footer.tip": "Consejo: Los lotes grandes decodifican más rápido si mantienes la pestaña activa.",

    // Runtime strings (app.js)
    "card.noPreview": "Sin vista previa",
    "card.convert": "Convertir",
    "card.reconvert": "Reconvertir",
    "card.download": "Descargar",
    "card.remove": "Quitar",
    "status.queued": "En cola",
    "status.preparing": "Preparando…",
    "status.checkingSupport": "Comprobando compatibilidad del navegador (una vez)…",
    "status.nativeDecodingEncoding": "Decodificando de forma nativa. Codificando…",
    "status.nativeFailedSwitching": "Falló la vía nativa. Cambiando a WASM…",
    "status.wasmDecoding": "Decodificando con WASM…",
    "status.decodedEncoding": "Decodificado {width}×{height}. Codificando…",
    "status.ready": "Listo ({fmt})",
    "status.error": "Error: {msg}",
    "alert.decodeModeSelected": "Modo de decodificación seleccionado: {mode}\n\n{reason}",
    "alert.wasmWorkerFailed": "El worker WASM no pudo cargarse/ejecutarse. Revisa la consola.",

    "thumb.failed": "Vista previa no disponible (falló la miniatura).",
  }
};

function getInitialLocale() {
  const params = new URLSearchParams(location.search);
  const fromQuery = params.get("lang");
  if (fromQuery && DICTS[fromQuery]) return fromQuery;

  const stored = localStorage.getItem("lang");
  if (stored && DICTS[stored]) return stored;

  const nav = (navigator.language || "en").split("-")[0];
  return DICTS[nav] ? nav : "en";
}

const state = {
  locale: getInitialLocale()
};

export function setLocale(locale) {
  if (!DICTS[locale]) locale = "en";
  state.locale = locale;
  localStorage.setItem("lang", locale);
  document.documentElement.lang = locale;
  translateDocument();
}

export function getLocale() {
  return state.locale;
}

export function t(key, vars = {}) {
  const dict = DICTS[state.locale] || DICTS.en;
  const fallback = DICTS.en || {};
  let s = dict[key] ?? fallback[key] ?? key;

  // simple {var} interpolation
  s = String(s).replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? `{${k}}`));
  return s;
}

export function translateDocument(root = document) {
  // text nodes
  root.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  // aria-label
  root.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
  });

  // title in <head> (and any other)
  root.querySelectorAll("[data-i18n-title]").forEach(el => {
    el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
  });

  // document title if marked
  const titleEl = root.querySelector("title[data-i18n]");
  if (titleEl) document.title = t(titleEl.getAttribute("data-i18n"));
}

// initialize on import
document.documentElement.lang = state.locale;
translateDocument();