import { EngineeringCapability } from "@/types";

export const CAPABILITIES: EngineeringCapability[] = [
  {
    id: "backend",
    number: "01",
    title: "Backend Engineering",
    description: "Designing modular APIs, domain logic, authentication, authorization, validation pipelines, and system integrations with clean inversion-of-control (IoC) patterns.",
    icon: "Code2",
    keySkills: ["NestJS / TypeScript", "Python / FastAPI / Django", "Modular Monoliths & Microservices", "Validation & Error Handling", "REST & WebSocket Gateways"],
    workflowSteps: ["API Gateway", "Auth Filter", "IoC Services", "Event Bus", "PostgreSQL"],
    backDetails: [
      "11 production-grade backend systems across diverse industries",
      "NestJS IoC containers with domain-separated modules",
      "WebSocket gateways for real-time clinical and hotel alerts",
      "Zod & class-validator dual-layer input sanitization",
      "OpenAPI / Swagger contract-driven API documentation"
    ]
  },
  {
    id: "frontend",
    number: "02",
    title: "Front-End Engineering",
    description: "Crafting pixel-precise, accessible, and performant web interfaces using React, Next.js, and modern CSS — from design systems to animated, data-rich dashboards.",
    icon: "Monitor",
    keySkills: ["React 19 & Next.js 14+", "TypeScript & CSS Modules", "Framer Motion & Animations", "Responsive & Accessible UI", "Design Systems & Tokens"],
    workflowSteps: ["Design Tokens", "Component Tree", "State Store", "Responsive UI", "Lighthouse 100"],
    backDetails: [
      "Portfolio: Next.js 16 + Turbopack, elite animated design system",
      "Built admin dashboards for AgriTrack, Foundra, Hostelix & R-AILOS",
      "Custom animation systems with @prefers-reduced-motion support",
      "CSS custom property token systems across light & dark themes",
      "WCAG 2.1 AA accessibility — focus traps, ARIA, skip links"
    ]
  },
  {
    id: "database",
    number: "03",
    title: "Database Engineering",
    description: "Designing relational schemas, domain models, indexing strategies, double-entry accounting ledgers, and document persistence layers tailored to transactional workloads.",
    icon: "Database",
    keySkills: ["PostgreSQL (Prisma ORM)", "MongoDB Document Stores", "Redis Distributed Caching", "Double-Entry Ledgers", "Data Integrity Constraints"],
    workflowSteps: ["ERD Relations", "Prisma Compiler", "Double-Entry Ledger", "Redis Cache", "B-Tree Indexing"],
    backDetails: [
      "14-schema PostgreSQL design for Hostelix domain isolation",
      "Double-entry accounting engine in Ventra (FinTech / SACCO)",
      "Hybrid SQL + MongoDB persistence in Foundra & Helvora",
      "Redis BullMQ task queues for async reporting & background jobs",
      "Prisma migrations with strict referential integrity enforcement"
    ]
  },
  {
    id: "saas",
    number: "04",
    title: "SaaS Architecture",
    description: "Building multi-tenant platforms with tenant isolation, attribute-based access control (ABAC), asynchronous task queues, and enterprise audit trails.",
    icon: "Layers",
    keySkills: ["Multi-Tenancy Isolation", "BullMQ & Celery Async Workers", "CASL RBAC & ABAC", "Audit Trails & Event Logging", "Subscription & Idempotency Workflows"],
    workflowSteps: ["Tenant Router", "Schema Isolation", "ABAC Policy", "BullMQ Workers", "Audit Ledger"],
    backDetails: [
      "Foundra: DDD multi-tenant SME platform with full ABAC",
      "CASL-powered attribute & role policy engines per tenant",
      "BullMQ worker pools for invoice generation & reporting",
      "Subscription lifecycle state machines with idempotent billing",
      "Event-sourced audit trail on every sensitive entity mutation"
    ]
  },
  {
    id: "security",
    number: "05",
    title: "Security Engineering",
    description: "Applying authentication, cryptographic password hashing, idempotency keys, secure headers, rate limiting, audit logging, and defensive boundary controls.",
    icon: "ShieldCheck",
    keySkills: ["JWT, Refresh Tokens & MFA/OTP", "Idempotency Protection", "CSP, CORS & Helmet Hardening", "Rate Limiting & Threat Mitigation", "Defensive Input Sanitization"],
    workflowSteps: ["Token Bucket", "Argon2 Cipher", "Idempotency Lock", "Secure Headers", "SIEM Monitoring"],
    backDetails: [
      "64 automated security & boundary tests in Hostelix",
      "Argon2 / bcrypt cryptographic password hashing across systems",
      "Dynamic CORS policy + Helmet HTTP security hardening",
      "Payment idempotency keys preventing duplicate transactions",
      "TOTP multi-factor authentication in Servix marketplace"
    ]
  },
  {
    id: "aiml",
    number: "06",
    title: "AI / ML Integration",
    description: "Integrating machine learning models, knowledge tracing algorithms (BKT), and conversational LLM services into practical, maintainable software workflows.",
    icon: "Cpu",
    keySkills: ["Bayesian Knowledge Tracing (BKT)", "FastAPI Prediction Services", "LLM Orchestration (OpenAI / Anthropic)", "Prompt & Context Memory Pipelines", "scikit-learn & XGBoost"],
    workflowSteps: ["Vector Embeddings", "Similarity Index", "LLM Inference", "BKT Mastery Curve", "Guardrails Gate"],
    backDetails: [
      "R-AILOS: Verified BKT cognitive mastery tracking engine",
      "AgriTrack: XGBoost + PyTorch crop-yield prediction service",
      "Foundra: OpenAI & Anthropic conversational business assistant",
      "FastAPI ML microservices decoupled from core NestJS APIs",
      "MLflow experiment tracking for model versioning"
    ]
  },
  {
    id: "fullstack",
    number: "07",
    title: "Full-Stack Product Engineering",
    description: "Connecting resilient backend architectures to responsive web and mobile interfaces for complete, seamless, and high-performance user experiences.",
    icon: "Layout",
    keySkills: ["Next.js & React 19", "React Native Mobile Apps", "Offline-First Synchronization", "Modern CSS & Component Systems", "Accessible & Responsive UI/UX"],
    workflowSteps: ["Git Monorepo", "CI/CD Pipeline", "Docker Container", "Real-Time API", "Telemetry Metrics"],
    backDetails: [
      "7 cross-platform React Native mobile apps across systems",
      "Turborepo monorepo: shared packages, web & mobile clients",
      "Offline-first architecture with conflict resolution in R-AILOS",
      "Ventra: offline branch ledger sync for rural SACCO agents",
      "End-to-end type safety: shared Zod schemas across the stack"
    ]
  }
];
