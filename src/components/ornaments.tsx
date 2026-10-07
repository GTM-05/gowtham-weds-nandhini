import { AnimatedDivider } from "@/components/AnimatedDivider";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function GoldDivider({ className, align = "center" }: { className?: string; align?: "center" | "start" }) {
  return <AnimatedDivider className={className} align={align} />;
}

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/70 font-serif text-[0.95rem] tracking-wide text-gold-bright",
        className,
      )}
      aria-hidden="true"
    >
      G<span className="px-px text-gold">·</span>N
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-14 max-w-2xl md:mb-16", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      <p className={cn("font-script text-3xl sm:text-4xl", tone === "dark" ? "text-gold-bright" : "text-gold-deep")}>
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-4xl font-light tracking-tight sm:text-5xl">{title}</h2>
      <GoldDivider className="mt-6" align={align === "left" ? "start" : "center"} />
      {description ? (
        <p className={cn("mt-6 text-base leading-relaxed sm:text-lg", tone === "dark" ? "text-ivory/75" : "text-ink/75")}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function buttonClasses(tone: "solid" | "ghost" = "solid", surface: "dark" | "light" = "dark"): string {
  return cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] transition duration-300",
    tone === "solid" && "bg-gold text-wine hover:bg-gold-bright",
    tone === "ghost" && surface === "dark" && "border border-gold/70 text-gold-bright hover:bg-white/5",
    tone === "ghost" && surface === "light" && "border border-gold-deep/40 text-gold-deep hover:bg-gold/10",
  );
}
