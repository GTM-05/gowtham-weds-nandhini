import type { CSSProperties } from "react";

/**
 * Single source of truth for the wedding palette.
 * Values are applied as CSS variables in the root layout and consumed by Tailwind.
 */
export const theme = {
  colors: {
    maroon: "#5C1A28",
    burgundy: "#7A2A3A",
    wine: "#14080C",
    wineSoft: "#1C0C11",
    gold: "#C6A56A",
    goldBright: "#E8D5A8",
    goldDeep: "#6F4E2C",
    ivory: "#F7F1E8",
    cream: "#FBF8F3",
    beige: "#E7DCC8",
    charcoal: "#1A1210",
    ink: "#2A211C",
    night: "#0C0608",
  },
} as const;

export const themeStyle = {
  "--maroon": theme.colors.maroon,
  "--burgundy": theme.colors.burgundy,
  "--wine": theme.colors.wine,
  "--wine-soft": theme.colors.wineSoft,
  "--gold": theme.colors.gold,
  "--gold-bright": theme.colors.goldBright,
  "--gold-deep": theme.colors.goldDeep,
  "--ivory": theme.colors.ivory,
  "--cream": theme.colors.cream,
  "--beige": theme.colors.beige,
  "--charcoal": theme.colors.charcoal,
  "--ink": theme.colors.ink,
  "--night": theme.colors.night,
} as CSSProperties;
