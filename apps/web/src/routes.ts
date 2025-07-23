import { createBrowserRouter } from "react-router";
import { Routes } from "@constants";
import { HomePage, NotFoundPage, PrivacyPage, Root } from "@pages";

const { root, privacy, any } = Routes;

export const router = createBrowserRouter([
  {
    path: root,
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: privacy, Component: PrivacyPage },
      { path: any, Component: NotFoundPage },
    ],
  },
]);
