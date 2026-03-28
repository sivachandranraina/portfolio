import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const STORAGE_KEY = "portfolio-theme";

const applyInitialTheme = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored ?? (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  } catch {
    // no-op: fall back to default styles
  }
};

applyInitialTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
