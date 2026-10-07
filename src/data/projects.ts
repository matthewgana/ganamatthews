import { Project } from "@/types";

export const PROJECTS: Project[] = [
  // ── FLAGSHIP 01: AgriTrack ─────────────────────────────────────
  {
    id: "agritrack",
    title: "AgriTrack",
    subtitle: "Agricultural Operations, Supply Chain & Intelligence Platform",
    industry: "Agriculture • Supply Chain",
    maturity: "Functional MVP",
    shortDescription: "End-to-end agricultural platform unifying farm operations, supply chains, off-take contracts, production records, and risk prediction.",
    problem: "Agricultural producers and cooperatives suffer from fragmented systems across inventory, warehousing, production logs, buyer commitments, and off-take contracts, preventing data-driven risk management.",
    solution: "Designed a multi-application platform integrating farm operations, production records, buying groups, supplier commitments, marketplace workflows, warehousing logistics, and ML risk modelling into a unified architecture.",
    verifiedCapabilities: [
      "NestJS 11 modular backend with PostgreSQL and Prisma ORM",
      "Next.js web portals and React Native mobile application",
      "Python FastAPI service with scikit-learn, XGBoost, PyTorch, and MLflow",
      "JWT authentication, role-based access control (RBAC), and audit logging",
      "Inventory, warehousing, logistics, and off-take contract management",
      "Buying groups, supplier commitments, and marketplace workflows",
      "Offline data support and telemetry-related workflows"
    ],
    technologies: ["NestJS 11", "TypeScript", "PostgreSQL", "Prisma", "Next.js", "React Native", "FastAPI", "Python", "XGBoost", "PyTorch", "Redis"],
    architectureSummary: "Decoupled multi-app architecture featuring a high-throughput NestJS core API, Prisma data tier, standalone FastAPI ML microservice, and cross-platform web/mobile clients with offline queueing.",
    keyEvidence: "Functional multi-app codebase with end-to-end domain coverage across 12 operational domains, verified Prisma schemas, and running FastAPI prediction service.",
    image: "/project-assets/agritrack.png",
    isFlagship: true,
    githubUrl: "https://github.com/matthewgana",
    caveat: "AI/ML crop-yield prediction and risk models currently utilize synthetic training datasets; presented as implemented prototypes rather than validated field-production systems."
  },

  // ── FLAGSHIP 02: Foundra ───────────────────────────────────────
  {
    id: "foundra",
    title: "Foundra",
    subtitle: "Intelligent SME Business Operations Platform",
    industry: "Business OS / ERP",
    maturity: "Functional MVP",
    shortDescription: "Multi-tenant SME operations platform integrating CRM, sales, inventory, double-entry financial tracking, and AI-assisted workflows.",
    problem: "Growing small and medium enterprises juggle disconnected point solutions for customer relations, sales, inventory, and accounting, leading to reconciliation errors and opaque operations.",
    solution: "Built a Domain-Driven Design (DDD) multi-tenant business suite unifying CRM, order fulfillment, multi-warehouse inventory, financial ledgers, and conversational LLM query interfaces.",
    verifiedCapabilities: [
      "DDD modular architecture (domain, application, infrastructure, presentation layers)",
      "NestJS core with PostgreSQL (Prisma), MongoDB, and Redis caching",
      "BullMQ asynchronous task queues for background jobs and reports",
      "JWT authentication, refresh tokens, and MFA/OTP verification mechanisms",
      "CASL-based attribute and role-based access control (RBAC / ABAC)",
      "Next.js 14 web client with responsive dashboard views",
      "FastAPI intelligence service integrating OpenAI and Anthropic models",
      "Conversational business queries, conversation memory, and idea validation"
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "MongoDB", "Redis", "BullMQ", "Next.js", "FastAPI", "OpenAI", "Anthropic"],
    architectureSummary: "Domain-Driven Design (DDD) layered architecture separating core business entities from external infrastructure, backed by BullMQ workers and hybrid SQL/NoSQL storage.",
    keyEvidence: "Complete multi-tenant implementation with clean layer boundaries, multi-database schema persistence, MFA flows, and LLM orchestration pipeline.",
    image: "/project-assets/foundra.png",
    isFlagship: true,
    githubUrl: "https://github.com/matthewgana",
    caveat: "Certain operational intelligence features utilize keyword heuristics and deterministic scoring algorithms rather than standalone custom neural models."
  },

  // ── FLAGSHIP 03: Hostelix ──────────────────────────────────────
  {
    id: "hostelix",
    title: "Hostelix",
    subtitle: "Hotel Operations, Revenue Control & Smart Guest Experience Platform",
    industry: "Hospitality • Hotel",
    maturity: "Functional MVP",
    shortDescription: "Enterprise hotel management platform featuring 14 domain-oriented database schemas, automated guest journeys, and rigorous architecture tests.",
    problem: "Hospitality venues require strict data isolation between properties, reliable multi-channel reservation locking, and idempotent financial transactions without operational latency.",
    solution: "Engineered a hardened hospitality operating platform covering reservations, guest experiences, staff rostering, revenue auditing, and real-time room status management.",
    verifiedCapabilities: [
      "NestJS backend with 14 domain-oriented PostgreSQL schemas",
      "Redis caching and distributed state management",
      "64 automated tests spanning unit, integration, security, and architectural boundary tests",
      "Strict security controls: CSP, dynamic CORS, Helmet, input validation, and payment idempotency",
      "Guest lifecycle management: check-in, digital keycards, billing, and housekeeping dispatch",
      "Next.js administrative web portal and React Native guest companion app",
      "Workforce scheduling, shift attendance, and role-scoped permissions"
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "14 Schemas", "Redis", "Next.js", "React Native", "Jest", "Architecture Tests"],
    architectureSummary: "Enterprise modular monolith with strict schema-level isolation across 14 hospitality sub-domains, verified by architectural boundary unit test suites.",
    keyEvidence: "64 comprehensive automated tests enforcing module boundaries, schema integrity, idempotency keys, and security sanitization.",
    image: "/project-assets/hostelix.png",
    isFlagship: true,
    githubUrl: "https://github.com/matthewgana",
    caveat: "Designed with architectural enterprise compliance and tested against boundary test fixtures; demonstrates disciplined software engineering practices."
  },

  // ── FLAGSHIP 04: R-AILOS ───────────────────────────────────────
  {
    id: "railos",
    title: "R-AILOS",
    subtitle: "Resilient AI Learning & Safety Operating System",
    industry: "Education • Safety",
    maturity: "Functional MVP",
    shortDescription: "Turborepo monorepo school operating system with Bayesian Knowledge Tracing (BKT) student modelling and offline-ready parent-teacher workflows.",
    problem: "Schools face disjointed communication, fee collection leakage, student safety oversights, and inability to track cognitive mastery progress longitudinally.",
    solution: "Architected a unified educational management platform combining administrative workflows, 6-role permission models, payment idempotency, attendance telemetry, and verifiable BKT algorithms.",
    verifiedCapabilities: [
      "Turborepo monorepo powering NestJS backend and Next.js / React Native frontends",
      "PostgreSQL and Prisma relational persistence with transactional guarantees",
      "Bayesian Knowledge Tracing (BKT) engine for adaptive cognitive skill acquisition tracking",
      "6-role hierarchical authorization: Superadmin, Principal, Teacher, Student, Parent, Auditor",
      "Payment processing with cryptographic idempotency keys and reconciliation tracking",
      "Parent communication, meeting scheduling, real-time alerts, and homework submission",
      "Offline sync engine designed for low-bandwidth school connectivity environments"
    ],
    technologies: ["NestJS", "Turborepo", "TypeScript", "PostgreSQL", "Prisma", "Next.js", "React Native", "Python", "BKT", "Jest"],
    architectureSummary: "Turborepo monorepo uniting shared validation packages, NestJS core API, Next.js web application, React Native mobile client, and algorithmic BKT service.",
    keyEvidence: "Full monorepo implementation with verified BKT knowledge tracing algorithms, payment idempotency guards, and automated test coverage.",
    image: "/project-assets/railos.png",
    isFlagship: true,
    githubUrl: "https://github.com/matthewgana",
    caveat: "Bayesian Knowledge Tracing (BKT) algorithm is verified; speculative AI dependencies in the repo not connected to runtime are excluded from capability claims."
  },

  // ── SECONDARY 05: Ventra ───────────────────────────────────────
  {
    id: "ventra",
    title: "Ventra",
    subtitle: "Cooperative Digital Finance & Management Platform",
    industry: "FinTech (SACCO)",
    maturity: "Working Prototype",
    shortDescription: "Cooperative finance system featuring double-entry accounting ledgers, loan risk workflows, and offline conflict resolution.",
    problem: "Credit unions and agricultural SACCOs require immutable financial ledgers and loan lifecycle management operable even in offline rural branch environments.",
    solution: "Built a financial backend with strict double-entry ledger enforcement, multi-stage loan underwriting, BullMQ queueing, and offline ledger sync protocols.",
    verifiedCapabilities: [
      "Double-entry accounting ledger engine with debit/credit balance enforcement",
      "Member administration, tiered savings, contribution schemes, and dividends",
      "Loan application, guarantor verification, repayment schedules, and penalty logic",
      "NestJS, PostgreSQL, MongoDB, Redis, and BullMQ task queues",
      "Offline synchronization and client conflict-resolution mechanisms"
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "BullMQ", "Next.js", "React Native"],
    architectureSummary: "Transactional financial core ensuring balanced ledger invariants, supported by Redis queues for heavy accounting calculations and mobile sync.",
    keyEvidence: "Working implementation of double-entry ledger models, loan lifecycle state machines, and offline reconciliation handlers.",
    image: "/project-assets/ventra.jpg",
    isFlagship: false,
    githubUrl: "https://github.com/matthewgana",
    caveat: "Demonstrates rigorous financial domain engineering; not currently deployed as an active regulated banking institution."
  },

  // ── SECONDARY 06: Helvora ──────────────────────────────────────
  {
    id: "helvora",
    title: "Helvora",
    subtitle: "Healthcare Digital Infrastructure & Health Intelligence Platform",
    industry: "HealthTech",
    maturity: "Working Prototype",
    shortDescription: "Clinical operations platform with 22 backend modules, patient health records, and real-time Socket.io communication.",
    problem: "Healthcare facilities suffer from fragmented patient records, delayed emergency dispatch, and complex consultation scheduling across clinical departments.",
    solution: "Engineered a clinical management system spanning 22 domain modules, patient histories, appointment queues, doctor consults, and Socket.io medical alerts.",
    verifiedCapabilities: [
      "22 structured backend domain modules covering medical workflows",
      "Dual database persistence: PostgreSQL for structured records and MongoDB for clinical notes",
      "Socket.io real-time event pipeline for triage updates and provider alerts",
      "Next.js clinical portal and React Native patient companion application",
      "HIPAA-conscious data access patterns and consultation audit logging"
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "MongoDB", "Socket.io", "Next.js", "React Native"],
    architectureSummary: "Comprehensive healthcare monolith organized into 22 domain services with real-time WebSocket communication and hybrid SQL/document stores.",
    keyEvidence: "22 domain modules implemented with complete schema relationships for appointments, encounters, prescriptions, and medical billing.",
    image: "/project-assets/helvora.png",
    isFlagship: false,
    githubUrl: "https://github.com/matthewgana",
    caveat: "Positioned as a working healthcare prototype; external vendor ML models in repository are not claimed as proprietary engineering."
  },

  // ── SECONDARY 07: Servix ───────────────────────────────────────
  {
    id: "servix",
    title: "Servix",
    subtitle: "Intelligent Service Business Operations & Customer Experience Platform",
    industry: "Service Marketplace",
    maturity: "Working Prototype",
    shortDescription: "Multi-category service business operations platform with dynamic booking, dispute arbitration, and provider reputation indexing.",
    problem: "Independent service businesses (salons, repair specialists, wellness clinics) lack unified scheduling, customer trust mechanisms, and payment escrow.",
    solution: "Constructed an end-to-end service management platform with booking calendars, TOTP verification, dispute settlement workflows, and provider analytics.",
    verifiedCapabilities: [
      "Scheduling and booking pipeline with calendar conflict avoidance",
      "MongoDB document persistence with Redis caching layer",
      "JWT and TOTP multi-factor authentication",
      "Dispute settlement, escrow status management, and reputation tracking",
      "Next.js web portal and React Native client interface"
    ],
    technologies: ["NestJS", "TypeScript", "MongoDB", "Redis", "Next.js", "React Native", "Winston"],
    architectureSummary: "Event-driven service platform leveraging MongoDB flexible schemas, Redis cache, and Winston structured audit logging.",
    keyEvidence: "Broad domain breadth covering scheduling, disputes, settlements, and customer review verification.",
    image: "/project-assets/servix.png",
    isFlagship: false,
    githubUrl: "https://github.com/matthewgana",
    caveat: "Codebase demonstrates broad domain functionality; currently lacks automated test suites and Docker configuration."
  },

  // ── SECONDARY 08: Nexdine ──────────────────────────────────────
  {
    id: "nexdine",
    title: "Nexdine",
    subtitle: "Digital Restaurant & Dining Experience Platform",
    industry: "RestaurantTech",
    maturity: "Working Prototype",
    shortDescription: "Restaurant operations platform with table state machines, kitchen display system (KDS) feeds, and waitlist automation.",
    problem: "Hospitality dining rooms experience order bottlenecks between table servers, hostesses, and kitchen line cooks during peak shift hours.",
    solution: "Designed a workflow-focused dining platform with explicit state machines governing table turnover, order fulfillment, kitchen stations, and waitlists.",
    verifiedCapabilities: [
      "Explicit operational state machines: Table status, Order workflow, Kitchen dispatch",
      "NestJS backend with PostgreSQL persistence and Zod request validation",
      "JWT authentication, bcrypt password hashing, and Helmet HTTP security",
      "Swagger / OpenAPI documentation with schema-driven contracts",
      "Next.js responsive digital dining and order-tracking interface"
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Next.js", "Zod", "Swagger", "Helmet"],
    architectureSummary: "State-machine-driven restaurant architecture providing deterministic order lifecycle management and real-time table turnover statuses.",
    keyEvidence: "Verified table, order, and waitlist state machines with Zod validation contracts and OpenAPI documentation.",
    image: "/project-assets/nexdine.png",
    isFlagship: false,
    githubUrl: "https://github.com/matthewgana",
    caveat: "Strong demonstration of workflow-oriented software design; not currently deployed as an active commercial SaaS restaurant network."
  },

  // ── SUPPORTING 09: Fuelix ──────────────────────────────────────
  {
    id: "fuelix",
    title: "Fuelix",
    subtitle: "Energy & Fuel Station Operations Platform",
    industry: "EnergyTech",
    maturity: "Early Prototype",
    shortDescription: "Django-powered energy and fuel retail management prototype with tank calibration models and Celery task execution.",
    problem: "Fuel station operators struggle with real-time fuel inventory discrepancy detection, pump meter reconciliation, and multi-station audit logs.",
    solution: "Architected a Python/Django backend with 12 modular applications covering fuel inventory, nozzle meters, shift reconciliations, and background jobs.",
    verifiedCapabilities: [
      "12 Django applications modelling fuel retail sub-domains",
      "PostgreSQL persistence with relational fuel tank and nozzle data structures",
      "Redis and Celery asynchronous task workers for background reporting",
      "Demonstration of Python backend engineering and domain modeling breadth"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Celery"],
    architectureSummary: "Modular Django architecture organized across 12 station applications, utilizing Celery queues for station reconciliation jobs.",
    keyEvidence: "12 Django applications structured for station operations, inventory tracking, and sales logs.",
    image: "/project-assets/fuelix.jpg",
    isFlagship: false,
    githubUrl: "https://github.com/matthewgana",
    caveat: "Early-stage Python/Django prototype demonstrating domain modelling and technology breadth; minimal active API endpoints and no automated tests."
  },

  // ── SUPPORTING 10: Estrava ─────────────────────────────────────
  {
    id: "estrava",
    title: "Estrava",
    subtitle: "Built Asset Lifecycle & Real Estate Intelligence Platform",
    industry: "PropTech",
    maturity: "Early Prototype",
    shortDescription: "PropTech platform prototype for property asset lifecycle management, maintenance ticketing, and lease tracking.",
    problem: "Commercial real estate managers face delayed maintenance turnaround, unstructured lease compliance, and dispersed property maintenance data.",
    solution: "Structured a NestJS backend with PostgreSQL and BullMQ queues to handle maintenance requests, lease milestones, and property asset lifecycles.",
    verifiedCapabilities: [
      "NestJS modular backend with PostgreSQL relational schema",
      "Redis and BullMQ background task processing for scheduled asset inspections",
      "Authentication, logging, and property management API endpoints",
      "Next.js property overview dashboard prototype"
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Next.js"],
    architectureSummary: "Clean NestJS modular foundation designed for property asset lifecycles and asynchronous task dispatch.",
    keyEvidence: "Initial set of domain modules and relational schemas for property units, lease documents, and maintenance work orders.",
    image: "/project-assets/estrava.png",
    isFlagship: false,
    githubUrl: "https://github.com/matthewgana",
    caveat: "Early-stage real estate prototype; mobile client remains in early scaffolding and is not presented as an active production app."
  },

  // ── SUPPORTING 11: Civora ──────────────────────────────────────
  {
    id: "civora",
    title: "Civora",
    subtitle: "Civic Intelligence, Identity & Trust Infrastructure",
    industry: "GovTech",
    maturity: "Early Prototype",
    shortDescription: "GovTech architectural prototype exploring civic identity, institutional service workflows, and public infrastructure records.",
    problem: "Civic institutions require verifiable digital identity workflows and transparent public records to foster citizen trust and streamline governance.",
    solution: "Outlined a Turborepo monorepo architecture with NestJS and PostgreSQL exploring institutional identity verification and civic workflows.",
    verifiedCapabilities: [
      "Turborepo monorepo structure with NestJS and TypeScript",
      "PostgreSQL relational database schema design for institutional entities",
      "Multi-domain service boundaries defined for public sector data models"
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Turborepo"],
    architectureSummary: "Early architectural prototype demonstrating domain boundary decomposition for civic identity and institutional governance.",
    keyEvidence: "Monorepo scaffolding and initial NestJS domain models for civic information and identity architectures.",
    image: "/project-assets/civora.jpg",
    isFlagship: false,
    githubUrl: "https://github.com/matthewgana",
    caveat: "Early architectural prototype with limited commit history; presented as domain design exploration rather than active government infrastructure."
  }
];
