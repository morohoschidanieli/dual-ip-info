import type { FC } from "react";
import { Outlet } from "react-router";
import { Box } from "@chakra-ui/react";

export const Root: FC = () => {
  return (
    <Box padding="5">
      <Outlet />
    </Box>
  );
};
