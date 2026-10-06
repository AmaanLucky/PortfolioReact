import React from "react";

import { getImageUrl } from "../../utils";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";

const aboutItemClasses =
  "flex flex-row items-center gap-[25px] rounded-2xl list-none p-6 border border-transparent bg-[linear-gradient(90deg,rgba(249,96,49,0.18)_0%,rgba(249,96,49,0)_100%)] bg-no-repeat bg-[length:0%_100%] transition-[background-size,border-color] duration-[400ms] hover:border-gold/30 hover:bg-[length:100%_100%] max-[830px]:px-3";

const ABOUT_ITEMS = [
  {
    icon: "about/cursorIcon.png",
    alt: "Cursor icon",
    title: "Full-Stack Development",
    text: "I build responsive web applications with React on the frontend and Node.js, Express, and MongoDB on the backend.",
  },
  {
    icon: "about/serverIcon.png",
    alt: "Server icon",
    title: "Enterprise Modernization",
    text: "I have experience modernizing legacy systems, implementing secure role-based portals, and integrating authentication flows for real-world client projects.",
  },
  {
    icon: "about/cursorIcon.png",
    alt: "UI icon",
    title: "Continuous Learning",
    text: "I enjoy understanding systems deeply, improving architecture, and learning new tools such as AWS while keeping code scalable and maintainable.",
  },
];

export const About = () => {
  return (
    <section
      className="relative z-[1] mx-[10%] mt-[140px] scroll-mt-[100px] rounded-[24px] border border-white/5 bg-navy-light/30 p-[56px] backdrop-blur-sm max-[830px]:px-6 max-[830px]:py-10"
      id="about"
    >
      <div className="pointer-events-none absolute left-4 top-4 h-10 w-10 border-l-2 border-t-2 border-gold" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-10 w-10 border-b-2 border-r-2 border-gold" />

      <SectionHeading eyebrow="Get to know me" title="About" />

      <div className="flex flex-row items-center gap-8 max-[830px]:flex-col">
        <Reveal delay={0.1} className="w-[35%] max-[830px]:hidden">
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop"
            className="w-full"
          />
        </Reveal>
        <ul className="flex flex-1 flex-col gap-6 text-white max-[830px]:mt-[29px]">
          {ABOUT_ITEMS.map((item, id) => (
            <Reveal key={id} delay={0.15 + id * 0.1}>
              <li className={aboutItemClasses}>
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold/15 ring-1 ring-tan/30">
                  <img src={getImageUrl(item.icon)} alt={item.alt} className="w-8" />
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold">{item.title}</h3>
                  <p className="text-[18px] text-offwhite/80">{item.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};
