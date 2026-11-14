import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Play,
  ArrowUpRight,
  Tv,
  Radio,
  Sparkles,
  Check,
  Copy,
} from "lucide-react";

interface SocialChannel {
  id: string;
  channelNo: string;
  name: string;
  handle: string;
  category: string;
  quality: string;
  tagline: string;
  synopsis: string;
  genres: string[];
  href: string;
  accentGradient: string;
  glowColor: string;
  badgeText: string;
  icon: React.ReactNode;
}

const socialChannels: SocialChannel[] = [
  {
    id: "linkedin",
    channelNo: "CH 01",
    name: "LinkedIn",
    handle: "in/sivachandran-nkk",
    category: "DOCUSERIES • CAREER & AI",
    quality: "4K ULTRA HD",
    tagline: "Professional updates",
    synopsis:
      "Go behind the architecture of enterprise GenAI builds, cloud migrations, and leadership milestones at Presidio and beyond.",
    genres: ["Cloud Architecture", "Agentic AI", "Tech Leadership"],
    href: "https://www.linkedin.com/in/sivachandran-nkk",
    accentGradient: "from-[#0A66C2]/40 via-[#E50914]/20 to-[#141414]",
    glowColor: "rgba(10, 102, 194, 0.35)",
    badgeText: "Verified Profile",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.56v-5.59c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.69H9.33V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.52v6.23zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    channelNo: "CH 02",
    name: "Instagram",
    handle: "@sivachandranraina",
    category: "ORIGINAL SPECIAL • LIFESTYLE",
    quality: "DOLBY VISION",
    tagline: "Visual stories",
    synopsis:
      "Unscripted moments, travel frames, life in Chennai, and creative visual stories captured outside the terminal.",
    genres: ["Visual Stories", "Behind The Scenes", "Daily Vibes"],
    href: "https://instagram.com/sivachandranraina",
    accentGradient: "from-pink-600/40 via-amber-500/20 to-[#141414]",
    glowColor: "rgba(225, 48, 108, 0.35)",
    badgeText: "4K Reels",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 2a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4zm6.2-2.4a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [activeChannel, setActiveChannel] = useState<SocialChannel>(
    socialChannels[0]
  );
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("sivachandran94@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const fadeUp: any = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden bg-[#141414] py-20 md:py-28 text-white border-t border-white/10"
    >
      {/* Background Watermark & Crimson Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-[360px] w-[700px] rounded-full bg-[#E50914]/15 blur-[130px]" />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute -right-8 top-6 font-display text-[150px] md:text-[240px] uppercase tracking-[0.08em] text-white/[0.025] select-none"
        >
          CONNECT
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-[1.05fr_0.95fr]"
      >
        {/* Left: Netflix Co-Production Callout */}
        <div className="space-y-7">
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#E50914]">
              <Tv className="h-3.5 w-3.5" />
              <span>Connect &#x2022; Greenlight a Project</span>
            </div>
            <h2 className="mt-3 font-display text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.95] tracking-wide text-white">
              Let&apos;s build something{" "}
              <span className="text-[#E50914]">thoughtful</span> together.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base md:text-lg text-[#b3b3b3] leading-relaxed"
          >
            I am always open to new projects, collaborations, or just a friendly
            hello. Reach out on social or email and I will get back to you soon.
          </motion.p>

          {/* Direct Contact Details */}
          <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2 pt-2">
            <div className="group relative flex items-center justify-between gap-3 rounded-md border border-white/10 bg-[#181818] p-4 transition hover:border-[#E50914] hover:bg-[#202020]">
              <a
                href="mailto:sivachandran94@gmail.com"
                className="flex items-center gap-3.5 min-w-0 flex-1"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-[#E50914]/15 text-[#E50914] transition group-hover:bg-[#E50914] group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#808080]">
                    Direct Email
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-semibold text-white group-hover:text-[#E50914] transition-colors">
                    sivachandran94@gmail.com
                  </span>
                </div>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-white/15 bg-black/40 text-[#b3b3b3] transition hover:border-white hover:text-white"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="h-3.5 w-3.5 text-[#46d369]" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-3.5 rounded-md border border-white/10 bg-[#181818] p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-white/10 text-white">
                <MapPin className="h-5 w-5 text-[#E50914]" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#808080]">
                  Studio Location
                </span>
                <span className="mt-0.5 block text-sm font-semibold text-white">
                  Chennai, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Netflix Style Instant Email CTA Bar */}
          <motion.div variants={fadeUp} className="pt-2">
            <p className="text-xs text-[#808080] mb-3">
              Ready to start streaming a new collaboration? Launch an instant thread:
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:sivachandran94@gmail.com"
                className="inline-flex items-center gap-2.5 rounded bg-[#E50914] px-7 py-3.5 text-sm md:text-base font-bold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(229,9,20,0.45)] transition hover:bg-[#f6121d]"
              >
                <Play className="h-4 w-4 fill-white" />
                <span>Start Conversation</span>
              </a>
              <a
                href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded border border-white/25 bg-[#181818] px-6 py-3.5 text-sm md:text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <span>Download Full CV</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Creative Netflix "Up Next / Live Channel Deck" Social Network */}
        <motion.div variants={fadeUp} className="flex flex-col justify-center">
          <div className="relative overflow-hidden rounded-xl border border-white/15 bg-[#181818] shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
            {/* Top Channel Switcher Bar (Remote Control Tabs) */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#111111] px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E50914] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E50914]" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white">
                  Social Network &#x2022; Live Channels
                </span>
              </div>

              {/* Channel Selector Pills */}
              <div className="flex items-center gap-1.5">
                {socialChannels.map((ch) => {
                  const isActive = activeChannel.id === ch.id;
                  return (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => setActiveChannel(ch)}
                      className={`rounded px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider transition ${isActive
                        ? "bg-[#E50914] text-white shadow-[0_0_12px_rgba(229,9,20,0.6)]"
                        : "bg-white/5 text-[#808080] hover:bg-white/10 hover:text-white"
                        }`}
                    >
                      {ch.channelNo}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Channel Cinema Preview Screen */}
            <div className="relative min-h-[250px] overflow-hidden p-6 md:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChannel.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28 }}
                  className="relative z-10"
                >
                  {/* Dynamic Ambient Backdrop */}
                  <div
                    className={`pointer-events-none absolute -inset-8 -z-10 bg-gradient-to-br ${activeChannel.accentGradient} opacity-90 blur-xl`}
                  />

                  {/* Top Metadata Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-4 pr-[0.15em] items-center justify-center bg-[#E50914] font-display text-xs font-bold text-white">
                        S
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d2d2d2]">
                        {activeChannel.category}
                      </span>
                    </div>
                    <span className="rounded border border-white/25 bg-black/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#46d369]">
                      {activeChannel.badgeText}
                    </span>
                  </div>

                  {/* Main Channel Title & Handle */}
                  <div className="mt-4 flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-md">
                      {activeChannel.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-wide text-white leading-none">
                          {activeChannel.name}
                        </h3>
                        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/80">
                          {activeChannel.quality}
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-[#E50914]">
                        {activeChannel.handle}
                      </p>
                    </div>
                  </div>

                  {/* Episode Synopsis */}
                  <p className="mt-4 text-sm leading-relaxed text-[#d2d2d2]">
                    {activeChannel.synopsis}
                  </p>

                  {/* Genre Pills */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {activeChannel.genres.map((genre) => (
                      <span
                        key={genre}
                        className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-medium text-[#e5e5e5]"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  {/* Primary Action Bar inside Preview Screen */}
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                    <a
                      href={activeChannel.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 rounded bg-white px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-black shadow-lg transition hover:bg-[#E50914] hover:text-white"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      <span>Watch on {activeChannel.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>

                    {/* Animated Live Signal Indicator */}
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#b3b3b3]">
                      <Radio className="h-3.5 w-3.5 text-[#46d369] animate-pulse" />
                      <span>{activeChannel.tagline}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Interactive Poster Dock ("Up Next Episodes") */}
            <div className="border-t border-white/10 bg-[#121212] p-4">
              <div className="mb-2.5 flex items-center justify-between px-1">
                <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#808080]">
                  <Sparkles className="h-3 w-3 text-[#E50914]" />
                  Select Channel to Preview or Open
                </span>
                <span className="text-[10px] text-[#808080]">
                  2 Active Streams
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {socialChannels.map((ch) => {
                  const isSelected = activeChannel.id === ch.id;
                  return (
                    <div
                      key={ch.id}
                      onMouseEnter={() => setActiveChannel(ch)}
                      onClick={() => setActiveChannel(ch)}
                      className={`group/card relative flex items-center justify-between gap-3 rounded-lg border p-3.5 transition-all cursor-pointer ${isSelected
                        ? "border-[#E50914] bg-[#1f1f1f] shadow-[0_0_20px_rgba(229,9,20,0.2)]"
                        : "border-white/10 bg-[#161616] opacity-75 hover:opacity-100 hover:border-white/30"
                        }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${isSelected
                            ? "bg-[#E50914] text-white"
                            : "bg-white/10 text-[#b3b3b3] group-hover/card:text-white"
                            }`}
                        >
                          {ch.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-bold text-white truncate">
                              {ch.name}
                            </span>
                          </div>
                          <span className="block text-[10px] uppercase tracking-wider text-[#808080] truncate">
                            {ch.tagline}
                          </span>
                        </div>
                      </div>

                      <a
                        href={ch.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition hover:border-[#E50914] hover:bg-[#E50914]"
                        title={`Open ${ch.name}`}
                        aria-label={`Open ${ch.name}`}
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>

                      {/* Bottom Red Watch Progress Indicator */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-lg bg-white/5">
                        <div
                          className={`h-full bg-[#E50914] transition-all duration-300 ${isSelected ? "w-full" : "w-0"
                            }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
