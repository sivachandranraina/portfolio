import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 py-32 dark:bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute -left-10 top-6 text-[180px] md:text-[240px] font-display font-semibold uppercase tracking-[0.2em] text-slate-200/50 dark:text-slate-800/40"
        >
          About
        </motion.div>
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 md:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p variants={fadeUp} className="font-display text-sm uppercase tracking-[0.3em] text-violet-500">
            About
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-6 font-display text-4xl font-semibold leading-tight text-slate-900 dark:text-white">
            A curious builder who turned cloud and AI into a daily playground.
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-violet-400 to-indigo-500" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300 bg-white/5 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200/20 dark:border-slate-800/40 backdrop-blur-md shadow-2xl"
        >
          <motion.p variants={fadeUp}>
            My journey started with front‑end builds and quickly snowballed into a love for
            Python, cloud platforms, and the magic of Generative AI. At Presidio, Commutatus,
            and Infofaces, I got to ship real products - from GenAI copilots to analytics
            dashboards and enterprise portals that teams actually rely on every day.
          </motion.p>
          <motion.p variants={fadeUp}>
            These days, I happily live at the intersection of Azure + AWS, Node APIs, and
            modern web stacks. I’m the person who loves wiring RAG pipelines, building
            agentic AI workflows, polishing UX details, and making sure a system behaves
            even when traffic spikes at 2 AM.
          </motion.p>
          <motion.p variants={fadeUp}>
            If there’s a chance to turn a messy problem into a clean, fast, friendly product,
            I’m in - especially when the solution blends cloud scale with AI‑powered insight.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-4">
            {["Chennai, India", "Agents", "GenAI + Cloud"].map((tag) => (
              <motion.span
                key={tag}
                className="cursor-pointer rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium shadow-sm transition-colors hover:border-violet-300 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-violet-500 dark:hover:text-violet-300"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
