import type { FC } from "react";
import {
  Text,
  Flex,
  Separator,
  Stack,
  Icon,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { FaGithub } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { FaChrome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { en, Routes } from "@constants";
import packageJSON from "@root/package.json";

export const Footer: FC = () => {
  const {
    VITE_APP_TITLE,
    VITE_BUY_ME_A_COFFEE_URL,
    VITE_GITHUB_URL,
    VITE_EXTENSION_URL,
  } = import.meta.env;
  const navigate = useNavigate();

  const handlePrivacyPolicyNavigation = () => {
    navigate(Routes.privacy);
  };

  return (
    <footer style={{ width: "100%", height: "100%" }}>
      <Separator />
      <Flex
        justifyContent="center"
        backgroundImage={`url(${"/footer-background.svg"})`}
        backgroundSize="cover"
        padding={{ base: "6", md: "8" }}
        height="full"
      >
        <Flex
          width="4xl"
          height="full"
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            fontSize="sm"
            direction={{ base: "column-reverse", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            width="full"
            gap="4"
          >
            <VStack
              justifyContent="flex-start"
              alignItems={{ base: "center", md: "flex-start" }}
              fontWeight="bold"
            >
              <Link onClick={handlePrivacyPolicyNavigation}>
                {en.privacyPolicy}
              </Link>
              <Text>
                {` © ${new Date().getFullYear()} ${VITE_APP_TITLE}. ${en.allRightsReserved} `}
              </Text>
            </VStack>
            <Stack direction="row" gap="4">
              <Link
                href={VITE_GITHUB_URL}
                target="_blank"
                title={en.viewOnGitHub}
              >
                <Icon size="lg">
                  <FaGithub />
                </Icon>
              </Link>
              <Link
                href={VITE_EXTENSION_URL}
                target="_blank"
                title={en.addToChrome}
              >
                <Icon size="lg">
                  <FaChrome />
                </Icon>
              </Link>
              <Link
                href={VITE_BUY_ME_A_COFFEE_URL}
                target="_blank"
                title={en.buyMeACoffee}
              >
                <Icon size="lg">
                  <CiCoffeeCup />
                </Icon>
              </Link>
              <Link
                href={`mailto:${packageJSON.author.email}`}
                title={en.contactMe}
              >
                <Icon size="lg">
                  <IoIosMail />
                </Icon>
              </Link>
            </Stack>
          </Stack>
        </Flex>
      </Flex>
    </footer>
  );
};
