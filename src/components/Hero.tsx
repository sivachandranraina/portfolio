import profileImage from "../assets/gemini-bg.png";
import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";

interface HeroProps {
  greeting?: string;
}

export default function Hero({ greeting }: HeroProps) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#141414]"
    >
      {/* Background Billboard Artwork */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${profileImage})`,
          backgroundPosition: "left",
        }}
        aria-label="Sivachandran portrait background"
        role="img"
      >
        {/* Authentic Netflix Multi-Layer Vignettes */}
        <div className="
          absolute inset-0 
          bg-gradient-to-r from-[#141414] via-[#141414]/75 to-transparent
        " />
        <div className="
          absolute inset-0 
          bg-gradient-to-t from-[#141414] via-[#141414]/25 to-black/50
        " />
        <div className="
          absolute bottom-0 left-0 right-0 h-44 
          bg-gradient-to-t from-[#141414] via-[#141414]/90 to-transparent
        " />

        {/* Billboard Foreground Content */}
        <div className="relative z-10 flex min-h-screen flex-col justify-end pb-16 pt-28 md:pb-24">
          <motion.div
            className="mx-auto w-full max-w-7xl px-6 md:px-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-3xl text-left text-white">
              {/* Personalized Viewer Banner */}
              {greeting && (
                <motion.div
                  variants={itemVariants}
                  className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3.5 py-1 text-xs font-medium text-[#b3b3b3] backdrop-blur-md"
                >
                  <span className="h-2 w-2 rounded-full bg-[#E50914] animate-pulse" />
                  <span>{greeting}</span>
                </motion.div>
              )}

              {/* S SERIES Header */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2.5"
              >
                <span className="flex h-7 w-5 items-center justify-center bg-[#E50914] font-display text-xl font-bold leading-none text-white shadow-[0_0_15px_rgba(229,9,20,0.8)]">
                  S
                </span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.38em] text-[#d2d2d2]">
                  SERIES &#x2022; ARCHITECT ORIGINAL
                </span>
              </motion.div>

              {/* Giant Title */}
              <motion.h1
                variants={itemVariants}
                className="mt-2 font-display uppercase text-[68px] sm:text-[96px] md:text-[132px] leading-[0.88] tracking-[0.04em] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]"
              >
                Sivachandran
              </motion.h1>
              <motion.div
                variants={itemVariants}>
                <span className="inline-block align-middle text-[20px] md:text-[26px] tracking-[0.4em] text-white shadow-lg">
                  NKK
                </span>
              </motion.div>

              {/* Top 10 + Match Score + Maturity Metadata Row */}
              <motion.div
                variants={itemVariants}
                className="mt-4 flex flex-wrap items-center gap-3 text-xs md:text-sm font-semibold"
              >
                <div className="flex items-center gap-1.5 rounded-sm bg-[#E50914] px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-white">
                  <span>TOP 10</span>
                </div>
                <span className="font-bold text-white">
                  #1 in Cloud &amp; GenAI Today
                </span>
                <span className="text-white/30">|</span>
                <span className="font-bold text-[#46d369]">10+ Yrs Shipping</span>
                <span className="text-[#b3b3b3]">2015–Present</span>
                <span className="border border-white/40 px-1.5 py-0.2 text-[11px] text-[#e5e5e5]">
                  U/A 16+
                </span>
                <span className="text-[#b3b3b3]">3 Seasons</span>
                <span className="rounded-sm border border-white/40 bg-white/10 px-1.5 py-0.2 text-[10px] font-bold uppercase tracking-wider text-white">
                  4K Ultra HD
                </span>
                <span className="rounded-sm border border-white/40 bg-white/10 px-1.5 py-0.2 text-[10px] font-bold uppercase tracking-wider text-white">
                  Spatial AI
                </span>
              </motion.div>

              {/* Synopsis */}
              <motion.p
                variants={itemVariants}
                className="mt-5 max-w-2xl text-base md:text-lg lg:text-xl font-normal leading-relaxed text-[#e5e5e5] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
              >
                I build AI solutions, Python systems, and full-stack cloud
                applications that turn ambitious ideas into reliable, scalable
                products.
              </motion.p>

              {/* Netflix Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-wrap items-center gap-3.5"
              >
                {/* Primary Play Button (White) */}
                <a
                  href="#work"
                  className="inline-flex items-center gap-2.5 rounded bg-white px-7 py-3 text-sm md:text-base font-bold text-black shadow-lg transition hover:bg-white/85 active:scale-95"
                >
                  <Play className="h-5 w-5 fill-black text-black" />
                  <span>Play Experience</span>
                </a>

                {/* Secondary More Info Button (Translucent Gray) */}
                <a
                  href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded bg-[#6d6d6e]/70 px-7 py-3 text-sm md:text-base font-bold text-white backdrop-blur-md transition hover:bg-[#6d6d6e]/50 active:scale-95"
                >
                  <Info className="h-5 w-5 text-white" />
                  <span>View CV / Info</span>
                </a>

                {/* Connect Button */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded border border-[#E50914] bg-[#E50914]/90 px-6 py-3 text-sm md:text-base font-bold text-white shadow-[0_0_25px_rgba(229,9,20,0.4)] transition hover:bg-[#E50914]"
                >
                  <span>Connect</span>
                </a>
              </motion.div>

              {/* Genre / Cast Strip */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-wrap items-center gap-2 text-xs md:text-sm tracking-widest uppercase text-[#b3b3b3]"
              >
                <span className="font-semibold text-white">Genres:</span>
                <span>Agentic AI</span>
                <span className="text-[#E50914]">&#x2022;</span>
                <span>Vibe Coder</span>
                <span className="text-[#E50914]">&#x2022;</span>
                <span>Pythonista</span>
                <span className="text-[#E50914]">&#x2022;</span>
                <span>TypeScriptist</span>
                <span className="text-[#E50914]">&#x2022;</span>
                <span>
                  Spread <b className="text-[#E50914] animate-pulse">❤</b>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Netflix Right-Edge Maturity Rating Pill */}
        <div className="absolute bottom-24 right-0 z-20 hidden md:flex items-center">
          <div className="border-l-[3px] border-[#dcdcdc] bg-[#333333]/60 py-1.5 pl-3 pr-8 text-xs font-semibold tracking-wider text-white backdrop-blur-md">
            Associate Architect
          </div>
        </div>
      </motion.div>
    </section>
  );
}
