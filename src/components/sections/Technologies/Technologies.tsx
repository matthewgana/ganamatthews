"use client";

import React, { FC, useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Terminal, Network, Server, Layout, Database, Cpu, ShieldCheck, Wrench, ArrowRight, Activity } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { useTranslation } from "@/providers/IntlProvider";

import styles from "./Technologies.module.css";
import { initTechnologiesAnimations } from "./Technologies.animation";

export interface Technology {
  readonly id: string;
  readonly name: string;
  readonly side: "left" | "right";
  readonly color: string;
  readonly description: string;
  readonly domain: string;
  readonly tier: "primary" | "secondary";
  readonly runtime: string;
  readonly portfolioAdoption: string;
  readonly architecturalRole: string;
}

const TECHNOLOGIES: readonly Technology[] = [
  // ── LEFT: Frontend / Backend / Runtime ──────────────────────
  {
    id: "nestjs",
    name: "NestJS",
    side: "left",
    color: "#e0234e",
    domain: "BACKEND ARCHITECTURE",
    tier: "primary",
    runtime: "Node.js 22 LTS / TypeScript",
    portfolioAdoption: "10 / 11 Systems",
    architecturalRole: "Inversion-of-Control (IoC) modular monolith engine",
    description: "Enterprise TypeScript framework utilizing dependency injection, domain boundary separation, custom interceptors, and strict IoC container design."
  },
  {
    id: "typescript",
    name: "TypeScript",
    side: "left",
    color: "#3178c6",
    domain: "LANGUAGE CORE",
    tier: "primary",
    runtime: "Static Type Enforcement",
    portfolioAdoption: "10 / 11 Systems",
    architecturalRole: "Compile-time contract & boundary enforcement",
    description: "Strongly typed superset of JavaScript guaranteeing type safety, strict interface contracts, and refactoring resilience across full-stack applications."
  },
  {
    id: "nodejs",
    name: "Node.js",
    side: "left",
    color: "#40916c",
    domain: "RUNTIME ENVIRONMENT",
    tier: "primary",
    runtime: "V8 Event-Driven Engine",
    portfolioAdoption: "10 / 11 Systems",
    architecturalRole: "Non-blocking asynchronous I/O and worker concurrency",
    description: "High-throughput asynchronous non-blocking event runtime optimized for concurrent network pipelines, streaming data, and low-latency microservices."
  },
  {
    id: "nextjs",
    name: "Next.js",
    side: "left",
    color: "#e06d28",
    domain: "WEB PLATFORM",
    tier: "primary",
    runtime: "Hybrid SSR / React Server Components",
    portfolioAdoption: "10 / 11 Systems",
    architecturalRole: "Streaming rendering & server-action data mutations",
    description: "Performance-first web framework leveraging hybrid static generation, server-side streaming, and optimized hydration pipelines for enterprise dashboards."
  },
  {
    id: "react",
    name: "React 19",
    side: "left",
    color: "#52b788",
    domain: "UI LAYER",
    tier: "primary",
    runtime: "Concurrent Fiber Reconciliation",
    portfolioAdoption: "10 / 11 Systems",
    architecturalRole: "Declarative component-driven user interface engine",
    description: "Declarative UI layer leveraging virtual DOM reconciliation, useActionState transitions, and fluid micro-interactions for modern web experiences."
  },
  {
    id: "reactnative",
    name: "React Native",
    side: "left",
    color: "#52b788",
    domain: "MOBILE APPLICATION",
    tier: "primary",
    runtime: "Hermes JavaScript Engine",
    portfolioAdoption: "7 / 11 Systems",
    architecturalRole: "Cross-platform mobile apps with offline SQLite sync",
    description: "Cross-platform mobile runtime enabling native UI execution, local caching, biometric authentication, and offline background sync queues."
  },
  {
    id: "python",
    name: "Python / FastAPI",
    side: "left",
    color: "#f2823b",
    domain: "AI MICROSERVICES",
    tier: "secondary",
    runtime: "Asynchronous ASGI / Uvicorn",
    portfolioAdoption: "3 / 11 Systems",
    architecturalRole: "Prediction inference & Bayesian Knowledge Tracing",
    description: "High-performance asynchronous Python runtime for machine learning inference, Bayesian Knowledge Tracing (BKT), and LLM orchestration."
  },

  // ── RIGHT: Data / Storage / Queues / Security ───────────────
  {
    id: "postgresql",
    name: "PostgreSQL",
    side: "right",
    color: "#336791",
    domain: "RELATIONAL PERSISTENCE",
    tier: "primary",
    runtime: "ACID Relational Engine",
    portfolioAdoption: "10 / 11 Systems",
    architecturalRole: "Schema-level isolation (14 schemas in Hostelix)",
    description: "ACID-compliant relational database management system featuring domain-separated schemas, composite indexing, and double-entry transaction integrity."
  },
  {
    id: "prisma",
    name: "Prisma ORM",
    side: "right",
    color: "#2d6a4f",
    domain: "DATA ACCESS LAYER",
    tier: "primary",
    runtime: "Zero-Cost Type-Safe Query Engine",
    portfolioAdoption: "8 / 11 Systems",
    architecturalRole: "Type-safe database client with declarative migrations",
    description: "Type-safe database client providing auto-generated migrations, strict relation modelling, and compile-time prevention of query boundary exceptions."
  },
  {
    id: "mongodb",
    name: "MongoDB",
    side: "right",
    color: "#47a248",
    domain: "DOCUMENT PERSISTENCE",
    tier: "secondary",
    runtime: "Distributed BSON Store",
    portfolioAdoption: "3 / 11 Systems",
    architecturalRole: "High-volume clinical notes & schema-agnostic records",
    description: "Flexible document store for schema-agnostic records, clinical encounter notes in Helvora, and audit logs requiring flexible JSON aggregation pipelines."
  },
  {
    id: "redis",
    name: "Redis & BullMQ",
    side: "right",
    color: "#dc382d",
    domain: "CACHE & TASK QUEUES",
    tier: "primary",
    runtime: "In-Memory Key-Value / Event Dispatch",
    portfolioAdoption: "5 / 11 Systems",
    architecturalRole: "Distributed locking, token buckets & async worker queues",
    description: "In-memory data store powering distributed cache layers, rate-limiting tokens, pub/sub event channels, and asynchronous background worker queues."
  },
  {
    id: "docker",
    name: "Docker",
    side: "right",
    color: "#2496ed",
    domain: "CONTAINERIZATION",
    tier: "secondary",
    runtime: "OCI Container Runtime",
    portfolioAdoption: "6 / 11 Systems",
    architecturalRole: "Reproducible microservice environments & CI/CD",
    description: "Containerization engine ensuring reproducible build environments, isolated service boundaries, and predictable CI/CD deployment pipelines."
  },
  {
    id: "security",
    name: "Security & Auth",
    side: "right",
    color: "#e06d28",
    domain: "DEFENSIVE CONTROLS",
    tier: "primary",
    runtime: "Cryptographic Verification & Guards",
    portfolioAdoption: "11 / 11 Systems",
    architecturalRole: "Zero-trust token rotation, idempotency & CASL ABAC",
    description: "Defensive perimeter controls encompassing JWT rotation, MFA/OTP, CASL attribute authorization, Helmet headers, CORS policies, and idempotency keys."
  }
] as const;

