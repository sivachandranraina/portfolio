import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

type HoverType = "default" | "link" | "theme";

export default function CustomCursor() {
  const [hoverType, setHoverType] = useState<HoverType>("default");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Quick spring for the physical dot
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);

  // Slower spring for the glowing aura
  const auraConfig = { damping: 40, stiffness: 200, mass: 1 };
  const auraX = useSpring(cursorX, auraConfig);
  const auraY = useSpring(cursorY, auraConfig);

  // Modern ambient spotlight effect
  const ambientGlow = useMotionTemplate`radial-gradient(350px circle at ${auraX}px ${auraY}px, rgba(167, 139, 250, 0.12), transparent 80%)`;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isThemeSwitch = target.closest("button[aria-label='Toggle light and dark mode']");

      if (isThemeSwitch) {
        setHoverType("theme");
      } else if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setHoverType("link");
      } else {
        setHoverType("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHoverState);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverState);
    };
  }, [cursorX, cursorY]);

  const isHovering = hoverType !== "default";

  return (
    <>
      {/* Ambient Flashlight Glow (follows mouse smoothly in background) */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[-1] hidden md:block"
        style={{ background: ambientGlow }}
      />
      
      {/* Modern Morphing Cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] flex items-center justify-center overflow-hidden mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 56 : 12,
          height: isHovering ? 56 : 12,
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <motion.div
          animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {hoverType === "theme" ? (
            <Sparkles className="h-5 w-5 text-black" />
          ) : (
            <ArrowUpRight className="h-5 w-5 text-black" />
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
