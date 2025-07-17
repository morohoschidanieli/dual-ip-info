import { createBrowserRouter } from "react-router";
import { Routes } from "@constants";
import { HomePage, InfoPage, NotFoundPage, Root, SettingsPage } from "@pages";

const { root, settings, info, any } = Routes;

export const routes = createBrowserRouter([
  {
    path: root,
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: settings, Component: SettingsPage },
      { path: info, Component: InfoPage },
      { path: any, Component: NotFoundPage },
    ],
  },
]);
