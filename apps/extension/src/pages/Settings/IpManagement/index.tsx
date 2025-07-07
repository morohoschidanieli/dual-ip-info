import type { FC } from "react";
import { Box, Heading, HStack, Icon, Switch } from "@chakra-ui/react";
import { FiWifi } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { HiCheck, HiX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@store";
import { changeShowIPV6 } from "@reducers/settingsReducer";

interface CheckedChangeDetails {
  checked: boolean;
}

export const IpManagement: FC = () => {
  const { showIPV6 } = useSelector(({ settings }: RootState) => settings);

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
      fontSize="lg"
    >
      <HStack display="flex">
        <Icon as={FiWifi} />
        <Heading>{t("ipManagement")}</Heading>
      </HStack>

      <Switch.Root
        size="lg"
        display="flex"
        justifyContent="space-between"
        defaultChecked={showIPV6}
        onCheckedChange={handleEnableIPV6Change}
      >
        <Switch.Label fontSize="lg">{t("enableIPV6")}</Switch.Label>
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
