import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Show, Stack, Text } from "@chakra-ui/react";
import { ButtonWithTextFeedback, NoIPAvailable } from "@components";

export interface IPV6Props {
  publicIP?: string;
  onCopyToClipboard?: (_ip: string) => void;
}

export const IPV6: FC<IPV6Props> = ({ publicIP, onCopyToClipboard }) => {
  const { t } = useTranslation();

  return (
    <Show when={publicIP} fallback={<NoIPAvailable />}>
      <Stack>
        <Show when={publicIP}>
          <Stack>
            <Text fontWeight="bold">{`${t("yourPublicIPv6")}: `}</Text>
            <ButtonWithTextFeedback
              title={t("copyToClipboard")}
              width="100%"
              feedback={`${t("copiedToClipboard")} 🚀`}
              onClick={() => onCopyToClipboard?.(publicIP!)}
            >
              {publicIP}
            </ButtonWithTextFeedback>
          </Stack>
        </Show>
      </Stack>
    </Show>
  );
};
