import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Orange progress bar with a rocket riding at the front.
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });
  const left = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 z-40 h-[6px] w-full bg-navy-light/60">
      <motion.div
        style={{ scaleX: progress, transformOrigin: "0%" }}
        className="h-full w-full bg-gold"
      />
      <motion.span
        aria-hidden="true"
        style={{ left }}
        className="absolute -top-[22px] -translate-x-1/2 rotate-45 text-xl leading-none"
      >
        &#128640;
      </motion.span>
    </div>
  );
};
