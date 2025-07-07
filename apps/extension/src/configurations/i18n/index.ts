import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { de, en, es, fr, ro, it, nl, pl, pt, ru, zh, ja, ko } from "@constants";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en-us",
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false,
    },
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
    },
  });

export default i18n;
