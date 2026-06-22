"use client";

import { useState, useEffect } from "react";
import { getStoredConsent } from "./CookieConsent";

interface MapsEmbedProps {
  src: string;
  title: string;
}

export default function MapsEmbed({ src, title }: MapsEmbedProps) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(getStoredConsent()?.maps ?? false);
    sync();
    window.addEventListener("mizu-consent-change", sync);
    return () => window.removeEventListener("mizu-consent-change", sync);
  }, []);

  if (!allowed) {
    return (
      <div className="w-full h-64 rounded-lg overflow-hidden border border-white/5 bg-surface/60 flex flex-col items-center justify-center text-center p-6 gap-3">
        <svg className="w-8 h-8 text-text-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p className="text-sm text-text-muted max-w-xs">
          Per visualizzare la mappa di Google Maps è necessario il tuo consenso ai cookie di terze parti.
        </p>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("mizu-open-cookie-preferences"))}
          className="px-5 py-2.5 text-xs tracking-widest uppercase rounded-lg bg-primary hover:bg-primary-light text-white transition-colors"
        >
          Abilita mappe
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden border border-white/5">
      <iframe
        src={src}
        width="100%"
        height="100%"
        className="border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  );
}
