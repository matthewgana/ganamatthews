import { Language, LocaleMeta } from "@/types";
import { en } from "./en";
import { fr } from "./fr";
import { pt } from "./pt";
import { ar } from "./ar";
import { ja } from "./ja";
import { de } from "./de";
import { es } from "./es";
import { zhCN } from "./zh-CN";

export type Translations = typeof en;

export const LOCALES_META: Record<Language, LocaleMeta> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    dir: "ltr"
  },
  fr: {
    code: "fr",
    name: "French",
    nativeName: "Français",
    dir: "ltr"
  },
  pt: {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    dir: "ltr"
  },
  ar: {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    dir: "rtl"
  },
  ja: {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    dir: "ltr"
  },
  de: {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    dir: "ltr"
  },
  es: {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    dir: "ltr"
  },
  "zh-CN": {
    code: "zh-CN",
    name: "Simplified Chinese",
    nativeName: "简体中文",
    dir: "ltr"
  }
};

export const SUPPORTED_LOCALES: Language[] = [
  "en",
  "fr",
  "pt",
  "ar",
  "ja",
  "de",
  "es",
  "zh-CN"
];

export const TRANSLATIONS: Record<Language, Translations> = {
  en,
  fr,
  pt,
  ar,
  ja,
  de,
  es,
  "zh-CN": zhCN
};

export { en, fr, pt, ar, ja, de, es, zhCN };
