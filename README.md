# Portfolio profesional — Ismael Díaz

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
