import { restaurants } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import LocationCard from "@/components/LocationCard";
import MapsEmbed from "@/components/MapsEmbed";

export default function ContattiPage() {
  const main = restaurants[0];

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
              Contatti
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Siamo a tua disposizione. Contattaci per prenotazioni, informazioni
              o take-away.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Info Principali */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionTitle
              title="I Nostri Ristoranti"
              subtitle="Tre sedi per servirti al meglio."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {restaurants.map((r, i) => (
              <ScrollReveal key={r.id} delay={i * 150}>
                <LocationCard {...r} />
              </ScrollReveal>
            ))}
          </div>

          {/* Mappa Principale */}
          <ScrollReveal>
            <SectionTitle
              title="Come Raggiungerci"
              subtitle="Mizu Sushi si trova al Centro Commerciale Altanon di Feltre."
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="rounded-lg overflow-hidden border border-white/5">
              <MapsEmbed
                src={main.mapSrc}
                title="Mappa Mizu Sushi Feltre"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Orari */}
      <section className="py-20 px-4 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionTitle
              title="Orari di Apertura"
              subtitle="Siamo aperti tutti i giorni, sia a pranzo che a cena."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {restaurants.map((r, i) => (
              <ScrollReveal key={r.id} delay={i * 150}>
                <div className="p-6 bg-surface rounded-lg border border-white/5 text-center">
                  <h3 className="text-base font-semibold text-white mb-3">
                    {r.name}
                  </h3>
                  <p className="text-sm text-text-muted mb-2">{r.address}</p>
                  <p className="text-sm text-primary-light font-medium">
                    {r.hours}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Altri Contatti */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <SectionTitle
              title="Resta in Contatto"
              subtitle="Prenota tramite telefono o WhatsApp, oppure passa a trovarci."
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href={`tel:${main.tel}`}
                className="p-6 bg-surface rounded-lg border border-white/5 hover:border-primary/30 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-primary/50 group-hover:text-primary-light mx-auto mb-3 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-sm text-text-muted group-hover:text-white transition-colors">
                  {main.tel}
                </p>
              </a>
              <a
                href={`https://wa.me/${main.whatsappLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-surface rounded-lg border border-white/5 hover:border-primary/30 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-primary/50 group-hover:text-primary-light mx-auto mb-3 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <p className="text-sm text-text-muted group-hover:text-white transition-colors">
                  {main.whatsapp}
                </p>
              </a>
              <div className="p-6 bg-surface rounded-lg border border-white/5">
                <svg className="w-6 h-6 text-primary/50 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm text-text-muted">{main.address}</p>
              </div>
              <div className="p-6 bg-surface rounded-lg border border-white/5">
                <svg className="w-6 h-6 text-primary/50 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-text-muted">{main.hours}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
