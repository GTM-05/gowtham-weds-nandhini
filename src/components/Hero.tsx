import { HeroMedia } from "@/components/HeroMedia";
import { wedding } from "@/data/wedding";

const petals = [
  { left: "4%", delay: "0s", duration: "18s", size: 16, rotate: "-18deg" },
  { left: "14%", delay: "5s", duration: "22s", size: 11, rotate: "14deg" },
  { left: "24%", delay: "9s", duration: "19s", size: 13, rotate: "-8deg" },
  { left: "38%", delay: "2s", duration: "24s", size: 10, rotate: "20deg" },
  { left: "52%", delay: "7s", duration: "20s", size: 15, rotate: "-16deg" },
  { left: "66%", delay: "1s", duration: "21s", size: 12, rotate: "10deg" },
  { left: "78%", delay: "6s", duration: "18s", size: 14, rotate: "-22deg" },
  { left: "90%", delay: "11s", duration: "23s", size: 11, rotate: "8deg" },
];

export function Hero() {
  const { groom, bride, hero } = wedding;

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-end justify-center overflow-hidden bg-wine text-ivory sm:items-center">
      <HeroMedia src={hero.image} alt={hero.imageAlt} />
      <div className="absolute inset-0 bg-gradient-to-b from-wine/75 via-wine/40 to-wine/85" />
      <div className="vignette absolute inset-0" />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {petals.map((petal) => (
          <span
            key={`${petal.left}-${petal.delay}`}
            className="petal absolute top-0 block rounded-[50%_50%_50%_0] bg-ivory/80"
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size * 1.5,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              rotate: petal.rotate,
            }}
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
