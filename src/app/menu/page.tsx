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

  // Reset category when switching restaurants to avoid out-of-bounds index
  useEffect(() => {
    setActiveCategory(0);
  }, [activeRestaurant, activeTab]);

  const restaurantInfo = restaurants.find(r => r.id === activeRestaurant);
  const currentCategories = activeRestaurant === "mizu" 
    ? menuCategories 
    : activeTab === "infinity" ? menuSusiyanListino : menuSusiyanAsporto;
  const whatsappUrl = restaurantInfo ? `https://wa.me/${restaurantInfo.whatsappLink}` : "#";

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
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(196,30,58,0.15) 0%, transparent 60%)",
            }}
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
                className={`flex-1 py-4 px-6 rounded-2xl text-xl font-bold transition-all duration-300 ${
                  activeRestaurant === "mizu"
                    ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30 scale-105 border border-primary-light/50"
                    : "bg-surface/50 backdrop-blur-sm text-text-muted border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                Mizu Sushi
                <span className="block text-sm font-normal opacity-80 mt-1">Feltre (BL)</span>
              </button>
              <button
                onClick={() => setActiveRestaurant("susiyan")}
                className={`flex-1 py-4 px-6 rounded-2xl text-xl font-bold transition-all duration-300 ${
                  activeRestaurant === "susiyan"
                    ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30 scale-105 border border-primary-light/50"
                    : "bg-surface/50 backdrop-blur-sm text-text-muted border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                Sushi Yan
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
                            €14,90
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
                            €24,90
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

                  <div className="flex justify-center">
                    <ScrollReveal delay={200} className="w-full max-w-lg">
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
                            €23,90
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <ScrollReveal delay={300}>
                      <div className="h-full flex items-start gap-4 p-6 rounded-xl bg-surface border border-white/5">
                        <svg
                          className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <h4 className="text-white font-medium mb-3">
                            Le 4 Regole del Menu Infinity
                          </h4>
                          <ol className="space-y-3 text-sm text-text-muted list-decimal pl-4">
                            <li>
                              Il menù infinity viene applicato a tutti i commensali del tavolo.
                            </li>
                            <li>
                              È possibile ordinare tutti i piatti presenti nel seguente menù.
                            </li>
                            <li>
                              Alcuni piatti prevedono un limite di porzioni a persona.
                            </li>
                            <li>
                              Le pietanze ordinate ma non consumate verranno addebitate a prezzo di listino.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                      <div className="h-full flex items-start gap-4 p-6 rounded-xl bg-surface border border-white/5">
                        <svg
                          className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-white font-medium mb-1">
                              Avviso Spreco e Regolamento CE
                            </h4>
                            <p className="text-sm text-text-muted leading-relaxed">
                              Si prega di non sprecare il cibo; eventuali eccessi non consumati verranno conteggiati al prezzo di listino.
                            </p>
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-1 text-sm">
                              Allergeni & Pesce Crudo
                            </h4>
                            <p className="text-xs text-text-dim leading-relaxed">
                              In caso di allergie alimentari, il cliente è invitato a dichiararle al momento dell&apos;ordinazione (Regolamento CE 1169/2011, D.Lgs. 109/1992).
                              <br />
                              <span className="italic block mt-1">In case of food allergies, the consumer is invited to declare their allergenic diseases at the time of ordering.</span>
                              <br />
                              Tutto il pesce utilizzato è bonificato secondo la normativa vigente per il pesce crudo (Regolamento CE n. 853 del 2004).
                            </p>
                          </div>
                        </div>
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

                {/* Takeaway Deal - Only for Mizu and only for Asporto */}
                {activeRestaurant === "mizu" && activeTab === "asporto" && (
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

            {/* Category Tabs */}
            <ScrollReveal>
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {currentCategories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCategory(i)}
                    className={`px-5 py-2.5 text-xs tracking-widest uppercase rounded-full transition-all duration-300 ${
                      i === activeCategory
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "bg-surface text-text-muted border border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCategories[activeCategory]?.items?.map((item, i) => (
                <ScrollReveal key={i} delay={(i % 10) * 50}>
                  <div className="group h-full p-5 bg-surface rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-white group-hover:text-primary-light transition-colors">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-sm text-text-muted mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="px-3 py-1 bg-surface-light rounded-lg border border-white/5">
                        <span className="text-lg font-bold text-gold whitespace-nowrap">
                          {getItemPrice(item.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
