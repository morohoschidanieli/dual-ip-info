import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Popover, Portal, Stack, Text } from "@chakra-ui/react";

export interface InfoPopoverProps {
  test?: string;
}

export const InfoPopover: FC<InfoPopoverProps> = () => {
  const { t } = useTranslation();

  const countryCodeToFlagEmoji = (code: string): string => {
    return code
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(char.charCodeAt(0) + 127397)
      );
  };

  return (
    <Popover.Root lazyMount unmountOnExit positioning={{ placement: "left" }}>
      <Popover.Trigger asChild>
        <Button variant="plain" fontSize="4xl" title="Show info">
          {countryCodeToFlagEmoji("ro")}
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body>
              <Popover.Title fontWeight="bold">
                <Text>📍Romania, Cluj-Napoca, 400133</Text>
              </Popover.Title>
              <Stack gap="1.5" marginTop="4">
                <Text>{`🌍 ${t("continent")}: Europe`}</Text>
                <Text>{`🧭 ${t("latitude")}: 46.7712101`}</Text>
                <Text>{`🗺️ ${t("longitude")}: 23.6236353`}</Text>
              </Stack>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};
