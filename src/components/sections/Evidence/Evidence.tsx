"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck, ChevronRight, Package, Briefcase } from "lucide-react";
import { EVIDENCE_METRICS } from "@/data/evidence";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./Evidence.module.css";

export const Evidence: React.FC = () => {
  const { t } = useTranslation();

  const summaryMetrics = EVIDENCE_METRICS.filter(
    (m) => m.id === "products" || m.id === "industries"
  );

  const renderValue = (value: string) => {
    if (value.includes("/")) {
      const [num, den] = value.split("/");
      return (
        <>
          <span className={styles.metricHighlight}>{num}</span>
          <span className={styles.metricDenominator}>/{den}</span>
        </>
      );
    }
    if (value.endsWith("+")) {
      return (
        <>
          <span className={styles.metricHighlight}>{value.replace("+", "")}</span>
          <span className={styles.metricHighlight}>+</span>
        </>
      );
    }
    return <span className={styles.metricHighlight}>{value}</span>;
  };

  return (
    <section id="evidence" className={styles.evidence} aria-labelledby="evidence-heading">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.headerContent}>
            <div className={styles.eyebrowGroup}>
              <span className={styles.eyebrowDash} />
              <span className={styles.eyebrow}>{t.evidence.badge}</span>
            </div>

            <h2 id="evidence-heading" className={styles.title}>
              {t.evidence.title}
            </h2>

            <p className={styles.subtitle}>
              {t.evidence.subtitle}
            </p>

            <a href="#engineering-approach" className={styles.detailsCta}>
              <span>{t.evidence.cta}</span>
              <ArrowUpRight size={16} data-rtl-mirror="true" />
            </a>
          </div>
        </div>

        {/* Mobile Summary Bar (Immediate Proof Points: 11 Products, 8+ Industries) */}
        <div className={styles.mobileSummaryBar}>
          {summaryMetrics.map((metric) => {
            const localized = t.evidence.metrics?.[metric.id as keyof typeof t.evidence.metrics];
            const label = localized?.label || metric.label;
            const Icon = metric.id === "products" ? Package : Briefcase;

            return (
              <div key={metric.id} className={styles.mobileSummaryStat}>
                <Icon size={20} className={styles.mobileSummaryIcon} />
                <div className={styles.mobileSummaryValue}>{metric.value}</div>
                <div className={styles.mobileSummaryLabel}>{label}</div>
              </div>
            );
          })}
        </div>

        {/* Mobile Technical Evidence Sub-Heading (Centered with dashes) */}
        <div className={styles.mobileTechHeading}>
          <span className={styles.mobileTechHeadingDash} />
          <span className={styles.mobileTechHeadingText}>TECHNICAL EVIDENCE</span>
          <span className={styles.mobileTechHeadingDash} />
        </div>

        {/* 8 Verifiable Metrics Grid (Desktop: 4 columns all 8; Mobile: 1 column full-width rows) */}
        <div className={styles.metricsGrid}>
          {EVIDENCE_METRICS.map((metric) => {
            const localized = t.evidence.metrics?.[metric.id as keyof typeof t.evidence.metrics];
            const label = localized?.label || metric.label;
            const detail = localized?.detail || metric.detail;
            const isSummary = metric.id === "products" || metric.id === "industries";

            return (
              <div
                key={metric.id}
                className={`${styles.metricCard}${isSummary ? ` ${styles.summaryCard}` : ""}`}
              >
                <div className={styles.metricValueRow}>
                  <span className={styles.metricValue}>
                    {renderValue(metric.value)}
                  </span>
                </div>

                <div className={styles.metricTextGroup}>
                  <div className={styles.metricLabel}>{label}</div>
                  <p className={styles.metricDetail}>{detail}</p>
                </div>

                <ChevronRight size={16} className={styles.cardChevron} />
              </div>
            );
          })}
        </div>

        {/* Audit Evidence Note */}
        <div className={styles.disclaimerBox}>
          <ShieldCheck size={24} color="var(--color-orange-400)" style={{ flexShrink: 0 }} />
          <p className={styles.disclaimerText}>
            {t.evidence.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
