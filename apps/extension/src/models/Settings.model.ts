import type { Date, Time } from "@models";

export type Theme = "light" | "dark";

export interface SettingsModel {
  theme: Theme;
  language?: string;
  useSystemTheme: boolean;
  showIPV6: boolean;
  canShowIPV6: boolean;
  showPublicIPNotification: boolean;
  numberOfIPsToShow: 3 | 6 | 9;
  allowDeleteFromHistory: boolean;
  checkIPInBackground: boolean;
  dateFormat: Date;
  timeFormat: Time;
}
