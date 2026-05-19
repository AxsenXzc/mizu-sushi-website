"use client";

import { useState, useEffect, useRef } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const mizuPhone = "393272898873";
  const mizuMessage = encodeURIComponent(
    "Ciao! Vorrei prenotare un tavolo o ordinare da asporto al Mizu Sushi Feltre."
  );

  const susiyanPhone = "39043727044";
  const susiyanMessage = encodeURIComponent(
    "Ciao! Vorrei informazioni o ordinare da asporto da Sushi Yan Belluno."
  );

  return (
    <div
      ref={containerRef}
      className={`fixed bottom-6 right-6 z-40 flex flex-col items-end transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      {/* Dropdown Menu */}
      <div
        className={`mb-4 w-72 bg-neutral-950/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.6)] transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-75 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10">
          <span className="text-xs uppercase tracking-wider text-gold font-semibold">
            Contattaci su WhatsApp
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-text-muted hover:text-white transition-colors cursor-pointer"
            aria-label="Chiudi menu"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-2">
          {/* Option 1: Feltre */}
          <a
            href={`https://wa.me/${mizuPhone}?text=${mizuMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-[#c41e3a]/10 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#c41e3a]/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform font-bold text-sm">
              M
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                Mizu Sushi Feltre
              </p>
              <p className="text-[10px] text-text-muted">
                All You Can Eat &amp; Asporto
              </p>
            </div>
          </a>

          {/* Option 2: Belluno */}
          <a
            href={`https://wa.me/${susiyanPhone}?text=${susiyanMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-gold/50 hover:bg-[#d4a853]/10 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#d4a853]/20 flex items-center justify-center text-gold group-hover:scale-105 transition-transform font-bold text-sm">
              S
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                Sushi Yan Belluno
              </p>
              <p className="text-[10px] text-text-muted">
                Solo Asporto
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-[#25D366]/40 cursor-pointer ${
          isOpen ? "rotate-90 bg-neutral-800" : ""
        }`}
        aria-label="Opzioni WhatsApp"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </button>
    </div>
  );
}
