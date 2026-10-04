import { EngineeringCapability } from "@/types";

export const CAPABILITIES: EngineeringCapability[] = [
  {
    id: "backend",
    number: "01",
    title: "Backend Engineering",
    description: "Designing modular APIs, domain logic, authentication, authorization, validation pipelines, and system integrations with clean inversion-of-control (IoC) patterns.",
    icon: "Code2",
    keySkills: ["NestJS / TypeScript", "Python / FastAPI / Django", "Modular Monoliths & Microservices", "Validation & Error Handling", "REST & WebSocket Gateways"]
  },
  {
    id: "database",
    number: "02",
    title: "Database Engineering",
    description: "Designing relational schemas, domain models, indexing strategies, double-entry accounting ledgers, and document persistence layers tailored to transactional workloads.",
    icon: "Database",
    keySkills: ["PostgreSQL (Prisma ORM)", "MongoDB Document Stores", "Redis Distributed Caching", "Double-Entry Ledgers", "Data Integrity Constraints"]
  },
  {
    id: "saas",
    number: "03",
    title: "SaaS Architecture",
    description: "Building multi-tenant platforms with tenant isolation, attribute-based access control (ABAC), asynchronous task queues, and enterprise audit trails.",
    icon: "Layers",
    keySkills: ["Multi-Tenancy Isolation", "BullMQ & Celery Asynchronous Workers", "CASL RBAC & ABAC", "Audit Trails & Event Logging", "Subscription & Idempotency Workflows"]
  },
  {
    id: "security",
    number: "04",
    title: "Security-Conscious Engineering",
    description: "Applying authentication, cryptographic password hashing, idempotency keys, secure headers, rate limiting, audit logging, and defensive boundary controls.",
    icon: "ShieldCheck",
    keySkills: ["JWT, Refresh Tokens & MFA/OTP", "Idempotency Protection", "CSP, CORS & Helmet Hardening", "Rate Limiting & Threat Mitigation", "Defensive Input Sanitization"]
  },
  {
    id: "aiml",
    number: "05",
    title: "AI/ML Integration",
    description: "Integrating machine learning models, knowledge tracing algorithms (BKT), and conversational LLM services into practical, maintainable software workflows.",
    icon: "Cpu",
    keySkills: ["Bayesian Knowledge Tracing (BKT)", "FastAPI Prediction Services", "LLM Orchestration (OpenAI / Anthropic)", "Prompt & Context Memory Pipelines", "scikit-learn & XGBoost Prototypes"]
  },
  {
    id: "fullstack",
    number: "06",
    title: "Full-Stack Product Engineering",
    description: "Connecting resilient backend architectures to responsive web and mobile interfaces for complete, seamless, and high-performance user experiences.",
    icon: "Layout",
    keySkills: ["Next.js & React 19", "React Native Mobile Apps", "Offline-First Synchronization", "Modern CSS & Component Systems", "Accessible & Responsive UI/UX"]
  }
];
