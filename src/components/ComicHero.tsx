import profileImage from "../assets/bg.jpg";
import { motion } from "framer-motion";

interface ComicHeroProps {
  onSwitchToModern: () => void;
}

export default function ComicHero({ onSwitchToModern }: ComicHeroProps) {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full bg-[#09090b] text-[#fafafa] font-['Space_Grotesk'] overflow-hidden border-b comic-grid-border">
      {/* Top Metadata Row */}
      <div className="w-full border-b comic-grid-border py-3 px-6 md:px-12 flex justify-between items-center text-[10px] md:text-xs tracking-[0.2em] text-[#a1a1aa] uppercase">
        <div className="flex items-center gap-4">
          <span>MAA • 13.08° N 80.27° E</span>
          <span className="hidden md:inline text-neutral-800">|</span>
          <span className="hidden md:inline">UTC+5:30</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#b5ff14] animate-pulse"></span>
          <span>OPEN FOR AI DEVELOPMENT — 2026</span>
        </div>
      </div>

      {/* Main Grid Header */}
      <div className="w-full grid grid-cols-1 md:grid-cols-[1.5fr_1fr] border-b comic-grid-border">
        {/* Name Title Block */}
        <div className="p-6 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r comic-grid-border">
          <span className="text-xs uppercase tracking-[0.3em] text-[#b5ff14] mb-3 block font-semibold">// INTRODUCING</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] uppercase select-none">
            <span className="comic-text-outline block">SIVA</span>
            <span className="text-[#fafafa] block">CHANDRAN</span>
          </h1>
          <p className="text-lg md:text-xl font-medium tracking-tight text-[#a1a1aa] mt-4 max-w-xl">
            Cloud Architect & Generative AI Builder crafting robust, automated solutions.
          </p>
        </div>

        {/* Quick Links & Mode Toggle Grid Box */}
        <div className="p-6 md:p-12 flex flex-col justify-between gap-8">
          {/* Navigation Pills */}
          <div className="flex flex-wrap gap-2 justify-start md:justify-end">
            <a href="#home" className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest border border-zinc-800 hover:border-[#b5ff14] hover:text-[#b5ff14] transition-all bg-zinc-950/40">
              01 HOME
            </a>
            <a href="#about" className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest border border-zinc-800 hover:border-[#b5ff14] hover:text-[#b5ff14] transition-all bg-zinc-950/40">
              02 ABOUT
            </a>
            <a href="#skills" className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest border border-zinc-800 hover:border-[#b5ff14] hover:text-[#b5ff14] transition-all bg-zinc-950/40">
              03 STACK
            </a>
            <a href="#experience" className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest border border-zinc-800 hover:border-[#b5ff14] hover:text-[#b5ff14] transition-all bg-zinc-950/40">
              04 WORK
            </a>
            <a href="#contact" className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest border border-zinc-800 hover:border-[#b5ff14] hover:text-[#b5ff14] transition-all bg-zinc-950/40">
              05 TALK
            </a>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 items-stretch sm:items-center md:items-stretch lg:items-center justify-between">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              EXPLORE OTHER VIEWS
            </div>
            <button
              onClick={onSwitchToModern}
              className="px-6 py-2.5 rounded-md font-semibold text-sm tracking-wider bg-[#b5ff14] text-[#09090b] hover:bg-[#c6ff47] transition-colors border border-black shadow-[3px_3px_0px_0px_#09090b]"
            >
              MODERN MODE ✨
            </button>
          </div>
        </div>
      </div>

      {/* Main Section Grid Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr]"
      >
        {/* Left Grid Panel: Speech bubble statement & Actions */}
        <motion.div
          variants={itemVariants}
          className="p-6 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r comic-grid-border relative"
        >
          {/* Subtle Halftone Pattern in background */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_15%,transparent_16%)] bg-[size:10px_10px]" />

          <div className="relative z-10 flex flex-col gap-6 max-w-xl">
            <span className="inline-block self-start bg-[#27272a] text-[#b5ff14] text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1 border border-zinc-800 rounded">
              MISSION BRIEF
            </span>

            {/* Speach bubble / quote style statement */}
            <div className="border border-zinc-800 bg-zinc-950/60 p-6 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#b5ff14]"></div>
              <p className="text-xl md:text-2xl font-normal leading-relaxed text-[#e4e4e7]">
                "I orchestrate agentic AI systems, serverless architectures, and solid pipelines. 
                Focusing on reliability, automation, and speed to transform conceptual goals into production systems."
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 relative z-10">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-zinc-900 border border-zinc-800 rounded text-sm font-semibold uppercase tracking-widest hover:bg-zinc-800 hover:border-zinc-700 transition-all text-[#fafafa]"
            >
              CONNECT ⚡
            </a>
            <a
              href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 bg-zinc-950 border border-zinc-800 hover:border-[#b5ff14] hover:text-[#b5ff14] rounded text-sm font-semibold uppercase tracking-widest transition-all text-neutral-400"
            >
              VIEW CV 📄
            </a>
          </div>
        </motion.div>

        {/* Right Grid Panel: Grayscale Frame */}
        <motion.div
          variants={itemVariants}
          className="p-6 md:p-12 flex flex-col justify-center items-center relative min-h-[350px] md:min-h-auto"
        >
          <div className="w-full max-w-[280px] md:max-w-[320px] aspect-[4/5] border border-zinc-800 p-2 bg-zinc-950/80 rounded relative group overflow-hidden">
            <div className="absolute top-4 left-4 z-10 bg-zinc-900 border border-zinc-800 text-[#b5ff14] text-[9px] uppercase tracking-widest px-2.5 py-1 rounded">
              FIG. 1 // CHENNAI CORE
            </div>

            <div className="w-full h-full overflow-hidden border border-zinc-800 rounded relative">
              <img
                src={profileImage}
                alt="Sivachandran"
                className="w-full h-full object-cover grayscale contrast-[1.15] brightness-[0.9] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
            </div>
            
            {/* Outline highlight box shadow overlay */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#b5ff14]/30 pointer-events-none transition-colors duration-300 rounded" />
          </div>

          <div className="mt-4 text-center">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#a1a1aa] font-semibold">
              BUILDER • ARCHITECT • AUTOMATOR
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee Ticker row at absolute bottom */}
      <div className="w-full border-t border-b comic-grid-border py-4 bg-zinc-950 overflow-hidden whitespace-nowrap select-none">
        <div className="inline-block animate-[marquee_25s_linear_infinite] text-xs font-semibold tracking-[0.3em] uppercase text-[#71717a]">
          PYTHON ◆ AZURE CLOUD ◆ AWS ◆ GENERATIVE AI ◆ FASTAPI ◆ REACT ◆ DOCKER ◆ AGENTIC WORKFLOWS ◆ PRESIDIO ◆ COMMUTATUS ◆ INFOFACES ◆ PYTHON ◆ AZURE CLOUD ◆ AWS ◆ GENERATIVE AI ◆ FASTAPI ◆ REACT ◆ DOCKER ◆ AGENTIC WORKFLOWS ◆ PRESIDIO ◆ COMMUTATUS ◆ INFOFACES
        </div>
      </div>
    </section>
  );
}
