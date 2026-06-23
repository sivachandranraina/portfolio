import profileImage from "../assets/bg.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sparkles, ArrowDown, FileText } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax tilt logic for the profile glass card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Siri-style background ambient glow spotlight behind content */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/5 to-transparent blur-[120px] pointer-events-none -z-10 animate-pulse" />

      <div className="relative mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
        {/* Left Column: Bold Typography & Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col text-left space-y-8"
        >
          {/* Pulsing visual tag */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-violet-500 animate-pulse" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
              Agentic AI Developer
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="font-display uppercase text-[48px] sm:text-[68px] md:text-[88px] font-bold leading-[0.95] tracking-tighter text-slate-900 dark:text-white"
            >
              Sivachandran
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent text-gradient">
                NKK
              </span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed"
            >
              I design and build agentic AI systems, enterprise Python clouds, and premium full-stack interfaces that translate high-complexity code into effortless experiences.
            </motion.p>
          </div>

          {/* Interactive Apple-style action pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative overflow-hidden rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 text-sm font-semibold tracking-wide shadow-md transition-all hover:scale-105"
            >
              <span className="relative z-10">Get in touch</span>
              <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
            </a>

            <a
              href="https://docs.google.com/document/d/1wkx85xMuEQz3rXIi7IvuAn5CQGIWPCZ1w7Ohe3w_JNY/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/40 dark:border-slate-800 dark:bg-slate-900/40 px-8 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 backdrop-blur-md transition-all hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:border-slate-400 dark:hover:border-slate-700"
            >
              <FileText className="h-4 w-4" />
              <span>View CV</span>
            </a>
          </motion.div>

          {/* Interactive tech category summary */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 pt-6 text-[10px] md:text-xs font-display text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] border-t border-slate-200/55 dark:border-slate-800/40"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              <span>Agentic Workflows</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
              <span>Python Cloud Architect</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>Interactive UI Expert</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Parallax 3D Profile Card with Glowing Aura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="flex justify-center items-center relative"
        >
          {/* Moving Siri glow background indicator beneath card */}
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-500 opacity-20 blur-2xl animate-pulse -z-10" />

          {/* Interactive Card */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative glass-panel rounded-[36px] p-4 w-full max-w-[340px] md:max-w-[380px] shadow-2xl border border-white/20 transition-all duration-300"
          >
            {/* Fine gradient border wrapping only this portrait card */}
            <div className="absolute inset-[-1.5px] rounded-[38px] bg-gradient-to-tr from-violet-500/40 via-fuchsia-500/20 to-cyan-500/30 -z-10 pointer-events-none" />

            <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/20 dark:border-slate-800/40 group">
              <img
                src={profileImage}
                alt="Sivachandran portrait"
                className="w-full h-full object-cover rounded-[24px] transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ objectPosition: "50% 25%" }}
              />
              
              {/* Dynamic light refraction layer on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Profile footer within card */}
            <div className="mt-4 px-2 py-1 flex items-center justify-between">
              <div>
                <span className="block text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">Based in</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Chennai, India</span>
              </div>
              <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800/60" />
              <div className="text-right">
                <span className="block text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">XP</span>
                <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">9+ Years</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bounce-down indicator at bottom center */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">Discover</span>
          <ArrowDown className="h-4.5 w-4.5 text-slate-400 dark:text-slate-500" />
        </motion.div>
      </div>
    </section>
  );
}
