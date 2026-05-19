import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(196,30,58,0.2) 0%, transparent 60%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Chi Siamo
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              La storia del Mizu Sushi Ristorante, un viaggio nel gusto tra
              tradizione giapponese e cinese nel cuore di Feltre.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Storia */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionTitle
              title="La Nostra Storia"
              subtitle="Un ristorante che unisce tradizione e innovazione con ingredienti di prima qualità."
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="space-y-6 text-text-muted leading-relaxed">
              <p>
                <strong className="text-white">Mizu Sushi Ristorante</strong> nasce
                dalla passione per la cucina orientale e dal desiderio di portare
                a Feltre un&apos;esperienza culinaria autentica e indimenticabile. 
                Situato presso il Centro Commerciale Altanon, in Viale Monte Grappa 8, 
                il nostro ristorante offre un ambiente accogliente, moderno e raffinato 
                dove gustare il meglio della tradizione giapponese e cinese.
              </p>
              <p>
                La nostra dedizione quotidiana si riflette nella cura dei dettagli, 
                dall'attenta selezione delle materie prime fino alla presentazione 
                elegante di ogni portata. Crediamo che il cibo non sia solo nutrimento, 
                ma un'arte capace di regalare emozioni uniche a chi lo assapora.
              </p>
              <p>
                Il nostro obiettivo è offrire ai clienti un&apos;esperienza culinaria
                completa, con piatti preparati al momento utilizzando ingredienti
                freschissimi. Dal sushi creato a regola d'arte dai nostri chef ai piatti caldi
                della tradizione asiatica, ogni portata racconta una storia di passione, 
                qualità e competenza.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Valori */}
      <section className="py-20 px-4 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <SectionTitle
              title="I Nostri Valori"
              subtitle="Cosa ci guida ogni giorno nella nostra cucina."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Freschezza",
                desc: "Selezioniamo solo ingredienti di prima qualità, con consegne giornaliere per garantire la massima freschezza in ogni piatto.",
                icon: "✦",
              },
              {
                title: "Tradizione",
                desc: "Rispettiamo le ricette originali della cucina asiatica, portate in tavola da chef esperti e appassionati.",
                icon: "✦",
              },
              {
                title: "Accoglienza",
                desc: "Ogni ospite è unico. Ci impegniamo per offrire un servizio attento, rapido e un'atmosfera calda e raffinata.",
                icon: "✦",
              },
            ].map((v, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="text-center p-8 rounded-2xl bg-surface border border-white/5 hover:border-primary/30 transition-all duration-300">
                  <span className="text-3xl text-gold mb-4 block">{v.icon}</span>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
