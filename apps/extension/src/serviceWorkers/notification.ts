import type { HistoryModel } from "@models";
import { ERROR_MESSAGES, LOG_MESSAGES } from "@constants";
import { i18n } from "@configurations";
import {
  getInitialIP,
  getLocation,
  getReduxState,
  insertInReduxState,
  setCountryInChromeBadge,
  setInitialIP,
} from "@utils";

let isExtensionOpen: boolean | undefined = undefined;

chrome.runtime.onInstalled.addListener(init);
chrome.runtime.onConnect.addListener(handlePopupConnection);

chrome.alarms.create("heartbeat", { periodInMinutes: 0.5 });
chrome.alarms.onAlarm.addListener(handleNotification);

async function handleNotification({ name }: chrome.alarms.Alarm) {
  if (name !== "heartbeat") return;

  chrome.idle.queryState(60, async (idleState) => {
    console.log(LOG_MESSAGES.HEARTBEAT);
    if (idleState !== "active") {
      console.log(LOG_MESSAGES.SKIP(idleState));
      return;
    }

    const state = await getReduxState();

    if (!state) return;

    const { settings } = state;

    if (settings.language !== i18n.language) {
      console.log(LOG_MESSAGES.LANGUAGE_CHANGED(settings.language));

      i18n.changeLanguage(state.settings.language);
    }

    if (settings.checkIPInBackground && !isExtensionOpen) {
      const location = await getLocation();
      const initialIP = await getInitialIP();

      if (initialIP) {
        try {
          const history: HistoryModel[] = state.history || "[]";

          if (history[0]?.ip?.v4?.public) {
            setInitialIP(history[0]?.ip?.v4?.public);
          }
        } catch (e) {
          console.warn("Could not restore initial IP from history:", e);
        }
      }

      if (initialIP !== location.ip) {
        console.log(LOG_MESSAGES.IP_CHANGED(location.ip));

        insertInReduxState(location);
        setCountryInChromeBadge(import.meta.env.MODE, location.country_code);

        if (settings.showPublicIPNotification) {
          chrome.notifications.create(`change-ip-notification-${Date.now()}`, {
            type: "basic",
            iconUrl: "assets/icons/icon128.png",
            title: `${i18n.t("notificationTitle")}`,
            message: `${i18n.t("notificationMessage")}`,
            priority: 2,
          });
        }
      }

      setInitialIP(location.ip);
    }
  });
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
    const reduxState = await getReduxState();

    if (reduxState?.history && reduxState.history[0].ip.v4.public) {
      setInitialIP(reduxState.history[0].ip.v4.public);
    }

    const initialIP = await getInitialIP();

    if (location) {
      if (!initialIP) {
        setInitialIP(location.ip);
      }

      setCountryInChromeBadge(import.meta.env.MODE, location.country_code);
    }
  } catch (error) {
    console.error(`${ERROR_MESSAGES.GET_PUBLIC_IP}: ${error}`);
  }
}
