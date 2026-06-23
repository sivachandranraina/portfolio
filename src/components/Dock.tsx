import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Cpu, Briefcase, Mail } from "lucide-react";

interface DockItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

const dockItems: DockItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "contact", label: "Connect", icon: Mail },
];

export default function Dock() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Monitor scroll to update active section in dock automatically
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of dockItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-[999] -translate-x-1/2 px-4 py-2 w-auto max-w-[95vw]">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="glass-dock flex items-end justify-center gap-4 rounded-[24px] px-4 py-3"
      >
        {dockItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredIndex === idx;

          // Calculate dynamic size adjustments for macOS style magnification
          let scale = 1;
          let yOffset = 0;

          if (hoveredIndex !== null) {
            const distance = Math.abs(idx - hoveredIndex);
            if (distance === 0) {
              scale = 1.3;
              yOffset = -12;
            } else if (distance === 1) {
              scale = 1.15;
              yOffset = -6;
            }
          }

          return (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-200"
              style={{
                scale,
                y: yOffset,
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Navigate to ${item.label}`}
            >
              {/* Liquid selector bubble behind the active icon */}
              {isActive && (
                <motion.div
                  layoutId="dockBubble"
                  className="absolute inset-0 bg-white/60 border border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.06),inset_0_1.5px_1.5px_rgba(255,255,255,1)] dark:bg-white/10 dark:border-white/10 dark:shadow-[0_4px_12px_rgba(0,0,0,0.3),inset_0_1.5px_1.5px_rgba(255,255,255,0.15)] rounded-2xl -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 26,
                  }}
                />
              )}

              {/* Hover text preview popup */}
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -45, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute font-display text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-800 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-800 px-3 py-1 rounded-full shadow-md pointer-events-none backdrop-blur-sm"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Icon component */}
              <Icon
                className={`h-5 w-5 transition-colors duration-300 ${
                  isActive
                    ? "text-violet-600 dark:text-violet-400"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                }`}
              />

              {/* Active subtle indicator dot */}
              {isActive && (
                <motion.span
                  layoutId="dockDot"
                  className="absolute bottom-1 h-1 w-1 rounded-full bg-violet-600 dark:bg-violet-400"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 26,
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.nav>
    </div>
  );
}
