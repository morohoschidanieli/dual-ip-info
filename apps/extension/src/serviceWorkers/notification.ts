import type { RootState } from "@store";
import type { HistoryModel, LocationModel } from "@models";
import { ERROR_MESSAGES, LOG_MESSAGES } from "@constants";
import { i18n } from "@configurations";
import { setCountryInChromeBadge } from "@utils";

let isExtensionOpen: boolean | undefined = undefined;
let initialIP: string;

chrome.runtime.onInstalled.addListener(init);
chrome.runtime.onConnect.addListener(handlePopupConnection);

chrome.alarms.create("heartbeat", { periodInMinutes: 0.5 });
chrome.alarms.onAlarm.addListener(handleNotification);

async function handleNotification({ name }: chrome.alarms.Alarm) {
  if (name === "heartbeat") {
    console.log(LOG_MESSAGES.HEARTBEAT);
    const state = await getReduxState();

    if (state) {
      const { settings } = state;

      if (settings.language !== i18n.language) {
        console.log(LOG_MESSAGES.LANGUAGE_CHANGED(settings.language));

        i18n.changeLanguage(state.settings.language);
      }

      if (settings.showPublicIPNotification && !isExtensionOpen) {
        const location = await getLocation();

        if (initialIP !== location.ip) {
          console.log(LOG_MESSAGES.IP_CHANGED(location.ip));

          insertInReduxState(location);
          setCountryInChromeBadge(import.meta.env.MODE, location.country_code);

          chrome.notifications.create(`change-ip-notification-${Date.now()}`, {
            type: "basic",
            iconUrl: "icons/icon128.png",
            title: `${i18n.t("notificationTitle")}`,
            message: `${i18n.t("notificationMessage")}`,
            priority: 2,
          });
        }

        initialIP = location.ip;
      }
    }
  }
}

function handlePopupConnection({ name, onDisconnect }: chrome.runtime.Port) {
  if (name === "popup-connection") {
    console.log(LOG_MESSAGES.POPUP_OPENED);
    isExtensionOpen = true;

    onDisconnect.addListener(() => {
      console.log(LOG_MESSAGES.POPUP_CLOSED);
      isExtensionOpen = false;
    });
  }
}

async function init() {
  console.log(LOG_MESSAGES.INIT);
  try {
    const location = await getLocation();

    if (location) {
      initialIP = location.ip;
      setCountryInChromeBadge(import.meta.env.MODE, location.country_code);
    }
  } catch (error) {
    console.error(`${ERROR_MESSAGES.GET_PUBLIC_IP}: ${error}`);
  }
}

async function insertInReduxState(location: LocationModel) {
  chrome.storage.local.get("persist:root", (data) => {
    const stringifyState = data["persist:root"];

    if (!stringifyState) return;

    try {
      const newIP: HistoryModel = {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        ip: { v4: { public: location.ip } },
        location,
      };
      const state = JSON.parse(stringifyState);

      const history: HistoryModel[] = state.history
        ? JSON.parse(state.history)
        : [];

      history.unshift(newIP);

      state.history = JSON.stringify(history);

      chrome.storage.local.set({
        "persist:root": JSON.stringify(state),
      });
    } catch (error) {
      console.error(`${ERROR_MESSAGES.PUSH_TO_STORAGE}:`, error);
    }
  });
}

async function getReduxState(): Promise<RootState | null> {
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

async function getLocation(): Promise<LocationModel> {
  console.log(LOG_MESSAGES.FETCHING_IP);
  const response = await fetch("https://ipwho.is/");
  const data = await response.json();

  return data;
}
