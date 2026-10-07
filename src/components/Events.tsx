import { CalendarPlus, Clock, Flower2, Heart, MapPin, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { events, wedding, type WeddingEvent } from "@/data/wedding";
import { googleCalendarLink } from "@/lib/calendar";
import { cn, mapsHref } from "@/lib/utils";
import { buttonClasses, SectionHeading } from "@/components/ornaments";
import { Reveal } from "@/components/Reveal";

function Detail({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 text-gold" aria-hidden="true">
        {icon}
      </span>
      <div>
        <p className="text-[0.62rem] uppercase tracking-[0.22em] opacity-60">{label}</p>
        <p className="mt-1 text-base leading-snug">{value}</p>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: WeddingEvent }) {
  const sacred = event.id === "muhurtham";
  const calendar = googleCalendarLink({
    title: `${wedding.groom.name} & ${wedding.bride.name} — ${event.title}`,
    details: event.description,
    location: [event.venue, event.address].filter((part) => part && part !== "To be confirmed").join(", "),
    startIso: event.isoStart,
    endIso: event.isoEnd,
    allDay: event.allDay,
  });
  const directions = mapsHref(event.mapsUrl);
  const Icon = event.id === "muhurtham" ? Sparkles : event.id === "engagement" ? Heart : Flower2;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden p-7 sm:p-9",
        sacred
          ? "border border-gold/50 bg-gradient-to-b from-maroon to-wine text-ivory"
          : "border border-gold/30 bg-cream text-ink",
      )}
    >
      {sacred ? (
        <div className="pointer-events-none absolute inset-3 border border-gold/25" aria-hidden="true" />
      ) : null}
      <div className="relative flex items-center gap-3">
        <span
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-full border",
            sacred ? "border-gold/50 text-gold-bright" : "border-gold/50 text-gold-deep",
          )}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className={cn("font-script text-2xl", sacred ? "text-gold-bright" : "text-gold-deep")}>{event.kicker}</p>
      </div>
      <h3 className="relative mt-6 font-serif text-4xl font-light sm:text-5xl">{event.title}</h3>
      <p className={cn("relative mt-4 max-w-md text-sm leading-relaxed sm:text-base", sacred ? "text-ivory/75" : "text-ink/70")}>
        {event.description}
      </p>
      <div className="relative mt-8 grid gap-5">
        <Detail icon={<CalendarPlus className="h-4 w-4" />} label="Date" value={event.date} />
        <Detail icon={<Clock className="h-4 w-4" />} label="Time" value={event.time} />
        <Detail icon={<MapPin className="h-4 w-4" />} label="Venue" value={`${event.venue}, ${event.address}`} />
      </div>
      <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
        {calendar ? (
          <a className={buttonClasses("solid")} href={calendar} target="_blank" rel="noreferrer noopener">
            Add to Calendar
          </a>
        ) : (
          <button type="button" className={cn(buttonClasses("solid"), "opacity-45")} disabled title="Add a date in src/data/wedding.ts">
            Add to Calendar
          </button>
        )}
        {directions ? (
          <a
            className={buttonClasses("ghost", sacred ? "dark" : "light")}
            href={directions}
            target="_blank"
            rel="noreferrer noopener"
          >
            Get Directions
          </a>
        ) : (
          <button
            type="button"
            className={cn(buttonClasses("ghost", sacred ? "dark" : "light"), "opacity-45")}
            disabled
            title="Add a Google Maps link in src/data/wedding.ts"
          >
            Get Directions
          </button>
        )}
      </div>
    </article>
  );
}

export function Events() {
  return (
    <section id="events" className="relative scroll-mt-24 overflow-hidden bg-wine-soft px-5 py-20 text-ivory sm:px-8 sm:py-28">
      <div className="kolam mandala-spin absolute -inset-16 opacity-80" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Join us"
          title="The Celebrations"
          description="Engagement and muhurtham in Kanyakumari, then a reception in Chennai."
          tone="dark"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {events.map((event, index) => (
            <Reveal key={event.id} variant="scale" delay={index * 0.12} className="h-full">
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
