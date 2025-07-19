import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { HStack, Select, useSelectContext } from "@chakra-ui/react";
import type { LanguageModel } from "@models";
import { Flag } from "@components";

export const SelectValue: FC = () => {
  const { t } = useTranslation();
  const select = useSelectContext();
  const items = select.selectedItems as Array<LanguageModel>;

  const { name, flagCode } = items[0];

  return (
    <Select.ValueText placeholder={t("selectLanguage")}>
      <HStack gap="2">
        <Flag fontSize="sm" code={flagCode} />
        {name}
      </HStack>
    </Select.ValueText>
  );
};
