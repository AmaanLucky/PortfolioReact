import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

import { useCoarsePointer } from "../../hooks/useCoarsePointer";

const INTERACTIVE = "a, button, [data-cursor]";

// Trailing orange ring that grows over clickable things and can show a label
// (set data-cursor="drag me" on any element). The native cursor stays visible.
export const CustomCursor = () => {
  const coarse = useCoarsePointer();
  const reduce = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 });
  const [target, setTarget] = useState({ active: false, label: "" });
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    if (coarse || reduce) return;
    const onMove = (e) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e) => {
      const el = e.target.closest?.(INTERACTIVE);
      setTarget(
        el ? { active: true, label: el.getAttribute("data-cursor") || "" } : { active: false, label: "" }
      );
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, [coarse, reduce, x, y]);

  if (coarse || reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[9998]"
    >
      <motion.div
        animate={{
          scale: pressed ? 0.7 : target.active ? 1.9 : 1,
          backgroundColor: target.active ? "rgba(249,96,49,0.25)" : "rgba(249,96,49,0)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
        className="-ml-[18px] -mt-[18px] h-9 w-9 rounded-full border-2 border-gold"
      />
      {target.label && (
        <span className="absolute left-5 top-5 whitespace-nowrap rounded-full border-2 border-white bg-gold px-3 py-1 font-display text-[10px] font-extrabold uppercase tracking-wide text-navy shadow-[2px_2px_0_#fff]">
          {target.label}
        </span>
      )}
    </motion.div>
  );
};
