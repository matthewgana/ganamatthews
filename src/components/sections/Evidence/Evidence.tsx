"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { EVIDENCE_METRICS } from "@/data/evidence";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./Evidence.module.css";

export const Evidence: React.FC = () => {
  const { t } = useTranslation();

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

        {/* 8 Verifiable Metrics Grid */}
        <div className={styles.metricsGrid}>
          {EVIDENCE_METRICS.map((metric) => {
            const localized = t.evidence.metrics?.[metric.id as keyof typeof t.evidence.metrics];
            const label = localized?.label || metric.label;
            const detail = localized?.detail || metric.detail;

            return (
              <div key={metric.id} className={styles.card || styles.metricCard}>
                <div className={styles.metricValueRow}>
                  <span className={styles.metricValue}>
                    {metric.value.includes("/") ? (
                      <>
                        <span className={styles.metricHighlight}>{metric.value.split("/")[0]}</span>
                        <span style={{ fontSize: "0.75em", color: "#82a895" }}>/{metric.value.split("/")[1]}</span>
                      </>
                    ) : metric.value.endsWith("+") ? (
                      <>
                        <span className={styles.metricHighlight}>{metric.value.replace("+", "")}</span>
                        <span className={styles.metricHighlight}>+</span>
                      </>
                    ) : (
                      <span className={styles.metricHighlight}>{metric.value}</span>
                    )}
                  </span>
                </div>

                <div className={styles.metricLabel}>{label}</div>
                <p className={styles.metricDetail}>{detail}</p>
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
