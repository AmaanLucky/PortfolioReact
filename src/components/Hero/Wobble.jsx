import React from "react";
import { motion } from "framer-motion";

// Splits text into letters that jump and tilt when hovered or tapped.
export const Wobble = ({ text, className = "" }) => (
  <span className={className} aria-label={text}>
    {text.split("").map((ch, i) => (
      <motion.span
        key={i}
        aria-hidden="true"
        className="inline-block cursor-default whitespace-pre"
        whileHover={{ y: -14, rotate: i % 2 ? 8 : -8, scale: 1.12 }}
        whileTap={{ y: -14, rotate: i % 2 ? 8 : -8, scale: 1.12 }}
        transition={{ type: "spring", stiffness: 500, damping: 12 }}
      >
        {ch}
      </motion.span>
    ))}
  </span>
);
