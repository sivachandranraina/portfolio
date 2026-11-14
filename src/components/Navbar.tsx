import { useEffect, useState } from "react";
import { Bell, ChevronDown, Play, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ViewerProfile {
  id: string;
  name: string;
  badge: string;
  gradient: string;
  greeting: string;
}

export const VIEWER_PROFILES: ViewerProfile[] = [
  {
    id: "recruiter",
    name: "Recruiter",
    badge: "Hiring",
    gradient: "from-[#E50914] to-[#99060d]",
    greeting: "Curated for Talent Acquisition & Hiring Leaders",
  },
  {
    id: "developer",
    name: "Tech Lead",
    badge: "Architect",
    gradient: "from-blue-600 to-indigo-900",
    greeting: "Curated for Cloud Architects & AI Engineers",
  },
  {
    id: "collaborator",
    name: "Founder",
    badge: "Partner",
    gradient: "from-emerald-600 to-teal-900",
    greeting: "Curated for Product Builders & Collaborators",
  },
  {
    id: "adventurer",
    name: "Stargazer",
    badge: "Vibe",
    gradient: "from-amber-500 to-orange-800",
    greeting: "Curated for Fellow Vibe Coders & Explorers",
  },
];

interface NavbarProps {
  activeProfile: ViewerProfile;
  onSelectProfile: (profile: ViewerProfile) => void;
  onOpenWhoIsWatching: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Storyline", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Connect", href: "#contact" },
];

const notifications = [
  {
    title: "Now Streaming: Season 3 @ Presidio",
    sub: "Associate Architect • CHOP AI, Synapse AI & ECU Health AI",
    time: "New Release",
    href: "#work",
  },
  {
    title: "Award Unlocked: AWS Certified GenAI Pro",
    sub: "Generative AI Developer - Professional Badge",
    time: "Top Rated",
    href: "#skills",
  },
  {
    title: "Trending in AI Cockpit",
    sub: "Antigravity, Claude Code, GitHub Copilot & Codex",
    time: "#1 Today",
    href: "#skills",
  },
];

