"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, Github, AlertCircle, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className={styles.backdrop} onClick={onClose} aria-hidden="true">
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className={styles.closeButton}
          aria-label={t.projects.modalClose}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div className={styles.badgeRow}>
            <span className={styles.industryTag}>{project.industry}</span>
            <span className={styles.maturityBadge}>
              {t.projects.maturities[
                project.maturity === "Functional MVP"
                  ? "mvp"
                  : project.maturity === "Working Prototype"
                  ? "working"
                  : "early"
              ] || project.maturity}
            </span>
          </div>
          <h2 id="project-modal-title" className={styles.modalTitle}>{project.title}</h2>
          <p className={styles.modalSubtitle}>{project.subtitle}</p>
        </div>

        {/* Problem & Solution */}
        <div className={styles.sectionBlock}>
          <span className={styles.blockHeading}>{t.projects.operationalProblem}</span>
          <p className={styles.blockText}>{project.problem}</p>
        </div>

        <div className={styles.sectionBlock}>
          <span className={styles.blockHeading}>{t.projects.engineeringSolution}</span>
          <p className={styles.blockText}>{project.solution}</p>
        </div>

        {/* Architecture Summary */}
        <div className={styles.sectionBlock}>
          <span className={styles.blockHeading}>{t.projects.architectureSummary}</span>
          <p className={styles.blockText}>{project.architectureSummary}</p>
        </div>

        {/* Verified Capabilities */}
        <div className={styles.sectionBlock}>
          <span className={styles.blockHeading}>{t.projects.verifiedCapabilities}</span>
          <ul className={styles.capabilitiesList}>
            {project.verifiedCapabilities.map((cap, i) => (
              <li key={i} className={styles.capabilityItem}>
                <CheckCircle2 size={16} className={styles.capabilityCheck} />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className={styles.sectionBlock}>
          <span className={styles.blockHeading}>{t.projects.technologiesUsed}</span>
          <div className={styles.techPills}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.techPill}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Evidence */}
        <div className={styles.sectionBlock}>
          <span className={styles.blockHeading}>{t.projects.keyEvidence}</span>
          <p className={styles.blockText}>{project.keyEvidence}</p>
        </div>

        {/* Audit Caveat Note */}
        {project.caveat && (
          <div className={styles.auditNoteBox}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <AlertCircle size={15} color="var(--accent-primary)" />
              <span className={styles.auditNoteTitle}>{t.projects.caveatLabel}</span>
            </div>
            <p className={styles.auditNoteText}>{project.caveat}</p>
          </div>
        )}

        {/* Modal Footer */}
        <div className={styles.modalFooter}>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            {t.projects.auditSource}
          </span>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repoLink}
            >
              <Github size={16} />
              <span>{t.projects.inspectGithub}</span>
              <ArrowUpRight size={14} data-rtl-mirror="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
