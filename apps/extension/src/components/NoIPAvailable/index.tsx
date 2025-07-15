import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { EmptyState, VStack } from "@chakra-ui/react";

export const NoIPAvailable: FC = () => {
  const { t } = useTranslation();

  return (
    <EmptyState.Root>
      <EmptyState.Content>
        <VStack textAlign="center">
          <EmptyState.Title>{t("ipDetectionFailedTitle")}</EmptyState.Title>
          <EmptyState.Description>
            {t("ipDetectionFailedDescription")}
          </EmptyState.Description>
        </VStack>
      </EmptyState.Content>
    </EmptyState.Root>
  );
};
