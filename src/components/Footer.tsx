import { wedding } from "@/data/wedding";
import { GoldDivider } from "@/components/ornaments";
import { Reveal } from "@/components/Reveal";
import { ShareButton, WhatsAppShare } from "@/components/ShareButton";

export function Footer() {
  return (
    <footer className="bg-night px-5 py-20 text-center text-ivory sm:px-8">
      <Reveal>
      <p className="font-script text-3xl text-gold-bright sm:text-4xl">With love</p>
      <h2 className="mt-4 font-serif text-4xl font-light sm:text-6xl">
        {wedding.groom.name} <span aria-hidden="true">❤️</span> {wedding.bride.name}
      </h2>
      <GoldDivider className="mt-6" />
      <p className="mt-6 text-base text-ivory/80">With love and blessings from our families</p>
      <p className="mt-6 text-[0.72rem] uppercase tracking-[0.28em] text-gold-bright">{wedding.hero.dateLabel}</p>
      <p className="mt-2 text-[0.72rem] uppercase tracking-[0.28em] text-ivory/70">{wedding.hero.locationLabel}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <ShareButton />
        <WhatsAppShare />
      </div>
      <p className="mt-16 text-xs tracking-[0.18em] text-ivory/50">Made with ❤️ for our special day</p>
      </Reveal>
    </footer>
  );
}
