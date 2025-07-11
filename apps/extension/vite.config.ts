import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
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
