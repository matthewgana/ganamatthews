"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { ArrowRight, Workflow, CheckCircle2, ShieldCheck, FileCode } from "lucide-react";
import { APPROACH_STEPS } from "@/data/approach";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./Approach.module.css";

interface StepDetailProps {
  step: (typeof APPROACH_STEPS)[number];
  t: ReturnType<typeof useTranslation>["t"];
}

const StepDetail: React.FC<StepDetailProps> = ({ step, t }) => (
  <>
    <div className={styles.inspectorHeader}>
      <div className={styles.inspectorBadge}>
        <Workflow size={15} />
        <span>{t.approach.phaseSpecification.replace("{step}", step.step)}</span>
      </div>
      <h3 className={styles.inspectorTitle}>{step.title}</h3>
      <span className={styles.inspectorSubtitle}>{step.subtitle}</span>
    </div>

    <p className={styles.inspectorSummary}>{step.summary}</p>

    {/* Core Activities & Engineering Practices */}
    <div className={styles.activitiesSection}>
      <span className={styles.sectionLabel}>{t.approach.activitiesHeading}</span>
      <ul className={styles.activitiesList}>
        {step.coreActivities.map((activity, i) => (
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
        <span className={styles.deliverableHeading}>{t.approach.deliverableHeading}</span>
      </div>
      <p className={styles.deliverableContent}>{step.deliverable}</p>
    </div>

    {/* Architectural Guarantee */}
    <div className={styles.guaranteeBox}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
        <ShieldCheck size={16} color="var(--accent-primary)" />
        <span className={styles.guaranteeHeading}>{t.approach.guaranteeHeading}</span>
      </div>
      <p className={styles.guaranteeContent}>{step.architecturalGuarantee}</p>
    </div>
  </>
);

export const Approach: React.FC = () => {
  const { t } = useTranslation();
  // Desktop master-detail selection (defaults to step 2: Domain Modelling)
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(2);
  // Mobile accordion open index (null = all collapsed initially)
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);

  const activeStep = APPROACH_STEPS[desktopActiveIndex] || APPROACH_STEPS[0];

  const handleStepClick = (idx: number) => {
    setDesktopActiveIndex(idx);
    setMobileOpenIndex((prev) => (prev === idx ? null : idx));
  };

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

          <p className={styles.subtitle}>{t.approach.subtitle}</p>
        </div>

        {/* ── Infinite Pipeline Ticker ── */}
        <div className={styles.tickerOuter} aria-hidden="true">
          <div className={styles.tickerTrack}>
            {[...APPROACH_STEPS, ...APPROACH_STEPS].map((step, i) => (
              <div key={`${step.step}-${i}`} className={styles.tickerItem}>
                <span className={styles.tickerStep}>{step.step}</span>
                <span className={styles.tickerLabel}>{step.title}</span>
                <ArrowRight size={14} className={styles.tickerArrow} data-rtl-mirror="true" />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.flowLayout}>
          {/* Left Column (Desktop) / Accordion Flow (Mobile): 11 Sequential Pipeline Steps */}
          <div className={styles.stepsPipeline} role="tablist" aria-label="Engineering methodology pipeline">
            {APPROACH_STEPS.map((step, idx) => {
              const isDesktopActive = desktopActiveIndex === idx;
              const isMobileOpen = mobileOpenIndex === idx;

              return (
                <div
                  key={step.step}
                  className={clsx(
                    styles.stepItem,
                    isDesktopActive && styles.stepItemActive,
                    isMobileOpen && styles.stepItemExpanded
                  )}
                >
                  <button
                    type="button"
                    id={`methodology-trigger-${step.step}`}
                    role="tab"
                    aria-selected={isDesktopActive}
                    aria-expanded={isMobileOpen}
                    aria-controls={`methodology-detail-${step.step}`}
                    tabIndex={0}
                    onClick={() => handleStepClick(idx)}
                    onMouseEnter={() => setDesktopActiveIndex(idx)}
                    className={clsx(
                      styles.stepRow,
                      isDesktopActive && styles.stepRowActive,
                      isMobileOpen && styles.stepRowMobileOpen
                    )}
                  >
                    <span className={styles.stepIndex}>{step.step}</span>
                    <div className={styles.stepTextGroup}>
                      <span className={styles.stepTitle}>{step.title}</span>
                      <span className={styles.stepSubtitle}>{step.subtitle.split("&")[0]}</span>
                    </div>
                    <ArrowRight
                      size={16}
                      className={clsx(styles.stepArrow, isMobileOpen && styles.stepArrowExpanded)}
                      data-rtl-mirror={isMobileOpen ? "false" : "true"}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Inline Detail Accordion Panel (Mobile only: expands immediately below this card) */}
                  {isMobileOpen && (
                    <div
                      id={`methodology-detail-${step.step}`}
                      className={styles.inlineDetail}
                      role="region"
                      aria-labelledby={`methodology-trigger-${step.step}`}
                    >
                      <StepDetail step={step} t={t} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Inspector Details Box (Desktop only — hidden on mobile/tablet) */}
          <div
            className={styles.inspectorBox}
            role="tabpanel"
            aria-labelledby={`methodology-trigger-${activeStep.step}`}
          >
            <StepDetail step={activeStep} t={t} />
          </div>
        </div>
      </div>
    </section>
  );
};
