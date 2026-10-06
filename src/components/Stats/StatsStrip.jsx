import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

import projects from "../../data/projects.json";
import skills from "../../data/skills.json";
import history from "../../data/history.json";

// Every number here is derived from the site's own data files.
const monthsSince = (label) => {
  const start = new Date(`1 ${label}`);
  const now = new Date();
  return Math.max(0, (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth());
};

const CountUp = ({ to }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return <span ref={ref}>{String(value).padStart(2, "0")}</span>;
};

const org = history[0].organisation.split(" ")[0];

const STATS = [
  { value: projects.length, label: "Projects built", tile: "bg-gold text-navy shadow-[6px_6px_0_#fff]", tilt: -2 },
  { value: skills.length, label: "Technologies", tile: "bg-white text-navy shadow-[6px_6px_0_#F96031]", tilt: 1.5 },
  {
    value: monthsSince(history[history.length - 1].startDate),
    label: `Months at ${org}`,
    tile: "bg-navy-light text-white shadow-[6px_6px_0_#F96031]",
    tilt: -1.5,
  },
  { value: history.length, label: "Roles held", tile: "bg-navy text-white shadow-[6px_6px_0_#fff]", tilt: 2 },
];

export const StatsStrip = () => (
  <section className="relative z-[1] mx-[10%] mt-8" aria-label="At a glance">
    <ul className="grid grid-cols-4 gap-6 max-[830px]:grid-cols-2">
      {STATS.map((stat, i) => (
        <motion.li
          key={stat.label}
          initial={{ opacity: 0, y: 40, rotate: stat.tilt * 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: stat.tilt }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 180, damping: 14, delay: i * 0.08 }}
          whileHover={{ rotate: -stat.tilt, scale: 1.05 }}
          className={`list-none rounded-[24px] border-[3px] border-white p-5 text-center ${stat.tile}`}
        >
          <div className="font-display text-[clamp(32px,5vw,60px)] font-extrabold leading-none">
            <CountUp to={stat.value} />
          </div>
          <div className="mt-2 font-display text-[10px] font-extrabold uppercase tracking-[1.5px] opacity-80 sm:text-xs">
            {stat.label}
          </div>
        </motion.li>
      ))}
    </ul>
  </section>
);
