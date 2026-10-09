"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function HeroMedia({
  src,
  alt,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  objectPosition?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 size-full translate-y-[5%] sm:-inset-10 sm:size-auto"
        style={reduce ? undefined : { y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="animate-kenburns object-cover"
          style={{ objectPosition, transformOrigin: objectPosition }}
        />
      </motion.div>
    </div>
  );
}
