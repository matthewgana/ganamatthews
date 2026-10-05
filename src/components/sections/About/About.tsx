"use client";

import React from "react";
import Image from "next/image";
import { Globe, MapPin, Compass, GraduationCap, ArrowRight } from "lucide-react";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./About.module.css";

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Square Portrait Card */}
          <div className={styles.portraitCard}>
            <Image
              src="/gmatts.png"
              alt="Matthew Gana"
              fill
              sizes="(max-width: 900px) 100vw, 360px"
              className={styles.portraitImg}
            />
          </div>

          {/* Right: Identity & Professional Narrative */}
          <div className={styles.content}>
            <div className={styles.eyebrowGroup}>
              <span className={styles.eyebrowDash} />
              <span className={styles.eyebrow}>{t.about.badge}</span>
            </div>

            <h2 id="about-heading" className={styles.title}>
              {t.about.title}
            </h2>

            <p className={styles.bioText}>
              {t.about.p1}
            </p>

            <p className={styles.bioText}>
              {t.about.p2}
            </p>

            {/* Badges: Remote, Location & International Mobility */}
            <div className={styles.badgesRow}>
              <div className={styles.metaBadge}>
                <Globe size={22} className={styles.metaIcon} />
                <div className={styles.metaTextGroup}>
                  <span className={styles.metaLabel}>{t.about.remoteFriendly}</span>
                  <span className={styles.metaValue}>{t.about.remoteDesc}</span>
                </div>
              </div>

              <div className={styles.metaBadge}>
                <MapPin size={22} className={styles.metaIcon} />
                <div className={styles.metaTextGroup}>
                  <span className={styles.metaLabel}>{t.about.basedIn}</span>
                  <span className={styles.metaValue}>{t.about.basedDesc}</span>
                </div>
              </div>

              <div className={styles.metaBadge}>
                <Compass size={22} className={styles.metaIcon} />
                <div className={styles.metaTextGroup}>
                  <span className={styles.metaLabel}>{t.about.mobilityTitle}</span>
                  <span className={styles.metaValue}>{t.about.mobilityDesc}</span>
                </div>
              </div>
            </div>

            {/* Beyond Software - STEM Education Card */}
            <div className={styles.stemCard}>
              <div className={styles.stemHeader}>
                <GraduationCap size={22} color="var(--accent-primary)" />
                <span>{t.about.stemTitle}</span>
              </div>
              <p className={styles.stemDesc}>
                {t.about.stemDesc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginTop: "0.5rem" }}>
                <a
                  href="https://www.youtube.com/@LearnWithMatthewGana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.stemLink}
                  aria-label={t.about.youtubeChannel}
                >
                  <span>YouTube: @LearnWithMatthewGana</span>
                  <ArrowRight size={14} data-rtl-mirror="true" />
                </a>
                <a
                  href="https://www.instagram.com/learnwithmatthewgana?igsh=MTZndGNrYndrM3U0Nw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.stemLink}
                  aria-label={t.about.instagramProfile}
                >
                  <span>Instagram: @learnwithmatthewgana</span>
                  <ArrowRight size={14} data-rtl-mirror="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
