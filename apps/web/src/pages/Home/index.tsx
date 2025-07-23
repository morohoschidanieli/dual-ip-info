import type { FC } from "react";
import { Stack, VStack } from "@chakra-ui/react";
import {
  AboutPrivacy,
  Contribute,
  Description,
  Donate,
  Features,
} from "@sections";

export const HomePage: FC = () => {
  return (
    <VStack paddingBottom="10" width="full">
      <VStack bgImage="url('/description-background.svg')" width="full">
        <Stack
          padding={{ base: "6", md: "10" }}
          maxWidth="4xl"
          alignSelf="center"
          gap="10"
        >
          <Description />
        </Stack>
      </VStack>
      <VStack
        padding={{ base: "6", md: "10" }}
        maxWidth="5xl"
        alignSelf="center"
        gap="10"
      >
        <Features />
        <AboutPrivacy />
        <Contribute />
        <Donate />
      </VStack>
    </VStack>
  );
};
