import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import * as dotenv from "dotenv";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

dotenv.config({ path: resolve(__dirname, "../../.env.shared") });

// https://vite.dev/config/
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
      ],
    }),
  ],
  base: "/",
});
