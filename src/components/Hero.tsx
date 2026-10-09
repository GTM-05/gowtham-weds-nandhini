import { HeroMedia } from "@/components/HeroMedia";
import { wedding } from "@/data/wedding";
import type { CSSProperties } from "react";

type PetalStyleVars = {
  "--py0": string;
  "--petal-drift": string;
  "--r0": string;
  "--r1": string;
};

type Petal = {
  id: string;
  left: string;
  delay: string;
  duration: string;
  size: number;
  tone: string;
  burst: boolean;
  vars: PetalStyleVars;
};

function mix(i: number, salt: number) {
  return ((i * 9301 + salt * 49297) % 233280) / 233280;
}

function buildPetals(): Petal[] {
  const tones = ["bg-ivory/85", "bg-gold-bright/55", "bg-[#f5d0d8]/75"];

  return Array.from({ length: 46 }, (_, i) => {
    const burst = i < 32;
    const delay = burst ? mix(i, 1) * 1.6 : 2 + mix(i, 2) * 11;
    const duration = 14 + mix(i, 3) * 11;
    const left = -8 + mix(i, 4) * 116;
    const size = 5 + Math.floor(mix(i, 5) * 4);
    const startY = -(14 + mix(i, 6) * 20);
    const drift = (mix(i, 7) - 0.5) * 110;
    const r0 = mix(i, 8) * 50 - 25;
    const r1 = 165 + mix(i, 9) * 75;

    return {
      id: `p-${i}`,
      left: `${left.toFixed(2)}%`,
      delay: `${delay.toFixed(3)}s`,
      duration: `${duration.toFixed(2)}s`,
      size,
      tone: tones[i % tones.length],
      burst,
      vars: {
        "--py0": `${startY.toFixed(1)}vh`,
        "--petal-drift": `${drift.toFixed(1)}px`,
        "--r0": `${r0.toFixed(1)}deg`,
        "--r1": `${r1.toFixed(1)}deg`,
      },
    };
  });
}

const petals = buildPetals();

export function Hero() {
  const { groom, bride, hero } = wedding;

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-end justify-center overflow-hidden bg-wine text-ivory sm:items-center">
      <HeroMedia
        src={hero.image}
        alt={hero.imageAlt}
        objectPosition={hero.imageObjectPosition}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wine/75 via-wine/40 to-wine/85" />
      <div className="vignette absolute inset-0" />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {petals.map((petal) => (
          <span
            key={petal.id}
            className={`petal absolute -top-10 block rounded-[50%_50%_50%_0] ${petal.burst ? "petal-burst" : ""} ${petal.tone}`}
            style={
              {
                left: petal.left,
                width: petal.size,
                height: petal.size * 1.45,
                animationDelay: petal.delay,
                animationDuration: petal.duration,
                ...(petal.vars as CSSProperties),
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="frame-in pointer-events-none absolute inset-3 border border-gold/35 sm:inset-6" aria-hidden="true" />
      <div className="frame-in pointer-events-none absolute inset-5 border border-gold/20 sm:inset-8" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-28 pt-32 text-center sm:pb-24">
        <p className="rise font-script text-[1.85rem] text-gold-bright sm:text-4xl" style={{ animationDelay: "120ms" }}>
          {hero.eyebrow}
        </p>
        <h1 className="mt-4 font-serif font-light tracking-[-0.03em]">
          <span className="name-reveal block text-[clamp(3.25rem,12vw,8.5rem)] leading-[0.9]" style={{ animationDelay: "260ms" }}>
            {groom.name}
          </span>
          <span className="rise my-2 flex items-center justify-center gap-4 sm:my-3" style={{ animationDelay: "520ms" }}>
            <span className="line-grow h-px w-10 bg-gold/80 sm:w-16" aria-hidden="true" />
            <span className="ampersand-glow font-script text-5xl text-gold sm:text-7xl" aria-hidden="true">
              &amp;
            </span>
            <span className="sr-only"> and </span>
            <span className="line-grow h-px w-10 bg-gold/80 sm:w-16" aria-hidden="true" />
          </span>
          <span className="name-reveal block text-[clamp(3.25rem,12vw,8.5rem)] leading-[0.9]" style={{ animationDelay: "680ms" }}>
            {bride.name}
          </span>
        </h1>
        <p
          className="rise mt-6 text-[0.68rem] uppercase tracking-[0.42em] text-ivory/85 sm:text-xs"
          style={{ animationDelay: "720ms" }}
        >
          {hero.line}
        </p>
        <div
          className="rise mt-6 flex flex-col items-center gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-gold-bright sm:mt-8 sm:flex-row sm:gap-4 sm:text-sm"
          style={{ animationDelay: "880ms" }}
        >
          <span>{hero.dateLabel}</span>
          <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" aria-hidden="true" />
          <span>{hero.locationLabel}</span>
        </div>
      </div>

      <a
        href="#couple"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.62rem] uppercase tracking-[0.32em] text-ivory/80"
      >
        <span>Scroll to explore</span>
        <span className="animate-chevron block h-8 w-px bg-gradient-to-b from-gold-bright to-transparent" aria-hidden="true" />
      </a>
    </section>
  );
}
