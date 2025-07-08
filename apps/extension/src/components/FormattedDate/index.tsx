import type { FC } from "react";
import { Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import type { RootState } from "@store";

export interface FormattedDateProps {
  timestamp: number;
}

export const FormattedDate: FC<FormattedDateProps> = ({ timestamp }) => {
  const dateFormat = useSelector(
    ({ settings }: RootState) => settings.dateFormat
  );

  return <Text>{format(timestamp, dateFormat)}</Text>;
};
