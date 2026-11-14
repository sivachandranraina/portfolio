import { motion } from "framer-motion";
import awsBadge from "../assets/badges/aws-certified-generative-ai-developer-professional-.png";
import azureAssociateBadge from "../assets/badges/microsoft-certified-associate-badge.svg";
import azureFundamentalsBadge from "../assets/badges/microsoft-certified-fundamentals-badge.svg";

export default function ComicSkills() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 }
    }
  };

  return (
    <section id="skills" className="relative bg-[#09090b] text-[#fafafa] font-['Space_Grotesk'] border-b comic-grid-border overflow-hidden">
      {/* Title Grid */}
      <div className="w-full border-b comic-grid-border p-6 md:p-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[#b5ff14] font-semibold mb-3 block">// SIDE QUESTS</span>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.95] max-w-4xl select-none">
          EXPERIMENT <br />
          <span className="comic-text-outline-neon">& PLAY.</span>
        </h2>
      </div>

      {/* Grid container for 3 big block cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full grid grid-cols-1 md:grid-cols-3 border-b comic-grid-border"
      >
        {/* Card 1: Tech Arsenal */}
        <motion.div
          variants={itemVariants}
          className="p-8 md:p-12 bg-[#b5ff14] text-black border-b md:border-b-0 md:border-r comic-grid-border flex flex-col justify-between min-h-[420px]"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">// 01 / TECH ARSENAL</span>
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mt-4 leading-none text-black">
              CORE CLOUD & PYTHON
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-black/70 mt-2">
              BUILDING SECURE, PERFORMANCE-FIRST ARCHITECTURES
            </p>
            <div className="mt-8 space-y-2.5 font-medium text-sm">
              <div className="flex justify-between border-b border-black/10 pb-1.5">
                <span>Python / FastAPI Systems</span>
                <span className="font-bold">LVL 95</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-1.5">
                <span>Azure & AWS Serverless</span>
                <span className="font-bold">LVL 92</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-1.5">
                <span>Node.js / Express APIs</span>
                <span className="font-bold">LVL 88</span>
              </div>
              <div className="flex justify-between">
                <span>LangChain / RAG Pipelines</span>
                <span className="font-bold">LVL 96</span>
              </div>
            </div>
          </div>
          <a
            href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center justify-center px-6 py-3 bg-[#09090b] text-[#b5ff14] text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 transition-colors rounded self-start"
          >
            VIEW SKILLS →
          </a>
        </motion.div>

        {/* Card 2: AI Cockpit */}
        <motion.div
          variants={itemVariants}
          className="p-8 md:p-12 bg-[#e4e4e7] text-black border-b md:border-b-0 md:border-r comic-grid-border flex flex-col justify-between min-h-[420px]"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">// 02 / AI COCKPIT</span>
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mt-4 leading-none text-black">
              DEVELOPER VELOCITY
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-black/70 mt-2">
              DAILY EXPERIMENTAL CODING SYSTEMS
            </p>
            <div className="mt-8 space-y-2.5 font-medium text-sm">
              <div className="flex justify-between border-b border-black/10 pb-1.5">
                <span>Antigravity AI Agent</span>
                <span className="font-bold text-zinc-600">GOOGLE</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-1.5">
                <span>Claude Code CLI</span>
                <span className="font-bold text-zinc-600">ANTHROPIC</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-1.5">
                <span>GitHub Copilot</span>
                <span className="font-bold text-zinc-600">GITHUB</span>
              </div>
              <div className="flex justify-between">
                <span>Llama / Local Inference</span>
                <span className="font-bold text-zinc-600">META</span>
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="mt-12 inline-flex items-center justify-center px-6 py-3 bg-[#09090b] text-[#fafafa] text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 transition-colors rounded self-start"
          >
            CONNECT NOW →
          </a>
        </motion.div>

        {/* Card 3: Cloud Credentials */}
        <motion.div
          variants={itemVariants}
          className="p-8 md:p-12 bg-[#b5ff14] text-black flex flex-col justify-between min-h-[420px]"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60">// 03 / CREDENTIALS</span>
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight mt-4 leading-none text-black">
              VALIDATED BADGES
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-black/70 mt-2">
              VERIFIED ARCHITECT LEVEL MILESTONES
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <img src={awsBadge} alt="AWS GenAI Badge" className="h-10 w-10 object-contain" />
                <span className="text-xs font-bold leading-tight">AWS Certified Generative AI Developer - Professional</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={azureAssociateBadge} alt="Azure AI Engineer Badge" className="h-10 w-10 object-contain" />
                <span className="text-xs font-bold leading-tight">Microsoft Certified Azure AI Engineer Associate</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={azureFundamentalsBadge} alt="Azure Fundamentals Badge" className="h-10 w-10 object-contain" />
                <span className="text-xs font-bold leading-tight">Microsoft Certified Azure Fundamentals</span>
              </div>
            </div>
          </div>
          <a
            href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center justify-center px-6 py-3 bg-[#09090b] text-[#b5ff14] text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 transition-colors rounded self-start"
          >
            VIEW CV BADGES →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
