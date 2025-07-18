import type { FC } from "react";
import { Heading, HStack, VStack } from "@chakra-ui/react";
import { FEATURES, en } from "@constants";
import { Feature } from "@components";

export const Features: FC = () => {
  return (
    <VStack gap="6">
      <Heading size="3xl">{en.features}</Heading>
      <HStack gap="6" wrap="wrap" justifyContent="center">
        {FEATURES.map(({ title, description, icon }, index) => (
          <Feature
            key={index}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </HStack>
    </VStack>
  );
};
