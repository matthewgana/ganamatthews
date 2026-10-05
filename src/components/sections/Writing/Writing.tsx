"use client";

import React from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./Writing.module.css";

const ARTICLES = [
  {
    category: "Architecture & DDD",
    title: "Domain-Driven Boundary Decomposition in Modular Monoliths",
    excerpt: "Why schema-level isolation and strict dependency inversion outperform premature microservice splitting for high-concurrency business platforms.",
    status: "Upcoming Note"
  },
  {
    category: "Security & FinTech",
    title: "Enforcing Double-Entry Ledger Invariants & Payment Idempotency",
    excerpt: "Designing tamper-resistant accounting engines with transactional balance assertions, idempotency key caches, and offline conflict resolution.",
    status: "Upcoming Note"
  },
  {
    category: "AI & Algorithmic Learning",
    title: "Demystifying Bayesian Knowledge Tracing (BKT) in EdTech Systems",
    excerpt: "A practical guide to modelling student cognitive skill acquisition over time using probabilistic latent state transitions in production TypeScript.",
    status: "Upcoming Note"
  }
];

export const Writing: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="writing" className={styles.writing} aria-labelledby="writing-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrowGroup}>
            <span className={styles.eyebrowDash} />
            <span className={styles.eyebrow}>{t.writing.badge}</span>
          </div>

          <h2 id="writing-heading" className={styles.title}>
            {t.writing.title}
          </h2>

          <p className={styles.subtitle}>
            {t.writing.subtitle}
          </p>
        </div>

        <div className={styles.grid}>
          {(t.writing.articles || ARTICLES).map((article, i) => (
            <article key={i} className={styles.card}>
              <div>
                <span className={styles.cardCategory}>{article.category}</span>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardExcerpt}>{article.excerpt}</p>
              </div>

              <div className={styles.cardStatus}>
                <span className={styles.statusDot} />
                <span>{t.writing.upcomingNote}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
