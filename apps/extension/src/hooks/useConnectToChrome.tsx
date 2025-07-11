import { useEffect } from "react";

/**
 * This hook is used to send a message to chrome API about the status of the extension(e.g opened or not)
 * When the extension is opened, the service worker doesn't work
 * When the extension is closed, the service worker works
 */
export const useConnectToChrome = (env: ImportMetaEnv) => {
  const { MODE } = env;

  useEffect(() => {
    if (MODE === "production") {
      const port = chrome.runtime.connect({
        name: "popup-connection",
      });
      port.postMessage({ type: "popup-open" });

      return () => {
        port.disconnect();
      };
    }
  }, [MODE]);
};
