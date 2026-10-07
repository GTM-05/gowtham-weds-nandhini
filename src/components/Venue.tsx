import { wedding } from "@/data/wedding";
import { mapsHref } from "@/lib/utils";
import { buttonClasses, SectionHeading } from "@/components/ornaments";
import { Reveal } from "@/components/Reveal";
import { MapPin } from "lucide-react";

export function Venue() {
  const event = wedding.muhurtham;
  const directions = mapsHref(event.mapsUrl);

  return (
    <section id="venue" className="scroll-mt-24 bg-cream px-5 py-20 text-ink sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="Where we gather" title="The Venue" align="left" className="mb-8 md:mb-10" />
          <div className="space-y-6 text-left">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-gold-deep">Muhurtham</p>
              <h3 className="mt-2 font-serif text-4xl font-light">{event.venue}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink/75">{event.address}</p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-[0.62rem] uppercase tracking-[0.22em] text-ink/50">Date</dt>
                <dd className="mt-1 text-lg">{event.date}</dd>
              </div>
              <div>
                <dt className="text-[0.62rem] uppercase tracking-[0.22em] text-ink/50">Time</dt>
                <dd className="mt-1 text-lg">{event.time}</dd>
              </div>
            </dl>
            <p className="text-sm leading-relaxed text-ink/70">
              Engagement on {wedding.engagement.date} at {wedding.engagement.time}, in the same hall. Reception on{" "}
              {wedding.reception.date} at {wedding.reception.time}, {wedding.reception.venue}, {wedding.reception.address}.
            </p>
            {directions ? (
              <a className={buttonClasses("solid")} href={directions} target="_blank" rel="noreferrer noopener">
                View on Google Maps
              </a>
            ) : (
              <button type="button" className={`${buttonClasses("solid")} opacity-45`} disabled title="Add a Google Maps link in src/data/wedding.ts">
                View on Google Maps
              </button>
            )}
          </div>
        </div>

        <Reveal variant="image" className="relative min-h-[22rem] overflow-hidden border border-gold/40 bg-wine text-ivory">
          <div className="absolute inset-0" aria-hidden="true">
          <div className="kolam absolute inset-0 opacity-80" />
          <svg viewBox="0 0 640 480" className="absolute inset-0 h-full w-full opacity-70">
            <path d="M40 360 C140 250 180 420 280 300 S460 180 600 240" fill="none" stroke="#C6A56A" strokeWidth="1.2" />
            <path d="M20 180 C160 120 200 260 340 160 S520 80 620 150" fill="none" stroke="#E8D5A8" strokeOpacity="0.45" />
            <path d="M80 80 C180 160 260 40 360 140 S520 220 600 90" fill="none" stroke="#C6A56A" strokeOpacity="0.35" />
            <circle cx="330" cy="230" r="7" fill="#E8D5A8" />
            <circle cx="330" cy="230" r="18" fill="none" stroke="#E8D5A8" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-wine/80">
              <MapPin className="h-6 w-6 text-gold-bright" />
            </span>
            <p className="font-serif text-2xl font-light">Map preview</p>
            <p className="text-xs uppercase tracking-[0.22em] text-ivory/60">Directions open in Google Maps</p>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
