import commutatusOutside from "../assets/experience/commutatus-outside.jpg";
import infofacesOutside from "../assets/experience/infofaces-outside.jpg";
import presidioOutside from "../assets/experience/presidio-outside.jpg";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, Briefcase, Award } from "lucide-react";

const experiences = [
  {
    company: "Presidio",
    role: "Lead Engineer",
    period: "Mar, 2017 - Present",
    cover: presidioOutside,
    accent: "from-violet-500/20 via-indigo-500/10 to-transparent",
    glowGradient: "bg-[conic-gradient(from_0deg,transparent_0deg,transparent_160deg,#8b5cf6_220deg,#6366f1_280deg,#06b6d4_340deg,transparent_360deg)]",
    summary:
      "A 1000+ headcount firm where I lead large-scale development pipelines, owning Generative AI orchestrations and enterprise API infrastructures.",
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
    glowGradient: "bg-[conic-gradient(from_0deg,transparent_0deg,transparent_160deg,#10b981_220deg,#14b8a6_280deg,#06b6d4_340deg,transparent_360deg)]",
    summary:
      "A fast-paced product startup environment where I shipped frontend logic and optimized user search funnels.",
    projects: [
      {
        name: "Youth Opportunity Portal",
        detail: "Engineered responsive student discovery directories and application portals.",
      }
    ],
  },
  {
    company: "Infofaces",
    role: "UI Developer",
    period: "Jun, 2015 - Dec, 2016",
    cover: infofacesOutside,
    accent: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
    glowGradient: "bg-[conic-gradient(from_0deg,transparent_0deg,transparent_160deg,#d946ef_220deg,#ec4899_280deg,#f43f5e_340deg,transparent_360deg)]",
    summary:
      "A startup environment where I built mortgage dashboards, candidate interviews modules, and operations reporting panels.",
    projects: [
      {
        name: "TMG",
        detail: "Mortgage analytics dashboard with KPI and trend reporting.",
      },
      {
        name: "Recruitment Suite",
        detail: "Virtual interview scheduling workflow with structured evaluations.",
      },
      {
        name: "ERP Operations",
        detail: "ERP modules for resource inventory, time tracking, and analytics reporting.",
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
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 90, damping: 16 } 
    }
  };

  return (
    <section id="work" ref={containerRef} className="relative py-28 px-6 overflow-hidden">
      {/* Background large caption */}
      <div className="absolute left-6 top-6 pointer-events-none select-none -z-10">
        <span className="font-display text-[140px] md:text-[220px] font-bold uppercase tracking-[0.1em] text-slate-200/20 dark:text-slate-800/10 leading-none">
          History
        </span>
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] text-violet-500 font-bold">
              Experience
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
              Places I helped build and scale.
            </h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          </div>
          <p className="max-w-md text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            A comprehensive track record of system ownership, team collaboration, and flagship feature delivery.
          </p>
        </motion.div>

        {/* Timeline Stream */}
        <div className="relative mt-12">
          {/* Fiber optic glowing timeline track */}
          <div className="absolute left-6 md:left-[45px] top-6 bottom-6 w-[2px] bg-slate-200 dark:bg-slate-800/40 hidden md:block z-0">
            <motion.div
              style={{ scaleY: pathLength, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-emerald-400 origin-top"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-12 relative z-10"
          >
            {experiences.map((experience, index) => (
              <motion.article
                variants={cardVariants}
                key={experience.company}
                className="relative ml-0 md:ml-20 group"
              >
                {/* Visual timeline node */}
                <div className="absolute -left-[61px] top-[40px] w-6 h-6 rounded-full border-4 border-slate-100 dark:border-slate-950 bg-violet-500 hidden md:block z-20 shadow-md group-hover:scale-125 transition-transform duration-300" />

                {/* Thick glass frame outline and box shadows */}
                <div className="relative rounded-[30px] p-[1px] overflow-hidden bg-white/40 dark:bg-slate-950/20 border border-white/40 dark:border-white/10 shadow-[inset_0_1.5px_1.5px_rgba(255,255,255,0.6),0_12px_36px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1.5px_1.5px_rgba(255,255,255,0.12),0_24px_48px_rgba(0,0,0,0.4)] backdrop-blur-md">
                  {/* Reflective light sweep sweep */}
                  <div className="absolute inset-0 w-[50%] -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine pointer-events-none z-20" />

                  {/* Atmospheric brand cover blur in background of the card */}
                  <div className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.07] pointer-events-none">
                    <img
                      src={experience.cover}
                      alt=""
                      className="h-full w-full object-cover scale-110 filter blur-[15px]"
                      aria-hidden
                    />
                  </div>

                  {/* Glass inner container details */}
                  <div className="p-6 md:p-10 relative z-10">
                    <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                      {/* Left: Summary & Metadata */}
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/10 bg-violet-500/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                            <Calendar className="h-3 w-3" />
                            {experience.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-850 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            <Briefcase className="h-3 w-3" />
                            {experience.role}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                            {experience.company}
                          </h3>
                        </div>

                        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-350 font-light">
                          {experience.summary}
                        </p>
                      </div>

                      {/* Right: Key Projects list inside glass box */}
                      <div className="rounded-[24px] border border-white/60 bg-white/45 p-6 dark:border-white/10 dark:bg-slate-900/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-md">
                        <div className="flex items-center gap-2 mb-5">
                          <Award className="h-4 w-4 text-violet-500" />
                          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                            Top Projects
                          </span>
                        </div>

                        <div className="space-y-5">
                          {experience.projects.map((project, pIdx) => (
                            <div key={project.name} className="flex gap-4 group/project">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-violet-600 dark:bg-slate-900 dark:text-violet-400 border border-slate-200/10">
                                {pIdx + 1}
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover/project:text-violet-500 dark:group-hover/project:text-violet-400 transition-colors">
                                  {project.name}
                                </h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-light">
                                  {project.detail}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Numeric index overlay */}
                    <div className="absolute right-6 bottom-4 select-none opacity-[0.03] dark:opacity-[0.04] pointer-events-none hidden md:block">
                      <span className="font-display text-[120px] font-bold tracking-tighter leading-none">
                        {String(experiences.length - index).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
