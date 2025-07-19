import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  DateFnsProvider,
  I18nProvider,
  ReduxProvider,
  StyleProvider,
} from "@providers";
import { RouterProvider } from "react-router";
import "flag-icons/css/flag-icons.min.css";
import { routes } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <StyleProvider>
        <I18nProvider>
          <DateFnsProvider>
            <RouterProvider router={routes} />
          </DateFnsProvider>
        </I18nProvider>
      </StyleProvider>
    </ReduxProvider>
  </StrictMode>
);
