import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  ar,
  cs,
  de,
  en,
  es,
  fr,
  hi,
  hu,
  it,
  ja,
  ko,
  Languages,
  nl,
  pl,
  pt,
  ro,
  ru,
  tr,
  uk,
  zh,
} from "@constants";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: Languages.map((language) => language.value),
    resources: {
      en: { translation: en },
      ro: { translation: ro },
      de: { translation: de },
      fr: { translation: fr },
      es: { translation: es },
      it: { translation: it },
      nl: { translation: nl },
      pl: { translation: pl },
      pt: { translation: pt },
      ru: { translation: ru },
      zh: { translation: zh },
      ja: { translation: ja },
      ko: { translation: ko },
      cs: { translation: cs },
      hu: { translation: hu },
      hi: { translation: hi },
      ar: { translation: ar },
      tr: { translation: tr },
      uk: { translation: uk },
    },
  });

export default i18n;
