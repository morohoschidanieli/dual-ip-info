export const ERROR_MESSAGES = {
  GET_PRIVATE_IP: "Could not get the private IP address",
  GET_PUBLIC_IP: "Could not get the public IP address",
  CLIPBOARD_NOT_SUPPORTED: "Clipboard API not supported",
  COPY_CLIPBOARD: (error: unknown) => `Failed to copy: ${error}`,
};
