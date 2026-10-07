"use client";

import { wedding } from "@/data/wedding";
import { cn } from "@/lib/utils";
import { Music, Pause } from "lucide-react";
import { useRef, useState } from "react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hint, setHint] = useState("");

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
      setHint("");
    } catch {
      setPlaying(false);
      setHint("Music could not start. Check the audio file in wedding settings.");
    }
  }

  return (
    <div className="fixed bottom-5 right-4 z-40 sm:right-6">
      <audio
        ref={audioRef}
        src={wedding.musicSrc}
        loop
        preload="none"
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      <button
        type="button"
        onClick={() => void toggle()}
        aria-pressed={playing}
        aria-label={playing ? "Pause wedding music" : "Play wedding music"}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/60 bg-wine/90 px-4 text-[0.68rem] uppercase tracking-[0.18em] text-gold-bright shadow-lg backdrop-blur-md"
      >
        {playing ? <Pause className="h-4 w-4" /> : <Music className="h-4 w-4" />}
        <span>{playing ? "Playing" : "♫ Music"}</span>
        <span className={cn("flex h-4 items-end gap-0.5", playing ? "opacity-100" : "opacity-0")} aria-hidden="true">
          <span className="music-bar inline-block h-3 w-0.5 bg-gold-bright" />
          <span className="music-bar inline-block h-4 w-0.5 bg-gold-bright [animation-delay:150ms]" />
          <span className="music-bar inline-block h-2 w-0.5 bg-gold-bright [animation-delay:280ms]" />
        </span>
      </button>
      {hint ? <p className="mt-2 max-w-40 text-right text-[0.65rem] text-ivory">{hint}</p> : null}
    </div>
  );
}
