export type SocialKey = "github" | "linkedin";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialKey;
}

export type ProjectKey = "cabeencasa" | "hispanicStarLeague";

export type TechnologyKey =
  | "python"
  | "sql"
  | "apis"
  | "serviceIntegration"
  | "automation"
  | "synchronization"
  | "git"
  | "linux"
  | "astro"
  | "cloudflarePages"
  | "ssg"
  | "technicalSeo"
  | "responsiveDesign"
  | "dataIntegration"
  | "persistence"
  | "scheduledProcesses"
  | "domainRules";

export interface ProjectDefinition {
  key: ProjectKey;
  slug: string;
  name: string;
  accent: "cyan" | "slate";
  status?: "inDevelopment";
  technologies: TechnologyKey[];
  links: Array<
    | { label: "visitWebsite"; kind: "external"; href: string }
    | { label: "technicalCase"; kind: "internal"; path: string }
  >;
}

export interface TechnologyGroupDefinition {
  key: "languages" | "backend" | "tools" | "web";
  index: string;
  items: TechnologyKey[];
}
