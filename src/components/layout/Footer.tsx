"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Youtube, Instagram, Facebook, Mail, ArrowUp } from "lucide-react";
import { useTranslation } from "@/providers/IntlProvider";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brandGroup}>
            <div className={styles.monogram}>MG</div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>Matthew Gana</span>
              <span className={styles.brandTitle}>{t.footer.brandTitle}</span>
            </div>
          </div>

          <nav className={styles.navLinks} aria-label="Footer navigation">
            <a href="#home" className={styles.navLink}>{t.nav.home}</a>
            <a href="#work" className={styles.navLink}>{t.nav.work}</a>
            <a href="#aiml" className={styles.navLink}>{t.nav.aiml}</a>
            <a href="#about" className={styles.navLink}>{t.nav.about}</a>
            <a href="#writing" className={styles.navLink}>{t.nav.writing}</a>
            <a href="#contact" className={styles.navLink}>{t.nav.contact}</a>
          </nav>
        </div>

        <div className={styles.bottomRow}>
          <span className={styles.copyright}>© 2026 Matthew Gana. {t.footer.rights}</span>

          <div className={styles.socialGroup}>
            <a
              href="https://github.com/matthewgana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={t.nav.github}
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/matthewsgana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={t.nav.linkedin}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.youtube.com/@LearnWithMatthewGana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="YouTube: @LearnWithMatthewGana"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://www.instagram.com/learnwithmatthewgana?igsh=MTZndGNrYndrM3U0Nw=="
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Instagram: @learnwithmatthewgana"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/share/1BxAFDC66L/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Facebook: Matthew Gana"
            >
              <Facebook size={18} />
            </a>
            <a
              href="mailto:matthewgana95@gmail.com"
              className={styles.socialIcon}
              aria-label={t.contact.directEmail}
            >
              <Mail size={18} />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className={styles.backToTop}
              aria-label={t.footer.backToTop}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
