import type {
  Education,
  Experience,
  Project,
  SocialLink,
  TechnologyGroup,
} from "./types";

export const siteConfig = {
  name: "Ismael Díaz",
  initials: "ID",
  role: "Backend Developer",
  location: "Alicante, España",
  // TODO: añade el dominio definitivo cuando esté confirmado, p. ej. https://ismaeldiaz.dev
  url: null as string | null,
  // TODO: configura el correo profesional para mostrar el CTA de email.
  email: null as string | null,
  // TODO: añade /cv-ismael-diaz.pdf en public/ y actualiza este valor.
  cvPath: null as string | null,
  description:
    "Portfolio de Ismael Díaz, Backend Developer especializado en Python, integración de servicios y automatización de procesos.",
  social: [
    {
      label: "GitHub",
      href: "https://github.com/yaruki100dev",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ismael-diaz-dev",
      icon: "linkedin",
    },
  ] satisfies SocialLink[],
};

export const navigation = [
  { label: "Perfil", href: "/#perfil" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Stack", href: "/#stack" },
];

export const experiences: Experience[] = [
  {
    period: "2019 — presente",
    role: "Desarrollo backend",
    sector: "Sector de telecomunicaciones",
    summary:
      "Desarrollo y mantenimiento de sistemas orientados a conectar servicios, mover información de forma fiable y reducir trabajo manual.",
    focus: [
      "Integración de servicios y APIs",
      "Automatización de procesos",
      "Sincronización de información",
      "Mantenimiento de sistemas backend",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "cabeencasa",
    name: "CabeEnCasa",
    eyebrow: "Contenido · Web",
    description:
      "Una publicación digital sobre organización y aprovechamiento de espacios pequeños, construida para que el contenido sea rápido, accesible y fácil de mantener.",
    problem:
      "Convertir conocimiento práctico en una arquitectura de contenidos clara, descubrible y preparada para crecer.",
    technologies: [
      "Astro",
      "Cloudflare Pages",
      "SSG",
      "SEO técnico",
      "Git",
    ],
    links: [
      { label: "Visitar web", href: "https://cabeencasa.es/", kind: "external" },
      { label: "Caso técnico", href: "/proyectos/cabeencasa/", kind: "internal" },
    ],
    accent: "cyan",
  },
  {
    slug: "hispanic-starleague",
    name: "Hispanic StarLeague",
    eyebrow: "Competición · Datos",
    status: "En desarrollo",
    description:
      "Plataforma en desarrollo para organizar una competición de StarCraft Remastered apoyada en la ladder oficial.",
    problem:
      "Coordinar registros, reglas de elegibilidad, clasificaciones y actualizaciones periódicas de datos en un único sistema.",
    technologies: [
      "Integración de datos",
      "Persistencia",
      "Procesos periódicos",
      "Reglas de dominio",
    ],
    links: [],
    accent: "slate",
  },
];

export const technologyGroups: TechnologyGroup[] = [
  {
    index: "01",
    title: "Lenguajes",
    items: ["Python", "SQL"],
    note: "Herramientas principales para lógica de negocio y trabajo con datos.",
  },
  {
    index: "02",
    title: "Backend e integración",
    items: ["APIs", "Integración de servicios", "Automatización", "Sincronización"],
    note: "Diseño de flujos fiables entre sistemas y reducción de tareas manuales.",
  },
  {
    index: "03",
    title: "Herramientas y sistemas",
    items: ["Git", "Linux"],
    note: "Entornos y prácticas que sostienen un desarrollo mantenible.",
  },
  {
    index: "04",
    title: "Desarrollo web",
    items: ["Astro", "Generación estática", "SEO técnico", "Responsive design"],
    note: "Experiencia aplicada en proyectos propios orientados a contenido.",
  },
];

export const education: Education[] = [
  {
    qualification: "Desarrollo de Aplicaciones Web",
    field: "Formación Profesional · DAW",
  },
];
