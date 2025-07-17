import type { FC } from "react";
import { Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { FEATURES, en } from "@constants";
import { Feature } from "@components";

export const Features: FC = () => {
  return (
    <Flex wrap="wrap">
      <VStack>
        <Heading size="3xl">{en.features}</Heading>
        <HStack gap="6" maxWidth="5xl" wrap="wrap" justifyContent="center">
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
    </Flex>
  );
};
