import Link from "next/link";
import { restaurants, reviews } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import LocationCard from "@/components/LocationCard";
import ReviewCarousel from "@/components/ReviewCarousel";
import SectionTitle from "@/components/SectionTitle";
import FullMenuSection from "@/components/FullMenuSection";

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
              subtitle="Scopri le nostre sedi a Feltre e Belluno."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {restaurants.map((restaurant, idx) => (
              <ScrollReveal key={restaurant.id} delay={idx * 100}>
                <LocationCard {...restaurant} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Completo */}
      <FullMenuSection />

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
              Vieni a trovarci nelle nostre sedi di Feltre e Belluno.
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
