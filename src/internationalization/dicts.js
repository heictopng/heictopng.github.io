// internationalization/dicts.js

export const DICTS = {
    en: {
        // SEO
        "meta.title":
            "HEIC & HEIF & HIF to JPG/JPEG, PNG & WEBP Converter – Free, Offline & Private (No Uploads)",
        "meta.description":
            "Convert HEIC, HEIF & HIF images to JPG/JPEG, PNG or WEBP directly in your browser. No uploads, works offline, and keeps your photos private with fast, local processing on desktop and mobile devices.",

        // Social previews
        "meta.ogTitle":
            "HEIC & HEIF & HIF to JPG/JPEG, PNG & WEBP Converter – Free, Offline & Private (No Uploads)",
        "meta.ogDescription":
            "Convert HEIC, HEIF & HIF images to JPG/JPEG, PNG or WEBP directly in your browser. No uploads, works offline, and keeps your photos private with fast, local processing on desktop and mobile devices.",
        "meta.twitterTitle":
            "HEIC & HEIF & HIF to JPG/JPEG, PNG & WEBP Converter – Free, Offline & Private (No Uploads)",
        "meta.twitterDescription":
            "Convert HEIC, HEIF & HIF images to JPG/JPEG, PNG or WEBP directly in your browser. No uploads, works offline, and keeps your photos private with fast, local processing on desktop and mobile devices.",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "Convert HEIC/HEIF/HIF in your browser",
        "seo.aboutP1":
            "Convert .heic, .heif and .hif photos to JPG/JPEG, PNG or WEBP locally in your browser. No uploads — your images stay on your device.",
        "seo.faqTitle": "FAQ",
        "seo.faq1q": "How do I convert HEIC / HEIF / HIF to JPG or JPEG?",
        "seo.faq1a":
            "Drop your .heic, .heif or .hif files into the page (or click “Choose files”), pick JPG/JPEG as the output format, then click “Convert all”. When it finishes, download each file or use “Download ZIP”.",
        "seo.faq2q": "Can I convert HEIC / HEIF / HIFto PNG, WEBP, or JPEG?",
        "seo.faq2a":
            "Yes. Select JPG/JPEG, PNG or WEBP in the Output dropdown, then convert. This works for .heic, .heif and .hif images.",
        "seo.faq3q": "Is it private? Are my HEIC / HEIF / HIF files uploaded?",
        "seo.faq3a":
            "No uploads. Conversion happens locally in your browser, so your .heic, .heif and .hif images never leave your device.",
        "seo.synonyms":
            "Convert HEIC/HEIF/HIF to JPG/JPEG, PNG, or WEBP — free image converter in your browser.",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP Converter",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "Client-side. No uploads. Works offline once loaded.",

        "dropzone.ariaLabel": "Drop HEIC / HEIF / HIF files here",
        "dropzone.strong": "Drop .heic/.heif/.hif files",
        "dropzone.or": "or",
        "dropzone.choose": "Choose files",

        "options.output": "Output",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "JPG quality",
        "options.cpuUsage": "CPU usage",
        "options.cpuWarn":
            "⚠️ High CPU usage (75%+) may slow down your PC depending on hardware capabilities.",

        "buttons.convertAll": "Convert all",
        "buttons.downloadZip": "Download ZIP",
        "buttons.clear": "Clear",

        "queue.title": "Queue",

        "footer.tip": "Tip: Large batches decode faster if you keep the tab focused.",

        // Runtime strings (src/app.js)
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
        "progress.label": "{done}/{total} processed • {converted} converted • {errors} errors",

        "zip.overlay.title": "Creating ZIP…",
        "zip.overlay.progress": "{pct}% ({current}/{total})",
    },

    es: {
        // SEO
        "meta.title":
            "Convertidor de HEIC, HEIF y HIF a JPG/JPEG, PNG y WEBP – Gratis, offline y privado (sin subidas)",
        "meta.description":
            "Convierte imágenes HEIC, HEIF y HIF a JPG/JPEG, PNG o WEBP directamente en tu navegador. Sin subidas, funciona offline y mantiene tus fotos privadas con procesamiento local rápido en ordenador y móvil.",

        // Social previews
        "meta.ogTitle":
            "Convertidor de HEIC, HEIF y HIF a JPG/JPEG, PNG y WEBP – Gratis, offline y privado (sin subidas)",
        "meta.ogDescription":
            "Convierte imágenes HEIC, HEIF y HIF a JPG/JPEG, PNG o WEBP directamente en tu navegador. Sin subidas, funciona offline y mantiene tus fotos privadas con procesamiento local rápido en ordenador y móvil.",
        "meta.twitterTitle":
            "Convertidor de HEIC, HEIF y HIF a JPG/JPEG, PNG y WEBP – Gratis, offline y privado (sin subidas)",
        "meta.twitterDescription":
            "Convierte imágenes HEIC, HEIF y HIF a JPG/JPEG, PNG o WEBP directamente en tu navegador. Sin subidas, funciona offline y mantiene tus fotos privadas con procesamiento local rápido en ordenador y móvil.",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "Convierte HEIC/HEIF/HIF en tu navegador",
        "seo.aboutP1":
            "Convierte fotos .heic, .heif y .hif a JPG/JPEG, PNG o WEBP localmente en tu navegador. Sin subidas: tus imágenes se quedan en tu dispositivo.",
        "seo.faqTitle": "Preguntas frecuentes",
        "seo.faq1q": "¿Cómo convierto HEIC / HEIF / HIF a JPG o JPEG?",
        "seo.faq1a":
            "Suelta tus archivos .heic, .heif o .hif en la página (o haz clic en “Elegir archivos”), selecciona JPG/JPEG como salida y pulsa “Convertir todo”. Al terminar, descarga cada archivo o usa “Descargar ZIP”.",
        "seo.faq2q": "¿Puedo convertir HEIC / HEIF / HIF a PNG, WEBP o JPEG?",
        "seo.faq2a":
            "Sí. En el desplegable de salida elige JPG/JPEG, PNG o WEBP y luego convierte. Funciona con imágenes .heic, .heif y .hif.",
        "seo.faq3q": "¿Es privado? ¿Se suben mis archivos HEIC / HEIF / HIF?",
        "seo.faq3a":
            "No se sube nada. La conversión ocurre localmente en tu navegador, así que tus imágenes .heic, .heif y .hif no salen de tu dispositivo.",
        "seo.synonyms":
            "Convierte HEIC/HEIF/HIF a JPG/JPEG, PNG o WEBP — conversor de imágenes gratis en tu navegador.",

        // Existing UI
        "app.title": "Convertidor HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "En tu dispositivo. Sin subidas. Funciona sin conexión una vez cargado.",

        "dropzone.ariaLabel": "Suelta archivos HEIC / HEIF / HIF aquí",
        "dropzone.strong": "Suelta archivos .heic/.heif/.hif",
        "dropzone.or": "o",
        "dropzone.choose": "Elegir archivos",

        "options.output": "Salida",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "Calidad JPG",
        "options.cpuUsage": "Uso de CPU",
        "options.cpuWarn":
            "⚠️ Un uso alto de CPU (75%+) puede ralentizar tu PC según las capacidades del hardware.",

        "buttons.convertAll": "Convertir todo",
        "buttons.downloadZip": "Descargar ZIP",
        "buttons.clear": "Limpiar",

        "queue.title": "Cola",

        "footer.tip": "Consejo: Los lotes grandes decodifican más rápido si mantienes la pestaña activa.",

        // Runtime strings
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
        "progress.label": "{done}/{total} procesadas • {converted} convertidas • {errors} errores",

        "zip.overlay.title": "Creando ZIP…",
        "zip.overlay.progress": "{pct}% ({current}/{total})",
    },

    pt: {
        // SEO
        "meta.title":
            "Conversor de HEIC, HEIF e HIF para JPG/JPEG, PNG e WEBP – Grátis, offline e privado (sem uploads)",
        "meta.description":
            "Converta imagens HEIC, HEIF e HIF para JPG/JPEG, PNG ou WEBP diretamente no seu navegador. Sem uploads, funciona offline e mantém suas fotos privadas com processamento local rápido em desktop e celular.",

        // Social previews
        "meta.ogTitle":
            "Conversor de HEIC, HEIF e HIF para JPG/JPEG, PNG e WEBP – Grátis, offline e privado (sem uploads)",
        "meta.ogDescription":
            "Converta imagens HEIC, HEIF e HIF para JPG/JPEG, PNG ou WEBP diretamente no seu navegador. Sem uploads, funciona offline e mantém suas fotos privadas com processamento local rápido em desktop e celular.",
        "meta.twitterTitle":
            "Conversor de HEIC, HEIF e HIF para JPG/JPEG, PNG e WEBP – Grátis, offline e privado (sem uploads)",
        "meta.twitterDescription":
            "Converta imagens HEIC, HEIF e HIF para JPG/JPEG, PNG ou WEBP diretamente no seu navegador. Sem uploads, funciona offline e mantém suas fotos privadas com processamento local rápido em desktop e celular.",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "Converta HEIC/HEIF/HIF no seu navegador",
        "seo.aboutP1":
            "Converta fotos .heic, .heif e .hif em JPG/JPEG, PNG ou WEBP localmente no seu navegador. Sem uploads — suas imagens ficam no seu dispositivo.",
        "seo.faqTitle": "Perguntas frequentes",
        "seo.faq1q": "Como converter HEIC / HEIF / HIF para JPG ou JPEG?",
        "seo.faq1a":
            "Solte seus arquivos .heic, .heif ou .hif na página (ou clique em “Escolher arquivos”), selecione JPG/JPEG como saída e clique em “Converter tudo”. Ao finalizar, baixe cada arquivo ou use “Baixar ZIP”.",
        "seo.faq2q": "Posso converter HEIC / HEIF / HIF para PNG, WEBP ou JPEG?",
        "seo.faq2a":
            "Sim. No menu de saída, selecione JPG/JPEG, PNG ou WEBP e converta. Funciona para imagens .heic, .heif e .hif.",
        "seo.faq3q": "É privado? Vocês fazem upload dos meus arquivos HEIC / HEIF / HIF?",
        "seo.faq3a":
            "Sem uploads. A conversão acontece localmente no seu navegador, então suas imagens .heic, .heif e .hif não saem do seu dispositivo.",
        "seo.synonyms":
            "Converta HEIC/HEIF/HIF para JPG/JPEG, PNG ou WEBP — conversor de imagens grátis no navegador.",

        // Existing UI
        "app.title": "Conversor HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "No seu dispositivo. Sem uploads. Funciona offline após carregar.",

        "dropzone.ariaLabel": "Solte arquivos HEIC / HEIF / HIF aqui",
        "dropzone.strong": "Solte arquivos .heic/.heif/.hif",
        "dropzone.or": "ou",
        "dropzone.choose": "Escolher arquivos",

        "options.output": "Formato",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "Qualidade JPG",
        "options.cpuUsage": "Uso de CPU",
        "options.cpuWarn":
            "⚠️ Um uso alto de CPU (75%+) pode deixar o PC mais lento, dependendo do hardware.",

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
        "progress.label": "{done}/{total} processadas • {converted} convertidas • {errors} erros",

        "zip.overlay.title": "Criando ZIP…",
        "zip.overlay.progress": "{pct}% ({current}/{total})",
    },

    ja: {
        // SEO
        "meta.title":
            "HEIC/HEIF/HIF → JPG/JPEG・PNG・WEBP 変換 – 無料・オフライン・プライベート（アップロード不要）",
        "meta.description":
            "HEIC/HEIF/HIF を JPG/JPEG・PNG・WEBP にブラウザで直接変換。アップロード不要、読み込み後はオフライン対応。PC/スマホで高速なローカル処理で写真を安全に変換できます。",

        // Social previews
        "meta.ogTitle":
            "HEIC/HEIF/HIF → JPG/JPEG・PNG・WEBP 変換 – 無料・オフライン・プライベート（アップロード不要）",
        "meta.ogDescription":
            "HEIC/HEIF/HIF を JPG/JPEG・PNG・WEBP にブラウザで直接変換。アップロード不要、読み込み後はオフライン対応。PC/スマホで高速なローカル処理で写真を安全に変換できます。",
        "meta.twitterTitle":
            "HEIC/HEIF/HIF → JPG/JPEG・PNG・WEBP 変換 – 無料・オフライン・プライベート（アップロード不要）",
        "meta.twitterDescription":
            "HEIC/HEIF/HIF を JPG/JPEG・PNG・WEBP にブラウザで直接変換。アップロード不要、読み込み後はオフライン対応。PC/スマホで高速なローカル処理で写真を安全に変換できます。",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "ブラウザで HEIC/HEIF/HIF（.hif）を変換",
        "seo.aboutP1":
            ".heic / .heif / .hif の写真を、ブラウザ内のローカル処理で JPG/JPEG・PNG・WEBP に変換できます。アップロード不要 — 画像は端末から出ません。",
        "seo.faqTitle": "よくある質問",
        "seo.faq1q": "HEIC / HEIF / HIF（.hif）を JPG または JPEG に変換するには？",
        "seo.faq1a":
            ".heic / .heif / .hif をページにドロップ（または「ファイルを選択」）し、出力を JPG/JPEG にして「すべて変換」をクリックします。完了後、個別にダウンロードするか「ZIPをダウンロード」を使えます。",
        "seo.faq2q": "HEIC / HEIF / HIF（.hif）を PNG・WEBP・JPEG に変換できますか？",
        "seo.faq2a":
            "はい。出力のプルダウンで JPG/JPEG・PNG・WEBP を選んで変換してください。.heic / .heif / .hif に対応しています。",
        "seo.faq3q": "プライバシーは大丈夫？HEIC / HEIF / HIF（.hif）をアップロードしますか？",
        "seo.faq3a":
            "アップロードはありません。変換はブラウザ内でローカルに行われるため、.heic / .heif / .hif は端末から出ません。",
        "seo.synonyms":
            "HEIC/HEIF/HIF を JPG/JPEG・PNG・WEBP に変換 — ブラウザで使える無料画像コンバーター。",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF（.hif/.heic）→ JPG / JPEG / PNG / WEBP 変換",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "端末内で処理。アップロード不要。読み込み後はオフライン対応。",

        "dropzone.ariaLabel": "ここに HEIC / HEIF / HIF ファイルをドロップ",
        "dropzone.strong": ".heic / .heif / .hif ファイルをドロップ",
        "dropzone.or": "または",
        "dropzone.choose": "ファイルを選択",

        "options.output": "出力形式",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "JPG 画質",
        "options.cpuUsage": "CPU 使用率",
        "options.cpuWarn":
            "⚠️ CPU 使用率が高い（75% 以上）と、ハードウェアによっては PC が遅くなる可能性があります。",

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
        "progress.label": "{done}/{total} 処理済み • {converted} 変換済み • {errors} エラー",

        "zip.overlay.title": "ZIP を作成中…",
        "zip.overlay.progress": "{pct}%（{current}/{total}）",
    },

    zh: {
        // SEO
        "meta.title":
            "HEIC/HEIF/HIF 转 JPG/JPEG、PNG、WEBP – 免费、离线、隐私（无需上传）",
        "meta.description":
            "在浏览器中将 HEIC、HEIF、HIF 转换为 JPG/JPEG、PNG 或 WEBP。无需上传，加载后可离线使用，并通过快速本地处理保护你的照片隐私，支持电脑和手机。",

        // Social previews
        "meta.ogTitle":
            "HEIC/HEIF/HIF 转 JPG/JPEG、PNG、WEBP – 免费、离线、隐私（无需上传）",
        "meta.ogDescription":
            "在浏览器中将 HEIC、HEIF、HIF 转换为 JPG/JPEG、PNG 或 WEBP。无需上传，加载后可离线使用，并通过快速本地处理保护你的照片隐私，支持电脑和手机。",
        "meta.twitterTitle":
            "HEIC/HEIF/HIF 转 JPG/JPEG、PNG、WEBP – 免费、离线、隐私（无需上传）",
        "meta.twitterDescription":
            "在浏览器中将 HEIC、HEIF、HIF 转换为 JPG/JPEG、PNG 或 WEBP。无需上传，加载后可离线使用，并通过快速本地处理保护你的照片隐私，支持电脑和手机。",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "在浏览器中转换 HEIC/HEIF/HIF（.hif）",
        "seo.aboutP1":
            "将 .heic、.heif、.hif 照片在浏览器本地转换为 JPG/JPEG、PNG 或 WEBP。无需上传——图片始终保留在你的设备上。",
        "seo.faqTitle": "常见问题",
        "seo.faq1q": "如何把 HEIC / HEIF / HIF（.hif）转换为 JPG 或 JPEG？",
        "seo.faq1a":
            "把 .heic、.heif 或 .hif 拖到页面（或点击“选择文件”），输出选择 JPG/JPEG，然后点击“全部转换”。完成后可逐个下载，或使用“下载 ZIP”。",
        "seo.faq2q": "可以把 HEIC / HEIF / HIF（.hif）转换为 PNG、WEBP 或 JPEG 吗？",
        "seo.faq2a":
            "可以。在输出下拉框选择 JPG/JPEG、PNG 或 WEBP 后转换即可。支持 .heic、.heif、.hif。",
        "seo.faq3q": "安全吗？我的 HEIC / HEIF / HIF（.hif）会被上传吗？",
        "seo.faq3a":
            "不会上传。转换在浏览器本地完成，因此你的 .heic、.heif、.hif 不会离开设备。",
        "seo.synonyms":
            "HEIC / HEIF / HIF（.hif）转换 • HEIC 转 JPG • HEIC 转 JPEG • HEIC 转 PNG • HEIF 转 JPG • HEIF 转 JPEG • HEIF 转 PNG • HIF 转 JPG • HIF 转 JPEG • HIF 转 PNG • HIF 转 WEBP • 离线图片转换器",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF（.hif/.heic）→ JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "本地处理，无需上传。加载后可离线使用。",

        "dropzone.ariaLabel": "将 HEIC / HEIF / HIF 文件拖到这里",
        "dropzone.strong": "拖放 .heic / .heif / .hif 文件",
        "dropzone.or": "或",
        "dropzone.choose": "选择文件",

        "options.output": "输出格式",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "JPG 质量",
        "options.cpuUsage": "CPU 使用率",
        "options.cpuWarn":
            "⚠️ CPU 使用率较高（75% 以上）可能会因硬件性能不同而导致电脑变慢。",

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
        "progress.label": "已处理 {done}/{total} • 已转换 {converted} • 错误 {errors}",

        "zip.overlay.title": "正在创建 ZIP…",
        "zip.overlay.progress": "{pct}%（{current}/{total}）",
    },

    ar: {
        // SEO
        "meta.title":
            "محول HEIC/HEIF/HIF إلى JPG/JPEG وPNG وWEBP – مجاني، أوفلاين وخاص (بدون رفع)",
        "meta.description":
            "حوّل صور HEIC وHEIF وHIF إلى JPG/JPEG أو PNG أو WEBP مباشرةً في المتصفح. بدون رفع ملفات، يعمل دون اتصال بعد التحميل، ويحافظ على خصوصية صورك عبر معالجة محلية سريعة على الكمبيوتر والجوال.",

        // Social previews
        "meta.ogTitle":
            "محول HEIC/HEIF/HIF إلى JPG/JPEG وPNG وWEBP – مجاني، أوفلاين وخاص (بدون رفع)",
        "meta.ogDescription":
            "حوّل صور HEIC وHEIF وHIF إلى JPG/JPEG أو PNG أو WEBP مباشرةً في المتصفح. بدون رفع ملفات، يعمل دون اتصال بعد التحميل، ويحافظ على خصوصية صورك عبر معالجة محلية سريعة على الكمبيوتر والجوال.",
        "meta.twitterTitle":
            "محول HEIC/HEIF/HIF إلى JPG/JPEG وPNG وWEBP – مجاني، أوفلاين وخاص (بدون رفع)",
        "meta.twitterDescription":
            "حوّل صور HEIC وHEIF وHIF إلى JPG/JPEG أو PNG أو WEBP مباشرةً في المتصفح. بدون رفع ملفات، يعمل دون اتصال بعد التحميل، ويحافظ على خصوصية صورك عبر معالجة محلية سريعة على الكمبيوتر والجوال.",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "حوّل HEIC/HEIF/HIF ‏(.hif) داخل المتصفح",
        "seo.aboutP1":
            "حوّل صور ‎.heic و‎.heif و‎.hif إلى JPG/JPEG أو PNG أو WEBP محليًا داخل المتصفح. بدون رفع — صورك تبقى على جهازك.",
        "seo.faqTitle": "الأسئلة الشائعة",
        "seo.faq1q": "كيف أحوّل HEIC / HEIF / HIF ‏(.hif) إلى JPG أو JPEG؟",
        "seo.faq1a":
            "اسحب ملفات ‎.heic أو ‎.heif أو ‎.hif إلى الصفحة (أو اضغط «اختر الملفات»)، اختر JPG/JPEG كصيغة إخراج، ثم اضغط «تحويل الكل». بعد الانتهاء يمكنك تنزيل كل ملف أو استخدام «تحميل ZIP».",
        "seo.faq2q": "هل يمكن تحويل HEIC / HEIF / HIF ‏(.hif) إلى PNG أو WEBP أو JPEG؟",
        "seo.faq2a":
            "نعم. اختر JPG/JPEG أو PNG أو WEBP من قائمة الإخراج ثم حوّل. يعمل مع ‎.heic و‎.heif و‎.hif.",
        "seo.faq3q": "هل هو خاص؟ هل يتم رفع ملفات HEIC / HEIF / HIF ‏(.hif)؟",
        "seo.faq3a":
            "لا يوجد رفع. التحويل يتم محليًا داخل متصفحك، لذا ملفات ‎.heic و‎.heif و‎.hif لا تغادر جهازك.",
        "seo.synonyms":
            "محول HEIC / HEIF / HIF ‏(.hif) • HEIC إلى JPG • HEIC إلى JPEG • HEIC إلى PNG • HEIF إلى JPG • HEIF إلى JPEG • HEIF إلى PNG • HIF إلى JPG • HIF إلى JPEG • HIF إلى PNG • HIF إلى WEBP • محول صور أوفلاين",

        // Existing UI
        "app.title": "محول HEIC / HEIF / HIF ‏(.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "يعمل محليًا. بدون رفع ملفات. يعمل دون اتصال بعد التحميل.",

        "dropzone.ariaLabel": "اسحب ملفات HEIC / HEIF / HIF هنا",
        "dropzone.strong": "اسحب ملفات ‎.heic / .heif / .hif",
        "dropzone.or": "أو",
        "dropzone.choose": "اختر الملفات",

        "options.output": "الصيغة",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "جودة JPG",
        "options.cpuUsage": "استخدام المعالج",
        "options.cpuWarn":
            "⚠️ قد يؤدي الاستخدام المرتفع للمعالج (75%+) إلى إبطاء جهازك حسب قدرات العتاد.",

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

        "thumb.failed": "تعذر إنشاء المعاينة.",

        "progress.aria": "تقدم التحويل",
        "progress.label": "تمت المعالجة {done}/{total} • تم التحويل {converted} • أخطاء {errors}",

        "zip.overlay.title": "جارٍ إنشاء ZIP…",
        "zip.overlay.progress": "{pct}% ({current}/{total})",
    },

    hi: {
        // SEO
        "meta.title":
            "HEIC/HEIF/HIF से JPG/JPEG, PNG और WEBP कनवर्टर – फ्री, ऑफ़लाइन और प्राइवेट (नो अपलोड्स)",
        "meta.description":
            "HEIC, HEIF और HIF इमेज को JPG/JPEG, PNG या WEBP में सीधे ब्राउज़र में कनवर्ट करें। कोई अपलोड नहीं, लोड होने के बाद ऑफ़लाइन काम करता है और तेज़ लोकल प्रोसेसिंग से आपकी फ़ोटो प्राइवेट रहती हैं — डेस्कटॉप और मोबाइल पर।",

        // Social previews
        "meta.ogTitle":
            "HEIC/HEIF/HIF से JPG/JPEG, PNG और WEBP कनवर्टर – फ्री, ऑफ़लाइन और प्राइवेट (नो अपलोड्स)",
        "meta.ogDescription":
            "HEIC, HEIF और HIF इमेज को JPG/JPEG, PNG या WEBP में सीधे ब्राउज़र में कनवर्ट करें। कोई अपलोड नहीं, लोड होने के बाद ऑफ़लाइन काम करता है और तेज़ लोकल प्रोसेसिंग से आपकी फ़ोटो प्राइवेट रहती हैं — डेस्कटॉप और मोबाइल पर।",
        "meta.twitterTitle":
            "HEIC/HEIF/HIF से JPG/JPEG, PNG और WEBP कनवर्टर – फ्री, ऑफ़लाइन और प्राइवेट (नो अपलोड्स)",
        "meta.twitterDescription":
            "HEIC, HEIF और HIF इमेज को JPG/JPEG, PNG या WEBP में सीधे ब्राउज़र में कनवर्ट करें। कोई अपलोड नहीं, लोड होने के बाद ऑफ़लाइन काम करता है और तेज़ लोकल प्रोसेसिंग से आपकी फ़ोटो प्राइवेट रहती हैं — डेस्कटॉप और मोबाइल पर।",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "ब्राउज़र में HEIC/HEIF/HIF कनवर्ट करें",
        "seo.aboutP1":
            ".heic, .heif और .hif फ़ोटो को अपने ब्राउज़र में लोकल प्रोसेसिंग से JPG/JPEG, PNG या WEBP में कनवर्ट करें। कोई अपलोड नहीं — आपकी इमेज आपके डिवाइस पर ही रहती है।",
        "seo.faqTitle": "FAQ",
        "seo.faq1q": "HEIC / HEIF / HIF को JPG या JPEG में कैसे कनवर्ट करें?",
        "seo.faq1a":
            ".heic, .heif या .hif फ़ाइलें पेज पर ड्रॉप करें (या “फ़ाइलें चुनें” पर क्लिक करें), आउटपुट में JPG/JPEG चुनें, फिर “सभी कनवर्ट करें” दबाएँ। पूरा होने पर हर फ़ाइल डाउनलोड करें या “ZIP डाउनलोड करें” का उपयोग करें।",
        "seo.faq2q": "क्या मैं HEIC / HEIF / HIF को PNG, WEBP या JPEG में कनवर्ट कर सकता हूँ?",
        "seo.faq2a":
            "हाँ। आउटपुट ड्रॉपडाउन में JPG/JPEG, PNG या WEBP चुनें और कनवर्ट करें। यह .heic, .heif और .hif पर काम करता है।",
        "seo.faq3q": "क्या यह प्राइवेट है? क्या मेरे HEIC / HEIF / HIF अपलोड होते हैं?",
        "seo.faq3a":
            "कोई अपलोड नहीं। कन्वर्ज़न आपके ब्राउज़र में लोकल होता है, इसलिए आपकी .heic, .heif और .hif फ़ाइलें डिवाइस से बाहर नहीं जातीं।",
        "seo.synonyms":
            "HEIC / HEIF / HIF कनवर्टर • HEIC से JPG • HEIC से JPEG • HEIC से PNG • HEIF से JPG • HEIF से JPEG • HEIF से PNG • HIF से JPG • HIF से JPEG • HIF से PNG • HIF से WEBP • ऑफ़लाइन इमेज कनवर्टर",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP कनवर्टर",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "डिवाइस पर ही प्रोसेसिंग। कोई अपलोड नहीं। लोड होने के बाद ऑफ़लाइन काम करता है।",

        "dropzone.ariaLabel": "HEIC / HEIF / HIF फ़ाइलें यहाँ छोड़ें",
        "dropzone.strong": ".heic / .heif / .hif फ़ाइलें छोड़ें",
        "dropzone.or": "या",
        "dropzone.choose": "फ़ाइलें चुनें",

        "options.output": "आउटपुट",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "JPG गुणवत्ता",
        "options.cpuUsage": "CPU उपयोग",
        "options.cpuWarn":
            "⚠️ CPU का अधिक उपयोग (75%+) आपके हार्डवेयर के अनुसार PC को धीमा कर सकता है।",

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
        "progress.label": "{done}/{total} प्रोसेस्ड • {converted} कन्वर्टेड • {errors} त्रुटियाँ",

        "zip.overlay.title": "ZIP बनाया जा रहा है…",
        "zip.overlay.progress": "{pct}% ({current}/{total})",
    },

    de: {
        // SEO
        "meta.title":
            "HEIC, HEIF & HIF zu JPG/JPEG, PNG & WEBP Konverter – Kostenlos, offline & privat (ohne Uploads)",
        "meta.description":
            "Konvertiere HEIC-, HEIF- und HIF-Bilder zu JPG/JPEG, PNG oder WEBP direkt im Browser. Keine Uploads, offline nutzbar und privat dank schneller, lokaler Verarbeitung auf Desktop und Mobilgeräten.",

        // Social previews
        "meta.ogTitle":
            "HEIC, HEIF & HIF zu JPG/JPEG, PNG & WEBP Konverter – Kostenlos, offline & privat (ohne Uploads)",
        "meta.ogDescription":
            "Konvertiere HEIC-, HEIF- und HIF-Bilder zu JPG/JPEG, PNG oder WEBP direkt im Browser. Keine Uploads, offline nutzbar und privat dank schneller, lokaler Verarbeitung auf Desktop und Mobilgeräten.",
        "meta.twitterTitle":
            "HEIC, HEIF & HIF zu JPG/JPEG, PNG & WEBP Konverter – Kostenlos, offline & privat (ohne Uploads)",
        "meta.twitterDescription":
            "Konvertiere HEIC-, HEIF- und HIF-Bilder zu JPG/JPEG, PNG oder WEBP direkt im Browser. Keine Uploads, offline nutzbar und privat dank schneller, lokaler Verarbeitung auf Desktop und Mobilgeräten.",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "HEIC/HEIF/HIF im Browser konvertieren",
        "seo.aboutP1":
            "Konvertiere .heic-, .heif- und .hif-Fotos lokal im Browser zu JPG/JPEG, PNG oder WEBP. Keine Uploads — deine Bilder bleiben auf deinem Gerät.",
        "seo.faqTitle": "FAQ",
        "seo.faq1q": "Wie konvertiere ich HEIC / HEIF / HIF zu JPG oder JPEG?",
        "seo.faq1a":
            "Ziehe deine .heic-, .heif- oder .hif-Dateien auf die Seite (oder klicke „Dateien auswählen“), wähle JPG/JPEG als Ausgabe und klicke „Alle konvertieren“. Danach kannst du jede Datei einzeln herunterladen oder „ZIP herunterladen“ nutzen.",
        "seo.faq2q": "Kann ich HEIC / HEIF / HIF zu PNG, WEBP oder JPEG konvertieren?",
        "seo.faq2a":
            "Ja. Wähle im Ausgabe-Menü JPG/JPEG, PNG oder WEBP und starte die Konvertierung. Das funktioniert für .heic, .heif und .hif.",
        "seo.faq3q": "Ist es privat? Werden meine HEIC / HEIF / HIF Dateien hochgeladen?",
        "seo.faq3a":
            "Keine Uploads. Die Konvertierung läuft lokal im Browser — deine .heic-, .heif- und .hif-Dateien verlassen dein Gerät nicht.",
        "seo.synonyms":
            "HEIC / HEIF / HIF Konverter • HEIC zu JPG • HEIC zu JPEG • HEIC zu PNG • HEIF zu JPG • HEIF zu JPEG • HEIF zu PNG • HIF zu JPG • HIF zu JPEG • HIF zu PNG • HIF zu WEBP • Offline-Bildkonverter",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP Konverter",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "Lokal im Browser. Keine Uploads. Nach dem Laden offline nutzbar.",

        "dropzone.ariaLabel": "HEIC / HEIF / HIF Dateien hier ablegen",
        "dropzone.strong": ".heic / .heif / .hif Dateien ablegen",
        "dropzone.or": "oder",
        "dropzone.choose": "Dateien auswählen",

        "options.output": "Ausgabe",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "JPG-Qualität",
        "options.cpuUsage": "CPU-Auslastung",
        "options.cpuWarn":
            "⚠️ Eine hohe CPU-Auslastung (75%+) kann deinen PC je nach Hardware verlangsamen.",

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
        "progress.label": "{done}/{total} verarbeitet • {converted} konvertiert • {errors} Fehler",

        "zip.overlay.title": "ZIP wird erstellt…",
        "zip.overlay.progress": "{pct}% ({current}/{total})",
    },

    fr: {
        // SEO
        "meta.title":
            "Convertisseur HEIC, HEIF & HIF en JPG/JPEG, PNG & WEBP – Gratuit, hors ligne & privé (sans envoi)",
        "meta.description":
            "Convertissez des images HEIC, HEIF et HIF en JPG/JPEG, PNG ou WEBP directement dans votre navigateur. Aucun envoi, fonctionne hors ligne et protège vos photos grâce à un traitement local rapide sur ordinateur et mobile.",

        // Social previews
        "meta.ogTitle":
            "Convertisseur HEIC, HEIF & HIF en JPG/JPEG, PNG & WEBP – Gratuit, hors ligne & privé (sans envoi)",
        "meta.ogDescription":
            "Convertissez des images HEIC, HEIF et HIF en JPG/JPEG, PNG ou WEBP directement dans votre navigateur. Aucun envoi, fonctionne hors ligne et protège vos photos grâce à un traitement local rapide sur ordinateur et mobile.",
        "meta.twitterTitle":
            "Convertisseur HEIC, HEIF & HIF en JPG/JPEG, PNG & WEBP – Gratuit, hors ligne & privé (sans envoi)",
        "meta.twitterDescription":
            "Convertissez des images HEIC, HEIF et HIF en JPG/JPEG, PNG ou WEBP directement dans votre navigateur. Aucun envoi, fonctionne hors ligne et protège vos photos grâce à un traitement local rapide sur ordinateur et mobile.",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "Convertir HEIC/HEIF/HIF dans votre navigateur",
        "seo.aboutP1":
            "Convertissez des photos .heic, .heif et .hif en JPG/JPEG, PNG ou WEBP localement dans votre navigateur. Aucun envoi — vos images restent sur votre appareil.",
        "seo.faqTitle": "FAQ",
        "seo.faq1q": "Comment convertir HEIC / HEIF / HIF en JPG ou JPEG ?",
        "seo.faq1a":
            "Déposez vos fichiers .heic, .heif ou .hif sur la page (ou cliquez sur « Choisir des fichiers »), sélectionnez JPG/JPEG comme sortie, puis cliquez sur « Tout convertir ». Ensuite, téléchargez chaque fichier ou utilisez « Télécharger le ZIP ».",
        "seo.faq2q": "Puis-je convertir HEIC / HEIF / HIF en PNG, WEBP ou JPEG ?",
        "seo.faq2a":
            "Oui. Choisissez JPG/JPEG, PNG ou WEBP dans la liste de sortie, puis convertissez. Cela fonctionne pour .heic, .heif et .hif.",
        "seo.faq3q": "Est-ce privé ? Mes fichiers HEIC / HEIF / HIF sont-ils envoyés ?",
        "seo.faq3a":
            "Aucun envoi. La conversion se fait localement dans votre navigateur, donc vos images .heic, .heif et .hif ne quittent jamais votre appareil.",
        "seo.synonyms":
            "Convertisseur HEIC / HEIF / HIF • HEIC en JPG • HEIC en JPEG • HEIC en PNG • HEIF en JPG • HEIF en JPEG • HEIF en PNG • HIF en JPG • HIF en JPEG • HIF en PNG • HIF en WEBP • convertisseur d’images hors ligne",

        // Existing UI
        "app.title": "Convertisseur HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "Traitement local. Aucun envoi. Fonctionne hors ligne après chargement.",

        "dropzone.ariaLabel": "Déposez des fichiers HEIC / HEIF / HIF ici",
        "dropzone.strong": "Déposez des fichiers .heic / .heif / .hif",
        "dropzone.or": "ou",
        "dropzone.choose": "Choisir des fichiers",

        "options.output": "Sortie",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "Qualité JPG",
        "options.cpuUsage": "Utilisation CPU",
        "options.cpuWarn":
            "⚠️ Une utilisation CPU élevée (75%+) peut ralentir votre PC selon les capacités matérielles.",

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
        "progress.label": "{done}/{total} traitées • {converted} converties • {errors} erreurs",

        "zip.overlay.title": "Création du ZIP…",
        "zip.overlay.progress": "{pct}% ({current}/{total})",
    },

    ru: {
        // SEO
        "meta.title":
            "Конвертер HEIC/HEIF/HIF в JPG/JPEG, PNG и WEBP – Бесплатно, офлайн и приватно (без загрузок)",
        "meta.description":
            "Конвертируйте изображения HEIC, HEIF и HIF в JPG/JPEG, PNG или WEBP прямо в браузере. Без загрузки файлов, работает офлайн и сохраняет приватность благодаря быстрой локальной обработке на компьютере и телефоне.",

        // Social previews
        "meta.ogTitle":
            "Конвертер HEIC/HEIF/HIF в JPG/JPEG, PNG и WEBP – Бесплатно, офлайн и приватно (без загрузок)",
        "meta.ogDescription":
            "Конвертируйте изображения HEIC, HEIF и HIF в JPG/JPEG, PNG или WEBP прямо в браузере. Без загрузки файлов, работает офлайн и сохраняет приватность благодаря быстрой локальной обработке на компьютере и телефоне.",
        "meta.twitterTitle":
            "Конвертер HEIC/HEIF/HIF в JPG/JPEG, PNG и WEBP – Бесплатно, офлайн и приватно (без загрузок)",
        "meta.twitterDescription":
            "Конвертируйте изображения HEIC, HEIF и HIF в JPG/JPEG, PNG или WEBP прямо в браузере. Без загрузки файлов, работает офлайн и сохраняет приватность благодаря быстрой локальной обработке на компьютере и телефоне.",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "Конвертируйте HEIC/HEIF/HIF в браузере",
        "seo.aboutP1":
            "Конвертируйте фото .heic, .heif и .hif в JPG/JPEG, PNG или WEBP локально в браузере. Без загрузок — изображения остаются на вашем устройстве.",
        "seo.faqTitle": "FAQ",
        "seo.faq1q": "Как конвертировать HEIC / HEIF / HIF в JPG или JPEG?",
        "seo.faq1a":
            "Перетащите .heic, .heif или .hif на страницу (или нажмите «Выбрать файлы»), выберите JPG/JPEG как выходной формат и нажмите «Конвертировать все». После завершения скачайте файлы по одному или используйте «Скачать ZIP».",
        "seo.faq2q": "Можно конвертировать HEIC / HEIF / HIF в PNG, WEBP или JPEG?",
        "seo.faq2a":
            "Да. Выберите в списке выхода JPG/JPEG, PNG или WEBP и конвертируйте. Работает с .heic, .heif и .hif.",
        "seo.faq3q": "Это приватно? Мои файлы HEIC / HEIF / HIF загружаются?",
        "seo.faq3a":
            "Никаких загрузок. Конвертация происходит локально в вашем браузере, поэтому .heic, .heif и .hif не покидают устройство.",
        "seo.synonyms":
            "Конвертер HEIC / HEIF / HIF • HEIC в JPG • HEIC в JPEG • HEIC в PNG • HEIF в JPG • HEIF в JPEG • HEIF в PNG • HIF в JPG • HIF в JPEG • HIF в PNG • HIF в WEBP • офлайн-конвертер изображений",

        // Existing UI
        "app.title": "Конвертер HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "Локальная обработка. Без загрузок. Работает офлайн после загрузки.",

        "dropzone.ariaLabel": "Перетащите файлы HEIC / HEIF / HIF сюда",
        "dropzone.strong": "Перетащите файлы .heic / .heif / .hif",
        "dropzone.or": "или",
        "dropzone.choose": "Выбрать файлы",

        "options.output": "Формат",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "Качество JPG",
        "options.cpuUsage": "Загрузка CPU",
        "options.cpuWarn":
            "⚠️ Высокая загрузка CPU (75%+) может замедлить ПК в зависимости от характеристик оборудования.",

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
        "progress.label": "Обработано {done}/{total} • Конвертировано {converted} • Ошибок {errors}",

        "zip.overlay.title": "Создание ZIP…",
        "zip.overlay.progress": "{pct}% ({current}/{total})",
    },

    it: {
        // SEO
        "meta.title":
            "Convertitore HEIC/HEIF/HIF in JPG/JPEG, PNG e WEBP – Gratis, offline e privato (senza upload)",
        "meta.description":
            "Converti immagini HEIC, HEIF e HIF in JPG/JPEG, PNG o WEBP direttamente nel browser. Nessun upload, funziona offline e protegge le tue foto con elaborazione locale rapida su desktop e dispositivi mobili.",

        // Social previews
        "meta.ogTitle":
            "Convertitore HEIC/HEIF/HIF in JPG/JPEG, PNG e WEBP – Gratis, offline e privato (senza upload)",
        "meta.ogDescription":
            "Converti immagini HEIC, HEIF e HIF in JPG/JPEG, PNG o WEBP direttamente nel browser. Nessun upload, funziona offline e protegge le tue foto con elaborazione locale rapida su desktop e dispositivi mobili.",
        "meta.twitterTitle":
            "Convertitore HEIC/HEIF/HIF in JPG/JPEG, PNG e WEBP – Gratis, offline e privato (senza upload)",
        "meta.twitterDescription":
            "Converti immagini HEIC, HEIF e HIF in JPG/JPEG, PNG o WEBP direttamente nel browser. Nessun upload, funziona offline e protegge le tue foto con elaborazione locale rapida su desktop e dispositivi mobili.",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "Converti HEIC/HEIF/HIF nel browser",
        "seo.aboutP1":
            "Converti foto .heic, .heif e .hif in JPG/JPEG, PNG o WEBP localmente nel browser. Nessun upload — le immagini restano sul tuo dispositivo.",
        "seo.faqTitle": "FAQ",
        "seo.faq1q": "Come convertire HEIC / HEIF / HIF in JPG o JPEG?",
        "seo.faq1a":
            "Trascina i file .heic, .heif o .hif nella pagina (o clicca “Scegli file”), scegli JPG/JPEG come output e clicca “Converti tutto”. Alla fine, scarica i file singolarmente o usa “Scarica ZIP”.",
        "seo.faq2q": "Posso convertire HEIC / HEIF / HIF in PNG, WEBP o JPEG?",
        "seo.faq2a":
            "Sì. Seleziona JPG/JPEG, PNG o WEBP nel menu Output e converti. Funziona con .heic, .heif e .hif.",
        "seo.faq3q": "È privato? I miei file HEIC / HEIF / HIF vengono caricati?",
        "seo.faq3a":
            "Nessun upload. La conversione avviene localmente nel browser, quindi .heic, .heif e .hif non lasciano mai il dispositivo.",
        "seo.synonyms":
            "Convertitore HEIC / HEIF / HIF • HEIC in JPG • HEIC in JPEG • HEIC in PNG • HEIF in JPG • HEIF in JPEG • HEIF in PNG • HIF in JPG • HIF in JPEG • HIF in PNG • HIF in WEBP • convertitore immagini offline",

        // Existing UI
        "app.title": "Convertitore HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "Elaborazione locale. Nessun upload. Funziona offline dopo il caricamento.",

        "dropzone.ariaLabel": "Trascina qui i file HEIC / HEIF / HIF",
        "dropzone.strong": "Trascina file .heic / .heif / .hif",
        "dropzone.or": "o",
        "dropzone.choose": "Scegli file",

        "options.output": "Output",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "Qualità JPG",
        "options.cpuUsage": "Uso CPU",
        "options.cpuWarn":
            "⚠️ Un uso elevato della CPU (75%+) potrebbe rallentare il PC a seconda dell’hardware.",

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
        "progress.label": "{done}/{total} elaborati • {converted} convertiti • {errors} errori",

        "zip.overlay.title": "Creazione ZIP…",
        "zip.overlay.progress": "{pct}% ({current}/{total})",
    },

    nl: {
        // SEO
        "meta.title":
            "HEIC/HEIF/HIF naar JPG/JPEG, PNG & WEBP Converter – Gratis, offline & privé (geen uploads)",
        "meta.description":
            "Converteer HEIC-, HEIF- en HIF-afbeeldingen naar JPG/JPEG, PNG of WEBP rechtstreeks in je browser. Geen uploads, werkt offline en houdt je foto’s privé met snelle lokale verwerking op desktop en mobiel.",

        // Social previews
        "meta.ogTitle":
            "HEIC/HEIF/HIF naar JPG/JPEG, PNG & WEBP Converter – Gratis, offline & privé (geen uploads)",
        "meta.ogDescription":
            "Converteer HEIC-, HEIF- en HIF-afbeeldingen naar JPG/JPEG, PNG of WEBP rechtstreeks in je browser. Geen uploads, werkt offline en houdt je foto’s privé met snelle lokale verwerking op desktop en mobiel.",
        "meta.twitterTitle":
            "HEIC/HEIF/HIF naar JPG/JPEG, PNG & WEBP Converter – Gratis, offline & privé (geen uploads)",
        "meta.twitterDescription":
            "Converteer HEIC-, HEIF- en HIF-afbeeldingen naar JPG/JPEG, PNG of WEBP rechtstreeks in je browser. Geen uploads, werkt offline en houdt je foto’s privé met snelle lokale verwerking op desktop en mobiel.",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "Converteer HEIC/HEIF/HIF in je browser",
        "seo.aboutP1":
            "Converteer .heic-, .heif- en .hif-foto’s lokaal in je browser naar JPG/JPEG, PNG of WEBP. Geen uploads — je afbeeldingen blijven op je apparaat.",
        "seo.faqTitle": "FAQ",
        "seo.faq1q": "Hoe converteer ik HEIC / HEIF / HIF naar JPG of JPEG?",
        "seo.faq1a":
            "Sleep je .heic-, .heif- of .hif-bestanden naar de pagina (of klik op “Bestanden kiezen”), kies JPG/JPEG als uitvoer en klik op “Alles converteren”. Download daarna losse bestanden of gebruik “ZIP downloaden”.",
        "seo.faq2q": "Kan ik HEIC / HEIF / HIF naar PNG, WEBP of JPEG converteren?",
        "seo.faq2a":
            "Ja. Kies in de Output-lijst JPG/JPEG, PNG of WEBP en converteer. Dit werkt voor .heic, .heif en .hif.",
        "seo.faq3q": "Is het privé? Worden mijn HEIC / HEIF / HIF bestanden geüpload?",
        "seo.faq3a":
            "Geen uploads. De conversie gebeurt lokaal in je browser, dus je .heic-, .heif- en .hif-bestanden verlaten je apparaat niet.",
        "seo.synonyms":
            "HEIC / HEIF / HIF converter • HEIC naar JPG • HEIC naar JPEG • HEIC naar PNG • HEIF naar JPG • HEIF naar JPEG • HEIF naar PNG • HIF naar JPG • HIF naar JPEG • HIF naar PNG • HIF naar WEBP • offline afbeeldingsconverter",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP Converter",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "Lokaal verwerkt. Geen uploads. Offline beschikbaar na laden.",

        "dropzone.ariaLabel": "Sleep HEIC / HEIF / HIF bestanden hierheen",
        "dropzone.strong": "Sleep .heic / .heif / .hif bestanden",
        "dropzone.or": "of",
        "dropzone.choose": "Bestanden kiezen",

        "options.output": "Uitvoer",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "JPG-kwaliteit",
        "options.cpuUsage": "CPU-gebruik",
        "options.cpuWarn":
            "⚠️ Hoog CPU-gebruik (75%+) kan je pc vertragen, afhankelijk van de hardware.",

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
        "progress.label": "{done}/{total} verwerkt • {converted} geconverteerd • {errors} fouten",

        "zip.overlay.title": "ZIP maken…",
        "zip.overlay.progress": "{pct}% ({current}/{total})",
    },

    pl: {
        // SEO
        "meta.title":
            "Konwerter HEIC/HEIF/HIF do JPG/JPEG, PNG i WEBP – Darmowy, offline i prywatny (bez uploadów)",
        "meta.description":
            "Konwertuj obrazy HEIC, HEIF i HIF do JPG/JPEG, PNG lub WEBP bezpośrednio w przeglądarce. Bez wysyłania plików, działa offline i chroni prywatność dzięki szybkiej lokalnej obróbce na komputerze i telefonie.",

        // Social previews
        "meta.ogTitle":
            "Konwerter HEIC/HEIF/HIF do JPG/JPEG, PNG i WEBP – Darmowy, offline i prywatny (bez uploadów)",
        "meta.ogDescription":
            "Konwertuj obrazy HEIC, HEIF i HIF do JPG/JPEG, PNG lub WEBP bezpośrednio w przeglądarce. Bez wysyłania plików, działa offline i chroni prywatność dzięki szybkiej lokalnej obróbce na komputerze i telefonie.",
        "meta.twitterTitle":
            "Konwerter HEIC/HEIF/HIF do JPG/JPEG, PNG i WEBP – Darmowy, offline i prywatny (bez uploadów)",
        "meta.twitterDescription":
            "Konwertuj obrazy HEIC, HEIF i HIF do JPG/JPEG, PNG lub WEBP bezpośrednio w przeglądarce. Bez wysyłania plików, działa offline i chroni prywatność dzięki szybkiej lokalnej obróbce na komputerze i telefonie.",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "Konwertuj HEIC/HEIF/HIF w przeglądarce",
        "seo.aboutP1":
            "Konwertuj zdjęcia .heic, .heif i .hif na JPG/JPEG, PNG lub WEBP lokalnie w przeglądarce. Bez uploadów — obrazy pozostają na Twoim urządzeniu.",
        "seo.faqTitle": "FAQ",
        "seo.faq1q": "Jak przekonwertować HEIC / HEIF / HIF na JPG lub JPEG?",
        "seo.faq1a":
            "Upuść pliki .heic, .heif lub .hif na stronę (albo kliknij „Wybierz pliki”), wybierz JPG/JPEG jako wyjście i kliknij „Konwertuj wszystko”. Po zakończeniu pobierz pliki osobno lub użyj „Pobierz ZIP”.",
        "seo.faq2q": "Czy mogę konwertować HEIC / HEIF / HIF do PNG, WEBP lub JPEG?",
        "seo.faq2a":
            "Tak. Wybierz w menu wyjścia JPG/JPEG, PNG lub WEBP i konwertuj. Działa dla .heic, .heif i .hif.",
        "seo.faq3q": "Czy to prywatne? Czy moje pliki HEIC / HEIF / HIF są wysyłane?",
        "seo.faq3a":
            "Bez uploadów. Konwersja działa lokalnie w przeglądarce, więc .heic, .heif i .hif nie opuszczają urządzenia.",
        "seo.synonyms":
            "Konwerter HEIC / HEIF / HIF • HEIC do JPG • HEIC do JPEG • HEIC do PNG • HEIF do JPG • HEIF do JPEG • HEIF do PNG • HIF do JPG • HIF do JPEG • HIF do PNG • HIF do WEBP • konwerter obrazów offline",

        // Existing UI
        "app.title": "Konwerter HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "Przetwarzanie lokalne. Bez wysyłania plików. Działa offline po załadowaniu.",

        "dropzone.ariaLabel": "Upuść pliki HEIC / HEIF / HIF tutaj",
        "dropzone.strong": "Upuść pliki .heic / .heif / .hif",
        "dropzone.or": "lub",
        "dropzone.choose": "Wybierz pliki",

        "options.output": "Wyjście",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "Jakość JPG",
        "options.cpuUsage": "Użycie CPU",
        "options.cpuWarn":
            "⚠️ Wysokie użycie CPU (75%+) może spowolnić komputer w zależności od sprzętu.",

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
        "progress.label": "{done}/{total} przetworzone • {converted} przekonwertowane • {errors} błędy",

        "zip.overlay.title": "Tworzenie ZIP…",
        "zip.overlay.progress": "{pct}% ({current}/{total})",
    },

    tr: {
        // SEO
        "meta.title":
            "HEIC/HEIF/HIF’ten JPG/JPEG, PNG ve WEBP’ye Dönüştürücü – Ücretsiz, çevrimdışı ve gizli (yükleme yok)",
        "meta.description":
            "HEIC, HEIF ve HIF görsellerini tarayıcıda doğrudan JPG/JPEG, PNG veya WEBP’ye dönüştürün. Yükleme yok, yüklendikten sonra çevrimdışı çalışır ve masaüstü ve mobil cihazlarda hızlı yerel işlemle fotoğraflarınızı gizli tutar.",

        // Social previews
        "meta.ogTitle":
            "HEIC/HEIF/HIF’ten JPG/JPEG, PNG ve WEBP’ye Dönüştürücü – Ücretsiz, çevrimdışı ve gizli (yükleme yok)",
        "meta.ogDescription":
            "HEIC, HEIF ve HIF görsellerini tarayıcıda doğrudan JPG/JPEG, PNG veya WEBP’ye dönüştürün. Yükleme yok, yüklendikten sonra çevrimdışı çalışır ve masaüstü ve mobil cihazlarda hızlı yerel işlemle fotoğraflarınızı gizli tutar.",
        "meta.twitterTitle":
            "HEIC/HEIF/HIF’ten JPG/JPEG, PNG ve WEBP’ye Dönüştürücü – Ücretsiz, çevrimdışı ve gizli (yükleme yok)",
        "meta.twitterDescription":
            "HEIC, HEIF ve HIF görsellerini tarayıcıda doğrudan JPG/JPEG, PNG veya WEBP’ye dönüştürün. Yükleme yok, yüklendikten sonra çevrimdışı çalışır ve masaüstü ve mobil cihazlarda hızlı yerel işlemle fotoğraflarınızı gizli tutar.",

        // SEO content section (About / FAQ)
        "seo.aboutTitle": "HEIC/HEIF/HIF dosyalarını tarayıcıda dönüştürün",
        "seo.aboutP1":
            ".heic, .heif ve .hif fotoğraflarını tarayıcıda yerel olarak JPG/JPEG, PNG veya WEBP’ye dönüştürün. Yükleme yok — görselleriniz cihazınızda kalır.",
        "seo.faqTitle": "SSS",
        "seo.faq1q": "HEIC / HEIF / HIF dosyalarını JPG veya JPEG’e nasıl dönüştürürüm?",
        "seo.faq1a":
            ".heic, .heif veya .hif dosyalarını sayfaya bırakın (veya “Dosya seç”e tıklayın), çıktı olarak JPG/JPEG seçin ve “Hepsini dönüştür”e basın. Bittiğinde tek tek indirebilir veya “ZIP indir”i kullanabilirsiniz.",
        "seo.faq2q": "HEIC / HEIF / HIF dosyalarını PNG, WEBP veya JPEG’e dönüştürebilir miyim?",
        "seo.faq2a":
            "Evet. Çıktı menüsünden JPG/JPEG, PNG veya WEBP seçip dönüştürün. .heic, .heif ve .hif için çalışır.",
        "seo.faq3q": "Gizli mi? HEIC / HEIF / HIF dosyalarım yükleniyor mu?",
        "seo.faq3a":
            "Yükleme yok. Dönüştürme tarayıcınızda yerel olarak yapılır; .heic, .heif ve .hif dosyalarınız cihazınızdan çıkmaz.",
        "seo.synonyms":
            "HEIC / HEIF / HIF dönüştürücü • HEIC’ten JPG • HEIC’ten JPEG • HEIC’ten PNG • HEIF’ten JPG • HEIF’ten JPEG • HEIF’ten PNG • HIF’ten JPG • HIF’ten JPEG • HIF’ten PNG • HIF’ten WEBP • çevrimdışı görsel dönüştürücü",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP Dönüştürücü",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "Yerel işlem. Yükleme yok. Yüklendikten sonra çevrimdışı çalışır.",

        "dropzone.ariaLabel": "HEIC / HEIF / HIF dosyalarını buraya bırakın",
        "dropzone.strong": ".heic / .heif / .hif dosyalarını bırakın",
        "dropzone.or": "veya",
        "dropzone.choose": "Dosya seç",

        "options.output": "Çıktı",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "JPG kalitesi",
        "options.cpuUsage": "CPU kullanımı",
        "options.cpuWarn":
            "⚠️ Yüksek CPU kullanımı (%75+) donanım özelliklerine bağlı olarak bilgisayarınızı yavaşlatabilir.",

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
        "progress.label": "{done}/{total} işlendi • {converted} dönüştürüldü • {errors} hata",

        "zip.overlay.title": "ZIP oluşturuluyor…",
        "zip.overlay.progress": "{pct}% ({current}/{total})",
    },
};