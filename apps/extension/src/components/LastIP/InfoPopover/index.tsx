import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Popover, Portal, Stack, Text } from "@chakra-ui/react";
import { countryCodeToFlagEmoji } from "@utils";
import type { LocationModel } from "@models";

export interface InfoPopoverProps {
  data: LocationModel;
}

export const InfoPopover: FC<InfoPopoverProps> = ({ data }) => {
  const { t } = useTranslation();

  if (!data) {
    return (
      <Button
        variant="plain"
        fontSize="4xl"
        disabled
        title={t("noCountryDetected")}
      >
        <Text>{countryCodeToFlagEmoji(undefined)}</Text>
      </Button>
    );
  }

  return (
    <Popover.Root lazyMount unmountOnExit positioning={{ placement: "right" }}>
      <Popover.Trigger asChild>
        <Button variant="plain" fontSize="4xl" title={t("showInfo")}>
          {countryCodeToFlagEmoji(data.country_code)}
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body>
              <Popover.Title fontWeight="bold">
                <Text>{`📍${data.country}, ${data.city}, ${data.postal}`}</Text>
              </Popover.Title>
              <Stack gap="1.5" marginTop="4">
                <Text>{`🌍 ${t("continent")}: ${data.continent}`}</Text>
                <Text>{`🧭 ${t("latitude")}: ${data.latitude}`}</Text>
                <Text>{`🗺️ ${t("longitude")}: ${data.longitude}`}</Text>
              </Stack>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};
