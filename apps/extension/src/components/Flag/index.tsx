import type { ComponentProps } from "react";
import { Text } from "@chakra-ui/react";

export interface FlagProps extends ComponentProps<typeof Text> {
  code?: string;
}

export const Flag = (props: FlagProps) => {
  const { code, fontSize, ...rest } = props;

  return (
    <Text
      className={`fi fi-${code?.toLowerCase() ?? "xx"}`}
      fontSize={fontSize ?? "xl"}
      {...rest}
    />
  );
};
