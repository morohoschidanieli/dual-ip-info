import type { FC } from "react";
import { Heading, VStack, Text, Stack } from "@chakra-ui/react";
import { GitHubButton } from "@shared/components";
import { en } from "@constants";

export const Contribute: FC = () => {
  const { VITE_GITHUB_URL } = import.meta.env;
  
  return (
    <VStack
      maxWidth="4xl"
      direction={{ md: "row", base: "column" }}
      wrap="wrap"
      justifyContent="center"
      gap="10"
    >
      <Heading size="3xl">{en.contributeSubTitle}</Heading>
      <VStack
        width="full"
        flexDir="column"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Text>{en.contributeFirstParagraph}</Text>
        <Text>{en.contributeSecondParagraph}</Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          width={{ base: "full", md: "initial" }}
        >
          <GitHubButton
            width="auto"
            url={VITE_GITHUB_URL}
            borderRadius="xl"
            text={en.viewOnGitHub}
            size="lg"
          />
        </Stack>
      </VStack>
    </VStack>
  );
};
