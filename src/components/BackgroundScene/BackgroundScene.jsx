import React from "react";

export const BackgroundScene = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-navy">
      <div className="absolute -left-[10vw] -top-[15vw] h-[60vw] w-[60vw] min-w-[420px] rounded-full bg-[radial-gradient(circle,rgba(249,96,49,0.22)_0%,rgba(249,96,49,0)_70%)]" />
      <div className="absolute -right-[15vw] top-[35vh] h-[55vw] w-[55vw] min-w-[360px] rounded-full bg-[radial-gradient(circle,rgba(56,60,61,0.6)_0%,rgba(56,60,61,0)_70%)]" />
      <div className="absolute -bottom-[10vw] left-[20vw] h-[50vw] w-[50vw] min-w-[340px] rounded-full bg-[radial-gradient(circle,rgba(249,96,49,0.14)_0%,rgba(249,96,49,0)_70%)]" />

      <svg
        className="absolute right-0 top-0 h-full w-[220px] opacity-30 md:w-[320px]"
        viewBox="0 0 320 1400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M280 0 C220 120, 260 220, 200 340 S120 520, 180 640 S260 820, 160 940 S80 1120, 200 1240 S140 1360, 220 1400"
          stroke="#F96031"
          strokeWidth="2.5"
          strokeDasharray="14 16"
          className="animate-dash"
        />
        <path
          d="M280 0 C220 120, 260 220, 200 340 S120 520, 180 640 S260 820, 160 940 S80 1120, 200 1240 S140 1360, 220 1400"
          stroke="#383C3D"
          strokeWidth="6"
          strokeOpacity="0.4"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 h-[38vh] w-full opacity-80"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 400 L0 260 L180 140 L340 240 L520 90 L720 220 L900 60 L1100 210 L1260 120 L1440 260 L1440 400 Z"
          fill="#383C3D"
          fillOpacity="0.55"
        />
        <path
          d="M720 220 L900 60 L1020 175 Z"
          fill="#F96031"
          fillOpacity="0.2"
        />
        <path
          d="M0 400 L0 320 L220 220 L420 300 L640 170 L860 290 L1080 160 L1300 300 L1440 320 L1440 400 Z"
          fill="#17191B"
          fillOpacity="0.9"
        />
      </svg>
    </div>
  );
};
