import type { Date, Time } from "@models";

export type Theme = "light" | "dark";

export interface SettingsModel {
  theme: Theme;
  useSystemTheme: boolean;
  showIPV6: boolean;
  canShowIPV6: boolean;
  showPublicIPNotification: boolean;
  showIconInToolbar: boolean;
  numberOfIPsToShow: 3 | 6;
  allowDeleteFromHistory: boolean;
  dateFormat: Date;
  timeFormat: Time;
}
