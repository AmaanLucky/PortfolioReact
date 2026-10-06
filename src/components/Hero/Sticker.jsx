import React from "react";
import { motion } from "framer-motion";

// A draggable text sticker that springs back to its spot when released.
export const Sticker = ({ children, className = "", rotate = 0, delay = 0 }) => (
  <motion.div
    drag
    data-cursor="drag me"
    dragSnapToOrigin
    dragElastic={0.6}
    initial={{ opacity: 0, scale: 0, rotate: rotate - 40 }}
    animate={{ opacity: 1, scale: 1, rotate }}
    transition={{ type: "spring", stiffness: 260, damping: 14, delay }}
    whileHover={{ scale: 1.12, rotate: rotate + 6 }}
    whileDrag={{ scale: 1.2, cursor: "grabbing", zIndex: 50 }}
    style={{ touchAction: "none" }}
    className={`absolute z-[3] cursor-grab select-none rounded-full border-[3px] border-white bg-gold px-4 py-2 font-display text-[11px] font-extrabold uppercase tracking-wide text-navy shadow-[0_8px_0_rgba(0,0,0,0.35)] sm:text-xs ${className}`}
  >
    {children}
  </motion.div>
);
