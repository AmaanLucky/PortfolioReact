import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const COPIES = 4;
const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

// Endless ticker. Moves at a base speed and speeds up with page scroll velocity.
export const Marquee = ({ items, direction = 1, speed = 2.2, className = "" }) => {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [-2000, 0, 2000], [-5, 0, 5], { clamp: false });
  const dirRef = useRef(direction);
  const x = useTransform(baseX, (v) => `${wrap(-100 / COPIES, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = dirRef.current * speed * (delta / 1000);
    const b = boost.get();
    if (b !== 0) {
      dirRef.current = b < 0 ? -direction : direction;
      move += dirRef.current * Math.abs(b) * (delta / 1000);
    }
    baseX.set(baseX.get() + move);
  });

  const row = items.map((item, i) => (
    <span key={i} className="flex shrink-0 items-center gap-6 pr-6">
      <span>{item}</span>
      <span aria-hidden="true">&#10022;</span>
    </span>
  ));

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden="true">
      <motion.div style={{ x }} className="flex w-max">
        {Array.from({ length: COPIES }).map((_, c) => (
          <div key={c} className="flex shrink-0">
            {row}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
