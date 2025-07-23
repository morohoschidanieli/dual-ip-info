import { type FC } from "react";
import { FaChrome } from "react-icons/fa";
import {
  Button,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Header } from "@components";
import { BuyMeACoffeeButton, GitHubButton } from "@shared/components";
import ApplicationSRC from "@assets/application_screenshot.png";
import { en } from "@constants";

export const Description: FC = () => {
  const { VITE_BUY_ME_A_COFFEE_URL, VITE_GITHUB_URL, VITE_EXTENSION_URL } =
    import.meta.env;

  return (
    <VStack gap="8">
      <Header />
      <Text textAlign="center" fontSize="xl" maxWidth="xl">
        {en.description}
      </Text>

      <Image
        width="auto"
        borderRadius="2xl"
        src={ApplicationSRC}
        alt="Application screenshot"
      />

      <Stack
        direction={{ base: "column", md: "row" }}
        width={{ base: "full", md: "initial" }}
      >
        <Link href={VITE_EXTENSION_URL} target="_blank" variant="plain">
          <Button borderRadius="xl" size="lg" width="100%">
            <Icon>
              <FaChrome />
            </Icon>
            {en.addToChrome}
          </Button>
        </Link>
        <GitHubButton
          url={VITE_GITHUB_URL}
          borderRadius="xl"
          text={en.viewOnGitHub}
          size="lg"
        />
        <BuyMeACoffeeButton
          url={VITE_BUY_ME_A_COFFEE_URL}
          text={en.buyMeACoffee}
          size="lg"
          borderRadius="xl"
        />
      </Stack>
    </VStack>
  );
};
