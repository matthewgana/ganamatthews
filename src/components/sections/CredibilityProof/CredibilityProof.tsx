"use client";

import React from "react";
import { Layers, Globe, ShieldCheck, Terminal, ArrowDown } from "lucide-react";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./CredibilityProof.module.css";

export const CredibilityProof: React.FC = () => {
  const { t } = useTranslation();

  const proofs = [
    {
      id: "systems",
      icon: <Layers size={22} className={styles.metricIcon} />,
      count: t.credibility.systemsCount,
      label: t.credibility.systemsLabel,
      detail: t.credibility.systemsDetail,
    },
    {
      id: "industries",
      icon: <Globe size={22} className={styles.metricIcon} />,
      count: t.credibility.industriesCount,
      label: t.credibility.industriesLabel,
      detail: t.credibility.industriesDetail,
    },
    {
      id: "evidence",
      icon: <ShieldCheck size={22} className={styles.metricIcon} />,
      count: t.credibility.evidenceCount,
      label: t.credibility.evidenceLabel,
      detail: t.credibility.evidenceDetail,
    },
    {
      id: "stack",
      icon: <Terminal size={22} className={styles.metricIcon} />,
      count: t.credibility.stackCount,
      label: t.credibility.stackLabel,
      detail: t.credibility.stackDetail,
    },
  ];

  return (
    <section id="proof" className={styles.credibilitySection} aria-labelledby="credibility-heading">
      <div className={styles.container}>
        {/* Header / Context Anchor */}
        <div className={styles.headerRow}>
          <div className={styles.eyebrowGroup}>
            <span className={styles.eyebrowDash} />
            <span className={styles.eyebrow}>{t.credibility.badge}</span>
            <span className={styles.eyebrowDash} />
          </div>

          <h2 id="credibility-heading" className={styles.title}>
            {t.credibility.title}
          </h2>

          <p className={styles.subtitle}>
            {t.credibility.subtitle}
          </p>
        </div>

        {/* 4-Column Proof Matrix */}
        <div className={styles.proofGrid}>
          {proofs.map((item) => (
            <div key={item.id} className={styles.proofCard}>
              <div className={styles.cardHeader}>
                <span className={styles.iconWrapper}>{item.icon}</span>
                <span className={styles.metricCount}>{item.count}</span>
              </div>
              <h3 className={styles.metricLabel}>{item.label}</h3>
              <p className={styles.metricDetail}>{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Downward Narrative Cue to Flagships */}
        <div className={styles.narrativeCueRow}>
          <a href="#work" className={styles.exploreLink} aria-label={t.credibility.exploreFlagships}>
            <span>{t.credibility.exploreFlagships}</span>
            <ArrowDown size={15} className={styles.bounceArrow} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CredibilityProof;
