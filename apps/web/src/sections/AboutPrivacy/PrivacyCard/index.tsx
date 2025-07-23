import type { FC } from "react";
import { Box, Heading, Icon, VStack, Text } from "@chakra-ui/react";
import type { PrivacyCardModel } from "@models";

export interface PrivacyCardProps {
  data: PrivacyCardModel;
}

export const PrivacyCard: FC<PrivacyCardProps> = ({ data }) => {
  const { title, content, bg, color, icon } = data;

  return (
    <Box
      flex="1 1 250px"
      padding="6"
      shadow="md"
      borderRadius="lg"
      minW="250px"
      minHeight={{ base: "auto", md: "220px" }}
    >
      <VStack textAlign="center" height="full">
        <Box
          padding="20px"
          borderRadius="md"
          backgroundColor={`${bg}.200/20`}
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
        <Heading>{title}</Heading>
        <Text>{content}</Text>
      </VStack>
    </Box>
  );
};
