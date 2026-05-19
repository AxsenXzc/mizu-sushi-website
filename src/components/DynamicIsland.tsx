"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function DynamicIsland() {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [closingTime, setClosingTime] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    // Mostriamo la dynamic island con un leggero ritardo
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const time = hours + minutes / 60;

      // Orari: 11:00 - 15:00 e 18:30 - 23:30 (come da Menu Pranzo/Cena)
      if (time >= 11 && time < 15) {
        setIsOpen(true);
        setClosingTime("15:00");
      } else if (time >= 18.5 && time < 23.5) {
        setIsOpen(true);
        setClosingTime("23:30");
      } else {
        setIsOpen(false);
        setClosingTime("");
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out">
      <div 
        onClick={() => setExpanded(!expanded)}
        className={`
          flex items-center justify-center gap-3 cursor-pointer overflow-hidden
          backdrop-blur-xl bg-gradient-to-r from-black via-[#3a0812] to-black
          border border-[#c41e3a]/40 shadow-[0_0_30px_rgba(196,30,58,0.3)] hover:shadow-[0_0_40px_rgba(196,30,58,0.5)]
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-top
          ${expanded ? "h-24 w-72 rounded-[32px] px-6 py-4" : "h-12 w-48 rounded-full px-4 py-2 scale-100 hover:scale-105"}
        `}
      >
        {/* Puntino pulsante rosso/verde in base allo stato */}
        <div className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-[#10b981] shadow-[0_0_12px_#10b981]' : 'bg-[#e63946] shadow-[0_0_12px_#e63946]'} animate-pulse shrink-0 transition-all duration-500 ${expanded ? "absolute top-4 right-6" : ""}`} />
        
        {!expanded ? (
          <span className="text-sm font-medium text-white tracking-wider truncate">
            {pathname === "/prenotazioni" ? "Prenotazione rapida" : "Mizu Sushi"}
          </span>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full opacity-100 animate-fade-in">
            <span className="text-[10px] text-[#9ca3af] uppercase tracking-[0.2em] mb-1">Status Ristorante</span>
            <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#d4a853]">
              {isOpen ? `Aperto fino alle ${closingTime}` : "Chiuso al momento"}
            </span>
            <div className="flex gap-1.5 mt-3">
              <div className="w-1 h-1 rounded-full bg-[#c41e3a] animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-1 h-1 rounded-full bg-[#c41e3a] animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-1 h-1 rounded-full bg-[#c41e3a] animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
