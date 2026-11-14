import { motion } from "framer-motion";
import popArtEyes from "../assets/comic_pop_art_eyes.png";

export default function ComicContact() {
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
    <section id="contact" className="relative bg-[#09090b] text-[#fafafa] font-['Space_Grotesk'] border-b comic-grid-border overflow-hidden">
      {/* Top CTA Title Block */}
      <div className="w-full border-b comic-grid-border p-6 md:p-12 text-center md:text-left">
        <span className="text-xs uppercase tracking-[0.3em] text-[#b5ff14] font-semibold mb-3 block">// AVAILABLE IMMEDIATELY</span>
        <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] select-none">
          LET'S BUILD <br />
          <span className="comic-text-outline-neon">SOMETHING REAL.</span>
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
        {/* Left Column: Comic Illustration */}
        <motion.div
          variants={itemVariants}
          className="border-b md:border-b-0 md:border-r comic-grid-border overflow-hidden flex items-center justify-center relative min-h-[300px] md:min-h-auto"
        >
          <img
            src={popArtEyes}
            alt="Comic Pop Art Eyes"
            className="w-full h-full object-cover min-h-[320px] max-h-[500px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-[#b5ff14]/5 pointer-events-none" />
        </motion.div>

        {/* Right Column: Transmission & Links */}
        <motion.div
          variants={itemVariants}
          className="p-8 md:p-12 flex flex-col justify-between gap-12 bg-zinc-950/20"
        >
          <div className="space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b5ff14]">// TRANSMISSIONS</span>
            <p className="text-base md:text-lg leading-relaxed text-[#a1a1aa] max-w-md">
              I am always open to new projects, pipeline automations, backend integrations, or simple consultations. 
              Reach out and let's coordinate.
            </p>
          </div>

          {/* Social / Contact list links */}
          <div className="space-y-4">
            {/* Email Link */}
            <div className="border-b border-zinc-900 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group">
              <span className="text-xs uppercase tracking-widest text-[#71717a] font-semibold">EMAIL</span>
              <a
                href="mailto:sivachandran94@gmail.com"
                className="text-lg md:text-xl font-medium text-zinc-100 hover:text-[#b5ff14] transition-colors"
              >
                sivachandran94@gmail.com
              </a>
            </div>

            {/* LinkedIn Link */}
            <div className="border-b border-zinc-900 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group">
              <span className="text-xs uppercase tracking-widest text-[#71717a] font-semibold">LINKEDIN</span>
              <a
                href="https://www.linkedin.com/in/sivachandran-nkk"
                target="_blank"
                rel="noreferrer"
                className="text-lg md:text-xl font-medium text-zinc-100 hover:text-[#b5ff14] transition-colors"
              >
                linkedin.com/in/sivachandran-nkk
              </a>
            </div>

            {/* Instagram Link */}
            <div className="border-b border-zinc-900 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group">
              <span className="text-xs uppercase tracking-widest text-[#71717a] font-semibold">INSTAGRAM</span>
              <a
                href="https://instagram.com/sivachandranraina"
                target="_blank"
                rel="noreferrer"
                className="text-lg md:text-xl font-medium text-zinc-100 hover:text-[#b5ff14] transition-colors"
              >
                instagram.com/sivachandranraina
              </a>
            </div>

            {/* Location */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs uppercase tracking-widest text-[#71717a] font-semibold">HQ LOCATION</span>
              <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                Chennai, India
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
