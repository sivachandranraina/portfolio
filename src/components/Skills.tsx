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
  { title: "AWS Certified Generative AI Developer - Professional", image: awsBadge },
  { title: "Microsoft Certified Azure AI Engineer Associate", image: azureAssociateBadge },
  { title: "Microsoft Certified Azure Fundamentals", image: azureFundamentalsBadge },
];

const aiTools = [
  {
    name: "Codex",
    brand: "OpenAI",
    logo: codexLogo,
    type: "invert",
  },
  {
    name: "GitHub Copilot",
    brand: "GitHub",
    logo: copilotLogo,
    type: "invert",
  },
  {
    name: "Claude Code",
    brand: "Anthropic",
    logo: claudeLogo,
    type: "mark",
  },
  {
    name: "Antigravity",
    brand: "Google",
    logo: antigravityLogo,
    type: "mark",
  },
];


export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute -right-8 top-2 text-[180px] md:text-[240px] font-display font-semibold uppercase tracking-[0.2em] text-slate-200/50 dark:text-slate-800/40"
        >
          Skills
        </motion.div>
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.p variants={itemVariants} className="font-display text-sm uppercase tracking-[0.3em] text-violet-500">
              Skillset
            </motion.p>
            <motion.h2 variants={itemVariants} className="mt-4 font-display text-3xl font-semibold text-slate-900 dark:text-white">
              Tools I use to ship polished experiences.
            </motion.h2>
          </div>
          <motion.p variants={itemVariants} className="max-w-xl text-base text-slate-600 dark:text-slate-300">
            A mix of modern frameworks, tooling, and design systems that help me move fast
            without sacrificing quality.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {iconSkills.map((skill) => (
            <motion.div
              variants={itemVariants}
              key={skill.label}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-sm p-5 shadow-sm transition hover:border-violet-400 dark:border-slate-700 dark:bg-slate-950/60 dark:hover:border-violet-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
              />
              <div className="relative flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:bg-transparent`}
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.label} logo`}
                    className="h-7 w-7 object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-800 dark:text-slate-100 group-hover:text-violet-500 transition-colors">
                    {skill.label}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {skill.tagline}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-white/70 backdrop-blur-md shadow-xl dark:border-slate-700/60 dark:bg-slate-950/70"
        >
          <div className="relative px-6 py-8">
            <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-fuchsia-400/30 blur-[60px]" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-44 w-44 rounded-full bg-violet-400/30 blur-[60px]" />
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between relative z-10">
              <div>
                <motion.p variants={itemVariants} className="font-display text-sm uppercase tracking-[0.3em]">
                  AI Tools
                </motion.p>
                <motion.h3 variants={itemVariants} className="mt-3 font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  My daily AI cockpit.
                </motion.h3>
              </div>
              <motion.p variants={itemVariants} className="max-w-lg text-sm text-slate-500 dark:text-slate-400">
                A compact toolkit for agentic workflows, coding acceleration, and local
                inference experiments.
              </motion.p>
            </div>
          </div>

          <div className="grid gap-0 border-t border-slate-200/60 dark:border-slate-700/60 lg:grid-cols-4 relative z-10">
            {aiTools.map((tool) => (
              <motion.div
                variants={itemVariants}
                key={tool.name}
                className="group relative overflow-hidden border-b border-slate-200/60 bg-transparent p-6 transition-all hover:bg-slate-100/50 dark:border-slate-700/60 dark:hover:bg-slate-900/50 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200/60 bg-white/90 shadow-sm dark:bg-slate-800/90 dark:border-slate-700 transition-transform group-hover:-translate-y-1 p-2">
                    <img
                      src={tool.logo}
                      alt={`${tool.brand} logo`}
                      className={`h-10 w-10 object-contain drop-shadow-sm ${tool.type === "invert" ? "dark:invert" : ""}`}
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-white transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">
                      {tool.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                      {tool.brand}
                    </div>
                  </div>
                </div>
                <div className="absolute -right-2 bottom-0 text-[64px] font-display font-bold text-slate-200/30 transition-all duration-300 group-hover:text-violet-300/20 group-hover:-translate-y-2 dark:text-slate-700/20 dark:group-hover:text-violet-500/10">
                  {aiTools.findIndex((item) => item.name === tool.name) + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mt-12 overflow-hidden rounded-[28px] border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-xl dark:border-slate-700/60 dark:bg-slate-950/70"
        >
          <div className="relative px-6 py-8">
            <div className="pointer-events-none absolute -left-24 top-6 h-40 w-40 rounded-full bg-amber-400/20 blur-[60px]" />
            <div className="pointer-events-none absolute -right-20 bottom-4 h-44 w-44 rounded-full bg-violet-400/20 blur-[60px]" />
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between relative z-10">
              <div>
                <motion.p variants={itemVariants} className="font-display text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Certifications
                </motion.p>
                <motion.h3 variants={itemVariants} className="mt-3 font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Proof of the work.
                </motion.h3>
              </div>
              <motion.p variants={itemVariants} className="max-w-lg text-sm text-slate-500 dark:text-slate-400">
                A snapshot of official milestones across cloud and AI platforms.
              </motion.p>
            </div>
          </div>

          <div className="grid gap-0 border-t border-slate-200/60 dark:border-slate-700/60 lg:grid-cols-3 relative z-10">
            {certifications.map((cert) => (
              <motion.div
                variants={itemVariants}
                key={cert.title}
                className="group relative overflow-hidden border-b border-slate-200/60 bg-slate-50/40 p-6 transition hover:bg-white/80 dark:border-slate-700/60 dark:bg-slate-900/30 dark:hover:bg-slate-900/80 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="pointer-events-none absolute inset-0">
                  <img
                    src={cert.image}
                    alt=""
                    aria-hidden
                    className="h-full w-full object-cover blur-2xl opacity-40 dark:opacity-20"
                  />
                  <div className="absolute inset-0 bg-white/50 dark:bg-slate-950/50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex flex-col items-center gap-5 text-center">
                  <div className="flex h-44 w-full items-center justify-center rounded-2xl border border-slate-200/60 bg-white/90 p-4 shadow-sm backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/90">
                    <img src={cert.image} alt={cert.title} className="h-full w-full object-contain filter drop-shadow-md" />
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {cert.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
