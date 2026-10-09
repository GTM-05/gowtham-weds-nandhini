import Image from "next/image";
import { wedding } from "@/data/wedding";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ornaments";

export function OurStory() {
  return (
    <section id="story" className="scroll-mt-24 bg-cream px-5 py-20 text-ink sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="A love, unfolding"
          title="Our Story"
          description="From a quiet hello to sacred flowers and the day we wed—a little of our journey, told with love."
        />
        <div className="relative space-y-16 md:space-y-24">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-transparent via-gold to-transparent md:left-1/2 md:block" aria-hidden="true" />
          {wedding.story.map((chapter, index) => {
            const reversed = index % 2 === 1;
            return (
              <article key={chapter.id} className="grid items-center gap-8 md:grid-cols-2 md:gap-20">
                <Reveal variant="image" delay={index * 0.05} className={reversed ? "md:order-2" : undefined}>
                  <div className="relative aspect-[4/3] overflow-hidden border border-gold/35 bg-beige">
                    <Image
                      src={chapter.image}
                      alt={chapter.imageAlt}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal variant={reversed ? "left" : "right"} delay={0.12 + index * 0.05} className={reversed ? "md:order-1 md:text-right" : undefined}>
                  <p className="font-script text-3xl text-gold-deep">0{index + 1}</p>
                  <h3 className="mt-2 font-serif text-4xl font-light sm:text-5xl">{chapter.title}</h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-ink/75 sm:text-lg md:max-w-none">
                    {chapter.text}
                  </p>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
