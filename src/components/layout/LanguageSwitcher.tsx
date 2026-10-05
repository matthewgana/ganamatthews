"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import clsx from "clsx";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useTranslation } from "@/providers/IntlProvider";
import { Language, LocaleMeta } from "@/types";
import styles from "./LanguageSwitcher.module.css";

interface LanguageSwitcherProps {
  variant?: "header" | "drawer";
  onSelect?: () => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = "header",
  onSelect
}) => {
  const { language, setLanguage, locales, localeMeta, t, isRTL } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Handle keyboard interaction
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) {
        if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsOpen(true);
          const currentIndex = locales.findIndex((l) => l.code === language);
          setFocusedIndex(currentIndex >= 0 ? currentIndex : 0);
        }
        return;
      }

      switch (e.key) {
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          triggerRef.current?.focus();
          break;

        case "ArrowDown":
          e.preventDefault();
          setFocusedIndex((prev) => (prev + 1) % locales.length);
          break;

        case "ArrowUp":
          e.preventDefault();
          setFocusedIndex((prev) => (prev - 1 + locales.length) % locales.length);
          break;

        case "Enter":
        case " ":
          e.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < locales.length) {
            const selected = locales[focusedIndex];
            setLanguage(selected.code);
            setIsOpen(false);
            triggerRef.current?.focus();
            onSelect?.();
          }
          break;

        case "Tab":
          setIsOpen(false);
          break;

        default:
          break;
      }
    },
    [isOpen, focusedIndex, locales, language, setLanguage, onSelect]
  );

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
    triggerRef.current?.focus();
    onSelect?.();
  };

  if (variant === "drawer") {
    return (
      <div className={styles.drawerWrapper}>
        <div className={styles.drawerTitle}>
          <Globe size={14} className={styles.globeIcon} />
          <span>{t.common.language}</span>
        </div>
        <div className={styles.drawerGrid} role="radiogroup" aria-label={t.common.selectLanguage}>
          {locales.map((meta) => {
            const isActive = meta.code === language;
            return (
              <button
                key={meta.code}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => handleSelect(meta.code)}
                className={clsx(styles.drawerButton, isActive && styles.drawerButtonActive)}
                dir={meta.dir}
              >
                <span>{meta.nativeName}</span>
                <span className={styles.itemCode}>{meta.code.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={styles.wrapper}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(styles.trigger, isOpen && styles.triggerOpen)}
        aria-label={`${t.common.selectLanguage}. ${t.common.language}: ${localeMeta.nativeName}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe size={14} className={styles.globeIcon} />
        <span className={styles.triggerText}>{localeMeta.nativeName}</span>
        <ChevronDown
          size={13}
          className={clsx(styles.chevron, isOpen && styles.chevronOpen)}
        />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className={styles.dropdown}
          role="listbox"
          aria-label={t.common.selectLanguage}
          tabIndex={-1}
        >
          <div className={styles.menuHeader}>{t.common.selectLanguage}</div>

          {locales.map((meta: LocaleMeta, index: number) => {
            const isActive = meta.code === language;
            const isFocused = index === focusedIndex;

            return (
              <button
                key={meta.code}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => handleSelect(meta.code)}
                onMouseEnter={() => setFocusedIndex(index)}
                className={clsx(
                  styles.menuItem,
                  isActive && styles.menuItemActive,
                  isFocused && styles.menuItemFocused
                )}
                dir={meta.dir}
              >
                <div className={styles.itemContent}>
                  <span className={styles.itemCode}>{meta.code.toUpperCase()}</span>
                  <span className={styles.itemNativeName}>{meta.nativeName}</span>
                </div>

                {isActive && <Check size={14} className={styles.checkIcon} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
