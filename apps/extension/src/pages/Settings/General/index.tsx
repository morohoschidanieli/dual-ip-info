import { type FC, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { FiSettings } from "react-icons/fi";
import { HiCheck, HiX } from "react-icons/hi";
import {
  Box,
  createListCollection,
  Fieldset,
  Flex,
  Heading,
  HStack,
  Icon,
  Portal,
  RadioGroup,
  Select,
  Span,
  Stack,
  Switch,
} from "@chakra-ui/react";
import type {
  CheckedChangeDetails,
  Date,
  Theme,
  Time,
  ValueChangeDetails,
} from "@models";
import { DateFormats, Languages, TimeFormats } from "@constants";
import { Flag, InfoTip } from "@components";
import {
  changeCheckInterval,
  changeCheckIPInBackground,
  changeDateFormat,
  changeShowPublicIPNotification,
  changeTheme,
  changeTimeFormat,
  changeUseSystemTheme,
  selectSettings,
} from "@reducers/settingsReducer";
import { SelectValue } from "./SelectValue";

export const General: FC = () => {
  const {
    dateFormat,
    timeFormat,
    showPublicIPNotification,
    checkIPInBackground,
    checkInterval,
    theme,
    useSystemTheme,
  } = useSelector(selectSettings);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const value = useMemo(() => {
    if (useSystemTheme) {
      return "system";
    }

    return theme;
  }, [theme, useSystemTheme]);

  const dateFormatListCollection = createListCollection({
    items: DateFormats,
    itemToString: (dateFormat) => dateFormat.label,
    itemToValue: (dateFormat) => dateFormat.formatString,
  });

  const timeFormatListCollection = createListCollection({
    items: TimeFormats,
    itemToString: (timeFormat) => timeFormat.label,
    itemToValue: (timeFormat) => timeFormat.formatString,
  });

  const languageListCollection = createListCollection({
    items: Languages,
    itemToString: (language) => ` ${t(`${language.name}`)}`,
    itemToValue: (language) => language.value,
  });

  const checkIntervalListCollection = createListCollection({
    items: [30, 60, 120, 300, 600],
    itemToString: (intervalInSeconds) => {
      const intervalInMinutes = intervalInSeconds / 60;
      const translation = intervalInMinutes > 1 ? t("minutes") : t("minute");

      return `${intervalInMinutes} ${translation.toLowerCase()}`;
    },
    itemToValue: (interval) => `${interval}`,
  });

  const handleThemeChange = ({ value }: ValueChangeDetails<string | null>) => {
    if (value === "system") {
      dispatch(changeUseSystemTheme(true));
    } else {
      dispatch(changeTheme({ theme: value as Theme }));
    }
  };

  const handleLanguageChange = ({ value }: ValueChangeDetails) => {
    i18n.changeLanguage(value[0]);
  };

  const handleDateFormatChange = ({ value }: ValueChangeDetails) => {
    dispatch(changeDateFormat(value[0] as Date));
  };

  const handleTimeFormatChange = ({ value }: ValueChangeDetails) => {
    dispatch(changeTimeFormat(value[0] as Time));
  };

  const handleShowPublicIPNotificationChange = ({
    checked,
  }: CheckedChangeDetails) => {
    dispatch(changeShowPublicIPNotification(checked));
  };

  const handleCheckIPInBackgroundChange = ({
    checked,
  }: CheckedChangeDetails) => {
    dispatch(changeCheckIPInBackground(checked));
  };

  const handleChangeIntervalChange = ({ value }: ValueChangeDetails) => {
    dispatch(changeCheckInterval(Number(value[0])));
  };

  return (
    <Box
      id="general"
      display="flex"
      flexDirection="column"
      gap="3"
      fontSize="sm"
    >
      <HStack display="flex">
        <Icon as={FiSettings} />
        <Heading>{t("general")}</Heading>
      </HStack>

      <Fieldset.Root>
        <Fieldset.Legend fontSize="sm">{t("theme")}</Fieldset.Legend>
        <RadioGroup.Root
          fontSize="sm"
          defaultValue={value}
          onValueChange={handleThemeChange}
        >
          <HStack
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <RadioGroup.Item value="dark">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText fontSize="sm">
                {t("dark")}
              </RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="light">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText fontSize="sm">
                {t("light")}
              </RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="system">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText fontSize="sm">
                {t("system")}
              </RadioGroup.ItemText>
            </RadioGroup.Item>
          </HStack>
        </RadioGroup.Root>
      </Fieldset.Root>
      <Select.Root
        collection={languageListCollection}
        defaultValue={[i18n.resolvedLanguage ?? i18n.language]}
        multiple={false}
        onValueChange={handleLanguageChange}
      >
        <Select.HiddenSelect />
        <Select.Label fontSize="sm">{t("language")}</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <SelectValue />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {languageListCollection.items.map(({ value, flagCode }) => (
                <Select.Item item={value} key={value}>
                  <Flex
                    alignItems="center"
                    direction="row"
                    justifyContent="center"
                    gap="2"
                  >
                    <Flag code={flagCode} fontSize="sm" />
                    {t(`languages.${value}`)}
                  </Flex>

                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Select.Root
        collection={dateFormatListCollection}
        multiple={false}
        defaultValue={[dateFormat]}
        onValueChange={handleDateFormatChange}
      >
        <Select.HiddenSelect />
        <Select.Label fontSize="sm">{t("dateFormat")}</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder={t("selectDateFormat")} />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {dateFormatListCollection.items.map(
                ({ formatString, label, example }) => (
                  <Select.Item item={formatString} key={formatString}>
                    <Stack gap="0">
                      <Select.ItemText>{label}</Select.ItemText>
                      <Span color="fg.muted" textStyle="xs">
                        {example}
                      </Span>
                    </Stack>
                    <Select.ItemIndicator />
                  </Select.Item>
                )
              )}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Select.Root
        collection={timeFormatListCollection}
        multiple={false}
        defaultValue={[timeFormat]}
        onValueChange={handleTimeFormatChange}
      >
        <Select.HiddenSelect />
        <Select.Label fontSize="sm">{t("timeFormat")}</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder={t("selectTimeFormat")} />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {timeFormatListCollection.items.map((timeFormat) => (
                <Select.Item
                  item={timeFormat.formatString}
                  key={timeFormat.formatString}
                >
                  <Stack gap="0">
                    <Select.ItemText>{timeFormat.label}</Select.ItemText>
                    <Span color="fg.muted" textStyle="xs">
                      {timeFormat.example}
                    </Span>
                  </Stack>
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Switch.Root
        display="flex"
        justifyContent="space-between"
        defaultChecked={showPublicIPNotification}
        onCheckedChange={handleShowPublicIPNotificationChange}
      >
        <Switch.Label fontSize="sm">
          {t("showPublicIpNotifications")}
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
      <Switch.Root
        display="flex"
        justifyContent="space-between"
        disabled={showPublicIPNotification === true}
        checked={checkIPInBackground}
        onCheckedChange={handleCheckIPInBackgroundChange}
      >
        <Switch.Label fontSize="sm">{t("checkIPInBackground")}</Switch.Label>
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
        collection={checkIntervalListCollection}
        multiple={false}
        disabled={!checkIPInBackground}
        defaultValue={[String(checkInterval)]}
        onValueChange={handleChangeIntervalChange}
      >
        <Select.HiddenSelect />
        <Select.Label fontSize="sm">
          {t("backgroundCheckInterval")}
          <InfoTip content={t("checkIPInBackgroundInfo")} />
        </Select.Label>

        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder={t("selectCheckInterval")} />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>

        <Select.Positioner>
          <Select.Content>
            {checkIntervalListCollection.items.map((intervalInSeconds) => (
              <Select.Item item={intervalInSeconds} key={intervalInSeconds}>
                {`${intervalInSeconds / 60} ${intervalInSeconds / 60 > 1 ? t("minutes").toLowerCase() : t("minute").toLowerCase()}`}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    </Box>
  );
};
