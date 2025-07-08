import {
  enUS,
  ro,
  fr,
  de,
  es,
  it,
  pl,
  ru,
  zhCN,
  ja,
  ko,
  ptBR,
  nl,
  type Locale,
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

export const countryCodeToFlagEmoji = (code: string): string => {
  return code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
};
