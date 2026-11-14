import commutatusOutside from "../assets/experience/commutatus-outside.jpg";
import infofacesOutside from "../assets/experience/infofaces-outside.jpg";
import presidioOutside from "../assets/experience/presidio-outside.jpg";

import { motion } from "framer-motion";
import { Film, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    seasonNumber: 3,
    seasonLabel: "Season 3 (Current)",
    company: "Presidio",
    role: "Associate Architect",
    period: "Mar, 2017 - Present",
    highlight: "1000+ Headcount • Flagship Era",
    maturity: "ENTERPRISE",
    cover: presidioOutside,
    summary:
      "A 1000+ headcount firm that gave me space to explore my full potential, owning large-scale builds with real enterprise rigor.",
    projects: [
      {
        name: "CHOP AI",
        runtime: "52m",
        tag: "RAG + Azure OpenAI",
        detail:
          "Led a RAG-based GenAI assistant for policy and procedure search using Azure OpenAI + AI Search, delivered with Functions and a React chat UI.",
      },
      {
        name: "Synapse AI",
        runtime: "46m",
        tag: "GenAI Analytics",
        detail:
          "GenAI analytics app with chat over dashboards and datasets, delivering faster insights for Patient Affairs workflows.",
      },
      {
        name: "ECU Health AI",
        runtime: "49m",
        tag: "Clinical Decision AI",
        detail:
          "GenAI decision support to surface guideline-based antimicrobial recommendations with context-aware summaries.",
      },
    ],
  },
  {
    seasonNumber: 2,
    seasonLabel: "Season 2",
    company: "Commutatus",
    role: "Frontend Developer",
    period: "Jan, 2017 - Feb, 2017",
    highlight: "20+ Startup • Turning Point",
    maturity: "STARTUP",
    cover: commutatusOutside,
    summary:
      "A 20+ headcount startup — short time, heavy learning, and a turning point that redirected my career trajectory.",
    projects: [
      {
        name: "Youth Oppourtunity Portal",
        runtime: "44m",
        tag: "Live Platform",
        detail:
          "Portal for students to discover and apply to live opportunities.",
      },
    ],
  },
  {
    seasonNumber: 1,
    seasonLabel: "Season 1 (Pilot)",
    company: "Infofaces",
    role: "UI Developer",
    period: "Jun, 2015 - Dec, 2016",
    highlight: "50+ Startup • Career Debut",
    maturity: "ORIGIN",
    cover: infofacesOutside,
    summary:
      "A 50+ headcount startup that handed me my first break and the momentum to start my career.",
    projects: [
      {
        name: "TMG",
        runtime: "41m",
        tag: "Analytics KPI",
        detail: "Mortgage analytics dashboard with KPI and trend reporting.",
      },
      {
        name: "Recruitment Management System",
        runtime: "39m",
        tag: "Virtual Workflow",
        detail:
          "Virtual interview workflow with scheduling and evaluation.",
      },
      {
        name: "ERP",
        runtime: "45m",
        tag: "Enterprise Suite",
        detail: "ERP suite for operations, inventory, and reporting.",
      },
    ],
  },
];

