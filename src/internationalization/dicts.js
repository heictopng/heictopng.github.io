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

        "seo.faq1q": "How do I convert HEIC / HEIF / HIF to JPG or JPEG for free?",
        "seo.faq1a":
            "Drop your .heic, .heif or .hif files into the page (or click “Choose files”), select JPG/JPEG as the output format, and click “Convert all”. The conversion is 100% free, requires no sign-up, and works on desktop, mobile, and tablet devices. When it finishes, download each file individually or use “Download ZIP”.",

        "seo.faq2q":
            "Can I convert HEIC / HEIF / HIF to PNG, WEBP, or JPEG on any device?",
        "seo.faq2a":
            "Yes. Choose JPG/JPEG, PNG, or WEBP in the Output dropdown and convert your images instantly. This free converter works directly in your browser on all devices, including Windows, macOS, Linux, Android, and iOS.",

        "seo.faq3q": "Is this HEIC / HEIF / HIF converter really free?",
        "seo.faq3a":
            "Yes. The converter is completely free to use. There are no limits, no watermarks, no sign-up, and no hidden payments. You can convert as many HEIC, HEIF, or HIF images as you want on any device.",

        "seo.faq4q": "Is it private? Are my HEIC / HEIF / HIF files uploaded?",
        "seo.faq4a":
            "No uploads at all. All image conversions happen locally in your browser, so your .heic, .heif, and .hif files never leave your device. Your photos stay private on desktop and mobile.",

        "seo.faq5q": "Why does “no uploads” matter for photo privacy?",
        "seo.faq5a":
            "Photos often contain personal data (faces, places, documents, private moments). When an online converter uploads images to a server, you lose control: files can be logged, stored longer than expected, shared with third parties, or reused in ways you didn’t intend. A local, in-browser converter avoids that risk by processing everything on your device, so your images don’t travel across the internet and are far less likely to end up somewhere you wouldn’t want.",

        "seo.faq6q": "Why should I care about photos being stored, shared, or used for training?",
        "seo.faq6a":
            "If a tool stores uploaded photos, they can become part of backups, analytics systems, or third-party services — which increases the chance of exposure, resale, or reuse (including training datasets) without you noticing. Choosing a converter that works locally keeps your images under your control: your files stay on your device, you decide who sees them, and your photos aren’t turned into someone else’s product.",

        "seo.synonyms":
            "HEIC / HEIF / HIF converter • HEIC to JPG • HEIC to JPEG • HEIC to PNG • HEIC to WEBP • HEIF to JPG • HEIF to PNG • HIF to JPG • HIF to WEBP • free HEIC converter • offline image converter • no uploads • works on all devices • private image converter",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP Converter",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub":
            "Free & private HEIC/HIF Converter. Local processing, no uploads. Works on desktop and mobile.",

        "dropzone.ariaLabel": "Drop HEIC / HEIF / HIF files here",
        "dropzone.strong": "Drop .heic/.heif/.hif files",
        "dropzone.or": "or",
        "dropzone.choose": "Choose files",

        "trust.line": "Free • No uploads • Works on all devices",
        "trust.buttons": "100% free · No sign-up · No uploads",

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

        "seo.faq1q": "¿Cómo convierto HEIC / HEIF / HIF a JPG o JPEG gratis?",
        "seo.faq1a":
            "Suelta tus archivos .heic, .heif o .hif en la página (o haz clic en “Elegir archivos”), selecciona JPG/JPEG como salida y pulsa “Convertir todo”. La conversión es 100% gratis, no requiere registro y funciona en ordenador, móvil y tablet. Al terminar, descarga cada archivo o usa “Descargar ZIP”.",

        "seo.faq2q":
            "¿Puedo convertir HEIC / HEIF / HIF a PNG, WEBP o JPEG en cualquier dispositivo?",
        "seo.faq2a":
            "Sí. En el desplegable de salida elige JPG/JPEG, PNG o WEBP y convierte al instante. Este conversor gratuito funciona directamente en tu navegador en cualquier dispositivo, incluido Windows, macOS, Linux, Android e iOS.",

        "seo.faq3q": "¿De verdad este convertidor de HEIC / HEIF / HIF es gratis?",
        "seo.faq3a":
            "Sí. El convertidor es completamente gratis. No hay límites, ni marcas de agua, ni registro, ni pagos ocultos. Puedes convertir tantas imágenes HEIC, HEIF o HIF como quieras en cualquier dispositivo.",

        "seo.faq4q": "¿Es privado? ¿Se suben mis archivos HEIC / HEIF / HIF?",
        "seo.faq4a":
            "No se sube nada. Todas las conversiones se hacen localmente en tu navegador, así que tus archivos .heic, .heif y .hif nunca salen de tu dispositivo. Tus fotos se mantienen privadas en ordenador y móvil.",

        "seo.faq5q": "¿Por qué importa “sin subidas” para la privacidad de tus fotos?",
        "seo.faq5a":
            "Las fotos suelen contener datos personales (caras, lugares, documentos, momentos privados). Cuando un conversor online sube imágenes a un servidor, pierdes control: los archivos pueden quedar registrados, almacenarse más tiempo del esperado, compartirse con terceros o reutilizarse de formas que no pretendías. Un conversor local en el navegador reduce ese riesgo al procesar todo en tu dispositivo: tus imágenes no viajan por internet y es mucho menos probable que acaben donde no quieres.",

        "seo.faq6q": "¿Por qué debería preocuparme si las fotos se almacenan, comparten o se usan para entrenar?",
        "seo.faq6a":
            "Si una herramienta almacena fotos subidas, pueden acabar en copias de seguridad, sistemas de analítica o servicios de terceros, lo que aumenta la posibilidad de exposición, reventa o reutilización (incluidos datasets de entrenamiento) sin que te des cuenta. Elegir un conversor que funciona localmente te deja el control: tus archivos se quedan en tu dispositivo, tú decides quién los ve y tus fotos no se convierten en el producto de otra persona.",

        "seo.synonyms":
            "Convertidor HEIC / HEIF / HIF • HEIC a JPG • HEIC a JPEG • HEIC a PNG • HEIC a WEBP • HEIF a JPG • HEIF a PNG • HIF a JPG • HIF a WEBP • convertidor HEIC gratis • convertidor de imágenes offline • sin subidas • funciona en todos los dispositivos • convertidor privado",

        // Existing UI
        "app.title": "Convertidor HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub":
            "Convertidor HEIC/HIF gratis y privado. Procesamiento local, sin subidas. Funciona en ordenador y móvil.",

        "dropzone.ariaLabel": "Suelta archivos HEIC / HEIF / HIF aquí",
        "dropzone.strong": "Suelta archivos .heic/.heif/.hif",
        "dropzone.or": "o",
        "dropzone.choose": "Elegir archivos",

        "trust.line": "Gratis • Sin subidas • Funciona en todos los dispositivos",
        "trust.buttons": "100% gratis · Sin registro · Sin subidas",

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

        "seo.faq1q": "Como converter HEIC / HEIF / HIF para JPG ou JPEG de graça?",
        "seo.faq1a":
            "Solte seus arquivos .heic, .heif ou .hif na página (ou clique em “Escolher arquivos”), selecione JPG/JPEG como saída e clique em “Converter tudo”. A conversão é 100% grátis, não exige cadastro e funciona em computador, celular e tablet. Ao finalizar, baixe cada arquivo ou use “Baixar ZIP”.",

        "seo.faq2q":
            "Posso converter HEIC / HEIF / HIF para PNG, WEBP ou JPEG em qualquer dispositivo?",
        "seo.faq2a":
            "Sim. No menu de saída, selecione JPG/JPEG, PNG ou WEBP e converta na hora. Este conversor grátis funciona diretamente no navegador em qualquer dispositivo, incluindo Windows, macOS, Linux, Android e iOS.",

        "seo.faq3q": "Este conversor de HEIC / HEIF / HIF é realmente grátis?",
        "seo.faq3a":
            "Sim. O conversor é totalmente grátis. Não há limites, nem marca-d’água, nem cadastro, nem pagamentos ocultos. Você pode converter quantas imagens HEIC, HEIF ou HIF quiser em qualquer dispositivo.",

        "seo.faq4q": "É privado? Vocês fazem upload dos meus arquivos HEIC / HEIF / HIF?",
        "seo.faq4a":
            "Sem uploads. Todas as conversões acontecem localmente no seu navegador, então seus arquivos .heic, .heif e .hif nunca saem do seu dispositivo. Suas fotos ficam privadas no computador e no celular.",

        "seo.faq5q": "Por que “sem uploads” importa para a privacidade das fotos?",
        "seo.faq5a":
            "Fotos frequentemente contêm dados pessoais (rostos, lugares, documentos, momentos privados). Quando um conversor online envia imagens para um servidor, você perde o controle: arquivos podem ser registrados, armazenados por mais tempo do que o esperado, compartilhados com terceiros ou reutilizados de maneiras que você não pretendia. Um conversor local no navegador reduz esse risco ao processar tudo no seu dispositivo — suas imagens não viajam pela internet e têm muito menos chance de parar onde você não quer.",

        "seo.faq6q": "Por que devo me preocupar com fotos sendo armazenadas, compartilhadas ou usadas para treinamento?",
        "seo.faq6a":
            "Se uma ferramenta armazena fotos enviadas, elas podem entrar em backups, sistemas de análise ou serviços de terceiros — aumentando a chance de exposição, revenda ou reutilização (inclusive em conjuntos de dados de treinamento) sem que você perceba. Ao escolher um conversor que funciona localmente, você mantém o controle: seus arquivos ficam no seu dispositivo, você decide quem vê e suas fotos não viram o produto de outra pessoa.",

        "seo.synonyms":
            "Conversor HEIC / HEIF / HIF • HEIC para JPG • HEIC para JPEG • HEIC para PNG • HEIC para WEBP • HEIF para JPG • HEIF para PNG • HIF para JPG • HIF para WEBP • conversor HEIC grátis • conversor de imagens offline • sem uploads • funciona em todos os dispositivos • conversor privado",

        // Existing UI
        "app.title": "Conversor HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub":
            "Conversor HEIC/HIF grátis e privado. Processamento local, sem uploads. Funciona em desktop e celular.",

        "dropzone.ariaLabel": "Solte arquivos HEIC / HEIF / HIF aqui",
        "dropzone.strong": "Solte arquivos .heic/.heif/.hif",
        "dropzone.or": "ou",
        "dropzone.choose": "Escolher arquivos",

        "trust.line": "Grátis • Sem uploads • Funciona em todos os dispositivos",
        "trust.buttons": "100% grátis · Sem cadastro · Sem uploads",

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

        "seo.faq1q": "HEIC / HEIF / HIF（.hif）を無料で JPG/JPEG に変換するには？",
        "seo.faq1a":
            ".heic / .heif / .hif をページにドロップ（または「ファイルを選択」）し、出力を JPG/JPEG にして「すべて変換」をクリックします。変換は 100% 無料で登録不要、PC・スマホ・タブレットで動作します。完了後、個別にダウンロードするか「ZIPをダウンロード」を使えます。",

        "seo.faq2q": "どの端末でも HEIC / HEIF / HIF を PNG・WEBP・JPEG に変換できますか？",
        "seo.faq2a":
            "はい。出力のプルダウンで JPG/JPEG・PNG・WEBP を選んで変換してください。無料で、Windows / macOS / Linux / Android / iOS など、あらゆる端末のブラウザで動作します。",

        "seo.faq3q": "この HEIC / HEIF / HIF 変換ツールは本当に無料ですか？",
        "seo.faq3a":
            "はい。完全に無料です。回数制限・透かし・登録・隠れた課金はありません。どの端末でも HEIC/HEIF/HIF を好きなだけ変換できます。",

        "seo.faq4q": "プライバシーは大丈夫？ファイルはアップロードされますか？",
        "seo.faq4a":
            "アップロードはありません。変換はブラウザ内でローカルに行われるため、.heic / .heif / .hif は端末から出ません。PC/スマホでも写真はプライベートに保たれます。",

        "seo.faq5q": "写真のプライバシーで「アップロード不要」が重要なのはなぜ？",
        "seo.faq5a":
            "写真には個人情報（顔、場所、書類、プライベートな瞬間）が含まれることがあります。オンライン変換ツールが画像をサーバーへアップロードすると、管理の主導権が薄れ、ログ記録・想定より長い保管・第三者共有・意図しない再利用の可能性が増えます。端末内で処理するローカル変換なら、画像がインターネットを移動しないため、望まない場所へ広がるリスクを大きく下げられます。",

        "seo.faq6q": "写真が保存・共有・学習に使われることを気にするべき理由は？",
        "seo.faq6a":
            "アップロードされた写真が保存されると、バックアップや解析システム、外部サービスに取り込まれ、露出・転売・再利用（学習データセットを含む）のリスクが高まることがあります。ローカルで動く変換ツールを選べば、画像は端末に留まり、見せる相手を自分で決められ、写真が“誰かのビジネス”に変わってしまう可能性を抑えられます。",

        "seo.synonyms":
            "HEIC / HEIF / HIF 変換 • HEIC→JPG • HEIC→JPEG • HEIC→PNG • HEIC→WEBP • HEIF→JPG • HEIF→PNG • HIF→JPG • HIF→WEBP • 無料 HEIC 変換 • オフライン画像変換 • アップロード不要 • 全端末対応 • プライベート変換",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF（.hif/.heic）→ JPG / JPEG / PNG / WEBP 変換",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub":
            "無料＆プライベートな HEIC/HIF 変換。ローカル処理、アップロード不要。PC/スマホ対応。",

        "dropzone.ariaLabel": "ここに HEIC / HEIF / HIF ファイルをドロップ",
        "dropzone.strong": ".heic / .heif / .hif ファイルをドロップ",
        "dropzone.or": "または",
        "dropzone.choose": "ファイルを選択",

        "trust.line": "無料 • アップロード不要 • すべての端末で動作",
        "trust.buttons": "100% 無料 · 登録不要 · アップロード不要",

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
        "meta.title": "HEIC/HEIF/HIF 转 JPG/JPEG、PNG、WEBP – 免费、离线、隐私（无需上传）",
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

        "seo.faq1q": "如何免费把 HEIC / HEIF / HIF（.hif）转换为 JPG 或 JPEG？",
        "seo.faq1a":
            "把 .heic、.heif 或 .hif 拖到页面（或点击“选择文件”），输出选择 JPG/JPEG，然后点击“全部转换”。转换 100% 免费，无需注册，支持电脑、手机和平板。完成后可逐个下载，或使用“下载 ZIP”。",

        "seo.faq2q": "可以在任何设备上把 HEIC / HEIF / HIF 转为 PNG、WEBP 或 JPEG 吗？",
        "seo.faq2a":
            "可以。在输出下拉框选择 JPG/JPEG、PNG 或 WEBP 后转换即可。此免费工具直接在浏览器运行，支持所有设备，包括 Windows、macOS、Linux、Android 和 iOS。",

        "seo.faq3q": "这个 HEIC / HEIF / HIF 转换器真的免费吗？",
        "seo.faq3a":
            "是的，完全免费。没有次数限制、没有水印、无需注册、也没有隐藏收费。你可以在任何设备上随时转换任意数量的 HEIC/HEIF/HIF 图片。",

        "seo.faq4q": "安全吗？我的 HEIC / HEIF / HIF 文件会被上传吗？",
        "seo.faq4a":
            "不会上传。所有转换都在浏览器本地完成，你的 .heic、.heif、.hif 文件不会离开设备。电脑和手机上都能保持照片隐私。",

        "seo.faq5q": "为什么“无需上传”对照片隐私很重要？",
        "seo.faq5a":
            "照片常包含个人信息（人脸、地点、证件、私密瞬间）。当在线转换工具把图片上传到服务器时，你对文件的控制会变弱：可能会被记录、保存时间超出预期、与第三方共享，或以你没想到的方式被再次使用。使用在浏览器本地处理的工具能降低这些风险：图片不需要通过网络传输，更不容易出现在你不希望的地方。",

        "seo.faq6q": "为什么要在意照片被存储、共享或用于训练？",
        "seo.faq6a":
            "如果工具会存储上传的照片，它们可能进入备份、数据分析系统或第三方服务，增加泄露、转卖或再利用（包括训练数据集）的可能性，而你可能并不会察觉。选择本地运行的转换器能让你保留控制权：文件留在设备上，由你决定谁能看到，也能避免照片变成别人的“产品”。",

        "seo.synonyms":
            "HEIC / HEIF / HIF 转换器 • HEIC 转 JPG • HEIC 转 JPEG • HEIC 转 PNG • HEIC 转 WEBP • HEIF 转 JPG • HEIF 转 PNG • HIF 转 JPG • HIF 转 WEBP • 免费 HEIC 转换器 • 离线图片转换器 • 无需上传 • 适用于所有设备 • 隐私转换器",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF（.hif/.heic）→ JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "免费且注重隐私的 HEIC/HIF 转换器。本地处理，无需上传。支持电脑和手机。",

        "dropzone.ariaLabel": "将 HEIC / HEIF / HIF 文件拖到这里",
        "dropzone.strong": "拖放 .heic / .heif / .hif 文件",
        "dropzone.or": "或",
        "dropzone.choose": "选择文件",

        "trust.line": "免费 • 无需上传 • 适用于所有设备",
        "trust.buttons": "100% 免费 · 无需注册 · 无需上传",

        "options.output": "输出格式",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "JPG 质量",
        "options.cpuUsage": "CPU 使用率",
        "options.cpuWarn": "⚠️ CPU 使用率较高（75% 以上）可能会因硬件性能不同而导致电脑变慢。",

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
        "meta.title": "محول HEIC/HEIF/HIF إلى JPG/JPEG وPNG وWEBP – مجاني، أوفلاين وخاص (بدون رفع)",
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

        "seo.faq1q": "كيف أحوّل HEIC / HEIF / HIF ‏(.hif) إلى JPG أو JPEG مجانًا؟",
        "seo.faq1a":
            "اسحب ملفات ‎.heic أو ‎.heif أو ‎.hif إلى الصفحة (أو اضغط «اختر الملفات»)، اختر JPG/JPEG كصيغة إخراج، ثم اضغط «تحويل الكل». التحويل مجاني 100% وبدون تسجيل ويعمل على الكمبيوتر والجوال والتابلت. بعد الانتهاء يمكنك تنزيل كل ملف أو استخدام «تحميل ZIP».",

        "seo.faq2q": "هل يمكنني تحويل HEIC / HEIF / HIF إلى PNG أو WEBP أو JPEG على أي جهاز؟",
        "seo.faq2a":
            "نعم. اختر JPG/JPEG أو PNG أو WEBP من قائمة الإخراج ثم حوّل. هذا المحول المجاني يعمل مباشرة في المتصفح على جميع الأجهزة، بما في ذلك Windows وmacOS وLinux وAndroid وiOS.",

        "seo.faq3q": "هل هذا المحول HEIC / HEIF / HIF مجاني فعلًا؟",
        "seo.faq3a":
            "نعم. المحول مجاني بالكامل. لا توجد حدود ولا علامات مائية ولا تسجيل ولا مدفوعات مخفية. يمكنك تحويل عدد غير محدود من صور HEIC/HEIF/HIF على أي جهاز.",

        "seo.faq4q": "هل هو خاص؟ هل يتم رفع ملفات HEIC / HEIF / HIF؟",
        "seo.faq4a":
            "لا يوجد رفع. كل عمليات التحويل تتم محليًا داخل متصفحك، لذا ملفات ‎.heic و‎.heif و‎.hif لا تغادر جهازك. تبقى صورك خاصة على الكمبيوتر والجوال.",

        "seo.faq5q": "لماذا يهم “بدون رفع” لخصوصية الصور؟",
        "seo.faq5a":
            "الصور غالبًا تحتوي على بيانات شخصية (وجوه، أماكن، مستندات، لحظات خاصة). عندما يرفع محول عبر الإنترنت الصور إلى خادم، يقل تحكمك: قد يتم تسجيل الملفات أو تخزينها مدة أطول من المتوقع أو مشاركتها مع أطراف ثالثة أو إعادة استخدامها بطرق لم تقصدها. المحول المحلي داخل المتصفح يقلّل هذه المخاطر لأنه يعالج كل شيء على جهازك — فلا تنتقل صورك عبر الإنترنت ويصبح من الأقل احتمالًا أن تصل إلى مكان لا تريده.",

        "seo.faq6q": "لماذا يجب أن أهتم بتخزين الصور أو مشاركتها أو استخدامها للتدريب؟",
        "seo.faq6a":
            "إذا كانت الأداة تخزّن الصور المرفوعة، فقد تُضمَّن ضمن النسخ الاحتياطية أو أنظمة التحليلات أو خدمات طرف ثالث — ما يزيد احتمالات التعرّض أو إعادة البيع أو إعادة الاستخدام (بما في ذلك مجموعات بيانات التدريب) دون أن تلاحظ. اختيار محول يعمل محليًا يبقي التحكم بيدك: ملفاتك تبقى على جهازك، وأنت من يقرر من يراها، ولا تتحول صورك إلى “منتج” لدى أي جهة أخرى.",

        "seo.synonyms":
            "محول HEIC / HEIF / HIF • HEIC إلى JPG • HEIC إلى JPEG • HEIC إلى PNG • HEIC إلى WEBP • HEIF إلى JPG • HEIF إلى PNG • HIF إلى JPG • HIF إلى WEBP • محول HEIC مجاني • محول صور أوفلاين • بدون رفع • يعمل على جميع الأجهزة • محول خاص",

        // Existing UI
        "app.title": "محول HEIC / HEIF / HIF ‏(.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub": "محول HEIC/HIF مجاني وخاص. معالجة محلية بدون رفع. يعمل على الكمبيوتر والجوال.",

        "dropzone.ariaLabel": "اسحب ملفات HEIC / HEIF / HIF هنا",
        "dropzone.strong": "اسحب ملفات ‎.heic / .heif / .hif",
        "dropzone.or": "أو",
        "dropzone.choose": "اختر الملفات",

        "trust.line": "مجاني • بدون رفع • يعمل على جميع الأجهزة",
        "trust.buttons": "مجاني 100% · بدون تسجيل · بدون رفع",

        "options.output": "الصيغة",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "جودة JPG",
        "options.cpuUsage": "استخدام المعالج",
        "options.cpuWarn": "⚠️ قد يؤدي الاستخدام المرتفع للمعالج (75%+) إلى إبطاء جهازك حسب قدرات العتاد.",

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
        "meta.title": "HEIC/HEIF/HIF से JPG/JPEG, PNG और WEBP कनवर्टर – फ्री, ऑफ़लाइन और प्राइवेट (नो अपलोड्स)",
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

        "seo.faq1q": "HEIC / HEIF / HIF को फ्री में JPG या JPEG में कैसे कनवर्ट करें?",
        "seo.faq1a":
            ".heic, .heif या .hif फ़ाइलें पेज पर ड्रॉप करें (या “फ़ाइलें चुनें” पर क्लिक करें), आउटपुट में JPG/JPEG चुनें, फिर “सभी कनवर्ट करें” दबाएँ। कन्वर्ज़न 100% फ्री है, साइन-अप नहीं चाहिए, और डेस्कटॉप, मोबाइल व टैबलेट पर काम करता है। पूरा होने पर हर फ़ाइल डाउनलोड करें या “ZIP डाउनलोड करें” का उपयोग करें।",

        "seo.faq2q": "क्या मैं HEIC / HEIF / HIF को किसी भी डिवाइस पर PNG, WEBP या JPEG में कनवर्ट कर सकता हूँ?",
        "seo.faq2a":
            "हाँ। आउटपुट ड्रॉपडाउन में JPG/JPEG, PNG या WEBP चुनें और कनवर्ट करें। यह फ्री कनवर्टर आपके ब्राउज़र में सभी डिवाइस पर चलता है, जैसे Windows, macOS, Linux, Android और iOS।",

        "seo.faq3q": "क्या यह HEIC / HEIF / HIF कनवर्टर सच में फ्री है?",
        "seo.faq3a":
            "हाँ। यह पूरी तरह फ्री है। कोई लिमिट नहीं, वॉटरमार्क नहीं, साइन-अप नहीं और कोई छिपा भुगतान नहीं। आप किसी भी डिवाइस पर जितनी चाहें उतनी HEIC/HEIF/HIF इमेज कनवर्ट कर सकते हैं।",

        "seo.faq4q": "क्या यह प्राइवेट है? क्या मेरी HEIC / HEIF / HIF फ़ाइलें अपलोड होती हैं?",
        "seo.faq4a":
            "कोई अपलोड नहीं। सभी कन्वर्ज़न आपके ब्राउज़र में लोकल होते हैं, इसलिए आपकी .heic, .heif और .hif फ़ाइलें डिवाइस से बाहर नहीं जातीं। डेस्कटॉप और मोबाइल पर आपकी फ़ोटो प्राइवेट रहती हैं।",

        "seo.faq5q": "फोटो प्राइवेसी के लिए “नो अपलोड्स” क्यों ज़रूरी है?",
        "seo.faq5a":
            "फोटो में अक्सर निजी जानकारी होती है (चेहरे, लोकेशन, डॉक्यूमेंट, निजी पल)। जब कोई ऑनलाइन कनवर्टर इमेज को सर्वर पर अपलोड करता है, तो कंट्रोल कम हो जाता है: फाइलें लॉग हो सकती हैं, अपेक्षा से ज़्यादा समय तक स्टोर रह सकती हैं, थर्ड-पार्टी के साथ शेयर हो सकती हैं, या अनचाहे तरीके से दोबारा इस्तेमाल हो सकती हैं। लोकल, इन-ब्राउज़र कनवर्टर इस जोखिम को घटाता है क्योंकि प्रोसेसिंग आपके डिवाइस पर ही होती है — आपकी इमेज इंटरनेट पर नहीं जातीं और गलत जगह पहुँचने की संभावना काफी कम हो जाती है।",

        "seo.faq6q": "फोटो के स्टोर/शेयर होने या ट्रेनिंग के लिए इस्तेमाल होने की चिंता क्यों करनी चाहिए?",
        "seo.faq6a":
            "अगर कोई टूल अपलोड की गई फोटो स्टोर करता है, तो वह बैकअप, एनालिटिक्स सिस्टम या थर्ड-पार्टी सर्विस का हिस्सा बन सकती है — जिससे एक्सपोज़र, रीसेल या री-यूज़ (ट्रेनिंग डाटासेट सहित) का जोखिम बढ़ता है, और आपको पता भी नहीं चलता। जो कनवर्टर लोकल चलता है, वह कंट्रोल आपके पास रखता है: फाइलें आपके डिवाइस पर रहती हैं, आप तय करते हैं कौन देखे, और आपकी फोटो किसी और का “प्रोडक्ट” नहीं बनती।",

        "seo.synonyms":
            "HEIC / HEIF / HIF कनवर्टर • HEIC से JPG • HEIC से JPEG • HEIC से PNG • HEIC से WEBP • HEIF से JPG • HEIF से PNG • HIF से JPG • HIF से WEBP • फ्री HEIC कनवर्टर • ऑफ़लाइन इमेज कनवर्टर • नो अपलोड्स • सभी डिवाइस पर काम करता है • प्राइवेट कनवर्टर",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP कनवर्टर",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub":
            "फ्री और प्राइवेट HEIC/HIF कनवर्टर। लोकल प्रोसेसिंग, कोई अपलोड नहीं। डेस्कटॉप और मोबाइल पर काम करता है।",

        "dropzone.ariaLabel": "HEIC / HEIF / HIF फ़ाइलें यहाँ छोड़ें",
        "dropzone.strong": ".heic / .heif / .hif फ़ाइलें छोड़ें",
        "dropzone.or": "या",
        "dropzone.choose": "फ़ाइलें चुनें",

        "trust.line": "फ्री • कोई अपलोड नहीं • सभी डिवाइस पर काम करता है",
        "trust.buttons": "100% फ्री · साइन-अप नहीं · कोई अपलोड नहीं",

        "options.output": "आउटपुट",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "JPG गुणवत्ता",
        "options.cpuUsage": "CPU उपयोग",
        "options.cpuWarn": "⚠️ CPU का अधिक उपयोग (75%+) आपके हार्डवेयर के अनुसार PC को धीमा कर सकता है।",

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
        "meta.title": "HEIC, HEIF & HIF zu JPG/JPEG, PNG & WEBP Konverter – Kostenlos, offline & privat (ohne Uploads)",
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

        "seo.faq1q": "Wie konvertiere ich HEIC / HEIF / HIF kostenlos zu JPG oder JPEG?",
        "seo.faq1a":
            "Ziehe deine .heic-, .heif- oder .hif-Dateien auf die Seite (oder klicke „Dateien auswählen“), wähle JPG/JPEG als Ausgabe und klicke „Alle konvertieren“. Die Konvertierung ist 100% kostenlos, ohne Anmeldung, und funktioniert auf Desktop, Handy und Tablet. Danach kannst du jede Datei einzeln herunterladen oder „ZIP herunterladen“ nutzen.",

        "seo.faq2q": "Kann ich HEIC / HEIF / HIF auf jedem Gerät zu PNG, WEBP oder JPEG konvertieren?",
        "seo.faq2a":
            "Ja. Wähle im Ausgabe-Menü JPG/JPEG, PNG oder WEBP und starte die Konvertierung. Dieser kostenlose Converter läuft direkt im Browser auf allen Geräten, einschließlich Windows, macOS, Linux, Android und iOS.",

        "seo.faq3q": "Ist dieser HEIC / HEIF / HIF Konverter wirklich kostenlos?",
        "seo.faq3a":
            "Ja. Der Konverter ist komplett kostenlos. Keine Limits, keine Wasserzeichen, keine Anmeldung und keine versteckten Kosten. Du kannst beliebig viele HEIC/HEIF/HIF-Bilder auf jedem Gerät konvertieren.",

        "seo.faq4q": "Ist es privat? Werden meine HEIC / HEIF / HIF Dateien hochgeladen?",
        "seo.faq4a":
            "Keine Uploads. Die Konvertierung läuft lokal im Browser, daher verlassen deine .heic-, .heif- und .hif-Dateien dein Gerät nicht. Deine Fotos bleiben privat — auf Desktop und Mobil.",

        "seo.faq5q": "Warum ist „keine Uploads“ wichtig für die Foto-Privatsphäre?",
        "seo.faq5a":
            "Fotos enthalten oft persönliche Daten (Gesichter, Orte, Dokumente, private Momente). Wenn ein Online-Konverter Bilder auf einen Server hochlädt, wird die Kontrolle kleiner: Dateien können protokolliert, länger als erwartet gespeichert, mit Dritten geteilt oder anders wiederverwendet werden. Ein lokaler In-Browser-Konverter reduziert dieses Risiko, weil alles auf deinem Gerät verarbeitet wird — deine Bilder wandern nicht durchs Internet und landen viel seltener dort, wo du sie nicht haben willst.",

        "seo.faq6q": "Warum sollte ich mich darum kümmern, ob Fotos gespeichert, geteilt oder fürs Training genutzt werden?",
        "seo.faq6a":
            "Wenn ein Tool hochgeladene Fotos speichert, können sie in Backups, Analytics-Systeme oder Drittanbieter-Services gelangen — das erhöht das Risiko von Offenlegung, Weiterverkauf oder Wiederverwendung (auch für Trainingsdatensätze), ohne dass du es merkst. Ein lokal arbeitender Konverter lässt die Kontrolle bei dir: Dateien bleiben auf deinem Gerät, du entscheidest, wer sie sieht, und deine Fotos werden nicht zum „Produkt“ von jemand anderem.",

        "seo.synonyms":
            "HEIC / HEIF / HIF Konverter • HEIC zu JPG • HEIC zu JPEG • HEIC zu PNG • HEIC zu WEBP • HEIF zu JPG • HEIF zu PNG • HIF zu JPG • HIF zu WEBP • kostenloser HEIC Konverter • Offline-Bildkonverter • keine Uploads • funktioniert auf allen Geräten • privater Bildkonverter",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP Konverter",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub":
            "Kostenloser & privater HEIC/HIF-Konverter. Lokale Verarbeitung, keine Uploads. Funktioniert auf Desktop und Mobil.",

        "dropzone.ariaLabel": "HEIC / HEIF / HIF Dateien hier ablegen",
        "dropzone.strong": ".heic / .heif / .hif Dateien ablegen",
        "dropzone.or": "oder",
        "dropzone.choose": "Dateien auswählen",

        "trust.line": "Kostenlos • Keine Uploads • Funktioniert auf allen Geräten",
        "trust.buttons": "100% kostenlos · Keine Anmeldung · Keine Uploads",

        "options.output": "Ausgabe",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "JPG-Qualität",
        "options.cpuUsage": "CPU-Auslastung",
        "options.cpuWarn": "⚠️ Eine hohe CPU-Auslastung (75%+) kann deinen PC je nach Hardware verlangsamen.",

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

        "seo.faq1q": "Comment convertir HEIC / HEIF / HIF en JPG ou JPEG gratuitement ?",
        "seo.faq1a":
            "Déposez vos fichiers .heic, .heif ou .hif sur la page (ou cliquez sur « Choisir des fichiers »), sélectionnez JPG/JPEG comme sortie, puis cliquez sur « Tout convertir ». La conversion est 100% gratuite, sans inscription, et fonctionne sur ordinateur, mobile et tablette. Ensuite, téléchargez chaque fichier ou utilisez « Télécharger le ZIP ».",

        "seo.faq2q": "Puis-je convertir HEIC / HEIF / HIF en PNG, WEBP ou JPEG sur n’importe quel appareil ?",
        "seo.faq2a":
            "Oui. Choisissez JPG/JPEG, PNG ou WEBP dans la liste de sortie, puis convertissez. Ce convertisseur gratuit fonctionne directement dans votre navigateur sur tous les appareils, y compris Windows, macOS, Linux, Android et iOS.",

        "seo.faq3q": "Ce convertisseur HEIC / HEIF / HIF est-il vraiment gratuit ?",
        "seo.faq3a":
            "Oui. Le convertisseur est entièrement gratuit. Aucun limite, aucun filigrane, aucune inscription et aucun paiement caché. Vous pouvez convertir autant d’images HEIC/HEIF/HIF que vous voulez sur n’importe quel appareil.",

        "seo.faq4q": "Est-ce privé ? Mes fichiers HEIC / HEIF / HIF sont-ils envoyés ?",
        "seo.faq4a":
            "Aucun envoi. La conversion se fait localement dans votre navigateur, donc vos fichiers .heic, .heif et .hif ne quittent jamais votre appareil. Vos photos restent privées sur ordinateur et mobile.",

        "seo.faq5q": "Pourquoi « sans envoi » est important pour la confidentialité des photos ?",
        "seo.faq5a":
            "Les photos contiennent souvent des données personnelles (visages, lieux, documents, moments privés). Quand un convertisseur en ligne envoie des images vers un serveur, vous perdez une partie du contrôle : les fichiers peuvent être journalisés, conservés plus longtemps que prévu, partagés avec des tiers ou réutilisés d’une manière non souhaitée. Un convertisseur local dans le navigateur réduit ce risque en traitant tout sur votre appareil — vos images ne transitent pas par Internet et ont beaucoup moins de chances d’atterrir là où vous ne le voulez pas.",

        "seo.faq6q": "Pourquoi se soucier de photos stockées, partagées ou utilisées pour l’entraînement ?",
        "seo.faq6a":
            "Si un outil stocke des photos envoyées, elles peuvent se retrouver dans des sauvegardes, des systèmes d’analytics ou des services tiers — ce qui augmente le risque d’exposition, de revente ou de réutilisation (y compris dans des jeux de données d’entraînement) sans que vous le remarquiez. Choisir un convertisseur qui fonctionne localement vous laisse le contrôle : vos fichiers restent sur votre appareil, vous décidez qui les voit et vos photos ne deviennent pas le « produit » de quelqu’un d’autre.",

        "seo.synonyms":
            "Convertisseur HEIC / HEIF / HIF • HEIC en JPG • HEIC en JPEG • HEIC en PNG • HEIC en WEBP • HEIF en JPG • HEIF en PNG • HIF en JPG • HIF en WEBP • convertisseur HEIC gratuit • convertisseur d’images hors ligne • aucun envoi • fonctionne sur tous les appareils • convertisseur privé",

        // Existing UI
        "app.title": "Convertisseur HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub":
            "Convertisseur HEIC/HIF gratuit & privé. Traitement local, aucun envoi. Fonctionne sur ordinateur et mobile.",

        "dropzone.ariaLabel": "Déposez des fichiers HEIC / HEIF / HIF ici",
        "dropzone.strong": "Déposez des fichiers .heic / .heif / .hif",
        "dropzone.or": "ou",
        "dropzone.choose": "Choisir des fichiers",

        "trust.line": "Gratuit • Aucun envoi • Fonctionne sur tous les appareils",
        "trust.buttons": "100% gratuit · Sans inscription · Aucun envoi",

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
        "meta.title": "Конвертер HEIC/HEIF/HIF в JPG/JPEG, PNG и WEBP – Бесплатно, офлайн и приватно (без загрузок)",
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

        "seo.faq1q": "Как бесплатно конвертировать HEIC / HEIF / HIF в JPG или JPEG?",
        "seo.faq1a":
            "Перетащите .heic, .heif или .hif на страницу (или нажмите «Выбрать файлы»), выберите JPG/JPEG как выходной формат и нажмите «Конвертировать все». Конвертация 100% бесплатная, без регистрации, работает на ПК, телефоне и планшете. После завершения скачайте файлы по одному или используйте «Скачать ZIP».",

        "seo.faq2q": "Можно конвертировать HEIC / HEIF / HIF в PNG, WEBP или JPEG на любом устройстве?",
        "seo.faq2a":
            "Да. Выберите JPG/JPEG, PNG или WEBP в списке выхода и конвертируйте. Этот бесплатный конвертер работает прямо в браузере на всех устройствах, включая Windows, macOS, Linux, Android и iOS.",

        "seo.faq3q": "Этот конвертер HEIC / HEIF / HIF действительно бесплатный?",
        "seo.faq3a":
            "Да. Конвертер полностью бесплатный. Нет лимитов, водяных знаков, регистрации и скрытых платежей. Вы можете конвертировать сколько угодно изображений HEIC/HEIF/HIF на любом устройстве.",

        "seo.faq4q": "Это приватно? Мои файлы HEIC / HEIF / HIF загружаются?",
        "seo.faq4a":
            "Никаких загрузок. Конвертация происходит локально в вашем браузере, поэтому .heic, .heif и .hif не покидают устройство. Ваши фото остаются приватными на ПК и мобильных.",

        "seo.faq5q": "Почему «без загрузок» важно для приватности фотографий?",
        "seo.faq5a":
            "Фото часто содержат личные данные (лица, места, документы, приватные моменты). Когда онлайн-конвертер загружает изображения на сервер, вы теряете часть контроля: файлы могут логироваться, храниться дольше ожидаемого, передаваться третьим сторонам или использоваться иначе. Локальный конвертер в браузере снижает этот риск, потому что обработка идёт на вашем устройстве — изображения не путешествуют по интернету и гораздо реже оказываются там, где вы бы не хотели.",

        "seo.faq6q": "Почему важно думать о хранении, обмене или использовании фото для обучения?",
        "seo.faq6a":
            "Если инструмент хранит загруженные фото, они могут попасть в резервные копии, аналитику или сторонние сервисы — и это повышает риск утечек, перепродажи или повторного использования (включая обучающие датасеты) незаметно для вас. Выбирая конвертер, который работает локально, вы сохраняете контроль: файлы остаются на устройстве, вы решаете, кто их видит, и ваши фото не становятся «продуктом» для кого-то ещё.",

        "seo.synonyms":
            "Конвертер HEIC / HEIF / HIF • HEIC в JPG • HEIC в JPEG • HEIC в PNG • HEIC в WEBP • HEIF в JPG • HEIF в PNG • HIF в JPG • HIF в WEBP • бесплатный HEIC конвертер • офлайн-конвертер изображений • без загрузок • работает на всех устройствах • приватный конвертер",

        // Existing UI
        "app.title": "Конвертер HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub":
            "Бесплатный и приватный конвертер HEIC/HIF. Локальная обработка, без загрузок. Работает на ПК и мобильных.",

        "dropzone.ariaLabel": "Перетащите файлы HEIC / HEIF / HIF сюда",
        "dropzone.strong": "Перетащите файлы .heic / .heif / .hif",
        "dropzone.or": "или",
        "dropzone.choose": "Выбрать файлы",

        "trust.line": "Бесплатно • Без загрузок • Работает на всех устройствах",
        "trust.buttons": "100% бесплатно · Без регистрации · Без загрузок",

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
        "meta.title": "Convertitore HEIC/HEIF/HIF in JPG/JPEG, PNG e WEBP – Gratis, offline e privato (senza upload)",
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

        "seo.faq1q": "Come convertire HEIC / HEIF / HIF in JPG o JPEG gratis?",
        "seo.faq1a":
            "Trascina i file .heic, .heif o .hif nella pagina (o clicca “Scegli file”), seleziona JPG/JPEG come output e clicca “Converti tutto”. La conversione è 100% gratis, senza registrazione, e funziona su desktop, mobile e tablet. Alla fine, scarica i file singolarmente o usa “Scarica ZIP”.",

        "seo.faq2q": "Posso convertire HEIC / HEIF / HIF in PNG, WEBP o JPEG su qualsiasi dispositivo?",
        "seo.faq2a":
            "Sì. Seleziona JPG/JPEG, PNG o WEBP nel menu Output e converti. Questo convertitore gratuito funziona direttamente nel browser su qualsiasi dispositivo, inclusi Windows, macOS, Linux, Android e iOS.",

        "seo.faq3q": "Questo convertitore HEIC / HEIF / HIF è davvero gratis?",
        "seo.faq3a":
            "Sì. Il convertitore è completamente gratuito. Nessun limite, nessuna filigrana, nessuna registrazione e nessun pagamento nascosto. Puoi convertire quante immagini HEIC/HEIF/HIF vuoi su qualsiasi dispositivo.",

        "seo.faq4q": "È privato? I miei file HEIC / HEIF / HIF vengono caricati?",
        "seo.faq4a":
            "Nessun upload. La conversione avviene localmente nel browser, quindi i file .heic, .heif e .hif non lasciano mai il dispositivo. Le tue foto restano private su desktop e mobile.",

        "seo.faq5q": "Perché “niente upload” è importante per la privacy delle foto?",
        "seo.faq5a":
            "Le foto spesso contengono dati personali (volti, luoghi, documenti, momenti privati). Quando un convertitore online carica le immagini su un server, perdi controllo: i file possono essere registrati, conservati più del previsto, condivisi con terze parti o riutilizzati in modi non desiderati. Un convertitore locale nel browser riduce questi rischi perché elabora tutto sul tuo dispositivo: le immagini non viaggiano su Internet ed è molto meno probabile che finiscano dove non vuoi.",

        "seo.faq6q": "Perché dovrei preoccuparmi se le foto vengono salvate, condivise o usate per l’addestramento?",
        "seo.faq6a":
            "Se uno strumento archivia foto caricate, possono finire in backup, sistemi di analytics o servizi di terze parti — aumentando il rischio di esposizione, rivendita o riutilizzo (anche in dataset di addestramento) senza che tu te ne accorga. Scegliere un convertitore che funziona localmente ti lascia il controllo: i file restano sul dispositivo, decidi tu chi li vede e le tue foto non diventano il “prodotto” di qualcun altro.",

        "seo.synonyms":
            "Convertitore HEIC / HEIF / HIF • HEIC in JPG • HEIC in JPEG • HEIC in PNG • HEIC in WEBP • HEIF in JPG • HEIF in PNG • HIF in JPG • HIF in WEBP • convertitore HEIC gratis • convertitore immagini offline • nessun upload • funziona su tutti i dispositivi • convertitore privato",

        // Existing UI
        "app.title": "Convertitore HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub":
            "Convertitore HEIC/HIF gratuito e privato. Elaborazione locale, nessun upload. Funziona su desktop e mobile.",

        "dropzone.ariaLabel": "Trascina qui i file HEIC / HEIF / HIF",
        "dropzone.strong": "Trascina file .heic / .heif / .hif",
        "dropzone.or": "o",
        "dropzone.choose": "Scegli file",

        "trust.line": "Gratis • Nessun upload • Funziona su tutti i dispositivi",
        "trust.buttons": "100% gratis · Nessuna registrazione · Nessun upload",

        "options.output": "Output",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "Qualità JPG",
        "options.cpuUsage": "Uso CPU",
        "options.cpuWarn": "⚠️ Un uso elevato della CPU (75%+) potrebbe rallentare il PC a seconda dell’hardware.",

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
        "meta.title": "HEIC/HEIF/HIF naar JPG/JPEG, PNG & WEBP Converter – Gratis, offline & privé (geen uploads)",
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

        "seo.faq1q": "Hoe converteer ik HEIC / HEIF / HIF gratis naar JPG of JPEG?",
        "seo.faq1a":
            "Sleep je .heic-, .heif- of .hif-bestanden naar de pagina (of klik op “Bestanden kiezen”), selecteer JPG/JPEG als uitvoer en klik op “Alles converteren”. De conversie is 100% gratis, zonder aanmelding, en werkt op desktop, mobiel en tablet. Download daarna losse bestanden of gebruik “ZIP downloaden”.",

        "seo.faq2q": "Kan ik HEIC / HEIF / HIF op elk apparaat naar PNG, WEBP of JPEG converteren?",
        "seo.faq2a":
            "Ja. Kies JPG/JPEG, PNG of WEBP in de Output-lijst en converteer. Deze gratis converter werkt direct in je browser op alle apparaten, waaronder Windows, macOS, Linux, Android en iOS.",

        "seo.faq3q": "Is deze HEIC / HEIF / HIF converter echt gratis?",
        "seo.faq3a":
            "Ja. De converter is helemaal gratis. Geen limieten, geen watermerken, geen aanmelding en geen verborgen betalingen. Je kunt zoveel HEIC/HEIF/HIF-afbeeldingen converteren als je wilt op elk apparaat.",

        "seo.faq4q": "Is het privé? Worden mijn HEIC / HEIF / HIF bestanden geüpload?",
        "seo.faq4a":
            "Geen uploads. De conversie gebeurt lokaal in je browser, dus je .heic-, .heif- en .hif-bestanden verlaten je apparaat niet. Je foto’s blijven privé op desktop en mobiel.",

        "seo.faq5q": "Waarom is “geen uploads” belangrijk voor foto-privacy?",
        "seo.faq5a":
            "Foto’s bevatten vaak persoonlijke data (gezichten, locaties, documenten, privé-momenten). Als een online converter afbeeldingen naar een server uploadt, verlies je controle: bestanden kunnen gelogd worden, langer opgeslagen blijven dan verwacht, met derden gedeeld worden of opnieuw gebruikt worden. Een lokale converter in de browser verlaagt dat risico doordat alles op je apparaat wordt verwerkt — je beelden reizen niet over het internet en belanden veel minder snel ergens waar je ze niet wilt hebben.",

        "seo.faq6q": "Waarom zou ik me zorgen maken over foto’s die worden opgeslagen, gedeeld of gebruikt voor training?",
        "seo.faq6a":
            "Als een tool geüploade foto’s opslaat, kunnen ze onderdeel worden van back-ups, analytics-systemen of diensten van derden — wat de kans op blootstelling, doorverkoop of hergebruik (ook voor trainingsdatasets) vergroot zonder dat je het merkt. Met een converter die lokaal werkt, houd je de controle: je bestanden blijven op je apparaat, jij beslist wie ze ziet en je foto’s worden niet iemands anders product.",

        "seo.synonyms":
            "HEIC / HEIF / HIF converter • HEIC naar JPG • HEIC naar JPEG • HEIC naar PNG • HEIC naar WEBP • HEIF naar JPG • HEIF naar PNG • HIF naar JPG • HIF naar WEBP • gratis HEIC converter • offline afbeeldingsconverter • geen uploads • werkt op alle apparaten • privé converter",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP Converter",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub":
            "Gratis & privé HEIC/HIF-converter. Lokale verwerking, geen uploads. Werkt op desktop en mobiel.",

        "dropzone.ariaLabel": "Sleep HEIC / HEIF / HIF bestanden hierheen",
        "dropzone.strong": "Sleep .heic / .heif / .hif bestanden",
        "dropzone.or": "of",
        "dropzone.choose": "Bestanden kiezen",

        "trust.line": "Gratis • Geen uploads • Werkt op alle apparaten",
        "trust.buttons": "100% gratis · Geen aanmelding · Geen uploads",

        "options.output": "Uitvoer",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "JPG-kwaliteit",
        "options.cpuUsage": "CPU-gebruik",
        "options.cpuWarn": "⚠️ Hoog CPU-gebruik (75%+) kan je pc vertragen, afhankelijk van de hardware.",

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
        "meta.title": "Konwerter HEIC/HEIF/HIF do JPG/JPEG, PNG i WEBP – Darmowy, offline i prywatny (bez uploadów)",
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

        "seo.faq1q": "Jak za darmo przekonwertować HEIC / HEIF / HIF na JPG lub JPEG?",
        "seo.faq1a":
            "Upuść pliki .heic, .heif lub .hif na stronę (albo kliknij „Wybierz pliki”), wybierz JPG/JPEG jako wyjście i kliknij „Konwertuj wszystko”. Konwersja jest w 100% darmowa, bez rejestracji, działa na komputerze, telefonie i tablecie. Po zakończeniu pobierz pliki osobno lub użyj „Pobierz ZIP”.",

        "seo.faq2q": "Czy mogę konwertować HEIC / HEIF / HIF do PNG, WEBP lub JPEG na dowolnym urządzeniu?",
        "seo.faq2a":
            "Tak. Wybierz w menu wyjścia JPG/JPEG, PNG lub WEBP i konwertuj. Ten darmowy konwerter działa bezpośrednio w przeglądarce na wszystkich urządzeniach, w tym Windows, macOS, Linux, Android i iOS.",

        "seo.faq3q": "Czy ten konwerter HEIC / HEIF / HIF jest naprawdę darmowy?",
        "seo.faq3a":
            "Tak. Konwerter jest całkowicie darmowy. Brak limitów, brak znaków wodnych, brak rejestracji i brak ukrytych opłat. Możesz konwertować dowolną liczbę obrazów HEIC/HEIF/HIF na każdym urządzeniu.",

        "seo.faq4q": "Czy to prywatne? Czy moje pliki HEIC / HEIF / HIF są wysyłane?",
        "seo.faq4a":
            "Bez uploadów. Konwersja działa lokalnie w przeglądarce, więc pliki .heic, .heif i .hif nie opuszczają urządzenia. Twoje zdjęcia pozostają prywatne na komputerze i telefonie.",

        "seo.faq5q": "Dlaczego „bez uploadów” ma znaczenie dla prywatności zdjęć?",
        "seo.faq5a":
            "Zdjęcia często zawierają dane osobowe (twarze, miejsca, dokumenty, prywatne chwile). Gdy konwerter online wysyła obrazy na serwer, tracisz część kontroli: pliki mogą być logowane, przechowywane dłużej niż oczekujesz, udostępniane stronom trzecim lub ponownie wykorzystywane. Lokalny konwerter w przeglądarce zmniejsza to ryzyko, bo wszystko dzieje się na Twoim urządzeniu — obrazy nie „podróżują” przez internet i rzadziej trafiają tam, gdzie nie chcesz.",

        "seo.faq6q": "Dlaczego mam się przejmować przechowywaniem, udostępnianiem lub użyciem zdjęć do trenowania?",
        "seo.faq6a":
            "Jeśli narzędzie przechowuje wysłane zdjęcia, mogą trafić do kopii zapasowych, systemów analitycznych lub usług stron trzecich — zwiększając ryzyko ujawnienia, odsprzedaży lub ponownego użycia (także w zbiorach treningowych) bez Twojej wiedzy. Wybierając konwerter działający lokalnie, zachowujesz kontrolę: pliki zostają na urządzeniu, Ty decydujesz, kto je widzi, a zdjęcia nie stają się „produktem” kogoś innego.",

        "seo.synonyms":
            "Konwerter HEIC / HEIF / HIF • HEIC do JPG • HEIC do JPEG • HEIC do PNG • HEIC do WEBP • HEIF do JPG • HEIF do PNG • HIF do JPG • HIF do WEBP • darmowy konwerter HEIC • konwerter obrazów offline • bez uploadów • działa na wszystkich urządzeniach • prywatny konwerter",

        // Existing UI
        "app.title": "Konwerter HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub":
            "Darmowy i prywatny konwerter HEIC/HIF. Przetwarzanie lokalne, bez uploadów. Działa na komputerze i telefonie.",

        "dropzone.ariaLabel": "Upuść pliki HEIC / HEIF / HIF tutaj",
        "dropzone.strong": "Upuść pliki .heic / .heif / .hif",
        "dropzone.or": "lub",
        "dropzone.choose": "Wybierz pliki",

        "trust.line": "Darmowe • Bez uploadów • Działa na wszystkich urządzeniach",
        "trust.buttons": "100% darmowe · Bez rejestracji · Bez uploadów",

        "options.output": "Wyjście",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "Jakość JPG",
        "options.cpuUsage": "Użycie CPU",
        "options.cpuWarn": "⚠️ Wysokie użycie CPU (75%+) może spowolnić komputer w zależności od sprzętu.",

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

        "seo.faq1q": "HEIC / HEIF / HIF dosyalarını ücretsiz olarak JPG veya JPEG’e nasıl dönüştürürüm?",
        "seo.faq1a":
            ".heic, .heif veya .hif dosyalarını sayfaya bırakın (veya “Dosya seç”e tıklayın), çıktı olarak JPG/JPEG seçin ve “Hepsini dönüştür”e basın. Dönüştürme %100 ücretsizdir, kayıt gerekmez ve masaüstü, mobil ve tablette çalışır. Bittiğinde tek tek indirebilir veya “ZIP indir”i kullanabilirsiniz.",

        "seo.faq2q": "HEIC / HEIF / HIF dosyalarını her cihazda PNG, WEBP veya JPEG’e dönüştürebilir miyim?",
        "seo.faq2a":
            "Evet. Çıktı menüsünden JPG/JPEG, PNG veya WEBP seçip dönüştürün. Bu ücretsiz dönüştürücü tarayıcıda çalışır ve Windows, macOS, Linux, Android ve iOS dahil tüm cihazlarda kullanılabilir.",

        "seo.faq3q": "Bu HEIC / HEIF / HIF dönüştürücü gerçekten ücretsiz mi?",
        "seo.faq3a":
            "Evet. Tamamen ücretsizdir. Limit yok, filigran yok, kayıt yok ve gizli ücret yok. Her cihazda istediğiniz kadar HEIC/HEIF/HIF görüntüsü dönüştürebilirsiniz.",

        "seo.faq4q": "Gizli mi? HEIC / HEIF / HIF dosyalarım yükleniyor mu?",
        "seo.faq4a":
            "Yükleme yok. Dönüştürme tarayıcınızda yerel olarak yapılır; .heic, .heif ve .hif dosyalarınız cihazınızdan çıkmaz. Fotoğraflarınız masaüstü ve mobilde gizli kalır.",

        "seo.faq5q": "Fotoğraf gizliliği için “yükleme yok” neden önemli?",
        "seo.faq5a":
            "Fotoğraflar çoğu zaman kişisel veri içerir (yüzler, konumlar, belgeler, özel anlar). Çevrimiçi bir dönüştürücü görselleri sunucuya yüklediğinde kontrol azalır: dosyalar kaydedilebilir, beklenenden uzun süre saklanabilir, üçüncü taraflarla paylaşılabilir veya istenmeyen biçimde yeniden kullanılabilir. Tarayıcıda yerel çalışan dönüştürücü bu riski azaltır; çünkü her şey cihazınızda işlenir — görseller internet üzerinden taşınmaz ve istemediğiniz yerlere düşme olasılığı çok daha düşüktür.",

        "seo.faq6q": "Fotoğrafların saklanması, paylaşılması veya eğitim için kullanılması neden önemli?",
        "seo.faq6a":
            "Bir araç yüklenen fotoğrafları saklarsa, yedeklemelerin, analiz sistemlerinin veya üçüncü taraf hizmetlerin parçası olabilir — bu da fark etmeden ifşa, yeniden satış veya yeniden kullanım (eğitim veri setleri dahil) riskini artırır. Yerel çalışan bir dönüştürücü seçmek kontrolü sizde tutar: dosyalar cihazınızda kalır, kimin göreceğine siz karar verirsiniz ve fotoğraflarınız başkasının “ürünü”ne dönüşmez.",

        "seo.synonyms":
            "HEIC / HEIF / HIF dönüştürücü • HEIC’ten JPG • HEIC’ten JPEG • HEIC’ten PNG • HEIC’ten WEBP • HEIF’ten JPG • HEIF’ten PNG • HIF’ten JPG • HIF’ten WEBP • ücretsiz HEIC dönüştürücü • çevrimdışı görsel dönüştürücü • yükleme yok • tüm cihazlarda çalışır • gizli dönüştürücü",

        // Existing UI
        "app.title": "HEIC / HEIF / HIF (.hif/.heic) → JPG / JPEG / PNG / WEBP Dönüştürücü",
        "header.title": "HEIC / HEIF / HIF → JPG / JPEG / PNG / WEBP",
        "header.sub":
            "Ücretsiz ve gizli HEIC/HIF dönüştürücü. Yerel işlem, yükleme yok. Masaüstü ve mobilde çalışır.",

        "dropzone.ariaLabel": "HEIC / HEIF / HIF dosyalarını buraya bırakın",
        "dropzone.strong": ".heic / .heif / .hif dosyalarını bırakın",
        "dropzone.or": "veya",
        "dropzone.choose": "Dosya seç",

        "trust.line": "Ücretsiz • Yükleme yok • Tüm cihazlarda çalışır",
        "trust.buttons": "%100 ücretsiz · Kayıt yok · Yükleme yok",

        "options.output": "Çıktı",
        "options.jpg": "JPG / JPEG",
        "options.png": "PNG",
        "options.webp": "WEBP",
        "options.jpgQuality": "JPG kalitesi",
        "options.cpuUsage": "CPU kullanımı",
        "options.cpuWarn": "⚠️ Yüksek CPU kullanımı (%75+) donanım özelliklerine bağlı olarak bilgisayarınızı yavaşlatabilir.",

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