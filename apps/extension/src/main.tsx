import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReduxProvider, StyleProvider } from "@providers";
import { RouterProvider } from "react-router";
import { routes } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <StyleProvider>
        <RouterProvider router={routes} />
      </StyleProvider>
    </ReduxProvider>
  </StrictMode>
);
