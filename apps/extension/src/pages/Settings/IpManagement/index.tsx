import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiWifi } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { HiCheck, HiX } from "react-icons/hi";
import { Box, Heading, HStack, Icon, Switch } from "@chakra-ui/react";
import type { CheckedChangeDetails } from "@models";
import { InfoTip } from "@components";
import {
  changeShowIPV6,
  selectCanShowIPV6,
  selectShowIPV6,
} from "@reducers/settingsReducer";

export const IpManagement: FC = () => {
  const showIPV6 = useSelector(selectShowIPV6);
  const canShowIPV6 = useSelector(selectCanShowIPV6);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleEnableIPV6Change = ({ checked }: CheckedChangeDetails) => {
    dispatch(changeShowIPV6(checked));
  };

  return (
    <Box
      id="ip-management"
      display="flex"
      flexDirection="column"
      gap="3"
      fontSize="sm"
    >
      <HStack display="flex">
        <Icon as={FiWifi} />
        <Heading>{t("ipManagement")}</Heading>
      </HStack>

      <Switch.Root
        display="flex"
        justifyContent="space-between"
        disabled={!canShowIPV6}
        defaultChecked={showIPV6}
        onCheckedChange={handleEnableIPV6Change}
      >
        <Switch.Label fontSize="sm">
          {t("enableIPV6")}
          <InfoTip content={t("visibleWhenIPv6Available")} />
        </Switch.Label>
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb>
            <Switch.ThumbIndicator fallback={<HiX color="black" />}>
              <HiCheck />
            </Switch.ThumbIndicator>
          </Switch.Thumb>
        </Switch.Control>
      </Switch.Root>
    </Box>
  );
};
