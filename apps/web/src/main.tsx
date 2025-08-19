import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "@shared/styles/fonts.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
