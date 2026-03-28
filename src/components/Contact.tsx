export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-24 text-white h-[700px] pt-24 border-t border-t-slate-800">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-8 top-[300px] text-[240px] font-display font-semibold uppercase tracking-[0.2em] text-slate-700/10">
          Connect
        </div>
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-slate-400">
            Connect
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold">
            Let us build something thoughtful together.
          </h2>
          <p className="mt-6 text-base text-slate-300">
            I am always open to new projects, collaborations, or just a friendly hello.
            Reach out on social or email and I will get back to you soon.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <p>
              <span className="block text-xs uppercase tracking-[0.3em] text-slate-500">
                Email
              </span>
              sivachandran94@gmail.com
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.3em] text-slate-500">
                Location
              </span>
              Chennai, India
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Social</p>
            <div className="mt-6 space-y-4">
              <a
                href="https://www.linkedin.com/in/sivachandran-nkk"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 px-5 py-4 transition hover:-translate-y-0.5 hover:border-slate-700"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white shadow-[0_0_30px_rgba(56,189,248,0.25)]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                    <path d="M20.45 20.45h-3.56v-5.59c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.69H9.33V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.4 4.31 5.52v6.23zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </span>
                <div className="relative">
                  <div className="text-sm font-semibold text-white">LinkedIn</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Professional updates
                  </div>
                </div>
              </a>

              <a
                href="https://instagram.com/sivachandranraina"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 px-5 py-4 transition hover:-translate-y-0.5 hover:border-slate-700"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white shadow-[0_0_30px_rgba(236,72,153,0.25)]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 2a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4zm6.2-2.4a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
                  </svg>
                </span>
                <div className="relative">
                  <div className="text-sm font-semibold text-white">Instagram</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Visual stories
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
