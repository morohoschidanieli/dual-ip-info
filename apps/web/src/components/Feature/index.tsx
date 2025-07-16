import type { FC } from "react";
import { Box, Heading, HStack, Icon, VStack, Text } from "@chakra-ui/react";
import type { FeatureModel } from "@models";

export const Feature: FC<FeatureModel> = ({ title, description, icon }) => {
  return (
    <Box width="sm" padding="4">
      <HStack gap="4" alignItems="center">
        <Icon display="flex" size="2xl" justifyContent="center">
          {icon({ size: "2em" })}
        </Icon>
        <VStack justifyContent="flex-start" alignItems="flex-start">
          <Heading>{title}</Heading>
          <Text fontSize="sm">{description}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};
