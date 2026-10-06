import React, { useEffect, useState } from "react";

import { getImageUrl } from "../../utils";
import { confettiBurst } from "../../lib/confetti";
import { MessageBuilder } from "./MessageBuilder";
import { Reveal } from "../Reveal/Reveal";
import { Marquee } from "../Hero/Marquee";
import { Wobble } from "../Hero/Wobble";
import { Sticker } from "../Hero/Sticker";

const EMAIL = "amaanahmed2405@gmail.com";
const PHONE = "+91 9989583343";

const CONTACTS = [
  { key: "email", icon: "contact/emailIcon.png", label: EMAIL, copy: EMAIL },
  { key: "phone", icon: "contact/phoneIcon.png", label: PHONE, copy: PHONE },
  {
    key: "linkedin",
    icon: "contact/linkedinIcon.png",
    label: "linkedin.com/in/amaan-ahmed/",
    href: "https://www.linkedin.com/in/amaan-ahmed-922531250/",
  },
  {
    key: "github",
    icon: "contact/githubIcon.png",
    label: "github.com/AmaanLucky",
    href: "https://github.com/AmaanLucky",
  },
];

const istTime = () =>
  new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(new Date());

const ClockChip = () => {
  const [time, setTime] = useState(istTime);
  useEffect(() => {
    const id = setInterval(() => setTime(istTime()), 20000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="mt-6 inline-flex items-center gap-2 rounded-full border-[3px] border-navy bg-white px-4 py-2 font-display text-[11px] font-extrabold uppercase tracking-wide shadow-[3px_3px_0_#17191B]">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
      </span>
      It&apos;s {time} in India (IST)
    </span>
  );
};

const chipClasses =
  "group flex w-full max-w-[420px] items-center gap-4 rounded-full border-[3px] border-navy bg-navy py-2.5 pl-2.5 pr-6 text-left text-white no-underline shadow-[6px_6px_0_#fff] transition-colors hover:bg-white hover:text-navy";

const Chip = ({ item, copied, onCopy }) => {
  const inner = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold">
        <img src={getImageUrl(item.icon)} alt="" className="h-6 w-6 object-contain" />
      </span>
      <span className="min-w-0 flex-1 break-all font-display text-[11px] font-extrabold leading-tight tracking-wide sm:text-[13px]">
        {copied === item.key ? "Copied! ✓" : item.label}
      </span>
      <span aria-hidden="true" className="text-xl text-gold">
        {item.href ? "↗" : "⧉"}
      </span>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="open"
        className={chipClasses}
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      type="button"
      data-cursor="copy"
      aria-label={`Copy ${item.key} to clipboard`}
      onClick={(e) => onCopy(item, e)}
      className={chipClasses}
    >
      {inner}
    </button>
  );
};

export const Contact = () => {
  const [copied, setCopied] = useState(null);

  const onCopy = async (item, e) => {
    try {
      await navigator.clipboard.writeText(item.copy);
    } catch {
      /* clipboard unavailable: still show the celebration */
    }
    confettiBurst(e.clientX, e.clientY, 90);
    setCopied(item.key);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <footer
      id="contact"
      className="relative z-[1] mt-[140px] w-full scroll-mt-[100px] overflow-hidden border-t-[4px] border-white bg-gold text-navy"
    >
      <div className="border-b-[4px] border-navy bg-navy py-3 text-white">
        <Marquee
          items={["LET'S TALK", "SAY HI", "LET'S TALK", "SAY HI"]}
          speed={1.8}
          className="font-display text-sm font-extrabold uppercase tracking-wider"
        />
      </div>

      <div className="relative mx-[10%] py-16 max-[830px]:py-12">
        <Reveal>
          <span className="mb-4 inline-block -rotate-3 rounded-full border-[3px] border-navy bg-white px-4 py-1.5 font-display text-[11px] font-extrabold uppercase tracking-[2px] shadow-[3px_3px_0_#17191B]">
            Let&apos;s Talk
          </span>
          <h2 className="font-display text-[clamp(64px,17vw,230px)] font-extrabold uppercase leading-[0.95] [text-shadow:5px_5px_0_#fff]">
            <Wobble text="Say Hi" />
          </h2>
          <p className="mt-6 max-w-[520px] text-xl font-medium text-navy/90 sm:text-2xl">
            Got a product idea, a team to join, or just want to talk code? My inbox is open.
          </p>
          <ClockChip />
        </Reveal>

        <div className="mt-12 grid grid-cols-[minmax(0,420px)_minmax(0,1fr)] items-start gap-12 max-[1000px]:grid-cols-1">
          <Reveal delay={0.1}>
            <ul className="flex list-none flex-col items-start gap-6 max-[1000px]:items-center">
              {CONTACTS.map((item) => (
                <li key={item.key} className="w-full max-w-[420px]">
                  <Chip item={item} copied={copied} onCopy={onCopy} />
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2} className="max-w-[640px] max-[1000px]:mx-auto">
            <MessageBuilder email={EMAIL} />
          </Reveal>
        </div>

        <div className="pointer-events-none absolute right-[4%] top-[18%] h-[120px] w-[120px] max-[1000px]:hidden">
          <div className="pointer-events-auto relative h-full w-full">
            <Sticker className="left-0 top-0 !bg-navy !text-white" rotate={10}>
              Hello &#128075;
            </Sticker>
          </div>
        </div>
      </div>

      <p className="border-t-[3px] border-navy/30 px-[10%] py-5 text-center font-display text-[10px] font-extrabold uppercase tracking-[2px] text-navy/80">
        &copy; {new Date().getFullYear()} Amaan Ahmed &middot; Built with React, Tailwind &amp; Framer Motion
      </p>
    </footer>
  );
};
