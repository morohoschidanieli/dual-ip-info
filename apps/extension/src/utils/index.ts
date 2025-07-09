import {
  de,
  enUS,
  es,
  fr,
  it,
  ja,
  ko,
  type Locale,
  nl,
  pl,
  ptBR,
  ro,
  ru,
  zhCN,
} from "date-fns/locale";

export const localeMap: Record<string, Locale> = {
  en: enUS,
  ro,
  fr,
  de,
  es,
  it,
  pl,
  ru,
  zh: zhCN,
  ja,
  ko,
  pt: ptBR,
  nl,
};

export const countryCodeToFlagEmoji = (code: string | undefined): string => {
  if (!code) {
    return "🗺️";
  }

  return code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
};
