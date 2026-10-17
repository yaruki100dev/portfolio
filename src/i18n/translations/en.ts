export const en = {
  meta: {
    homeTitle: "Ismael Díaz — Backend Developer",
    jobTitle: "Backend Developer",
    homeDescription:
      "Portfolio of Ismael Díaz, a Backend Developer specializing in Python, service integration, and process automation.",
    caseTitle: "CabeEnCasa — Technical Case Study | Ismael Díaz",
    caseDescription:
      "Technical decisions and architecture behind CabeEnCasa, a content project built with Astro and static generation.",
  },
  common: {
    skipToContent: "Skip to content",
    homeLabel: "Ismael Díaz, home",
    primaryNavigation: "Primary navigation",
    mobileNavigation: "Mobile navigation",
    languageNavigation: "Language",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    lightTheme: "Switch to light theme",
    darkTheme: "Switch to dark theme",
    socialProfile: "{network} profile of Ismael Díaz",
  },
  navigation: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    stack: "Stack",
  },
  hero: {
    eyebrow: "Available to build systems that last",
    titleTop: "Backend",
    titleBottom: "Developer",
    introBefore: "I'm",
    introAfter:
      "I build backend systems with Python, connect services, and automate processes. I’ve been developing software since 2019.",
    location: "Alicante, Spain",
    availability: "Open to opportunities",
    viewProjects: "View projects",
    contact: "Get in touch",
    mapLabel: "Abstract diagram of a backend architecture",
    mapTitle: "Service architecture",
    mapDescription: "API, core, data, and process nodes connected to one another.",
    map: {
      requests: "REQUESTS",
      jobs: "JOBS",
      async: "ASYNC",
      core: "CORE",
      data: "DATA",
      persist: "PERSIST",
      sync: "SYNC",
      automate: "AUTOMATE",
      operational: "ALL SYSTEMS OPERATIONAL",
    },
  },
  about: {
    section: "About",
    titleTop: "Code that connects.",
    titleBottom: "Systems that deliver.",
    paragraphs: [
      "I’ve worked in software development since 2019, with a focus on Python and the parts users rarely see: services communicating, data reaching the right place, and processes running reliably.",
      "I care about building solutions that are easy to understand and maintain. Beyond my professional work, I develop personal projects to explore web architecture, product thinking, and new ways to solve real problems.",
    ],
    facts: [
      { label: "Based in", value: "Alicante, Spain" },
      { label: "Experience", value: "Since 2019" },
      { label: "Focus", value: "Backend · Python" },
    ],
  },
  experience: {
    section: "Experience",
    description: "A career focused on logic, integrations, and operational reliability.",
    accessibleTitle: "Professional Experience",
    period: "2019 — present",
    role: "Backend Development",
    sector: "Telecommunications",
    summary:
      "Development and maintenance of systems designed to connect services, move information reliably, and reduce manual work.",
    focus: [
      "Service and API integration",
      "Process automation",
      "Data synchronization",
      "Backend system maintenance",
    ],
  },
  projects: {
    section: "Projects",
    description: "Personal projects where technical architecture serves a concrete need.",
    titleTop: "Building also means",
    titleBottom: "making sound decisions.",
    needLabel: "Need",
    technologiesLabel: "Technologies used in {project}",
    status: { inDevelopment: "In development" },
    links: { visitWebsite: "Visit website", technicalCase: "Technical case study" },
    items: {
      cabeencasa: {
        eyebrow: "Content · Web",
        description:
          "A digital publication about organizing and making the most of small spaces, built to keep its content fast, accessible, and easy to maintain.",
        problem:
          "Turn practical knowledge into a clear, discoverable content architecture designed to grow.",
      },
      hispanicStarLeague: {
        eyebrow: "Competition · Data",
        description:
          "A platform in development for organizing a StarCraft Remastered competition based on the official ladder.",
        problem:
          "Bring registrations, eligibility rules, standings, and scheduled data updates together in one system.",
      },
    },
  },
  technologies: {
    python: "Python",
    sql: "SQL",
    apis: "APIs",
    serviceIntegration: "Service integration",
    automation: "Automation",
    synchronization: "Synchronization",
    git: "Git",
    linux: "Linux",
    astro: "Astro",
    cloudflarePages: "Cloudflare Pages",
    ssg: "Static generation",
    technicalSeo: "Technical SEO",
    responsiveDesign: "Responsive design",
    dataIntegration: "Data integration",
    persistence: "Persistence",
    scheduledProcesses: "Scheduled processes",
    domainRules: "Domain rules",
  },
  stack: {
    section: "Stack",
    description: "Confirmed technologies and areas of expertise, without artificial rankings.",
    titleTop: "Tools for",
    titleBottom: "solving, not decorating.",
    intro:
      "I choose technology for how well it fits the problem, how maintainable it is, and how much clarity it brings to the system.",
    groups: {
      languages: {
        title: "Languages",
        note: "Primary tools for business logic and working with data.",
      },
      backend: {
        title: "Backend and integration",
        note: "Designing reliable flows between systems and reducing manual work.",
      },
      tools: {
        title: "Tools and systems",
        note: "Environments and practices that support maintainable development.",
      },
      web: {
        title: "Web development",
        note: "Hands-on experience from content-focused personal projects.",
      },
    },
  },
  education: {
    section: "Education",
    type: "Formal education",
    qualification: "Web Application Development",
    field: "Advanced Vocational Training · DAW",
  },
  contact: {
    section: "Contact",
    titleTop: "Let’s talk about",
    titleBottom: "your next system.",
    copy:
      "I’m open to Backend Developer or Software Engineer opportunities, and to conversations about projects where reliability matters.",
    email: "Send an email",
    downloadCv: "Download résumé",
  },
  footer: {
    build: "Designed with intent. Built with Astro.",
  },
  caseStudy: {
    back: "Back to projects",
    eyebrow: "Technical case study · 01",
    lead:
      "A fast, maintainable static content architecture for a publication about small spaces.",
    meta: {
      typeLabel: "Type",
      typeValue: "Personal project",
      statusLabel: "Status",
      statusValue: "In production",
      roleLabel: "Role",
      roleValue: "Design and development",
    },
    visit: "Visit CabeEnCasa",
    indexLabel: "On this page",
    index: { context: "Context", architecture: "Architecture", decisions: "Decisions" },
    context: {
      kicker: "01 / Context",
      title: "Useful content, without technical friction.",
      paragraphs: [
        "CabeEnCasa began as a content project about organizing and making the most of small spaces. The main need was a clear foundation for publishing, organizing, and discovering articles without passing unnecessary complexity on to the reader.",
        "The repository is private. This case study covers only public decisions and characteristics of the project, without exposing code or sensitive information.",
      ],
    },
    architecture: {
      kicker: "02 / Architecture",
      title: "Static delivery for an immediate experience.",
      flowLabel: "CabeEnCasa publishing workflow",
      flow: [
        { title: "Content", detail: "Editorial architecture" },
        { title: "Astro", detail: "Static generation" },
        { title: "Cloudflare", detail: "Automated deployment" },
      ],
      copy:
        "Astro generates pages at build time and delivers HTML with very little JavaScript to the browser. The result fits an editorial website: fast navigation, a small footprint, and a structure that supports technical SEO.",
    },
    decisions: {
      kicker: "03 / Decisions",
      title: "Principles applied.",
      items: [
        { title: "Static-first", copy: "Generating content ahead of time reduces work on each visit and keeps delivery simple." },
        { title: "Structured content", copy: "The editorial architecture can grow without losing consistency across pages and categories." },
        { title: "Responsive by default", copy: "Reading and navigation adapt to small screens without treating mobile as an afterthought." },
        { title: "Repeatable deployment", copy: "Git and automated deployments connect every change to a predictable publishing process." },
      ],
    },
    nextProject: "Next project",
    nextStatus: "In development",
  },
} as const;
