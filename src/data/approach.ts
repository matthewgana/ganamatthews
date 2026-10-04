import { EngineeringStep } from "@/types";

export const APPROACH_STEPS: EngineeringStep[] = [
  {
    step: "01",
    title: "Problem Discovery",
    subtitle: "Systemic Invariant Extraction & Root-Cause Deconstruction",
    summary: "Before committing a single line of architecture, software engineering begins with rigorous operational forensic analysis. I dissect the commercial domain to isolate systemic bottlenecks, operational failure modes, and implicit assumptions that derail complex software systems.",
    coreActivities: [
      "Operational event-storming with stakeholders to trace business events from inception to settlement",
      "Mapping upstream/downstream data dependencies, manual handoffs, and latency choke points",
      "Isolating non-negotiable transactional invariants and critical failure recovery paths",
      "Synthesizing qualitative domain problems into quantifiable engineering criteria"
    ],
    deliverable: "Domain Invariant Specification & Operational Failure-Mode Matrix",
    architecturalGuarantee: "Eliminates premature architectural assumptions and aligns software contracts directly with real business failure modes."
  },
  {
    step: "02",
    title: "Requirements Analysis",
    subtitle: "Deterministic State Machines & Non-Functional Contract Specification",
    summary: "Transforming ambiguous operational needs into rigorous, mathematically verifiable engineering requirements. I establish formal actor permission matrices, state transition diagrams, and strict non-functional constraints including p99 latency ceilings, concurrency bounds, and regulatory compliance standards.",
    coreActivities: [
      "Specifying finite state machines (FSM) for lifecycle entities to eliminate undefined states",
      "Developing granular Attribute-Based (ABAC) and Role-Based (RBAC) permission matrices",
      "Defining strict non-functional requirements (NFRs): throughput, idempotency, data residency, and auditability",
      "Drafting schema validation contracts using type-first schemas (Zod/TypeScript)"
    ],
    deliverable: "Formal State Transition Specifications & Multi-Tenant Permission Hierarchy",
    architecturalGuarantee: "Guarantees zero ambiguous entity states and establishes hard boundary constraints before database or API scaffolding."
  },
  {
    step: "03",
    title: "Domain Modelling",
    subtitle: "Domain-Driven Design (DDD) Aggregates & Bounded Contexts",
    summary: "Designing pure domain entities, value objects, and aggregate roots isolated from infrastructure frameworks. By strictly applying Domain-Driven Design (DDD), business logic remains immutable, self-validating, and completely decoupled from database mechanics or transport protocols.",
    coreActivities: [
      "Establishing strict Bounded Context boundaries to prevent domain model bleeding across services",
      "Designing aggregate roots that enforce transactional consistency boundaries and encapsulation",
      "Modelling rich domain primitives with immutable Value Objects to eliminate primitive obsession",
      "Defining domain event contracts (Event Sourcing / Domain Events) for decoupled cross-module communication"
    ],
    deliverable: "Domain Aggregate Architecture & Bounded Context Boundary Map",
    architecturalGuarantee: "Shields core enterprise business rules from framework obsolescence, third-party churn, and database refactoring."
  },
  {
    step: "04",
    title: "Architecture Design",
    subtitle: "Structural Decomposition, Monolith-vs-Microservices & Queue Topology",
    summary: "Selecting the precise structural topology tailored to operational scale and complexity. I prioritize structured modular monoliths with strict schema separation and asynchronous event queues (BullMQ/Redis) over distributed microservices to avoid network serialization overhead while preserving clean future service extraction.",
    coreActivities: [
      "Determining communication protocols: synchronous REST/gRPC vs. asynchronous task dispatch (BullMQ/Celery)",
      "Defining dependency injection boundaries and Inversion-of-Control (IoC) module graphs",
      "Designing multi-tenancy isolation strategies (schema-per-tenant, row-level security, or database-per-tenant)",
      "Establishing caching tiers, cache invalidation protocols, and distributed lock mechanisms"
    ],
    deliverable: "Architectural Blueprint, Dependency Graph & Queue Topology Specification",
    architecturalGuarantee: "Ensures low-latency inter-module communication, horizontal scalability, and zero circular architectural dependencies."
  },
  {
    step: "05",
    title: "Database Engineering",
    subtitle: "Relational Normalization, ACID Guarantees & Index Topologies",
    summary: "Engineering the persistence tier as the primary guardian of systemic truth. I architect third-normal-form relational models with PostgreSQL, strict foreign key constraints, check constraints, composite indexing for complex query paths, and immutable double-entry accounting structures for transactional workflows.",
    coreActivities: [
      "Architecting schema-level domain separation (e.g. 14 domain-oriented schemas in Hostelix)",
      "Designing immutable append-only ledgers ensuring zero balance discrepancies via debit/credit constraints",
      "Analyzing query planner execution paths (EXPLAIN ANALYZE) and engineering composite B-Tree/GIN indices",
      "Implementing optimistic and pessimistic locking protocols to eliminate race conditions under concurrent load"
    ],
    deliverable: "Normalized PostgreSQL Schemas, Prisma Data Models & Migration Sequences",
    architecturalGuarantee: "Guarantees strict ACID transactional invariants, zero orphaned records, and sub-10ms query execution across high-volume tables."
  },
  {
    step: "06",
    title: "Backend Core Engineering",
    subtitle: "Modular Inversion-of-Control (IoC), CQRS & Typed API Pipelines",
    summary: "Constructing high-throughput, enterprise-ready backend services using NestJS and TypeScript or Python FastAPI. The codebase is organized into cleanly partitioned layers (presentation, application, domain, infrastructure) with strict DTO validation, custom interceptors, and robust global exception filters.",
    coreActivities: [
      "Implementing Command-Query Responsibility Segregation (CQRS) or Domain Service patterns",
      "Building centralized validation pipes, serialization interceptors, and typed response envelopes",
      "Integrating asynchronous background task processing with Redis, BullMQ, and Celery",
      "Developing OpenAPI/Swagger auto-documenting contract endpoints with full schema fidelity"
    ],
    deliverable: "Modular NestJS Core Services, Controllers, Providers & OpenAPI Specifications",
    architecturalGuarantee: "Provides predictable runtime execution, type-safe payload deserialization, and clean testability via dependency injection."
  },
  {
    step: "07",
    title: "Security Hardening",
    subtitle: "Defensive Perimeter, Cryptographic Guardrails & Idempotency",
    summary: "Treating security not as an afterthought, but as an intrinsic architectural property. I embed defense-in-depth across the entire network boundary: cryptographic token rotation, MFA/OTP verification, dynamic CORS policies, strict Content Security Policy (CSP), rate-limiting per IP/identity, and financial-grade idempotency keys.",
    coreActivities: [
      "Engineering cryptographic idempotency key verification layers backed by Redis distributed locks",
      "Implementing JWT access/refresh token rotation with cryptographic revocation blacklists and MFA/OTP",
      "Configuring Helmet HTTP security headers, dynamic CORS whitelists, and CSP directives",
      "Applying multi-tier rate limiting, brute-force mitigation, and SQL/XSS input sanitization"
    ],
    deliverable: "Hardened Security Middleware, Idempotency Interceptors & RBAC/ABAC Guards",
    architecturalGuarantee: "Prevents duplicate financial executions, eliminates credential stuffing vectors, and enforces zero-trust boundary verification."
  },
  {
    step: "08",
    title: "Applications (Web & Mobile)",
    subtitle: "Hybrid Server Rendering, Optimistic UI & Offline Synchronization",
    summary: "Connecting resilient backend infrastructure to responsive, performant user interfaces using Next.js and React Native. I engineer robust client-side state architectures with optimistic mutation rollbacks, localized SQLite/MMKV caching, and background reconciliation for intermittent network environments.",
    coreActivities: [
      "Building accessible, keyboard-navigable UI components using modern semantic CSS and strict design tokens",
      "Developing offline-first queuing mechanisms with deterministic conflict-resolution algorithms",
      "Optimizing client-server hydration pipelines, streaming rendering, and Next.js static/dynamic hybrid routes",
      "Synchronizing push notification gateways and real-time WebSocket/Socket.io event channels"
    ],
    deliverable: "Responsive Next.js Web Portals & Offline-Capable React Native Mobile Applications",
    architecturalGuarantee: "Provides continuous operational capability during network dropouts and fluid, sub-100ms perceived interface latency."
  },
  {
    step: "09",
    title: "Intelligence Integration",
    subtitle: "Deterministic BKT Models, LLM Orchestration & Contextual Guardrails",
    summary: "Embedding machine learning models and artificial intelligence into software workflows where they deliver tangible, verifiable utility. I integrate algorithmic cognitive tracking (Bayesian Knowledge Tracing), isolated FastAPI prediction services, and LLM orchestration with context memory, strict output schemas, and deterministic fallbacks.",
    coreActivities: [
      "Implementing mathematically verified Bayesian Knowledge Tracing (BKT) algorithms for cognitive skill mastery",
      "Deploying asynchronous Python FastAPI microservices with scikit-learn, XGBoost, and PyTorch runtimes",
      "Orchestrating OpenAI / Anthropic LLM pipelines with structured JSON validation and prompt sanitization",
      "Designing deterministic heuristic fallbacks to guarantee uptime when external AI APIs experience latency"
    ],
    deliverable: "FastAPI ML Microservices, BKT Tracking Engines & Guardrailed LLM Pipelines",
    architecturalGuarantee: "Guarantees runtime fault tolerance with deterministic fallbacks, preventing AI hallucination from corrupting system data."
  },
  {
    step: "10",
    title: "Automated Testing",
    subtitle: "Module Boundary Tests, Invariant Verification & Security Assertions",
    summary: "Verifying system integrity through layered automated test suites. Rather than relying solely on superficial unit tests, I build architecture boundary tests (enforcing that modules cannot import unauthorized schemas), end-to-end integration suites, payment idempotency assertions, and concurrent race-condition simulations.",
    coreActivities: [
      "Enforcing strict architectural boundary tests to verify zero cross-schema or cross-module leakage (e.g. 64 tests in Hostelix)",
      "Simulating high-concurrency race conditions to verify transactional locks and idempotency keys",
      "Executing end-to-end integration tests validating HTTP status codes, headers, and validation errors",
      "Automating security regression assertions: unauthorized token rejection, SQL injection defense, and CORS checks"
    ],
    deliverable: "Jest, Vitest & PyTest Automated Test Suites with Architectural Boundary Enforcers",
    architecturalGuarantee: "Guarantees zero silent regressions, verifies module isolation, and provides mathematical confidence in mission-critical code."
  },
  {
    step: "11",
    title: "System Iteration & Telemetry",
    subtitle: "Distributed Observability, Query Plan Profiling & Adaptive Refinement",
    summary: "Treating deployment not as the end, but as the beginning of empirical optimization. I instrument systems with structured Winston/Pino logging, request tracing, database query latency tracking, and metric telemetry to identify bottlenecks, tune connection pools, and iteratively refactor hot code paths.",
    coreActivities: [
      "Instrumenting structured contextual JSON audit logs with correlation IDs across distributed transactions",
      "Analyzing slow query logs and refactoring database execution plans under realistic data volume",
      "Benchmarking API p50/p95/p99 latency curves and optimizing connection pool allocation",
      "Executing iterative domain model refactorings as business requirements evolve in production"
    ],
    deliverable: "Distributed Telemetry Pipelines, Query Optimization Reports & Performance Profiling",
    architecturalGuarantee: "Ensures continuous system longevity, predictable operational costs, and graceful degradation under peak load spikes."
  }
];
