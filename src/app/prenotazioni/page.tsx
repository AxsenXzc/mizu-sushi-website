import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import BookingForm from "@/components/BookingForm";

export default function PrenotazioniPage() {
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
              Prenotazioni
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Prenota il tuo tavolo in uno dei nostri ristoranti. Riceverai la
              conferma direttamente su WhatsApp.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <SectionTitle
              title="Richiedi una Prenotazione"
              subtitle="Compila il modulo qui sotto e ti risponderemo via WhatsApp."
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="p-8 bg-surface rounded-lg border border-white/5">
              <BookingForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
