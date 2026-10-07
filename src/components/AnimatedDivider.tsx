"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function AnimatedDivider({
  className,
  align = "center",
}: {
  className?: string;
  align?: "center" | "start";
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn("flex items-center gap-3", align === "center" ? "justify-center" : "justify-start", className)}
      aria-hidden="true"
    >
      <motion.span
        className="h-px w-12 origin-left bg-gradient-to-r from-transparent to-gold sm:w-16"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1, ease }}
      />
      <motion.svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 text-gold"
        fill="currentColor"
        initial={reduce ? false : { opacity: 0, scale: 0.4, rotate: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
      >
        <path d="M12 2.5 13.6 9.2 20.5 12 13.6 14.8 12 21.5 10.4 14.8 3.5 12 10.4 9.2 12 2.5Z" />
      </motion.svg>
      <motion.span
        className="h-px w-12 origin-right bg-gradient-to-l from-transparent to-gold sm:w-16"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1, ease }}
      />
    </div>
  );
}
