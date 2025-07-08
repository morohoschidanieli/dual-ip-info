import type { FC } from "react";
import { Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import type { RootState } from "@store";

export interface FormattedTimeProps {
  date: Date;
}

export const FormattedTime: FC<FormattedTimeProps> = ({ date }) => {
  const timeFormat = useSelector(
    ({ settings }: RootState) => settings.timeFormat
  );

  return <Text>{format(date, timeFormat)}</Text>;
};
