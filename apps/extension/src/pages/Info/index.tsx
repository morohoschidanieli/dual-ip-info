import type { FC } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import packageJSON from "@root/package.json";
import { Routes } from "@constants";
import { BuyMeACoffeeButton, GitHubButton } from "@shared/components";
import { Header } from "@components";

export const InfoPage: FC = () => {
  const {
    VITE_BUY_ME_A_COFFEE_URL,
    VITE_GITHUB_URL,
    VITE_PERSONAL_WEBSITE_URL,
  } = import.meta.env;
  const { t } = useTranslation();
  const navigate = useNavigate();

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
        <Heading size="2xl">{t("info")}</Heading>
      </Header>
      <Box display="flex" paddingY="4" flexDirection="column" gap="3">
        <Box>
          <HStack display="flex">
            <Icon>
              <FiInfo />
            </Icon>
            <Heading size="xl">{t("aboutThisExtension")}</Heading>
          </HStack>
        </Box>
        <Box>
          <Text fontSize="sm">{t("extensionDescription")}</Text>
        </Box>
        <Box>
          <Text fontSize="sm">
            {t("developedBy")}
            <Link
              href={VITE_PERSONAL_WEBSITE_URL}
              target="_blank"
              variant="plain"
              fontWeight="semibold"
            >
              {packageJSON.author.name}
            </Link>
          </Text>
        </Box>
        <Box>
          <HStack align="start" mt={4}>
            <GitHubButton url={VITE_GITHUB_URL} text={t("viewOnGitHub")} />
            <BuyMeACoffeeButton
              url={VITE_BUY_ME_A_COFFEE_URL}
              text={t("buyMeACoffee")}
            />
          </HStack>
        </Box>
      </Box>
    </>
  );
};
