import React from "react";

export const ProjectPlayingCard = ({ project, index, total, interactive }) => {
  const { title, description, skills, demo, source } = project;
  const tabIndex = interactive ? 0 : -1;
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-light to-navy p-5 text-left shadow-[0_18px_40px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-bold tracking-[2px] text-gold">
        <span>{pad(index + 1)}</span>
        <span className="text-offwhite/40">/ {pad(total)}</span>
      </div>

      <h3 className="mt-3 text-lg font-bold leading-snug text-white">{title}</h3>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-offwhite/75">{description}</p>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-medium text-tan"
          >
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
            className="rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-navy no-underline transition-colors hover:bg-gold-dark hover:text-white"
          >
            Demo &rarr;
          </a>
        )}
        {source && (
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={tabIndex}
            className="rounded-full border border-white/25 px-4 py-1.5 text-xs font-semibold text-white no-underline transition-colors hover:border-gold hover:text-gold"
          >
            Source &rarr;
          </a>
        )}
        {!demo && !source && (
          <span className="text-xs font-medium uppercase tracking-[1.5px] text-offwhite/40">
            Private project
          </span>
        )}
      </div>
    </article>
  );
};
