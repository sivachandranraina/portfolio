import { motion } from "framer-motion";
import commutatusOutside from "../assets/experience/commutatus-outside.jpg";
import infofacesOutside from "../assets/experience/infofaces-outside.jpg";
import presidioOutside from "../assets/experience/presidio-outside.jpg";

const experiences = [
  {
    company: "Presidio",
    role: "Lead Engineer",
    period: "Mar, 2017 - Present",
    cover: presidioOutside,
    episode: "03",
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
    episode: "02",
    summary:
      "A 20+ headcount startup — short time, heavy learning, and a turning point that redirected my career trajectory.",
    projects: [
      {
        name: "Youth Opportunity Portal",
        detail: "Portal for students to discover and apply to live opportunities.",
      }
    ],
  },
  {
    company: "Infofaces",
    role: "UI Developer",
    period: "Jun, 2015 - Dec, 2016",
    cover: infofacesOutside,
    episode: "01",
    summary:
      "A 50+ headcount startup that handed me my first break and the momentum to start my career.",
    projects: [
      {
        name: "TMG Mortgage Analytics",
        detail: "Mortgage analytics dashboard with KPI and trend reporting.",
      },
      {
        name: "Recruitment Management System",
        detail: "Virtual interview workflow with scheduling and evaluation.",
      },
      {
        name: "ERP Enterprise Suite",
        detail: "ERP suite for operations, inventory, and reporting.",
      },
    ],
  },
];

export default function ComicExperience() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
    <section id="experience" className="relative bg-[#09090b] text-[#fafafa] font-['Space_Grotesk'] border-b comic-grid-border">
      {/* Section Header */}
      <div className="w-full border-b comic-grid-border p-6 md:p-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[#b5ff14] font-semibold mb-3 block">// WORK HISTORY</span>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.95] max-w-4xl select-none">
          SELECTED <br />
          <span className="comic-text-outline-neon">WORK.</span>
        </h2>
      </div>

      {/* Grid List of Experience Episodes */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full"
      >
        {experiences.map((exp) => (
          <motion.div
            variants={itemVariants}
            key={exp.company}
            className="w-full grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] border-b last:border-b-0 comic-grid-border relative overflow-hidden"
          >
            {/* Left Panel: Company details */}
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r comic-grid-border flex flex-col justify-between gap-8 relative overflow-hidden bg-zinc-950/10">
              {/* Background cover image preview (very low opacity) */}
              <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] grayscale contrast-125 scale-105">
                <img src={exp.cover} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex justify-between items-center text-xs text-[#a1a1aa] tracking-widest uppercase">
                  <span>EPISODE // {exp.episode}</span>
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-none text-zinc-100 mt-2">
                  {exp.company}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-[#b5ff14] font-semibold">
                  {exp.role}
                </span>
                <p className="text-sm text-[#a1a1aa] leading-relaxed mt-4">
                  {exp.summary}
                </p>
              </div>
            </div>

            {/* Right Panel: Flagship Projects and details */}
            <div className="p-8 md:p-12 flex flex-col justify-center gap-6 bg-zinc-950/30">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b5ff14]">// KEY DELIVERY MISSIONS</span>

              <div className="space-y-6">
                {exp.projects.map((project, pIdx) => (
                  <div key={project.name} className="flex gap-4 group items-start">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-zinc-800 bg-[#09090b] text-[#b5ff14] font-semibold text-xs rounded-full group-hover:border-[#b5ff14] transition-colors">
                      0{pIdx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-tight text-[#fafafa] group-hover:text-[#b5ff14] transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-sm text-[#a1a1aa] mt-1 leading-relaxed">
                        {project.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
