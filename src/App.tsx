import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import CustomCursor from "./components/CustomCursor";
import Navbar, {
  VIEWER_PROFILES,
  type ViewerProfile,
  WhoIsWatchingModal,
} from "./components/Navbar";
import NetflixIntroLoader from "./components/NetflixIntroLoader";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeProfile, setActiveProfile] = useState<ViewerProfile>(
    VIEWER_PROFILES[0]
  );
  const [whoIsWatchingOpen, setWhoIsWatchingOpen] = useState(false);
  const [serviceCode, setServiceCode] = useState("NKK-2015-2026");

  return (
    <div className="min-h-screen bg-[#141414] text-white relative selection:bg-[#E50914] selection:text-white">
      <CustomCursor />

      {/* Netflix "S" Badge Intro Loader */}
      <NetflixIntroLoader
        isOpen={showIntro}
        onComplete={() => setShowIntro(false)}
      />

      {/* Subtle Film Grain Texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Netflix Sticky Navigation Header */}
      <Navbar
        activeProfile={activeProfile}
        onSelectProfile={setActiveProfile}
        onOpenWhoIsWatching={() => setWhoIsWatchingOpen(true)}
      />

      {/* Who's Watching Profile Switcher Overlay */}
      <WhoIsWatchingModal
        isOpen={whoIsWatchingOpen}
        activeProfile={activeProfile}
        onSelect={setActiveProfile}
        onClose={() => setWhoIsWatchingOpen(false)}
      />

      {/* Main Streaming Content */}
      <main>
        <Hero greeting={activeProfile.greeting} />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Authentic Netflix Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#0b0b0b] py-14 text-[#808080]">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="text-sm">
            Questions or project inquiries? Call or email{" "}
            <a
              href="mailto:sivachandran94@gmail.com"
              className="text-[#b3b3b3] underline hover:text-white"
            >
              sivachandran94@gmail.com
            </a>
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
            <a href="#home" className="hover:underline">
              Featured Billboard
            </a>
            <a href="#about" className="hover:underline">
              Storyline &amp; Bio
            </a>
            <a href="#skills" className="hover:underline">
              Top 10 Tech Stack
            </a>
            <a href="#work" className="hover:underline">
              Seasons &amp; Episodes
            </a>
            <a
              href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Official Resume / CV
            </a>
            <a
              href="https://www.linkedin.com/in/sivachandran-nkk"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn Channel
            </a>
            <a
              href="https://instagram.com/sivachandranraina"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Instagram Stories
            </a>
            <button
              type="button"
              onClick={() => setWhoIsWatchingOpen(true)}
              className="text-left hover:underline"
            >
              Switch Viewer Profile
            </button>
            <button
              type="button"
              onClick={() => setShowIntro(true)}
              className="text-left text-[#E50914] font-semibold hover:underline"
            >
              Replay &ldquo;S&rdquo; Intro
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() =>
                setServiceCode(
                  serviceCode === "NKK-2015-2026"
                    ? "GENAI-ARCHITECT-99"
                    : "NKK-2015-2026"
                )
              }
              className="border border-[#808080] px-3 py-1.5 text-xs text-[#808080] transition hover:border-white hover:text-white"
            >
              Service Code: {serviceCode}
            </button>

            <div className="text-xs uppercase tracking-[0.3em] text-[#b3b3b3]">
              &#x2022; Vibe coded by{" "}
              <span className="font-bold text-[#E50914]">Sivachandran</span>{" "}
              &#x2022;
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
