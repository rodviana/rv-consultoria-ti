export type Locale = "pt" | "en";

export type ConsultoriaMessages = {
  brand: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    specialty: string;
    whatsappIntro: string;
  };
  pains: { title: string; description: string }[];
  painsSection: { label: string; title: string };
  solutionsSection: { label: string; title: string; description: string };
  solutions: {
    title: string;
    description: string;
    icon: string;
    featured: boolean;
  }[];
  featuredBadge: string;
  crm: {
    label: string;
    title: string;
    subtitle: string;
    benefits: { title: string; description: string }[];
    highlight: string;
    highlightStrong: string;
    highlightEnd: string;
  };
  process: {
    label: string;
    title: string;
    subtitle: string;
    steps: { step: string; title: string; description: string }[];
  };
  trust: { label: string; title: string; paragraphs: string[]; role: string };
  audiences: string[];
  faq: { title: string; items: { q: string; a: string }[] };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    emailLabel: string;
  };
  footer: { tagline: string };
  nav: { id: string; label: string }[];
};

export type PortfolioMessages = {
  availability: string;
  title: string;
  roleLine: string;
  tagline: string;
  subheadline: string;
  ctaTalk: string;
  ctaCv: string;
  nav: { id: string; label: string }[];
  metrics: { value: string; label: string }[];
  pillarsSection: { label: string; title: string; about: string[] };
  pillars: {
    title: string;
    titleEn: string;
    description: string;
    highlights: string[];
  }[];
  experienceSection: {
    label: string;
    title: string;
    description: string;
  };
  experiences: {
    company: string;
    role: string;
    period: string;
    type: string;
    summary: string;
    highlights: string[];
  }[];
  workSection: { label: string; title: string };
  projects: {
    title: string;
    titlePt: string;
    context: string;
    description: string;
    tags: string[];
    featured: boolean;
  }[];
  stackSection: {
    label: string;
    title: string;
    description: string;
    categories: { key: string; label: string }[];
    skills: Record<string, string[]>;
    education: string;
    languages: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: { line: string };
};

export type Messages = {
  common: {
    portfolioLink: string;
    businessLink: string;
    contact: string;
    cv: string;
    whatsapp: string;
    themeLight: string;
    themeDark: string;
    languageLabel: string;
    themeLabel: string;
    lightShort: string;
    darkShort: string;
  };
  consultoria: ConsultoriaMessages;
  portfolio: PortfolioMessages;
};
