import React from "react";

import projects from "../../data/projects.json";
import { ProjectHand } from "./ProjectHand";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export const Projects = () => {
  return (
    <section className="mx-[10%] mt-[140px] scroll-mt-[100px] text-white" id="projects">
      <SectionHeading eyebrow="Selected Work" title="Projects" />
      <Reveal delay={0.1}>
        <p className="mt-3 max-w-[520px] text-offwhite/70">
          A hand of four. Fan the cards out to see what each project is about.
        </p>
      </Reveal>

      <ProjectHand projects={projects} />
    </section>
  );
};
