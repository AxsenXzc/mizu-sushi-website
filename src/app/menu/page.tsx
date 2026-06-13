"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { menuCategories, restaurants } from "@/lib/data";
import { menuSusiyanListino, menuSusiyanAsporto } from "@/lib/menuSusiyan";
import ScrollReveal from "@/components/ScrollReveal";

export default function MenuPage() {
  const [activeRestaurant, setActiveRestaurant] = useState<"mizu" | "susiyan">("mizu");
  const [activeTab, setActiveTab] = useState<"infinity" | "asporto">("infinity");
  const [activeCategory, setActiveCategory] = useState(0);

  // Helper function to assign emojis to categories automatically
  const getCategoryEmoji = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("sushi") || lower.includes("nigiri") || lower.includes("sashimi") || lower.includes("maki") || lower.includes("gunkan") || lower.includes("chirashi") || lower.includes("tartare") || lower.includes("barca")) return "🍣";
    if (lower.includes("antipast")) return "🥟";
    if (lower.includes("zupp")) return "🥣";
    if (lower.includes("insalat")) return "🥗";
    if (lower.includes("riso") || lower.includes("gohan")) return "🍚";
    if (lower.includes("spaghetti") || lower.includes("udon") || lower.includes("soba") || lower.includes("ramen") || lower.includes("primi")) return "🍜";
    if (lower.includes("pollo") || lower.includes("manzo") || lower.includes("maiale") || lower.includes("vitello") || lower.includes("secondi") || lower.includes("teppan") || lower.includes("griglia") || lower.includes("carne")) return "🥩";
    if (lower.includes("gamber") || lower.includes("pesce") || lower.includes("frutti di mare") || lower.includes("calamar") || lower.includes("salmone")) return "🍤";
    if (lower.includes("tempura") || lower.includes("fritt")) return "🍤";
    if (lower.includes("contorn") || lower.includes("verdur") || lower.includes("edamame") || lower.includes("soia")) return "🥬";
    if (lower.includes("dessert") || lower.includes("dolci")) return "🍰";
    if (lower.includes("bevand") || lower.includes("bibite") || lower.includes("birr") || lower.includes("vin") || lower.includes("drink")) return "🍹";
    return "🥢";
  };

  // Reset category when switching restaurants to avoid out-of-bounds index
  useEffect(() => {
    setActiveCategory(0);
  }, [activeRestaurant, activeTab]);

  const restaurantInfo = restaurants.find(r => r.id === activeRestaurant);
  const currentCategories = activeRestaurant === "mizu" 
    ? menuCategories 
    : activeTab === "infinity" ? menuSusiyanListino : menuSusiyanAsporto;
  const whatsappUrl = restaurantInfo ? `{{https://wa.me/${restaurantInfo.whatsappLink}}}` : "#";

  // Formats price dynamically: splits dual pricing (e.g. € 1,00 / € 3,00) based on tab
  const getItemPrice = (price: string) => {
    if (price.includes("/")) {
      const parts = price.split("/");
      return activeTab === "infinity" ? parts[0].trim() : parts[1].trim();
    }
    return price;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style=
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(196,30,58,0.15) 0%, transparent 60%)",
            
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-light text-xs font-semibold tracking-wider uppercase mb-4 border border-primary/30">
              I Nostri Ristoranti
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              I Nostri Menù
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10">
              Scopri l&apos;autentica esperienza culinaria asiatica. Seleziona il ristorante per visualizzare il menù dedicato.
            </p>
          </ScrollReveal>
          
          {/* Restaurant Selector */}
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
              <button
                onClick={() => setActiveRestaurant("mizu")}
                className={`flex-1 py-5 px-6 rounded-2xl text-xl font-bold transition-all duration-300 relative overflow-hidden ${
                  activeRestaurant === "mizu"
                    ? "badge-mizu text-white shadow-lg shadow-red-500/30 scale-105 border border-red-400/50"
                    : "bg-surface/50 backdrop-blur-sm text-text-muted border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {activeRestaurant === "mizu" && (
                  <span className="absolute top-3 right-3 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                )}
                🍣 Mizu Sushi
                <span className="block text-sm font-normal opacity-80 mt-1">Feltre (BL)</span>
              </button>
              <button
                onClick={() => setActiveRestaurant("susiyan")}
                className={`flex-1 py-5 px-6 rounded-2xl text-xl font-bold transition-all duration-300 relative overflow-hidden ${
                  activeRestaurant === "susiyan"
                    ? "badge-susiyan text-white shadow-lg shadow-yellow-500/30 scale-105 border border-yellow-400/50"
                    : "bg-surface/50 backdrop-blur-sm text-text-muted border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {activeRestaurant === "susiyan" && (
                  <span className="absolute top-3 right-3 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                )}
                🥢 Sushi Yan
                <span className="block text-sm font-normal opacity-80 mt-1">Belluno</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Menu Type Tabs */}
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 mt-4">
              <button
                onClick={() => setActiveTab("infinity")}
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                  activeTab === "infinity"
                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                    : "bg-surface text-text-muted border border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm12 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V7zM3 17a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                Menu Infinity (Ristorante)
              </button>
              <button
                onClick={() => setActiveTab("asporto")}
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                  activeTab === "asporto"
                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                    : "bg-surface text-text-muted border border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Menu Asporto (Takeaway)
              </button>
            </div>
          </ScrollReveal>

          {/* Infinity Menu Content */}
          {activeTab === "infinity" && (
            <div className="space-y-12">
              {activeRestaurant === "mizu" ? (
                <>
                  <ScrollReveal>
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-white mb-4">
                        Formula &quot;All You Can Eat&quot; - Mizu Sushi
                      </h2>
                      <p className="text-text-muted max-w-2xl mx-auto">
                        Ordina tutto ciò che desideri dal nostro tablet al tavolo. I
                        piatti verranno preparati al momento e serviti direttamente
                        al tuo tavolo.
                      </p>
                    </div>
                  </ScrollReveal>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Lunch */}
                    <ScrollReveal delay={100}>
                      <div className="relative p-8 rounded-2xl bg-gradient-to-b from-surface-light to-surface border border-white/10 hover:border-primary/30 transition-all group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10 group-hover:bg-primary/20 transition-colors" />
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Pranzo Infinity
                        </h3>
                        <p className="text-text-muted mb-6">
                          Dal Lunedì al Venerdì (11:00 - 15:00)
                        </p>
                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-5xl font-extrabold text-gold">
                            €15,90
                          </span>
                          <span className="text-text-dim">/persona</span>
                        </div>
                        <ul className="space-y-3 text-sm text-text-muted">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Bevande e dolci esclusi
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Bambini fino a 120cm pagano la metà
                          </li>
                        </ul>
                      </div>
                    </ScrollReveal>

                    {/* Dinner */}
                    <ScrollReveal delay={200}>
                      <div className="relative p-8 rounded-2xl bg-gradient-to-b from-surface-light to-surface border border-primary/30 hover:border-primary/50 transition-all group overflow-hidden shadow-[0_0_30px_-10px_rgba(196,30,58,0.3)]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-[100px] -z-10 group-hover:bg-primary/30 transition-colors" />
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Cena Infinity
                        </h3>
                        <p className="text-text-muted mb-6">
                          Tutte le sere e festivi
                        </p>
                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-5xl font-extrabold text-gold">
                            €25,90
                          </span>
                          <span className="text-text-dim">/persona</span>
                        </div>
                        <ul className="space-y-3 text-sm text-text-muted">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Menu arricchito con specialità esclusive
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Bevande e dolci esclusi
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Bambini fino a 120cm pagano la metà
                          </li>
                        </ul>
                      </div>
                    </ScrollReveal>
                  </div>

                  <ScrollReveal delay={300}>
                    <div className="flex items-start gap-4 p-6 rounded-xl bg-surface border border-white/5 mt-8">
                      <svg
                        className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" strokeWidth={2} />
                        <line
                          x1="12"
                          y1="8"
                          x2="12"
                          y2="12"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                        <line
                          x1="12"
                          y1="16"
                          x2="12.01"
                          y2="16"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div>
                        <h4 className="text-white font-medium mb-2">
                          Regole del Menu Infinity
                        </h4>
                        <p className="text-sm text-text-muted leading-relaxed">
                          Per evitare sprechi, i piatti ordinati e non consumati
                          dovranno essere pagati a prezzo pieno. Le porzioni sono
                          leggermente ridotte per permetterti di assaggiare più
                          varietà. Il costo del coperto è incluso nella formula.
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                </>
              ) : (
                <>
                  <ScrollReveal>
                    <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-white mb-4">
                        Formula &quot;All You Can Eat&quot; - Susiyan
                      </h2>
                      <p className="text-text-muted max-w-2xl mx-auto">
                        Ordina tutto ciò che desideri dal tablet del tuo tavolo. I
                        piatti verranno preparati al momento e serviti direttamente
                        al tuo tavolo.
                      </p>
                    </div>
                  </ScrollReveal>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Lunch */}
                    <ScrollReveal delay={100}>
                      <div className="relative p-8 rounded-2xl bg-gradient-to-b from-surface-light to-surface border border-white/10 hover:border-primary/30 transition-all group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10 group-hover:bg-primary/20 transition-colors" />
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Pranzo Infinity
                        </h3>
                        <p className="text-text-muted mb-6">
                          Tutti i giorni a pranzo
                        </p>
                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-5xl font-extrabold text-gold">
                            €15,90
                          </span>
                          <span className="text-text-dim">/persona</span>
                        </div>
                        <ul className="space-y-3 text-sm text-text-muted">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Bevande e dolci esclusi
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            I bambini fino a 120 cm di altezza pagano la metà
                          </li>
                        </ul>
                      </div>
                    </ScrollReveal>

                    {/* Dinner */}
                    <ScrollReveal delay={200}>
                      <div className="relative p-8 rounded-2xl bg-gradient-to-b from-surface-light to-surface border border-primary/30 hover:border-primary/50 transition-all group overflow-hidden shadow-[0_0_30px_-10px_rgba(196,30,58,0.3)]">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-[100px] -z-10 group-hover:bg-primary/30 transition-colors" />
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Cena Infinity
                        </h3>
                        <p className="text-text-muted mb-6">
                          Tutte le sere e festivi (18:00 - 23:30)
                        </p>
                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-5xl font-extrabold text-gold">
                            €25,90
                          </span>
                          <span className="text-text-dim">/persona</span>
                        </div>
                        <ul className="space-y-3 text-sm text-text-muted">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Menu arricchito con specialità esclusive
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Bevande e dolci esclusi
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            I bambini fino a 120 cm di altezza pagano la metà
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Il costo del coperto è incluso nella formula
                          </li>
                        </ul>
                      </div>
                    </ScrollReveal>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Menu Lista Piatti Content */}
          <div className="mt-16 border-t border-white/5 pt-16">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {activeRestaurant === "mizu"
                    ? activeTab === "infinity"
                      ? "I Nostri Piatti - Menu Infinity"
                      : "Menu Asporto Mizu"
                    : activeTab === "infinity"
                      ? "I Nostri Piatti - Menu Infinity"
                      : "Menu Asporto Susiyan"}
                </h2>
                <p className="text-text-muted max-w-2xl mx-auto mb-8">
                  {activeTab === "infinity"
                    ? "Sfoglia i piatti inclusi nella nostra formula All You Can Eat da gustare al tavolo."
                    : "Scegli i tuoi piatti preferiti da asporto. Ordinazione rapida e ingredienti sempre freschissimi."}
                </p>

                {/* Takeaway Deal - Only for Asporto */}
                {activeTab === "asporto" && (
                  <div className="max-w-md mx-auto mb-10">
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-surface-light to-surface border border-primary/30 hover:border-primary/50 transition-all group overflow-hidden shadow-[0_0_30px_-10px_rgba(196,30,58,0.3)]">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/15 rounded-bl-[80px] -z-10 group-hover:bg-primary/25 transition-colors" />
                      <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-light text-[10px] font-bold tracking-widest uppercase mb-3 border border-primary/30">
                        Offerta Asporto
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">
                        5 Piatti a Scelta
                      </h3>
                      <p className="text-text-muted text-sm mb-4">
                        Componi il tuo box con 5 piatti dal menù asporto
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-extrabold text-gold">€22,00</span>
                        <span className="text-text-dim text-sm">/box</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Booking link for Infinity vs WhatsApp link for Asporto */}
                <div className="mb-12">
                  {activeTab === "infinity" ? (
                    <Link
                      href="/prenotazioni"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-105"
                    >
                      Prenota un Tavolo
                    </Link>
                  ) : (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-500 transition-all duration-300 shadow-lg shadow-green-600/20 hover:scale-105"
                    >
                      Ordina via WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Category Tabs (Sticky on Mobile & Desktop) */}
            <div className="sticky top-[72px] md:top-[88px] z-40 sticky-restaurant px-2 py-3 md:py-4 rounded-2xl mx-auto max-w-5xl mb-10 shadow-xl -mx-4 sm:mx-auto">
              <div className="category-scroll flex items-center gap-2 md:gap-3 px-2">
                {currentCategories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(i)}
                    className={`flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 text-sm font-medium tracking-wide whitespace-nowrap rounded-full transition-all duration-300 ${
                      i === activeCategory
                        ? activeRestaurant === "mizu" 
                          ? "bg-primary text-white shadow-lg shadow-primary/30 cat-pill-active" 
                          : "bg-gold text-black shadow-lg shadow-gold/30 cat-pill-active"
                        : "bg-surface text-text-muted border border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span className="text-lg leading-none">{getCategoryEmoji(cat.name)}</span>
                    <span>{cat.name}</span>
                    <span className={`ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      i === activeCategory
                        ? activeRestaurant === "mizu" ? "bg-white/20 text-white" : "bg-black/20 text-black"
                        : "bg-white/5 text-text-dim"
                    }`}>
                      {cat.items?.length || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCategories[activeCategory]?.items?.map((item, i) => (
                <div 
                  key={`${activeCategory}-${i}`} 
                  className="menu-card group h-full p-4 md:p-5 bg-surface rounded-xl border border-white/5 transition-all duration-300 relative overflow-hidden"
                  style={{ animationDelay: `${(i % 10) * 0.05}s` }}
                >
                  <div className="flex items-start justify-between gap-3 md:gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-white group-hover:text-primary-light transition-colors truncate whitespace-normal line-clamp-2">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-xs md:text-sm text-text-muted mt-1.5 md:mt-2 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="px-3 py-1 bg-surface-light rounded-lg border border-white/5 shrink-0 shadow-inner">
                      <span className="text-base md:text-lg font-bold text-gold whitespace-nowrap">
                        {getItemPrice(item.price)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
