import type {
  ProjectDefinition,
  SocialLink,
  TechnologyGroupDefinition,
} from "./types";

export const siteConfig = {
  name: "Ismael Díaz",
  initials: "ID",
  // TODO: add the confirmed production domain, e.g. https://ismaeldiaz.dev
  url: null as string | null,
  // TODO: configure a professional email address to enable the email CTA.
  email: null as string | null,
  // TODO: add /cv-ismael-diaz.pdf to public/ and update this value.
  cvPath: null as string | null,
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

export const navigationDefinitions = [
  { key: "about", section: "about" },
  { key: "experience", section: "experience" },
  { key: "projects", section: "projects" },
  { key: "stack", section: "stack" },
] as const;

export const projectDefinitions: ProjectDefinition[] = [
  {
    key: "cabeencasa",
    slug: "cabeencasa",
    name: "CabeEnCasa",
    accent: "cyan",
    technologies: ["astro", "cloudflarePages", "ssg", "technicalSeo", "git"],
    links: [
      { label: "visitWebsite", href: "https://cabeencasa.es/", kind: "external" },
      { label: "technicalCase", path: "/projects/cabeencasa/", kind: "internal" },
    ],
  },
  {
    key: "hispanicStarLeague",
    slug: "hispanic-starleague",
    name: "Hispanic StarLeague",
    accent: "slate",
    status: "inDevelopment",
    technologies: ["dataIntegration", "persistence", "scheduledProcesses", "domainRules"],
    links: [],
  },
];

export const technologyGroupDefinitions: TechnologyGroupDefinition[] = [
  { key: "languages", index: "01", items: ["python", "sql"] },
  {
    key: "backend",
    index: "02",
    items: ["apis", "serviceIntegration", "automation", "synchronization"],
  },
  { key: "tools", index: "03", items: ["git", "linux"] },
  {
    key: "web",
    index: "04",
    items: ["astro", "ssg", "technicalSeo", "responsiveDesign"],
  },
];
