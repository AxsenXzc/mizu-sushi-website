"use client";

import { useState } from "react";
import { menuCategories } from "@/lib/data";
import { menuSusiyanListino, menuSusiyanAsporto } from "@/lib/menuSusiyan";

type MenuSection = {
  name: string;
  items: { name: string; price: string; description: string }[];
};

function CategoryBlock({ category }: { category: MenuSection }) {
  return (
    <div>
      <h4 className="text-lg font-bold text-primary-light mb-4 flex items-center gap-3">
        <span className="w-6 h-[2px] bg-primary/60 inline-block" />
        {category.name}
        <span className="text-xs text-text-dim font-normal">
          ({category.items.length} piatti)
        </span>
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {category.items.map((item, i) => (
          <div
            key={i}
            className="group p-4 bg-surface rounded-lg border border-white/5 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-3">
              <h5 className="text-sm font-semibold text-white leading-snug">
                {item.name}
              </h5>
              <span className="text-sm font-bold text-gold whitespace-nowrap">
                {item.price}
              </span>
            </div>
            {item.description && (
              <p className="text-xs text-text-muted leading-relaxed mt-1">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FullMenuSection() {
  const [activeRestaurant, setActiveRestaurant] = useState<"mizu" | "susiyan_listino" | "susiyan_asporto">("mizu");

  const currentMenu = activeRestaurant === "mizu" 
    ? menuCategories 
    : activeRestaurant === "susiyan_listino" 
      ? menuSusiyanListino 
      : menuSusiyanAsporto;
      
  const restaurantName = activeRestaurant === "mizu" 
    ? "Mizu Sushi – Feltre" 
    : activeRestaurant === "susiyan_listino"
      ? "Sushi Yan (Listino) – Belluno"
      : "Sushi Yan (Asporto) – Belluno";

  const totalItems = currentMenu.reduce((sum: number, cat: MenuSection) => sum + cat.items.length, 0);

  return (
    <section id="menu-completo" className="py-24 px-4 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Titolo */}
        <div className="text-center mb-12">
          <span className="font-[family-name:var(--font-jp)] text-4xl text-primary/40 block mb-2">品</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Menu Completo
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Tutti i nostri piatti, disponibili sia in sala che da asporto.
          </p>
        </div>

        {/* Restaurant Switcher */}
        <div className="flex items-center justify-center mb-10 flex-wrap">
          <div className="inline-flex flex-wrap justify-center bg-surface rounded-xl border border-white/10 p-1.5 gap-1">
            <button
              onClick={() => setActiveRestaurant("mizu")}
              className={`px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeRestaurant === "mizu"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-text-muted hover:text-white"
              }`}
            >
              🍣 Mizu Sushi (Feltre)
            </button>
            <button
              onClick={() => setActiveRestaurant("susiyan_listino")}
              className={`px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeRestaurant === "susiyan_listino"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-text-muted hover:text-white"
              }`}
            >
              🥢 Sushi Yan Listino (AYCE)
            </button>
            <button
              onClick={() => setActiveRestaurant("susiyan_asporto")}
              className={`px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeRestaurant === "susiyan_asporto"
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "text-text-muted hover:text-white"
              }`}
            >
              🥡 Sushi Yan Asporto
            </button>
          </div>
        </div>

        {/* Info badge */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-white/10 text-sm text-text-muted">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {restaurantName} — {currentMenu.length} categorie, {totalItems} piatti
          </span>
        </div>

        {/* Full Menu Grid */}
        <div className="space-y-10">
          {currentMenu.map((category: MenuSection, idx: number) => (
            <CategoryBlock key={`${activeRestaurant}-${idx}`} category={category} />
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
          <a
            href={
              activeRestaurant === "mizu" 
                ? "/menu-asporto-mizu.pdf" 
                : activeRestaurant === "susiyan_listino"
                  ? "/menu-listino-susiyan.pdf"
                  : "/menu-asporto-susiyan.pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-light text-white text-sm tracking-widest uppercase rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Scarica Menu PDF
          </a>
        </div>
      </div>
    </section>
  );
}
