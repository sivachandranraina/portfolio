import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";
import CustomCursor from "./components/CustomCursor";

// Import Comic Version Components
import ComicHero from "./components/ComicHero";
import ComicAbout from "./components/ComicAbout";
import ComicSkills from "./components/ComicSkills";
import ComicExperience from "./components/ComicExperience";
import ComicContact from "./components/ComicContact";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    // Override pushState to notify page of navigation
    const originalPushState = window.history.pushState;
    window.history.pushState = function (state: any, title: string, url?: string | null) {
      originalPushState.call(window.history, state, title, url);
      handleLocationChange();
    };

    // Override replaceState to notify page of navigation
    const originalReplaceState = window.history.replaceState;
    window.history.replaceState = function (state: any, title: string, url?: string | null) {
      originalReplaceState.call(window.history, state, title, url);
      handleLocationChange();
    };

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  // Update root classes for layout settings (e.g. cursor: none)
  useEffect(() => {
    if (currentPath === "/comic") {
      document.documentElement.classList.add("comic-view");
    } else {
      document.documentElement.classList.remove("comic-view");
    }
  }, [currentPath]);

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
  };

  const isComic = currentPath === "/comic";

  if (isComic) {
    return (
      <div className="bg-[#09090b] text-[#fafafa] relative min-h-screen">
        <ComicHero onSwitchToModern={() => navigateTo("/")} />
        <ComicAbout />
        <ComicSkills />
        <ComicExperience />
        <ComicContact />
        <footer className="relative py-12 z-10 text-center text-xs uppercase tracking-[0.35em] text-[#71717a] font-semibold bg-[#09090b]">
          • Vibe coded in Comic version by Sivachandran •
        </footer>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 relative selection:bg-violet-500/30">
      <CustomCursor />
      {/* Background noise texture */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      <div className="fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <footer className="relative py-8 z-10 text-center text-xs uppercase tracking-[0.3em] text-slate-300">
        &#x2022; Vibe coded by Sivachandran &#x2022;
        <div className="pointer-events-none z-[-1] bg-slate-900 dark:bg-slate-950 absolute bottom-0 left-0 h-[780px] w-full overflow-hidden">
          <div className="absolute -bottom-20 h-[180px] w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400/45 via-emerald-400/35 to-fuchsia-400/40 blur-3xl animate-aurora" />
          <div className="absolute -bottom-24 h-[220px] w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-300/35 via-cyan-400/35 to-indigo-400/35 blur-3xl animate-auroraSlow" />
          <div className="absolute -bottom-10 h-[120px] left-1/2 w-[100%] -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-400/30 via-purple-400/30 to-violet-400/30 blur-2xl animate-aurora" />
        </div>
      </footer>
    </div>
  );
}

export default App;
