# Professional Portfolio — Ismael Díaz

Personal portfolio of Ismael Díaz, a Backend Developer specializing in Python, service integration, and automation. It is a static website built with Astro, strict TypeScript, and Tailwind CSS 4.

## Technologies

- Astro (SSG)
- TypeScript in strict mode
- Tailwind CSS 4 through `@tailwindcss/vite`
- Native CSS for the design system and visual details
- Minimal JavaScript for theme switching, the mobile menu, and progressive reveals

## Requirements and local development

Node.js 22.22 or later is required. The project uses Astro 7 and Tailwind CSS 4.

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

Personal details, social links, work experience, projects, technologies, and education are stored in `src/data/site.ts`. Their types are defined in `src/data/types.ts`.

To add a project, add an object to the `projects` array. The components generate the project cards from this data, so the homepage markup does not need to be edited. Create a detail page in `src/pages/proyectos/` only when enough technical content is available, then add its link to the project data.

The domain remains set to `null` until it is confirmed. Once `siteConfig.url` is configured, the website will output canonical and Open Graph URLs. At that point, `@astrojs/sitemap` can be added to generate `sitemap.xml`.

## Adding an email address and résumé

Set `siteConfig.email` to display the email button. To add the résumé:

1. Copy the real PDF to `public/cv-ismael-diaz.pdf`.
2. Set `siteConfig.cvPath` to `"/cv-ismael-diaz.pdf"`.

While these values remain `null`, the interface does not display controls without a valid destination.
