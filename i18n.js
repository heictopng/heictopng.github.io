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
  },
    pt: {
  "app.title": "Conversor HEIC / HEIF / HIF (.hif/.heic) → JPG / PNG",
  "header.title": "HEIC / HEIF / HIF → JPG / PNG",
  "header.sub": "No seu dispositivo. Sem uploads. Funciona offline após carregar.",

  "dropzone.ariaLabel": "Solte arquivos HEIC / HEIF / HIF aqui",
  "dropzone.strong": "Solte arquivos .hif/.heic/.heif",
  "dropzone.or": "ou",
  "dropzone.choose": "Escolher arquivos",

  "options.output": "Formato",
  "options.jpg": "JPG",
  "options.png": "PNG",
  "options.jpgQuality": "Qualidade JPG",

  "buttons.convertAll": "Converter tudo",
  "buttons.clear": "Limpar",

  "queue.title": "Fila",

  "footer.tip": "Dica: Lotes grandes processam mais rápido se a aba permanecer ativa.",

  "card.noPreview": "Sem pré-visualização",
  "card.convert": "Converter",
  "card.reconvert": "Converter novamente",
  "card.download": "Baixar",
  "card.remove": "Remover",

  "status.queued": "Na fila",
  "status.preparing": "Preparando…",
  "status.checkingSupport": "Verificando compatibilidade do navegador…",
  "status.nativeDecodingEncoding": "Decodificando nativamente. Codificando…",
  "status.nativeFailedSwitching": "Falha nativa. Mudando para WASM…",
  "status.wasmDecoding": "Decodificando com WASM…",
  "status.decodedEncoding": "Decodificado {width}×{height}. Codificando…",
  "status.ready": "Pronto ({fmt})",
  "status.error": "Erro: {msg}",

  "alert.decodeModeSelected": "Modo de decodificação selecionado: {mode}\n\n{reason}",
  "alert.wasmWorkerFailed": "Falha ao carregar/executar o worker WASM.",

  "thumb.failed": "Pré-visualização indisponível."
},

ja: {
  "app.title": "HEIC / HEIF / HIF（.hif/.heic）→ JPG / PNG 変換",
  "header.title": "HEIC / HEIF / HIF → JPG / PNG",
  "header.sub": "端末内で処理。アップロード不要。読み込み後はオフライン対応。",

  "dropzone.ariaLabel": "ここに HEIC / HEIF / HIF ファイルをドロップ",
  "dropzone.strong": ".hif / .heic / .heif ファイルをドロップ",
  "dropzone.or": "または",
  "dropzone.choose": "ファイルを選択",

  "options.output": "出力形式",
  "options.jpg": "JPG",
  "options.png": "PNG",
  "options.jpgQuality": "JPG 画質",

  "buttons.convertAll": "すべて変換",
  "buttons.clear": "クリア",

  "queue.title": "キュー",

  "footer.tip": "ヒント：タブを前面にすると大量変換が高速になります。",

  "card.noPreview": "プレビューなし",
  "card.convert": "変換",
  "card.reconvert": "再変換",
  "card.download": "ダウンロード",
  "card.remove": "削除",

  "status.queued": "待機中",
  "status.preparing": "準備中…",
  "status.checkingSupport": "ブラウザ対応を確認中…",
  "status.nativeDecodingEncoding": "ネイティブでデコード中。エンコード中…",
  "status.nativeFailedSwitching": "ネイティブ失敗。WASM に切り替え中…",
  "status.wasmDecoding": "WASM でデコード中…",
  "status.decodedEncoding": "{width}×{height} をデコード。エンコード中…",
  "status.ready": "完了 ({fmt})",
  "status.error": "エラー: {msg}",

  "alert.decodeModeSelected": "選択されたデコード方式: {mode}\n\n{reason}",
  "alert.wasmWorkerFailed": "WASM ワーカーの読み込み/実行に失敗しました。",

  "thumb.failed": "サムネイルを表示できません。"
},

zh: {
  "app.title": "HEIC / HEIF / HIF（.hif/.heic）转 JPG / PNG",
  "header.title": "HEIC / HEIF / HIF → JPG / PNG",
  "header.sub": "本地处理，无需上传。加载后可离线使用。",

  "dropzone.ariaLabel": "将 HEIC / HEIF / HIF 文件拖到这里",
  "dropzone.strong": "拖放 .hif / .heic / .heif 文件",
  "dropzone.or": "或",
  "dropzone.choose": "选择文件",

  "options.output": "输出格式",
  "options.jpg": "JPG",
  "options.png": "PNG",
  "options.jpgQuality": "JPG 质量",

  "buttons.convertAll": "全部转换",
  "buttons.clear": "清除",

  "queue.title": "队列",

  "footer.tip": "提示：保持标签页激活可加快批量处理速度。",

  "card.noPreview": "暂无预览",
  "card.convert": "转换",
  "card.reconvert": "重新转换",
  "card.download": "下载",
  "card.remove": "移除",

  "status.queued": "排队中",
  "status.preparing": "准备中…",
  "status.checkingSupport": "检查浏览器支持…",
  "status.nativeDecodingEncoding": "本地解码中。正在编码…",
  "status.nativeFailedSwitching": "本地失败，切换至 WASM…",
  "status.wasmDecoding": "使用 WASM 解码中…",
  "status.decodedEncoding": "已解码 {width}×{height}，正在编码…",
  "status.ready": "完成 ({fmt})",
  "status.error": "错误：{msg}",

  "alert.decodeModeSelected": "已选择解码模式：{mode}\n\n{reason}",
  "alert.wasmWorkerFailed": "WASM Worker 加载或运行失败。",

  "thumb.failed": "无法生成预览。"
},

