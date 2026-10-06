import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { useCoarsePointer } from "../../hooks/useCoarsePointer";
import { HiddenStar } from "../Hunt/Hunt";
import { SectionHeading } from "../SectionHeading/SectionHeading";

const TILTS = [-4, 3, -2, 5, -5, 2, 4, -3];

const SkillChip = ({ skill, index, draggable }) => {
  const rotate = TILTS[index % TILTS.length];
  return (
    <motion.li
      drag={draggable}
      data-cursor={draggable ? "drag me" : undefined}
      dragSnapToOrigin
      dragElastic={0.7}
      initial={{ opacity: 0, scale: 0.6, rotate: rotate - 15 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: "spring", stiffness: 260, damping: 15, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -8, rotate: -rotate, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      whileDrag={{ scale: 1.15, zIndex: 20, cursor: "grabbing" }}
      className="group flex cursor-grab select-none items-center gap-3 rounded-full border-[3px] border-white bg-navy-light py-2 pl-2 pr-5 text-white shadow-[4px_4px_0_#F96031] transition-colors hover:bg-gold hover:text-navy"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
        <img
          src={getImageUrl(skill.imageSrc)}
          alt=""
          width={28}
          height={28}
          draggable="false"
          className="h-7 w-7 object-contain"
        />
      </span>
      <span className="font-display text-xs font-extrabold uppercase tracking-wide">
        {skill.title}
      </span>
    </motion.li>
  );
};

export const Experience = () => {
  const coarse = useCoarsePointer();
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const total = history.length;

  return (
    <section className="relative z-[1] mx-[10%] mt-[140px] scroll-mt-[100px] text-white" id="experience">
      <HiddenStar id="experience" className="bottom-2 left-[40%] max-[900px]:left-4" />
      <SectionHeading eyebrow="My Journey" title="Experience" />

      <div className="mt-12 flex flex-row justify-between gap-12 max-[900px]:flex-col max-[900px]:gap-14">
        <div className="w-[45%] max-[900px]:w-full">
          <h3 className="mb-6 font-display text-sm font-extrabold uppercase tracking-[3px] text-gold">
            Skill stickers <span className="text-white/40">{coarse ? "· tap me" : "· drag me"}</span>
          </h3>
          <ul className="flex flex-wrap gap-x-4 gap-y-6">
            {skills.map((skill, id) => (
              <SkillChip key={id} skill={skill} index={id} draggable={!coarse} />
            ))}
          </ul>
        </div>

        <div className="w-[48%] max-[900px]:w-full">
          <h3 className="mb-6 font-display text-sm font-extrabold uppercase tracking-[3px] text-gold">
            Level log
          </h3>
          <ul ref={trackRef} className="relative flex flex-col gap-10 pl-10">
            <div className="absolute bottom-0 left-[9px] top-2 w-1 rounded-full bg-navy-light" />
            <motion.div
              style={{ scaleY: fill, transformOrigin: "top" }}
              className="absolute bottom-0 left-[9px] top-2 w-1 rounded-full bg-gold"
            />

            {history.map((item, id) => {
              const level = total - id;
              const current = id === 0;
              return (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ type: "spring", stiffness: 140, damping: 16, delay: id * 0.05 }}
                  className="relative"
                >
                  <motion.span
                    initial={{ scale: 0, backgroundColor: "#383C3D" }}
                    whileInView={{ scale: 1, backgroundColor: "#F96031" }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.2 }}
                    className="absolute -left-[39px] top-6 h-6 w-6 rounded-full border-[3px] border-white"
                  />
                  <div
                    className={`rounded-[24px] border-[3px] border-white bg-navy-light p-6 ${
                      current ? "shadow-[8px_8px_0_#F96031]" : "shadow-[8px_8px_0_#fff]"
                    }`}
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-gold px-3 py-1 font-display text-[10px] font-extrabold uppercase tracking-wider text-navy">
                        Lvl {String(level).padStart(2, "0")}
                      </span>
                      <motion.span
                        initial={{ scale: 0, rotate: -20 }}
                        whileInView={{ scale: 1, rotate: -4 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.5 }}
                        className="rounded-full border-2 border-white px-3 py-1 font-display text-[10px] font-extrabold uppercase tracking-wider text-white"
                      >
                        Unlocked &#10003;
                      </motion.span>
                    </div>
                    <h3 className="font-display text-base font-extrabold uppercase leading-snug">
                      {`${item.role}, ${item.organisation}`}
                    </h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gold">
                      {`${item.startDate} - ${item.endDate}`}
                    </p>
                    <ul className="ml-[17px] mt-4 list-outside list-disc space-y-1.5 text-[15px] text-offwhite/85">
                      {item.experiences.map((experience, i) => (
                        <li key={i}>{experience}</li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
