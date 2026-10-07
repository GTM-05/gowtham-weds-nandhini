"use client";

import { wedding } from "@/data/wedding";
import { cn } from "@/lib/utils";
import { Check, Share2 } from "lucide-react";
import { useEffect, useState } from "react";

function invitationText(url: string): string {
  return `Join ${wedding.groom.name} and ${wedding.bride.name} as they begin their beautiful journey together. ${url}`.trim();
}

export function ShareButton({ variant = "button" }: { variant?: "button" | "icon" }) {
  const [toast, setToast] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(""), 2800);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  async function share() {
    const url = window.location.href;
    const payload = {
      title: wedding.seo.title,
      text: wedding.seo.description,
      url,
    };

    if (typeof navigator.share === "function") {
      try {
        await navigator.share(payload);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setToast("Invitation link copied ❤️");
      window.setTimeout(() => setCopied(false), 2800);
    } catch {
      setToast("Copy the link from the address bar");
    }
  }

  const className =
    variant === "icon"
      ? "inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-bright transition hover:bg-white/5"
      : "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gold/70 px-5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-gold-bright transition hover:bg-white/5";

  return (
    <>
      <button type="button" className={className} onClick={() => void share()} aria-label="Share invitation">
        {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
        {variant === "button" ? <span>Share</span> : null}
      </button>
      <div
        role="status"
        aria-live="polite"
        className={cn(
          "pointer-events-none fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-ivory px-5 py-3 text-sm text-ink shadow-lg transition duration-300",
          toast ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        )}
      >
        {toast}
      </div>
    </>
  );
}

export function WhatsAppShare() {
  function openWhatsApp() {
    const href = `https://wa.me/?text=${encodeURIComponent(invitationText(window.location.href))}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <button
      type="button"
      className="inline-flex min-h-11 items-center justify-center rounded-full border border-gold/70 px-5 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-gold-bright transition hover:bg-white/5"
      onClick={openWhatsApp}
    >
      WhatsApp
    </button>
  );
}
