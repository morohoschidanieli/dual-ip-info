import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Show, Stack, Text } from "@chakra-ui/react";
import { ButtonWithTextFeedback, NoIPAvailable } from "@components";

export interface IPV4Props {
  publicIP?: string;
  privateIP?: string;
  onCopyToClipboard?: (_ip: string) => void;
}

export const IPV4: FC<IPV4Props> = ({
  publicIP,
  privateIP,
  onCopyToClipboard,
}) => {
  const { t } = useTranslation();

  return (
    <Show when={publicIP || privateIP} fallback={<NoIPAvailable />}>
      <Stack>
        <Show when={publicIP}>
          <Stack>
            <Text fontWeight="bold">{`${t("yourPublicIP")}: `}</Text>
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

        <Show when={privateIP}>
          <Stack>
            <Text fontWeight="bold">{`${t("yourPrivateIP")}: `}</Text>
            <ButtonWithTextFeedback
              title={t("copyToClipboard")}
              width="100%"
              feedback={`${t("copiedToClipboard")} 🚀`}
              onClick={() => onCopyToClipboard?.(privateIP!)}
            >
              {privateIP}
            </ButtonWithTextFeedback>
          </Stack>
        </Show>
      </Stack>
    </Show>
  );
};
