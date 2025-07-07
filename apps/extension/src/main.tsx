import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nProvider, ReduxProvider, StyleProvider } from "@providers";
import { RouterProvider } from "react-router";
import { routes } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <StyleProvider>
        <I18nProvider>
          <RouterProvider router={routes} />
        </I18nProvider>
      </StyleProvider>
    </ReduxProvider>
  </StrictMode>
);
