"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Sun, Moon, Globe, Menu, X, ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/providers/IntlProvider";
import { useTheme } from "@/providers/ThemeProvider";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active indicator
      const sections = ["home", "work", "engineering", "evidence", "about", "writing", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)}>
      <div className={styles.container}>
        {/* Brand Monogram */}
        <Link href="#home" className={styles.brand} aria-label="Matthew Gana Portfolio">
          <div className={styles.monogram}>MG</div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Matthew Gana</span>
            <span className={styles.brandTitle}>Full-Stack Software Engineer</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a
            href="#home"
            className={clsx(styles.navLink, activeSection === "home" && styles.activeNavLink)}
          >
            {t.nav.home}
          </a>
          <a
            href="#work"
            className={clsx(styles.navLink, activeSection === "work" && styles.activeNavLink)}
          >
            {t.nav.work}
          </a>
          <a
            href="#engineering"
            className={clsx(styles.navLink, activeSection === "engineering" && styles.activeNavLink)}
          >
            {t.nav.engineering}
          </a>
          <a
            href="#about"
            className={clsx(styles.navLink, activeSection === "about" && styles.activeNavLink)}
          >
            {t.nav.about}
          </a>
          <a
            href="#writing"
            className={clsx(styles.navLink, activeSection === "writing" && styles.activeNavLink)}
          >
            {t.nav.writing}
          </a>
          <a
            href="#contact"
            className={clsx(styles.navLink, activeSection === "contact" && styles.activeNavLink)}
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Actions: Theme Toggle, Language Switcher, Mobile Menu */}
        <div className={styles.actions}>
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLang}
            className={styles.langSelect}
            aria-label={`Switch language from ${language.toUpperCase()}`}
          >
            <Globe size={14} />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.mobileMenuToggle}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className={styles.mobileBackdrop}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={clsx(styles.mobileDrawer, mobileMenuOpen && styles.mobileDrawerOpen)}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div>
          <div className={styles.drawerHeader}>
            <div className={styles.brand}>
              <div className={styles.monogram}>MG</div>
              <span className={styles.brandName}>Matthew Gana</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.mobileMenuToggle}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className={styles.drawerNav}>
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.drawerNavLink}
            >
              <span>{t.nav.home}</span>
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.drawerNavLink}
            >
              <span>{t.nav.work}</span>
            </a>
            <a
              href="#engineering"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.drawerNavLink}
            >
              <span>{t.nav.engineering}</span>
            </a>
            <a
              href="#evidence"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.drawerNavLink}
            >
              <span>{t.evidence.title}</span>
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.drawerNavLink}
            >
              <span>{t.nav.about}</span>
            </a>
            <a
              href="#writing"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.drawerNavLink}
            >
              <span>{t.nav.writing}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.drawerNavLink}
            >
              <span>{t.nav.contact}</span>
            </a>
          </nav>
        </div>

        <div className={styles.drawerFooter}>
          <a
            href="/gmatts-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.drawerNavLink}
          >
            <span>{t.nav.resume} (PDF)</span>
            <ArrowUpRight size={16} />
          </a>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
            <button type="button" onClick={toggleLang} className={styles.langSelect}>
              <Globe size={14} />
              <span>{language === "en" ? "Passer en Français" : "Switch to English"}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
