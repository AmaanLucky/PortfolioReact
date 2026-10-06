import React, { useState } from "react";

import { confettiBurst } from "../../lib/confetti";

const TOPICS = [
  {
    key: "job",
    emoji: "💼",
    label: "A job opportunity",
    opener: "Hi Amaan, I came across your portfolio and we have an opportunity I would like to discuss.",
  },
  {
    key: "collab",
    emoji: "🤝",
    label: "Let's collaborate",
    opener: "Hi Amaan, I would love to collaborate with you on something.",
  },
  {
    key: "idea",
    emoji: "💡",
    label: "A product idea",
    opener: "Hi Amaan, I have a product idea and would love your thoughts on it.",
  },
  {
    key: "hi",
    emoji: "👋",
    label: "Just saying hi",
    opener: "Hi Amaan, just dropping by to say hi!",
  },
];

const fieldClasses =
  "w-full rounded-2xl border-[3px] border-navy bg-white px-4 py-3 text-base text-navy placeholder:text-navy/40 focus:outline-none focus:ring-4 focus:ring-navy/25";

// Builds a pre-filled email in the browser. Nothing is sent to or stored by this site.
export const MessageBuilder = ({ email }) => {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const body = [topic.opener, message.trim(), name.trim() ? `Best,\n${name.trim()}` : ""]
    .filter(Boolean)
    .join("\n\n");
  const subject = `${topic.label} (via your portfolio)`;
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const copy = async (e) => {
    try {
      await navigator.clipboard.writeText(`Subject: ${subject}\n\n${body}`);
    } catch {
      /* clipboard unavailable */
    }
    confettiBurst(e.clientX, e.clientY, 60);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="rounded-[28px] border-[3px] border-navy bg-white p-6 text-navy shadow-[8px_8px_0_#17191B] sm:p-8">
      <span className="inline-block -rotate-2 rounded-full bg-gold px-4 py-1.5 font-display text-[10px] font-extrabold uppercase tracking-[2px] text-navy">
        Message builder
      </span>
      <h3 className="mt-4 font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
        What shall we talk about?
      </h3>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Choose a topic">
        {TOPICS.map((t) => {
          const active = t.key === topic.key;
          return (
            <button
              key={t.key}
              type="button"
              aria-pressed={active}
              onClick={() => setTopic(t)}
              data-cursor="pick"
              className={`rounded-full border-[3px] border-navy px-4 py-2 text-sm font-bold transition-all ${
                active
                  ? "-rotate-1 bg-navy text-white shadow-[3px_3px_0_#F96031]"
                  : "bg-white hover:-translate-y-0.5 hover:bg-gold/20"
              }`}
            >
              <span aria-hidden="true">{t.emoji}</span> {t.label}
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid gap-3">
        <label className="block">
          <span className="mb-1 block font-display text-[10px] font-extrabold uppercase tracking-wide">
            Your name (optional)
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            placeholder="Who is this from?"
            className={fieldClasses}
          />
        </label>
        <label className="block">
          <span className="mb-1 block font-display text-[10px] font-extrabold uppercase tracking-wide">
            Your message (optional)
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Add a few details..."
            className={`${fieldClasses} resize-none`}
          />
        </label>
      </div>

      <div className="mt-5 rounded-2xl border-[3px] border-dashed border-navy/40 bg-navy/5 p-4">
        <span className="font-display text-[10px] font-extrabold uppercase tracking-wide text-navy/60">
          Preview
        </span>
        <p className="mt-1 text-sm font-bold">{subject}</p>
        <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-navy/85">{body}</p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={mailto}
          data-cursor="send"
          className="rounded-full border-[3px] border-navy bg-navy px-6 py-3 font-display text-[11px] font-extrabold uppercase tracking-wide text-white no-underline shadow-[4px_4px_0_#F96031] transition-transform hover:-translate-y-0.5"
        >
          Open in my email app &rarr;
        </a>
        <button
          type="button"
          onClick={copy}
          data-cursor="copy"
          className="rounded-full border-[3px] border-navy px-6 py-3 font-display text-[11px] font-extrabold uppercase tracking-wide transition-colors hover:bg-navy hover:text-white"
        >
          {copied ? "Copied! ✓" : "Copy message"}
        </button>
      </div>
      <p className="mt-4 text-xs text-navy/60">
        This only opens your own email app with the text filled in. Nothing you type here is sent or stored by this site.
      </p>
    </div>
  );
};
