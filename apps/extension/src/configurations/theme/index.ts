import { defineConfig } from "@chakra-ui/react";
import type { Theme } from "@models";

export const themeConfiguration = (theme: Theme, mode: string) =>
  defineConfig({
    globalCss: {
      body: {
        margin: 0,
        display: "flex",
        placeItems: "center",
        minHeight: mode === "production" ? "320px" : undefined,
        backgroundColor: `${theme === "dark" ? "gray.900" : "gray.100"}`,
      },
      "#root": {
        maxWidth: "1280px",
        margin: "0 auto",
        width: "490px",
        height: "auto",
      },
    },
  });
