import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="fixed bottom-0 left-0 z-40 h-1 w-full bg-navy-light/40">
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="h-full w-full bg-gradient-to-r from-gold-dark via-gold to-tan"
      />
    </div>
  );
};
