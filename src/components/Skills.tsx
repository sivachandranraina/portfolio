import awsBadge from "../assets/badges/aws-certified-generative-ai-developer-professional-.png";
import azureAssociateBadge from "../assets/badges/microsoft-certified-associate-badge.svg";
import azureFundamentalsBadge from "../assets/badges/microsoft-certified-fundamentals-badge.svg";
import awsIcon from "../assets/icons/aws.svg";
import azureIcon from "../assets/icons/azure.svg";
import geminiIcon from "../assets/icons/gemini.svg";
import nodeIcon from "../assets/icons/nodejs.svg";
import pythonIcon from "../assets/icons/python.png";
import codexLogo from "../assets/icons/ai-tools/codex.svg";
import claudeLogo from "../assets/icons/ai-tools/claude.svg";
import copilotLogo from "../assets/icons/ai-tools/github-copilot.svg";
import ollamaLogo from "../assets/icons/ai-tools/ollama.svg";

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
    tone: "bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-300",
    accent: "from-sky-400/20 via-blue-500/10 to-transparent",
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
    type: "mark",
  },
  {
    name: "GitHub Copilot",
    brand: "GitHub",
    logo: copilotLogo,
    type: "mark",
  },
  {
    name: "Claude Code",
    brand: "Anthropic",
    logo: claudeLogo,
    type: "mark",
  },
  {
    name: "Ollama",
    brand: "Ollama",
    logo: ollamaLogo,
    type: "mark",
  },
];


export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-8 top-2 text-[240px] font-display font-semibold uppercase tracking-[0.2em] text-slate-200/50 dark:text-slate-800/40">
          Skills
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Skillset
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900 dark:text-white">
              Tools I use to ship polished experiences.
            </h2>
          </div>
          <p className="max-w-xl text-base text-slate-600 dark:text-slate-300">
            A mix of modern frameworks, tooling, and design systems that help me move fast
            without sacrificing quality.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {iconSkills.map((skill) => (
            <div
              key={skill.label}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-950"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.accent} opacity-0 transition group-hover:opacity-100`}
              />
              <div className="relative flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl`}
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.label} logo`}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-800 dark:text-slate-100">
                    {skill.label}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {skill.tagline}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950">
          <div className="relative px-6 py-8">
            <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-44 w-44 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  AI Tools
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  My daily AI cockpit.
                </h3>
              </div>
              <p className="max-w-lg text-sm text-slate-500 dark:text-slate-400">
                A compact toolkit for agentic workflows, coding acceleration, and local
                inference experiments.
              </p>
            </div>
          </div>

          <div className="grid gap-0 border-t border-slate-200 dark:border-slate-700 lg:grid-cols-4">
            {aiTools.map((tool) => (
              <div
                key={tool.name}
                className="group relative overflow-hidden border-b border-slate-200 bg-slate-50/60 p-6 transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/40 dark:hover:bg-slate-900 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 dark:from-slate-700/40" />
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-start rounded-xl border border-slate-200 bg-white dark:bg-slate-300 px-2 dark:border-slate-700">
                    <img
                      src={tool.logo}
                      alt={`${tool.brand} logo`}
                      className="h-17"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-900 dark:text-white">
                      {tool.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                      {tool.brand}
                    </div>
                  </div>
                </div>
                <div className="absolute -right-1 bottom-2 text-[56px] font-display font-semibold text-slate-200/60 transition group-hover:text-slate-300/70 dark:text-slate-700/40">
                  {aiTools.findIndex((item) => item.name === tool.name) + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950">
          <div className="relative px-6 py-8">
            <div className="pointer-events-none absolute -left-24 top-6 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-4 h-44 w-44 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Certifications
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Proof of the work.
                </h3>
              </div>
              <p className="max-w-lg text-sm text-slate-500 dark:text-slate-400">
                A snapshot of official milestones across cloud and AI platforms.
              </p>
            </div>
          </div>

          <div className="grid gap-0 border-t border-slate-200 dark:border-slate-700 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="group relative overflow-hidden border-b border-slate-200 bg-slate-50/70 p-6 transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/50 dark:hover:bg-slate-900 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="pointer-events-none absolute inset-0">
                  <img
                    src={cert.image}
                    alt=""
                    aria-hidden
                    className="h-full w-full object-cover blur-xl"
                  />
                  <div className="absolute inset-0 bg-white/70 dark:bg-slate-950/60" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 dark:from-slate-700/40" />
                <div className="relative z-10 flex flex-col items-center gap-5 text-center">
                  <div className="flex h-44 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-950/80">
                    <img src={cert.image} alt={cert.title} className="h-full w-full object-contain" />
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {cert.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
