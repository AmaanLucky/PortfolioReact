import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import { confettiBurst } from "../../lib/confetti";
import { useCoarsePointer } from "../../hooks/useCoarsePointer";
import { MagneticButton } from "../MagneticButton/MagneticButton";
import { Marquee } from "./Marquee";
import { Sticker } from "./Sticker";
import { Wobble } from "./Wobble";

const SKILL_TITLES = skills.map((s) => s.title.toUpperCase());
const PRESS_LABELS = ["Press me", "Again!", "Whoa!", "More!", "Keep going"];

const shuffled = (list) => {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const buttonBase =
  "rounded-full border-[3px] px-8 py-4 font-display text-xs font-extrabold uppercase tracking-wide no-underline transition-[background-color,color] sm:text-sm";

export const Hero = () => {
  const coarse = useCoarsePointer();
  const [taps, setTaps] = useState(0);
  const [presses, setPresses] = useState(0);
  const [titles, setTitles] = useState(SKILL_TITLES);
  const pressRef = useRef(null);

  const onPress = () => {
    const r = pressRef.current.getBoundingClientRect();
    confettiBurst(r.left + r.width / 2, r.top + r.height / 2, 80);
    setTitles(shuffled(SKILL_TITLES));
    setPresses((n) => n + 1);
  };

  // Easter egg: tap the sticker photo five times.
  const onPhotoTap = (e, info) => {
    const next = taps + 1;
    if (next >= 5) {
      confettiBurst(info.point.x - window.scrollX, info.point.y - window.scrollY, 120);
      setTaps(0);
    } else {
      setTaps(next);
    }
  };

  return (
    <>
      <section className="relative z-[1] mx-[10%] flex items-center justify-between gap-10 pt-[150px] max-[900px]:flex-col-reverse max-[900px]:pt-[110px]">
        <div className="flex flex-col items-start text-white max-[900px]:items-center max-[900px]:text-center">
          <motion.span
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex -rotate-2 items-center gap-2 rounded-full border-[3px] border-white bg-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[4px_4px_0_#F96031]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to new opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mb-6 font-display font-extrabold uppercase leading-[1.02]"
          >
            <Wobble text="Hi, I'm" className="block text-[clamp(22px,3.2vw,44px)]" />
            <Wobble
              text="Amaan"
              className="block text-[clamp(44px,7.4vw,108px)] text-gold [text-shadow:4px_4px_0_#383C3D]"
            />
            <Wobble
              text="Ahmed"
              className="block text-[clamp(44px,7.4vw,108px)] text-white [text-shadow:4px_4px_0_#F96031]"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-9 max-w-[520px] text-lg text-offwhite/85 sm:text-xl"
          >
            I turn messy requirements into fast, friendly web apps. Full-stack with React, Node.js and AWS, always designing for the person on the other side of the screen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            <MagneticButton
              href="mailto:amaanahmed2405@gmail.com"
              className={`${buttonBase} border-white bg-gold text-navy shadow-[5px_5px_0_#fff] hover:bg-white`}
            >
              Let&apos;s Connect
            </MagneticButton>
            <MagneticButton
              href="#projects"
              className={`${buttonBase} border-white bg-navy text-white shadow-[5px_5px_0_#F96031] hover:bg-navy-light`}
            >
              View Projects
            </MagneticButton>
            <button
              ref={pressRef}
              type="button"
              data-cursor="shuffle!"
              onClick={onPress}
              className="rounded-full border-[3px] border-dashed border-white/60 px-6 py-3.5 font-display text-[11px] font-extrabold uppercase tracking-wide text-white transition-colors hover:border-gold hover:text-gold"
            >
              &#127922; {PRESS_LABELS[presses % PRESS_LABELS.length]}
            </button>
          </motion.div>
        </div>

        <div className="relative shrink-0 px-6 py-8">
          <motion.div
            drag={!coarse}
            data-cursor="drag me"
            dragSnapToOrigin
            dragElastic={0.5}
            onTap={onPhotoTap}
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 4 }}
            transition={{ type: "spring", stiffness: 160, damping: 13, delay: 0.25 }}
            whileHover={{ rotate: -2, scale: 1.04 }}
            whileDrag={{ scale: 1.08, cursor: "grabbing" }}
            className="relative cursor-grab select-none [filter:drop-shadow(0_18px_0_rgba(0,0,0,0.35))]"
          >
            <div
              className="rounded-[30px] bg-white p-[10px]"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 38px), calc(100% - 38px) 100%, 0 100%)",
              }}
            >
              <img
                src={getImageUrl("hero/profile-orange.jpg")}
                alt="Portrait of Amaan Ahmed"
                draggable="false"
                className="block w-[250px] rounded-[22px] object-cover sm:w-[330px]"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-[38px] w-[38px] bg-gradient-to-br from-[#bdbdbd] to-[#efefef]"
              style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
            />
          </motion.div>

          <Sticker className="left-0 top-2" rotate={-12} delay={0.7}>
            Hi &#128075;
          </Sticker>
          <Sticker className="-right-1 top-[42%]" rotate={9} delay={0.85}>
            AWS &#9729;
          </Sticker>
          <Sticker className="bottom-1 left-1" rotate={-6} delay={1}>
            Full-stack &#10022;
          </Sticker>
        </div>
      </section>

      <div className="relative z-[1] mt-16 py-12">
        <Marquee
          items={titles}
          direction={-1}
          className="relative z-10 -rotate-2 border-y-[3px] border-white bg-gold py-3 font-display text-xl font-extrabold uppercase text-navy sm:text-3xl"
        />
        <Marquee
          items={titles.slice().reverse()}
          direction={1}
          speed={1.6}
          className="mt-1 rotate-2 border-y-[3px] border-gold bg-navy-light py-3 font-display text-xl font-extrabold uppercase text-white sm:text-3xl"
        />
      </div>
    </>
  );
};
