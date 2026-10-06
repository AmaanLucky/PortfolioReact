import React from "react";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export const Experience = () => {
  return (
    <section className="mx-[10%] mt-[140px] scroll-mt-[100px] text-white" id="experience">
      <SectionHeading eyebrow="My Journey" title="Experience" />

      <div className="mt-10 flex flex-row justify-evenly gap-10 max-[830px]:flex-col max-[830px]:items-center max-[830px]:gap-[34px]">
        <div className="flex w-[45%] flex-wrap content-start gap-8 max-[830px]:w-full max-[830px]:flex-row max-[830px]:justify-center">
          {skills.map((skill, id) => {
            return (
              <div
                key={id}
                className="flex flex-col items-center gap-3 transition-transform duration-200 ease-out will-change-transform [transform:translateZ(0)] hover:-translate-y-1.5 hover:scale-110"
              >
                <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full border border-gold/30 bg-navy-light/60 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    width={62}
                    height={62}
                    className="h-[62px] w-[62px] object-contain"
                  />
                </div>
                <p className="font-roboto text-lg font-medium">{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className="relative flex w-[45%] flex-col gap-10 border-l-2 border-gold/40 pl-8 max-[830px]:w-full max-[830px]:gap-6">
          {history.map((historyItem, id) => {
            return (
              <Reveal key={id} delay={id * 0.1}>
                <li className="relative rounded-2xl border border-white/5 bg-navy-light/50 p-6 backdrop-blur-sm">
                  <span className="absolute -left-[41px] top-8 h-4 w-4 rounded-full border-2 border-navy bg-gold" />
                  <div className="font-roboto">
                    <h3 className="text-xl font-semibold max-[830px]:text-lg">
                      {`${historyItem.role}, ${historyItem.organisation}`}
                    </h3>
                    <p className="mt-1 text-sm font-light uppercase tracking-wide text-gold">
                      {`${historyItem.startDate} - ${historyItem.endDate}`}
                    </p>
                    <ul className="ml-[17px] mt-3 list-outside list-disc space-y-1 text-base text-offwhite/80">
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
