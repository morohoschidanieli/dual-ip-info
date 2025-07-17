import { type FC } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { Routes } from "@constants";
import { General, History, IpManagement } from "@pages";
import { Header } from "@components";

export const SettingsPage: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigateToHomepage = () => {
    navigate(Routes.root);
  };

  return (
    <>
      <Header>
        <IconButton
          size="md"
          variant="plain"
          aria-label="Back"
          title={t("back")}
          onClick={handleNavigateToHomepage}
        >
          <FaArrowLeft />
        </IconButton>
        <Heading size="2xl">{t("settings")}</Heading>
      </Header>
      <Box display="flex" flexDirection="column" gap="6" paddingY="5">
        <General />
        <IpManagement />
        <History />
      </Box>
    </>
  );
};
