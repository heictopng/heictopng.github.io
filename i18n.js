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
        "buttons.downloadZip": "Download ZIP",
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
        "status.zipping": "Creating ZIP…",
        "status.error": "Error: {msg}",
        "alert.decodeModeSelected": "Decode mode selected: {mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "WASM worker failed to load/run. Check console.",
        "alert.noConverted": "No converted images to zip yet.",
        "alert.zipFailed": "Failed to create ZIP. Check console.",

        "thumb.failed": "Preview unavailable (thumbnail failed).",

        "progress.aria": "Conversion progress",
        "progress.label": "{done}/{total} processed • {converted} converted • {errors} errors"
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
        "buttons.downloadZip": "Descargar ZIP",
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
        "status.zipping": "Creando ZIP…",
        "status.error": "Error: {msg}",
        "alert.decodeModeSelected": "Modo de decodificación seleccionado: {mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "El worker WASM no pudo cargarse/ejecutarse. Revisa la consola.",
        "alert.noConverted": "Todavía no hay imágenes convertidas para comprimir.",
        "alert.zipFailed": "No se pudo crear el ZIP. Revisa la consola.",

        "thumb.failed": "Vista previa no disponible (falló la miniatura).",

        "progress.aria": "Progreso de conversión",
        "progress.label": "{done}/{total} procesadas • {converted} convertidas • {errors} errores"
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
        "buttons.downloadZip": "Baixar ZIP",
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
        "status.zipping": "Criando ZIP…",
        "status.error": "Erro: {msg}",

        "alert.decodeModeSelected": "Modo de decodificação selecionado: {mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "Falha ao carregar/executar o worker WASM.",
        "alert.noConverted": "Ainda não há imagens convertidas para compactar.",
        "alert.zipFailed": "Falha ao criar o ZIP. Verifique o console.",

        "thumb.failed": "Pré-visualização indisponível.",

        "progress.aria": "Progresso de conversão",
        "progress.label": "{done}/{total} processadas • {converted} convertidas • {errors} erros"
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
        "buttons.downloadZip": "ZIPをダウンロード",
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
        "status.zipping": "ZIP を作成中…",
        "status.error": "エラー: {msg}",

        "alert.decodeModeSelected": "選択されたデコード方式: {mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "WASM ワーカーの読み込み/実行に失敗しました。",
        "alert.noConverted": "ZIP にする変換済み画像がまだありません。",
        "alert.zipFailed": "ZIP の作成に失敗しました。コンソールを確認してください。",

        "thumb.failed": "サムネイルを表示できません。",

        "progress.aria": "変換の進捗",
        "progress.label": "{done}/{total} 処理済み • {converted} 変換済み • {errors} エラー"
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
        "buttons.downloadZip": "下载 ZIP",
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
        "status.zipping": "正在创建 ZIP…",
        "status.error": "错误：{msg}",

        "alert.decodeModeSelected": "已选择解码模式：{mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "WASM Worker 加载或运行失败。",
        "alert.noConverted": "还没有可打包为 ZIP 的已转换图片。",
        "alert.zipFailed": "创建 ZIP 失败。请查看控制台。",

        "thumb.failed": "无法生成预览。",

        "progress.aria": "转换进度",
        "progress.label": "已处理 {done}/{total} • 已转换 {converted} • 错误 {errors}"
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
        "buttons.downloadZip": "تحميل ZIP",
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
        "status.zipping": "جارٍ إنشاء ZIP…",
        "status.error": "خطأ: {msg}",

        "alert.decodeModeSelected": "تم اختيار وضع فك الترميز: {mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "فشل تحميل أو تشغيل عامل WASM.",
        "alert.noConverted": "لا توجد صور محوّلة بعد لإنشاء ملف ZIP.",
        "alert.zipFailed": "تعذر إنشاء ملف ZIP. تحقق من وحدة التحكم.",

        "thumb.failed": "تعذر إنشاء المعاينة。",

        "progress.aria": "تقدم التحويل",
        "progress.label": "تمت المعالجة {done}/{total} • تم التحويل {converted} • أخطاء {errors}"
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
        "buttons.downloadZip": "ZIP डाउनलोड करें",
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
        "status.zipping": "ZIP बनाया जा रहा है…",
        "status.error": "त्रुटि: {msg}",

        "alert.decodeModeSelected": "चयनित डिकोड मोड: {mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "WASM वर्कर लोड/चलाने में विफल।",
        "alert.noConverted": "ZIP बनाने के लिए अभी कोई कनवर्ट की गई इमेज नहीं है।",
        "alert.zipFailed": "ZIP बनाने में विफल। कंसोल देखें।",

        "thumb.failed": "प्रीव्यू उपलब्ध नहीं है।",

        "progress.aria": "कन्वर्ज़न प्रगति",
        "progress.label": "{done}/{total} प्रोसेस्ड • {converted} कन्वर्टेड • {errors} त्रुटियाँ"
    },

    de: {
        "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / PNG Konverter",
        "header.title": "HEIC / HEIF / HIF → JPG / PNG",
        "header.sub": "Lokal im Browser. Keine Uploads. Nach dem Laden offline nutzbar.",

        "dropzone.ariaLabel": "HEIC / HEIF / HIF Dateien hier ablegen",
        "dropzone.strong": ".hif / .heic / .heif Dateien ablegen",
        "dropzone.or": "oder",
        "dropzone.choose": "Dateien auswählen",

        "options.output": "Ausgabe",
        "options.jpg": "JPG",
        "options.png": "PNG",
        "options.jpgQuality": "JPG-Qualität",

        "buttons.convertAll": "Alle konvertieren",
        "buttons.downloadZip": "ZIP herunterladen",
        "buttons.clear": "Leeren",

        "queue.title": "Warteschlange",

        "footer.tip": "Tipp: Große Stapel sind schneller, wenn der Tab aktiv bleibt.",

        "card.noPreview": "Keine Vorschau",
        "card.convert": "Konvertieren",
        "card.reconvert": "Erneut konvertieren",
        "card.download": "Herunterladen",
        "card.remove": "Entfernen",

        "status.queued": "In Warteschlange",
        "status.preparing": "Vorbereitung…",
        "status.checkingSupport": "Browser-Unterstützung wird geprüft…",
        "status.nativeDecodingEncoding": "Native Dekodierung. Kodierung…",
        "status.nativeFailedSwitching": "Native Methode fehlgeschlagen. Wechsel zu WASM…",
        "status.wasmDecoding": "Dekodierung mit WASM…",
        "status.decodedEncoding": "{width}×{height} dekodiert. Kodierung…",
        "status.ready": "Fertig ({fmt})",
        "status.zipping": "ZIP wird erstellt…",
        "status.error": "Fehler: {msg}",

        "alert.decodeModeSelected": "Ausgewählter Dekodiermodus: {mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "WASM-Worker konnte nicht geladen/ausgeführt werden.",
        "alert.noConverted": "Noch keine konvertierten Bilder zum ZIPpen vorhanden.",
        "alert.zipFailed": "ZIP konnte nicht erstellt werden. Konsole prüfen.",

        "thumb.failed": "Vorschau nicht verfügbar.",

        "progress.aria": "Konvertierungsfortschritt",
        "progress.label": "{done}/{total} verarbeitet • {converted} konvertiert • {errors} Fehler"
    },

    fr: {
        "app.title": "Convertisseur HEIC / HEIF / HIF (.hif/.heic) → JPG / PNG",
        "header.title": "HEIC / HEIF / HIF → JPG / PNG",
        "header.sub": "Traitement local. Aucun envoi. Fonctionne hors ligne après chargement.",

        "dropzone.ariaLabel": "Déposez des fichiers HEIC / HEIF / HIF ici",
        "dropzone.strong": "Déposez des fichiers .hif / .heic / .heif",
        "dropzone.or": "ou",
        "dropzone.choose": "Choisir des fichiers",

        "options.output": "Sortie",
        "options.jpg": "JPG",
        "options.png": "PNG",
        "options.jpgQuality": "Qualité JPG",

        "buttons.convertAll": "Tout convertir",
        "buttons.downloadZip": "Télécharger le ZIP",
        "buttons.clear": "Effacer",

        "queue.title": "File d’attente",

        "footer.tip": "Astuce : les gros lots sont plus rapides si l’onglet reste actif.",

        "card.noPreview": "Aucun aperçu",
        "card.convert": "Convertir",
        "card.reconvert": "Reconvertir",
        "card.download": "Télécharger",
        "card.remove": "Supprimer",

        "status.queued": "En attente",
        "status.preparing": "Préparation…",
        "status.checkingSupport": "Vérification de la compatibilité du navigateur…",
        "status.nativeDecodingEncoding": "Décodage natif. Encodage…",
        "status.nativeFailedSwitching": "Échec natif. Passage à WASM…",
        "status.wasmDecoding": "Décodage avec WASM…",
        "status.decodedEncoding": "{width}×{height} décodé. Encodage…",
        "status.ready": "Prêt ({fmt})",
        "status.zipping": "Création du ZIP…",
        "status.error": "Erreur : {msg}",

        "alert.decodeModeSelected": "Mode de décodage sélectionné : {mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "Impossible de charger/exécuter le worker WASM.",
        "alert.noConverted": "Aucune image convertie à compresser pour le moment.",
        "alert.zipFailed": "Échec de la création du ZIP. Vérifiez la console.",

        "thumb.failed": "Aperçu indisponible.",

        "progress.aria": "Progression de conversion",
        "progress.label": "{done}/{total} traitées • {converted} converties • {errors} erreurs"
    },

    ru: {
        "app.title": "Конвертер HEIC / HEIF / HIF (.hif/.heic) → JPG / PNG",
        "header.title": "HEIC / HEIF / HIF → JPG / PNG",
        "header.sub": "Локальная обработка. Без загрузок. Работает офлайн после загрузки.",

        "dropzone.ariaLabel": "Перетащите файлы HEIC / HEIF / HIF сюда",
        "dropzone.strong": "Перетащите файлы .hif / .heic / .heif",
        "dropzone.or": "или",
        "dropzone.choose": "Выбрать файлы",

        "options.output": "Формат",
        "options.jpg": "JPG",
        "options.png": "PNG",
        "options.jpgQuality": "Качество JPG",

        "buttons.convertAll": "Конвертировать все",
        "buttons.downloadZip": "Скачать ZIP",
        "buttons.clear": "Очистить",

        "queue.title": "Очередь",

        "footer.tip": "Совет: большие пакеты обрабатываются быстрее при активной вкладке.",

        "card.noPreview": "Нет предпросмотра",
        "card.convert": "Конвертировать",
        "card.reconvert": "Повторно конвертировать",
        "card.download": "Скачать",
        "card.remove": "Удалить",

        "status.queued": "В очереди",
        "status.preparing": "Подготовка…",
        "status.checkingSupport": "Проверка поддержки браузера…",
        "status.nativeDecodingEncoding": "Нативное декодирование. Кодирование…",
        "status.nativeFailedSwitching": "Нативный режим не сработал. Переход на WASM…",
        "status.wasmDecoding": "Декодирование с WASM…",
        "status.decodedEncoding": "Декодировано {width}×{height}. Кодирование…",
        "status.ready": "Готово ({fmt})",
        "status.zipping": "Создание ZIP…",
        "status.error": "Ошибка: {msg}",

        "alert.decodeModeSelected": "Выбран режим декодирования: {mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "Не удалось загрузить или запустить WASM worker.",
        "alert.noConverted": "Пока нет конвертированных изображений для ZIP.",
        "alert.zipFailed": "Не удалось создать ZIP. Проверьте консоль.",

        "thumb.failed": "Предпросмотр недоступен.",

        "progress.aria": "Прогресс конвертации",
        "progress.label": "Обработано {done}/{total} • Конвертировано {converted} • Ошибок {errors}"
    },

    it: {
        "app.title": "Convertitore HEIC / HEIF / HIF (.hif/.heic) → JPG / PNG",
        "header.title": "HEIC / HEIF / HIF → JPG / PNG",
        "header.sub": "Elaborazione locale. Nessun upload. Funziona offline dopo il caricamento.",

        "dropzone.ariaLabel": "Trascina qui i file HEIC / HEIF / HIF",
        "dropzone.strong": "Trascina file .hif / .heic / .heif",
        "dropzone.or": "o",
        "dropzone.choose": "Scegli file",

        "options.output": "Output",
        "options.jpg": "JPG",
        "options.png": "PNG",
        "options.jpgQuality": "Qualità JPG",

        "buttons.convertAll": "Converti tutto",
        "buttons.downloadZip": "Scarica ZIP",
        "buttons.clear": "Pulisci",

        "queue.title": "Coda",

        "footer.tip": "Suggerimento: i batch grandi sono più veloci se la scheda resta attiva.",

        "card.noPreview": "Nessuna anteprima",
        "card.convert": "Converti",
        "card.reconvert": "Riconverti",
        "card.download": "Scarica",
        "card.remove": "Rimuovi",

        "status.queued": "In coda",
        "status.preparing": "Preparazione…",
        "status.checkingSupport": "Verifica supporto del browser…",
        "status.nativeDecodingEncoding": "Decodifica nativa. Codifica…",
        "status.nativeFailedSwitching": "Metodo nativo fallito. Passaggio a WASM…",
        "status.wasmDecoding": "Decodifica con WASM…",
        "status.decodedEncoding": "Decodificato {width}×{height}. Codifica…",
        "status.ready": "Pronto ({fmt})",
        "status.zipping": "Creazione ZIP…",
        "status.error": "Errore: {msg}",

        "alert.decodeModeSelected": "Modalità di decodifica selezionata: {mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "Impossibile caricare/eseguire il worker WASM.",
        "alert.noConverted": "Nessuna immagine convertita da comprimere al momento.",
        "alert.zipFailed": "Impossibile creare lo ZIP. Controlla la console.",

        "thumb.failed": "Anteprima non disponibile.",

        "progress.aria": "Avanzamento conversione",
        "progress.label": "{done}/{total} elaborati • {converted} convertiti • {errors} errori"
    },

    nl: {
        "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / PNG Converter",
        "header.title": "HEIC / HEIF / HIF → JPG / PNG",
        "header.sub": "Lokaal verwerkt. Geen uploads. Offline beschikbaar na laden.",

        "dropzone.ariaLabel": "Sleep HEIC / HEIF / HIF bestanden hierheen",
        "dropzone.strong": "Sleep .hif / .heic / .heif bestanden",
        "dropzone.or": "of",
        "dropzone.choose": "Bestanden kiezen",

        "options.output": "Uitvoer",
        "options.jpg": "JPG",
        "options.png": "PNG",
        "options.jpgQuality": "JPG-kwaliteit",

        "buttons.convertAll": "Alles converteren",
        "buttons.downloadZip": "ZIP downloaden",
        "buttons.clear": "Wissen",

        "queue.title": "Wachtrij",

        "footer.tip": "Tip: grote batches zijn sneller als het tabblad actief blijft.",

        "card.noPreview": "Geen voorbeeld",
        "card.convert": "Converteren",
        "card.reconvert": "Opnieuw converteren",
        "card.download": "Downloaden",
        "card.remove": "Verwijderen",

        "status.queued": "In wachtrij",
        "status.preparing": "Voorbereiden…",
        "status.checkingSupport": "Browserondersteuning controleren…",
        "status.nativeDecodingEncoding": "Native decodering. Encoderen…",
        "status.nativeFailedSwitching": "Native methode mislukt. Overschakelen naar WASM…",
        "status.wasmDecoding": "Decoderen met WASM…",
        "status.decodedEncoding": "{width}×{height} gedecodeerd. Encoderen…",
        "status.ready": "Gereed ({fmt})",
        "status.zipping": "ZIP maken…",
        "status.error": "Fout: {msg}",

        "alert.decodeModeSelected": "Geselecteerde decodeermodus: {mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "WASM-worker kon niet worden geladen/uitgevoerd.",
        "alert.noConverted": "Er zijn nog geen geconverteerde afbeeldingen om te zippen.",
        "alert.zipFailed": "ZIP maken mislukt. Controleer de console.",

        "thumb.failed": "Voorbeeld niet beschikbaar.",

        "progress.aria": "Conversievoortgang",
        "progress.label": "{done}/{total} verwerkt • {converted} geconverteerd • {errors} fouten"
    },

    pl: {
        "app.title": "Konwerter HEIC / HEIF / HIF (.hif/.heic) → JPG / PNG",
        "header.title": "HEIC / HEIF / HIF → JPG / PNG",
        "header.sub": "Przetwarzanie lokalne. Bez wysyłania plików. Działa offline po załadowaniu.",

        "dropzone.ariaLabel": "Upuść pliki HEIC / HEIF / HIF tutaj",
        "dropzone.strong": "Upuść pliki .hif / .heic / .heif",
        "dropzone.or": "lub",
        "dropzone.choose": "Wybierz pliki",

        "options.output": "Wyjście",
        "options.jpg": "JPG",
        "options.png": "PNG",
        "options.jpgQuality": "Jakość JPG",

        "buttons.convertAll": "Konwertuj wszystko",
        "buttons.downloadZip": "Pobierz ZIP",
        "buttons.clear": "Wyczyść",

        "queue.title": "Kolejka",

        "footer.tip": "Wskazówka: duże partie działają szybciej przy aktywnej karcie.",

        "card.noPreview": "Brak podglądu",
        "card.convert": "Konwertuj",
        "card.reconvert": "Konwertuj ponownie",
        "card.download": "Pobierz",
        "card.remove": "Usuń",

        "status.queued": "W kolejce",
        "status.preparing": "Przygotowywanie…",
        "status.checkingSupport": "Sprawdzanie obsługi przeglądarki…",
        "status.nativeDecodingEncoding": "Dekodowanie natywne. Kodowanie…",
        "status.nativeFailedSwitching": "Tryb natywny nie powiódł się. Przełączanie na WASM…",
        "status.wasmDecoding": "Dekodowanie z WASM…",
        "status.decodedEncoding": "Zdekodowano {width}×{height}. Kodowanie…",
        "status.ready": "Gotowe ({fmt})",
        "status.zipping": "Tworzenie ZIP…",
        "status.error": "Błąd: {msg}",

        "alert.decodeModeSelected": "Wybrany tryb dekodowania: {mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "Nie udało się załadować/uruchomić workera WASM.",
        "alert.noConverted": "Brak przekonwertowanych obrazów do spakowania.",
        "alert.zipFailed": "Nie udało się utworzyć ZIP. Sprawdź konsolę.",

        "thumb.failed": "Podgląd niedostępny.",

        "progress.aria": "Postęp konwersji",
        "progress.label": "{done}/{total} przetworzone • {converted} przekonwertowane • {errors} błędy"
    },

    tr: {
        "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / PNG Dönüştürücü",
        "header.title": "HEIC / HEIF / HIF → JPG / PNG",
        "header.sub": "Yerel işlem. Yükleme yok. Yüklendikten sonra çevrimdışı çalışır.",

        "dropzone.ariaLabel": "HEIC / HEIF / HIF dosyalarını buraya bırakın",
        "dropzone.strong": ".hif / .heic / .heif dosyalarını bırakın",
        "dropzone.or": "veya",
        "dropzone.choose": "Dosya seç",

        "options.output": "Çıktı",
        "options.jpg": "JPG",
        "options.png": "PNG",
        "options.jpgQuality": "JPG kalitesi",

        "buttons.convertAll": "Hepsini dönüştür",
        "buttons.downloadZip": "ZIP indir",
        "buttons.clear": "Temizle",

        "queue.title": "Kuyruk",

        "footer.tip": "İpucu: sekme aktifken büyük gruplar daha hızlı işlenir.",

        "card.noPreview": "Önizleme yok",
        "card.convert": "Dönüştür",
        "card.reconvert": "Yeniden dönüştür",
        "card.download": "İndir",
        "card.remove": "Kaldır",

        "status.queued": "Kuyrukta",
        "status.preparing": "Hazırlanıyor…",
        "status.checkingSupport": "Tarayıcı desteği kontrol ediliyor…",
        "status.nativeDecodingEncoding": "Yerel çözme. Kodlama…",
        "status.nativeFailedSwitching": "Yerel yöntem başarısız. WASM’e geçiliyor…",
        "status.wasmDecoding": "WASM ile çözülüyor…",
        "status.decodedEncoding": "{width}×{height} çözüldü. Kodlama…",
        "status.ready": "Hazır ({fmt})",
        "status.zipping": "ZIP oluşturuluyor…",
        "status.error": "Hata: {msg}",

        "alert.decodeModeSelected": "Seçilen çözme modu: {mode}\n\n{reason}",
        "alert.wasmWorkerFailed": "WASM worker yüklenemedi veya çalıştırılamadı.",
        "alert.noConverted": "Henüz ZIP yapmak için dönüştürülmüş görüntü yok.",
        "alert.zipFailed": "ZIP oluşturulamadı. Konsolu kontrol edin.",

        "thumb.failed": "Önizleme oluşturulamadı.",

        "progress.aria": "Dönüştürme ilerlemesi",
        "progress.label": "{done}/{total} işlendi • {converted} dönüştürüldü • {errors} hata"
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

    s = String(s).replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? `{${k}}`));
    return s;
}

export function translateDocument(root = document) {
    root.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.getAttribute("data-i18n"));
    });

    root.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
        el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
    });

    root.querySelectorAll("[data-i18n-title]").forEach(el => {
        el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });

    const titleEl = root.querySelector("title[data-i18n]");
    if (titleEl) document.title = t(titleEl.getAttribute("data-i18n"));
}

document.documentElement.lang = state.locale;
translateDocument();