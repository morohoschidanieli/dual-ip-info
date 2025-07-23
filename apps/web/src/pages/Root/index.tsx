import type { FC } from "react";
import { Outlet } from "react-router";
import { Stack } from "@chakra-ui/react";
import { Footer } from "@components";

export const Root: FC = () => {
  return (
    <Stack height="100svh">
      <Outlet />
      <Footer />
    </Stack>
  );
};
