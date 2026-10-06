import React from "react";

import projects from "../../data/projects.json";
import { ProjectHand } from "./ProjectHand";
import { HiddenStar } from "../Hunt/Hunt";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export const Projects = () => {
  return (
    <section className="relative z-[1] mx-[10%] mt-[140px] scroll-mt-[100px] text-white" id="projects">
      <HiddenStar id="projects" className="right-[2%] top-14" />
      <SectionHeading eyebrow="Selected Work" title="Projects" />
      <Reveal delay={0.1}>
        <p className="mt-3 max-w-[520px] text-offwhite/70">
          A hand of five. Fan the cards out, then hit the + on any card to read the story behind it.
        </p>
      </Reveal>

      <ProjectHand projects={projects} />
    </section>
  );
};
