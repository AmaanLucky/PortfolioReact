import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { ProjectPlayingCard } from "./ProjectPlayingCard";

const RATIO = 7 / 5;
const GAP = 16;
const PAD = 24;

const getLayout = (viewport) => {
  if (viewport >= 1200) return { cols: 4, width: 255 };
  if (viewport >= 640) return { cols: 2, width: 250 };
  return { cols: 1, width: Math.min(300, Math.round(viewport * 0.8)) };
};

const useLayout = () => {
  const [layout, setLayout] = useState(() =>
    getLayout(typeof window === "undefined" ? 1280 : window.innerWidth)
  );
  useEffect(() => {
    const onResize = () => setLayout(getLayout(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return layout;
};

// Desktop (4 columns): hover fans the pile out. Smaller screens: tap toggles pile <-> grid.
export const ProjectHand = ({ projects }) => {
  const [fanned, setFanned] = useState(false);
  const reduceMotion = useReducedMotion();
  const { cols, width } = useLayout();

  const total = projects.length;
  const height = Math.round(width * RATIO);
  const rows = Math.ceil(total / cols);
  const hoverMode = cols === 4;
  const mid = (total - 1) / 2;

  const fannedHeight = rows * height + (rows - 1) * GAP + PAD;
  const pileHeight = height + PAD;

  const spread = (i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const rowCount = Math.min(cols, total - row * cols);
    return {
      x: (col - (rowCount - 1) / 2) * (width + GAP),
      y: row * (height + GAP) + PAD / 2,
      rotate: cols === 4 ? (i - mid) * 3 : 0,
    };
  };

  const pile = (i) => ({ x: (i - mid) * 12, y: PAD / 2, rotate: (i - mid) * 4 });

  const onPointerEnter = (e) => hoverMode && e.pointerType === "mouse" && setFanned(true);
  const onPointerLeave = (e) => hoverMode && e.pointerType === "mouse" && setFanned(false);

  const transition = reduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 140, damping: 18 };

  const hint = fanned
    ? hoverMode
      ? "Move away to stack the cards"
      : "Tap to stack the cards"
    : hoverMode
    ? "Hover to fan out the cards"
    : "Tap to fan out the cards";

  return (
    <div className="mt-14 flex flex-col items-center">
      <motion.div
        className="relative w-full"
        initial={false}
        animate={{ height: fanned ? fannedHeight : pileHeight }}
        transition={transition}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onClick={() => !fanned && setFanned(true)}
      >
        {projects.map((project, i) => {
          const target = fanned ? spread(i) : pile(i);
          return (
            <motion.div
              key={project.title}
              className="absolute left-1/2 top-0"
              style={{
                width,
                height,
                marginLeft: -width / 2,
                zIndex: total - i,
                pointerEvents: fanned ? "auto" : "none",
              }}
              initial={false}
              animate={target}
              whileHover={fanned ? { y: target.y - 10 } : undefined}
              transition={transition}
            >
              <ProjectPlayingCard
                project={project}
                index={i}
                total={total}
                interactive={fanned}
              />
            </motion.div>
          );
        })}
      </motion.div>

      <button
        type="button"
        aria-expanded={fanned}
        onClick={() => setFanned((v) => !v)}
        className="mt-6 rounded-full border border-gold/40 bg-navy-light/80 px-5 py-2 text-sm font-semibold text-offwhite/90 transition-colors hover:border-gold hover:text-gold"
      >
        {hint}
      </button>
    </div>
  );
};
