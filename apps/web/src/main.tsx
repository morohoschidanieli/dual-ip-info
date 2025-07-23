import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/encode-sans-semi-expanded/100.css";
import "@fontsource/encode-sans-semi-expanded/200.css";
import "@fontsource/encode-sans-semi-expanded/300.css";
import "@fontsource/encode-sans-semi-expanded/400.css";
import "@fontsource/encode-sans-semi-expanded/500.css";
import "@fontsource/encode-sans-semi-expanded/600.css";
import "@fontsource/encode-sans-semi-expanded/700.css";
import "@fontsource/encode-sans-semi-expanded/800.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
