"use client";

import React from "react";
import { Code2, Database, Layers, ShieldCheck, Cpu, Layout } from "lucide-react";
import { useTranslation } from "@/providers/IntlProvider";
import { CAPABILITIES } from "@/data/capabilities";
import styles from "./Capabilities.module.css";

const ICONS_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  Database: <Database size={24} />,
  Layers: <Layers size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  Cpu: <Cpu size={24} />,
  Layout: <Layout size={24} />
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

          <p className={styles.subtitle}>
            {t.capabilities.subtitle}
          </p>
        </div>

        <div className={styles.grid}>
          {CAPABILITIES.map((cap) => {
            const itemTrans = t.capabilities.items[cap.id as keyof typeof t.capabilities.items];
            const title = itemTrans?.title || cap.title;
            const desc = itemTrans?.desc || cap.description;

            return (
              <div key={cap.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    {ICONS_MAP[cap.icon] || <Code2 size={24} />}
                  </div>
                  <span className={styles.number}>{cap.number}</span>
                </div>

                <div>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                    {desc}
                  </p>
                </div>

                <div className={styles.skillsList}>
                  {cap.keySkills.map((skill) => (
                    <span key={skill} className={styles.skillPill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