interface TechNodeProps {
  readonly technology: Technology;
  readonly activeTech: Technology | null;
  readonly onHoverStart: (tech: Technology) => void;
  readonly onHoverEnd: () => void;
}

const TechNode: FC<TechNodeProps> = React.memo(({ technology, activeTech, onHoverStart, onHoverEnd }) => {
  const handleMouseEnter = useCallback(() => onHoverStart(technology), [onHoverStart, technology]);
  const handleFocus = useCallback(() => onHoverStart(technology), [onHoverStart, technology]);

  const isActive = activeTech?.id === technology.id;
  const isDimmed = activeTech !== null && !isActive;

  return (
    <button
      type="button"
      className={clsx(
        styles.node,
        technology.tier === "primary" && styles.primaryNode,
        technology.side === "left" ? styles.leftNode : styles.rightNode,
        isActive && styles.activeNode,
        isDimmed && styles.dimmedNode
      )}
      data-tech-node
      data-side={technology.side}
      data-color={technology.color}
      data-id={technology.id}
      data-tier={technology.tier}
      aria-label={`${technology.name} (${technology.domain}): ${technology.description}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onHoverEnd}
      onFocus={handleFocus}
      onBlur={onHoverEnd}
    >
      <span className={styles.nodeGlow} />

      {technology.side === "right" && (
        <span className={styles.logoWrapper} style={{ color: technology.color }}>
          {technology.name.substring(0, 2).toUpperCase()}
        </span>
      )}

      <span className={styles.nodeTextGroup}>
        <span className={styles.nodeDomain} style={{ color: technology.color }}>
          {technology.domain}
        </span>
        <span className={styles.nodeName}>{technology.name}</span>
      </span>

      {technology.side === "left" && (
        <span className={styles.logoWrapper} style={{ color: technology.color }}>
          {technology.name.substring(0, 2).toUpperCase()}
        </span>
      )}
    </button>
  );
});

TechNode.displayName = "TechNode";

export const Technologies: FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);
  const topologyRef = useRef<HTMLDivElement | null>(null);
  const [activeTech, setActiveTech] = useState<Technology | null>(null);

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && resolvedTheme === "light"
    ? "/logos/gmatt light-logo.png"
    : "/logos/logo.png";

  const left = useMemo(
    () => TECHNOLOGIES.filter((tech) => tech.side === "left"),
    []
  );

  const right = useMemo(
    () => TECHNOLOGIES.filter((tech) => tech.side === "right"),
    []
  );

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const cleanup = initTechnologiesAnimations(sectionRef.current);
    return cleanup;
  }, []);

  const handleHoverStart = useCallback((tech: Technology) => {
    setActiveTech(tech);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setActiveTech(null);
  }, []);

  const scrollToTopology = () => {
    if (topologyRef.current) {
      topologyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="engineering"
      className={styles.technologies}
      aria-labelledby="technology-stack-heading"
    >
      <canvas data-particles className={styles.canvasParticles} aria-hidden="true" />
      <div data-glow className={styles.backgroundGlow} />

      <div className={styles.container}>
        {/* ── TOP ROW: Side-by-Side Header & Code Editor (Matches Mockup) ── */}
        <div className={styles.topRow}>
          <div className={styles.headerText}>
            <div className={styles.eyebrowGroup}>
              <span className={styles.eyebrowDash} />
              <span className={styles.badge}>{t.tech.badge}</span>
            </div>

            <h2 id="technology-stack-heading" className={styles.title}>
              {t.tech.title}
            </h2>

            <p className={styles.description}>
              {t.tech.subtitle}
            </p>

            <button
              type="button"
              onClick={scrollToTopology}
              className={styles.ctaToggle}
            >
              <span>{t.tech.viewAll}</span>
              <ArrowRight size={16} data-rtl-mirror="true" />
            </button>
          </div>

          {/* Right Column: High-Fidelity Code Editor Panel (from Mockup) */}
          <div className={styles.codePanel}>
            <div className={styles.codePanelHeader}>
              <div className={styles.windowControls}>
                <span className={clsx(styles.windowDot, styles.windowDotRed)} />
                <span className={clsx(styles.windowDot, styles.windowDotYellow)} />
                <span className={clsx(styles.windowDot, styles.windowDotGreen)} />
              </div>
              <span className={styles.windowTitle}>
                <Terminal size={14} />
                <span>techStack.config.ts</span>
              </span>
              <div style={{ width: 40 }} />
            </div>

            <div className={styles.codeBody}>
              <div className={styles.codeLine}>
                <span className={styles.lineNumber}>01</span>
                <span className={styles.lineContent}>
                  <span className={styles.tokenKeyword}>const </span>
                  <span className={styles.tokenVariable}>techStack </span>
                  <span className={styles.tokenPunctuation}>= &#123;</span>
                </span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.lineNumber}>02</span>
                <span className={styles.lineContent}>
                  {"  "}<span className={styles.tokenProperty}>backend</span>: [<span className={styles.tokenString}>&quot;NestJS&quot;</span>, <span className={styles.tokenString}>&quot;Node.js&quot;</span>, <span className={styles.tokenString}>&quot;TypeScript&quot;</span>, <span className={styles.tokenString}>&quot;Python&quot;</span>, <span className={styles.tokenString}>&quot;Django&quot;</span>],
                </span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.lineNumber}>03</span>
                <span className={styles.lineContent}>
                  {"  "}<span className={styles.tokenProperty}>frontend</span>: [<span className={styles.tokenString}>&quot;Next.js&quot;</span>, <span className={styles.tokenString}>&quot;React&quot;</span>, <span className={styles.tokenString}>&quot;React Native&quot;</span>],
                </span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.lineNumber}>04</span>
                <span className={styles.lineContent}>
                  {"  "}<span className={styles.tokenProperty}>database</span>: [<span className={styles.tokenString}>&quot;PostgreSQL&quot;</span>, <span className={styles.tokenString}>&quot;MongoDB&quot;</span>, <span className={styles.tokenString}>&quot;Prisma&quot;</span>, <span className={styles.tokenString}>&quot;Redis&quot;</span>],
                </span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.lineNumber}>05</span>
                <span className={styles.lineContent}>
                  {"  "}<span className={styles.tokenProperty}>ai</span>: [<span className={styles.tokenString}>&quot;OpenAI&quot;</span>, <span className={styles.tokenString}>&quot;Anthropic&quot;</span>, <span className={styles.tokenString}>&quot;scikit-learn&quot;</span>, <span className={styles.tokenString}>&quot;XGBoost&quot;</span>, <span className={styles.tokenString}>&quot;PyTorch&quot;</span>],
                </span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.lineNumber}>06</span>
                <span className={styles.lineContent}>
                  {"  "}<span className={styles.tokenProperty}>infra</span>: [<span className={styles.tokenString}>&quot;Docker&quot;</span>, <span className={styles.tokenString}>&quot;GitHub Actions&quot;</span>, <span className={styles.tokenString}>&quot;BullMQ&quot;</span>, <span className={styles.tokenString}>&quot;Celery&quot;</span>],
                </span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.lineNumber}>07</span>
                <span className={styles.lineContent}>
                  {"  "}<span className={styles.tokenProperty}>security</span>: [<span className={styles.tokenString}>&quot;JWT&quot;</span>, <span className={styles.tokenString}>&quot;RBAC&quot;</span>, <span className={styles.tokenString}>&quot;Helmet&quot;</span>, <span className={styles.tokenString}>&quot;CORS&quot;</span>, <span className={styles.tokenString}>&quot;Rate Limiting&quot;</span>]
                </span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.lineNumber}>08</span>
                <span className={styles.lineContent}>
                  <span className={styles.tokenPunctuation}>&#125;;</span>
                </span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.lineNumber}>09</span>
                <span className={styles.lineContent}>
                  <span className={styles.tokenComment}>{t.tech.codeComment}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── CATEGORY CARDS GRID (Matches Mockup) ── */}
        <div className={styles.categoryPills}>
          <div className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <Server size={17} className={styles.categoryIcon} />
              <span>{t.tech.categories.backend}</span>
            </div>
            <span className={styles.categoryStack}>NestJS, Node.js, Python</span>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <Layout size={17} className={styles.categoryIcon} />
              <span>{t.tech.categories.frontend}</span>
            </div>
            <span className={styles.categoryStack}>Next.js, React, RN</span>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <Database size={17} className={styles.categoryIcon} />
              <span>{t.tech.categories.database}</span>
            </div>
            <span className={styles.categoryStack}>PostgreSQL, MongoDB</span>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <Cpu size={17} className={styles.categoryIcon} />
              <span>{t.tech.categories.ai}</span>
            </div>
            <span className={styles.categoryStack}>OpenAI, PyTorch, BKT</span>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <Wrench size={17} className={styles.categoryIcon} />
              <span>{t.tech.categories.infra}</span>
            </div>
            <span className={styles.categoryStack}>Docker, BullMQ, Actions</span>
          </div>
          <div className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <ShieldCheck size={17} className={styles.categoryIcon} />
              <span>{t.tech.categories.security}</span>
            </div>
            <span className={styles.categoryStack}>JWT, RBAC, Helmet</span>
          </div>
        </div>

        {/* ── MISSION CONTROL: FULL INTERACTIVE TOPOLOGY NETWORK ── */}
        <div ref={topologyRef} className={styles.topologySection}>
          <div className={styles.topologyHeader}>
            <div className={styles.eyebrowGroup} style={{ justifyContent: "center" }}>
              <span className={styles.eyebrowDash} />
              <span className={styles.badge}>{t.tech.topologyBadge}</span>
              <span className={styles.eyebrowDash} />
            </div>
            <h3 className={styles.topologyTitle}>{t.tech.topologyTitle}</h3>
            <p className={styles.topologyDesc}>
              {t.tech.topologyDesc}
            </p>
          </div>

          <div className={styles.canvas} data-canvas-grid>
            <svg className={styles.connections} data-svg-connections aria-hidden="true">
              <circle data-orbit="1" className={styles.orbitLine} />
              <circle data-orbit="2" className={styles.orbitLine} />
              <circle data-orbit-dot="1" className={styles.orbitDot} />
              <circle data-orbit-dot="2" className={styles.orbitDot} />
              <circle data-orbit-dot="3" className={styles.orbitDot} />
              <circle data-orbit-dot="4" className={styles.orbitDot} />

              {TECHNOLOGIES.map((tech) => (
                <g key={tech.id}>
                  <path data-track-path={tech.id} className={styles.connectionTrack} />
                  <path data-path={tech.id} className={styles.connection} />
                  <path data-pulse-path={tech.id} className={styles.connectionPulse} />
                </g>
              ))}
            </svg>

            {/* LEFT COLUMN */}
            <div className={styles.column} data-side-column="left">
              {left.map((technology) => (
                <TechNode
                  key={technology.id}
                  technology={technology}
                  activeTech={activeTech}
                  onHoverStart={handleHoverStart}
                  onHoverEnd={handleHoverEnd}
                />
              ))}
            </div>

            {/* CENTER CORE & HUD */}
            <div className={styles.center}>
              <div className={styles.core} data-core>
                <span data-core-pulse className={styles.corePulse} />
                <div className={styles.coreLogoContainer}>
                  <Image
                    src={logoSrc}
                    alt="Matthew Gana Engineering Core"
                    width={84}
                    height={84}
                    className={styles.coreLogo}
                  />
                </div>
                <div className={styles.coreIdentity}>
                  <span className={styles.coreIdentityBrand}>Matthew Gana</span>
                  <span className={styles.coreIdentityRole}>Engineering Core</span>
                </div>
                <span data-core-ring="1" className={styles.coreRing} />
                <span data-core-ring="2" className={styles.coreRingTwo} />
              </div>

              {/* MISSION-CONTROL HUD CONSOLE */}
              <div
                className={clsx(styles.hudConsole, activeTech && styles.hudConsoleActive)}
                data-hud-console
              >
                <div className={styles.hudHeader}>
                  <div className={styles.hudStatusDot} />
                  <span className={styles.hudStatusText}>
                    {activeTech ? t.tech.telemetryActive : t.tech.telemetryReady}
                  </span>
                  <span className={styles.hudTerminalTitle}>system.log</span>
                </div>
                <div className={styles.hudBody}>
                  {activeTech ? (
                    <div key={activeTech.id} className={styles.hudContent}>
                      <div className={styles.hudTechMeta}>
                        <span className={styles.hudTechDomain} style={{ color: activeTech.color }}>
                          {activeTech.domain}
                        </span>
                        <span className={styles.hudTechTier}>
                          {activeTech.tier.toUpperCase()}
                        </span>
                      </div>
                      <h4 className={styles.hudTechName} style={{ color: activeTech.color }}>
                        {activeTech.name}
                      </h4>
                      <p className={styles.hudTechDesc}>{activeTech.description}</p>

                      <div className={styles.hudMetricsGrid}>
                        <div className={styles.hudMetricItem}>
                          <span className={styles.hudMetricKey}>{t.tech.portfolioUsage}</span>
                          <span className={styles.hudMetricVal}>{activeTech.portfolioAdoption}</span>
                        </div>
                        <div className={styles.hudMetricItem}>
                          <span className={styles.hudMetricKey}>{t.tech.runtimeEngine}</span>
                          <span className={styles.hudMetricVal}>{activeTech.runtime.split("/")[0]}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.hudContent}>
                      <h4 className={styles.hudTechNameReady}>{t.tech.missionControlTitle}</h4>
                      <p className={styles.hudTechDescReady}>
                        {t.tech.missionControlDesc}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className={styles.column} data-side-column="right">
              {right.map((technology) => (
                <TechNode
                  key={technology.id}
                  technology={technology}
                  activeTech={activeTech}
                  onHoverStart={handleHoverStart}
                  onHoverEnd={handleHoverEnd}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Tags — Infinite Marquee Ticker */}
        <div className={styles.tickerOuter} aria-label="Core technologies list">
          <div className={styles.tickerTrack}>
            {TECHNOLOGIES.map((tech) => (
              <span key={`primary-${tech.id}`} className={styles.footerTag}>
                {tech.name}
              </span>
            ))}
            {TECHNOLOGIES.map((tech) => (
              <span key={`clone-${tech.id}`} className={styles.footerTag} aria-hidden="true">
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
