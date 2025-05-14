import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StalkerApp } from "./StalkerApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StalkerApp />
  </StrictMode>
);
