# MAHAUS Brand Fonts

This directory should contain the brand fonts for MAHAUS.

## Required Font Files

### Primary Font - Anybody
- `Anybody-Bold.woff2` - For titles and headings
- `Anybody-Regular.woff2` - For subtitles

### Secondary Font - Geomanist
- `Geomanist-Regular.woff2` - For body text

## Where to Get the Fonts

1. **Anybody Font**: Available from [Google Fonts](https://fonts.google.com/specimen/Anybody)
2. **Geomanist Font**: Commercial font from [atipo foundry](https://www.atipofoundry.com/fonts/geomanist)

## Alternative (Google Fonts CDN)

If you prefer to use Google Fonts CDN instead of self-hosting, add this to your `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anybody:wght@400;700&display=swap" rel="stylesheet">
```

Then update the CSS font-face declarations to only include Geomanist (or use Inter as fallback for body text).

## Current Fallbacks

The CSS is configured with fallbacks to:
- `Inter` - Modern sans-serif (Google Fonts)
- `system-ui` - System default
- `sans-serif` - Generic fallback
