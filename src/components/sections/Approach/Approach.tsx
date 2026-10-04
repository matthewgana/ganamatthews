"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { ArrowRight, Workflow, CheckCircle2, ShieldCheck, FileCode } from "lucide-react";
import { APPROACH_STEPS } from "@/data/approach";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./Approach.module.css";

export const Approach: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(2); // Default to Domain Modelling

  const activeStep = APPROACH_STEPS[activeIndex] || APPROACH_STEPS[0];

  return (
    <section id="engineering-approach" className={styles.approach} aria-labelledby="approach-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrowGroup}>
            <span className={styles.eyebrowDash} />
            <span className={styles.eyebrow}>{t.approach.badge}</span>
          </div>

          <h2 id="approach-heading" className={styles.title}>
            {t.approach.title}
          </h2>

          <p className={styles.subtitle}>
            {t.approach.subtitle}
          </p>
        </div>

        <div className={styles.flowLayout}>
          {/* Left Column: 11 Sequential Pipeline Steps */}
          <div className={styles.stepsPipeline} role="tablist" aria-label="Engineering methodology pipeline">
            {APPROACH_STEPS.map((step, idx) => (
              <button
                key={step.step}
                type="button"
                role="tab"
                aria-selected={activeIndex === idx}
                tabIndex={0}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={clsx(styles.stepRow, activeIndex === idx && styles.stepRowActive)}
              >
                <span className={styles.stepIndex}>{step.step}</span>
                <div className={styles.stepTextGroup}>
                  <span className={styles.stepTitle}>{step.title}</span>
                  <span className={styles.stepSubtitle}>{step.subtitle.split("&")[0]}</span>
                </div>
                <ArrowRight size={16} className={styles.stepArrow} />
              </button>
            ))}
          </div>

          {/* Right Column: Live Inspector Details Box */}
          <div className={styles.inspectorBox} role="tabpanel">
            <div className={styles.inspectorHeader}>
              <div className={styles.inspectorBadge}>
                <Workflow size={15} />
                <span>Phase {activeStep.step} of 11 • Architectural Specification</span>
              </div>
              <h3 className={styles.inspectorTitle}>{activeStep.title}</h3>
              <span className={styles.inspectorSubtitle}>{activeStep.subtitle}</span>
            </div>

            <p className={styles.inspectorSummary}>
              {activeStep.summary}
            </p>

            {/* Core Activities & Engineering Practices */}
            <div className={styles.activitiesSection}>
              <span className={styles.sectionLabel}>Core Engineering Activities & Mechanisms</span>
              <ul className={styles.activitiesList}>
                {activeStep.coreActivities.map((activity, i) => (
                  <li key={i} className={styles.activityItem}>
                    <CheckCircle2 size={16} className={styles.activityCheck} />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Concrete Architectural Deliverable */}
            <div className={styles.deliverableBox}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <FileCode size={15} color="var(--accent-primary)" />
                <span className={styles.deliverableHeading}>Concrete Architectural Deliverable</span>
              </div>
              <p className={styles.deliverableContent}>{activeStep.deliverable}</p>
            </div>

            {/* Architectural Guarantee */}
            <div className={styles.guaranteeBox}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <ShieldCheck size={16} color="var(--accent-primary)" />
                <span className={styles.guaranteeHeading}>Systemic Stability Guarantee</span>
              </div>
              <p className={styles.guaranteeContent}>{activeStep.architecturalGuarantee}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
