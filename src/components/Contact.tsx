import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Copy, Check, Send } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sivachandran94@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeUp: any = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Background large decorative title */}
      <div className="absolute right-10 top-10 pointer-events-none select-none -z-10">
        <span className="font-display text-[150px] md:text-[220px] font-bold uppercase tracking-[0.15em] text-slate-200/20 dark:text-slate-800/10 leading-none">
          Reach
        </span>
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-left"
        >
          <p className="font-display text-xs uppercase tracking-[0.3em] text-violet-500 font-bold">
            Connect
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold leading-tight text-slate-900 dark:text-white max-w-xl">
            Let's build something thoughtful together.
          </h2>
          <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
        </motion.div>

        {/* Bento Contact Hub */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 relative z-10"
        >
          {/* Left Panel: Direct Communication glass-panel */}
          <motion.div
            variants={fadeUp}
            className="glass-panel p-8 md:p-10 rounded-[32px] border border-white/20 dark:border-slate-800/50 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-350 font-light leading-relaxed max-w-lg">
                I am always open to new projects, agentic AI consulting, Python microservices scaling, or just a friendly hello. Reach out and I will get back to you soon.
              </p>

              <div className="space-y-6 pt-4">
                {/* Email Address Widget with Copy Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200/40 dark:border-slate-800/50 gap-4 group/item">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[8px] font-bold uppercase tracking-[0.25em] text-slate-400">
                        Email Address
                      </span>
                      <a href="mailto:sivachandran94@gmail.com" className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-violet-500 transition-colors">
                        sivachandran94@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-2 text-xs font-semibold shadow-sm transition-all hover:scale-105 active:scale-95"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.span
                          key="copied"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="flex items-center gap-1.5"
                        >
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                          <span>Copied</span>
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="flex items-center gap-1.5"
                        >
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                {/* Location Widget */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-950/20 border border-slate-200/40 dark:border-slate-800/50">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-bold uppercase tracking-[0.25em] text-slate-400">
                      Location
                    </span>
                    <span className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200">
                      Chennai, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Social networks grid links */}
          <motion.div
            variants={fadeUp}
            className="glass-panel p-8 rounded-[32px] border border-white/20 dark:border-slate-800/50 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 block mb-4">
                Social Pipelines
              </span>

              {/* LinkedIn capsule */}
              <a
                href="https://www.linkedin.com/in/sivachandran-nkk"
                target="_blank"
                rel="noreferrer"
                className="relative group flex items-center gap-4 rounded-[22px] overflow-hidden border border-white/60 bg-white/40 dark:border-white/10 dark:bg-slate-950/15 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.6),0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_1.5px_1.5px_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.6),0_8px_20px_rgba(0,0,0,0.06)] w-full"
              >
                {/* Reflective light sweep sweep */}
                <div className="absolute inset-0 w-[50%] -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:animate-shine pointer-events-none z-20" />
                
                <div className="p-4 flex items-center justify-between w-full z-10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 border border-slate-200/10">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                      </svg>
                    </span>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        LinkedIn
                      </div>
                      <div className="text-[8px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                        Professional updates
                      </div>
                    </div>
                  </div>
                  <Send className="h-4.5 w-4.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
              </a>

              {/* Instagram capsule */}
              <a
                href="https://instagram.com/sivachandranraina"
                target="_blank"
                rel="noreferrer"
                className="relative group flex items-center gap-4 rounded-[22px] overflow-hidden border border-white/60 bg-white/40 dark:border-white/10 dark:bg-slate-950/15 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.6),0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_1.5px_1.5px_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.6),0_8px_20px_rgba(0,0,0,0.06)] w-full"
              >
                {/* Reflective light sweep sweep */}
                <div className="absolute inset-0 w-[50%] -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:animate-shine pointer-events-none z-20" />
                
                <div className="p-4 flex items-center justify-between w-full z-10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500 border border-slate-200/10">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 2a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4zm6.2-2.4a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
                      </svg>
                    </span>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        Instagram
                      </div>
                      <div className="text-[8px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                        Visual stories
                      </div>
                    </div>
                  </div>
                  <Send className="h-4.5 w-4.5 text-slate-400 group-hover:text-pink-500 transition-colors" />
                </div>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
