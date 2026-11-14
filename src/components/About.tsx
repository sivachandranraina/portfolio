import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Cpu, ShieldCheck, MapPin } from "lucide-react";
import profileImage from "../assets/gemini-bg.png";

const careerMetrics = [
  {
    value: "10+",
    unit: "YEARS",
    label: "Shipping Production Code",
    accent: "text-[#E50914]",
  },
  {
    value: "03",
    unit: "STUDIOS",
    label: "Presidio • Commutatus • Infofaces",
    accent: "text-white",
  },
  {
    value: "2AM",
    unit: "UPTIME",
    label: "Traffic-Spike Battle Tested",
    accent: "text-[#46d369]",
  },
  {
    value: "AI",
    unit: "NATIVE",
    label: "RAG, Copilots & Multi-Agent",
    accent: "text-amber-400",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const fadeUp: any = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#141414] py-24 md:py-32 border-t border-white/5"
    >
      {/* Ambient Background Glows & Giant Watermark */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-[#E50914]/10 blur-[140px]" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute -left-8 top-4 font-display text-[170px] md:text-[240px] uppercase tracking-[0.1em] text-white/[0.025] select-none"
        >
          STORYLINE
        </motion.div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.3em] text-[#E50914]"
          >
            <div className="flex pl-[3px] h-5 w-4 items-center justify-center rounded-sm bg-[#E50914] font-display text-xs font-bold text-white shadow-[0_0_12px_rgba(229,9,20,0.6)]">
              S
            </div>
            <div>About &#x2022; The Builder&apos;s Dossier</div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-3 font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.92] tracking-wide text-white"
          >
            A curious builder who turned{" "}
            <span className="text-[#E50914]">cloud and AI</span> into a daily
            playground.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-end gap-2.5"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#181818] px-4 py-2 text-xs font-semibold text-[#e5e5e5]">
              <MapPin className="h-3.5 w-3.5 text-[#E50914]" />
              Chennai, India
            </span>
            <a
              href="#skills"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#181818] px-4 py-2 text-xs font-semibold text-white transition hover:border-[#E50914] hover:bg-[#E50914]"
            >
              <span>Agents &amp; GenAI + Cloud</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Netflix Documentary Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="grid gap-6 lg:grid-cols-12"
        >
          {/* BENTO CARD 1: Origin Story (7 Cols) */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] p-7 sm:p-8 lg:col-span-5 flex flex-col justify-between"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#E50914]/20 blur-[70px]" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#46d369]">
                  &#x25CF; Architect Telemetry
                </span>
                <h3 className="mt-1 font-display text-2xl uppercase tracking-wider text-white">
                  At a Glance
                </h3>
              </div>
              <span className="rounded border border-white/20 bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#b3b3b3]">
                Associate Architect
              </span>
            </div>

            <div className="my-6 grid grid-cols-2 gap-4">
              {careerMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-white/10 bg-[#121212] p-4 transition hover:border-white/25"
                >
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`font-display text-4xl sm:text-5xl leading-none ${m.accent}`}
                    >
                      {m.value}
                    </span>
                    <span className="font-display text-sm tracking-widest text-[#808080]">
                      {m.unit}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-medium text-[#b3b3b3] leading-snug">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-[#808080]">
              <span>Architect @ Presidio</span>
              <a
                href="#work"
                className="font-bold uppercase tracking-wider text-[#E50914] hover:underline flex items-center gap-1"
              >
                <span>View Timeline</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          {/* BENTO CARD 2: Career Telemetry Matrix (5 Cols) */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] p-7 sm:p-9 lg:col-span-7 transition-all duration-300 hover:border-[#E50914]/60 hover:shadow-[0_20px_50px_rgba(229,9,20,0.12)]"
          >
            {/* Subtle Portrait Backdrop Blend */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                src={profileImage}
                alt=""
                aria-hidden
                className="h-full w-full object-cover object-right-top opacity-15 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-[#181818]/90 to-[#181818]/65" />
            </div>

            {/* Giant Hollow Chapter Number */}
            <span className="netflix-top10-number pointer-events-none absolute -right-2 -top-4 text-[140px] sm:text-[170px] opacity-40">
              01
            </span>

            <div className="relative z-10 flex h-full flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded bg-[#E50914]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E50914]">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Act I &#x2022; Origin &amp; Enterprise Scale</span>
                </div>

                <h3 className="mt-4 font-display text-3xl sm:text-4xl uppercase tracking-wide text-white">
                  From Front-End Builds to Enterprise GenAI Copilots
                </h3>

                <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#d2d2d2]">
                  My journey started with front‑end builds and quickly
                  snowballed into a love for{" "}
                  <span className="font-semibold text-white">
                    Python, cloud platforms, and the magic of Generative AI
                  </span>
                  . At Presidio, Commutatus, and Infofaces, I got to ship real
                  products - from GenAI copilots to analytics dashboards and
                  enterprise portals that teams actually rely on every day.
                </p>
              </div>

              {/* Actionable Company Links to Experience Section */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#808080] mr-1">
                  Production Studios:
                </span>
                {["Presidio", "Commutatus", "Infofaces"].map((studio) => (
                  <a
                    key={studio}
                    href="#work"
                    className="inline-flex items-center gap-1 rounded-md border border-white/15 bg-black/50 px-3 py-1 text-xs font-semibold text-white transition hover:border-[#E50914] hover:bg-[#E50914]"
                  >
                    <span>{studio}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-70" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* BENTO CARD 3: The Cloud & AI Nexus (6 Cols) */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] p-7 sm:p-9 lg:col-span-6 transition-all duration-300 hover:border-[#E50914]/60 hover:shadow-[0_20px_50px_rgba(229,9,20,0.12)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <span className="netflix-top10-number pointer-events-none absolute -right-2 -top-4 text-[130px] sm:text-[155px] opacity-35">
              02
            </span>

            <div className="relative z-10 flex h-full flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded bg-blue-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400">
                  <Cpu className="h-3.5 w-3.5" />
                  <span>Act II &#x2022; Architecture &amp; Resilience</span>
                </div>

                <h3 className="mt-4 font-display text-3xl sm:text-4xl uppercase tracking-wide text-white">
                  RAG Pipelines, Agentic AI &amp; 2 AM Reliability
                </h3>

                <p className="mt-3 text-base leading-relaxed text-[#d2d2d2]">
                  These days, I happily live at the intersection of{" "}
                  <span className="font-semibold text-white">
                    Azure + AWS, Node APIs, and modern web stacks
                  </span>
                  . I&apos;m the person who loves wiring RAG pipelines, building
                  agentic AI workflows, polishing UX details, and making sure a
                  system behaves even when traffic spikes at 2 AM.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Azure + AWS", "RAG Pipelines", "Agentic Workflows", "Node APIs"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#skills"
                      className="rounded-md border border-white/10 bg-[#121212] px-3 py-1.5 text-xs font-medium text-[#b3b3b3] transition hover:border-[#E50914] hover:text-white"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* BENTO CARD 4: The Mission (6 Cols) */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#181818] p-7 sm:p-9 lg:col-span-6 transition-all duration-300 hover:border-[#E50914]/60 hover:shadow-[0_20px_50px_rgba(229,9,20,0.12)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#E50914]/15 via-transparent to-transparent" />

            <span className="netflix-top10-number pointer-events-none absolute -right-2 -top-4 text-[130px] sm:text-[155px] opacity-35">
              03
            </span>

            <div className="relative z-10 flex h-full flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded bg-[#46d369]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#46d369]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Act III &#x2022; Product Philosophy</span>
                </div>

                <h3 className="mt-4 font-display text-3xl sm:text-4xl uppercase tracking-wide text-white">
                  Turning Messy Problems into Fast, Friendly Products
                </h3>

                <p className="mt-3 text-base leading-relaxed text-[#d2d2d2]">
                  If there&apos;s a chance to turn a messy problem into a{" "}
                  <span className="font-semibold text-white">
                    clean, fast, friendly product
                  </span>
                  , I&apos;m in - especially when the solution blends cloud
                  scale with AI‑powered insight.
                </p>
              </div>

              {/* Actionable CTA Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                <div className="flex flex-wrap gap-2">
                  {["Chennai, India", "Agents", "GenAI + Cloud"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-black/50 px-3.5 py-1 text-xs font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded bg-[#E50914] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(229,9,20,0.4)] transition hover:bg-[#f6121d]"
                >
                  <span>Build Together</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
