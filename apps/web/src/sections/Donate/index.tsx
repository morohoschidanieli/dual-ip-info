import type { FC } from "react";
import { Heading, Stack, VStack, Text } from "@chakra-ui/react";
import { BuyMeACoffeeButton } from "@shared/components";
import { en } from "@constants";

export const Donate: FC = () => {
  const { VITE_BUY_ME_A_COFFEE_URL } = import.meta.env;

  return (
    <VStack
      direction={{ md: "row", base: "column" }}
      wrap="wrap"
      justifyContent="center"
      gap="6"
      maxWidth="4xl"
    >
      <Heading size="3xl">✨{en.donate}✨</Heading>
      <VStack
        width="full"
        flexDir="column"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Heading size="lg">🙌 {en.donateSubTitle}</Heading>
        <Text>{en.donateFirstParagraph}</Text>
        <Text>{en.donateSecondParagraph}</Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          width={{ base: "full", md: "initial" }}
        >
          <BuyMeACoffeeButton
            url={VITE_BUY_ME_A_COFFEE_URL}
            text={en.buyMeACoffee}
            borderRadius="xl"
            size="lg"
          />
        </Stack>
      </VStack>
    </VStack>
  );
};
