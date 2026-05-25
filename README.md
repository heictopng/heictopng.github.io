# HEIC / HEIF / HIF → JPG / PNG / WEBP Converter

A client-side image converter that runs entirely in the browser. No uploads — all processing happens locally.

## Development

### Regenerating localized HTML pages

The root `index.html` is the **template**. The 14 language-specific pages under `lang/` are generated from it. After editing `index.html` or `src/internationalization/dicts.js`, regenerate them:

```bash
python ./src/internationalization/localize.py \
  --index ./index.html \
  --dict ./src/internationalization/dicts.js \
  --out ./lang \
  --base-url https://heictopng.github.io \
  --prefix lang
```

**Requirements:** Python 3 and Node.js (the script uses a Node helper to parse the ES module dictionaries).

> **Do not edit `lang/*/index.html` files directly** — they will be overwritten on the next regeneration. Make all HTML changes in the root `index.html` and all translation changes in `dicts.js`.
