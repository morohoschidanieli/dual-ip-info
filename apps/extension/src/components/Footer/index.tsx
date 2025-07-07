import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "@chakra-ui/react";
import version from "@root/version.txt?raw";
import type { RootState } from "@store";

export const Footer: FC = () => {
  const theme = useSelector(({ settings }: RootState) => settings.theme);
  const { t } = useTranslation();

  const { VITE_CHANGELOG_URL } = import.meta.env;

  return (
    <footer>
      <Link
        href={VITE_CHANGELOG_URL}
        target="_blank"
        variant="plain"
        fontWeight="semibold"
        fontSize="sm"
        color={theme === "dark" ? "gray.600" : "gray.400"}
      >
        {t("version")}: {version}
      </Link>
    </footer>
  );
};
