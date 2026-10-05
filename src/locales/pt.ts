import { en } from "./en";

export const pt: typeof en = {
  common: {
    dir: "ltr" as const,
    language: "Idioma",
    selectLanguage: "Selecionar idioma",
    close: "Fechar",
    open: "Abrir"
  },
  nav: {
    home: "Início",
    work: "Projetos",
    engineering: "Engenharia",
    aiml: "IA / ML",
    credentials: "Certificações",
    evidence: "Evidências",
    about: "Sobre",
    writing: "Artigos",
    contact: "Contato",
    viewProjects: "Ver Projetos Selecionados",
    contactMe: "Fale Comigo",
    resume: "Currículo",
    downloadCv: "Baixar CV",
    github: "GitHub",
    linkedin: "LinkedIn",
    openMenu: "Abrir menu de navegação",
    closeMenu: "Fechar menu de navegação"
  },
  hero: {
    badge: "Construindo Soluções Digitais para um Futuro Melhor",
    eyebrow: "ENGENHEIRO DE SOFTWARE FULL-STACK",
    titlePrefix: "Construindo sistemas de software seguros, escaláveis e ",
    titleHighlight: "inteligentes.",
    titleFullStack: "Engenheiro",
    titleSoftware: "de Software",
    titleEngineer: "Full-Stack",
    subtitle: "Engenheiro full-stack focado em backend, projetando SaaS rico em domínio, APIs corporativas, sistemas orientados a dados, aplicativos web/mobile e integrações de IA/ML.",
    specialties: "Backend • SaaS • Arquitetura • IA/ML • Segurança",
    specialtiesList: ["Backend", "SaaS", "Arquitetura", "IA/ML", "Segurança"],
    handwritten: "Melhores Sistemas, Maior Impacto",
    ctaPrimary: "Ver Meus Projetos",
    ctaSecondary: "Fale Comigo",
    verifiedSystems: "11 Sistemas Auditados e Verificados"
  },
  tech: {
    badge: "STACK TECNOLÓGICA",
    title: "Tecnologias com que Trabalho",
    subtitle: "Utilizo uma stack moderna e comprovada para construir aplicações escaláveis, sustentáveis e seguras.",
    codeComment: "// Construir. Entregar. Aprimorar.",
    viewAll: "Explorar Topologia Interativa",
    terminalView: "Visualização do Código de Arquitetura",
    statusReady: "Topologia do Sistema Ativa",
    statusDesc: "Passe o cursor ou selecione qualquer nó para inspecionar domínio arquitetural, conexões e responsabilidades.",
    topologyBadge: "REDE DE TOPOLOGIA DO SISTEMA",
    topologyTitle: "Malha de Dependências Arquiteturais",
    topologyDesc: "Passe o cursor ou foque em qualquer nó arquitetural para inspecionar especificações de runtime, taxa de adoção e responsabilidades de engenharia.",
    telemetryActive: "TELEMETRIA: INSPEÇÃO DE NÓ ATIVA",
    telemetryReady: "TELEMETRIA DE TOPOLOGIA PRONTA",
    missionControlTitle: "CENTRO DE CONTROLE PRONTO",
    missionControlDesc: "Selecione ou passe o cursor sobre qualquer nó nas colunas para examinar especificações de execução, taxa de adoção e papéis arquiteturais.",
    portfolioUsage: "Adoção no Portfólio",
    runtimeEngine: "Motor de Execução",
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      database: "Banco de Dados",
      ai: "IA / ML",
      infra: "DevOps",
      security: "Segurança"
    }
  },
  capabilities: {
    badge: "O QUE FAÇO",
    title: "Soluções de Engenharia, Não Apenas Código",
    subtitle: "Traduzindo desafios operacionais complexos em sistemas de software resilientes, observáveis e manuteníveis.",
    items: {
      backend: {
        title: "Engenharia de Backend",
        desc: "Projetando APIs modulares, lógica de domínio, autenticação, autorização granular, pipelines de validação e integrações com terceiros."
      },
      frontend: {
        title: "Engenharia Front-End",
        desc: "Criando interfaces web pixel-perfect, acessíveis e performáticas com React, Next.js e CSS moderno — de design systems a dashboards analíticos."
      },
      database: {
        title: "Engenharia de Dados",
        desc: "Projetando esquemas relacionais, modelos de domínio, estratégias de indexação, livros-razão de partidas dobradas e persistência documental."
      },
      saas: {
        title: "Arquitetura SaaS",
        desc: "Construindo sistemas multi-tenant com isolamento de inquilinos, controle de acesso baseado em atributos (ABAC), filas assíncronas e trilhas de auditoria."
      },
      security: {
        title: "Engenharia Focada em Segurança",
        desc: "Aplicando autenticação, hashing criptográfico de senhas, chaves de idempotência, headers seguros, limitação de taxa e controles defensivos."
      },
      aiml: {
        title: "Integração de IA / ML",
        desc: "Integrando modelos de machine learning, algoritmos de rastreamento de conhecimento (BKT) e interfaces de LLM conversacionais em fluxos práticos."
      },
      fullstack: {
        title: "Engenharia de Produto Full-Stack",
        desc: "Conectando arquiteturas backend resilientes a interfaces web e mobile responsivas para experiências de usuário consistentes e confiáveis."
      }
    }
  },
  projects: {
    badge: "PROJETOS EM DESTAQUE",
    title: "Produtos Principais",
    subtitle: "Quatro produtos centrais que demonstram meu trabalho de engenharia mais sólido, profundidade de domínio e capacidade de design de sistemas.",
    viewAll: "Ver Todos os Projetos",
    otherBadge: "MAIS PROJETOS",
    otherTitle: "Outros Projetos",
    otherSubtitle: "Sistemas funcionais adicionais e protótipos de domínio em diversos setores da indústria.",
    viewDetails: "Ver Detalhes",
    technologiesUsed: "Tecnologias",
    verifiedCapabilities: "Capacidades Verificadas",
    architectureSummary: "Resumo da Arquitetura",
    keyEvidence: "Principais Evidências de Engenharia",
    statusLabel: "Maturidade",
    verifiedBadge: "Auditado e Verificado",
    caveatLabel: "Nota de Auditoria Técnica",
    modalClose: "Fechar detalhes",
    operationalProblem: "Problema Operacional",
    engineeringSolution: "Solução de Engenharia",
    auditSource: "Fonte de Auditoria: Evidências verificadas no workspace",
    inspectGithub: "Inspecionar no GitHub",
    scrollLeft: "Rolar projetos para a esquerda",
    scrollRight: "Rolar projetos para a direita",
    viewAuditFor: "Ver auditoria técnica de",
    maturities: {
      mvp: "MVP Funcional",
      working: "Protótipo Operacional",
      early: "Protótipo Inicial"
    }
  },
  evidence: {
    badge: "EVIDÊNCIAS DE ENGENHARIA",
    title: "Construído. Auditado. Verificável.",
    subtitle: "Estes projetos são sistemas de software reais com código verificável, arquitetura e evidências de implementação em seus repositórios.",
    cta: "Ver Detalhes Técnicos",
    disclaimer: "Estes são sistemas de software reais projetados e implementados em diferentes estágios de maturidade — não reivindicações de implantações comerciais em escala de produção.",
    metrics: {
      products: {
        label: "Produtos",
        detail: "Sistemas de software distintos projetados, modelados e implementados em diversos domínios."
      },
      industries: {
        label: "Setores",
        detail: "AgriTech, FinTech, HealthTech, Hotelaria, EdTech, GovTech, RestaurantTech e PropTech."
      },
      nestjs: {
        label: "NestJS",
        detail: "Framework backend TypeScript empresarial com IoC e módulos estritos de domínio."
      },
      postgresql: {
        label: "PostgreSQL",
        detail: "Persistência relacional, conformidade ACID e isolamento de esquemas de domínio."
      },
      nextjs: {
        label: "Next.js/React",
        detail: "Pipelines modernas de renderização no servidor e cliente para dashboards responsivos."
      },
      reactnative: {
        label: "React Native",
        detail: "Aplicativos mobile multiplataforma com filas offline e sincronização em segundo plano."
      },
      redis: {
        label: "Redis",
        detail: "Cache distribuído de alto desempenho, limitação de taxa e filas assíncronas (BullMQ)."
      },
      fastapi: {
        label: "FastAPI (IA)",
        detail: "Microsserviços dedicados em Python para modelos preditivos, BKT e integrações LLM."
      }
    }
  },
  approach: {
    badge: "METODOLOGIA",
    title: "Abordagem de Engenharia e Arquitetura",
    subtitle: "Um fluxo de trabalho sistemático desde a descoberta do problema até a iteração resiliente e testada do sistema.",
    pipelineLabel: "Pipeline de metodologia de engenharia",
    phaseSpecification: "Fase {step} de 11 • Especificação Arquitetural",
    activitiesHeading: "Atividades Principais de Engenharia e Mecanismos",
    deliverableHeading: "Entregável Arquitetural Concreto",
    guaranteeHeading: "Garantia de Estabilidade Sistêmica"
  },
  about: {
    badge: "SOBRE MIM",
    title: "Engenheiro de Software Full-Stack",
    p1: "Construo sistemas seguros, escaláveis e inteligentes utilizando tecnologias modernas. Concentro-me em resolver problemas complexos, desenhar arquiteturas limpas e transformar ideias de domínio em produtos funcionais e manuteníveis.",
    p2: "Minha filosofia de engenharia prioriza modelagem rigorosa de domínio, estrita integridade de dados e segurança defensiva. Construo sistemas com limites claros, registros detalhados e cobertura verificável de testes.",
    remoteFriendly: "Trabalho Remoto",
    remoteDesc: "Aberto a oportunidades internacionais",
    basedIn: "Localização",
    basedDesc: "Nigéria (Flexível / UTC+1)",
    mobilityTitle: "Mobilidade Internacional",
    mobilityDesc: "Passaporte internacional disponível · Aberto a oportunidades e contratos internacionais remotos.",
    stemTitle: "Além do Software",
    stemDesc: "Também leciono matemática, física, química e programação, desenvolvendo conteúdo técnico educacional e traduzindo conceitos complexos de STEM em estruturas claras e intuitivas.",
    learnMore: "Saber mais",
    youtubeChannel: "Canal no YouTube: Learn With Matthew Gana",
    instagramProfile: "Instagram: Learn With Matthew Gana"
  },
  writing: {
    badge: "COMUNICAÇÃO TÉCNICA",
    title: "Artigos e Notas de Arquitetura",
    subtitle: "Reflexões sobre modelagem de domínio, segurança de APIs e engenharia de sistemas.",
    upcomingNote: "Artigo em Breve",
    articles: [
      {
        category: "Arquitetura e DDD",
        title: "Decomposição de Limites Orientada a Domínio em Monólitos Modulares",
        excerpt: "Por que o isolamento em nível de esquema e a inversão estrita de dependências superam a divisão prematura em microsserviços para plataformas de negócios."
      },
      {
        category: "Segurança e FinTech",
        title: "Garantindo Invariantes de Partidas Dobradas e Idempotência de Pagamentos",
        excerpt: "Projetando motores contábeis à prova de adulteração com asserções de saldo transacional, caches de chaves de idempotência e resolução offline de conflitos."
      },
      {
        category: "IA e Aprendizado Algorítmico",
        title: "Desmistificando o Rastreamento Bayesiano do Conhecimento (BKT) em Sistemas EdTech",
        excerpt: "Um guia prático para modelar a aquisição cognitiva de habilidades em estudantes ao longo do tempo usando transições de estados latentes em TypeScript."
      }
    ]
  },
  contact: {
    badge: "ENTRE EM CONTATO",
    title: "Vamos Construir Algo Excepcional",
    subtitle: "Estou aberto a oportunidades de engenharia remota, desafios técnicos e parcerias em produtos. Sinta-se à vontade para entrar em contato diretamente.",
    nameLabel: "Seu Nome",
    namePlaceholder: "Ada Lovelace",
    emailLabel: "Seu E-mail",
    emailPlaceholder: "ada@dominio.com",
    subjectLabel: "Assunto / Tópico",
    messageLabel: "Sua Mensagem",
    messagePlaceholder: "Descreva seus requisitos de engenharia ou oportunidade...",
    sendButton: "Enviar Mensagem",
    directEmail: "E-mail Direto",
    location: "Localização",
    locationValue: "Nigéria (Remoto / Global)",
    subjectOptions: {
      role: "Oportunidade de Engenharia / Contratação",
      project: "Projeto de Software / Contrato",
      collaboration: "Colaboração Técnica",
      other: "Consulta Geral"
    },
    mailtoNotice: "Clicar em enviar abrirá seu cliente de e-mail endereçado diretamente a Matthew Gana."
  },
  aiml: {
    badge: "ENGENHARIA DE IA / ML",
    title: "Engenharia Aplicada de IA / ML",
    subtitle: "Sistemas aplicados de IA abrangendo modelagem preditiva, visão computacional, PLN, inteligência geoespacial, detecção de anomalias e suporte a decisões.",
    nav: "IA / ML",
    disciplinesLabel: "Disciplinas Principais",
    projectsLabel: "Projetos Aplicados",
    statusLabel: "Status",
    domainLabel: "Domínio",
    capabilitiesLabel: "Capacidades",
    evidenceLabel: "Evidências de Engenharia",
    workflowBadge: "PIPELINE DE ENGENHARIA",
    workflowTitle: "Fluxo de Trabalho de Engenharia de IA Aplicada",
    workflowSubtitle: "Uma abordagem de engenharia de propósito geral aplicada em projetos de IA/ML. Os estágios individuais variam conforme o escopo real de implementação.",
    workflowDisclaimer: "Isso representa um fluxo de trabalho geral de engenharia, não uma afirmação de que todos os estágios foram concluídos em cada projeto.",
    capstoneBadge: "PROJETO FINAL DE IA / ML",
    capstoneLabel: "Projeto Final",
    capstoneNote: "Projeto de conclusão do curso de Inteligência Artificial e Machine Learning — recentemente finalizado.",
    disciplines: {
      predictive: "ML Preditivo",
      vision: "Visão Computacional",
      nlp: "PLN / NLP",
      geospatial: "IA Geoespacial",
      anomaly: "Detecção de Anomalias",
      decision: "Suporte a Decisões"
    },
    phases: {
      input: "Entrada",
      preparation: "Preparação",
      modelling: "Modelagem",
      deployment: "Implantação",
      iteration: "Iteração"
    }
  },
  credentials: {
    badge: "CERTIFICAÇÕES",
    title: "Certificações",
    subtitle: "Treinamento formal que apoia o trabalho de engenharia.",
    nav: "Certificações",
    categoryLabel: "Categoria",
    viewCertificate: "Ver Certificado",
    noImageNote: "Certificado registrado",
    categories: {
      cybersecurity: "Cibersegurança",
      backend: "Desenvolvimento Backend",
      data: "Análise de Dados",
      aiml: "IA e Machine Learning"
    }
  },
  footer: {
    brandTitle: "Engenheiro de Software Full-Stack",
    tagline: "Construindo sistemas de software seguros, escaláveis e inteligentes.",
    rights: "Todos os direitos reservados.",
    backToTop: "Voltar ao topo"
  }
};
