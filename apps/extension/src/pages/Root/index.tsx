import { type FC } from "react";
import { Outlet } from "react-router";
import { Box } from "@chakra-ui/react";
import { Footer } from "@components";
import { useConnectToChrome } from "@hooks/useConnectToChrome";
import { useSyncLanguage } from "@hooks/useSyncLanguage";

export const Root: FC = () => {
  const env = import.meta.env;

  useConnectToChrome(env);
  useSyncLanguage();

  return (
    <Box padding="5">
      <Outlet />
      <Footer />
    </Box>
  );
};
