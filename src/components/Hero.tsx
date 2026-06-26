import profileImage from "../assets/bg.jpg";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown, FileText } from "lucide-react";

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Full bleed profile background image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center md:bg-fixed -z-20"
        style={{ backgroundImage: `url(${profileImage})` }}
      />

      {/* Dark glass-like vignette filter overlay for maximum readability of text */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/40 to-slate-950/80 backdrop-blur-[2px] -z-10" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Single Column Content Overlay */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col text-left space-y-8 max-w-3xl"
        >
          {/* Pulsing visual tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-[2px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
          >
            <Sparkles className="h-3.5 w-3.5 text-violet-400 animate-pulse" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-slate-200">
              Agentic AI Developer
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="font-display uppercase text-[48px] sm:text-[68px] md:text-[88px] font-bold leading-[0.95] tracking-tighter text-white drop-shadow-md"
            >
              Sivachandran
              <br />
              <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent text-gradient">
                NKK
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg md:text-xl text-slate-200 font-light leading-relaxed drop-shadow-sm"
            >
              I design and build agentic AI systems, enterprise Python clouds, and premium full-stack interfaces that translate high-complexity code into effortless experiences.
            </motion.p>
          </div>

          {/* Interactive Apple-style action pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative overflow-hidden rounded-full bg-white text-slate-900 px-8 py-3 text-sm font-semibold tracking-wide shadow-md transition-all hover:scale-105"
            >
              <span className="relative z-10">Get in touch</span>
              <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-gradient-to-r from-indigo-650 to-indigo-500 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
              {/* Glossy sweep shine */}
              <div className="absolute inset-0 w-[50%] -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine pointer-events-none" />
            </a>

            <a
              href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-[2px] transition-all hover:bg-white/20 hover:border-white/50 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.3),0_2px_8px_rgba(0,0,0,0.1)]"
            >
              <FileText className="h-4 w-4" />
              <span>View CV</span>
              {/* Glossy sweep shine */}
              <div className="absolute inset-0 w-[50%] -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine pointer-events-none" />
            </a>
          </motion.div>

          {/* Interactive tech category summary */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 pt-6 text-[10px] md:text-xs font-display text-slate-300 font-bold uppercase tracking-[0.2em] border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>Agentic Workflows</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>Python Cloud Architect</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>Interactive UI Expert</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bounce-down indicator at bottom center */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-slate-400">Discover</span>
          <ArrowDown className="h-4.5 w-4.5 text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
}
