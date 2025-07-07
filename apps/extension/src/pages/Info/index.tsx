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
import { Routes } from "@constants";
import { Header } from "@components";

export const InfoPage: FC = () => {
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
      <Box paddingY="4">
        <Heading size="xl" mb={2}>
          {t("aboutThisExtension")}
        </Heading>

        <Text fontSize="lg" mb={3}>
          {t("extensionDescription")}
        </Text>

        <Text fontSize="lg" mb={2}>
          {t("developedBy")}
        </Text>

        <HStack align="start" mt={4}>
          <Link width="100%" href="https://github.com/username/ip-extension">
            <Button width="100%" size="sm">
              <Icon>
                <FaGithub />
              </Icon>
              View on GitHub
            </Button>
          </Link>
          <Link width="100%" href="https://github.com/username/ip-extension">
            <Button width="100%" size="sm">
              <Icon>
                <FaGithub />
              </Icon>
              View on GitHub
            </Button>
          </Link>
        </HStack>
      </Box>
    </>
  );
};
