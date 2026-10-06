import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { ProjectModal } from "./ProjectModal";
import { ProjectPlayingCard } from "./ProjectPlayingCard";

const RATIO = 1.5;
const GAP = 16;
const PAD = 24;

const getLayout = (viewport) => {
  if (viewport >= 1500) return { cols: 5, width: 240 };
  if (viewport >= 1000) return { cols: 3, width: 250 };
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

// Wide screens (everything fits in one row): hover fans the pile out.
// Otherwise a tap toggles pile <-> grid. The + on a card opens its story.
export const ProjectHand = ({ projects }) => {
  const [fanned, setFanned] = useState(false);
  const [selected, setSelected] = useState(null);
  // pre: cards waiting off-screen, dealing: being dealt one by one, done: normal
  const [phase, setPhase] = useState("pre");
  const reduceMotion = useReducedMotion();
  const { cols, width } = useLayout();

  const total = projects.length;
  const height = Math.round(width * RATIO);
  const rows = Math.ceil(total / cols);
  const hoverMode = rows === 1 && cols >= 3;
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
      rotate: hoverMode ? (i - mid) * 3 : 0,
    };
  };

  const pile = (i) => ({ x: (i - mid) * 12, y: PAD / 2, rotate: (i - mid) * 4 });

  const onPointerEnter = (e) => hoverMode && phase === "done" && e.pointerType === "mouse" && setFanned(true);
  const onPointerLeave = (e) => hoverMode && e.pointerType === "mouse" && setFanned(false);

  const deal = () => {
    if (phase !== "pre") return;
    setPhase("dealing");
    setTimeout(() => setPhase("done"), 1400);
  };

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
        onViewportEnter={deal}
        viewport={{ once: true, amount: 0.4 }}
        onClick={() => !fanned && phase === "done" && setFanned(true)}
      >
        {projects.map((project, i) => {
          const target =
            phase === "pre"
              ? { x: 520, y: -220, rotate: 35, opacity: 0 }
              : { ...(fanned ? spread(i) : pile(i)), opacity: 1 };
          const cardTransition =
            phase === "dealing" && !reduceMotion
              ? { ...transition, delay: i * 0.18 }
              : transition;
          return (
            <motion.div
              key={project.title}
              className="absolute left-1/2 top-0"
              style={{
                width,
                height,
                marginLeft: -width / 2,
                zIndex: total - i,
                pointerEvents: fanned && phase === "done" ? "auto" : "none",
              }}
              initial={false}
              animate={target}
              whileHover={fanned && phase === "done" ? { y: target.y - 10 } : undefined}
              transition={cardTransition}
            >
              <ProjectPlayingCard
                project={project}
                index={i}
                total={total}
                interactive={fanned && phase === "done"}
                onOpen={() => setSelected(i)}
              />
            </motion.div>
          );
        })}
      </motion.div>

      <button
        type="button"
        aria-expanded={fanned}
        onClick={() => phase === "done" && setFanned((v) => !v)}
        className="mt-8 rounded-full border-[3px] border-white bg-navy px-6 py-3 font-display text-[11px] font-extrabold uppercase tracking-wide text-white shadow-[4px_4px_0_#F96031] transition-colors hover:bg-gold hover:text-navy"
      >
        {hint}
      </button>

      <ProjectModal
        project={selected === null ? null : projects[selected]}
        index={selected ?? 0}
        total={total}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};
