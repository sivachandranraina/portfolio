import awsBadge from "../assets/badges/aws-certified-generative-ai-developer-professional-.png";
import azureAssociateBadge from "../assets/badges/microsoft-certified-associate-badge.svg";
import azureFundamentalsBadge from "../assets/badges/microsoft-certified-fundamentals-badge.svg";
import awsIcon from "../assets/icons/aws.svg";
import azureIcon from "../assets/icons/azure.svg";
import geminiIcon from "../assets/icons/gemini.svg";
import nodeIcon from "../assets/icons/nodejs.svg";
import pythonIcon from "../assets/icons/python.png";
import codexLogo from "../assets/icons/ai-tools/codex.svg";
import claudeLogo from "../assets/icons/ai-tools/claudecode-color.svg";
import copilotLogo from "../assets/icons/ai-tools/github-copilot.svg";
import antigravityLogo from "../assets/icons/ai-tools/antigravity-color.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Sparkles,
  ShieldCheck,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const iconSkills = [
  {
    rank: 1,
    label: "Python",
    tagline: "GenAI + automation",
    highlight: "Core Language",
    seasons: "Primary Language",
    icon: pythonIcon,
    accent: "from-emerald-600/30 via-emerald-900/20 to-[#181818]",
  },
  {
    rank: 2,
    label: "Azure",
    tagline: "AI + cloud services",
    highlight: "Enterprise Cloud",
    seasons: "OpenAI & AI Search",
    icon: azureIcon,
    accent: "from-blue-600/30 via-indigo-900/20 to-[#181818]",
  },
  {
    rank: 3,
    label: "AWS",
    tagline: "AI + cloud services",
    highlight: "Cloud Native",
    seasons: "Bedrock & Serverless",
    icon: awsIcon,
    accent: "from-amber-500/30 via-orange-900/20 to-[#181818]",
  },
  {
    rank: 4,
    label: "Node",
    tagline: "APIs + realtime",
    highlight: "High Scale APIs",
    seasons: "Scalable Microservices",
    icon: nodeIcon,
    accent: "from-lime-500/30 via-emerald-900/20 to-[#181818]",
  },
  {
    rank: 5,
    label: "LLM & SLM",
    tagline: "Agentic AI",
    highlight: "Multi-Agent RAG",
    seasons: "RAG & Multi-Agent",
    icon: geminiIcon,
    accent: "from-[#E50914]/35 via-rose-900/20 to-[#181818]",
  },
];

const certifications = [
  {
    id: "aws-genai-pro",
    rank: "01",
    title: "AWS Certified Generative AI Developer - Professional",
    shortTitle: "Generative AI Developer (Pro)",
    studio: "Amazon Web Services",
    rating: "PRO TIER",
    badgeStatus: "Flagship Accolade",
    accent: "from-amber-500/30 via-[#E50914]/25 to-[#141414]",
    glow: "bg-amber-500/25",
    synopsis:
      "Validates advanced production mastery in architecting, securing, and scaling enterprise Generative AI systems, FM orchestration, and RAG pipelines on AWS.",
    domains: ["Bedrock & Foundation Models", "Enterprise RAG", "Agentic Orchestration", "AI Security & Governance"],
    image: awsBadge,
  },
  {
    id: "azure-ai-associate",
    rank: "02",
    title: "Microsoft Certified Azure AI Engineer Associate",
    shortTitle: "Azure AI Engineer Associate",
    studio: "Microsoft Azure",
    rating: "ASSOCIATE",
    badgeStatus: "Official Credential",
    accent: "from-blue-600/35 via-indigo-900/25 to-[#141414]",
    glow: "bg-blue-500/25",
    synopsis:
      "Demonstrates end-to-end engineering of cognitive services, Azure OpenAI deployments, vector search indexes, and production copilot solutions.",
    domains: ["Azure OpenAI", "AI Search & Vector Indexing", "Cognitive Services", "NLP & Vision Pipelines"],
    image: azureAssociateBadge,
  },
  {
    id: "azure-fundamentals",
    rank: "03",
    title: "Microsoft Certified Azure Fundamentals",
    shortTitle: "Azure Cloud Fundamentals",
    studio: "Microsoft Azure",
    rating: "FOUNDATION",
    badgeStatus: "Official Credential",
    accent: "from-cyan-500/30 via-blue-900/20 to-[#141414]",
    glow: "bg-cyan-500/20",
    synopsis:
      "Core architectural foundation across cloud concepts, distributed infrastructure, identity governance, and cloud-native security models.",
    domains: ["Cloud Architecture", "Core Infrastructure", "Identity & Governance", "Cost & Scale Management"],
    image: azureFundamentalsBadge,
  },
];

