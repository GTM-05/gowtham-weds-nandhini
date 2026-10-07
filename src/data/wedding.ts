export interface StoryChapter {
  id: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
}

export interface WeddingEvent {
  id: "engagement" | "muhurtham" | "reception";
  title: string;
  kicker: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  /** ISO 8601 start. Leave empty until the time is confirmed. */
  isoStart: string;
  /** ISO 8601 end. Defaults to two hours after a timed start when empty. */
  isoEnd: string;
  /** Saves the date as an all-day event when the hour is not confirmed yet. */
  allDay: boolean;
  /** Per-event Google Maps link. Falls back to googleMapsUrl. */
  mapsUrl: string;
}

export const navigation = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Our Story" },
  { href: "#events", label: "Events" },
  { href: "#venue", label: "Venue" },
] as const;

const engagement: WeddingEvent = {
  id: "engagement",
  title: "Engagement",
  kicker: "The evening before",
  description:
    "Families gather at Panimaya Annai Marriage Hall in Kanyakumari on the eve of the wedding.",
  date: "Sunday, 15 November 2026",
  time: "4:00 PM",
  venue: "Panimaya Annai Marriage Hall",
  address: "4F4X+VQC, South Thamarai Kulam, Thenthamaraikulam, Kanyakumari District, Tamil Nadu – 629704",
  isoStart: "2026-11-15T16:00:00+05:30",
  isoEnd: "",
  allDay: false,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Panimaya%20Annai%20Marriage%20Hall%2C%20South%20Thamarai%20Kulam%2C%20Thenthamaraikulam%2C%20Kanyakumari",
};

const muhurtham: WeddingEvent = {
  id: "muhurtham",
  title: "Muhurtham",
  kicker: "The sacred hour",
  description:
    "Gowtham and Nandhini are married at Panimaya Annai Marriage Hall, with the blessings of both families.",
  date: "Monday, 16 November 2026",
  time: "9:15 AM",
  venue: "Panimaya Annai Marriage Hall",
  address: "4F4X+VQC, South Thamarai Kulam, Thenthamaraikulam, Kanyakumari District, Tamil Nadu – 629704",
  isoStart: "2026-11-16T09:15:00+05:30",
  isoEnd: "",
  allDay: false,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Panimaya%20Annai%20Marriage%20Hall%2C%20South%20Thamarai%20Kulam%2C%20Thenthamaraikulam%2C%20Kanyakumari",
};

const reception: WeddingEvent = {
  id: "reception",
  title: "Reception",
  kicker: "An evening in Chennai",
  description: "Join both families for an evening at Saritha Mahal, Porur.",
  date: "Sunday, 29 November 2026",
  time: "6:00 PM",
  venue: "Saritha Mahal",
  address: "89, Kundrathur Main Rd, MS Nagar, Porur, Chennai, Tamil Nadu – 600125",
  isoStart: "2026-11-29T18:00:00+05:30",
  isoEnd: "",
  allDay: false,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Saritha%20Mahal%2C%2089%20Kundrathur%20Main%20Rd%2C%20Porur%2C%20Chennai",
};

export const wedding = {
  groom: {
    name: "Gowtham",
    portrait: "/images/groom.jpg",
    portraitAlt: "Placeholder portrait for Gowtham",
  },
  bride: {
    name: "Nandhini",
    portrait: "/images/bride.jpg",
    portraitAlt: "Placeholder portrait for Nandhini",
  },
  hero: {
    image: "/images/hero.jpg",
    imageAlt: "Cinematic placeholder for Gowtham and Nandhini's wedding portrait",
    eyebrow: "Together with their families",
    line: "are getting married",
    dateLabel: "Monday, 16 November 2026",
    locationLabel: "Kanyakumari",
  },
  invitation:
    "Together with their families, Gowtham and Nandhini request the honour of your presence as they begin their married life.",
  /** Muhurtham. Drives the countdown. */
  weddingDateTime: "2026-11-16T09:15:00+05:30",
  location: "Kanyakumari, Tamil Nadu",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Panimaya%20Annai%20Marriage%20Hall%2C%20South%20Thamarai%20Kulam%2C%20Thenthamaraikulam%2C%20Kanyakumari",
  musicSrc: "/audio/wedding.wav",
  engagement,
  reception,
  muhurtham,
  story: [
    {
      id: "met",
      title: "We met",
      text: "A quiet beginning, the kind that only makes sense afterwards. The story of how Gowtham and Nandhini met will be written here.",
      image: "/images/couple-1.jpg",
      imageAlt: "Illustration of Gowtham and Nandhini when they met",
      width: 1152,
      height: 864,
    },
    {
      id: "forever",
      title: "Forever begins",
      text: "With the blessings of both families, a new home and a shared life are about to begin. This chapter opens on the wedding day.",
      image: "/images/couple-2.jpg",
      imageAlt: "Illustration of Gowtham and Nandhini as their life together begins",
      width: 1152,
      height: 864,
    },
  ] satisfies StoryChapter[],
  seo: {
    title: "Gowtham ❤️ Nandhini | Wedding Invitation",
    description:
      "Join Gowtham and Nandhini as they begin their beautiful journey together.",
  },
} as const;

export const events: readonly WeddingEvent[] = [wedding.engagement, wedding.muhurtham, wedding.reception];
