# Local webfonts

- **Manrope** supplies the headings and navigation, with a geometric style close to the teaser's Avenir Next and STAR-Bench's Google Sans.
- **Noto Sans** supplies body text, following STAR-Bench's text typography.
- **Noto Sans SC** supplies Chinese text in the recorded examples and reference annotations.
- Request quotations use the system's **Georgia**, as in the paper teaser, with Noto Sans SC for Chinese glyphs. Georgia is not redistributed here.

The WOFF2 files are unmodified font subsets distributed by Google Fonts. `manifest.json` records their source URLs, sizes and SHA-256 hashes. The shipped Chinese subsets cover the current demo text. The three accompanying OFL files contain the fonts' copyright and redistribution terms.

`fonts.css` uses local relative URLs; browsing the demo makes no request to a font CDN. The builder copies this directory into the output site.
