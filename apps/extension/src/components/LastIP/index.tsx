import type { FC } from "react";
import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaGlobe, FaHistory } from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { InfoPopover } from "@components/LastIP/InfoPopover";
import { FormattedDate, FormattedTime } from "@components";

export interface LastIPProps {
  test?: string;
}

export const LastIP: FC<LastIPProps> = () => {
  return (
    <Box shadow="lg" padding="2" borderRadius="lg" fontSize="sm">
      <HStack>
        <VStack padding="3">
          <Icon size="lg">
            <FaHistory />
          </Icon>
        </VStack>
        <VStack width="100%" paddingY="2">
          <VStack width="100%" gap="2">
            <HStack
              fontSize="md"
              fontWeight="bold"
              width="100%"
              justifyContent="flex-start"
            >
              <FormattedDate date={new Date()} />
              <FormattedTime date={new Date()} />
            </HStack>
            <HStack width="100%" justifyContent="flex-start">
              <HStack>
                <Icon>
                  <FaGlobe />
                </Icon>
                <Text>192.168.1.2</Text>
              </HStack>

              <HStack>
                <Icon>
                  <RiGitRepositoryPrivateFill />
                </Icon>
                <Text>192.168.1.2</Text>
              </HStack>
            </HStack>
          </VStack>
        </VStack>
        <VStack>
          <InfoPopover />
        </VStack>
      </HStack>
    </Box>
  );
};
