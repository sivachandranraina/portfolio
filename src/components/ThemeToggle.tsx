import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored === "light" || stored === "dark") return stored;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore write errors
    }
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative inline-flex h-12 items-center gap-3 rounded-full border border-slate-200/70 bg-white/70 px-4 text-sm font-medium text-slate-700 shadow-lg shadow-slate-200/40 backdrop-blur transition dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:shadow-slate-900/40"
      aria-label="Toggle light and dark mode"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400/20 via-fuchsia-400/10 to-transparent opacity-0 transition group-hover:opacity-100" />
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-slate-200/70 bg-white/80 dark:border-slate-700/80 dark:bg-slate-950/80" />
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300 opacity-70 blur-md transition group-hover:opacity-100" />
        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm transition group-hover:rotate-12 dark:bg-slate-950 dark:text-slate-100">
          {theme === "dark" ? (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path
                d="M21 15.5A8.5 8.5 0 1 1 8.5 3a7 7 0 0 0 12.5 12.5Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          )}
        </span>
      </span>
      <span className="relative font-display tracking-[0.25em] text-xs uppercase">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
