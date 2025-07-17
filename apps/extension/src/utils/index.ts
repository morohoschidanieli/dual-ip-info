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
import type { RootState } from "@store";
import type { HistoryModel, LocationAPIModel } from "@models";
import { ERROR_MESSAGES, LOG_MESSAGES } from "@constants";

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

export async function getInitialIP(): Promise<string | undefined> {
  const result = await chrome.storage.local.get("initialIP");
  return result["initialIP"];
}

export async function setInitialIP(ip: string): Promise<void> {
  await chrome.storage.local.set({ ["initialIP"]: ip });
}

export async function clearInitialIP(): Promise<void> {
  await chrome.storage.local.remove("initialIP");
}

export async function getReduxState(): Promise<RootState | null> {
  return new Promise((resolve) => {
    chrome.storage.local.get("persist:root", (data) => {
      const stringifyState = data["persist:root"];
      if (!stringifyState) return resolve(null);

      try {
        const parsed = JSON.parse(stringifyState);

        const state: Partial<RootState> = {};

        Object.keys(parsed).forEach((key) => {
          try {
            state[key as keyof RootState] = JSON.parse(parsed[key]);
          } catch (error) {
            console.warn(`${ERROR_MESSAGES.PARSE(key)}:`, error);
            state[key as keyof RootState] = parsed[key];
          }
        });
        resolve(state as RootState);
      } catch (error) {
        console.error(`${ERROR_MESSAGES.PARSE("persist:root")}:`, error);
        resolve(null);
      }
    });
  });
}

export async function getLocation(): Promise<LocationAPIModel> {
  console.log(LOG_MESSAGES.FETCHING_IP);
  const response = await fetch("https://ipwho.is/");
  const data = await response.json();

  return data;
}

export async function insertInReduxState(location: LocationAPIModel) {
  chrome.storage.local.get("persist:root", (data) => {
    const stringifyState = data["persist:root"];

    if (!stringifyState) return;

    const state = JSON.parse(stringifyState);

    try {
      const newHistoryEntry: HistoryModel = {
        ...location,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        ip: { v4: { public: location.ip } },
      };

      const history: HistoryModel[] = state.history
        ? JSON.parse(state.history)
        : [];

      history.unshift(newHistoryEntry);
      state.history = JSON.stringify(history);

      chrome.storage.local.set({
        "persist:root": JSON.stringify(state),
      });
    } catch (error) {
      console.error(`${ERROR_MESSAGES.PUSH_TO_STORAGE}:`, error);
    }
  });
}