ar: {
  "app.title": "محول HEIC / HEIF / HIF ‏(.hif/.heic) → JPG / PNG",
  "header.title": "HEIC / HEIF / HIF → JPG / PNG",
  "header.sub": "يعمل محليًا. بدون رفع ملفات. يعمل دون اتصال بعد التحميل.",

  "dropzone.ariaLabel": "اسحب ملفات HEIC / HEIF / HIF هنا",
  "dropzone.strong": "اسحب ملفات ‎.hif / .heic / .heif",
  "dropzone.or": "أو",
  "dropzone.choose": "اختر الملفات",

  "options.output": "الصيغة",
  "options.jpg": "JPG",
  "options.png": "PNG",
  "options.jpgQuality": "جودة JPG",

  "buttons.convertAll": "تحويل الكل",
  "buttons.clear": "مسح",

  "queue.title": "قائمة الانتظار",

  "footer.tip": "نصيحة: إبقاء التبويب نشطًا يسرّع معالجة الملفات الكبيرة.",

  "card.noPreview": "لا توجد معاينة",
  "card.convert": "تحويل",
  "card.reconvert": "إعادة التحويل",
  "card.download": "تحميل",
  "card.remove": "إزالة",

  "status.queued": "في الانتظار",
  "status.preparing": "جارٍ التحضير…",
  "status.checkingSupport": "التحقق من دعم المتصفح…",
  "status.nativeDecodingEncoding": "فك الترميز محليًا. جارٍ الترميز…",
  "status.nativeFailedSwitching": "فشل الوضع المحلي. التحويل إلى WASM…",
  "status.wasmDecoding": "فك الترميز باستخدام WASM…",
  "status.decodedEncoding": "تم فك {width}×{height}. جارٍ الترميز…",
  "status.ready": "جاهز ({fmt})",
  "status.error": "خطأ: {msg}",

  "alert.decodeModeSelected": "تم اختيار وضع فك الترميز: {mode}\n\n{reason}",
  "alert.wasmWorkerFailed": "فشل تحميل أو تشغيل عامل WASM.",

  "thumb.failed": "تعذر إنشاء المعاينة."
},

hi: {
  "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / PNG कनवर्टर",
  "header.title": "HEIC / HEIF / HIF → JPG / PNG",
  "header.sub": "डिवाइस पर ही प्रोसेसिंग। कोई अपलोड नहीं। लोड होने के बाद ऑफ़लाइन काम करता है।",

  "dropzone.ariaLabel": "HEIC / HEIF / HIF फ़ाइलें यहाँ छोड़ें",
  "dropzone.strong": ".hif / .heic / .heif फ़ाइलें छोड़ें",
  "dropzone.or": "या",
  "dropzone.choose": "फ़ाइलें चुनें",

  "options.output": "आउटपुट",
  "options.jpg": "JPG",
  "options.png": "PNG",
  "options.jpgQuality": "JPG गुणवत्ता",

  "buttons.convertAll": "सभी कनवर्ट करें",
  "buttons.clear": "साफ़ करें",

  "queue.title": "कतार",

  "footer.tip": "सुझाव: टैब को सक्रिय रखने से बड़े बैच तेज़ी से प्रोसेस होते हैं।",

  "card.noPreview": "कोई प्रीव्यू नहीं",
  "card.convert": "कनवर्ट करें",
  "card.reconvert": "फिर से कनवर्ट करें",
  "card.download": "डाउनलोड",
  "card.remove": "हटाएँ",

  "status.queued": "कतार में",
  "status.preparing": "तैयारी हो रही है…",
  "status.checkingSupport": "ब्राउज़र समर्थन जाँचा जा रहा है…",
  "status.nativeDecodingEncoding": "नेटिव डिकोडिंग। एन्कोडिंग…",
  "status.nativeFailedSwitching": "नेटिव विफल। WASM पर स्विच किया जा रहा है…",
  "status.wasmDecoding": "WASM से डिकोड किया जा रहा है…",
  "status.decodedEncoding": "{width}×{height} डिकोड हुआ। एन्कोडिंग…",
  "status.ready": "तैयार ({fmt})",
  "status.error": "त्रुटि: {msg}",

  "alert.decodeModeSelected": "चयनित डिकोड मोड: {mode}\n\n{reason}",
  "alert.wasmWorkerFailed": "WASM वर्कर लोड/चलाने में विफल।",

  "thumb.failed": "प्रीव्यू उपलब्ध नहीं है।"
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
