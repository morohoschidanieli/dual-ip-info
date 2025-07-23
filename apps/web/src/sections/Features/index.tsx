import type { FC } from "react";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import { FEATURES, en } from "@constants";
import { Feature } from "@components";

export const Features: FC = () => {
  return (
    <VStack gap="10">
      <Heading size="3xl">{en.features}</Heading>
      <HStack gap="8" wrap="wrap" justifyContent="center">
        {FEATURES.map((data, index) => (
          <Feature key={index} data={data} />
        ))}
      </HStack>
    </VStack>
  );
};
