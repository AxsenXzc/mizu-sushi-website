import { restaurants } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import LocationCard from "@/components/LocationCard";
import MapsEmbed from "@/components/MapsEmbed";

export default function ContattiPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(196,30,58,0.15)_0%,transparent_60%)]" />
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
              o per ordinare il tuo asporto.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Le Nostre Sedi */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionTitle
              title="Le Nostre Sedi"
              subtitle="Seleziona la sede più vicina a te per scoprire i contatti dedicati."
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {restaurants.map((restaurant, idx) => (
              <ScrollReveal key={restaurant.id} delay={idx * 100}>
                <LocationCard {...restaurant} />
              </ScrollReveal>
            ))}
          </div>

          {/* Come Raggiungerci */}
          <ScrollReveal>
            <SectionTitle
              title="Come Raggiungerci"
              subtitle="Visualizza le mappe per raggiungere i nostri locali."
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {restaurants.map((restaurant, idx) => (
              <ScrollReveal key={restaurant.id} delay={idx * 100}>
                <div className="rounded-2xl overflow-hidden border border-white/5 bg-surface/50 p-4">
                  <h3 className="text-lg font-bold text-white mb-3 text-center">{restaurant.name}</h3>
                  <div className="rounded-lg overflow-hidden">
                    <MapsEmbed
                      src={restaurant.mapSrc}
                      title={`Mappa ${restaurant.name}`}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {restaurants.map((restaurant, idx) => (
              <ScrollReveal key={restaurant.id} delay={idx * 100}>
                <div className="p-8 bg-surface rounded-2xl border border-white/10 text-center h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {restaurant.name}
                    </h3>
                    <p className="text-sm text-text-muted mb-4">{restaurant.address}</p>
                  </div>
                  <p className="text-base text-primary-light font-medium tracking-wide">
                    {restaurant.hours}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contatti Diretti */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <SectionTitle
              title="Resta in Contatto"
              subtitle="Prenota tramite telefono o WhatsApp presso la tua sede di riferimento."
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-10">
            {restaurants.map((restaurant, idx) => (
              <ScrollReveal key={restaurant.id} delay={idx * 100}>
                <div className="p-8 bg-surface/30 rounded-2xl border border-white/5 text-center space-y-6">
                  <h3 className="text-xl font-bold text-white tracking-wide border-b border-white/5 pb-4">
                    {restaurant.name}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href={`tel:${restaurant.tel.replace(/\s+/g, "")}`}
                      className="flex flex-col items-center justify-center p-4 bg-surface rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                    >
                      <svg className="w-6 h-6 text-primary/50 group-hover:text-primary-light mb-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-xs text-text-dim uppercase tracking-widest mb-1">Telefono</span>
                      <p className="text-sm font-medium text-text-muted group-hover:text-white transition-colors">
                        {restaurant.tel}
                      </p>
                    </a>
                    
                    <a
                      href={"https://" + "wa.me/" + restaurant.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 bg-surface rounded-xl border border-white/5 hover:border-green-500/30 transition-all duration-300 group"
                    >
                      <svg className="w-6 h-6 text-green-500/50 group-hover:text-green-400 mb-2 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="text-xs text-text-dim uppercase tracking-widest mb-1">WhatsApp</span>
                      <p className="text-sm font-medium text-text-muted group-hover:text-green-400 transition-colors">
                        {restaurant.whatsapp}
                      </p>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
