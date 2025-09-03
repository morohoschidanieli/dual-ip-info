import type { HistoryModel } from "@models";
import { ERROR_MESSAGES, LOG_MESSAGES } from "@constants";
import { i18n } from "@configurations";
import {
  getInitialIP,
  getLocation,
  getReduxState,
  insertInReduxState,
  parseStringToRootState,
  setCountryInChromeBadge,
  setInitialIP,
} from "@utils";
import { initialSettingsState } from "../store/reducers/settingsReducer";

let isExtensionOpen: boolean | undefined = undefined;

/**
 * SETUP LISTENERS
 */
chrome.runtime.onInstalled.addListener(init);
chrome.runtime.onConnect.addListener(handlePopupConnection);
chrome.alarms.onAlarm.addListener(handleNotification);
chrome.storage.onChanged.addListener(handleStorageChange);

async function init() {
  console.log(LOG_MESSAGES.INIT);

  try {
    const location = await getLocation();
    const reduxState = await getReduxState();

    if (reduxState) {
      const { settings, history } = reduxState;

      updateHeartbeatInterval(settings.checkInterval);

      if (history && history[0].ip.v4.public) {
        setInitialIP(history[0].ip.v4.public);
      }
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

function handleStorageChange(
  changes: Record<string, chrome.storage.StorageChange>,
  area: string
) {
  const newValue = parseStringToRootState(changes["persist:root"]?.newValue);
  const oldValue = parseStringToRootState(changes["persist:root"]?.oldValue);

  const isCheckIntervalChanged =
    newValue?.settings?.checkInterval !== oldValue?.settings?.checkInterval;

  if (area === "local" && isCheckIntervalChanged) {
    console.log(
      "[STORAGE] heartbeatInterval changed:",
      newValue?.settings?.checkInterval
    );
    updateHeartbeatInterval(newValue?.settings?.checkInterval);
  }
}

async function updateHeartbeatInterval(intervalInSeconds?: number) {
  const intervalInMinutes = intervalInSeconds
    ? intervalInSeconds / 60
    : initialSettingsState.checkInterval / 60;

  chrome.alarms.clear("heartbeat", () => {
    chrome.alarms.create("heartbeat", { periodInMinutes: intervalInMinutes });
    console.log(`Updated heartbeat interval to ${intervalInMinutes} minutes`);
  });
}

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
