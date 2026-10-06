"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Download, 
  Home, 
  Briefcase, 
  Cpu, 
  ShieldCheck, 
  User, 
  Mail, 
  ChevronRight 
} from "lucide-react";
import { useTranslation } from "@/providers/IntlProvider";
import { useTheme } from "@/providers/ThemeProvider";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const { theme, setTheme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
          mobileToggleRef.current?.focus();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["contact", "about", "credentials", "aiml", "work", "home"];
      const scrollPosition = window.scrollY + 140;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const heroSection = document.getElementById("home");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.history.pushState(null, "", "#home");
    setActiveSection("home");
  };

  const navItems = [
    { id: "home", label: t.nav.home, icon: Home },
    { id: "work", label: t.nav.work, icon: Briefcase },
    { id: "aiml", label: t.nav.aiml, icon: Cpu },
    { id: "credentials", label: t.nav.credentials, icon: ShieldCheck },
    { id: "about", label: t.nav.about, icon: User },
    { id: "contact", label: t.nav.contact, icon: Mail },
  ];

  return (
    <>
      {/* Skip to main content — first focusable element for keyboard nav */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className={clsx(styles.header, scrolled && styles.scrolled)}>
        <div className={styles.container}>
          {/* Brand Monogram — Smooth scroll back to hero */}
          <Link 
            href="#home" 
            onClick={handleLogoClick}
            className={styles.brand} 
            aria-label="Matthew Gana Portfolio - Back to top"
          >
            <div className={styles.monogram}>MG</div>
            <div className={styles.brandText}>
              <span className={styles.brandNameDesktop}>Matthew Gana</span>
              <span className={styles.brandNameMobile}>Gana</span>
              <span className={styles.brandTitle}>Full-Stack Software Engineer</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            <a
              href="#work"
              className={clsx(styles.navLink, activeSection === "work" && styles.activeNavLink)}
            >
              {t.nav.work}
            </a>
            <a
              href="#aiml"
              className={clsx(styles.navLink, activeSection === "aiml" && styles.activeNavLink)}
            >
              {t.nav.aiml}
            </a>
            <a
              href="#credentials"
              className={clsx(styles.navLink, activeSection === "credentials" && styles.activeNavLink)}
            >
              {t.nav.credentials}
            </a>
            <a
              href="#about"
              className={clsx(styles.navLink, activeSection === "about" && styles.activeNavLink)}
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              className={clsx(styles.navLink, activeSection === "contact" && styles.activeNavLink)}
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Actions: Download CV, Language Switcher, Theme Toggle (Desktop), Mobile Menu Toggle */}
          <div className={styles.actions}>
            <div className={styles.desktopActions}>
              {/* Download CV CTA Button */}
              <a
                href="/gmatts-cv.pdf"
                download="Matthew_Gana_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadCvButton}
                aria-label={`${t.nav.downloadCv || "Download CV"} (PDF)`}
              >
                <Download size={15} />
                <span>{t.nav.downloadCv || "Download CV"}</span>
              </a>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className={styles.themeToggle}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            </div>

            {/* Mobile Menu Button — Sleek outline container matching mockup */}
            <button
              ref={mobileToggleRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={styles.mobileMenuToggle}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Menu Drawer */}
        {mobileMenuOpen && (
          <button
            type="button"
            className={styles.mobileBackdrop}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            tabIndex={-1}
          />
        )}
        <div
          className={clsx(styles.mobileDrawer, mobileMenuOpen && styles.mobileDrawerOpen)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Drawer Header */}
          <div className={styles.drawerHeader}>
            <div 
              className={styles.brand} 
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleLogoClick(e);
              }}
            >
              <div className={styles.monogram}>MG</div>
              <span className={styles.drawerBrandName}>Gana</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className={styles.drawerCloseButton}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links with Icons & Chevrons */}
          <nav className={styles.drawerNav} aria-label="Mobile navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (item.id === "home") {
                      handleLogoClick(e);
                    }
                  }}
                  className={clsx(styles.drawerNavLink, isActive && styles.drawerNavLinkActive)}
                >
                  <div className={styles.drawerNavContent}>
                    {isActive && <span className={styles.drawerActiveIndicator} />}
                    <Icon size={18} className={clsx(styles.drawerNavIcon, isActive && styles.drawerNavIconActive)} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight size={16} className={styles.drawerNavChevron} />
                </a>
              );
            })}
          </nav>

          {/* Prominent Golden Download CV Button */}
          <div className={styles.drawerCtaWrapper}>
            <a
              href="/gmatts-cv.pdf"
              download="Matthew_Gana_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.drawerDownloadButton}
              onClick={() => setMobileMenuOpen(false)}
              aria-label={`${t.nav.downloadCv || "Download CV"} (PDF)`}
            >
              <Download size={16} />
              <span>{t.nav.downloadCv || "Download CV"} (PDF)</span>
            </a>
          </div>

          {/* Language Selector Section */}
          <div className={styles.drawerSection}>
            <LanguageSwitcher variant="drawer" onSelect={() => setMobileMenuOpen(false)} />
          </div>

          {/* Theme Selector Section */}
          <div className={styles.drawerSection}>
            <div className={styles.drawerSectionHeader}>
              <Sun size={14} className={styles.drawerSectionIcon} />
              <span>THEME</span>
            </div>
            <div className={styles.themeSegmentControl} role="radiogroup" aria-label="Theme selection">
              <button
                type="button"
                role="radio"
                aria-checked={theme === "dark"}
                onClick={() => setTheme("dark")}
                className={clsx(styles.themeSegmentBtn, theme === "dark" && styles.themeSegmentActive)}
              >
                <Moon size={15} />
                <span>Dark</span>
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={theme === "light"}
                onClick={() => setTheme("light")}
                className={clsx(styles.themeSegmentBtn, theme === "light" && styles.themeSegmentActive)}
              >
                <Sun size={15} />
                <span>Light</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

