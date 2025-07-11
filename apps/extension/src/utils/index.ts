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

export const countryCodeToFlagEmoji = (
  countryCode: string | undefined
): string => {
  if (!countryCode) {
    return "🗺️";
  }

  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
};

export const setCountryInChromeBadge = (
  mode: string,
  countryCode: string | undefined
) => {
  if (mode === "production" && countryCode) {
    chrome.action.setBadgeText({
      text: countryCodeToFlagEmoji(countryCode),
    });
  }
};
