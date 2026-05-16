import type { Messages } from "../types";

export const en: Messages = {
  common: {
    portfolioLink: "Technical portfolio",
    businessLink: "For businesses",
    contact: "Contact",
    cv: "Resume",
    whatsapp: "WhatsApp",
    themeLight: "Light theme",
    themeDark: "Dark theme",
    languageLabel: "Language",
    themeLabel: "Theme",
    lightShort: "Light",
    darkShort: "Dark",
  },
  consultoria: {
    brand: "RV IT Consulting",
    hero: {
      badge: "Digital transformation consulting",
      title: "I digitize your business so you sell more and work less.",
      subtitle:
        "I help companies organize customers, automate routines, and make data-driven decisions — no jargon, no complexity, focused on what matters: your day-to-day.",
      ctaPrimary: "I want to talk about my business",
      ctaSecondary: "See how it works",
      specialty: "CRM & customer relationship",
      whatsappIntro:
        "Hi Rodrigo! I'd like to talk about digitizing my business.",
    },
    painsSection: {
      label: "Sound familiar?",
      title: "If your business day looks like this, we can help.",
    },
    pains: [
      {
        title: "Scattered customers",
        description:
          "Spreadsheets, notebooks, WhatsApp, and memory. When it matters, nobody knows the full history of who bought what.",
      },
      {
        title: "Missed opportunities",
        description:
          "No follow-up reminders, forgotten quotes, or customers who go quiet — and the sale slips away.",
      },
      {
        title: "Time lost on operations",
        description:
          "Hours repeating the same tasks: copying data, building reports, answering the same questions again.",
      },
      {
        title: "Decisions in the dark",
        description:
          "Hard to know clearly who buys most, what sells best, or where the team is stuck.",
      },
    ],
    solutionsSection: {
      label: "What I do",
      title: "Technology at the service of your business — not the other way around.",
      description:
        "Practical solutions to organize, sell, and grow with more peace of mind.",
    },
    solutions: [
      {
        title: "Business organization",
        description:
          "I map how your company works today and design a simple path to digitize processes without stopping operations.",
        icon: "map",
        featured: false,
      },
      {
        title: "Custom CRM",
        description:
          "A system to centralize customers, history, sales, and follow-up — the way your team actually works.",
        icon: "users",
        featured: true,
      },
      {
        title: "Smart automation",
        description:
          "Repetitive tasks become automated flows: reminders, status updates, notifications, and integrations that save hours every week.",
        icon: "zap",
        featured: false,
      },
      {
        title: "Clear business view",
        description:
          "Dashboards and reports any manager understands — decisions based on facts, not guesswork.",
        icon: "chart",
        featured: false,
      },
    ],
    featuredBadge: "Highlight",
    crm: {
      label: "Core strength",
      title: "Customer relationship management that works in practice",
      subtitle:
        "The consulting focus: a CRM built for your business — not a generic system nobody uses.",
      benefits: [
        {
          title: "All customers in one place",
          description:
            "Name, contact, purchase history, conversations, and notes — accessible to whoever needs to serve well.",
        },
        {
          title: "Visual sales pipeline",
          description:
            "Know each opportunity's stage: first contact, proposal, negotiation, won, or lost.",
        },
        {
          title: "Reminders & automatic follow-up",
          description:
            "The system alerts when to follow up, when a customer has been idle, or when a commitment is due.",
        },
        {
          title: "History that builds trust",
          description:
            "Anyone on the team serves with context — the customer feels your company truly remembers them.",
        },
        {
          title: "Reports you understand",
          description:
            "Top buyers, best sellers, conversion rate, and forecast — no manual spreadsheets.",
        },
        {
          title: "Integration with what you already use",
          description:
            "WhatsApp, email, spreadsheets, or existing systems — connected in an organized way.",
        },
      ],
      highlight: "Imagine opening your computer and knowing",
      highlightStrong: "exactly who needs attention today",
      highlightEnd:
        ", what was sold this week, and who is still waiting for a reply — all in one place.",
    },
    process: {
      label: "Process",
      title: "How it works",
      subtitle: "A clear process, no surprises, and no leaving you lost along the way.",
      steps: [
        {
          step: "01",
          title: "Free conversation",
          description:
            "I understand your business, challenges, and what you want to improve — in plain language.",
        },
        {
          step: "02",
          title: "Diagnosis",
          description:
            "I show where time and money are lost today and what can be solved first.",
        },
        {
          step: "03",
          title: "Tailored proposal",
          description:
            "Transparent scope, timeline, and investment. You decide calmly, no pressure.",
        },
        {
          step: "04",
          title: "Implementation",
          description:
            "I build, configure, and support adoption with your team — with hands-on training.",
        },
        {
          step: "05",
          title: "Ongoing support",
          description:
            "Adjustments and improvements as the business grows. You're not alone after delivery.",
        },
      ],
    },
    trust: {
      label: "About me",
      title: "Who will take care of your project",
      paragraphs: [
        "I'm Rodrigo Viana Quirino, consultant and software architect with experience in fintech, government, and large enterprises — environments where mistakes are costly and organization is mandatory.",
        "I translate technology into results for your business: less daily chaos, more control over customers and sales, and processes your team can actually use.",
      ],
      role: "IT Consultant · Software Architect",
    },
    audiences: [
      "Retail & commerce",
      "Service providers",
      "Clinics & offices",
      "Distributors",
      "Small & medium businesses",
      "Growing entrepreneurs",
    ],
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "Do I need to understand technology?",
          a: "No. My job is to handle the technical side and explain everything clearly so you can focus on the business.",
        },
        {
          q: "How long until I see results?",
          a: "It depends on scope. Many projects start relieving operational pain within the first weeks, with continuous evolution.",
        },
        {
          q: "Does it work for small businesses?",
          a: "Yes. Often it's growing businesses that feel the lack of organization most — before it becomes chaos.",
        },
        {
          q: "Do you only build CRM?",
          a: "CRM is a pillar, but I also work on full digitization: processes, integrations, automation, and reporting.",
        },
      ],
    },
    cta: {
      title: "Ready to get your business under control?",
      subtitle:
        "Schedule a no-commitment call. In 30 minutes we'll see if working together makes sense.",
      button: "Chat on WhatsApp",
      emailLabel: "Or send an email",
    },
    footer: { tagline: "Digitization · CRM · Automation" },
    nav: [
      { id: "desafios", label: "Challenges" },
      { id: "solucoes", label: "Solutions" },
      { id: "crm", label: "CRM" },
      { id: "como-funciona", label: "How it works" },
      { id: "contato", label: "Contact" },
    ],
  },
  portfolio: {
    availability: "Open to strategic conversations",
    title: "Software Architect",
    roleLine: "Technical Lead · Staff Engineer",
    tagline:
      "I design and evolve distributed platforms where money, compliance, and reliability cannot fail.",
    subheadline:
      "Technical leadership in fintech, large-scale architectural transformation, and mission-critical backend engineering.",
    ctaTalk: "Start a conversation",
    ctaCv: "Download resume",
    nav: [
      { id: "expertise", label: "Expertise" },
      { id: "experiencia", label: "Experience" },
      { id: "trabalho", label: "Work" },
      { id: "stack", label: "Stack" },
      { id: "contato", label: "Contact" },
    ],
    metrics: [
      { value: "5+", label: "Years in critical systems" },
      { value: "10+", label: "High-impact platforms" },
      { value: "24/7", label: "Mission-critical ops" },
      { value: "Fluent", label: "English — global teams" },
    ],
    pillarsSection: {
      label: "Expertise",
      title: "Architecture, engineering, and leadership — at the same level.",
      about: [
        "Computer Science graduate (PUC-GO) with a track record in high-stakes environments: fintech, government, and global enterprise.",
        "For CTOs, founders, and engineering teams: architectural vision, hands-on execution, and squad maturity.",
      ],
    },
    pillars: [
      {
        title: "Architecture",
        titleEn: "Architecture",
        description:
          "Microservices, distributed systems, data modeling, and cloud with scalability and security in mind.",
        highlights: [
          "System design & ADRs",
          "Integrations & gateways",
          "Cloud & observability",
        ],
      },
      {
        title: "Engineering",
        titleEn: "Engineering",
        description:
          "Production Java/Spring backend, APIs, messaging, and patterns for throughput and continuous evolution.",
        highlights: [
          "Java · Spring ecosystem",
          "REST APIs · OAuth2",
          "Data & messaging",
        ],
      },
      {
        title: "Leadership",
        titleEn: "Leadership",
        description:
          "Technical direction, mentorship, code review, and engineering–business alignment.",
        highlights: [
          "Tech lead & mentorship",
          "Incident response",
          "Standards & code review",
        ],
      },
    ],
    experienceSection: {
      label: "Experience",
      title: "Track record in critical environments.",
      description:
        "Fintech, government, and global enterprise — systems that cannot stop.",
    },
    experiences: [
      {
        company: "Suit Pay",
        role: "Software Architect / Technical Lead",
        period: "2025 — present",
        type: "Fintech",
        summary:
          "Architecture and evolution of the financial ecosystem — microservices, payments, cloud, and critical operations.",
        highlights: [
          "Microservices & payments architecture",
          "Cloud, security & observability",
          "Technical leadership & ADRs",
          "24/7 incident response",
        ],
      },
      {
        company: "State Treasury",
        role: "Software Engineer",
        period: "2022 — 2025",
        type: "Government",
        summary:
          "Digital transformation of tax and enforcement systems at state scale.",
        highlights: [
          "PAT-e, SISIMP, NFG, CCE — tax ecosystem",
          "Automation & critical system integration",
          "High regulatory volume operations",
        ],
      },
      {
        company: "Coca-Cola",
        role: "Backend Engineer",
        period: "2021 — 2022",
        type: "Enterprise",
        summary:
          "SAP ↔ Oracle integration, microservices, and supply chain data pipelines.",
        highlights: [
          "Microservices on legacy systems",
          "Data load automation",
          "Global supply chain",
        ],
      },
      {
        company: "PUC-GO",
        role: "Teaching Assistant — Algorithms",
        period: "2020",
        type: "Academia",
        summary:
          "Algorithms, data structures, and programming competitions.",
        highlights: ["C/C++ mentorship", "Programming competitions"],
      },
    ],
    workSection: {
      label: "Selected Work",
      title: "Projects that define the profile.",
    },
    projects: [
      {
        title: "Financial Platform",
        titlePt: "Plataforma Financeira",
        context: "Suit Pay · Fintech",
        description:
          "Payments ecosystem: microservices, gateways, AWS, and strict SLAs.",
        tags: ["Architecture", "Payments", "AWS", "Java"],
        featured: true,
      },
      {
        title: "Tax & Compliance Systems",
        titlePt: "Sistemas Tributários",
        context: "Government · Scale",
        description:
          "Modernization of critical systems impacting millions of taxpayers.",
        tags: ["Spring Boot", "Integration", "Critical Systems"],
        featured: true,
      },
      {
        title: "Enterprise Data Mesh",
        titlePt: "Integração Corporativa",
        context: "Coca-Cola · Global",
        description:
          "Pipelines connecting SAP and Oracle for supply chain and logistics.",
        tags: ["SAP", "Oracle", "Microservices"],
        featured: false,
      },
    ],
    stackSection: {
      label: "Stack",
      title: "Tools & domains.",
      description:
        "Stack focused on distributed systems, Java backend, and cloud.",
      categories: [
        { key: "architecture", label: "Architecture" },
        { key: "backend", label: "Backend" },
        { key: "platform", label: "Platform" },
        { key: "engineering", label: "Engineering" },
      ],
      skills: {
        architecture: [
          "Distributed Systems",
          "Microservices",
          "Event-driven",
          "System Design",
          "Domain Modeling",
        ],
        backend: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "OAuth2 / JWT",
          "REST APIs",
          "Messaging",
        ],
        platform: [
          "AWS",
          "Docker",
          "CI/CD",
          "Observability",
          "PostgreSQL",
          "Oracle",
        ],
        engineering: [
          "Algorithms",
          "Security",
          "Cryptography",
          "React",
          "Next.js",
          "TypeScript",
        ],
      },
      education: "B.S. Computer Science — PUC-GO (2019 – 2025)",
      languages: "Portuguese (Native) · English (Fluent)",
    },
    contact: {
      label: "Let's talk",
      title: "Ready to level up your product engineering?",
      subtitle:
        "For CTOs, founders, and engineering leaders — architecture, scale, and technical leadership.",
      cta: "Start a conversation",
    },
    footer: {
      line: "Software Architect · Technical Lead",
    },
  },
};
