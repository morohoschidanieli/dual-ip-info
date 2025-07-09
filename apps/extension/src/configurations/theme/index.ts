import { defineConfig } from "@chakra-ui/react";
import type { Theme } from "@models";

export const themeConfiguration = (theme: Theme) =>
  defineConfig({
    globalCss: {
      body: {
        margin: 0,
        display: "flex",
        placeItems: "center",
        minWidth: "320px",
        backgroundColor: `${theme === "dark" ? "gray.900" : "gray.100"}`,
      },
      "#root": {
        maxWidth: "1280px",
        margin: "0 auto",
        width: "490px",
        height: "auto",
      },
    },
    theme: {
      textStyles: {},
    },
  });
