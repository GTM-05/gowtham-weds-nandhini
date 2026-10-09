"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";

function getIosSafari(): boolean {
  const ua = navigator.userAgent;
  return (
    /iPhone|iPad|iPod/i.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

function useIosSafari() {
  return useSyncExternalStore(() => () => {}, getIosSafari, () => false);
}

type RevealVariant = "up" | "left" | "right" | "scale" | "image";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

const hidden = {
  up: { opacity: 0, y: 36 },
  left: { opacity: 0, x: -36 },
  right: { opacity: 0, x: 36 },
  scale: { opacity: 0, scale: 0.94, y: 20 },
  image: { opacity: 0, clipPath: "inset(14% 0% 0% 0%)", y: 18 },
} as const;

const shown = {
  up: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1, y: 0 },
  image: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", y: 0 },
} as const;

export function Reveal({ children, className, delay = 0, variant = "up" }: RevealProps) {
  const reduce = useReducedMotion();
  const ios = useIosSafari();

  if (reduce || ios) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={hidden[variant]}
      whileInView={shown[variant]}
      viewport={{ once: true, margin: "0px 0px 80px 0px", amount: 0.05 }}
      transition={{ duration: variant === "image" ? 1.05 : 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
