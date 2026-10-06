import React from "react";

// One colour scheme per card in the hand, like different suits.
const VARIANTS = [
  {
    card: "bg-gold text-navy shadow-[6px_6px_0_#fff]",
    rule: "border-navy/30",
    count: "text-navy/50",
    muted: "text-navy/85",
    pill: "bg-navy text-white",
    primary: "bg-navy text-white hover:bg-white hover:text-navy",
    secondary: "border-navy text-navy hover:bg-navy hover:text-white",
    idle: "text-navy/60",
  },
  {
    card: "bg-white text-navy shadow-[6px_6px_0_#F96031]",
    rule: "border-navy/20",
    count: "text-navy/40",
    muted: "text-navy/80",
    pill: "bg-navy-light text-white",
    primary: "bg-gold text-navy hover:bg-navy hover:text-white",
    secondary: "border-navy text-navy hover:bg-navy hover:text-white",
    idle: "text-navy/50",
  },
  {
    card: "bg-navy-light text-white shadow-[6px_6px_0_#F96031]",
    rule: "border-white/20",
    count: "text-white/40",
    muted: "text-white/80",
    pill: "bg-gold text-navy",
    primary: "bg-gold text-navy hover:bg-white",
    secondary: "border-white text-white hover:bg-white hover:text-navy",
    idle: "text-white/50",
  },
  {
    card: "bg-navy text-white shadow-[6px_6px_0_#fff]",
    rule: "border-white/20",
    count: "text-white/40",
    muted: "text-white/80",
    pill: "bg-white text-navy",
    primary: "bg-gold text-navy hover:bg-white",
    secondary: "border-white text-white hover:bg-white hover:text-navy",
    idle: "text-white/50",
  },
];

const linkBase =
  "rounded-full border-2 px-3.5 py-1.5 font-display text-[10px] font-extrabold uppercase tracking-wide no-underline transition-colors";

export const ProjectPlayingCard = ({ project, index, total, interactive, onOpen }) => {
  const { title, description, skills, demo, clientNumber } = project;
  const tabIndex = interactive ? 0 : -1;
  const v = VARIANTS[index % VARIANTS.length];
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <article
      className={`flex h-full w-full flex-col overflow-hidden rounded-[22px] border-[3px] border-white p-5 text-left ${v.card}`}
    >
      <div className={`flex items-center justify-between border-b-2 pb-3 ${v.rule}`}>
        <span className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-extrabold leading-none">{pad(index + 1)}</span>
          <span className={`font-display text-[10px] font-extrabold tracking-[2px] ${v.count}`}>
            / {pad(total)}
          </span>
        </span>
        <button
          type="button"
          tabIndex={tabIndex}
          onClick={onOpen}
          data-cursor="read story"
          aria-label={`Read the story of ${title}`}
          className={`flex h-8 w-8 items-center justify-center rounded-full border-2 font-display text-lg font-extrabold leading-none transition-transform hover:rotate-90 ${v.secondary}`}
        >
          +
        </button>
      </div>

      <h3 className="mt-3 font-display text-[13px] font-extrabold uppercase leading-snug">
        {title}
      </h3>
      <p className={`mt-2 flex-1 text-[12.5px] leading-relaxed ${v.muted}`}>{description}</p>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <li key={skill} className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${v.pill}`}>
            {skill}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex min-h-[34px] items-center gap-2">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={tabIndex}
            data-cursor="open"
            className={`${linkBase} border-transparent ${v.primary}`}
          >
            Demo &rarr;
          </a>
        )}
        {!demo && clientNumber && (
          <span className={`font-display text-[10px] font-extrabold uppercase tracking-[1.5px] ${v.idle}`}>
            Client Project {clientNumber}
          </span>
        )}
      </div>
    </article>
  );
};
