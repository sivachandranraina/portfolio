export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-6 text-[240px] font-display font-semibold uppercase tracking-[0.2em] text-slate-200/50 dark:text-slate-800/40">
          About
        </div>
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            About
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900 dark:text-white">
            A curious builder who turned cloud and AI into a daily playground.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          <p>
            My journey started with front‑end builds and quickly snowballed into a love for
            Python, cloud platforms, and the magic of Generative AI. At Presidio, Commutatus,
            and Infofaces, I got to ship real products - from GenAI copilots to analytics
            dashboards and enterprise portals that teams actually rely on every day.
          </p>
          <p>
            These days, I happily live at the intersection of Azure + AWS, Node APIs, and
            modern web stacks. I’m the person who loves wiring RAG pipelines, building
            agentic AI workflows, polishing UX details, and making sure a system behaves
            even when traffic spikes at 2 AM.
          </p>
          <p>
            If there’s a chance to turn a messy problem into a clean, fast, friendly product,
            I’m in - especially when the solution blends cloud scale with AI‑powered insight.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              Chennai, India
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              Agents
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              GenAI + Cloud
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
