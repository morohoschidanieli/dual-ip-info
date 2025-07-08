import type { FC } from "react";
import { Box, Button, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaGlobe } from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { InfoPopover } from "@components/LastIP/InfoPopover";
import { FormattedDate, FormattedTime } from "@components";
import { useSelector } from "react-redux";
import type { RootState } from "@store";

export interface LastIPProps {
  test?: string;
}

export const LastIP: FC<LastIPProps> = () => {
  const allowDeleteFromHistory = useSelector(
    ({ settings }: RootState) => settings.allowDeleteFromHistory
  );

  return (
    <Box shadow="lg" padding="2" borderRadius="lg" fontSize="sm">
      <HStack>
        <VStack>
          <InfoPopover />
        </VStack>

        <VStack width="100%" paddingY="2">
          <VStack width="100%" gap="2">
            <HStack
              fontSize="md"
              fontWeight="bold"
              width="100%"
              justifyContent="flex-start"
            >
              <FormattedDate timestamp={Date.now()} />
              <FormattedTime timestamp={Date.now()} />
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

        <VStack padding="3">
          <Button
            variant="plain"
            title="Delete"
            disabled={!allowDeleteFromHistory}
          >
            <Icon
              size="lg"
              _hover={{ color: allowDeleteFromHistory ? "red.600" : undefined }}
            >
              <MdDeleteForever />
            </Icon>
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};
