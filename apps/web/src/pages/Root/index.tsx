import type { FC } from "react";
import { Outlet, ScrollRestoration } from "react-router";
import { Stack } from "@chakra-ui/react";
import { Footer } from "@components";

export const Root: FC = () => {
  return (
    <Stack height="100svh">
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </Stack>
  );
};
