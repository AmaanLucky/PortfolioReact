import React from "react";

import { Reveal } from "../Reveal/Reveal";

export const SectionHeading = ({ eyebrow, title, className = "" }) => {
  return (
    <Reveal className={className}>
      <div className="mb-2">
        {eyebrow && (
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[3px] text-gold">
            {eyebrow}
          </span>
        )}
        <h2 className="relative inline-block pb-3 text-[35px] font-bold uppercase tracking-[1.75px] text-white">
          {title}
          <span className="absolute bottom-0 left-0 h-1 w-14 rounded-full bg-gradient-to-r from-gold to-tan" />
        </h2>
      </div>
    </Reveal>
  );
};
