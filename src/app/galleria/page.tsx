"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";

const categories = ["Tutte", "Piatti", "Ristorante", "Interni"];

const placeholderImages = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  category:
    i < 4 ? "Piatti" : i < 8 ? "Ristorante" : "Interni",
  label: i < 4 ? "Piatto" : i < 8 ? "Ristorante" : "Interno",
  index: (i % 4) + 1,
}));

export default function GalleriaPage() {
  const [activeCategory, setActiveCategory] = useState("Tutte");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered =
    activeCategory === "Tutte"
      ? placeholderImages
      : placeholderImages.filter((img) => img.category === activeCategory);

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
              Galleria
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Scorri le immagini del nostro ristorante e dei nostri piatti.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-xs tracking-widest uppercase rounded transition-all duration-300 ${
                    cat === activeCategory
                      ? "bg-primary text-white"
                      : "bg-surface text-text-muted border border-white/10 hover:border-white/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <ScrollReveal key={img.id} delay={i * 80}>
                <button
                  onClick={() => setSelectedImage(img.id)}
                  className="group relative w-full aspect-[4/3] bg-surface rounded-lg overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <svg className="w-8 h-8 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-xs text-text-dim tracking-widest uppercase">
                        {img.category} {img.index}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-white">
                      {img.category} — Foto {img.index}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="text-center mt-12 p-8 rounded-lg bg-surface border border-white/5">
              <svg className="w-12 h-12 mx-auto text-text-dim mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-text-muted text-sm">
                Le foto verranno aggiunte a breve. 
                {activeCategory === "Tutte" ? "" : ` Seleziona "${activeCategory}" per vedere i placeholder.`}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            aria-label="Chiudi"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="max-w-4xl w-full aspect-[4/3] bg-surface rounded-lg flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-text-muted">Foto in arrivo</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
