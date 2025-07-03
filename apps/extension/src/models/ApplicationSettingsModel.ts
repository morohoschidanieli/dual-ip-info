import type { Languages } from "@constants/languages";

export type Language = keyof typeof Languages;
export type Theme = "light" | "dark" | "system";

export interface ApplicationSettingsModel {
  theme?: Theme;
  language: Language;
  showIPV6: boolean;
  showPublicIPNotification: boolean;
  showIconInToolbar: boolean;
  numberOfIPsToShow: 5 | 10;
}
