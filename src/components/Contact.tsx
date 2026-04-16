import { motion } from "framer-motion";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="relative z-[11] overflow-hidden py-24 text-white h-[700px] pt-24 border-t border-t-slate-800">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Dynamic auroras for contact */}
        {/* <div className="absolute -bottom-1/2 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-emerald-500/10 to-transparent blur-[100px] animate-aurora" />
        <div className="absolute -top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-l from-violet-500/10 to-transparent blur-[100px] animate-auroraSlow" /> */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute -right-8 top-[10%] text-[150px] md:text-[240px] font-display font-semibold uppercase tracking-[0.2em] text-slate-700/10"
        >
          Connect
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] z-10"
      >
        <div className="space-y-8">
          <motion.div variants={fadeUp}>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-violet-400">
              Connect
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl drop-shadow-lg">
              Let's build something <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">thoughtful</span> together.
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-lg text-slate-300 font-light leading-relaxed max-w-lg">
            I am always open to new projects, collaborations, or just a friendly hello.
            Reach out on social or email and I will get back to you soon.
          </motion.p>
          <motion.div variants={fadeUp} className="space-y-6 pt-4 text-sm text-slate-300">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center transition-colors group-hover:bg-violet-900/40 group-hover:border-violet-500/50">
                <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.3em] text-slate-500 mb-1">
                  Email
                </span>
                <a href="mailto:sivachandran94@gmail.com" className="text-lg hover:text-violet-400 transition-colors">sivachandran94@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center transition-colors group-hover:bg-emerald-900/40 group-hover:border-emerald-500/50">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.3em] text-slate-500 mb-1">
                  Location
                </span>
                <span className="text-lg">Chennai, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="mt-8 lg:mt-0">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-8 relative z-10">Social Network</p>
            <div className="space-y-4 relative z-10">
              <motion.a
                href="https://www.linkedin.com/in/sivachandran-nkk"
                target="_blank"
                rel="noreferrer"
                className="group/link flex items-center gap-5 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 px-6 py-5 transition-colors hover:border-violet-500/50 hover:bg-slate-900"
              >
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-shadow group-hover/link:shadow-[0_0_40px_rgba(56,189,248,0.4)]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                    <path d="M20.45 20.45h-3.56v-5.59c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.69H9.33V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.52v6.23zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </span>
                <div>
                  <div className="text-lg font-semibold text-white group-hover/link:text-violet-400 transition-colors">LinkedIn</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mt-1">
                    Professional updates
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="https://instagram.com/sivachandranraina"
                target="_blank"
                rel="noreferrer"
                className="group/link flex items-center gap-5 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 px-6 py-5 transition-colors hover:border-pink-500/50 hover:bg-slate-900"
              >
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400 shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-shadow group-hover/link:shadow-[0_0_40px_rgba(236,72,153,0.4)]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 2a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4zm6.2-2.4a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
                  </svg>
                </span>
                <div>
                  <div className="text-lg font-semibold text-white group-hover/link:text-pink-400 transition-colors">Instagram</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mt-1">
                    Visual stories
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
