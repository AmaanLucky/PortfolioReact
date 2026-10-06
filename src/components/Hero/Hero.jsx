import React from "react";
import { motion } from "framer-motion";

import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className="relative z-[1] mx-[10%] flex items-center justify-between gap-10 pt-[160px] max-[830px]:flex-col-reverse max-[830px]:pt-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-start text-white max-[830px]:items-center max-[830px]:text-center"
      >
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-navy-light/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-offwhite/90">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Open to new opportunities
        </span>

        <h1 className="mb-6 font-roboto text-[46px] font-extrabold uppercase leading-[1.05] tracking-tight sm:text-[62px]">
          Hi, I&apos;m
          <br />
          <span className="bg-gradient-to-r from-gold via-tan to-gold bg-clip-text text-transparent">
            Amaan Ahmed
          </span>
        </h1>
        <p className="mb-10 max-w-[520px] font-roboto text-lg text-offwhite/85 sm:text-xl">
          Associate Software Engineer building modern full-stack web applications with React, Node.js, AWS, and a strong focus on user-centered product experiences.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:amaanahmed2405@gmail.com"
            className="rounded-full bg-gold px-8 py-4 text-base font-semibold uppercase tracking-wide text-navy shadow-[0_8px_24px_rgba(249,96,49,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-gold-dark"
          >
            Let&apos;s Connect
          </a>
          <a
            href="#projects"
            className="rounded-full border border-white/30 px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:border-gold hover:text-gold"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="relative flex shrink-0 items-center justify-center"
      >
        <div className="absolute h-[85%] w-[85%] rotate-6 rounded-[2rem] border border-gold/40 bg-navy-light/40" />
        <img
          src={getImageUrl("cadburyprofile.jpg")}
          alt="Hero image of me"
          className="relative z-[1] w-[280px] animate-floating rounded-[2rem] border-4 border-navy-light object-cover shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:w-[340px]"
        />
      </motion.div>
    </section>
  );
};
