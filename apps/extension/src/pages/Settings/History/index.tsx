import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { FiClock } from "react-icons/fi";
import { HiCheck, HiX } from "react-icons/hi";
import {
  Box,
  createListCollection,
  Heading,
  HStack,
  Icon,
  Portal,
  Select,
  Switch,
} from "@chakra-ui/react";
import type { CheckedChangeDetails, ValueChangeDetails } from "@models";
import { InfoTip } from "@components";
import { selectHistoryLength } from "@reducers/historyReducer";
import {
  changeAllowDeleteFromHistory,
  changeNumberOfIPsToShow,
  selectAllowDeleteFromHistory,
  selectNumberOfIPsToShow,
} from "@reducers/settingsReducer";

export const History: FC = () => {
  const historyLength = useSelector(selectHistoryLength);
  const numberOfIPsToShow = useSelector(selectNumberOfIPsToShow);
  const allowDeleteFromHistory = useSelector(selectAllowDeleteFromHistory);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const historyOptions = createListCollection<3 | 6>({
    items: [3, 6],
    itemToString: (num) => num.toString(),
    itemToValue: (num) => num.toString(),
  });

  const handleNumberOfIPsToShowChange = ({ value }: ValueChangeDetails) => {
    dispatch(changeNumberOfIPsToShow(value[0] as unknown as 3 | 6));
  };

  const handleAllowDeleteFromHistoryChange = ({
    checked,
  }: CheckedChangeDetails) => {
    dispatch(changeAllowDeleteFromHistory(checked));
  };

  return (
    <Box
      id="history"
      display="flex"
      flexDirection="column"
      gap="3"
      fontSize="lg"
    >
      <HStack display="flex">
        <Icon as={FiClock} />
        <Heading>{t("history")}</Heading>
      </HStack>

      <Switch.Root
        size="lg"
        display="flex"
        justifyContent="space-between"
        defaultChecked={allowDeleteFromHistory}
        disabled={historyLength <= 1}
        onCheckedChange={handleAllowDeleteFromHistoryChange}
      >
        <Switch.Label fontSize="lg">
          {t("allowDeleteFromHistory")}
          <InfoTip size="lg" content={t("allowDeleteFromHistoryInfo")} />
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

      <Select.Root
        size="lg"
        collection={historyOptions}
        defaultValue={[String(numberOfIPsToShow)]}
        onValueChange={handleNumberOfIPsToShowChange}
      >
        <Select.HiddenSelect />
        <Select.Label fontSize="lg">{t("numbersIPsToShow")}</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder={t("selectNumbersOfIPsToShow")} />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {historyOptions.items.map((value) => (
                <Select.Item item={value} key={value}>
                  {value}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </Box>
  );
};
