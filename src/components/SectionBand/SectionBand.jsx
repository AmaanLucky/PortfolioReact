import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Full-width band between sections. The label slides sideways as you scroll past.
export const SectionBand = ({ label, reverse = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], reverse ? ["-25%", "0%"] : ["0%", "-25%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative z-[1] mt-[90px] -mb-[50px] overflow-hidden border-y-[3px] border-white bg-navy py-3"
    >
      <motion.div style={{ x }} className="flex w-max items-center gap-8 whitespace-nowrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <React.Fragment key={i}>
            <span
              className={`font-display text-[clamp(28px,5vw,56px)] font-extrabold uppercase leading-none ${
                i % 2 ? "text-white" : "text-transparent [-webkit-text-stroke:2px_#F96031]"
              }`}
            >
              {label}
            </span>
            <span className="text-2xl text-gold">&#10022;</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
