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
    technologies: ["astro", "digitalOceanVps", "nginx", "githubActions", "ssg", "technicalSeo"],
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
  { key: "languages", index: "01", items: ["python", "java", "javascript"], primary: "python" },
  {
    key: "backend",
    index: "02",
    items: ["fastapi", "django", "flask", "springBoot", "restApis"],
  },
  {
    key: "databases",
    index: "03",
    items: ["postgresql", "mysql", "sql", "sqlalchemy", "djangoOrm", "alembic"],
  },
  {
    key: "messaging",
    index: "04",
    items: ["rabbitmq", "apacheKafka", "systemIntegration"],
  },
  {
    key: "infrastructure",
    index: "05",
    items: ["docker", "dockerCompose", "linux", "digitalOceanVps", "ciCd", "git"],
  },
  {
    key: "web",
    index: "06",
    items: ["astro", "staticSiteGeneration", "technicalSeo", "responsiveDesign"],
  },
];
