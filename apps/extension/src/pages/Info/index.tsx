import type { FC } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import packageJSON from "@root/package.json";
import { Routes } from "@constants";
import { Header } from "@components";
import { FiInfo } from "react-icons/fi";

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
          <Text fontSize="lg">{t("extensionDescription")}</Text>
        </Box>
        <Box>
          <Text fontSize="lg">
            {t("developedBy")}
            <Link
              href={VITE_PERSONAL_WEBSITE_URL}
              target="_blank"
              variant="plain"
              fontWeight="semibold"
            >
              {packageJSON.author}
            </Link>
          </Text>
        </Box>
        <Box>
          <HStack align="start" mt={4}>
            <Link
              width="100%"
              href={VITE_GITHUB_URL}
              target="_blank"
              variant="plain"
            >
              <Button width="100%" size="sm">
                <Icon>
                  <FaGithub />
                </Icon>
                {t("viewOnGitHub")}
              </Button>
            </Link>
            <Link
              width="100%"
              href={VITE_BUY_ME_A_COFFEE_URL}
              target="_blank"
              variant="plain"
            >
              <Button
                width="100%"
                size="sm"
                backgroundColor="yellow.300"
                color="black"
              >
                <span role="img" aria-label="coffee">
                  ☕
                </span>
                {t("buyMeACoffee")}
              </Button>
            </Link>
          </HStack>
        </Box>
      </Box>
    </>
  );
};
