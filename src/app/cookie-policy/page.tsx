import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Mizu Sushi & Sushi Yan",
  description: "Informativa sull'utilizzo dei cookie e delle tecnologie simili su questo sito.",
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold text-white mb-2">Cookie Policy</h1>
      <p className="text-sm text-text-dim mb-10">Ultimo aggiornamento: 22 giugno 2026</p>

      <div className="space-y-8 text-text-muted leading-relaxed">
        <p>{`Questa pagina descrive l'utilizzo dei cookie e delle tecnologie simili su questo sito web.`}</p>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Cosa sono i cookie</h2>
          <p>{`I cookie sono piccoli file di testo che i siti salvano sul dispositivo dell'utente per memorizzare informazioni, ad esempio le preferenze di navigazione.`}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Cookie necessari</h2>
          <p>{`Indispensabili per il corretto funzionamento del sito e per memorizzare le tue scelte sui cookie. Non richiedono consenso e non possono essere disattivati.`}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Cookie statistici</h2>
          <p>{`Utilizziamo Google Analytics 4 per raccogliere informazioni anonime e aggregate sulle visite (numero di visitatori, provenienza geografica, pagine più visitate). L'indirizzo IP è anonimizzato. Questi cookie vengono attivati solo dopo il tuo consenso.`}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Cookie e contenuti di terze parti</h2>
          <p>{`Per mostrare le mappe delle nostre sedi utilizziamo Google Maps, che può impostare cookie di terze parti. Le mappe vengono caricate solo dopo il tuo consenso.`}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Come gestire le preferenze</h2>
          <p>{`Puoi accettare, rifiutare o personalizzare i cookie tramite il banner mostrato alla prima visita. In qualsiasi momento puoi modificare le tue scelte cliccando su "Preferenze Cookie" nel piè di pagina del sito. Puoi inoltre gestire o eliminare i cookie dalle impostazioni del tuo browser.`}</p>
        </section>

        <p className="pt-4">
          <a href="/privacy" className="text-primary-light hover:text-primary transition-colors">
            Consulta la Privacy Policy →
          </a>
        </p>
      </div>
    </div>
  );
}
