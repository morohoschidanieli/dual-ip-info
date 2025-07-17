export const ERROR_MESSAGES = {
  GET_PRIVATE_IP: "Could not get the private IP address",
  GET_PUBLIC_IP: "Could not get the public IP address",
  GET_PUBLIC_IPV4: "Failed to get private IPv4",
  GET_PUBLIC_IPV6: "Failed to get public IPv6",
  GET_PRIVATE_IPV4: "Failed to get public IPv4",
  GET_PRIVATE_IPV6: "Failed to get private IPv6",
  CLIPBOARD_NOT_SUPPORTED: "Clipboard API not supported",
  COPY_CLIPBOARD: (error: unknown) => `Failed to copy: ${error}`,
  PUSH_TO_STORAGE: "Failed to push to history",
  PARSE: (key: string | undefined) => `Failed to parse ${key ?? ""}`,
};

export const LOG_MESSAGES = {
  INIT: "[LOG]: INIT",
  HEARTBEAT: "[LOG]: HEARTBEAT",
  POPUP_OPENED: "[LOG]: POPUP OPENED ",
  POPUP_CLOSED: "[LOG]: POPUP CLOSED",
  FETCHING_IP: "[LOG]: FETCHING IP",
  IP_CHANGED: (ip: string) => `[LOG]: IP CHANGED: ${ip}`,
  LANGUAGE_CHANGED: (language?: string) =>
    `[LOG]: LANGUAGE CHANGED: ${language}`,
  SKIP: (idleState: chrome.idle.IdleState) =>
    `[LOG]: SKIPPED IP CHECK: SYSTEM IS ${idleState} `,
};
