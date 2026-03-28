import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <footer className="relative bg-slate-950 py-8 text-center text-xs uppercase tracking-[0.3em] text-slate-300">
        &#x2022; Vibe coded by Sivachandran &#x2022;
        <div className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-full overflow-hidden">
          <div className="absolute -bottom-20 h-[180px] w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/45 via-emerald-400/35 to-fuchsia-400/40 blur-3xl animate-aurora" />
          <div className="absolute -bottom-24 h-[220px] w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-300/35 via-cyan-400/35 to-indigo-400/35 blur-3xl animate-auroraSlow" />
          <div className="absolute -bottom-10 h-[120px] left-1/2 w-[100%] -translate-x-1/2 rounded-full bg-gradient-to-r from-rose-400/30 via-purple-400/30 to-sky-400/30 blur-2xl animate-aurora" />
        </div>
      </footer>
    </div>
  );
}

export default App;
