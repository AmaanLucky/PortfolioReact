import React from "react";

import { getImageUrl } from "../../utils";
import { Reveal } from "../Reveal/Reveal";

const linkClasses = "group flex items-center gap-4";
const linkTextClasses =
  "text-xl font-normal tracking-wide text-offwhite/90 no-underline transition-colors group-hover:text-gold max-[830px]:text-lg";
const linkImgClasses =
  "h-6 w-6 shrink-0 object-contain opacity-80 transition-opacity group-hover:opacity-100";

export const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative mt-[140px] w-screen scroll-mt-[100px] overflow-hidden bg-gradient-to-br from-navy-light to-navy px-[10%] py-16 text-white"
    >
      <div className="pointer-events-none absolute left-6 top-6 h-12 w-12 border-l-2 border-t-2 border-gold/60" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-12 w-12 border-b-2 border-r-2 border-gold/60" />

      <div className="flex flex-row justify-evenly gap-6 max-[830px]:flex-col max-[830px]:items-center max-[830px]:gap-8">
        <Reveal className="max-[830px]:flex max-[830px]:flex-col max-[830px]:items-center max-[830px]:text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[3px] text-gold">
            Let&apos;s Talk
          </span>
          <h2 className="text-[56px] font-extrabold uppercase tracking-wide sm:text-[80px]">
            Contact
          </h2>
          <p className="max-w-[420px] text-xl font-normal text-offwhite/85 sm:text-2xl">
            Open to new opportunities, collaborations, and product-building conversations.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex list-none flex-col items-start gap-6 max-[830px]:items-center">
            <li className={linkClasses}>
              <img
                src={getImageUrl("contact/emailIcon.png")}
                alt="Email icon"
                className={linkImgClasses}
              />
              <a href="mailto:amaanahmed2405@gmail.com" className={linkTextClasses}>
                amaanahmed2405@gmail.com
              </a>
            </li>
            <li className={linkClasses}>
              <img
                src={getImageUrl("contact/phoneIcon.png")}
                alt="Phone icon"
                className={linkImgClasses}
              />
              <span className={linkTextClasses}>+91 9989583343</span>
            </li>
            <li className={linkClasses}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
                className={linkImgClasses}
              />
              <a
                href="https://www.linkedin.com/in/amaan-ahmed-922531250/"
                className={linkTextClasses}
              >
                linkedin.com/in/amaan-ahmed/
              </a>
            </li>
            <li className={linkClasses}>
              <img
                src={getImageUrl("contact/githubIcon.png")}
                alt="Github icon"
                className={linkImgClasses}
              />
              <a href="https://github.com/AmaanLucky" className={linkTextClasses}>
                github.com/AmaanLucky
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </footer>
  );
};
