"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Github, Linkedin, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const portraitRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !contentRef.current || !portraitRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        contentRef.current!.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }
      );

      tl.fromTo(
        portraitRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 1.1 },
        "-=0.6"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className={styles.hero} aria-label="Hero Introduction">
      <div className={styles.container}>
        {/* Left Column: Primary Engineering Positioning */}
        <div ref={contentRef} className={styles.content}>
          {/* Eyebrow Badge */}
          <div className={styles.pillBadge}>
            <span className={styles.pillBadgeDot} />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className={styles.title}>
            {t.hero.titleFullStack}{" "}
            <span className={styles.titleHighlight}>{t.hero.titleSoftware}</span>
            <br />
            {t.hero.titleEngineer}
          </h1>

          <p className={styles.subtitle}>
            {t.hero.subtitle}
          </p>

          {/* Specialties Rail */}
          <div className={styles.specialties}>
            {t.hero.specialtiesList.map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 && <span className={styles.specialtyDot}>•</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <a href="#work" className={styles.primaryCta}>
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight size={18} data-rtl-mirror="true" />
            </a>
            <a href="#contact" className={styles.secondaryCta}>
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>

          {/* Social / Verified Links */}
          <div className={styles.socialRow}>
            <a
              href="https://github.com/matthewgana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={t.nav.github}
            >
              <Github size={18} />
              <span>{t.nav.github}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/matthewsgana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={t.nav.linkedin}
            >
              <Linkedin size={18} />
              <span>{t.nav.linkedin}</span>
            </a>
            <a
              href="/gmatts-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={`${t.nav.resume} (PDF)`}
            >
              <FileText size={18} />
              <span>{t.nav.resume}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Portrait Composition */}
        <div className={styles.visualWrapper}>
          <div ref={portraitRef} className={styles.portraitContainer}>
            <Image
              src="/gmatts.png"
              alt="Matthew Gana - Full-Stack Software Engineer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
              className={styles.portraitImage}
            />
            <div className={styles.portraitGradientOverlay} />

            {/* Handwritten Script Callout (as in the mockup) */}
            <div className={styles.handwrittenScript}>
              &quot;{t.hero.handwritten}&quot;
            </div>

            {/* Vertical Evidence Rail (01 to 11) */}
            <div className={styles.evidenceRail}>
              <span>01</span>
              <span className={styles.railLine} />
              <span>02</span>
              <span>03</span>
              <span>04</span>
              <span>05</span>
              <span>06</span>
              <span>07</span>
              <span>08</span>
              <span>09</span>
              <span>10</span>
              <span>11</span>
            </div>

            {/* Floating Status Indicator */}
            <div className={styles.floatingStatusStrip}>
              <span className={styles.statusLiveDot} />
              <span>{t.hero.verifiedSystems}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
