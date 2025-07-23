import type { FC } from "react";
import { StyleProvider } from "@providers";
import { RouterProvider } from "react-router";
import { router } from "./routes";

export const App: FC = () => {
  return (
    <StyleProvider>
      <RouterProvider router={router} />
    </StyleProvider>
  );
};
