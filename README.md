# Portfolio profesional — Ismael Díaz

[Español](#portfolio-profesional--ismael-díaz) · [English](#professional-portfolio--ismael-díaz)

Portfolio personal de Ismael Díaz, Backend Developer especializado en Python, integración de servicios y automatización. Es una web estática construida con Astro, TypeScript estricto y Tailwind CSS 4.

## Tecnologías

- Astro (SSG)
- TypeScript en modo estricto
- Tailwind CSS 4 mediante `@tailwindcss/vite`
- CSS nativo para el sistema de diseño y los detalles visuales
- JavaScript mínimo para tema, menú móvil y revelado progresivo

## Requisitos y uso local

Necesitas Node.js 22.22 o posterior. El proyecto usa Astro 7 y Tailwind CSS 4.

```bash
npm install
npm run dev
```

Comandos disponibles:

```bash
npm run dev      # servidor local
npm run check    # comprobación de Astro y TypeScript
npm run build    # build estático de producción
npm run preview  # previsualiza el build
```

## Editar el contenido

Los datos personales, enlaces sociales, experiencia, proyectos, tecnologías y formación viven en `src/data/site.ts`. Los tipos están en `src/data/types.ts`.

Para añadir un proyecto, incorpora un objeto al array `projects`. Los componentes generan las tarjetas a partir de esos datos, sin modificar el marcado de la portada. Crea una página de detalle en `src/pages/proyectos/` solo si existe contenido técnico suficiente y añade su enlace al proyecto.

El dominio permanece en `null` hasta que se confirme. Al configurarlo en `siteConfig.url`, la web emitirá canonical y URL Open Graph. En ese momento se puede añadir `@astrojs/sitemap` para generar `sitemap.xml`.

## Añadir email y CV

Configura `siteConfig.email` para mostrar el botón de correo. Para el CV:

1. Copia el PDF real a `public/cv-ismael-diaz.pdf`.
2. Cambia `siteConfig.cvPath` a `"/cv-ismael-diaz.pdf"`.

Mientras estos valores sean `null`, la interfaz no muestra controles sin destino.

---

# Professional portfolio — Ismael Díaz

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
