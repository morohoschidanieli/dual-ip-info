import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { FiClock } from "react-icons/fi";
import {
  Box,
  createListCollection,
  Heading,
  HStack,
  Icon,
  Portal,
  Select,
} from "@chakra-ui/react";
import type { RootState } from "@store";
import { useDispatch, useSelector } from "react-redux";
import { changeNumberOfIPsToShow } from "@reducers/settingsReducer";

type ValueChangeDetails = {
  value: string | string[];
};

export const History: FC = () => {
  const { numberOfIPsToShow } = useSelector(
    ({ settings }: RootState) => settings
  );

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const historyOptions = createListCollection<5 | 10>({
    items: [5, 10],
    itemToString: (num) => num.toString(),
    itemToValue: (num) => num.toString(),
  });

  const handleNumberOfIPsToShowChange = ({ value }: ValueChangeDetails) => {
    dispatch(changeNumberOfIPsToShow(value[0] as unknown as 5 | 10));
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
