# Professional Portfolio — Ismael Díaz

Personal portfolio of Ismael Díaz, a Backend Developer specializing in Python, service integration, and automation. It is a static website built with Astro, strict TypeScript, and Tailwind CSS 4.

## Technologies

- Astro (SSG)
- TypeScript in strict mode
- Tailwind CSS 4 through `@tailwindcss/vite`
- Native CSS for the design system and visual details
- Minimal JavaScript for theme switching, the mobile menu, and progressive reveals
- Astro's native static i18n routing for English and Spanish

## Requirements and local development

Node.js 22.22 or later is required. The project uses Astro 7 and Tailwind CSS 4.

The required runtime is pinned in `.nvmrc` and `.node-version`. With `nvm`, install and activate it before installing the dependencies:

```bash
nvm install
nvm use
node --version # v22.22.0
```

Tools such as `fnm`, `asdf`, and `mise` can also read one of these version files automatically.

```bash
npm install
npm run dev
```

Available commands:

```bash
npm run dev      # start the local development server
npm run check    # check Astro and TypeScript
npm run build    # create a static production build
npm run preview  # preview the production build
```

## Editing the content

Shared personal details, social links, project identifiers, URLs, and technology identifiers are stored in `src/data/site.ts`. Their types are defined in `src/data/types.ts`.

Localized copy lives in `src/i18n/translations/en.ts` and `src/i18n/translations/es.ts`. The Spanish dictionary is type-checked against the English source dictionary, so missing or incompatible keys fail the TypeScript check.

English is served at `/` and Spanish at `/es/`. Project routes follow the same pattern: `/projects/project-name/` and `/es/projects/project-name/`. The components in `src/components/pages/` are shared by both route wrappers.

To add a project, add its shared definition to `projectDefinitions`, then add the translated copy under the same key in both translation files. Create a shared detail-page component only when enough technical content is available, followed by thin route wrappers for each locale.

The domain remains set to `null` until it is confirmed. Once `siteConfig.url` is configured, each locale will output its self-referencing canonical URL, localized Open Graph metadata, and `hreflang` links. At that point, `@astrojs/sitemap` can be added to generate `sitemap.xml` for both languages.

## Adding an email address and résumé

Set `siteConfig.email` to display the email button. To add the résumé:

1. Copy the real PDF to `public/cv-ismael-diaz.pdf`.
2. Set `siteConfig.cvPath` to `"/cv-ismael-diaz.pdf"`.

While these values remain `null`, the interface does not display controls without a valid destination.