export default function Experience() {
  const [selectedSeason, setSelectedSeason] = useState<string>("all");

  const filteredExperiences =
    selectedSeason === "all"
      ? experiences
      : experiences.filter((e) => e.company === selectedSeason);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#141414] py-20 md:py-28 border-t border-white/5"
    >
      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute -left-6 top-4 font-display text-[150px] md:text-[240px] uppercase tracking-[0.08em] leading-none text-white/[0.025] select-none"
        >
          EPISODES
        </motion.div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* Header + Netflix Season Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#E50914]">
              <Film className="h-3.5 w-3.5" />
              <span>Work Experience &#x2022; 3 Seasons</span>
            </div>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide text-white">
              Places I helped build and scale.
            </h2>
            <p className="mt-2 max-w-xl text-sm md:text-base text-[#b3b3b3]">
              A closer look at the companies, environments, and flagship
              projects I delivered.
            </p>
          </div>

          {/* Netflix Season Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedSeason("all")}
              className={`rounded px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                selectedSeason === "all"
                  ? "bg-[#E50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]"
                  : "border border-white/20 bg-[#181818] text-[#b3b3b3] hover:border-white/50 hover:text-white"
              }`}
            >
              All Seasons (3)
            </button>
            {experiences.map((exp) => (
              <button
                key={exp.company}
                type="button"
                onClick={() => setSelectedSeason(exp.company)}
                className={`rounded px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                  selectedSeason === exp.company
                    ? "bg-[#E50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]"
                    : "border border-white/20 bg-[#181818] text-[#b3b3b3] hover:border-white/50 hover:text-white"
                }`}
              >
                S{exp.seasonNumber}: {exp.company}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Seasons & Episodes List */}
        <div className="mt-12 space-y-12">
          {filteredExperiences.map((experience) => (
            <motion.article
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              key={experience.company}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#181818] shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-colors hover:border-white/25"
            >
              {/* Season Banner Header with Company Cover Photo */}
              <div className="relative min-h-[260px] md:min-h-[300px] w-full overflow-hidden">
                <img
                  src={experience.cover}
                  alt={`${experience.company} office`}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Netflix multi-directional dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-[#181818]/85 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent" />

                {/* Giant Season Number Watermark on Right */}
                <div className="pointer-events-none absolute right-6 top-4 hidden select-none md:block">
                  <span className="font-display text-[130px] leading-none text-white/10">
                    S0{experience.seasonNumber}
                  </span>
                </div>

                {/* Season Banner Metadata */}
                <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-10">
                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                    <span className="rounded bg-[#E50914] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                      {experience.seasonLabel}
                    </span>
                    <span className="font-bold text-[#46d369]">
                      {experience.highlight}
                    </span>
                    <span className="rounded border border-white/30 bg-black/40 px-2 py-0.5 text-[11px] text-white">
                      {experience.period}
                    </span>
                    <span className="rounded border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#b3b3b3]">
                      {experience.maturity}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-baseline gap-4">
                    <h3 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-wide text-white">
                      {experience.company}
                    </h3>
                    <span className="text-base md:text-xl font-semibold text-[#E50914]">
                      &#x2022; {experience.role}
                    </span>
                  </div>

                  <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-[#d2d2d2]">
                    {experience.summary}
                  </p>
                </div>
              </div>

              {/* Episodes List (Flagship Projects) */}
              <div className="border-t border-white/10 bg-[#141414]/60 p-6 md:p-10">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#E50914]" />
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-white">
                      Top Projects &#x2022; {experience.projects.length}{" "}
                      {experience.projects.length === 1 ? "Episode" : "Episodes"}
                    </span>
                  </div>
                  <span className="text-xs text-[#808080]">
                    Streamed in 4K Enterprise Rigor
                  </span>
                </div>

                <div className="divide-y divide-white/10">
                  {experience.projects.map((project, projectIndex) => (
                    <div
                      key={project.name}
                      className="group/ep flex flex-col gap-4 py-5 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:px-4 rounded-md"
                    >
                      {/* Episode Badge */}
                      <div className="flex items-center gap-4 shrink-0">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-[#202020] font-display text-xl text-white transition-colors group-hover/ep:border-[#E50914] group-hover/ep:bg-[#E50914]">
                          E{projectIndex + 1}
                        </div>
                      </div>

                      {/* Episode Title, Description & Runtime */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <h4 className="text-base md:text-lg font-bold text-white group-hover/ep:text-[#E50914] transition-colors">
                              {project.name}
                            </h4>
                            <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#b3b3b3]">
                              {project.tag}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-[#808080]">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#46d369]" />
                            <span>{project.runtime}</span>
                          </div>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#b3b3b3]">
                          {project.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
