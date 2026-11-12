import { wedding } from "@/data/wedding";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function parseDateTime(value: string): Date | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const date = new Date(trimmed);
  if (Number.isNaN(date.getTime())) return null;
  return date;
}

export function siteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export function mapsHref(eventUrl: string): string | null {
  const value = eventUrl.trim() || wedding.googleMapsUrl.trim();
  return value || null;
}

/** One readable venue line without repeating town or district names. */
export function eventLocation(venue: string, address: string): string {
  const v = venue.trim();
  const a = address.trim();
  if (!v) return a;
  if (!a) return v;
  if (a.toLowerCase().includes(v.toLowerCase())) return a;
  if (v.toLowerCase().includes(a.toLowerCase())) return v;
  return `${v}, ${a}`;
}
