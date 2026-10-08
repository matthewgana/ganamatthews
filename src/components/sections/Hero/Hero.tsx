"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FileText, Github, Linkedin, ChevronRight, ChevronDown } from "lucide-react";
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
    if (prefersReducedMotion || !contentRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        contentRef.current!.children,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }
      );

      if (portraitRef.current) {
        tl.fromTo(
          portraitRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 1.1 },
          "-=0.6"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className={styles.hero} aria-label="Hero Introduction">
      <div className={styles.container}>
        {/* Left Column: Primary Engineering Positioning */}
        <div ref={contentRef} className={styles.content}>
          {/* Strategic Pill (Mockup: Glowing Dot + Impactful Message + Chevron) */}
          <a href="#about" className={styles.pillBadge} aria-label={t.hero.badge}>
            <span className={styles.pillBadgeDot} />
            <span className={styles.pillBadgeText}>{t.hero.badge}</span>
            <ChevronRight size={14} className={styles.pillBadgeChevron} />
          </a>

          {/* Powerful Headline */}
          <h1 className={styles.title}>
            <span className={styles.titleLine}>{t.hero.titleFullStack}</span>{" "}
            <span className={styles.titleHighlight}>{t.hero.titleSoftware}</span>
            <br className={styles.desktopBr} />
            <span className={styles.titleLine}>{t.hero.titleEngineer}</span>
          </h1>

          {/* Concise Value Prop */}
          <p className={styles.subtitle}>
            <span className={styles.desktopSubtitle}>{t.hero.subtitle}</span>
            <span className={styles.mobileSubtitle}>{t.hero.mobileSubtitle || t.hero.subtitle}</span>
          </p>

          {/* Skills / Tech Stack — Desktop specialties rail */}
          <div className={styles.desktopSpecialties}>
            {t.hero.specialtiesList.map((item, index) => (
              <React.Fragment key={item}>
                {index > 0 && <span className={styles.specialtyDot}>•</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>

          {/* Skills / Tech Stack — Mobile Dedicated Card (Mockup) */}
          <a href="#tech" className={styles.mobileTechStackCard} aria-label={t.hero.exploreTechStack || "Explore tech stack and architecture"}>
            <div className={styles.mobileTechStackTags}>
              <div className={styles.mobileTechStackRow}>
                {t.hero.specialtiesList.slice(0, 3).map((item) => (
                  <span key={item}><span className={styles.mobileTechDot}>•</span> {item}</span>
                ))}
              </div>
              <div className={styles.mobileTechStackRow}>
                {t.hero.specialtiesList.slice(3).map((item) => (
                  <span key={item}><span className={styles.mobileTechDot}>•</span> {item}</span>
                ))}
              </div>
            </div>
            <div className={styles.mobileTechChevronBtn}>
              <ChevronRight size={18} />
            </div>
          </a>

          {/* Primary & Secondary CTAs */}
          <div className={styles.ctaRow}>
            <a href="#work" className={styles.primaryCta}>
              <span>{t.hero.ctaPrimary}</span>
              <ChevronRight size={18} className={styles.ctaChevron} />
            </a>
            <a href="#contact" className={styles.secondaryCta}>
              <span>{t.hero.ctaSecondary}</span>
              <ChevronRight size={18} className={styles.ctaChevron} />
            </a>
          </div>

          {/* Social / Verified Links (Desktop only) */}
          <div className={styles.desktopSocialRow}>
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

        {/* Right Column: Editorial Portrait Composition (Desktop) */}
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

            {/* Floating Status Indicator */}
            <div className={styles.floatingStatusStrip}>
              <span className={styles.statusLiveDot} />
              <span>{t.hero.verifiedSystems}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Atmospheric Mountain Horizon Artwork (Mockup) */}
      <div className={styles.mobileBackdropArtwork} aria-hidden="true">
        <div className={styles.mountainGlow} />
        <svg
          className={styles.mountainSvg}
          viewBox="0 0 1200 460"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skyDawnGradient" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#e06d28" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#e06d28" stopOpacity="0.18" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="mountainFarGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#153629" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#081b13" stopOpacity="0.98" />
            </linearGradient>
            <linearGradient id="mountainMidGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#0d281e" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#06160f" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="mountainForeGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#081812" stopOpacity="1" />
              <stop offset="100%" stopColor="#040c08" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="ridgeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e06d28" stopOpacity="0" />
              <stop offset="35%" stopColor="#f89e5a" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#ffd8a8" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#f89e5a" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#e06d28" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Atmospheric Dawn Flare behind ridges */}
          <ellipse cx="600" cy="270" rx="460" ry="170" fill="url(#skyDawnGradient)" />

          {/* Distant Mountain Ridge */}
          <path
            d="M0,310 L90,250 L210,300 L340,230 L480,285 L610,205 L740,275 L880,225 L1020,290 L1140,245 L1200,275 L1200,460 L0,460 Z"
            fill="url(#mountainFarGrad)"
          />
          <path
            d="M340,230 L480,285 L610,205 L740,275 L880,225"
            stroke="url(#ridgeGlow)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.65"
          />

          {/* Midground Mountain Layer — Jagged Crags */}
          <path
            d="M0,360 L140,300 L260,345 L420,270 L540,325 L670,255 L780,315 L910,265 L1060,335 L1200,315 L1200,460 L0,460 Z"
            fill="url(#mountainMidGrad)"
          />
          <path
            d="M420,270 L540,325 L670,255 L780,315 L910,265"
            stroke="url(#ridgeGlow)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.85"
          />

          {/* Foreground Mountain Layer with volcanic/obsidian facets */}
          <path
            d="M0,400 L180,345 L320,385 L490,325 L620,375 L760,310 L890,365 L1040,340 L1200,385 L1200,460 L0,460 Z"
            fill="url(#mountainForeGrad)"
          />
          <path
            d="M490,325 L620,375 L760,310 L890,365"
            stroke="#e06d28"
            strokeWidth="1.8"
            fill="none"
            opacity="0.55"
          />
        </svg>
      </div>

      {/* Mobile Scroll To Explore Indicator (Mockup) */}
      <div className={styles.mobileScrollCue}>
        <a href="#work" className={styles.scrollDownBtn} aria-label={t.hero.scrollDown || "Scroll down to projects"}>
          <ChevronDown size={16} />
        </a>
        <span className={styles.scrollDownText}>{t.hero.scrollToExplore}</span>
      </div>
    </section>
  );
};

