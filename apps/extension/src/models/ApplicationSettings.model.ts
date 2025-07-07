export type Theme = "light" | "dark";

export interface ApplicationSettingsModel {
  theme: Theme;
  useSystemTheme: boolean;
  showIPV6: boolean;
  showPublicIPNotification: boolean;
  showIconInToolbar: boolean;
  numberOfIPsToShow: 5 | 10;
}
