"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";

const categories = ["Tutte", "Piatti", "Locale"];

const galleryImages = [
  { id: 1, category: "Piatti", src: "/images/gallery/piatto.jpg", label: "Specialità Sushi 1" },
  { id: 2, category: "Piatti", src: "/images/gallery/piatto2.jpg", label: "Specialità Sushi 2" },
  { id: 3, category: "Piatti", src: "/images/gallery/piatto3.jpg", label: "Specialità Sushi 3" },
  { id: 4, category: "Piatti", src: "/images/gallery/piatto4.jpg", label: "Specialità Cucina Cinese" },
  { id: 7, category: "Locale", src: "/images/gallery/locale1.jpg", label: "Interno Ristorante 1" },
  { id: 8, category: "Locale", src: "/images/gallery/locale2.jpg", label: "Interno Ristorante 2" },
  { id: 9, category: "Locale", src: "/images/gallery/locale3.jpg", label: "Zona Tavoli" },
  { id: 10, category: "Locale", src: "/images/gallery/locale4.jpg", label: "Ingresso Ristorante" },
  { id: 11, category: "Locale", src: "/images/gallery/locale5.jpg", label: "Dettaglio Design" },
  { id: 12, category: "Locale", src: "/images/gallery/locale6.jpg", label: "Bancone Sushi" },
];

export default function GalleriaPage() {
  const [activeCategory, setActiveCategory] = useState("Tutte");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [brokenImages, setBrokenImages] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setBrokenImages((prev) => ({ ...prev, [id]: true }));
  };

  const filtered =
    activeCategory === "Tutte"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
              Galleria Foto
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Scorri le immagini del nostro ristorante e dei nostri piatti più gustosi.
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
            {filtered.map((img, i) => {
              const isBroken = brokenImages[img.id];
              return (
                <ScrollReveal key={img.id} delay={i * 80}>
                  <button
                    onClick={() => {
                      if (!isBroken) {
                        setSelectedImage(img);
                      }
                    }}
                    disabled={isBroken}
                    className="group relative w-full aspect-[4/3] bg-surface rounded-lg overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 flex items-center justify-center"
                  >
                    {isBroken ? (
                      <div className="text-center p-4">
                        <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-2">
                          <svg className="w-6 h-6 text-text-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-xs text-text-dim uppercase tracking-wider">
                          {img.label}
                        </p>
                        <p className="text-[10px] text-primary mt-1">Carica: {img.src.replace("/images/", "")}</p>
                      </div>
                    ) : (
                      <>
                        <img
                          src={img.src}
                          alt={img.label}
                          onError={() => handleImageError(img.id)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-sm text-white font-medium">
                            {img.label}
                          </p>
                        </div>
                      </>
                    )}
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          {Object.keys(brokenImages).length > 0 && (
            <ScrollReveal delay={200}>
              <div className="text-center mt-12 p-6 rounded-lg bg-surface border border-white/5 max-w-xl mx-auto">
                <p className="text-text-muted text-xs leading-relaxed">
                  💡 <strong>Nota per l'amministratore:</strong> Carica le tue foto JPEG nella cartella del progetto: 
                  <code className="block mt-2 p-2 bg-black/40 rounded text-gold text-[11px] overflow-x-auto">
                    public/images/gallery/
                  </code>
                  Assicurati di nominarle esattamente come indicato sopra (es. <code className="text-white">piatto1.jpg</code>, <code className="text-white">locale1.jpg</code>, ecc.).
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
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
            className="relative max-w-4xl max-h-[85vh] w-full aspect-[4/3] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-center">
              <p className="text-white text-sm font-semibold">{selectedImage.label}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
