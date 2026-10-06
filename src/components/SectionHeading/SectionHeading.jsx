import React from "react";

import { Reveal } from "../Reveal/Reveal";

export const SectionHeading = ({ eyebrow, title, className = "" }) => {
  return (
    <Reveal className={className}>
      <div className="mb-2">
        {eyebrow && (
          <span className="mb-4 inline-block -rotate-3 rounded-full border-[3px] border-white bg-gold px-4 py-1.5 font-display text-[11px] font-extrabold uppercase tracking-[2px] text-navy shadow-[3px_3px_0_#fff]">
            {eyebrow}
          </span>
        )}
        <h2 className="block font-display text-[clamp(30px,5.2vw,60px)] font-extrabold uppercase leading-[1.05] text-white [text-shadow:4px_4px_0_#F96031]">
          {title}
        </h2>
      </div>
    </Reveal>
  );
};
