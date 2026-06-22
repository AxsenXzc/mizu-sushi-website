"use client";

import { useState, useEffect, useCallback } from "react";

const CONSENT_KEY = "mizu-cookie-consent";
const CONSENT_VERSION = 1;

export type ConsentState = {
  version: number;
  necessary: true;
  statistics: boolean;
  maps: boolean;
  timestamp: string;
};

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

function Toggle({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      aria-pressed={checked}
      className={`relative w-11 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${
        checked ? "bg-primary" : "bg-white/15"
      } ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:opacity-90"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [maps, setMaps] = useState(false);

  const persist = useCallback((consent: ConsentState) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    } catch {
      // ignora errori di storage (es. modalità privata)
    }
    window.dispatchEvent(new CustomEvent("mizu-consent-change", { detail: consent }));
  }, []);

  useEffect(() => {
    const existing = getStoredConsent();
    if (!existing) {
      setOpen(true);
    } else {
      setStatistics(existing.statistics);
      setMaps(existing.maps);
    }

    const reopen = () => {
      const current = getStoredConsent();
      setStatistics(current?.statistics ?? false);
      setMaps(current?.maps ?? false);
      setShowDetails(true);
      setOpen(true);
    };

    window.addEventListener("mizu-open-cookie-preferences", reopen);
    return () => window.removeEventListener("mizu-open-cookie-preferences", reopen);
  }, []);

  const save = (next: { statistics: boolean; maps: boolean }) => {
    persist({
      version: CONSENT_VERSION,
      necessary: true,
      statistics: next.statistics,
      maps: next.maps,
      timestamp: new Date().toISOString(),
    });
    setStatistics(next.statistics);
    setMaps(next.maps);
    setShowDetails(false);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative w-full max-w-lg bg-neutral-950/95 border border-white/10 rounded-2xl p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🍪</span>
          <h2 className="text-lg font-bold text-white">Rispettiamo la tua privacy</h2>
        </div>

        <p className="text-sm text-text-muted leading-relaxed">
          Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo tuo consenso,
          cookie di statistica e di terze parti (come le mappe di Google). Puoi accettare,
          rifiutare o personalizzare le tue preferenze in qualsiasi momento.
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs">
          <a
            href="/privacy"
            className="text-primary-light hover:text-primary transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/cookie-policy"
            className="text-primary-light hover:text-primary transition-colors"
          >
            Cookie Policy
          </a>
        </div>

        {showDetails && (
          <div className="mt-5 space-y-4 border-t border-white/10 pt-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">Necessari</p>
                <p className="text-xs text-text-dim mt-0.5">
                  Indispensabili per il funzionamento del sito. Sempre attivi.
                </p>
              </div>
              <Toggle checked disabled />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">Statistiche</p>
                <p className="text-xs text-text-dim mt-0.5">
                  Ci aiutano a capire come viene utilizzato il sito, in forma anonima.
                </p>
              </div>
              <Toggle checked={statistics} onChange={setStatistics} />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">Mappe e contenuti esterni</p>
                <p className="text-xs text-text-dim mt-0.5">
                  Necessari per mostrare le mappe di Google con le nostre sedi.
                </p>
              </div>
              <Toggle checked={maps} onChange={setMaps} />
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          {!showDetails ? (
            <>
              <button
                type="button"
                onClick={() => save({ statistics: false, maps: false })}
                className="flex-1 py-3 text-xs tracking-widest uppercase rounded-lg border border-white/15 text-white hover:border-white/40 transition-colors"
              >
                Rifiuta
              </button>
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="flex-1 py-3 text-xs tracking-widest uppercase rounded-lg border border-white/15 text-white hover:border-white/40 transition-colors"
              >
                Personalizza
              </button>
              <button
                type="button"
                onClick={() => save({ statistics: true, maps: true })}
                className="flex-1 py-3 text-xs tracking-widest uppercase rounded-lg bg-primary hover:bg-primary-light text-white transition-colors shadow-lg shadow-primary/20"
              >
                Accetta tutti
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => save({ statistics, maps })}
                className="flex-1 py-3 text-xs tracking-widest uppercase rounded-lg border border-white/15 text-white hover:border-white/40 transition-colors"
              >
                Salva preferenze
              </button>
              <button
                type="button"
                onClick={() => save({ statistics: true, maps: true })}
                className="flex-1 py-3 text-xs tracking-widest uppercase rounded-lg bg-primary hover:bg-primary-light text-white transition-colors shadow-lg shadow-primary/20"
              >
                Accetta tutti
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
