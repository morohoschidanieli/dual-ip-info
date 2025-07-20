import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path, { resolve } from "path";
import * as dotenv from "dotenv";
import { viteStaticCopy } from "vite-plugin-static-copy";

dotenv.config({ path: resolve(__dirname, "../../.env.shared") });

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, "../../packages/shared/assets/favicon.png"),
          dest: "",
        },
        {
          src: resolve(__dirname, "./_locales"),
          dest: "",
        },
        {
          src: resolve(__dirname, "./src/assets"),
          dest: "",
        },
      ],
    }),
  ],
  build: {
    target: "esnext",
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        notification: path.resolve(
          __dirname,
          "src/serviceWorkers/notification.ts"
        ),
      },
      output: {
        entryFileNames(chunkInfo) {
          if (chunkInfo.name === "notification") {
            return "notification.js";
          }
          return "[name].[hash].js";
        },
      },
    },
  },
});
