import { createBrowserRouter } from "react-router";
import { HomePage } from "@pages/Home";
import { SettingsPage } from "@pages/Settings";
import { Root } from "@pages/Root";

export const routers = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "settings", Component: SettingsPage },
    ],
  },
]);
