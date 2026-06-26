import { motion } from "framer-motion";

export default function LiquidBackground() {
  // Config for 6 floating blobs with distinct gradient themes and movement paths
  const blobs = [
    {
      color: "bg-gradient-to-br from-slate-200/15 via-indigo-200/10 to-slate-300/5 dark:from-slate-800/15 dark:via-indigo-950/10 dark:to-slate-900/5",
      size: "w-[300px] h-[300px] md:w-[500px] md:h-[500px]",
      x: ["0%", "25%", "-15%", "10%", "0%"],
      y: ["0%", "-30%", "20%", "-10%", "0%"],
      scale: [1, 1.2, 0.9, 1.1, 1],
      rotate: [0, 90, 180, 270, 360],
      duration: 28,
    },
    {
      color: "bg-gradient-to-br from-indigo-200/12 via-slate-200/8 to-indigo-300/5 dark:from-indigo-950/12 dark:via-slate-900/8 dark:to-indigo-900/5",
      size: "w-[250px] h-[250px] md:w-[450px] md:h-[450px]",
      x: ["0%", "-25%", "20%", "-15%", "0%"],
      y: ["0%", "25%", "-20%", "30%", "0%"],
      scale: [1, 0.9, 1.15, 0.85, 1],
      rotate: [0, -90, -180, -270, -360],
      duration: 24,
    },
    {
      color: "bg-gradient-to-br from-slate-300/10 via-indigo-200/8 to-slate-200/5 dark:from-slate-800/10 dark:via-indigo-950/8 dark:to-slate-900/5",
      size: "w-[280px] h-[280px] md:w-[480px] md:h-[480px]",
      x: ["10%", "-15%", "25%", "-10%", "10%"],
      y: ["-10%", "20%", "-30%", "15%", "-10%"],
      scale: [1.1, 0.95, 1.2, 1.05, 1.1],
      rotate: [45, 135, 225, 315, 405],
      duration: 32,
    },
    {
      color: "bg-gradient-to-br from-slate-200/8 via-slate-100/5 to-indigo-200/5 dark:from-slate-900/8 dark:via-slate-950/5 dark:to-indigo-950/3",
      size: "w-[220px] h-[220px] md:w-[380px] md:h-[380px]",
      x: ["-10%", "15%", "-20%", "10%", "-10%"],
      y: ["20%", "-15%", "25%", "-20%", "20%"],
      scale: [0.9, 1.1, 0.85, 1.15, 0.9],
      rotate: [90, 0, -90, -180, -270],
      duration: 22,
    },
    {
      color: "bg-gradient-to-br from-slate-300/8 via-indigo-200/5 to-slate-200/3 dark:from-slate-850/8 dark:via-indigo-900/5 dark:to-slate-900/3",
      size: "w-[240px] h-[240px] md:w-[420px] md:h-[420px]",
      x: ["15%", "5%", "-15%", "20%", "15%"],
      y: ["15%", "-25%", "10%", "-15%", "15%"],
      scale: [1.05, 0.9, 1.1, 0.95, 1.05],
      rotate: [-45, -135, -225, -315, -360],
      duration: 30,
    },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden bg-slate-50 transition-colors duration-700 dark:bg-slate-950">
      {/* Container applying the liquid gooey filter */}
      <div className="liquid-gooey relative h-full w-full opacity-45 dark:opacity-25">
        {blobs.map((blob, idx) => (
          <motion.div
            key={idx}
            className={`absolute rounded-full blur-[10px] ${blob.size} ${blob.color}`}
            style={{
              left: `${20 + idx * 15}%`,
              top: `${15 + (idx % 3) * 20}%`,
            }}
            animate={{
              x: blob.x,
              y: blob.y,
              scale: blob.scale,
              rotate: blob.rotate,
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* SVG gooey liquid filter definition */}
      <svg className="absolute h-0 w-0 hidden" aria-hidden="true">
        <defs>
          <filter id="liquid-goo">
            {/* Blur the graphic elements to merge them */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="24" result="blur" />
            {/* Apply a contrast matrix that sharpens the alpha channel, creating organic liquid boundary connections */}
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            {/* Blend the original shapes back atop the gooey result to preserve detail */}
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Double layer frosted glass blur + Ambient light mixer */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[110px] dark:bg-slate-950/60 dark:backdrop-blur-[140px]" />

      {/* Grid overlay for digital alignment feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
    </div>
  );
}
