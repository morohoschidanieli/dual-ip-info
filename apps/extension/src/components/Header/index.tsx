import type { FC, ReactNode } from "react";
import { Separator, Stack } from "@chakra-ui/react";

export interface HeaderProps {
  children: ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header>
      <Stack
        direction="row"
        justify="space-between"
        align="center"
        paddingBottom="5"
      >
        {children}
      </Stack>
      <Separator />
    </header>
  );
};
