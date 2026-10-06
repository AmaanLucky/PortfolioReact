import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Anchor that leans toward the cursor. Mouse only; touch just gets the press effect.
export const MagneticButton = ({ children, className = "", strength = 0.3, ...rest }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      whileTap={{ scale: 0.95 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.a>
  );
};
