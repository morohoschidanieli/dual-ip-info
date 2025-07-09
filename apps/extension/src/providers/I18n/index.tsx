import { type FC, type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { i18n } from "@configurations";

export interface I18nProps {
  children: ReactNode;
}

export const I18nProvider: FC<I18nProps> = ({ children }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
