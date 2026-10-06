import React from "react";

import { getImageUrl } from "../../utils";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { HiddenStar } from "../Hunt/Hunt";
import { TiltCard } from "../TiltCard/TiltCard";

const NOW = [
  { k: "Building", v: "Legacy app modernization (dashboards + speed)" },
  { k: "Learning", v: "AWS" },
  { k: "Open to", v: "New opportunities" },
];

const ABOUT_ITEMS = [
  {
    icon: "about/cursorIcon.png",
    alt: "Cursor icon",
    title: "Full-Stack Development",
    text: "React on the front, Node.js, Express and MongoDB on the back. I like building the whole thing, end to end.",
    wide: true,
    tile: "bg-gold text-navy shadow-[8px_8px_0_#fff]",
    muted: "text-navy/80",
    tilt: "-rotate-1",
  },
  {
    icon: "about/serverIcon.png",
    alt: "Server icon",
    title: "Enterprise Modernization",
    text: "Legacy systems, meet your upgrade. I've helped move real client platforms to modern stacks, with secure role-based access and login flows.",
    tile: "bg-navy-light text-white shadow-[8px_8px_0_#F96031]",
    muted: "text-white/80",
    tilt: "rotate-1",
  },
  {
    icon: "about/cursorIcon.png",
    alt: "UI icon",
    title: "Continuous Learning",
    text: "I get curious about how systems really work. Right now I'm levelling up on AWS and keeping code clean enough to scale.",
    tile: "bg-white text-navy shadow-[8px_8px_0_#F96031]",
    muted: "text-navy/80",
    tilt: "-rotate-1",
  },
];

export const About = () => {
  return (
    <section className="relative z-[1] mx-[10%] mt-[120px] scroll-mt-[100px]" id="about">
      <HiddenStar id="about" className="right-[3%] top-6" />
      <SectionHeading eyebrow="Get to know me" title="About" />

      <div className="mt-10 grid grid-cols-3 gap-7 max-[830px]:grid-cols-1">
        <Reveal delay={0.1} className="row-span-2 h-full max-[830px]:hidden">
          <TiltCard className="flex h-full items-center justify-center overflow-hidden rounded-[28px] border-[3px] border-white bg-navy-light p-6 shadow-[8px_8px_0_#fff]">
            <img
              src={getImageUrl("about/aboutImage.png")}
              alt="Me sitting with a laptop"
              className="w-full"
            />
          </TiltCard>
        </Reveal>

        {ABOUT_ITEMS.map((item, id) => (
          <Reveal
            key={id}
            delay={0.15 + id * 0.1}
            className={`h-full ${item.wide ? "col-span-2 max-[830px]:col-span-1" : ""}`}
          >
            <TiltCard
              className={`group relative h-full rounded-[28px] border-[3px] border-white p-7 ${item.tile}`}
            >
              <span className="absolute right-5 top-4 font-display text-[44px] font-extrabold leading-none opacity-20">
                0{id + 1}
              </span>
              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-navy bg-white shadow-[3px_3px_0_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:rotate-[360deg] ${item.tilt}`}
              >
                <img src={getImageUrl(item.icon)} alt={item.alt} className="w-8" />
              </div>
              <h3 className="font-display text-lg font-extrabold uppercase leading-snug">
                {item.title}
              </h3>
              <p className={`mt-3 text-base leading-relaxed ${item.muted}`}>{item.text}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="-rotate-2 rounded-full border-[3px] border-white bg-gold px-4 py-1.5 font-display text-[11px] font-extrabold uppercase tracking-[2px] text-navy shadow-[3px_3px_0_#fff]">
            Currently
          </span>
          {NOW.map((n) => (
            <span
              key={n.k}
              className="rounded-full border-[3px] border-white bg-navy px-4 py-2 text-sm font-semibold text-white"
            >
              <span className="mr-2 font-display text-[10px] font-extrabold uppercase tracking-wide text-gold">
                {n.k}
              </span>
              {n.v}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
