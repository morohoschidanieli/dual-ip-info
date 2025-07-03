import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReduxProvider } from "@providers/Redux";
import { StyleProvider } from "@providers/Style";
import { RouterProvider } from "react-router";
import { routers } from "./Router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <StyleProvider>
        <RouterProvider router={routers} />
      </StyleProvider>
    </ReduxProvider>
  </StrictMode>
);