export default function Navbar({
  activeProfile,
  onOpenWhoIsWatching,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileBrowseOpen, setMobileBrowseOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[#141414]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.85)] py-4"
        : "bg-gradient-to-b from-black/90 via-black/45 to-transparent py-6"
        }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Left: Netflix Wordmark + Mobile Browse Trigger */}
        <div className="flex items-center gap-6">
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Sivachandran Netflix Home"
          >
            <span className="font-display text-3xl sm:text-4xl tracking-[0.14em] text-[#E50914] drop-shadow-[0_2px_10px_rgba(229,9,20,0.5)] transition-transform group-hover:scale-[1.03]">
              SIVACHANDRAN
            </span>
          </a>

          {/* Mobile "Browse" Dropdown (Authentic Netflix Mobile Pattern) */}
          <div className="relative lg:hidden">
            <button
              type="button"
              onClick={() => setMobileBrowseOpen((prev) => !prev)}
              className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-white/90 hover:text-white"
            >
              <span>Browse</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${mobileBrowseOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            <AnimatePresence>
              {mobileBrowseOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 mt-3 w-48 rounded border border-white/15 bg-black/95 py-2 shadow-2xl backdrop-blur-xl"
                >
                  <div className="mx-auto mb-1 h-0.5 w-8 bg-white/40" />
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileBrowseOpen(false)}
                      className="block px-5 py-2.5 text-center text-xs font-medium text-[#e5e5e5] transition hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Center: Clean, Airy Navigation Links */}
        <nav className="hidden lg:flex items-center gap-9 xl:gap-11 text-[14px] font-medium tracking-wide text-[#e5e5e5]">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative py-1 transition-colors hover:text-white ${idx === 0 ? "font-semibold text-white" : "text-[#d2d2d2]"
                } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#E50914] after:transition-all hover:after:w-full`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Minimal Netflix Controls (CV Link, Bell, Avatar Square) */}
        <div className="flex items-center gap-5 sm:gap-7">
          <a
            href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e5e5e5] transition hover:text-[#E50914]"
          >
            Resume
          </a>

          {/* Notification Bell */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowNotifications((prev) => !prev)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#e5e5e5] transition hover:bg-white/10 hover:text-white"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#E50914] ring-2 ring-[#141414]" />
            </button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 mt-3 w-80 overflow-hidden rounded-md border border-white/15 bg-black/95 shadow-2xl backdrop-blur-xl"
                >
                  <div className="border-b border-white/10 bg-[#181818] px-4 py-2.5 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      New Releases
                    </span>
                    <span className="text-[11px] font-semibold text-[#46d369]">
                      3 Updates
                    </span>
                  </div>
                  <div className="divide-y divide-white/10">
                    {notifications.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setShowNotifications(false)}
                        className="flex items-start gap-3 p-3.5 transition hover:bg-white/10"
                      >
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#E50914]/20 text-[#E50914]">
                          <Play className="h-3.5 w-3.5 fill-current" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-[11px] text-[#b3b3b3] line-clamp-2">
                            {item.sub}
                          </p>
                          <span className="mt-1 inline-block text-[10px] font-bold uppercase tracking-wider text-[#E50914]">
                            {item.time}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Authentic Compact Netflix Avatar + Caret */}
          <button
            type="button"
            data-cursor="profile"
            onClick={onOpenWhoIsWatching}
            className="group flex items-center gap-2 focus:outline-none"
            title={`Watching as ${activeProfile.name} (Click to switch)`}
          >
            <div
              className={`relative flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br ${activeProfile.gradient} shadow-md ring-1 ring-white/20 transition-transform group-hover:scale-105 group-hover:ring-white`}
            >
              {/* Mini Netflix Smiley SVG */}
              <svg
                viewBox="0 0 100 100"
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
              >
                <circle cx="32" cy="36" r="6" fill="currentColor" stroke="none" />
                <circle cx="68" cy="36" r="6" fill="currentColor" stroke="none" />
                <path d="M 28 64 Q 50 80 72 64" />
              </svg>
            </div>
            <ChevronDown className="h-4 w-4 text-white/80 transition-transform duration-200 group-hover:rotate-180 group-hover:text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function WhoIsWatchingModal({
  isOpen,
  activeProfile,
  onSelect,
  onClose,
}: {
  isOpen: boolean;
  activeProfile: ViewerProfile;
  onSelect: (profile: ViewerProfile) => void;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#141414]/98 px-6 backdrop-blur-xl"
        >
          <div className="absolute top-6 left-6 md:left-12">
            <span className="font-display text-3xl md:text-4xl tracking-[0.12em] text-[#E50914]">
              SIVACHANDRAN
            </span>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-sans text-3xl md:text-5xl font-medium tracking-tight text-white">
              Who&apos;s watching Sivachandran&apos;s Portfolio?
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#808080]">
              Choose your viewer profile to personalize your streaming experience
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-8">
              {VIEWER_PROFILES.map((profile) => {
                const isSelected = profile.id === activeProfile.id;
                return (
                  <button
                    key={profile.id}
                    type="button"
                    onClick={() => {
                      onSelect(profile);
                      onClose();
                    }}
                    className="group flex flex-col items-center focus:outline-none"
                  >
                    <div
                      className={`relative flex h-28 w-28 md:h-36 md:w-36 items-center justify-center rounded-md bg-gradient-to-br ${profile.gradient} transition-all duration-200 group-hover:scale-105 group-hover:ring-4 group-hover:ring-white ${isSelected ? "ring-4 ring-[#E50914]" : ""
                        }`}
                    >
                      {/* Classic Netflix smiley face eyes + smile SVG */}
                      <svg
                        viewBox="0 0 100 100"
                        className="h-20 w-20 text-white/90 drop-shadow"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                      >
                        <circle cx="32" cy="36" r="5" fill="currentColor" stroke="none" />
                        <circle cx="68" cy="36" r="5" fill="currentColor" stroke="none" />
                        <path d="M 28 62 Q 50 78 72 62" />
                      </svg>

                      <span className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                        {profile.badge}
                      </span>
                    </div>
                    <span className="mt-3 text-sm md:text-base font-medium text-[#808080] transition-colors group-hover:text-white">
                      {profile.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-12">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 border border-[#808080] px-6 py-2 text-xs md:text-sm uppercase tracking-[0.2em] text-[#808080] transition hover:border-white hover:text-white"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Continue Streaming</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
