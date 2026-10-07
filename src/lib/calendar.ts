import { parseDateTime } from "@/lib/utils";

function formatGoogleDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function allDayRange(isoDate: string): string | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate.trim());
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const start = new Date(Date.UTC(year, month - 1, day));
  const end = new Date(Date.UTC(year, month - 1, day + 1));
  const format = (date: Date) => date.toISOString().slice(0, 10).replaceAll("-", "");
  return `${format(start)}/${format(end)}`;
}

export function googleCalendarLink(options: {
  title: string;
  details: string;
  location: string;
  startIso: string;
  endIso: string;
  allDay?: boolean;
}): string | null {
  const dates = options.allDay
    ? allDayRange(options.startIso)
    : timedRange(options.startIso, options.endIso);
  if (!dates) return null;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: options.title,
    dates,
    details: options.details,
    location: options.location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function timedRange(startIso: string, endIso: string): string | null {
  const start = parseDateTime(startIso);
  if (!start) return null;
  const end = parseDateTime(endIso) ?? new Date(start.getTime() + 2 * 60 * 60 * 1000);
  return `${formatGoogleDate(start)}/${formatGoogleDate(end)}`;
}
