import Link from "next/link";
import { restaurants, menuCategories, reviews } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import LocationCard from "@/components/LocationCard";
import ReviewCarousel from "@/components/ReviewCarousel";
import SectionTitle from "@/components/SectionTitle";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(196,30,58,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(212,168,83,0.08) 0%, transparent 40%)",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="font-[family-name:var(--font-jp)] text-8xl md:text-9xl font-bold text-primary/80 leading-none block mb-6">
              水
            </span>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
              MIZU
              <span className="text-primary"> SUSHI</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
              Ristorante Giapponese &amp; Cinese a Feltre (BL).
              <br />
              Scopri il vero gusto dell&apos;Oriente con ingredienti freschissimi
              e tradizione autentica.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/prenotazioni"
                className="px-8 py-4 bg-primary hover:bg-primary-light text-white text-sm tracking-widest uppercase rounded transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 glow-red"
              >
                Prenota Ora
              </Link>
              <Link
                href="/menu"
                className="px-8 py-4 border border-white/20 hover:border-white/40 text-white text-sm tracking-widest uppercase rounded transition-all duration-300"
              >
                Scopri il Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* I Nostri Ristoranti */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionTitle
              title="I Nostri Ristoranti"
              subtitle="Tre location per vivere l'esperienza Mizu Sushi e i suoi affiliati."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {restaurants.map((r, i) => (
              <ScrollReveal key={r.id} delay={i * 150}>
                <LocationCard {...r} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Anteprima Menu */}
      <section className="py-24 px-4 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionTitle
              title="Dal Nostro Menu"
              subtitle="Una selezione dei nostri piatti più amati."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuCategories
              .flatMap((cat) => cat.items)
              .slice(0, 6)
              .map((item, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="group p-5 bg-surface rounded-lg border border-white/5 hover:border-primary/30 transition-all duration-300 hover:translate-y-[-2px]">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-white">
                        {item.name}
                      </h3>
                      <span className="text-sm font-bold text-gold">
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-xs text-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
          </div>
          <ScrollReveal delay={200}>
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 hover:border-white/40 text-white text-sm tracking-widest uppercase rounded transition-all"
              >
                Menu Completo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recensioni */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionTitle
              title="Cosa Dicono di Noi"
              subtitle={`Valutazione media ${"★"} 3.9/5 su Google — ~270 recensioni`}
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <ReviewCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(196,30,58,0.2) 0%, transparent 60%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prenota il Tuo Tavolo
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
              Vieni a trovarci al Centro Commerciale Altanon di Feltre.
              Ti aspettiamo per un&apos;esperienza culinaria indimenticabile.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/prenotazioni"
                className="px-10 py-4 bg-primary hover:bg-primary-light text-white text-sm tracking-widest uppercase rounded transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Prenota Ora
              </Link>
              <Link
                href="/contatti"
                className="px-10 py-4 border border-white/20 hover:border-white/40 text-white text-sm tracking-widest uppercase rounded transition-all duration-300"
              >
                Contattaci
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
