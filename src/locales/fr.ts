import { en } from "./en";

export const fr: typeof en = {
  common: {
    dir: "ltr" as const,
    language: "Langue",
    selectLanguage: "Choisir la langue",
    close: "Fermer",
    open: "Ouvrir"
  },
  nav: {
    home: "Accueil",
    work: "Projets",
    engineering: "Ingénierie",
    aiml: "IA / ML",
    credentials: "Certifications",
    evidence: "Preuves",
    about: "À Propos",
    writing: "Écrits",
    contact: "Contact",
    viewProjects: "Voir les projets",
    contactMe: "Me Contacter",
    resume: "CV",
    downloadCv: "Télécharger le CV",
    github: "GitHub",
    linkedin: "LinkedIn",
    openMenu: "Ouvrir le menu de navigation",
    closeMenu: "Fermer le menu de navigation"
  },
  hero: {
    badge: "Bâtir des solutions numériques pour un avenir meilleur",
    eyebrow: "INGÉNIEUR LOGICIEL FULL-STACK",
    titlePrefix: "Conception de systèmes logiciels sûrs, évolutifs et ",
    titleHighlight: "intelligents.",
    titleFullStack: "Ingénieur",
    titleSoftware: "Logiciel",
    titleEngineer: "Full-Stack",
    subtitle: "Ingénieur full-stack orienté backend, concevant des SaaS métier, des API d'entreprise, des architectures de données, des applications web/mobiles et des intégrations IA/ML.",
    specialties: "Backend • SaaS • Architecture • IA/ML • Sécurité",
    specialtiesList: ["Backend", "SaaS", "Architecture", "IA/ML", "Sécurité"],
    handwritten: "Meilleurs systèmes, plus grand impact",
    ctaPrimary: "Découvrir mes projets",
    ctaSecondary: "Me Contacter",
    verifiedSystems: "11 Systèmes Audités & Vérifiés"
  },
  tech: {
    badge: "STACK TECHNIQUE",
    title: "Technologies & Outils",
    subtitle: "Une pile technologique éprouvée et moderne pour bâtir des applications fiables, maintenables et sécurisées.",
    codeComment: "// Bâtir. Déployer. Améliorer.",
    viewAll: "Explorer la topologie interactive",
    terminalView: "Vue code source",
    statusReady: "Topologie système active",
    statusDesc: "Survolez ou cliquez sur un nœud pour inspecter son domaine architectural, ses dépendances et son rôle.",
    topologyBadge: "RÉSEAU DE TOPOLOGIE SYSTÈME",
    topologyTitle: "Maillage de Dépendances d'Architecture",
    topologyDesc: "Survolez ou ciblez un nœud architectural pour inspecter les spécifications d'exécution, le taux d'adoption et les responsabilités d'ingénierie.",
    telemetryActive: "TÉLÉMÉTRIE : INSPECTION DE NŒUD ACTIVE",
    telemetryReady: "TÉLÉMÉTRIE DE TOPOLOGIE PRÊTE",
    missionControlTitle: "CENTRE DE CONTRÔLE PRÊT",
    missionControlDesc: "Sélectionnez ou survolez un nœud dans les colonnes pour examiner les spécifications de runtime, l'adoption et les rôles architecturaux.",
    portfolioUsage: "Utilisation Portfolio",
    runtimeEngine: "Moteur d'Exécution",
    categories: {
      backend: "Backend",
      frontend: "Frontend",
      database: "Bases de données",
      ai: "IA / ML",
      infra: "DevOps",
      security: "Sécurité"
    }
  },
  capabilities: {
    badge: "CE QUE JE FAIS",
    title: "Des solutions d'ingénierie, pas seulement du code",
    subtitle: "Transformer des défis opérationnels complexes en systèmes logiciels résilients, observables et maintenables.",
    items: {
      backend: {
        title: "Ingénierie Backend",
        desc: "Conception d'API modulaires, logique métier, authentification, autorisation granulaire, pipelines de validation et intégrations."
      },
      database: {
        title: "Ingénierie des Données",
        desc: "Modélisation relationnelle, stratégies d'indexation, registres comptables en partie double et persistance documentaire."
      },
      saas: {
        title: "Architecture SaaS",
        desc: "Développement de systèmes multi-locataires, contrôle d'accès basé sur les attributs (ABAC), files d'attente asynchrones et traçabilité."
      },
      security: {
        title: "Ingénierie axée Sécurité",
        desc: "Authentification, hachage cryptographique, clés d'idempotence, en-têtes sécurisés, limitation de débit et contrôles défensifs."
      },
      aiml: {
        title: "Intégration IA / ML",
        desc: "Intégration d'algorithmes de traçage des connaissances (BKT), modèles de prédiction et interfaces conversationnelles LLM."
      },
      fullstack: {
        title: "Ingénierie Produit Full-Stack",
        desc: "Connexion d'architectures backend rigoureuses à des interfaces web et mobiles fluides pour une expérience utilisateur irréprochable."
      }
    }
  },
  projects: {
    badge: "PROJETS PHARES",
    title: "Produits Vedettes",
    subtitle: "Quatre réalisations majeures illustrant ma maîtrise technique, ma profondeur métier et ma conception système.",
    viewAll: "Voir tous les projets",
    otherBadge: "AUTRES PROJETS",
    otherTitle: "Autres Réalisations",
    otherSubtitle: "Systèmes fonctionnels et prototypes exploratoires couvrant de multiples secteurs d'activité.",
    viewDetails: "Détails techniques",
    technologiesUsed: "Technologies",
    verifiedCapabilities: "Capacités vérifiées",
    architectureSummary: "Résumé d'architecture",
    keyEvidence: "Preuves d'ingénierie",
    statusLabel: "Maturité",
    verifiedBadge: "Vérifié & Audité",
    caveatLabel: "Note d'audit technique",
    modalClose: "Fermer les détails",
    operationalProblem: "Problématique Opérationnelle",
    engineeringSolution: "Solution d'Ingénierie",
    auditSource: "Source d'Audit : Code et artefacts vérifiés en environnement",
    inspectGithub: "Examiner sur GitHub",
    scrollLeft: "Faire défiler les projets vers la gauche",
    scrollRight: "Faire défiler les projets vers la droite",
    viewAuditFor: "Voir l'audit technique pour",
    maturities: {
      mvp: "MVP Fonctionnel",
      working: "Prototype Fonctionnel",
      early: "Prototype Initial"
    }
  },
  evidence: {
    badge: "PREUVES D'INGÉNIERIE",
    title: "Conçu. Audité. Vérifiable.",
    subtitle: "Ces projets sont de véritables systèmes logiciels disposant de code, d'architectures et d'implémentations vérifiables dans leurs dépôts.",
    cta: "Voir les détails techniques",
    disclaimer: "Il s'agit de systèmes logiciels réels conçus et implémentés à différents stades de maturité, et non de revendications de déploiements commerciaux à grande échelle.",
    metrics: {
      products: {
        label: "Produits",
        detail: "Systèmes logiciels distincts conçus, modélisés et implémentés dans divers domaines."
      },
      industries: {
        label: "Industries",
        detail: "AgriTech, FinTech, HealthTech, Hôtellerie, EdTech, GovTech, FoodTech et PropTech."
      },
      nestjs: {
        label: "NestJS",
        detail: "Framework backend TypeScript d'entreprise avec IoC et modules de domaine stricts."
      },
      postgresql: {
        label: "PostgreSQL",
        detail: "Persistance relationnelle, conformité ACID et isolation de schéma de domaine."
      },
      nextjs: {
        label: "Next.js/React",
        detail: "Pipelines de rendu moderne côté serveur et client pour tableaux de bord réactifs."
      },
      reactnative: {
        label: "React Native",
        detail: "Applications mobiles multiplateformes avec synchronisation et file d'attente hors ligne."
      },
      redis: {
        label: "Redis",
        detail: "Mise en cache distribuée haute performance, limitation de débit et files BullMQ."
      },
      fastapi: {
        label: "FastAPI (IA)",
        detail: "Microservices Python dédiés aux modèles de prédiction, BKT et orchestration LLM."
      }
    }
  },
  approach: {
    badge: "MÉTHODOLOGIE",
    title: "Approche & Architecture d'Ingénierie",
    subtitle: "Un flux de travail rigoureux de l'analyse du problème jusqu'aux tests et à l'itération système.",
    pipelineLabel: "Pipeline de méthodologie d'ingénierie",
    phaseSpecification: "Phase {step} sur 11 • Spécification d'Architecture",
    activitiesHeading: "Activités & Mécanismes d'Ingénierie Clés",
    deliverableHeading: "Livrable Architectural Concret",
    guaranteeHeading: "Garantie de Stabilité Système"
  },
  about: {
    badge: "À PROPOS DE MOI",
    title: "Ingénieur Logiciel Full-Stack",
    p1: "Je conçois des systèmes logiciels sécurisés, évolutifs et intelligents. Je m'attache à résoudre des problématiques complexes, à élaborer des architectures modulaires et à transformer des concepts métier en produits pérennes.",
    p2: "Ma philosophie d'ingénierie accorde une priorité absolue à l'intégrité des données, aux limites claires de domaines et à la sécurité défensive. Chaque système est conçu pour être testable, observable et maintenable.",
    remoteFriendly: "Télétravail",
    remoteDesc: "Ouvert aux opportunités internationales",
    basedIn: "Localisation",
    basedDesc: "Nigeria (Flexible / UTC+1)",
    mobilityTitle: "Mobilité Internationale",
    mobilityDesc: "Passeport international disponible · Ouvert aux opportunités et missions internationales en télétravail.",
    stemTitle: "Au-delà du logiciel",
    stemDesc: "J'enseigne également les mathématiques, la physique, la chimie et la programmation, produisant des contenus didactiques pour démystifier les concepts scientifiques et techniques complexes.",
    learnMore: "En savoir plus",
    youtubeChannel: "Chaîne YouTube : Learn With Matthew Gana",
    instagramProfile: "Instagram : Learn With Matthew Gana"
  },
  writing: {
    badge: "COMMUNICATION TECHNIQUE",
    title: "Articles & Notes d'Architecture",
    subtitle: "Réflexions sur la modélisation de domaine, la sécurité des API et l'ingénierie des systèmes.",
    upcomingNote: "Publication à venir",
    articles: [
      {
        category: "Architecture & DDD",
        title: "Décomposition des limites guidée par le domaine dans les monolithes modulaires",
        excerpt: "Pourquoi l'isolation au niveau schéma et l'inversion stricte de dépendances surpassent le découpage prématuré en microservices pour les plateformes d'affaires."
      },
      {
        category: "Sécurité & FinTech",
        title: "Respect des invariants de registre en partie double et idempotence des paiements",
        excerpt: "Conception de moteurs comptables infalsifiables avec assertions de solde transactionnel, caches de clés d'idempotence et résolution de conflits hors ligne."
      },
      {
        category: "IA & Apprentissage Algorithmique",
        title: "Démystifier le traçage bayésien des connaissances (BKT) dans les systèmes EdTech",
        excerpt: "Guide pratique pour modéliser l'acquisition cognitive des compétences chez l'étudiant à l'aide de transitions d'état latent probabilistes en TypeScript."
      }
    ]
  },
  contact: {
    badge: "CONTACT",
    title: "Bâtissons Quelque Chose d'Exceptionnel",
    subtitle: "Je suis disponible pour des rôles d'ingénierie à distance, des projets techniques stimulants et des collaborations produits. N'hésitez pas à me joindre directement.",
    nameLabel: "Votre nom",
    namePlaceholder: "Ada Lovelace",
    emailLabel: "Votre adresse e-mail",
    emailPlaceholder: "ada@domaine.com",
    subjectLabel: "Sujet / Motif",
    messageLabel: "Votre message",
    messagePlaceholder: "Décrivez vos exigences d'ingénierie ou votre opportunité...",
    sendButton: "Envoyer le message",
    directEmail: "Email direct",
    location: "Localisation",
    locationValue: "Nigeria (Télétravail mondial)",
    subjectOptions: {
      role: "Opportunité d'embauche / Recrutement",
      project: "Projet logiciel / Mission",
      collaboration: "Collaboration technique",
      other: "Demande générale"
    },
    mailtoNotice: "Cliquer sur envoyer ouvrira directement votre messagerie pré-remplie à l'attention de Matthew Gana."
  },
  aiml: {
    badge: "INGÉNIERIE IA / ML",
    title: "Ingénierie IA / ML Appliquée",
    subtitle: "Systèmes d'IA appliquée couvrant la modélisation prédictive, la vision par ordinateur, le TAL, l'intelligence géospatiale, la détection d'anomalies et l'aide à la décision intelligente.",
    nav: "IA / ML",
    disciplinesLabel: "Disciplines principales",
    projectsLabel: "Projets appliqués",
    statusLabel: "Statut",
    domainLabel: "Domaine",
    capabilitiesLabel: "Capacités",
    evidenceLabel: "Preuves d'ingénierie",
    workflowBadge: "PIPELINE D'INGÉNIERIE",
    workflowTitle: "Flux de travail IA/ML appliqué",
    workflowSubtitle: "Une approche d'ingénierie généraliste appliquée aux projets IA/ML. Les étapes individuelles varient selon la portée réelle de chaque implémentation.",
    workflowDisclaimer: "Ce flux représente une approche méthodologique générale et non une affirmation que toutes les étapes ont été réalisées pour chaque projet.",
    capstoneBadge: "PROJET FINAL IA / ML",
    capstoneLabel: "Projet final",
    capstoneNote: "Projet de fin de formation en IA et Machine Learning — récemment achevé.",
    disciplines: {
      predictive: "ML Prédictif",
      vision: "Vision par Ordinateur",
      nlp: "TAL / NLP",
      geospatial: "IA Géospatiale",
      anomaly: "Détection d'Anomalies",
      decision: "Aide à la Décision"
    },
    phases: {
      input: "Entrée",
      preparation: "Préparation",
      modelling: "Modélisation",
      deployment: "Déploiement",
      iteration: "Itération"
    }
  },
  credentials: {
    badge: "CERTIFICATIONS",
    title: "Certifications",
    subtitle: "Formation formelle soutenant le travail d'ingénierie.",
    nav: "Certifications",
    categoryLabel: "Catégorie",
    viewCertificate: "Voir le certificat",
    noImageNote: "Certificat disponible",
    categories: {
      cybersecurity: "Cybersécurité",
      backend: "Développement Backend",
      data: "Analyse de Données",
      aiml: "IA & Machine Learning"
    }
  },
  footer: {
    brandTitle: "Ingénieur Logiciel Full-Stack",
    tagline: "Conception de systèmes logiciels sûrs, évolutifs et intelligents.",
    rights: "Tous droits réservés.",
    backToTop: "Haut de page"
  }
};
