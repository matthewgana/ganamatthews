import { en } from "./en";

export const es: typeof en = {
  common: {
    dir: "ltr" as const,
    language: "Idioma",
    selectLanguage: "Seleccionar idioma",
    close: "Cerrar",
    open: "Abrir",
    theme: "TEMA",
    dark: "Oscuro",
    light: "Claro",
    skipToMain: "Ir al contenido principal"
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
    closeMenu: "Cerrar menú de navegación",
    closeMenuShort: "Cerrar menú"
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
    verifiedSystems: "11 Sistemas Auditados y Verificados",
    scrollToExplore: "DESPLAZAR PARA EXPLORAR",
    exploreTechStack: "Explorar stack y arquitectura",
    scrollDown: "Desplazarse a los proyectos"
  },
  credibility: {
    badge: "TRAYECTORIA VERIFICADA",
    title: "Sistemas en Producción, Evidencia Verificable",
    subtitle: "11 sistemas de software completos diseñados con límites de dominio rigurosos, persistencia empresarial y bases de código auditables.",
    systemsCount: "11",
    systemsLabel: "Sistemas Auditados",
    systemsDetail: "Aplicaciones completas de extremo a extremo con repositorios verificables",
    industriesCount: "8+",
    industriesLabel: "Sectores Industriales",
    industriesDetail: "AgriTech, FinTech, Salud, Hostelería, EdTech, GovTech y más",
    evidenceCount: "100%",
    evidenceLabel: "Evidencia Técnica",
    evidenceDetail: "Modelos de dominio, aislamiento de esquemas y patrones probados",
    stackCount: "Producción",
    stackLabel: "Base Tecnológica",
    stackDetail: "TypeScript · NestJS · PostgreSQL · Next.js · Redis · Python",
    exploreFlagships: "Explorar Sistemas Principales",
    scrollHint: "Desplaza para explorar los sistemas"
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
    missionControlDesc: "Seleccione o pase el cursor sobre cualquier nodo en las columnas para inspeccionar especificaciones de ejecución, tasas de adopción y roles arquitectónicos.",
    portfolioUsage: "Adopción en Portafolio",
    runtimeEngine: "Motor de Ejecución",
    engineeringCore: "Núcleo de Ingeniería",
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      database: "Base de Datos",
      ai: "IA / ML",
      infra: "DevOps",
      security: "Seguridad"
    }
  },
  capabilities: {
    badge: "LO QUE HAGO",
    title: "Soluciones de Ingeniería, No Solo Código",
    subtitle: "Traduciendo problemas operativos complejos en sistemas de software resilientes, observables y mantenibles.",
    liveStatus: "EN VIVO",
    architecturePipeline: "PIPELINE DE ARQUITECTURA",
    stages: "ETAPAS",
    viewProductionEvidence: "Ver evidencia de producción",
    backToOverview: "Volver a la visión general",
    verifiedProductionEvidence: "EVIDENCIA DE PRODUCCIÓN VERIFICADA",
    productionProven: "PROBADO EN PRODUCCIÓN",
    productionProvenDesc: "Desarrollado con patrones modulares y testables",
    clickToFlip: "clic para ver evidencia verificada",
    clickToFlipBack: "ver visión general y flujo de trabajo",
    items: {
      backend: {
        title: "Ingeniería Backend",
        desc: "Diseñando APIs modulares, lógica de dominio, autenticación, autorización granular, pipelines de validación e integraciones con terceros."
      },
      frontend: {
        title: "Ingeniería Front-End",
        desc: "Creando interfaces web pixel-perfect, accesibles y de alto rendimiento con React, Next.js y CSS moderno — desde sistemas de diseño hasta dashboards analíticos."
      },
      database: {
        title: "Ingeniería de Datos",
        desc: "Diseñando esquemas relacionales, modelos de dominio, estrategias de indexación, libros de contabilidad de doble entrada y persistencia documental."
      },
      saas: {
        title: "Arquitectura SaaS",
        desc: "Construyendo sistemas multi-tenant con aislamiento de inquilinos, control de acceso basado en atributos (ABAC), colas asíncronas y pistas de auditoría."
      },
      security: {
        title: "Ingeniería Orientada a la Seguridad",
        desc: "Aplicando autenticación, hash criptográfico de contraseñas, claves de idempotencia, cabeceras seguras, limitación de tasa y controles defensivos."
      },
      aiml: {
        title: "Integración de IA / ML",
        desc: "Integrando modelos de machine learning, algoritmos de seguimiento del conocimiento (BKT) e interfaces conversacionales LLM en flujos de trabajo prácticos."
      },
      fullstack: {
        title: "Ingeniería de Producto Full-Stack",
        desc: "Conectando arquitecturas backend resilientes a interfaces web y móviles responsivas para experiencias de usuario consistentes y confiables."
      }
    }
  },
  projects: {
    badge: "PROYECTOS DESTACADOS",
    title: "Productos Principales",
    subtitle: "Cuatro productos centrales que muestran mi mejor trabajo de ingeniería, profundidad de dominio y capacidades de diseño de sistemas.",
    viewAll: "Ver Todos los Proyectos",
    otherBadge: "MÁS PROYECTOS",
    otherTitle: "Otros Proyectos",
    otherSubtitle: "Sistemas funcionales adicionales y prototipos de dominio en diversas industrias.",
    viewDetails: "Ver Detalles",
    technologiesUsed: "Tecnologías",
    verifiedCapabilities: "Capacidades Verificadas",
    architectureSummary: "Resumen de Arquitectura",
    keyEvidence: "Evidencia Clave de Ingeniería",
    statusLabel: "Madurez",
    verifiedBadge: "Auditado y Verificado",
    caveatLabel: "Nota de Auditoría Técnica",
    modalClose: "Cerrar detalles",
    operationalProblem: "Problema Operativo",
    engineeringSolution: "Solución de Ingeniería",
    auditSource: "Fuente de Auditoría: Evidencia verificada en el workspace",
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
    subtitle: "Estos proyectos son sistemas de software reales con código verificable, arquitectura y evidencia de implementación en sus repositorios.",
    cta: "Ver Detalles Técnicos",
    disclaimer: "Estos son sistemas de software reales diseñados e implementados en diferentes etapas de madurez — no afirmaciones de despliegues comerciales a escala de producción.",
    technicalEvidenceLabel: "EVIDENCIA TÉCNICA",
    metrics: {
      products: {
        label: "Productos",
        detail: "Sistemas de software distintos diseñados, modelados e implementados en diversos dominios."
      },
      industries: {
        label: "Industrias",
        detail: "AgriTech, FinTech, HealthTech, Hospitalidad, EdTech, GovTech, RestaurantTech y PropTech."
      },
      nestjs: {
        label: "NestJS",
        detail: "Framework backend TypeScript empresarial con IoC y módulos de dominio estrictos."
      },
      postgresql: {
        label: "PostgreSQL",
        detail: "Persistencia relacional, conformidad ACID y separación de dominio a nivel de esquema."
      },
      nextjs: {
        label: "Next.js/React",
        detail: "Pipelines de renderización moderna en servidor y cliente para dashboards responsivos."
      },
      reactnative: {
        label: "React Native",
        detail: "Aplicaciones móviles multiplataforma con colas offline y sincronización."
      },
      redis: {
        label: "Redis",
        detail: "Caché distribuido de alto rendimiento, limitación de tasa y colas de tareas (BullMQ)."
      },
      fastapi: {
        label: "FastAPI (IA)",
        detail: "Microservicios Python dedicados para modelos predictivos, BKT e integraciones LLM."
      }
    }
  },
  approach: {
    badge: "METODOLOGÍA",
    title: "Enfoque de Ingeniería y Arquitectura",
    subtitle: "Un flujo de trabajo sistemático desde el descubrimiento del problema hasta la iteración resiliente y probada del sistema.",
    pipelineLabel: "Pipeline de metodología de ingeniería",
    phaseSpecification: "Fase {step} de 11 • Especificación Arquitectónica",
    activitiesHeading: "Actividades Principales de Ingeniería y Mecanismos",
    deliverableHeading: "Entregable Arquitectónico Concreto",
    guaranteeHeading: "Garantía de Estabilidad Sistémica"
  },
  about: {
    badge: "SOBRE MÍ",
    title: "Ingeniero de Software Full-Stack",
    p1: "Construyo sistemas seguros, escalables e inteligentes utilizando tecnologías modernas. Me enfoco en resolver problemas complejos, diseñar arquitecturas limpias y convertir ideas de dominio en productos funcionales y mantenibles.",
    p2: "Mi filosofía de ingeniería prioriza el modelado riguroso de dominio, la integridad estricta de datos y la seguridad defensiva. Construyo sistemas con límites claros, registro completo y cobertura de pruebas verificable.",
    remoteFriendly: "Trabajo Remoto",
    remoteDesc: "Abierto a oportunidades internacionales",
    basedIn: "Ubicación",
    basedDesc: "Nigeria (Flexible / UTC+1)",
    mobilityTitle: "Movilidad Internacional",
    mobilityDesc: "Pasaporte internacional disponible · Abierto a oportunidades y contratos internacionales remotos.",
    stemTitle: "Más Allá del Software",
    stemDesc: "También enseño matemáticas, física, química y programación, creando contenido educativo técnico y traduciendo conceptos STEM complejos en marcos claros e intuitivos.",
    learnMore: "Saber más",
    youtubeChannel: "Canal de YouTube: Learn With Matthew Gana",
    instagramProfile: "Instagram: Learn With Matthew Gana"
  },
  writing: {
    badge: "COMUNICACIÓN TÉCNICA",
    title: "Artículos y Notas de Arquitectura",
    subtitle: "Perspectivas sobre modelado de dominio, seguridad de APIs e ingeniería de sistemas.",
    upcomingNote: "Próximo Artículo",
    articles: [
      {
        category: "Arquitectura y DDD",
        title: "Descomposición de Límites Guiada por el Dominio en Monolitos Modulares",
        excerpt: "Por qué el aislamiento a nivel de esquema y la inversión estricta de dependencias superan la división prematura en microservicios para plataformas de negocio."
      },
      {
        category: "Seguridad y FinTech",
        title: "Aplicando Invariantes de Libro Mayor de Doble Entrada e Idempotencia de Pagos",
        excerpt: "Diseñando motores contables a prueba de manipulaciones con aserciones de saldo transaccional, cachés de claves de idempotencia y resolución de conflictos offline."
      },
      {
        category: "IA y Aprendizaje Algorítmico",
        title: "Desmitificando el Rastreo Bayesiano del Conocimiento (BKT) en Sistemas EdTech",
        excerpt: "Una guía práctica para modelar la adquisición cognitiva de habilidades en estudiantes a lo largo del tiempo usando transiciones de estado latente en TypeScript."
      }
    ]
  },
  contact: {
    badge: "PONTE EN CONTACTO",
    title: "Construyamos Algo Excepcional",
    subtitle: "Estoy abierto a roles de ingeniería remota, desafíos técnicos y colaboraciones de productos. No dudes en contactarme directamente.",
    nameLabel: "Tu Nombre",
    namePlaceholder: "Ada Lovelace",
    emailLabel: "Tu Correo Electrónico",
    emailPlaceholder: "ada@dominio.com",
    subjectLabel: "Asunto / Tema",
    messageLabel: "Tu Mensaje",
    messagePlaceholder: "Describe tus requisitos de ingeniería u oportunidad...",
    sendButton: "Enviar Mensaje",
    directEmail: "Correo Directo",
    location: "Ubicación",
    locationValue: "Nigeria (Remoto / Global)",
    connectFollow: "Conectar y Seguir",
    successTitle: "¡Mensaje Entregado!",
    successDesc: "¡Gracias, {name}! Tu consulta fue enviada directamente a mi bandeja de entrada. La revisaré y responderé a {email} en breve.",
    sendAnother: "Enviar otro mensaje",
    sending: "Enviando mensaje...",
    formNotice: "Los mensajes se entregan directamente a matthewgana95@gmail.com con confirmación instantánea.",
    errorFallback: "Enviar correo directamente",
    errorNetwork: "Error de conexión de red. También puedes contactarme directamente por correo electrónico.",
    errorGeneric: "No se pudo entregar el mensaje ahora mismo. Por favor, inténtalo de nuevo.",
    youtubeAriaLabel: "YouTube: @LearnWithMatthewGana",
    instagramAriaLabel: "Instagram: @learnwithmatthewgana",
    facebookAriaLabel: "Facebook: Matthew Gana",
    subjectOptions: {
      role: "Oportunidad de Ingeniería / Consulta de Contratación",
      project: "Proyecto de Software / Contrato",
      collaboration: "Colaboración Técnica",
      other: "Consulta General"
    },
    mailtoNotice: "Al hacer clic en enviar se abrirá tu cliente de correo dirigido directamente a Matthew Gana."
  },
  aiml: {
    badge: "INGENIERÍA DE IA / ML",
    title: "Ingeniería Aplicada de IA / ML",
    subtitle: "Sistemas de IA aplicada que abarcan modelado predictivo, visión por computadora, PLN, inteligencia geoespacial, detección de anomalías y soporte de decisiones.",
    nav: "IA / ML",
    disciplinesLabel: "Disciplinas Principales",
    projectsLabel: "Proyectos Aplicados",
    statusLabel: "Estado",
    domainLabel: "Dominio",
    capabilitiesLabel: "Capacidades",
    evidenceLabel: "Evidencia de Ingeniería",
    workflowBadge: "PIPELINE DE INGENIERÍA",
    workflowTitle: "Flujo de Trabajo de Ingeniería de IA Aplicada",
    workflowSubtitle: "Un enfoque de ingeniería de propósito general aplicado en proyectos de IA/ML. Las etapas individuales varían según el alcance real de implementación.",
    workflowDisclaimer: "Esto representa un flujo de trabajo general de ingeniería, no una afirmación de que todas las etapas se han completado en cada proyecto.",
    capstoneBadge: "PROYECTO FINAL DE IA / ML",
    capstoneLabel: "Proyecto Final",
    capstoneNote: "Proyecto de conclusión del curso de Inteligencia Artificial y Machine Learning — recientemente finalizado.",
    disciplines: {
      predictive: "ML Predictivo",
      vision: "Visión por Computadora",
      nlp: "PLN / NLP",
      geospatial: "IA Geoespacial",
      anomaly: "Detección de Anomalías",
      decision: "Soporte de Decisiones"
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
    subtitle: "Formación formal que respalda el trabajo de ingeniería.",
    nav: "Certificaciones",
    categoryLabel: "Categoría",
    viewCertificate: "Ver Certificado",
    noImageNote: "Certificado registrado",
    inspectCredential: "Inspeccionar credencial",
    statusOngoing: "En Curso",
    statusSprint: "Sprint 20d",
    statusAccredited: "Acreditado",
    statusVerified: "Verificado",
    capstoneInProgress: "PROYECTO FINAL EN CURSO",
    cohort: "COHORTE 2026",
    timeUnitDays: "DÍAS",
    timeUnitHrs: "HRS",
    timeUnitMin: "MIN",
    timeUnitSec: "SEG",
    curriculumDefense: "Defensa del Currículo",
    percentComplete: "88% Completado",
    inspectFullCertificate: "Inspeccionar Certificado Completo",
    verifiedRecord: "REGISTRO VERIFICADO",
    viewCapstoneRoadmap: "Ver Hoja de Ruta del Proyecto Final",
    aimlSpecializationTitle: "Especialización en IA y Machine Learning",
    aimlSpecializationDesc: "Currículo avanzado que cubre Deep Learning, Arquitecturas Transformer y Generación Aumentada por Recuperación (RAG).",
    liveCountdownTitle: "Cuenta Regresiva en Vivo hasta la Defensa Final",
    assessedCompetencies: "Competencias Evaluadas y Alcance de Verificación",
    officialRegistryHash: "Hash del Registro Oficial:",
    issuanceYear: "Año de Emisión / Finalización:",
    verificationAuthority: "Autoridad de Verificación:",
    institutionalRecord: "Registro de Acreditación Institucional",
    openFullResolution: "Abrir Certificado en Alta Resolución",
    closeAudit: "Cerrar Auditoría",
    inProgress20Day: "En Curso · Objetivo de 20 Días",
    accreditedProgram: "Programa Acreditado",
    verifiedIssued: "Verificado y Emitido",
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
