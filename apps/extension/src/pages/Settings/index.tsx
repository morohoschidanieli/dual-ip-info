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
  Switch,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { Routes, Languages } from "@constants";
import { Header } from "@components";
import { HiCheck, HiX } from "react-icons/hi";

import { FiClock, FiSettings, FiWifi } from "react-icons/fi";

export const SettingsPage: FC = () => {
  const navigate = useNavigate();

  const languages = createListCollection({
    items: Object.values(Languages),
    itemToString: (language) => language,
    itemToValue: (language) => language,
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
        <Heading size="2xl">Settings</Heading>
      </Header>
      <Box display="flex" flexDirection="column" gap="6" paddingY="5">
        <Box display="flex" flexDirection="column" gap="3" fontSize="lg">
          <HStack display="flex">
            <Icon as={FiSettings} />
            <Heading>General</Heading>
          </HStack>

          <Fieldset.Root>
            <Fieldset.Legend fontSize="lg">Theme</Fieldset.Legend>
            <RadioGroup.Root size="lg">
              <HStack
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <RadioGroup.Item value="asd">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText fontSize="lg">Dark</RadioGroup.ItemText>
                </RadioGroup.Item>
                <RadioGroup.Item value="asd">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText fontSize="lg">Dark</RadioGroup.ItemText>
                </RadioGroup.Item>
                <RadioGroup.Item value="asd">
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText fontSize="lg">
                    System
                  </RadioGroup.ItemText>
                </RadioGroup.Item>
              </HStack>
            </RadioGroup.Root>
          </Fieldset.Root>
          <Select.Root size="lg" collection={languages}>
            <Select.HiddenSelect />
            <Select.Label fontSize="lg">Languages</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select language" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {languages.items.map((framework) => (
                    <Select.Item item={framework} key={framework}>
                      {framework}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
          <Select.Root size="lg" collection={languages}>
            <Select.HiddenSelect />
            <Select.Label fontSize="lg">Date/Time format</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select date/time format" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {languages.items.map((framework) => (
                    <Select.Item item={framework} key={framework}>
                      {framework}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
          <Switch.Root size="lg" display="flex" justifyContent="space-between">
            <Switch.Label fontSize="lg">
              Show public IP notifications
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
            <Switch.Label fontSize="lg">Show icon in toolbar</Switch.Label>
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
            <Heading>IP Management</Heading>
          </HStack>

          <Switch.Root size="lg" display="flex" justifyContent="space-between">
            <Switch.Label fontSize="lg">Enable IPV6</Switch.Label>
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
            <Heading>History</Heading>
          </HStack>

          <Select.Root size="lg" collection={languages}>
            <Select.HiddenSelect />
            <Select.Label fontSize="lg">Number of IPs to show</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select number of IPs to show" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {languages.items.map((framework) => (
                    <Select.Item item={framework} key={framework}>
                      {framework}
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
