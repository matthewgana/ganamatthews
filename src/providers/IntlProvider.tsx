"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { en } from "@/locales/en";
import { fr } from "@/locales/fr";
import { Language } from "@/types";

type Translations = typeof en;

interface IntlContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const IntlContext = createContext<IntlContextType | undefined>(undefined);

export const IntlProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("mg_lang") as Language | null;
      if (stored === "en" || stored === "fr") {
        setLanguageState(stored);
      } else if (navigator.language.startsWith("fr")) {
        setLanguageState("fr");
      }
    } catch {
      // ignore SSR or storage exceptions
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("mg_lang", lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const t = language === "fr" ? fr : en;

  return (
    <IntlContext.Provider value={{ language, setLanguage, t }}>
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
      t: en
    };
  }
  return context;
};
