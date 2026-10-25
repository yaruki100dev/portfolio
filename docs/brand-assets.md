# Social brand assets

The files in `public/brands/` are unmodified originals downloaded on 2026-10-25.
They are served locally through `BrandIcon.astro`, which `Icon.astro` delegates to
for social icons. Functional icons retain their existing SVG rendering.

## GitHub

- Guidelines: https://brand.github.com/foundations/logo
- https://github.com/logos redirects to the guidelines above.
- Official download: https://brand.github.com/GitHub_Logos.zip
- Original files: `GitHub Logos/SVG/GitHub_Invertocat_Black.svg` and
  `GitHub Logos/SVG/GitHub_Invertocat_White.svg`.
- Local files: `github-invertocat-black.svg` and `github-invertocat-white.svg`.
- Original aspect ratio: 98 × 96.

## LinkedIn

- Guidelines: https://brand.linkedin.com/in-logo
- Downloads: https://brand.linkedin.com/downloads
- Official [in] download linked from that page:
  https://content.linkedin.com/content/dam/me/business/en-us/amp/xbu/linkedin-revised-brand-guidelines/logos/in-logo.zip
- Original files: `in-logo/InBug-Black.png` and `in-logo/InBug-White.png`.
- Local files: `linkedin-in-black.png` and `linkedin-in-white.png`.
- Original dimensions: 840 × 779, including the registration mark and transparent
  background. The official [in] package provides PNG files, with no vector variant.

## Rendering

Black variants appear in the light theme and white variants in the dark theme.
The component preserves each image's complete original proportions at an 18 px
height in the current social links. It does not crop, trace, recolor, filter, or
add strokes to either logo. Hover, active, and keyboard focus affect the links
without changing the image variants. Images are decorative when their link
already supplies an accessible name.
