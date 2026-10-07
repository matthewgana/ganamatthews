"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { Language, Direction, LocaleMeta } from "@/types";
import { TRANSLATIONS, LOCALES_META, SUPPORTED_LOCALES, Translations, en } from "@/locales";

interface IntlContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  dir: Direction;
  isRTL: boolean;
  localeMeta: LocaleMeta;
  locales: LocaleMeta[];
}

const IntlContext = createContext<IntlContextType | undefined>(undefined);

const STORAGE_KEY = "mg_lang";

function detectInitialLocale(): Language {
  if (typeof window === "undefined") return "en";

  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && SUPPORTED_LOCALES.includes(stored)) {
      return stored;
    }

    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("zh")) return "zh-CN";
    if (browserLang.startsWith("ar")) return "ar";
    if (browserLang.startsWith("he") || browserLang.startsWith("iw")) return "he";
    if (browserLang.startsWith("fr")) return "fr";
    if (browserLang.startsWith("pt")) return "pt";
    if (browserLang.startsWith("ja")) return "ja";
    if (browserLang.startsWith("de")) return "de";
    if (browserLang.startsWith("es")) return "es";
  } catch {
    // ignore
  }

  return "en";
}

export const IntlProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = detectInitialLocale();
    setLanguageState(initial);
    setMounted(true);

    const meta = LOCALES_META[initial];
    document.documentElement.lang = initial;
    document.documentElement.dir = meta.dir;
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    if (!SUPPORTED_LOCALES.includes(lang)) return;
    setLanguageState(lang);

    try {
      localStorage.setItem(STORAGE_KEY, lang);
      const meta = LOCALES_META[lang];
      document.documentElement.lang = lang;
      document.documentElement.dir = meta.dir;
    } catch {
      // ignore
    }
  }, []);

  const currentMeta = LOCALES_META[language] || LOCALES_META.en;
  const currentTranslation = TRANSLATIONS[language] || en;
  const dir = currentMeta.dir;
  const isRTL = dir === "rtl";

  const allLocales = SUPPORTED_LOCALES.map((code) => LOCALES_META[code]);

  return (
    <IntlContext.Provider
      value={{
        language,
        setLanguage,
        t: currentTranslation,
        dir,
        isRTL,
        localeMeta: currentMeta,
        locales: allLocales
      }}
    >
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {mounted ? `Language: ${currentMeta.nativeName} (${currentMeta.name})` : ""}
      </div>
      {children}
    </IntlContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(IntlContext);
  if (!context) {
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: en,
      dir: "ltr" as Direction,
      isRTL: false,
      localeMeta: LOCALES_META.en,
      locales: SUPPORTED_LOCALES.map((code) => LOCALES_META[code])
    };
  }
  return context;
};
