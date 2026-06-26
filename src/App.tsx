import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import CustomCursor from "./components/CustomCursor";
import LiquidBackground from "./components/LiquidBackground";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 relative selection:bg-violet-500/30 min-h-screen">
      {/* Immersive liquid morphing backdrop */}
      <LiquidBackground />

      {/* Modern interactive cursor */}
      <CustomCursor />

      {/* Screen noise texture overlay for analog feel */}
      <div
        className="pointer-events-none fixed inset-0 z-10 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.75%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Floating theme switch toggle */}
      <ThemeToggle />

      {/* Main content layouts */}
      <main className="relative z-10 w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Sleek bottom footer */}
      <footer className="relative z-20 py-16 text-center font-display text-[9px] uppercase tracking-[0.4em] text-slate-400 dark:text-slate-600 bg-transparent border-t border-slate-200/20 dark:border-slate-800/30">
        &#x2022; Vibe coded by Sivachandran &#x2022;
      </footer>
    </div>
  );
}

export default App;
