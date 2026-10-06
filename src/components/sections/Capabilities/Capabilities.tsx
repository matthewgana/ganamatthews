"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Code2, Database, Layers, ShieldCheck, Cpu, Layout,
  Monitor, CheckCircle2, RotateCcw, Activity
} from "lucide-react";
import { useTranslation } from "@/providers/IntlProvider";
import { CAPABILITIES } from "@/data/capabilities";
import styles from "./Capabilities.module.css";

const ICONS_MAP: Record<string, React.ReactNode> = {
  Code2:       <Code2 size={22} />,
  Database:    <Database size={22} />,
  Layers:      <Layers size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  Cpu:         <Cpu size={22} />,
  Layout:      <Layout size={22} />,
  Monitor:     <Monitor size={22} />,
};

// Stagger offset per card so they auto-flip in a graceful wave
const AUTO_FLIP_BASE_MS = 3200;
const STAGGER_MS = 450;

interface FlipCardProps {
  cap: typeof CAPABILITIES[0];
  title: string;
  desc: string;
  index: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ cap, title, desc, index }) => {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasAutoFlipped = useRef(false);

  const schedule = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!hasAutoFlipped.current) {
        hasAutoFlipped.current = true;
        setFlipped(true);
        // Flip back after 4.5 seconds to return to overview
        timerRef.current = setTimeout(() => {
          setFlipped(false);
        }, 4500);
      }
    }, AUTO_FLIP_BASE_MS + index * STAGGER_MS);
  }, [index]);

  useEffect(() => {
    schedule();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [schedule]);

  // Pause timer while hovered; resume if not yet auto-flipped
  useEffect(() => {
    if (hovered && timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    } else if (!hovered && !hasAutoFlipped.current) {
      schedule();
    }
  }, [hovered, schedule]);

  const toggle = () => setFlipped((f) => !f);

  return (
    <div
      className={`${styles.flipWrapper}${flipped ? ` ${styles.flipped}` : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={toggle}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${title} — click to ${flipped ? "view overview & workflow" : "view verified evidence"}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      {/* ── FRONT FACE (Summary & Pipeline Flow) ── */}
      <div className={`${styles.face} ${styles.front}`} aria-hidden={flipped}>
        <div className={styles.faceInner}>
          {/* Header Row */}
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              {ICONS_MAP[cap.icon] ?? <Code2 size={20} />}
            </div>
            <div className={styles.cardMeta}>
              <span className={styles.statusIndicator}>
                <span className={styles.statusDot} />
                LIVE
              </span>
              <span className={styles.number}>{cap.number}</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{desc}</p>
          </div>

          {/* Technical Workflow Pipeline Architecture (Pure CSS & SVG) */}
          {cap.workflowSteps && (
            <div className={styles.workflowContainer}>
              <div className={styles.workflowHeader}>
                <div className={styles.workflowLabel}>
                  <Activity size={12} className={styles.workflowIcon} />
                  <span>ARCHITECTURE PIPELINE</span>
                </div>
                <span className={styles.stepCount}>{cap.workflowSteps.length} STAGES</span>
              </div>
              <div className={styles.pipelineFlow}>
                {cap.workflowSteps.map((step, idx) => (
                  <div key={step} className={styles.pipelineStage}>
                    <span className={styles.stageIndex}>0{idx + 1}</span>
                    <span className={styles.stageName}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Pills */}
          <div className={styles.skillsList}>
            {cap.keySkills.map((skill) => (
              <span key={skill} className={styles.skillPill}>
                {skill}
              </span>
            ))}
          </div>

          {/* Flip Hint */}
          <div className={styles.flipHint}>
            <RotateCcw size={13} className={styles.hintRotate} />
            <span>View production evidence</span>
          </div>
        </div>
      </div>

      {/* ── BACK FACE (Verified Engineering Evidence) ── */}
      <div className={`${styles.face} ${styles.back}`} aria-hidden={!flipped}>
        <div className={styles.faceInner}>
          {/* Back Header */}
          <div className={styles.backHeader}>
            <div className={styles.iconWrapper}>
              {ICONS_MAP[cap.icon] ?? <Code2 size={20} />}
            </div>
            <div className={styles.backHeaderTitles}>
              <span className={styles.backEyebrow}>VERIFIED PRODUCTION EVIDENCE</span>
              <h3 className={styles.backTitle}>{title}</h3>
            </div>
          </div>

          {/* Evidence Checklist */}
          <ul className={styles.backList}>
            {cap.backDetails.map((detail, i) => (
              <li key={i} className={styles.backItem}>
                <CheckCircle2 size={15} className={styles.checkIcon} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {/* Back Technical Summary Footnote */}
          <div className={styles.backFootnote}>
            <span className={styles.footnoteBadge}>PRODUCTION PROVEN</span>
            <span className={styles.footnoteText}>Engineered with modular, testable patterns</span>
          </div>

          {/* Flip Back Hint */}
          <div className={styles.flipHint}>
            <RotateCcw size={13} className={styles.hintRotate} />
            <span>Back to overview</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Capabilities: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="capabilities" className={styles.capabilities} aria-labelledby="capabilities-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrowGroup}>
            <span className={styles.eyebrowDash} />
            <span className={styles.eyebrow}>{t.capabilities.badge}</span>
          </div>
          <h2 id="capabilities-heading" className={styles.title}>
            {t.capabilities.title}
          </h2>
          <p className={styles.subtitle}>{t.capabilities.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {CAPABILITIES.map((cap, index) => {
            const itemTrans = t.capabilities.items[
              cap.id as keyof typeof t.capabilities.items
            ];
            return (
              <FlipCard
                key={cap.id}
                cap={cap}
                title={itemTrans?.title || cap.title}
                desc={itemTrans?.desc || cap.description}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
