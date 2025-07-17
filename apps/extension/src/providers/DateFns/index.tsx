import { type FC, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { setDefaultOptions } from "date-fns";
import { localeMap } from "@utils";

export interface DateFnsProviderProps {
  children: ReactNode;
}

export const DateFnsProvider: FC<DateFnsProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  const locale = localeMap[language];

  setDefaultOptions({ locale });

  return <>{children}</>;
};
