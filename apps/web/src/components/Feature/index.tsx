import type { FC } from "react";
import { Box, Heading, HStack, Icon, VStack, Text } from "@chakra-ui/react";
import type { FeatureModel } from "@models";

export interface FeatureProps {
  data: FeatureModel;
}

export const Feature: FC<FeatureProps> = ({ data }) => {
  const { color, icon, title, description } = data;

  return (
    <Box maxWidth="md" padding={{ base: "6px", md: "10px" }}>
      <HStack
        gap="6"
        paddingY="4"
        paddingX="6"
        alignItems="center"
        shadow="xs"
        borderRadius="lg"
      >
        <Box
          padding={{ base: "10px", md: "20px" }}
          borderRadius="md"
          backgroundColor={`${color}.200/20`}
          color={`${color}.400`}
        >
          <Icon
            display="flex"
            justifyContent="center"
            backgroundColor="transparent"
          >
            {icon({ size: "30px" })}
          </Icon>
        </Box>

        <VStack justifyContent="flex-start" alignItems="flex-start">
          <Heading fontWeight="bold">{title}</Heading>
          <Text fontSize="sm">{description}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};
