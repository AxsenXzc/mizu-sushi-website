"use client";

import { useState, useEffect, useRef } from "react";
import { restaurants } from "@/lib/data";

interface FormData {
  nome: string;
  cognome: string;
  telefono: string;
  persone: string;
  data: string;
  ora: string;
  ristorante: string;
  note: string;
}

const initialForm: FormData = {
  nome: "",
  cognome: "",
  telefono: "",
  persone: "2",
  data: "",
  ora: "20:00",
  ristorante: "mizu",
  note: "",
};

function AnimatedCheck() {
  return (
    <div className="relative w-20 h-20 mx-auto mb-6">
      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
      <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse" />
      <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center">
        <svg className="w-10 h-10 text-white animate-fade-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  );
}

function FieldWrapper({
  children,
  label,
  required,
  index,
}: {
  children: React.ReactNode;
  label: string;
  required?: boolean;
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 80);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
    >
      <label className="block text-sm text-text-muted mb-1.5 tracking-wide">
        {label}
        {required && <span className="text-primary-light ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function BookingForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const message = `*NUOVA PRENOTAZIONE MIZU SUSHI*\n\n*Ristorante:* ${form.ristorante}\n*Nome:* ${form.nome} ${form.cognome}\n*Persone:* ${form.persone}\n*Data:* ${form.data}\n*Ora:* ${form.ora}\n*Telefono:* ${form.telefono}${form.note ? `\n*Note:* ${form.note}` : ""}`;

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `Codice di errore: ${res.status}`);
      }

      setStatus("sent");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Errore di connessione al server");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="text-center py-20 px-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform-gpu transition-all duration-700 animate-fade-in" style={{ transform: "translateZ(0)" }}>
        <div className="relative w-24 h-24 mx-auto mb-8" style={{ perspective: "1000px" }}>
          <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping" style={{ transform: "rotateX(45deg) rotateZ(45deg)" }} />
          <div className="absolute inset-0 rounded-2xl bg-primary/30 animate-pulse" style={{ transform: "rotateX(45deg) rotateZ(45deg) translateZ(-10px)" }} />
          <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-[0_10px_30px_rgba(196,30,58,0.4)]" style={{ transform: "rotateX(20deg) rotateZ(10deg)", transformStyle: "preserve-3d" }}>
            <svg className="w-12 h-12 text-white animate-fade-in" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: "translateZ(20px)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-4xl font-bold text-white mb-4 animate-fade-in-up" style={{ textShadow: "0 4px 20px rgba(255,255,255,0.1)" }}>
          Prenotazione Inviata!
        </h3>
        <p className="text-text-muted max-w-md mx-auto leading-relaxed text-lg animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          La tua richiesta è stata consegnata con successo. Riceverai presto la conferma via WhatsApp.
        </p>
        <button
          onClick={() => {
            setForm(initialForm);
            setStatus("idle");
            setStep(1);
          }}
          className="mt-12 px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm tracking-widest uppercase rounded-xl backdrop-blur-md transition-all duration-500 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:-translate-y-1 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          Nuova Prenotazione
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="text-center py-16 animate-fade-in">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-white mb-3 animate-fade-in-up">
          Errore di Invio
        </h3>
        <p className="text-text-muted max-w-md mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          Impossibile inviare la prenotazione in questo momento. Contattaci direttamente via telefono o WhatsApp.
          {errorMessage && (
            <span className="block mt-3 p-2 bg-red-950/30 border border-red-500/20 text-red-300 font-mono text-xs rounded text-center">
              Dettaglio errore: {errorMessage}
            </span>
          )}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <a
            href="tel:+390439068034"
            className="px-8 py-3.5 bg-primary hover:bg-primary-light text-white text-sm tracking-widest uppercase rounded-lg transition-all duration-300"
          >
            Chiama +39 0439 068034
          </a>
          <button
            onClick={() => { setStatus("idle"); setStep(1); }}
            className="px-8 py-3.5 border border-white/20 hover:border-white/40 text-white text-sm tracking-widest uppercase rounded-lg transition-all duration-300"
          >
            Riprova
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-4 mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${step >= s
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-surface text-text-dim border border-white/10"
                  }`}
              >
                {step > s ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  s
                )}
              </div>
              <span className={`text-xs tracking-widest uppercase hidden sm:block transition-colors ${step >= s ? "text-white" : "text-text-dim"}`}>
                {s === 1 ? "Chi Sei" : s === 2 ? "Dettagli" : "Conferma"}
              </span>
            </div>
            {s < 3 && (
              <div className={`w-8 h-[2px] transition-colors duration-500 ${step > s ? "bg-primary" : "bg-white/10"}`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Step 1: Chi Sei */}
        <div className={`space-y-5 transition-all duration-500 ${step === 1 ? "block" : "hidden"}`}>
          <FieldWrapper label="Nome" required index={0}>
            <input
              type="text"
              name="nome"
              required
              value={form.nome}
              onChange={handleChange}
              onFocus={() => setFocusedField("nome")}
              onBlur={() => setFocusedField(null)}
              placeholder="Nome"
              className={`w-full px-4 py-3.5 bg-surface/50 border rounded-lg text-white text-sm 
                focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-text-dim/50
                hover:border-white/20
                ${focusedField === "nome" ? "border-primary ring-primary/30 shadow-lg shadow-primary/5" : "border-white/10"}`}
            />
          </FieldWrapper>

          <FieldWrapper label="Cognome" required index={1}>
            <input
              type="text"
              name="cognome"
              required
              value={form.cognome}
              onChange={handleChange}
              onFocus={() => setFocusedField("cognome")}
              onBlur={() => setFocusedField(null)}
              placeholder="Cognome"
              className={`w-full px-4 py-3.5 bg-surface/50 border rounded-lg text-white text-sm 
                focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-text-dim/50
                hover:border-white/20
                ${focusedField === "cognome" ? "border-primary ring-primary/30 shadow-lg shadow-primary/5" : "border-white/10"}`}
            />
          </FieldWrapper>

          <FieldWrapper label="Telefono" required index={2}>
            <input
              type="tel"
              name="telefono"
              required
              value={form.telefono}
              onChange={handleChange}
              onFocus={() => setFocusedField("telefono")}
              onBlur={() => setFocusedField(null)}
              placeholder="+39 333 1234567"
              className={`w-full px-4 py-3.5 bg-surface/50 border rounded-lg text-white text-sm 
                focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-text-dim/50
                hover:border-white/20
                ${focusedField === "telefono" ? "border-primary ring-primary/30 shadow-lg shadow-primary/5" : "border-white/10"}`}
            />
          </FieldWrapper>

          <button
            type="button"
            onClick={() => setStep(2)}
            className="w-full py-3.5 bg-primary hover:bg-primary-light text-white text-sm tracking-widest uppercase rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 group"
          >
            Continua
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Step 2: Dettagli */}
        <div className={`space-y-5 transition-all duration-500 ${step === 2 ? "block" : "hidden"}`}>
          <FieldWrapper label="Ristorante" required index={0}>
            <select
              name="ristorante"
              value={form.ristorante}
              onChange={handleChange}
              onFocus={() => setFocusedField("ristorante")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3.5 bg-surface/50 border rounded-lg text-white text-sm 
                focus:outline-none focus:ring-1 transition-all duration-300
                hover:border-white/20
                ${focusedField === "ristorante" ? "border-primary ring-primary/30 shadow-lg shadow-primary/5" : "border-white/10"}`}
            >
              {restaurants.map((r) => (
                <option key={r.id} value={r.id} className="bg-[#0a0a0a]">
                  {r.name}
                </option>
              ))}
            </select>
          </FieldWrapper>

          <FieldWrapper label="Persone" required index={1}>
            <select
              name="persone"
              value={form.persone}
              onChange={handleChange}
              onFocus={() => setFocusedField("persone")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3.5 bg-surface/50 border rounded-lg text-white text-sm 
                focus:outline-none focus:ring-1 transition-all duration-300
                hover:border-white/20
                ${focusedField === "persone" ? "border-primary ring-primary/30 shadow-lg shadow-primary/5" : "border-white/10"}`}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n} className="bg-[#0a0a0a]">
                  {n} {n === 1 ? "persona" : "persone"}
                </option>
              ))}
              <option value="10+" className="bg-[#0a0a0a]">10+ persone</option>
            </select>
          </FieldWrapper>

          <div className="grid grid-cols-2 gap-4">
            <FieldWrapper label="Data" required index={2}>
              <input
                type="date"
                name="data"
                required
                value={form.data}
                onChange={handleChange}
                onFocus={() => setFocusedField("data")}
                onBlur={() => setFocusedField(null)}
                min={new Date().toISOString().split("T")[0]}
                className={`w-full px-4 py-3.5 bg-surface/50 border rounded-lg text-white text-sm 
                  focus:outline-none focus:ring-1 transition-all duration-300 [color-scheme:dark]
                  hover:border-white/20
                  ${focusedField === "data" ? "border-primary ring-primary/30 shadow-lg shadow-primary/5" : "border-white/10"}`}
              />
            </FieldWrapper>

            <FieldWrapper label="Ora" required index={3}>
              <input
                type="time"
                name="ora"
                required
                value={form.ora}
                onChange={handleChange}
                onFocus={() => setFocusedField("ora")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3.5 bg-surface/50 border rounded-lg text-white text-sm 
                  focus:outline-none focus:ring-1 transition-all duration-300 [color-scheme:dark]
                  hover:border-white/20
                  ${focusedField === "ora" ? "border-primary ring-primary/30 shadow-lg shadow-primary/5" : "border-white/10"}`}
              />
            </FieldWrapper>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 py-3.5 border border-white/10 hover:border-white/30 text-white text-sm tracking-widest uppercase rounded-lg transition-all duration-300"
            >
              Indietro
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="flex-[2] py-3.5 bg-primary hover:bg-primary-light text-white text-sm tracking-widest uppercase rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 group"
            >
              Continua
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Step 3: Conferma */}
        <div className={`space-y-5 transition-all duration-500 ${step === 3 ? "block" : "hidden"}`}>
          <FieldWrapper label="Note / Allergie" index={0}>
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              onFocus={() => setFocusedField("note")}
              onBlur={() => setFocusedField(null)}
              rows={3}
              placeholder="Allergie alimentari, richieste speciali, occasioni..."
              className={`w-full px-4 py-3.5 bg-surface/50 border rounded-lg text-white text-sm 
                focus:outline-none focus:ring-1 transition-all duration-300 placeholder:text-text-dim/50 resize-none
                hover:border-white/20
                ${focusedField === "note" ? "border-primary ring-primary/30 shadow-lg shadow-primary/5" : "border-white/10"}`}
            />
          </FieldWrapper>

          <div className="p-5 rounded-lg bg-primary/5 border border-primary/20 space-y-2 animate-fade-in">
            <p className="text-xs text-text-dim tracking-widest uppercase">Riepilogo</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-text-dim">Nome:</span>
                <span className="text-white ml-2">{form.nome} {form.cognome}</span>
              </div>
              <div>
                <span className="text-text-dim">Telefono:</span>
                <span className="text-white ml-2">{form.telefono}</span>
              </div>
              <div>
                <span className="text-text-dim">Persone:</span>
                <span className="text-white ml-2">{form.persone}</span>
              </div>
              <div>
                <span className="text-text-dim">Data:</span>
                <span className="text-white ml-2">{form.data}</span>
              </div>
              <div>
                <span className="text-text-dim">Ora:</span>
                <span className="text-white ml-2">{form.ora}</span>
              </div>
              <div>
                <span className="text-text-dim">Ristorante:</span>
                <span className="text-white ml-2">{restaurants.find(r => r.id === form.ristorante)?.name}</span>
              </div>
            </div>
            {form.note && (
              <div>
                <span className="text-text-dim text-sm">Note:</span>
                <p className="text-white text-sm mt-0.5">{form.note}</p>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex-1 py-3.5 border border-white/10 hover:border-white/30 text-white text-sm tracking-widest uppercase rounded-lg transition-all duration-300"
            >
              Indietro
            </button>
            <button
              type="submit"
              disabled={status === "sending"}
              className={`flex-[2] relative overflow-hidden py-4 text-white text-sm tracking-widest uppercase rounded-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1 ${status === "sending"
                  ? "bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  : "bg-gradient-to-r from-primary to-primary-dark border border-primary/50 hover:shadow-[0_10px_40px_rgba(196,30,58,0.4)]"
                } flex items-center justify-center gap-3 group`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {status === "sending" ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] animate-[shimmer_2s_infinite]" />
                  <div className="relative flex items-center gap-3" style={{ transform: "translateZ(10px)" }}>
                    <div className="relative w-5 h-5" style={{ perspective: "100px" }}>
                      <div className="absolute inset-0 border-2 border-t-primary border-r-transparent border-b-primary/30 border-l-transparent rounded-full animate-spin" style={{ transform: "rotateX(30deg) rotateZ(0deg)" }} />
                    </div>
                    <span className="tracking-[0.2em]">INVIO IN CORSO...</span>
                  </div>
                </>
              ) : (
                <>
                  <span className="relative z-10" style={{ transform: "translateZ(10px)" }}>Invia Prenotazione</span>
                  <svg className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: "translateZ(10px)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
