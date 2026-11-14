import { motion } from "framer-motion";
import popArtMan from "../assets/comic_pop_art_man.png";

export default function ComicAbout() {
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
    <section id="about" className="relative bg-[#09090b] text-[#fafafa] font-['Space_Grotesk'] border-b comic-grid-border">
      {/* 3-Column Metadata Lane */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 border-b comic-grid-border">
        {/* Column 1: CURRENTLY */}
        <div className="p-8 border-b md:border-b-0 md:border-r comic-grid-border flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#b5ff14] font-semibold">// CURRENTLY</span>
          <p className="text-sm leading-relaxed text-[#a1a1aa]">
            AI & Cloud Engineer at Presidio, working on enterprise orchestration layers and serverless stacks.
          </p>
        </div>

        {/* Column 2: FOCUS */}
        <div className="p-8 border-b md:border-b-0 md:border-r comic-grid-border flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#b5ff14] font-semibold">// FOCUS</span>
          <p className="text-sm leading-relaxed text-[#a1a1aa]">
            LLMs, LangChain/LlamaIndex agents, Azure/AWS cloud-native deployments, and clean, modular systems.
          </p>
        </div>

        {/* Column 3: BEYOND */}
        <div className="p-8 flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#b5ff14] font-semibold">// BEYOND</span>
          <p className="text-sm leading-relaxed text-[#a1a1aa]">
            Fascinated by agentic workflows, multi-modal AI systems, and creating smooth interactive interfaces.
          </p>
        </div>
      </div>

      {/* About Main Section Title */}
      <div className="w-full border-b comic-grid-border p-6 md:p-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[#b5ff14] font-semibold mb-3 block">// ORIGIN STORY</span>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.95] max-w-4xl select-none">
          CURIOSITY AT <br />
          <span className="comic-text-outline-neon">THE CORE.</span>
        </h2>
      </div>

      {/* Main Grid Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full grid grid-cols-1 md:grid-cols-2"
      >
        {/* Left Side: Detail Column */}
        <motion.div
          variants={itemVariants}
          className="p-8 md:p-12 border-b md:border-b-0 md:border-r comic-grid-border flex flex-col gap-6"
        >
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#fafafa]">
              Engineering systems that behave.
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-[#a1a1aa]">
              My journey started with front-end builds and quickly snowballed into a love for Python, cloud architectures, and the magic of Generative AI. 
              At Presidio, Commutatus, and Infofaces, I got to ship real products - from GenAI copilots to analytics dashboards and enterprise portals that teams actually rely on every day.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-zinc-900">
            <p className="text-sm md:text-base leading-relaxed text-[#71717a]">
              These days, I happily live at the intersection of Azure + AWS, Python & Node APIs, and modern web stacks. 
              I’m the person who loves wiring RAG pipelines, building agentic AI workflows, polishing UX details, and making sure a system behaves even when traffic spikes at 2 AM.
            </p>
          </div>
        </motion.div>

        {/* Right Side: unDraw Illustration + Quote / Key details */}
        <motion.div
          variants={itemVariants}
          className="p-8 md:p-12 flex flex-col justify-between bg-zinc-950/20 gap-6"
        >
          {/* Custom Pop Art Illustration */}
          <div className="w-full aspect-square border border-zinc-800 rounded relative group overflow-hidden bg-zinc-950/40">
            <img
              src={popArtMan}
              alt="Developer Portrait Pop Art"
              className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-[#b5ff14]/5 pointer-events-none" />
          </div>

          {/* Mission Statement */}
          <div className="border border-zinc-800 bg-[#09090b] p-6 rounded relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 right-0 h-1 w-24 bg-[#b5ff14]"></div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#b5ff14] font-semibold">// MISSION</span>
            <p className="text-base md:text-lg font-medium leading-relaxed text-zinc-100">
              "If there’s a chance to turn a messy problem into a clean, fast, friendly product, I’m in - especially when the solution blends cloud scale with AI‑powered insight!"
            </p>
          </div>

          {/* Tag labels */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["Chennai, India", "GenAI + Cloud", "Agentic Systems", "FastAPI + NextJS"].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider border border-zinc-800 bg-zinc-950 text-neutral-400 hover:border-zinc-700 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
