Place your custom font files in this folder so the site can load them via the @font-face rules defined in `tailwind.css`.

Recommended filenames (match these or update `tailwind.css`):

- Casko_Luxury_Demo-Regular.woff2 (and optionally .woff)
- Leaffes-Regular.woff2 (and optionally .woff)
- FONTSPRING_DEMO_-_Stapel-Regular.woff2 (and optionally .woff)
- Aftersick_DEMO-Book.woff2 (and optionally .woff)
- Aftersick_DEMO-SemiBold.woff2 (and optionally .woff)
- Aftersick_DEMO-Regular.woff2 (and optionally .woff)

Notes:
- Use woff2 whenever possible for better compression; include woff as a fallback for older browsers.
- If your font filenames differ, update the `src: url('/fonts/...')` paths in `tailwind.css` to match the actual names.
- After adding fonts, clear your browser cache and reload the page to see the fonts take effect. You can inspect Network → Fonts in DevTools to confirm the files are being requested and loaded.

Optional next steps you can ask me to do:
- Add named Tailwind font-family entries in `tailwind.config.js` (e.g., `font-casko`) and convert component usages to `font-casko`/`font-stapel` etc.
- Create a small test page that demonstrates each font-family to verify rendering.

If you want, drop the font files here and I can verify they load and update component classes to use clean Tailwind font utilities.