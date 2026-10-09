import Image from "next/image";
import { wedding } from "@/data/wedding";
import { GoldDivider } from "@/components/ornaments";
import { Reveal } from "@/components/Reveal";

function Portrait({
  src,
  alt,
  name,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  name: string;
  objectPosition?: string;
}) {
  return (
    <figure className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="arch-frame relative h-[26rem] w-[16.5rem] overflow-hidden border border-gold/50 bg-beige shadow-[0_24px_60px_rgba(20,8,12,0.08)] sm:h-[32rem] sm:w-[20rem]">
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized
            sizes="(min-width: 768px) 320px, 70vw"
            className="object-cover"
            style={{ objectPosition }}
          />
        </div>
        <span className="pointer-events-none absolute -left-3 top-8 h-16 w-px bg-gold/60" aria-hidden="true" />
        <span className="pointer-events-none absolute -right-3 bottom-16 h-16 w-px bg-gold/60" aria-hidden="true" />
      </div>
      <figcaption className="mt-7">
        <h2 className="font-serif text-5xl font-light tracking-tight sm:text-6xl">{name}</h2>
      </figcaption>
    </figure>
  );
}

export function Couple() {
  const { groom, bride } = wedding;

  return (
    <section id="couple" className="relative scroll-mt-24 overflow-hidden bg-ivory px-5 py-20 text-ink sm:px-8 sm:py-28">
      <div className="kolam mandala-spin absolute -inset-24 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center font-script text-4xl text-gold-deep">With the blessings of our parents</p>
          <GoldDivider className="mt-6" />
        </Reveal>
        <div className="mt-14 flex flex-col items-center gap-12 md:mt-16 md:flex-row md:items-start md:justify-center md:gap-8">
          <Reveal variant="scale" className="w-full md:w-auto">
            <Portrait
              src={groom.portrait}
              alt={groom.portraitAlt}
              name={groom.name}
              objectPosition={groom.portraitObjectPosition}
            />
          </Reveal>
          <div className="float-soft flex items-center gap-4 md:mt-48 md:flex-col" aria-hidden="true">
            <span className="h-px w-10 bg-gold md:h-16 md:w-px" />
            <span className="font-script text-5xl text-gold-deep">&amp;</span>
            <span className="h-px w-10 bg-gold md:h-16 md:w-px" />
          </div>
          <Reveal variant="scale" className="w-full md:w-auto" delay={0.15}>
            <Portrait src={bride.portrait} alt={bride.portraitAlt} name={bride.name} />
          </Reveal>
        </div>
        <Reveal>
          <p className="mx-auto mt-14 max-w-2xl text-center text-base leading-relaxed text-ink/75 sm:text-lg">
            {wedding.invitation}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
