import { Couple } from "@/components/Couple";
import { Countdown } from "@/components/Countdown";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Navbar } from "@/components/Navbar";
import { OurStory } from "@/components/OurStory";
import { Venue } from "@/components/Venue";
import { wedding } from "@/data/wedding";
import { parseDateTime } from "@/lib/utils";

function WeddingJsonLd() {
  const start = parseDateTime(wedding.weddingDateTime);
  const location = wedding.location.trim();
  if (!start || location.startsWith("[ADD")) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${wedding.groom.name} and ${wedding.bride.name}'s Wedding`,
    description: wedding.seo.description,
    startDate: start.toISOString(),
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: wedding.muhurtham.venue,
      address: wedding.muhurtham.address,
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default function HomePage() {
  return (
    <>
      <WeddingJsonLd />
      <Navbar />
      <main id="content">
        <Hero />
        <Couple />
        <Countdown />
        <OurStory />
        <Events />
        <Venue />
      </main>
      <Footer />
      <MusicPlayer />
    </>
  );
}
