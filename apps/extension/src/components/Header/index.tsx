import { Separator, Stack } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

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
