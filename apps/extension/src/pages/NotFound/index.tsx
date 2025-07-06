import type { FC } from "react";
import { Navigate } from "react-router";
import { Routes } from "@constants";

export const NotFoundPage: FC = () => (
  <Navigate to={Routes.root} replace={true} />
);
