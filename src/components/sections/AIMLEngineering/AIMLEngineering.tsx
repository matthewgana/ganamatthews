"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { CheckCircle2, ArrowRight, Brain, Eye, MessageSquare, MapPin, AlertTriangle, BarChart3 } from "lucide-react";
import { AI_PROJECTS, AI_WORKFLOW_STAGES, AI_CAPABILITIES_TAXONOMY } from "@/data/aiProjects";
import { AIProject } from "@/types";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./AIMLEngineering.module.css";

const PHASE_ORDER = ["input", "preparation", "modelling", "deployment", "iteration"] as const;

const PHASE_NODE_CLASS: Record<string, string> = {
  input: styles.phaseInputNode,
  preparation: styles.phasePreparationNode,
  modelling: styles.phaseModellingNode,
  deployment: styles.phaseDeploymentNode,
  iteration: styles.phaseIterationNode
};

export const AIMLEngineering: React.FC = () => {
  const { t } = useTranslation();
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const coreDisciplines = [
    { label: t.aiml.disciplines.predictive, icon: <BarChart3 size={13} /> },
    { label: t.aiml.disciplines.vision, icon: <Eye size={13} /> },
    { label: t.aiml.disciplines.nlp, icon: <MessageSquare size={13} /> },
    { label: t.aiml.disciplines.geospatial, icon: <MapPin size={13} /> },
    { label: t.aiml.disciplines.anomaly, icon: <AlertTriangle size={13} /> },
    { label: t.aiml.disciplines.decision, icon: <Brain size={13} /> }
  ];

  const toggleProject = (id: string) => {
    setActiveProjectId((prev) => (prev === id ? null : id));
  };

  // Group workflow stages by phase
  const stagesByPhase = PHASE_ORDER.map((phase) => ({
    phase,
    stages: AI_WORKFLOW_STAGES.filter((s) => s.phase === phase)
  }));

  return (
    <section id="aiml" className={styles.aiml} aria-labelledby="aiml-heading">
      <div className={styles.container}>
        {/* ── Section Header ─────────────────────────────── */}
        <div className={styles.header}>
          <div className={styles.eyebrowGroup}>
            <span className={styles.eyebrowDash} />
            <span className={styles.eyebrow}>{t.aiml.badge}</span>
          </div>

          <h2 id="aiml-heading" className={styles.title}>
            {t.aiml.title}
          </h2>

          <p className={styles.subtitle}>{t.aiml.subtitle}</p>
        </div>

        {/* ── Core Discipline Tags ────────────────────────── */}
        <div className={styles.disciplinesRow} role="list" aria-label={t.aiml.disciplinesLabel}>
          {coreDisciplines.map((d) => (
            <span key={d.label} className={styles.disciplineTag} role="listitem">
              {d.icon}
              {d.label}
            </span>
          ))}
        </div>

        {/* ── Project Matrix ──────────────────────────────── */}
        <div
          className={styles.projectMatrix}
          role="list"
          aria-label={t.aiml.projectsLabel}
        >
          {AI_PROJECTS.map((project: AIProject) => {
            const isActive = activeProjectId === project.id;
            return (
              <article
                key={project.id}
                className={clsx(styles.projectArticle, isActive && styles.projectArticleActive)}
                role="listitem"
              >
                <button
                  type="button"
                  className={clsx(styles.projectRow, isActive && styles.projectRowActive)}
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={isActive}
                  aria-controls={`aiml-detail-${project.id}`}
                >
                  <div className={styles.projectRowInner}>
                    <div className={styles.projectMeta}>
                      <div className={styles.projectTitleRow}>
                        <span className={styles.projectTitle}>{project.shortTitle}</span>
                        {project.isCapstone && (
                          <span className={styles.capstonePill} aria-label={t.aiml.capstoneLabel}>
                            {t.aiml.capstoneLabel}
                          </span>
                        )}
                      </div>

                      <span className={styles.projectDomain}>{project.domain}</span>

                      <div className={styles.capabilitiesLine} aria-label={t.aiml.capabilitiesLabel}>
                        {project.capabilities.map((cap) => (
                          <span key={cap} className={styles.capTag}>
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
                      <span className={styles.statusBadge} aria-label={`${t.aiml.statusLabel}: ${project.status}`}>
                        <span className={styles.statusDot} />
                        {project.status}
                      </span>
                      <ArrowRight
                        size={16}
                        style={{
                          color: "var(--text-muted)",
                          transform: isActive ? "rotate(90deg)" : "none",
                          transition: "transform var(--transition-normal)",
                          flexShrink: 0
                        }}
                        aria-hidden="true"
                        data-rtl-mirror={isActive ? "false" : "true"}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Detail Panel (outside the button for valid HTML & accessible screen-reader navigation) */}
                {isActive && (
                  <div
                    id={`aiml-detail-${project.id}`}
                    className={styles.projectDetail}
                    role="region"
                    aria-label={`${project.shortTitle} details`}
                  >
                    <p className={styles.detailDescription}>{project.description}</p>

                    {project.evidence && project.evidence.length > 0 && (
                      <>
                        <span className={styles.evidenceHeading}>{t.aiml.evidenceLabel}</span>
                        <ul className={styles.evidenceList} role="list">
                          {project.evidence.map((ev, i) => (
                            <li key={i} className={styles.evidenceItem} role="listitem">
                              <CheckCircle2 size={14} className={styles.evidenceCheck} aria-hidden="true" />
                              <span>{ev}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* ── Applied AI Engineering Workflow ─────────────── */}
        <div className={styles.workflowSection}>
          <div className={styles.workflowHeader}>
            <div className={styles.eyebrowGroup}>
              <span className={styles.eyebrowDash} />
              <span className={styles.eyebrow}>{t.aiml.workflowBadge}</span>
            </div>
            <h3 className={styles.workflowTitle}>{t.aiml.workflowTitle}</h3>
            <p className={styles.workflowSubtitle}>{t.aiml.workflowSubtitle}</p>
          </div>

          {/* Pipeline — infinite marquee ticker */}
          <div className={styles.tickerOuter}>
            <div className={styles.tickerTrack}>
              {(["primary", "clone"] as const).map((setSuffix, setIdx) => (
                <div
                  key={setSuffix}
                  className={styles.pipelineSet}
                  aria-hidden={setIdx > 0 ? true : undefined}
                >
                  {stagesByPhase.map((group, gi) => (
                    <React.Fragment key={`${group.phase}-${setSuffix}`}>
                      {gi > 0 && (
                        <div className={styles.phaseArrow} aria-hidden="true">
                          <ArrowRight size={18} data-rtl-mirror="true" />
                        </div>
                      )}
                      <div className={styles.pipelinePhase} role="listitem">
                        <span className={styles.phaseLabel}>
                          {t.aiml.phases[group.phase as keyof typeof t.aiml.phases] || group.phase}
                        </span>
                        <div className={styles.phaseSteps}>
                          {group.stages.map((stage, si) => (
                            <React.Fragment key={`${stage.id}-${setSuffix}`}>
                              {si > 0 && (
                                <div className={styles.stepArrow} aria-hidden="true">
                                  <ArrowRight size={14} data-rtl-mirror="true" />
                                </div>
                              )}
                              <div
                                className={clsx(styles.stepNode, PHASE_NODE_CLASS[group.phase])}
                                tabIndex={setIdx > 0 ? -1 : 0}
                                role="listitem"
                                aria-label={setIdx > 0 ? undefined : stage.label}
                              >
                                <span className={styles.stepNodeLabel}>{stage.label}</span>
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  {/* Transition arrow connecting to the repeating set */}
                  <div className={styles.phaseArrow} aria-hidden="true">
                    <ArrowRight size={18} data-rtl-mirror="true" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className={styles.workflowDisclaimer}>{t.aiml.workflowDisclaimer}</p>
        </div>
      </div>
    </section>
  );
};
