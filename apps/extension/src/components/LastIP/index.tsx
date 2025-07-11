import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { FaGlobe } from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import {
  Box,
  Button,
  HStack,
  Icon,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { HistoryModel } from "@models";
import { FormattedDate, FormattedTime, InfoPopover } from "@components";
import { remove } from "@reducers/historyReducer";
import { selectAllowDeleteFromHistory } from "@reducers/settingsReducer";

export interface LastIPProps {
  data: HistoryModel;
}

export const LastIP: FC<LastIPProps> = ({ data }) => {
  const allowDeleteFromHistory = useSelector(selectAllowDeleteFromHistory);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleDeleteIP = (id: string) => {
    dispatch(remove(id));
  };

  return (
    <Box shadow="lg" padding="2" borderRadius="lg" fontSize="sm">
      <HStack>
        <VStack>
          <InfoPopover data={data.location} />
        </VStack>

        <VStack width="100%" paddingY="2">
          <VStack width="100%" gap="2">
            <HStack fontWeight="bold" width="100%" justifyContent="flex-start">
              <FormattedDate timestamp={data.timestamp} />
              <FormattedTime timestamp={data.timestamp} />
            </HStack>
            <HStack width="100%" justifyContent="flex-start">
              <HStack>
                <Icon>
                  <FaGlobe />
                </Icon>
                <Text>{data.ip.v4.public}</Text>
              </HStack>

              <Show when={data.ip.v4.private}>
                <HStack>
                  <Icon>
                    <RiGitRepositoryPrivateFill />
                  </Icon>
                  <Text>{data.ip.v4.private}</Text>
                </HStack>
              </Show>
            </HStack>
          </VStack>
        </VStack>

        <VStack>
          <Button
            variant="plain"
            title={!allowDeleteFromHistory ? t("cannotDelete") : t("delete")}
            disabled={!allowDeleteFromHistory}
            onClick={() => handleDeleteIP(data.id)}
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
