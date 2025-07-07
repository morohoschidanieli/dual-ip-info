import { useMemo, type FC } from "react";
import {
  Box,
  createListCollection,
  Fieldset,
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
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { FiSettings } from "react-icons/fi";
import { HiCheck, HiX } from "react-icons/hi";
import {
  changeDateFormat,
  changeShowIconInToolbar,
  changeTheme,
  changeTimeFormat,
  changeUseSystemTheme,
} from "@reducers/settingsReducer";
import type { RootState } from "@store";
import type { Date, Theme, Time } from "@models";
import { DateFormats, TimeFormats, Languages } from "@constants";

type ValueChangeDetails = {
  value: string | string[];
};

interface CheckedChangeDetails {
  checked: boolean;
}

interface ValueChangeDetails2 {
  value: string | null;
}

export const General: FC = () => {
  const { dateFormat, timeFormat, showIconInToolbar, theme, useSystemTheme } =
    useSelector(({ settings }: RootState) => settings);

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const value = useMemo(() => {
    if (useSystemTheme) {
      return "system";
    }

    return theme;
  }, [theme, useSystemTheme]);

  const dateFormats = createListCollection({
    items: DateFormats,
    itemToString: (dateFormat) => dateFormat.label,
    itemToValue: (dateFormat) => dateFormat.formatString,
  });

  const timeFormats = createListCollection({
    items: TimeFormats,
    itemToString: (timeFormat) => timeFormat.label,
    itemToValue: (timeFormat) => timeFormat.formatString,
  });

  const languages = createListCollection({
    items: Languages,
    itemToString: (language) => `${language.flag} ${t(`${language.name}`)}`,
    itemToValue: (language) => language.value,
  });

  const handleThemeChange = ({ value }: ValueChangeDetails2) => {
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

  const handleShowIconInToolbarChange = ({ checked }: CheckedChangeDetails) => {
    dispatch(changeShowIconInToolbar(checked));
  };

  return (
    <Box
      id="general"
      display="flex"
      flexDirection="column"
      gap="3"
      fontSize="lg"
    >
      <HStack display="flex">
        <Icon as={FiSettings} />
        <Heading>{t("general")}</Heading>
      </HStack>

      <Fieldset.Root>
        <Fieldset.Legend fontSize="lg">{t("theme")}</Fieldset.Legend>
        <RadioGroup.Root
          size="lg"
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
              <RadioGroup.ItemText fontSize="lg">
                {t("dark")}
              </RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="light">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText fontSize="lg">
                {t("light")}
              </RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="system">
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText fontSize="lg">
                {t("system")}
              </RadioGroup.ItemText>
            </RadioGroup.Item>
          </HStack>
        </RadioGroup.Root>
      </Fieldset.Root>
      <Select.Root
        size="lg"
        collection={languages}
        defaultValue={[i18n.language]}
        multiple={false}
        onValueChange={handleLanguageChange}
      >
        <Select.HiddenSelect />
        <Select.Label fontSize="lg">{t("language")}</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder={t("selectLanguage")} />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {languages.items.map(({ value, flag, name }) => (
                <Select.Item item={value} key={value}>
                  {flag}
                  {t(`${name}`)}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Select.Root
        size="lg"
        collection={dateFormats}
        multiple={false}
        defaultValue={[dateFormat]}
        onValueChange={handleDateFormatChange}
      >
        <Select.HiddenSelect />
        <Select.Label fontSize="lg">{t("dateFormat")}</Select.Label>
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
              {dateFormats.items.map(({ formatString, label, example }) => (
                <Select.Item item={formatString} key={formatString}>
                  <Stack gap="0">
                    <Select.ItemText>{label}</Select.ItemText>
                    <Span color="fg.muted" textStyle="xs">
                      {example}
                    </Span>
                  </Stack>
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
      <Select.Root
        size="lg"
        collection={timeFormats}
        multiple={false}
        defaultValue={[timeFormat]}
        onValueChange={handleTimeFormatChange}
      >
        <Select.HiddenSelect />
        <Select.Label fontSize="lg">{t("timeFormat")}</Select.Label>
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
              {timeFormats.items.map((timeFormat) => (
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
        size="lg"
        display="flex"
        justifyContent="space-between"
        disabled
      >
        <Switch.Label fontSize="lg">
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
        size="lg"
        display="flex"
        justifyContent="space-between"
        defaultChecked={showIconInToolbar}
        onCheckedChange={handleShowIconInToolbarChange}
      >
        <Switch.Label fontSize="lg">{t("showIconInToolbar")}</Switch.Label>
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
