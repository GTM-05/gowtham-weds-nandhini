"use client";

import { wedding } from "@/data/wedding";
import { parseDateTime } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function remainingTime(target: Date, now: number): Remaining | null {
  const diff = target.getTime() - now;
  if (diff <= 0) return null;
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function Unit({ label, value }: { label: string; value: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="flex min-w-[4.5rem] flex-col items-center sm:min-w-[6.5rem]">
      <div className="relative h-12 overflow-hidden font-serif text-4xl font-light tabular-nums text-gold-bright sm:h-16 sm:text-6xl">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            className="block"
            initial={reduce ? false : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? undefined : { y: -16, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-[0.62rem] uppercase tracking-[0.28em] text-ivory/60">{label}</span>
    </div>
  );
}

export function Countdown() {
  const target = parseDateTime(wedding.weddingDateTime);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const remaining = target && now !== null ? remainingTime(target, now) : undefined;
  const begun = target !== null && remaining === null && now !== null;

  return (
    <section id="countdown" className="relative scroll-mt-24 overflow-hidden bg-wine px-5 py-20 text-ivory sm:px-8 sm:py-24" aria-live="polite">
      <div className="kolam mandala-spin absolute -inset-16 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-script text-3xl text-gold-bright sm:text-4xl">
          {begun ? "The day is here" : "Counting the days"}
        </p>
        <h2 className="mt-3 font-serif text-4xl font-light sm:text-5xl">
          {begun ? "The Celebration Begins ❤️" : "Until we are married"}
        </h2>

        {begun ? null : (
          <div className="glow-pulse mx-auto mt-12 grid max-w-3xl grid-cols-4 gap-2 rounded-3xl px-2 py-4 sm:gap-6">
            <Unit label="Days" value={remaining ? String(remaining.days) : "—"} />
            <Unit label="Hours" value={remaining ? String(remaining.hours).padStart(2, "0") : "—"} />
            <Unit label="Minutes" value={remaining ? String(remaining.minutes).padStart(2, "0") : "—"} />
            <Unit label="Seconds" value={remaining ? String(remaining.seconds).padStart(2, "0") : "—"} />
          </div>
        )}

        {!target ? (
          <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-ivory/65">
            The auspicious date will appear here once it is added to the invitation.
          </p>
        ) : null}
      </div>
    </section>
  );
}
