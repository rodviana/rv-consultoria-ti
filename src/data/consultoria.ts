import { profile } from "./profile";

export const consultoria = {
  brand: "RV Consultoria em TI",
  contact: {
    email: profile.email,
    phone: profile.phone,
    whatsapp: "5562999768895",
  },
  hero: {
    badge: "Consultoria em transformação digital",
    title: "Digitalizo o seu negócio para você vender mais e trabalhar menos.",
    subtitle:
      "Ajudo empresas a organizar clientes, automatizar rotinas e tomar decisões com dados — sem complicação, sem “tecnês” e com foco no que importa: o seu dia a dia.",
    ctaPrimary: "Quero conversar sobre meu negócio",
    ctaSecondary: "Ver como funciona",
  },
  pains: [
    {
      title: "Clientes espalhados",
      description:
        "Planilhas, cadernos, WhatsApp e memória. Na hora H, ninguém sabe o histórico completo de quem comprou o quê.",
    },
    {
      title: "Oportunidades perdidas",
      description:
        "Sem lembrete de retorno, orçamento esquecido ou cliente que sumiu — e a venda vai embora sem você perceber.",
    },
    {
      title: "Tempo perdido no operacional",
      description:
        "Horas repetindo a mesma tarefa: copiar dados, montar relatório, responder a mesma pergunta de novo.",
    },
    {
      title: "Decisão no escuro",
      description:
        "Não dá para saber com clareza quem compra mais, o que vende melhor ou onde está o gargalo do time.",
    },
  ],
  solutions: [
    {
      title: "Organização do negócio",
      description:
        "Mapeio como sua empresa funciona hoje e desenho um caminho simples para digitalizar processos sem parar a operação.",
      icon: "map",
      featured: false,
    },
    {
      title: "CRM sob medida",
      description:
        "Sistema para centralizar clientes, histórico, vendas e follow-up — do jeito que o seu time realmente trabalha.",
      icon: "users",
      featured: true,
    },
    {
      title: "Automação inteligente",
      description:
        "Tarefas repetitivas viram fluxo automático: lembretes, status, notificações e integrações que poupam horas por semana.",
      icon: "zap",
      featured: false,
    },
    {
      title: "Visão clara do negócio",
      description:
        "Painéis e relatórios que qualquer gestor entende — para decidir com base em fatos, não em achismo.",
      icon: "chart",
      featured: false,
    },
  ],
  crm: {
    title: "Gestão de relacionamento com o cliente que funciona na prática",
    subtitle:
      "O ponto forte da consultoria: um CRM pensado para o seu negócio — não um sistema genérico que ninguém usa.",
    benefits: [
      {
        title: "Todos os clientes em um só lugar",
        description:
          "Nome, contato, histórico de compras, conversas e observações — acessível para quem precisa atender bem.",
      },
      {
        title: "Funil de vendas visual",
        description:
          "Saiba em qual etapa está cada oportunidade: primeiro contato, proposta, negociação, fechado ou perdido.",
      },
      {
        title: "Lembretes e follow-up automático",
        description:
          "O sistema avisa quando retornar, quando o cliente está parado há dias ou quando vence um compromisso.",
      },
      {
        title: "Histórico que gera confiança",
        description:
          "Qualquer pessoa do time atende com contexto — o cliente sente que sua empresa lembra dele de verdade.",
      },
      {
        title: "Relatórios que você entende",
        description:
          "Quem mais compra, o que mais vende, taxa de conversão e previsão — sem planilha manual.",
      },
      {
        title: "Integração com o que você já usa",
        description:
          "WhatsApp, e-mail, planilhas ou sistemas que já existem — conectados de forma organizada.",
      },
    ],
  },
  process: {
    title: "Como funciona",
    subtitle: "Processo claro, sem surpresas e sem te deixar perdido no meio do caminho.",
    steps: [
      {
        step: "01",
        title: "Conversa gratuita",
        description:
          "Entendo seu negócio, seus desafios e o que você quer melhorar — em linguagem simples.",
      },
      {
        step: "02",
        title: "Diagnóstico",
        description:
          "Mostro onde está a perda de tempo e de dinheiro hoje e o que dá para resolver primeiro.",
      },
      {
        step: "03",
        title: "Proposta sob medida",
        description:
          "Escopo, prazo e investimento transparentes. Você decide com calma, sem pressão.",
      },
      {
        step: "04",
        title: "Implementação",
        description:
          "Construo, configuro e acompanho a adoção com seu time — com treinamento prático.",
      },
      {
        step: "05",
        title: "Suporte contínuo",
        description:
          "Ajustes, melhorias e evolução conforme o negócio cresce. Você não fica sozinho depois da entrega.",
      },
    ],
  },
  trust: {
    title: "Quem vai cuidar do seu projeto",
    paragraphs: [
      "Sou Rodrigo Viana Quirino, consultor e arquiteto de software com experiência em fintech, governo e grandes empresas — ambientes onde erro custa caro e organização é obrigatória.",
      "Traduzo tecnologia em resultado para o seu negócio: menos caos no dia a dia, mais controle sobre clientes e vendas, e processos que o time consegue usar de verdade.",
    ],
  },
  audiences: [
    "Lojas e comércio",
    "Prestadores de serviço",
    "Clínicas e consultórios",
    "Distribuidoras",
    "Pequenas e médias empresas",
    "Empreendedores em crescimento",
  ],
  faq: [
    {
      q: "Preciso entender de tecnologia?",
      a: "Não. Meu papel é cuidar da parte técnica e te explicar tudo de forma clara, para você focar no negócio.",
    },
    {
      q: "Quanto tempo leva para ver resultado?",
      a: "Depende do escopo. Muitos projetos começam a gerar alívio operacional nas primeiras semanas, com evolução contínua.",
    },
    {
      q: "Funciona para negócio pequeno?",
      a: "Sim. Muitas vezes é justamente quem está crescendo que mais sente a falta de organização — antes que vire caos.",
    },
    {
      q: "Você só faz CRM?",
      a: "CRM é um dos pilares, mas também atuo em digitalização completa: processos, integrações, automações e relatórios.",
    },
  ],
  cta: {
    title: "Vamos colocar seu negócio no controle?",
    subtitle:
      "Agende uma conversa sem compromisso. Em 30 minutos entendemos se faz sentido trabalharmos juntos.",
    button: "Falar no WhatsApp",
    emailLabel: "Ou envie um e-mail",
  },
  nav: [
    { id: "desafios", label: "Desafios" },
    { id: "solucoes", label: "Soluções" },
    { id: "crm", label: "CRM" },
    { id: "como-funciona", label: "Como funciona" },
    { id: "contato", label: "Contato" },
  ],
} as const;
