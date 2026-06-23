import { motion } from "framer-motion";
import { User, Shield, Terminal, Globe } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const fadeUp: any = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 16 } 
    }
  };

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* Decorative large heading in background */}
      <div className="absolute right-10 top-10 pointer-events-none select-none -z-10">
        <span className="font-display text-[150px] md:text-[220px] font-bold uppercase tracking-[0.1em] text-slate-200/20 dark:text-slate-800/10 leading-none">
          Intro
        </span>
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-left"
        >
          <p className="font-display text-xs uppercase tracking-[0.3em] text-violet-500 font-bold">
            About Me
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold leading-tight text-slate-900 dark:text-white max-w-2xl">
            A curious developer bridging the gap between Cloud architecture and Agentic AI.
          </h2>
          <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Main Story Panel (Spans 2 columns on desktop) */}
          <motion.div
            variants={fadeUp}
            className="glass-panel p-8 rounded-[32px] md:col-span-2 flex flex-col justify-between border border-white/20 dark:border-slate-800/50 shadow-xl relative group overflow-hidden"
          >
            {/* Hover card border highlight */}
            <div className="absolute inset-[-1.5px] rounded-[34px] bg-gradient-to-tr from-violet-500/20 via-transparent to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

            <div className="space-y-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                <User className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                My Story
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 font-light">
                <p>
                  My engineering journey began with crafting polished client interfaces, which quickly expanded into high-scale API systems, cloud platforms, and building solutions with generative AI models.
                </p>
                <p>
                  Over my career at Presidio, Commutatus, and Infofaces, I have helped deliver enterprise AI copilots, real-time analytics suites, and resilient system nodes that support hundreds of corporate operations daily.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Quick Highlights Widget */}
          <motion.div
            variants={fadeUp}
            className="glass-panel p-8 rounded-[32px] flex flex-col justify-between border border-white/20 dark:border-slate-800/50 shadow-xl relative group overflow-hidden"
          >
            <div className="absolute inset-[-1.5px] rounded-[34px] bg-gradient-to-tr from-fuchsia-500/20 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

            <div className="space-y-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-500">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Snapshot
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Chennai, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-violet-500" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Agentic AI & RAG</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-fuchsia-500" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">9+ Years Industry XP</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-6">
              {["AWS Certified", "Azure Certified", "GenAI Dev"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-200/50 dark:bg-slate-800/60 px-4 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 border border-slate-300/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Philosophy / Focus Panel */}
          <motion.div
            variants={fadeUp}
            className="glass-panel p-8 rounded-[32px] flex flex-col justify-between border border-white/20 dark:border-slate-800/50 shadow-xl relative group overflow-hidden"
          >
            <div className="absolute inset-[-1.5px] rounded-[34px] bg-gradient-to-tr from-cyan-500/20 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

            <div className="space-y-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Philosophy
              </h3>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 font-light">
                I thrive at the intersection of clouds, Node/Python backends, and agentic workflows. My goal is simple: construct reliable pipelines that scale easily and deliver clean value.
              </p>
            </div>
          </motion.div>

          {/* Card 4: What I Do Panel (Spans 2 columns on desktop) */}
          <motion.div
            variants={fadeUp}
            className="glass-panel p-8 rounded-[32px] md:col-span-2 flex flex-col justify-between border border-white/20 dark:border-slate-800/50 shadow-xl relative group overflow-hidden"
          >
            <div className="absolute inset-[-1.5px] rounded-[34px] bg-gradient-to-tr from-amber-500/20 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />

            <div className="space-y-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Tech Strategy
              </h3>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 font-light">
                Whether deploying LLM agents, organizing complex index structures for vector storage, or securing serverless container groups, I focus on clean abstraction layers and structured logging to make sure components behave when traffic spikes.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
