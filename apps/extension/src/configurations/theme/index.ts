import { defineConfig } from "@chakra-ui/react";
import type { Theme } from "@models/ApplicationSettings.model";

// export const themeConfiguration = defineConfig({
//   theme: {
//     tokens: {
//       colors: {
//         bg: {
//           50: { value: "#f8fafc" },
//           100: { value: "#f1f5f9" },
//           200: { value: "#e2e8f0" },
//           300: { value: "#cbd5e1" },
//           400: { value: "#94a3b8" },
//           500: { value: "#64748b" },
//           600: { value: "#475569" },
//           700: { value: "#334155" },
//           800: { value: "#1e293b" },
//           900: { value: "#0f172a" },
//         },
//         accent: {
//           50: { value: "#e0f2fe" },
//           100: { value: "#bae6fd" },
//           200: { value: "#7dd3fc" },
//           300: { value: "#38bdf8" },
//           400: { value: "#0ea5e9" },
//           500: { value: "#0284c7" },
//           600: { value: "#0369a1" },
//           700: { value: "#075985" },
//           800: { value: "#0c4a6e" },
//           900: { value: "#0a3443" },
//         },
//         success: {
//           100: { value: "#d1fae5" },
//           500: { value: "#10b981" },
//         },
//         danger: {
//           100: { value: "#fee2e2" },
//           500: { value: "#ef4444" },
//         },
//         warning: {
//           100: { value: "#fef9c3" },
//           500: { value: "#eab308" },
//         },
//         text: {
//           main: { value: "#1b2134" },
//           muted: { value: "#475569" },
//         },
//       },
//     },
//     semanticTokens: {
//       colors: {
//         bg: {
//           DEFAULT: {
//             value: { _light: "{colors.bg.100}", _dark: "{colors.bg.900}" },
//           },
//         },
//         "bg.surface": {
//           value: { _light: "{colors.white}", _dark: "{colors.bg.800}" },
//         },
//         "bg.subtle": {
//           value: { _light: "{colors.bg.50}", _dark: "{colors.bg.700}" },
//         },
//         "bg.accent": {
//           value: {
//             _light: "{colors.accent.500}",
//             _dark: "{colors.accent.300}",
//           },
//         },
//         text: {
//           DEFAULT: {
//             value: { _light: "{colors.text.main}", _dark: "#f1f5f9" },
//           },
//         },
//         "text.muted": {
//           value: { _light: "{colors.text.muted}", _dark: "#cbd5e1" },
//         },
//       },
//     },
//   },
// });
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
        width: "460px",
        height: "auto",
      },
    },
    theme: {
      textStyles: {},
    },
  });
