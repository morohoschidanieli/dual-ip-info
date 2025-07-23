import type { FC } from "react";
import { Header } from "@components";
import { Heading, Stack, VStack, Text, Box } from "@chakra-ui/react";

import { en } from "@constants";

export const PrivacyPage: FC = () => {
  const sections = en.privacy.sections;

  return (
    <VStack paddingBottom="10" width="full">
      <VStack
        bgImage="url('/description-background.svg')"
        width="full"
        bgSize="cover"
        bgPos="center"
        paddingY="10"
      >
        <Stack
          gap="10"
          width="full"
          padding={{ base: "6", md: "10" }}
          alignSelf="center"
          maxWidth="5xl"
        >
          <Header />
          <VStack alignItems="flex-start" gap="2">
            <Heading size="4xl" fontWeight="bold">
              {en.privacy.title}
            </Heading>
            <Text color="gray.500">{en.privacy.lastUpdated}</Text>
            <Text>{en.privacy.intro}</Text>
          </VStack>
        </Stack>
      </VStack>
      <VStack
        maxWidth="5xl"
        padding={{ base: "6", md: "10" }}
        gap="10"
        align="stretch"
      >
        {Object.entries(sections).map(([key, section]) => (
          <Box key={key}>
            <Heading size="lg" marginBottom="2">
              {section.title}
            </Heading>
            {Array.isArray(section.content) ? (
              <VStack align="flex-start" gap="3">
                {section.content.map((text, idx) => (
                  <Text key={idx} fontSize="md" color="gray.700">
                    {text}
                  </Text>
                ))}
              </VStack>
            ) : (
              <Text fontSize="md" color="gray.700">
                {section.content}
              </Text>
            )}
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};
