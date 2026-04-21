import profileImage from "../assets/bg.png";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="group relative min-h-screen bg-cover bg-fixed"
        style={{ backgroundImage: `url(${profileImage})`, backgroundPositionY: "-150px" }}
        aria-label="Sivachandran portrait background"
        role="img"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/40 to-slate-950/100 backdrop-blur-[1px]" />
        <div className="absolute inset-0 z-10 flex flex-col justify-between">
          <motion.div
            className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-left text-white">
              <motion.h1
                variants={itemVariants}
                className="mt-4 font-display uppercase text-[80px] md:text-[130px] font-semibold leading-tight [letter-spacing:5px] md:[letter-spacing:10px] drop-shadow-2xl"
              >
                Sivachandran<span className="text-[20px]">NKK</span>
              </motion.h1>
              <div className="max-w-2xl">
                <motion.p
                  variants={itemVariants}
                  className="mt-6 text-xl text-slate-200/90 font-light leading-relaxed"
                >
                  I build AI solutions, Python systems, and full-stack cloud
                  applications that turn ambitious ideas into reliable, scalable products.
                </motion.p>
                <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="group relative overflow-hidden rounded-full bg-white px-8 py-3 text-sm font-semibold transition-all hover:scale-105"
                  >
                    <span className="relative z-10 text-slate-900 group-hover:text-white transition-colors duration-300">Connect</span>
                    <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-gradient-to-r from-violet-400 to-indigo-500 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
                    target="_blank"
                    className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/60"
                  >
                    View CV
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32 font-display text-slate-200/80 text-[18px] md:text-[28px] tracking-widest uppercase"
          >
            Agentic AI &#x2022; Vibe Coder &#x2022; Pythonista &#x2022; TypeScriptist &#x2022; Spread <b className="text-[firebrick] animate-pulse">❤</b>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
