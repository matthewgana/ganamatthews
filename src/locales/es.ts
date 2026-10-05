import { en } from "./en";

export const es: typeof en = {
  common: {
    dir: "ltr" as const,
    language: "Idioma",
    selectLanguage: "Seleccionar idioma",
    close: "Cerrar",
    open: "Abrir"
  },
  nav: {
    home: "Inicio",
    work: "Proyectos",
    engineering: "Ingeniería",
    aiml: "IA / ML",
    credentials: "Certificaciones",
    evidence: "Evidencia",
    about: "Sobre mí",
    writing: "Artículos",
    contact: "Contacto",
    viewProjects: "Ver Trabajos Seleccionados",
    contactMe: "Contáctame",
    resume: "Currículum",
    downloadCv: "Descargar CV",
    github: "GitHub",
    linkedin: "LinkedIn",
    openMenu: "Abrir menú de navegación",
    closeMenu: "Cerrar menú de navegación"
  },
  hero: {
    badge: "Construyendo Soluciones Digitales para un Futuro Mejor",
    eyebrow: "INGENIERO DE SOFTWARE FULL-STACK",
    titlePrefix: "Construyendo sistemas de software seguros, escalables e ",
    titleHighlight: "inteligentes.",
    titleFullStack: "Ingeniero",
    titleSoftware: "de Software",
    titleEngineer: "Full-Stack",
    subtitle: "Ingeniero full-stack enfocado en backend, diseñando plataformas SaaS con lógica de dominio avanzada, APIs empresariales, sistemas basados en datos, aplicaciones web/móviles e integraciones de IA/ML.",
    specialties: "Backend • SaaS • Arquitectura • IA/ML • Seguridad",
    specialtiesList: ["Backend", "SaaS", "Arquitectura", "IA/ML", "Seguridad"],
    handwritten: "Mejores Sistemas, Mayor Impacto",
    ctaPrimary: "Ver Mis Proyectos",
    ctaSecondary: "Contáctame",
    verifiedSystems: "11 Sistemas Auditados y Verificados"
  },
  tech: {
    badge: "STACK TECNOLÓGICO",
    title: "Tecnologías con las que Trabajo",
    subtitle: "Utilizo un stack moderno y probado para construir aplicaciones escalables, mantenibles y seguras.",
    codeComment: "// Construir. Desplegar. Mejorar.",
    viewAll: "Explorar Topología Interactiva",
    terminalView: "Vista de Arquitectura de Código",
    statusReady: "Topología del Sistema en Línea",
    statusDesc: "Pase el cursor o seleccione cualquier nodo para examinar su dominio arquitectónico, conexiones y responsabilidades.",
    topologyBadge: "RED DE TOPOLOGÍA DEL SISTEMA",
    topologyTitle: "Malla de Dependencias Arquitectónicas",
    topologyDesc: "Examine especificaciones de tiempo de ejecución, tasas de adopción en el portafolio y responsabilidades de ingeniería.",
    telemetryActive: "TELEMETRÍA: INSPECCIÓN DE NODO ACTIVA",
    telemetryReady: "TELEMETRÍA DE TOPOLOGÍA LISTA",
    missionControlTitle: "CENTRO DE CONTROL LISTO",
    missionControlDesc: "Seleccione o pase el cursor sobre cualquier nodo en las columnas para revisar especificaciones, adopción y roles.",
    portfolioUsage: "Uso en Portafolio",
    runtimeEngine: "Motor de Ejecución",
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      database: "Bases de Datos",
      ai: "IA / ML",
      infra: "DevOps",
      security: "Seguridad"
    }
  },
  capabilities: {
    badge: "LO QUE HAGO",
    title: "Soluciones de Ingeniería, No Sólo Código",
    subtitle: "Traduciendo problemas operativos complejos en sistemas de software resilientes, observables y fáciles de mantener.",
    items: {
      backend: {
        title: "Ingeniería de Backend",
        desc: "Diseño de APIs modulares, lógica de dominio, autenticación, autorización granular, pipelines de validación e integraciones de terceros."
      },
      database: {
        title: "Ingeniería de Datos",
        desc: "Diseño de esquemas relacionales, modelos de dominio, estrategias de indexación, libros mayores por partida doble y persistencia documental."
      },
      saas: {
        title: "Arquitectura SaaS",
        desc: "Construcción de sistemas multi-inquilino con aislamiento de datos, control de acceso basado en atributos (ABAC), colas asíncronas y auditoría."
      },
      security: {
        title: "Ingeniería Enfocada en Seguridad",
        desc: "Implementación de autenticación, hash criptográfico de contraseñas, claves de idempotencia, cabeceras seguras, limitación de tasa y controles defensivos."
      },
      aiml: {
        title: "Integración de IA / ML",
        desc: "Integración de modelos de machine learning, algoritmos de seguimiento del conocimiento (BKT) e interfaces de LLM conversacionales en flujos reales."
      },
      fullstack: {
        title: "Ingeniería de Producto Full-Stack",
        desc: "Conexión de arquitecturas de backend sólidas con interfaces web y móviles reactivas para una experiencia de usuario cohesionada y fiable."
      }
    }
  },
  projects: {
    badge: "PROYECTOS DESTACADOS",
    title: "Productos Principales",
    subtitle: "Cuatro productos centrales que demuestran mi mejor trabajo de ingeniería, profundidad de dominio y diseño de sistemas.",
    viewAll: "Ver Todos los Proyectos",
    otherBadge: "MÁS PROYECTOS",
    otherTitle: "Otros Proyectos y Prototipos",
    otherSubtitle: "Sistemas funcionales adicionales y prototipos de dominio en diversos sectores industriales.",
    viewDetails: "Ver Detalles Técnicos",
    technologiesUsed: "Tecnologías",
    verifiedCapabilities: "Capacidades Verificadas",
    architectureSummary: "Resumen de Arquitectura",
    keyEvidence: "Evidencias Principales de Ingeniería",
    statusLabel: "Madurez",
    verifiedBadge: "Auditado y Verificado",
    caveatLabel: "Nota de Auditoría Técnica",
    modalClose: "Cerrar detalles",
    operationalProblem: "Problema Operativo",
    engineeringSolution: "Solución de Ingeniería",
    auditSource: "Fuente de Auditoría: Evidencias verificadas en workspace",
    inspectGithub: "Inspeccionar en GitHub",
    scrollLeft: "Desplazar proyectos a la izquierda",
    scrollRight: "Desplazar proyectos a la derecha",
    viewAuditFor: "Ver auditoría técnica de",
    maturities: {
      mvp: "MVP Funcional",
      working: "Prototipo Operativo",
      early: "Prototipo Inicial"
    }
  },
  evidence: {
    badge: "EVIDENCIA DE INGENIERÍA",
    title: "Construido. Auditado. Verificable.",
    subtitle: "Estos proyectos son sistemas reales con código verificable, arquitectura comprobada y evidencias de implementación en sus repositorios.",
    cta: "Ver Detalles Técnicos",
    disclaimer: "Son sistemas de software reales diseñados e implementados en diversas etapas de madurez, no afirmaciones de despliegues comerciales masivos.",
    metrics: {
      products: {
        label: "Productos",
        detail: "Sistemas de software independientes diseñados, modelados e implementados en diversos dominios."
      },
      industries: {
        label: "Sectores",
        detail: "AgriTech, FinTech, HealthTech, Hostelería, EdTech, GovTech, RestaurantTech y PropTech."
      },
      nestjs: {
        label: "NestJS",
        detail: "Framework de backend TypeScript empresarial con IoC y separación estricta de dominios."
      },
      postgresql: {
        label: "PostgreSQL",
        detail: "Persistencia relacional, cumplimiento ACID y aislamiento de esquemas a nivel de dominio."
      },
      nextjs: {
        label: "Next.js / React",
        detail: "Pipelines modernas de renderizado en servidor y cliente para paneles de control dinámicos."
      },
      reactnative: {
        label: "React Native",
        detail: "Aplicaciones móviles multiplataforma con colas offline y sincronización en segundo plano."
      },
      redis: {
        label: "Redis",
        detail: "Caché distribuida de alto rendimiento, limitación de velocidad y colas asíncronas (BullMQ)."
      },
      fastapi: {
        label: "FastAPI (IA)",
        detail: "Microservicios dedicados en Python para modelos de predicción, BKT e integraciones con LLMs."
      }
    }
  },
  approach: {
    badge: "METODOLOGÍA",
    title: "Enfoque de Ingeniería y Arquitectura",
    subtitle: "Un flujo de trabajo sistemático desde el análisis inicial del problema hasta la iteración resiliente y probada del sistema.",
    pipelineLabel: "Pipeline de metodología de ingeniería",
    phaseSpecification: "Fase {step} de 11 • Especificación de Arquitectura",
    activitiesHeading: "Actividades Clave y Mecanismos de Ingeniería",
    deliverableHeading: "Entregable Arquitectónico Concreto",
    guaranteeHeading: "Garantía de Estabilidad Sistémica"
  },
  about: {
    badge: "SOBRE MÍ",
    title: "Ingeniero de Software Full-Stack",
    p1: "Construyo sistemas seguros, escalables e inteligentes utilizando tecnologías modernas. Me concentro en resolver problemas complejos, diseñar arquitecturas limpias y transformar ideas de negocio en productos funcionales y mantenibles.",
    p2: "Mi filosofía de ingeniería prioriza el modelado estricto de dominio, la integridad de los datos y la seguridad defensiva. Construyo sistemas con límites nítidos, registro exhaustivo de eventos y cobertura verificable de pruebas.",
    remoteFriendly: "Trabajo Remoto",
    remoteDesc: "Abierto a oportunidades internacionales",
    basedIn: "Ubicación",
    basedDesc: "Nigeria (Flexible / UTC+1)",
    mobilityTitle: "Movilidad Internacional",
    mobilityDesc: "Pasaporte internacional disponible · Abierto a oportunidades y colaboraciones internacionales en remoto.",
    stemTitle: "Más Allá del Software",
    stemDesc: "También enseño matemáticas, física, química y programación, creando contenido educativo técnico para traducir conceptos científicos complejos en explicaciones claras e intuitivas.",
    learnMore: "Conocer más",
    youtubeChannel: "Canal de YouTube: Learn With Matthew Gana",
    instagramProfile: "Instagram: Learn With Matthew Gana"
  },
  writing: {
    badge: "COMUNICACIÓN TÉCNICA",
    title: "Artículos y Notas de Arquitectura",
    subtitle: "Reflexiones sobre modelado de dominio, seguridad de APIs e ingeniería de sistemas.",
    upcomingNote: "Próxima Publicación",
    articles: [
      {
        category: "Arquitectura y DDD",
        title: "Descomposición de límites guiada por el dominio en monolitos modulares",
        excerpt: "Por qué el aislamiento a nivel de esquema y la inversión estricta de dependencias superan la división prematura en microservicios para plataformas empresariales."
      },
      {
        category: "Seguridad y FinTech",
        title: "Cumplimiento de invariantes contables de partida doble e idempotencia en pagos",
        excerpt: "Diseño de motores contables a prueba de manipulaciones con aserciones transaccionales de saldo, claves de idempotencia y resolución offline de conflictos."
      },
      {
        category: "IA y Aprendizaje Algorítmico",
        title: "Desmitificando el Seguimiento Bayesiano del Conocimiento (BKT) en EdTech",
        excerpt: "Guía práctica para modelar la adquisición cognitiva de habilidades a lo largo del tiempo usando transiciones de estados latentes probabilísticos en TypeScript."
      }
    ]
  },
  contact: {
    badge: "CONTACTO",
    title: "Construyamos Algo Excepcional",
    subtitle: "Estoy disponible para roles de ingeniería remota, desafíos técnicos complejos y alianzas en productos. No dudes en escribirme directamente.",
    nameLabel: "Tu Nombre",
    namePlaceholder: "Ada Lovelace",
    emailLabel: "Tu Correo Electrónico",
    emailPlaceholder: "ada@dominio.com",
    subjectLabel: "Asunto / Tema",
    messageLabel: "Tu Mensaje",
    messagePlaceholder: "Describe tus requerimientos de ingeniería o la oportunidad...",
    sendButton: "Enviar Mensaje",
    directEmail: "Correo Directo",
    location: "Ubicación",
    locationValue: "Nigeria (Remoto / Global)",
    subjectOptions: {
      role: "Oportunidad de Empleo / Contratación",
      project: "Proyecto de Software / Contrato",
      collaboration: "Colaboración Técnica",
      other: "Consulta General"
    },
    mailtoNotice: "Al hacer clic en enviar se abrirá directamente tu cliente de correo electrónico dirigido a Matthew Gana."
  },
  aiml: {
    badge: "INGENIERÍA DE IA / ML",
    title: "Ingeniería de IA / ML Aplicada",
    subtitle: "Sistemas aplicados de IA que abarcan modelado predictivo, visión computacional, PLN, inteligencia geoespacial, detección de anomalías y soporte para la toma de decisiones.",
    nav: "IA / ML",
    disciplinesLabel: "Disciplinas Principales",
    projectsLabel: "Proyectos Aplicados",
    statusLabel: "Estado",
    domainLabel: "Dominio",
    capabilitiesLabel: "Capacidades",
    evidenceLabel: "Evidencias de Ingeniería",
    workflowBadge: "PIPELINE DE INGENIERÍA",
    workflowTitle: "Flujo de Trabajo de Ingeniería de IA Aplicada",
    workflowSubtitle: "Un enfoque de ingeniería generalista aplicado a proyectos de IA/ML. Las etapas individuales varían según el alcance real de implementación.",
    workflowDisclaimer: "Esto representa un flujo metodológico general y no una afirmación de que todas las fases se hayan completado en cada proyecto.",
    capstoneBadge: "PROYECTO FINAL DE IA / ML",
    capstoneLabel: "Proyecto Final",
    capstoneNote: "Proyecto final del curso de Inteligencia Artificial y Machine Learning — recientemente completado.",
    disciplines: {
      predictive: "ML Predictivo",
      vision: "Visión Computacional",
      nlp: "PLN / NLP",
      geospatial: "IA Geoespacial",
      anomaly: "Detección de Anomalías",
      decision: "Soporte a Decisiones"
    },
    phases: {
      input: "Entrada",
      preparation: "Preparación",
      modelling: "Modelado",
      deployment: "Despliegue",
      iteration: "Iteración"
    }
  },
  credentials: {
    badge: "CERTIFICACIONES",
    title: "Certificaciones",
    subtitle: "Capacitación formal que respalda el trabajo de ingeniería.",
    nav: "Certificaciones",
    categoryLabel: "Categoría",
    viewCertificate: "Ver Certificado",
    noImageNote: "Certificado archivado",
    categories: {
      cybersecurity: "Ciberseguridad",
      backend: "Desarrollo Backend",
      data: "Análisis de Datos",
      aiml: "IA y Machine Learning"
    }
  },
  footer: {
    brandTitle: "Ingeniero de Software Full-Stack",
    tagline: "Construyendo sistemas de software seguros, escalables e inteligentes.",
    rights: "Todos los derechos reservados.",
    backToTop: "Volver arriba"
  }
};
