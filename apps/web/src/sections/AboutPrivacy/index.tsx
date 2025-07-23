import type { FC } from "react";
import { Heading, VStack, Text, Flex } from "@chakra-ui/react";
import { PrivacyCard } from "@sections";
import { en, PRIVACY_CARDS } from "@constants";

export const AboutPrivacy: FC = () => {
  return (
    <VStack
      maxWidth="4xl"
      direction={{ md: "row", base: "column" }}
      wrap="wrap"
      justifyContent="center"
      gap="10"
    >
      <Heading size="3xl" textAlign="center">
        {en.privacySubTitle}
      </Heading>
      <VStack gap="4">
        <VStack justifyContent="flex-start" alignItems="flex-start">
          <Text>{en.privacyFirstParagraph}</Text>
          <Text>{en.privacySecondParagraph}</Text>
        </VStack>

        <Flex
          gap="6"
          wrap="wrap"
          justifyContent="center"
          alignItems="center"
          align="stretch"
          paddingY="6"
        >
          {PRIVACY_CARDS.map((data) => (
            <PrivacyCard key={data.title} data={data} />
          ))}
        </Flex>
      </VStack>
    </VStack>
  );
};
