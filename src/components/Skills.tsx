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
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

const iconSkills = [
  {
    label: "Python",
    tagline: "GenAI + automation",
    icon: pythonIcon,
    tone: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300",
    accent: "from-emerald-400/20 via-emerald-500/10 to-transparent",
  },
  {
    label: "Azure",
    tagline: "AI + cloud services",
    icon: azureIcon,
    tone: "bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-300",
    accent: "from-violet-400/20 via-blue-500/10 to-transparent",
  },
  {
    label: "AWS",
    tagline: "AI + cloud services",
    icon: awsIcon,
    tone: "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-300",
    accent: "from-amber-400/20 via-orange-500/10 to-transparent",
  },
  {
    label: "Node",
    tagline: "APIs + realtime",
    icon: nodeIcon,
    tone: "bg-lime-50 text-lime-600 dark:bg-lime-950/40 dark:text-lime-300",
    accent: "from-lime-400/20 via-emerald-500/10 to-transparent",
  },
  {
    label: "LLM & SLM",
    tagline: "Agentic AI",
    icon: geminiIcon,
    tone: "bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-950/40 dark:text-fuchsia-300",
    accent: "from-fuchsia-400/20 via-pink-500/10 to-transparent",
  },
];

const certifications = [
  { title: "AWS Generative AI Dev - Pro", image: awsBadge },
  { title: "Azure AI Engineer Associate", image: azureAssociateBadge },
  { title: "Azure Fundamentals", image: azureFundamentalsBadge },
];

const aiTools = [
  { name: "Codex", brand: "OpenAI", logo: codexLogo, type: "invert" },
  { name: "GitHub Copilot", brand: "GitHub", logo: copilotLogo, type: "invert" },
  { name: "Claude Code", brand: "Anthropic", logo: claudeLogo, type: "mark" },
  { name: "Antigravity", brand: "Google", logo: antigravityLogo, type: "mark" },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      {/* Large background decorative label */}
      <div className="absolute left-8 top-8 pointer-events-none select-none -z-10">
        <span className="font-display text-[150px] md:text-[220px] font-bold uppercase tracking-[0.1em] text-slate-200/20 dark:text-slate-800/10 leading-none">
          Stack
        </span>
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-violet-500 font-bold">
              Skillset
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
              Tools I use to ship polished experiences.
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          </div>
          <p className="max-w-md text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            A hand-picked array of core frameworks, cloud infrastructure suites, and agentic integrations designed for maximum efficiency.
          </p>
        </motion.div>

        {/* Section 1: Core Technologies Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10"
        >
          {iconSkills.map((skill) => (
            <motion.div
              variants={itemVariants}
              key={skill.label}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[24px] border border-slate-200/60 bg-white/50 dark:border-slate-800/60 dark:bg-slate-950/40 p-5 shadow-sm backdrop-blur-md transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10`} />
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/10">
                  <img
                    src={skill.icon}
                    alt={`${skill.label} logo`}
                    className="h-6 w-6 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-800 dark:text-slate-100 group-hover:text-violet-500 transition-colors">
                    {skill.label}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                    {skill.tagline}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section 2: Split Bento Grid (AI Tools vs Certifications) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel: AI Cockpit Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 rounded-[32px] border border-white/20 dark:border-slate-800/50 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                  AI Cockpit
                </h3>
                <p className="text-xs text-slate-500 mt-1">Daily accelerators for agentic workflows & deployments</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {aiTools.map((tool) => (
                <div key={tool.name} className="relative group rounded-[22px] p-[1.2px] overflow-hidden bg-slate-200/50 dark:bg-slate-850">
                  {/* Rotating colorful Apple intelligence border on hover */}
                  <div className="absolute left-1/2 top-1/2 -z-10 h-[280%] w-[280%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_160deg,#8b5cf6_220deg,#ec4899_280deg,#06b6d4_340deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-apple-glow" />
                  
                  <div className="bg-white/95 dark:bg-slate-900/90 rounded-[21px] p-4 flex items-center gap-3 backdrop-blur-md h-full w-full">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200/20 bg-slate-100/50 dark:bg-slate-950 p-2">
                      <img
                        src={tool.logo}
                        alt={`${tool.name} logo`}
                        className={`h-7 w-7 object-contain ${tool.type === "invert" ? "dark:invert" : ""}`}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {tool.name}
                      </div>
                      <div className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">
                        {tool.brand}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Panel: Certifications Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 rounded-[32px] border border-white/20 dark:border-slate-800/50 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                  Official Certifications
                </h3>
                <p className="text-xs text-slate-500 mt-1">Verified platforms milestones and cloud credentials</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div key={cert.title} className="relative group rounded-[22px] p-[1.2px] overflow-hidden bg-slate-200/50 dark:bg-slate-850">
                  {/* Rotating colorful Apple intelligence border on hover */}
                  <div className="absolute left-1/2 top-1/2 -z-10 h-[280%] w-[280%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_160deg,#eab308_220deg,#ec4899_280deg,#8b5cf6_340deg,transparent_360deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-apple-glow" />
                  
                  <div className="bg-white/95 dark:bg-slate-900/90 rounded-[21px] p-4 flex flex-col items-center justify-between gap-4 backdrop-blur-md h-full w-full">
                    <div className="flex h-28 w-full items-center justify-center rounded-xl bg-slate-100/50 dark:bg-slate-950 p-2 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-[11px] font-semibold text-center text-slate-700 dark:text-slate-200 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors leading-snug">
                      {cert.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
