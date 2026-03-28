import commutatusOutside from "../assets/experience/commutatus-outside.jpg";
import infofacesOutside from "../assets/experience/infofaces-outside.jpg";
import presidioOutside from "../assets/experience/presidio-outside.jpg";

const experiences = [
  {
    company: "Presidio",
    role: "Lead Engineer",
    period: "Mar, 2017 - Present",
    cover: presidioOutside,
    accent: "from-sky-500/20 via-indigo-500/10 to-transparent",
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
  return (
    <section id="work" className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-8 top-4 text-[240px] font-display font-semibold uppercase tracking-[0.2em] text-slate-200/50 dark:text-slate-800/40">
          Work<br></br>Experience
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Work Experience
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900 dark:text-white">
              Places I helped build and scale.
            </h2>
          </div>
          <p className="max-w-xl text-base text-slate-600 dark:text-slate-300">
            A closer look at the companies, environments, and flagship projects I delivered.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/70 md:p-10"
            >
              <div className="absolute inset-0">
                <img
                  src={experience.cover}
                  alt=""
                  className="h-full w-full scale-110 object-cover blur-[15px]"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-white/85 dark:bg-slate-950/75" />
                <div className={`absolute inset-0 bg-gradient-to-br ${experience.accent}`} />
              </div>

              <div className="relative z-10 grid gap-8 md:grid-cols-[0.55fr_0.45fr]">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 dark:border-slate-700 dark:bg-slate-800">
                      {experience.period}
                    </span>
                    <span className="font-bold">{experience.role}</span>
                  </div>

                  <div className="relative">
                    {/* <p className="font-display text-[11px] uppercase tracking-[0.6em] text-slate-400 dark:text-slate-500">
                      Company
                    </p> */}
                    <h3 className="mt-3 font-display text-5xl font-semibold leading-[0.95] text-slate-900 dark:text-white sm:text-6xl">
                      {experience.company}
                    </h3>
                    <div className="mt-4 h-px w-24 bg-gradient-to-r from-slate-300 to-transparent dark:from-slate-600" />
                  </div>

                  <p className="text-base text-slate-600 dark:text-slate-300">
                    {experience.summary}
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    Top Projects
                  </p>
                  <div className="mt-6 space-y-5">
                    {experience.projects.map((project, projectIndex) => (
                      <div key={project.name} className="flex gap-4">
                        <div className="flex h-10 w-10 items-center justify-center text-sm font-semibold text-slate-600 dark:text-slate-300">
                          #{String(projectIndex + 1)}
                        </div>
                        <div>
                          <div className="text-base font-semibold text-slate-900 dark:text-white">
                            {project.name}
                          </div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">
                            {project.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-3 top-6 hidden select-none md:block">
                <span className="font-display text-[120px] font-semibold text-slate-200/90 dark:text-slate-700/80">
                  {String(experiences.length - index)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
