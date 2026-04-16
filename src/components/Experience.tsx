import commutatusOutside from "../assets/experience/commutatus-outside.jpg";
import infofacesOutside from "../assets/experience/infofaces-outside.jpg";
import presidioOutside from "../assets/experience/presidio-outside.jpg";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const experiences = [
  {
    company: "Presidio",
    role: "Lead Engineer",
    period: "Mar, 2017 - Present",
    cover: presidioOutside,
    accent: "from-violet-500/20 via-indigo-500/10 to-transparent",
    summary:
      "A 1000+ headcount firm that gave me space to explore my full potential, owning large-scale builds with real enterprise rigor.",
    projects: [
      {
        name: "CHOP AI",
        detail: "Led a RAG-based GenAI assistant for policy and procedure search using Azure OpenAI + AI Search, delivered with Functions and a React chat UI.",
      },
      {
        name: "Synapse AI",
        detail: "GenAI analytics app with chat over dashboards and datasets, delivering faster insights for Patient Affairs workflows.",
      },
      {
        name: "ECU Health AI",
        detail: "GenAI decision support to surface guideline-based antimicrobial recommendations with context-aware summaries.",
      }
    ],
  },
  {
    company: "Commutatus",
    role: "Frontend Developer",
    period: "Jan, 2017 - Feb, 2017",
    cover: commutatusOutside,
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    summary:
      "A 20+ headcount startup — short time, heavy learning, and a turning point that redirected my career trajectory.",
    projects: [
      {
        name: "Youth Oppourtunity Portal",
        detail: "Portal for students to discover and apply to live opportunities.",
      }
    ],
  },
  {
    company: "Infofaces",
    role: "UI Developer",
    period: "Jun, 2015 - Dec, 2016",
    cover: infofacesOutside,
    accent: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
    summary:
      "A 50+ headcount startup that handed me my first break and the momentum to start my career.",
    projects: [
      {
        name: "TMG",
        detail: "Mortgage analytics dashboard with KPI and trend reporting.",
      },
      {
        name: "Recruitment Management System",
        detail: "Virtual interview workflow with scheduling and evaluation.",
      },
      {
        name: "ERP",
        detail: "ERP suite for operations, inventory, and reporting.",
      },
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="work" ref={containerRef} className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute -left-8 top-4 text-[150px] md:text-[240px] font-display font-semibold uppercase tracking-[0.1em] leading-none text-slate-200/50 dark:text-slate-800/30"
        >
          Work<br />Experience
        </motion.div>
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-violet-500">
              Work Experience
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
              Places I helped build and scale.
            </h2>
          </div>
          <p className="max-w-xl text-base text-slate-600 dark:text-slate-300">
            A closer look at the companies, environments, and flagship projects I delivered.
          </p>
        </motion.div>

        <div className="mt-14 relative">
          {/* Animated SVG Timeline connecting the items */}
          <div className="absolute left-6 md:left-[50px] top-10 bottom-10 w-0.5 bg-slate-200 dark:bg-slate-800/50 hidden md:block z-0">
            <motion.div 
              style={{ scaleY: pathLength, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-violet-400 via-indigo-500 to-fuchsia-500 rounded-full"
            />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16 relative z-10"
          >
            {experiences.map((experience, index) => (
              <motion.article
                variants={cardVariants}
                key={experience.company}
                className="relative overflow-hidden rounded-[30px] border border-slate-200/60 bg-white/70 backdrop-blur-md p-6 shadow-xl dark:border-slate-800/60 dark:bg-slate-900/40 md:p-10 ml-0 md:ml-20 transition-all hover:shadow-2xl hover:border-violet-200 dark:hover:border-violet-900"
              >
                {/* Timeline node */}
                <div className="absolute -left-[50px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-slate-900 dark:border-white bg-violet-400 hidden md:block" />

                <div className="absolute inset-0 z-0">
                  <img
                    src={experience.cover}
                    alt=""
                    className="h-full w-full scale-110 object-cover blur-[20px] opacity-40 mix-blend-overlay dark:opacity-30"
                    aria-hidden
                  />
                  <div className="absolute inset-0 bg-white/80 dark:bg-slate-950/80" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${experience.accent} opacity-50`} />
                </div>

                <div className="relative z-10 grid gap-8 md:grid-cols-[0.55fr_0.45fr]">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                      <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 font-semibold text-violet-700 dark:border-violet-900/50 dark:bg-violet-900/30 dark:text-violet-300 shadow-sm">
                        {experience.period}
                      </span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">{experience.role}</span>
                    </div>

                    <div className="relative">
                      <h3 className="mt-3 font-display text-5xl font-semibold leading-[0.95] text-slate-900 dark:text-white sm:text-7xl tracking-tight">
                        {experience.company}
                      </h3>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-6 h-1 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-full" 
                      />
                    </div>

                    <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300/90 font-light">
                      {experience.summary}
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200/50 bg-white/80 p-6 shadow-md backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/60 transition-transform hover:scale-[1.02]">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-6 font-semibold">
                      Top Projects
                    </p>
                    <div className="space-y-6">
                      {experience.projects.map((project, projectIndex) => (
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (projectIndex * 0.1) }}
                          key={project.name} 
                          className="flex gap-4 group cursor-default"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-violet-600 transition-colors group-hover:bg-violet-100 group-hover:text-violet-700 dark:bg-slate-800 dark:group-hover:bg-violet-900/50 dark:group-hover:text-violet-300">
                            #{String(projectIndex + 1)}
                          </div>
                          <div>
                            <div className="text-base font-semibold text-slate-900 dark:text-slate-100 transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">
                              {project.name}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                              {project.detail}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -right-6 top-10 hidden select-none md:block">
                  <span className="font-display text-[150px] font-bold text-slate-900/5 dark:text-white/5 tracking-tighter">
                    {String(experiences.length - index).padStart(2, '0')}
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
