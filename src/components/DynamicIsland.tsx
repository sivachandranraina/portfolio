import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, FileText, Sparkles } from "lucide-react";

type Theme = "light" | "dark";
const STORAGE_KEY = "portfolio-theme";

export default function DynamicIsland() {
  const [isExpanded, setIsExpanded] = useState(false);
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

  const toggleTheme = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent closing/opening island
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="fixed top-5 left-1/2 z-[999] -translate-x-1/2 flex items-center justify-center">
      <motion.div
        layout
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
        className="glass-panel cursor-pointer overflow-hidden rounded-[26px] py-2 px-3 shadow-lg select-none flex items-center gap-4 h-[44px]"
        style={{
          width: isExpanded ? "auto" : "210px",
          minWidth: isExpanded ? "380px" : "210px",
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {!isExpanded ? (
            // Compact State: Shows available pulse and mini toggle icon
            <motion.div
              key="compact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex w-full items-center justify-between px-2"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300">
                  Available
                </span>
              </div>
              
              <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800" />
              
              <div className="flex items-center gap-1.5 font-display text-[9px] font-bold uppercase tracking-[0.2em] text-violet-500">
                <Sparkles className="h-3 w-3 animate-pulse" />
                <span>Siva.nkk</span>
              </div>
            </motion.div>
          ) : (
            // Expanded State: Shows full status, branding, socials, CV, and theme switcher
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex w-full items-center justify-between px-2 gap-4"
            >
              {/* Left Logo / Branding */}
              <div className="flex items-center gap-2">
                <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-slate-800 dark:text-white">
                  Siva<span className="text-violet-500">.nkk</span>
                </span>
              </div>

              {/* Center Social Shortcuts */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/sivachandran-nkk"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-full p-1 text-slate-500 hover:text-violet-500 transition-colors dark:text-slate-400 dark:hover:text-violet-400"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>
                <a
                  href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-full p-1 text-slate-500 hover:text-violet-500 transition-colors dark:text-slate-400 dark:hover:text-violet-400 flex items-center gap-1"
                  title="Resume"
                >
                  <FileText className="h-4 w-4" />
                  <span className="text-[9px] font-bold uppercase tracking-wider">CV</span>
                </a>
              </div>

              <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800" />

              {/* Right Theme Switcher */}
              <button
                onClick={toggleTheme}
                className="relative flex h-7 w-12 items-center rounded-full bg-slate-200 p-0.5 dark:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                <motion.div
                  layout
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-sm"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {theme === "dark" ? (
                    <Moon className="h-3.5 w-3.5 text-violet-400" />
                  ) : (
                    <Sun className="h-3.5 w-3.5 text-amber-500" />
                  )}
                </motion.div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
