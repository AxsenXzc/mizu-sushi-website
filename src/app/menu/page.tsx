"use client";

import { useState } from "react";
import { menuCategories } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      <section className="relative pt-32 pb-20 px-4 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(196,30,58,0.2) 0%, transparent 60%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Il Nostro Menu
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Scopri la nostra selezione di piatti giapponesi e cinesi, preparati
              con ingredienti freschissimi.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Category Tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {menuCategories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(i)}
                  className={`px-5 py-2.5 text-xs tracking-widest uppercase rounded transition-all duration-300 ${
                    i === activeCategory
                      ? "bg-primary text-white"
                      : "bg-surface text-text-muted border border-white/10 hover:border-white/30"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Menu Items */}
          <div className="space-y-3">
            {menuCategories[activeCategory].items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group p-5 bg-surface rounded-lg border border-white/5 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-white group-hover:text-primary-light transition-colors">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-text-muted mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="text-lg font-bold text-gold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Info Formule */}
          <ScrollReveal delay={200}>
            <div className="mt-16 p-8 rounded-lg bg-primary/5 border border-primary/20">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">
                Le Nostre Formule
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-gold">€14,90</p>
                  <p className="text-sm text-text-muted mt-1">Menu Pranzo</p>
                  <p className="text-xs text-text-dim">Lun–Ven, 11:00–15:00</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold">€24,90</p>
                  <p className="text-sm text-text-muted mt-1">Menu Cena</p>
                  <p className="text-xs text-text-dim">Tutti i giorni</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold">All You Can Eat</p>
                  <p className="text-sm text-text-muted mt-1">Formula Serale</p>
                  <p className="text-xs text-text-dim">Selezione illimitata</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