const aiTools = [

  {
    name: "Claude Code",
    brand: "Anthropic",
    role: "CLI Architecture",
    desc: "Terminal-native agentic refactoring & architecture design",
    logo: claudeLogo,
    type: "mark",
  }, {
    name: "Codex",
    brand: "OpenAI",
    role: "Autonomous Coding",
    desc: "Autonomous code synthesis & deep reasoning workflows",
    logo: codexLogo,
    type: "invert",
  },
  {
    name: "GitHub Copilot",
    brand: "GitHub",
    role: "Inline Velocity",
    desc: "Real-time pair programming & inline completion velocity",
    logo: copilotLogo,
    type: "invert",
  },
  {
    name: "Antigravity",
    brand: "Google",
    role: "Agentic IDE",
    desc: "Next-gen agentic IDE for full-stack autonomous engineering",
    logo: antigravityLogo,
    type: "mark",
  },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSpread, setIsSpread] = useState(false);

  const cycleNext = () =>
    setActiveIndex((prev) => (prev + 1) % certifications.length);
  const cyclePrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + certifications.length) % certifications.length
    );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#141414] py-20 md:py-28 border-t border-white/5"
    >
      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute -right-8 top-2 font-display text-[170px] md:text-[250px] uppercase tracking-[0.08em] text-white/[0.025] select-none"
        >
          TOP 10 STACK
        </motion.div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12 space-y-16">
        {/* ROW 1: TOP 5 IN CORE STACK TODAY */}
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#E50914]"
              >
                <span className="rounded-sm bg-[#E50914] px-1.5 pl-[0.85em] py-0.5 text-[10px] font-extrabold text-white">
                  TOP 10
                </span>
                <span>Skillset &#x2022; Trending Now</span>
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide text-white"
              >
                Tools I use to ship polished experiences.
              </motion.h2>
            </div>
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-sm md:text-base text-[#b3b3b3]"
            >
              A mix of modern frameworks, tooling, and design systems that help
              me move fast without sacrificing quality.
            </motion.p>
          </motion.div>

          {/* Netflix Top 10 Ranked Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
          >
            {iconSkills.map((skill) => (
              <motion.div
                variants={itemVariants}
                key={skill.label}
                className="group relative flex items-end overflow-visible rounded-md pt-4 transition-transform duration-300 hover:z-20 hover:scale-105"
              >
                {/* Giant Hollow Netflix Rank Number */}
                <span className="netflix-top10-number -mr-5 text-[125px] sm:text-[140px] z-0 pointer-events-none">
                  {skill.rank}
                </span>

                {/* Poster Card */}
                <div className="relative z-10 flex-1 overflow-hidden rounded-md border border-white/10 bg-[#181818] p-4 shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-colors group-hover:border-[#E50914]">
                  <div
                    className={`
                      absolute inset-0 bg-gradient-to-br ${skill.accent} opacity-75 transition-opacity group-hover:opacity-100
                    `}
                  />

                  {/* S Mini Corner Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-display text-base font-bold text-[#E50914]">
                      S
                    </span>
                    <span className="rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                      HD
                    </span>
                  </div>

                  {/* Skill Icon */}
                  <div className="relative z-10 my-5 flex h-16 w-full items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={`${skill.label} logo`}
                      className="h-12 w-12 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Card Footer Info */}
                  <div className="relative z-10">
                    <div className="text-lg font-bold text-white group-hover:text-[#E50914] transition-colors">
                      {skill.label}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-[#b3b3b3]">
                      {skill.tagline}
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5 text-[11px]">
                      <span className="font-bold text-[#46d369]">
                        {skill.highlight}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#808080]">
                        #{skill.rank}
                      </span>
                    </div>
                  </div>

                  {/* Red Watch Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <div className="h-full w-4/5 bg-[#E50914]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: AI COCKPIT (NETFLIX ORIGINALS WIDESCREEN ROW) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-6"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#E50914]"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>AI Tools &#x2022; Netflix Originals</span>
              </motion.div>
              <motion.h3
                variants={itemVariants}
                className="mt-1 font-display text-3xl md:text-4xl uppercase tracking-wide text-white"
              >
                My daily AI cockpit.
              </motion.h3>
            </div>
            <motion.p
              variants={itemVariants}
              className="max-w-lg text-sm text-[#b3b3b3]"
            >
              A compact toolkit for agentic workflows, coding acceleration, and
              local inference experiments.
            </motion.p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aiTools.map((tool, index) => (
              <motion.div
                variants={itemVariants}
                key={tool.name}
                className="group relative overflow-hidden rounded-md border border-white/10 bg-[#181818] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E50914] hover:shadow-[0_14px_35px_rgba(229,9,20,0.2)]"
              >
                {/* Widescreen Thumbnail Area */}
                <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-[#262626] via-[#181818] to-black p-6">
                  {/* Top-left S Series Tag */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5">
                    <span className="flex h-5 w-4 items-center justify-center bg-[#E50914] font-display text-xs font-bold text-white">
                      S
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#b3b3b3]">
                      COCKPIT
                    </span>
                  </div>

                  {/* Episode Number */}
                  <span className="
                    absolute right-3 top-2 font-display text-4xl text-white/10 
                    group-hover:text-[#E50914]/40 transition-colors
                  ">
                    E{index + 1}
                  </span>

                  {/* Logo */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-black/60 p-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={tool.logo}
                      alt={`${tool.brand} logo`}
                      className={`h-12 w-12 object-contain ${tool.type === "invert" ? "invert" : ""
                        }`}
                    />
                  </div>

                  {/* Bottom Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <div className="h-full w-full bg-[#E50914] scale-x-75 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  </div>
                </div>

                {/* Metadata Body */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#46d369]">
                      {tool.role}
                    </span>
                    <span className="rounded border border-white/25 px-1.5 py-0.2 text-[10px] font-semibold uppercase text-[#b3b3b3]">
                      {tool.brand}
                    </span>
                  </div>
                  <div className="mt-2 text-lg font-bold text-white group-hover:text-[#E50914] transition-colors">
                    {tool.name}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[#a3a3a3]">
                    {tool.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROW 3: CERTIFICATIONS (INTERACTIVE 3D FANNED COLLECTOR'S CARD DECK) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-8 pt-8"
        >
          {/* Header + Deck Controls */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#E50914]"
              >
                <Award className="h-4 w-4" />
                <span>Certifications &#x2022; Collector&apos;s Deck</span>
              </motion.div>
              <motion.h3
                variants={itemVariants}
                className="mt-1 font-display text-4xl sm:text-5xl uppercase tracking-wide text-white"
              >
                Proof of the work.
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="mt-1 max-w-lg text-sm md:text-base text-[#b3b3b3]"
              >
                Click or hover any card in the deck to bring it to the front, or
                shuffle through official cloud &amp; AI milestones.
              </motion.p>
            </div>

            {/* Deck Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2.5"
            >
              <button
                type="button"
                onClick={cyclePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#181818] text-white transition hover:border-[#E50914] hover:bg-[#E50914]"
                aria-label="Previous card in deck"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={cycleNext}
                className="inline-flex items-center gap-2 rounded-full bg-[#E50914] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(229,9,20,0.4)] transition hover:bg-[#f6121d]"
              >
                <Layers className="h-3.5 w-3.5" />
                <span>Deal Next Card</span>
              </button>
              <button
                type="button"
                onClick={cycleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#181818] text-white transition hover:border-[#E50914] hover:bg-[#E50914]"
                aria-label="Next card in deck"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsSpread((prev) => !prev)}
                className="rounded-full border border-white/20 bg-[#181818] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#b3b3b3] transition hover:border-white hover:text-white"
              >
                {isSpread ? "Fan Deck" : "Spread All"}
              </button>
            </motion.div>
          </div>

          {/* Fanned / Stacked Card Deck Stage */}
          <div className="relative mx-auto flex min-h-[540px] w-full items-center justify-center py-8">
            {/* Ambient Stage Floor Glow */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[520px] rounded-full bg-[#E50914]/15 blur-[120px]" />

            {/* Desktop Fanned Hand / Responsive Stack */}
            <div
              className={`relative flex w-full items-center justify-center ${isSpread
                ? "flex-col gap-6 lg:flex-row lg:gap-8"
                : "flex-col gap-6 lg:block lg:h-[490px]"
                }`}
            >
              {certifications.map((cert, index) => {
                // Compute relative position in the 3-card hand:
                // offset 0 = Front Center, offset 1 = Right Wing, offset 2 = Left Wing
                const offset =
                  (index - activeIndex + certifications.length) %
                  certifications.length;

                const isFront = offset === 0;
                const isRightWing = offset === 1;

                // Transform coordinates for Fanned Hand vs Spread mode
                const fanX = isSpread
                  ? 0
                  : isFront
                    ? 0
                    : isRightWing
                      ? 250
                      : -250;
                const fanY = isSpread ? 0 : isFront ? -14 : 22;
                const fanRotate = isSpread
                  ? 0
                  : isFront
                    ? 0
                    : isRightWing
                      ? 9
                      : -9;
                const fanScale = isSpread ? 1 : isFront ? 1.05 : 0.91;
                const zIndex = isFront ? 30 : isRightWing ? 20 : 10;

                return (
                  <motion.div
                    key={cert.id}
                    layout
                    onClick={() => setActiveIndex(index)}
                    initial={false}
                    animate={{
                      x: typeof window !== "undefined" && window.innerWidth < 1024 ? 0 : fanX,
                      y: typeof window !== "undefined" && window.innerWidth < 1024 ? 0 : fanY,
                      rotate:
                        typeof window !== "undefined" && window.innerWidth < 1024
                          ? 0
                          : fanRotate,
                      scale:
                        typeof window !== "undefined" && window.innerWidth < 1024
                          ? 1
                          : fanScale,
                    }}
                    whileHover={{
                      y:
                        typeof window !== "undefined" && window.innerWidth < 1024
                          ? -4
                          : isFront
                            ? -22
                            : 8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                    }}
                    style={{ zIndex }}
                    className={`group relative w-full max-w-[360px] cursor-pointer select-none overflow-hidden rounded-2xl border p-6 transition-colors duration-300 ${!isSpread ? "lg:absolute lg:left-1/2 lg:-ml-[180px]" : ""
                      } ${isFront
                        ? "border-[#E50914] bg-[#1a1a1a] shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(229,9,20,0.28)]"
                        : "border-white/15 bg-[#141414]/95 opacity-85 hover:opacity-100 hover:border-white/35 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
                      }`}
                  >
                    {/* Card Foil Gradient Background */}
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cert.accent} opacity-90`}
                    />

                    {/* Playing Card Top Corner Header */}
                    <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-5 items-center justify-center rounded-sm bg-[#E50914] font-display text-sm font-bold text-white shadow">
                          S
                        </span>
                        <span className="font-mono text-xs font-bold tracking-widest text-white/80">
                          DECK #{cert.rank}
                        </span>
                      </div>
                      <span
                        className={`rounded px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${isFront
                          ? "bg-[#E50914] text-white"
                          : "bg-white/10 text-[#b3b3b3]"
                          }`}
                      >
                        {cert.rating}
                      </span>
                    </div>

                    {/* Center Badge Artwork Pedestal */}
                    <div className="relative z-10 my-5 flex h-48 w-full items-center justify-center rounded-xl border border-white/15 bg-black/60 p-5 shadow-inner backdrop-blur-md">
                      {/* Corner collector ticks */}
                      <span className="absolute left-2.5 top-2.5 h-2 w-2 border-l border-t border-[#E50914]" />
                      <span className="absolute right-2.5 top-2.5 h-2 w-2 border-r border-t border-[#E50914]" />
                      <span className="absolute bottom-2.5 left-2.5 h-2 w-2 border-b border-l border-[#E50914]" />
                      <span className="absolute bottom-2.5 right-2.5 h-2 w-2 border-b border-r border-[#E50914]" />

                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-contain drop-shadow-[0_12px_25px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Card Metadata & Capabilities */}
                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
                        <span className="text-[#46d369] flex items-center gap-1">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          {cert.studio}
                        </span>
                        <span className="text-[#808080]">
                          {cert.badgeStatus}
                        </span>
                      </div>

                      <h4 className="font-display text-2xl uppercase leading-tight tracking-wide text-white group-hover:text-[#E50914] transition-colors">
                        {cert.title}
                      </h4>

                      {/* Domain Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.domains.slice(0, 3).map((domain) => (
                          <span
                            key={domain}
                            className="rounded border border-white/10 bg-black/50 px-2 py-0.5 text-[10px] font-medium text-[#d2d2d2]"
                          >
                            {domain}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Red Active Card Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                      <div
                        className={`h-full bg-[#E50914] transition-all duration-300 ${isFront ? "w-full" : "w-1/3"
                          }`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Deck Position Indicator Dots */}
          <div className="flex items-center justify-center gap-3">
            {certifications.map((cert, idx) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all ${activeIndex === idx
                  ? "w-8 bg-[#E50914]"
                  : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                aria-label={`Select ${cert.title}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
