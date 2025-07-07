import type { FC } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  createListCollection,
  Fieldset,
  Heading,
  HStack,
  Icon,
  IconButton,
  Portal,
  RadioGroup,
  Select,
  Span,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { Routes, Languages, DateFormats, TimeFormats } from "@constants";
import { Header } from "@components";
import { HiCheck, HiX } from "react-icons/hi";

import { FiClock, FiSettings, FiWifi } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export const SettingsPage: FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const languages = createListCollection({
    items: Languages,
    itemToString: (language) => `${language.flag} ${t(`${language.name}`)}`,
    itemToValue: (language) => language.value,
  });

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

  const handleNavigateToHomepage = () => {
    navigate(Routes.root);
  };

  return (
    <>
      <Header>
        <IconButton
          size="md"
          variant="plain"
          aria-label="Back"
          onClick={handleNavigateToHomepage}
        >
          <FaArrowLeft />
        </IconButton>
        <Heading size="2xl">{t("settings")}</Heading>
      </Header>
      <Box display="flex" flexDirection="column" gap="6" paddingY="5">
        <Box display="flex" flexDirection="column" gap="3" fontSize="lg">
          <HStack display="flex">
            <Icon as={FiSettings} />
            <Heading>{t("general")}</Heading>
          </HStack>

          <Fieldset.Root>
            <Fieldset.Legend fontSize="lg">{t("theme")}</Fieldset.Legend>
            <RadioGroup.Root size="lg">
              <HStack
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <RadioGroup.Item value="asd">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText fontSize="lg">
                    {t("dark")}
                  </RadioGroup.ItemText>
                </RadioGroup.Item>
                <RadioGroup.Item value="asd">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText fontSize="lg">
                    {t("light")}
                  </RadioGroup.ItemText>
                </RadioGroup.Item>
                <RadioGroup.Item value="asd">
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
            multiple={false}
            defaultValue={[i18n.language]}
            onValueChange={(da) => i18n.changeLanguage(da.value[0])}
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
                  {languages.items.map((language) => (
                    <Select.Item item={language.value} key={language.value}>
                      {language.flag}
                      {t(`${language.name}`)}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
          <Select.Root size="lg" collection={dateFormats}>
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
                  {dateFormats.items.map((dateFormat) => (
                    <Select.Item
                      item={dateFormat.formatString}
                      key={dateFormat.formatString}
                    >
                      <Stack gap="0">
                        <Select.ItemText>{dateFormat.label}</Select.ItemText>
                        <Span color="fg.muted" textStyle="xs">
                          {dateFormat.example}
                        </Span>
                      </Stack>
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
          <Select.Root size="lg" collection={timeFormats}>
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
          <Switch.Root size="lg" display="flex" justifyContent="space-between">
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
          <Switch.Root size="lg" display="flex" justifyContent="space-between">
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
        <Box display="flex" flexDirection="column" gap="3" fontSize="lg">
          <HStack display="flex">
            <Icon as={FiWifi} />
            <Heading>{t("ipManagement")}</Heading>
          </HStack>

          <Switch.Root size="lg" display="flex" justifyContent="space-between">
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
        <Box display="flex" flexDirection="column" gap="3" fontSize="lg">
          <HStack display="flex">
            <Icon as={FiClock} />
            <Heading>{t("history")}</Heading>
          </HStack>

          <Select.Root size="lg" collection={languages}>
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
                  {languages.items.map((language) => (
                    <Select.Item item={language.value} key={language.value}>
                      {language.name}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Box>
      </Box>
    </>
  );
};
