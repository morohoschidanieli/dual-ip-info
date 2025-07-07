import { type FC } from "react";
import { useNavigate } from "react-router";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { Routes } from "@constants";
import { Header } from "@components";
import { useTranslation } from "react-i18next";
import { General } from "@pages/Settings/General";
import { IpManagement } from "@pages/Settings/IpManagement";
import { History } from "@pages/Settings/History";

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
