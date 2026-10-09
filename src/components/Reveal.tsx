"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealVariant = "up" | "left" | "right" | "scale" | "image";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

/** Opacity stays 1 so iOS Safari always shows text (invisible opacity breaks WebKit). */
const hidden = {
  up: { opacity: 1, y: 22 },
  left: { opacity: 1, x: -18 },
  right: { opacity: 1, x: 18 },
  scale: { opacity: 1, scale: 0.99, y: 14 },
  image: { opacity: 1, y: 14 },
} as const;

const shown = {
  up: { opacity: 1, y: 0, x: 0, scale: 1 },
  left: { opacity: 1, y: 0, x: 0, scale: 1 },
  right: { opacity: 1, y: 0, x: 0, scale: 1 },
  scale: { opacity: 1, y: 0, x: 0, scale: 1 },
  image: { opacity: 1, y: 0, x: 0, scale: 1 },
} as const;

export function Reveal({ children, className, delay = 0, variant = "up" }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={hidden[variant]}
      whileInView={shown[variant]}
      viewport={{ once: true, margin: "0px 0px 120px 0px", amount: 0 }}
      transition={{ duration: variant === "image" ? 0.9 : 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
