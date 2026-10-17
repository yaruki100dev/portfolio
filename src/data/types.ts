export type SocialKey = "github" | "linkedin";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialKey;
}

export interface Experience {
  period: string;
  role: string;
  sector: string;
  summary: string;
  focus: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: "external" | "internal" | "repository";
}

export interface Project {
  slug: string;
  name: string;
  eyebrow: string;
  status?: string;
  description: string;
  problem: string;
  technologies: string[];
  links: ProjectLink[];
  accent: "cyan" | "slate";
}

export interface TechnologyGroup {
  title: string;
  index: string;
  items: string[];
  note: string;
}

export interface Education {
  qualification: string;
  field: string;
}
