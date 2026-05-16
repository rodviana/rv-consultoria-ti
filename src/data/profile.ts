export const profile = {
  name: "Rodrigo Viana Quirino",
  title: "Software Architect",
  titleAlt: "Arquiteto de Software",
  roleLine: "Technical Lead · Staff Engineer",
  tagline:
    "Projeto e evoluo plataformas distribuídas onde dinheiro, compliance e confiabilidade não podem falhar.",
  subheadline:
    "Liderança técnica em fintech, transformação arquitetural em escala e engenharia backend de alta criticidade — do desenho de microsserviços à operação em produção.",
  email: "rodrigovianaquirino@gmail.com",
  phone: "(62) 9 9976-8895",
  cvPath: "/cv-rodrigo-viana-quirino.pdf",
  photoPath: "/rodrigo.jpg",
  availability: "Aberto a conversas estratégicas",
  domains: ["Fintech", "Governo", "Enterprise"],
  metrics: [
    { value: "5+", label: "Anos em sistemas críticos" },
    { value: "10+", label: "Plataformas de alto impacto" },
    { value: "24/7", label: "Operação mission-critical" },
    { value: "Fluent", label: "Inglês — times globais" },
  ],
  pillars: [
    {
      id: "architecture",
      title: "Arquitetura",
      titleEn: "Architecture",
      description:
        "Microsserviços, sistemas distribuídos, modelagem de dados e decisões de infraestrutura cloud com foco em escalabilidade e segurança.",
      highlights: [
        "System design & ADRs",
        "Integrações & gateways",
        "Cloud & observabilidade",
      ],
    },
    {
      id: "engineering",
      title: "Engenharia",
      titleEn: "Engineering",
      description:
        "Backend Java/Spring em produção, APIs, mensageria e padrões que sustentam throughput, consistência e evolução contínua.",
      highlights: ["Java · Spring ecosystem", "APIs REST · OAuth2", "Dados & mensageria"],
    },
    {
      id: "leadership",
      title: "Liderança",
      titleEn: "Leadership",
      description:
        "Direção técnica de times, mentoria, code review, planejamento de escopo e alinhamento entre engenharia e negócio.",
      highlights: [
        "Tech lead & mentoria",
        "Incident response",
        "Padrões & code review",
      ],
    },
  ],
  about: `Cientista da Computação (PUC-GO) com trajetória em ambientes de alta criticidade: fintech, governo e corporativo global. Atuo na interseção entre arquitetura de software, engenharia backend e liderança técnica — desenhando microsserviços, conduzindo modernizações e garantindo que sistemas financeiros e regulatórios operem com segurança, escala e previsibilidade.

Para CTOs, founders e times de engenharia: trago visão arquitetural, execução hands-on e capacidade de elevar a maturidade técnica de squads em contextos complexos.`,
  education: {
    institution: "Pontifícia Universidade Católica de Goiás",
    degree: "Bacharelado em Ciência da Computação",
    period: "2019 – 2025",
  },
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Fluente" },
  ],
  experiences: [
    {
      company: "Suit Pay",
      role: "Software Architect / Technical Lead",
      rolePt: "Arquiteto de Software / Líder Técnico",
      period: "2025 — presente",
      type: "Fintech",
      summary:
        "Arquitetura, modernização e evolução do ecossistema financeiro — microsserviços, pagamentos, cloud, segurança e operação crítica.",
      highlights: [
        "Arquitetura de microsserviços e integrações de pagamento",
        "Decisões de cloud, segurança e observabilidade",
        "Liderança técnica, ADRs e padronização de engenharia",
        "Incident response em produção 24/7",
      ],
    },
    {
      company: "Secretaria da Economia",
      role: "Software Engineer",
      rolePt: "Desenvolvedor de Software",
      period: "2022 — 2025",
      type: "Government",
      summary:
        "Transformação digital e modernização arquitetural de sistemas tributários e de fiscalização em escala estadual.",
      highlights: [
        "PAT-e, SISIMP, NFG, CCE e ecossistema tributário digital",
        "Automação de processos e integração entre sistemas críticos",
        "Sustentação de plataformas com alto volume regulatório",
      ],
    },
    {
      company: "Coca-Cola",
      role: "Backend Engineer",
      rolePt: "Analista de Sistemas / Backend",
      period: "2021 — 2022",
      type: "Enterprise",
      summary:
        "Integração SAP ↔ Oracle, microsserviços e pipelines de dados para estoque, logística e produção.",
      highlights: [
        "Microsserviços sobre legados corporativos",
        "Automação de cargas e monitoramento de dados",
        "Sistemas de supply chain em ambiente global",
      ],
    },
    {
      company: "PUC-GO",
      role: "Teaching Assistant — Algorithms",
      rolePt: "Monitor de Algoritmos",
      period: "2020",
      type: "Academia",
      summary:
        "Fundamentos de CS: algoritmos, estruturas de dados e preparação para maratonas de programação.",
      highlights: [
        "Mentoria em C/C++ e raciocínio algorítmico",
        "Preparação para competições de programação",
      ],
    },
  ],
  projects: [
    {
      title: "Financial Platform",
      titlePt: "Plataforma Financeira",
      context: "Suit Pay · Fintech",
      description:
        "Evolução arquitetural de ecossistema de pagamentos: microsserviços, gateways, cloud AWS e operação com SLA rigoroso.",
      tags: ["Architecture", "Payments", "AWS", "Java"],
      featured: true,
    },
    {
      title: "Tax & Compliance Systems",
      titlePt: "Sistemas Tributários",
      context: "Governo · Scale",
      description:
        "Modernização de dezenas de sistemas críticos — fiscalização, cadastro e processos eletrônicos com impacto em milhões de contribuintes.",
      tags: ["Spring Boot", "Integration", "Critical Systems"],
      featured: true,
    },
    {
      title: "Enterprise Data Mesh",
      titlePt: "Integração Corporativa",
      context: "Coca-Cola · Global",
      description:
        "Pipelines e microsserviços conectando SAP e Oracle para supply chain, logística e produção.",
      tags: ["SAP", "Oracle", "Microservices"],
      featured: false,
    },
  ],
  stack: {
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
  nav: [
    { id: "expertise", label: "Expertise" },
    { id: "experiencia", label: "Experiência" },
    { id: "trabalho", label: "Trabalho" },
    { id: "stack", label: "Stack" },
    { id: "contato", label: "Contato" },
  ],
} as const;
