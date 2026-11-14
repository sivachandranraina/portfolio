import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import all critical portfolio assets so we can preload & verify they are fully downloaded
import profileImage from "../assets/gemini-bg.png";
import presidioOutside from "../assets/experience/presidio-outside.jpg";
import commutatusOutside from "../assets/experience/commutatus-outside.jpg";
import infofacesOutside from "../assets/experience/infofaces-outside.jpg";
import awsBadge from "../assets/badges/aws-certified-generative-ai-developer-professional-.png";
import azureAssociateBadge from "../assets/badges/microsoft-certified-associate-badge.svg";
import azureFundamentalsBadge from "../assets/badges/microsoft-certified-fundamentals-badge.svg";
import awsIcon from "../assets/icons/aws.svg";
import azureIcon from "../assets/icons/azure.svg";
import geminiIcon from "../assets/icons/gemini.svg";
import nodeIcon from "../assets/icons/nodejs.svg";
import pythonIcon from "../assets/icons/python.png";
import codexLogo from "../assets/icons/ai-tools/codex.svg";
import claudeLogo from "../assets/icons/ai-tools/claudecode-color.svg";
import copilotLogo from "../assets/icons/ai-tools/github-copilot.svg";
import antigravityLogo from "../assets/icons/ai-tools/antigravity-color.svg";

const CRITICAL_IMAGE_URLS = [
  profileImage,
  presidioOutside,
  commutatusOutside,
  infofacesOutside,
  awsBadge,
  azureAssociateBadge,
  azureFundamentalsBadge,
  awsIcon,
  azureIcon,
  geminiIcon,
  nodeIcon,
  pythonIcon,
  codexLogo,
  claudeLogo,
  copilotLogo,
  antigravityLogo,
];

interface NetflixIntroLoaderProps {
  isOpen: boolean;
  onComplete: () => void;
}

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;

    const finish = () => {
      if (typeof img.decode === "function") {
        img.decode().then(() => resolve()).catch(() => resolve());
      } else {
        resolve();
      }
    };

    if (img.complete) {
      finish();
    } else {
      img.onload = finish;
      img.onerror = () => resolve(); // never hang indefinitely if an asset fails
    }
  });
}

function waitForWindowLoad(): Promise<void> {
  if (document.readyState === "complete") {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

function waitForFonts(): Promise<void> {
  if ("fonts" in document && document.fonts?.ready) {
    return document.fonts.ready.then(() => undefined).catch(() => undefined);
  }
  return Promise.resolve();
}

export default function NetflixIntroLoader({
  isOpen,
  onComplete,
}: NetflixIntroLoaderProps) {
  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;

    const loadAllAssets = async () => {
      // Minimum 600ms display so cached reloads still transition smoothly without a harsh flash
      const minDisplayDelay = new Promise<void>((res) => setTimeout(res, 600));

      // Wait for all bundled images (including CSS background images like Hero), fonts, and window load
      await Promise.all([
        minDisplayDelay,
        waitForWindowLoad(),
        waitForFonts(),
        ...CRITICAL_IMAGE_URLS.map(preloadImage),
      ]);

      if (!cancelled) {
        onComplete();
      }
    };

    loadAllAssets();

    return () => {
      cancelled = true;
    };
  }, [isOpen, onComplete]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="netflix-simple-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#141414] select-none"
        >
          {/* Center "S" Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex h-20 w-16 items-center justify-center rounded bg-[#E50914] font-display text-6xl font-bold leading-none text-white shadow-[0_0_35px_rgba(229,9,20,0.65)]">
              S
            </div>

            {/* Simple Loader Below the Badge */}
            <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-white/15 border-t-[#E50914]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
