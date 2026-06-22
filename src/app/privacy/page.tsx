import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Mizu Sushi & Sushi Yan",
  description: "Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR).",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-sm text-text-dim mb-10">Ultimo aggiornamento: 22 giugno 2026</p>

      <div className="space-y-8 text-text-muted leading-relaxed">
        <p>{`La presente informativa descrive come vengono trattati i dati personali degli utenti che visitano questo sito web dei ristoranti Mizu Sushi (Feltre) e Sushi Yan (Belluno), in conformità al Regolamento (UE) 2016/679 (GDPR).`}</p>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Titolare del trattamento</h2>
          <p>{`Titolari del trattamento sono i ristoranti Mizu Sushi (Feltre) e Sushi Yan (Belluno). I dati societari completi (ragione sociale e Partita IVA) sono in corso di aggiornamento e saranno pubblicati a breve. Per qualsiasi richiesta è possibile contattarci tramite i recapiti indicati nella pagina Contatti.`}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Dati raccolti</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>{`Dati di navigazione (ad esempio indirizzo IP, tipo di browser, pagine visitate), raccolti in forma aggregata e anonimizzata solo previo consenso ai cookie statistici.`}</li>
            <li>{`Dati forniti volontariamente tramite il modulo di prenotazione: nome, numero di telefono, data, orario e numero di persone.`}</li>
            <li>{`Eventuali dati comunicati contattandoci via telefono o WhatsApp.`}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Finalità e base giuridica</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>{`Gestione delle prenotazioni e risposta alle richieste (base giuridica: esecuzione di misure precontrattuali e legittimo interesse).`}</li>
            <li>{`Analisi statistica anonima delle visite per migliorare il sito (base giuridica: consenso).`}</li>
            <li>{`Visualizzazione di mappe e contenuti di terze parti (base giuridica: consenso).`}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Servizi di terze parti</h2>
          <p className="mb-3">{`Il sito utilizza i seguenti servizi, attivati esclusivamente dopo il relativo consenso:`}</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{`Google Analytics 4 (Google Ireland Ltd.) — statistiche di traffico anonime, con anonimizzazione dell'indirizzo IP. Attivo solo previo consenso ai cookie statistici.`}</li>
            <li>{`Google Maps (Google Ireland Ltd.) — visualizzazione delle mappe delle sedi. Caricato solo previo consenso.`}</li>
            <li>{`WhatsApp (Meta Platforms Ireland Ltd.) — utilizzato se decidi di contattarci tramite il pulsante WhatsApp.`}</li>
            <li>{`Notifiche di prenotazione — i dati inseriti nel modulo di prenotazione vengono inviati al ristorante tramite un servizio di messaggistica per confermare la disponibilità.`}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Conservazione dei dati</h2>
          <p>{`I dati delle prenotazioni sono conservati per il tempo strettamente necessario a gestire il servizio richiesto. I dati statistici anonimi sono conservati secondo le impostazioni del servizio Google Analytics.`}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">{`Diritti dell'interessato`}</h2>
          <p>{`In qualsiasi momento puoi esercitare i diritti previsti dagli articoli 15-22 del GDPR: accesso, rettifica, cancellazione, limitazione, opposizione e portabilità dei dati. Hai inoltre il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it).`}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Modifiche</h2>
          <p>{`Il Titolare si riserva il diritto di aggiornare la presente informativa. Le modifiche saranno pubblicate su questa pagina con la relativa data di aggiornamento.`}</p>
        </section>

        <p className="pt-4">
          <a href="/cookie-policy" className="text-primary-light hover:text-primary transition-colors">
            Consulta la Cookie Policy →
          </a>
        </p>
      </div>
    </div>
  );
}
