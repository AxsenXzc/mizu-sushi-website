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
  const [timeError, setTimeError] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  // Helper to get local date in YYYY-MM-DD format (avoids UTC offset date blocking issues)
  const getLocalDateString = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const validateTime = (selectedOra = form.ora, selectedData = form.data) => {
    if (!selectedOra || !selectedData) return true;
    const [hours, minutes] = selectedOra.split(":").map(Number);
    const timeInMinutes = hours * 60 + minutes;
    
    // Lunch: 11:00 - 15:00
    const isLunch = timeInMinutes >= 11 * 60 && timeInMinutes <= 15 * 60;
    // Dinner: 18:00 - 23:30
    const isDinner = timeInMinutes >= 18 * 60 && timeInMinutes <= 23 * 60 + 30;
    
    if (!isLunch && !isDinner) {
      setTimeError("Il ristorante è chiuso a quest'ora. Orari: 11:00–15:00 e 18:00–23:30");
      return false;
    }
    
    // Check if booking is in the past for today
    const todayStr = getLocalDateString();
    if (selectedData === todayStr) {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      if (timeInMinutes < currentMinutes + 15) { // at least 15 min in advance
        setTimeError("L'orario scelto è nel passato o troppo vicino a quello attuale.");
        return false;
      }
    }
    
    setTimeError("");
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => {
      const updated = { ...prev, [name]: value };
      if (name === "ora" || name === "data") {
        validateTime(updated.ora, updated.data);
      }
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateTime()) {
      setStep(3); // Redirect to Date/Time step
      return;
    }
    setStatus("sending");

    const ristoranteScelto = restaurants.find(r => r.id === form.ristorante)?.name || form.ristorante;
    const message = `*NUOVA PRENOTAZIONE*\n\n*Ristorante:* ${ristoranteScelto}\n*Nome:* ${form.nome} ${form.cognome}\n*Persone:* ${form.persone}\n*Data:* ${form.data}\n*Ora:* ${form.ora}\n*Telefono:* ${form.telefono}${form.note ? `\n*Note:* ${form.note}` : ""}`;

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, ristorante: form.ristorante }),
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
    const selectedRestaurant = restaurants.find(r => r.id === form.ristorante);
    const telNumber = selectedRestaurant?.tel || "+39 0439 068034";
    const telLink = `tel:${telNumber.replace(/\s+/g, "")}`;
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
            href={telLink}
            className="px-8 py-3.5 bg-primary hover:bg-primary-light text-white text-sm tracking-widest uppercase rounded-lg transition-all duration-300"
          >
            Chiama {telNumber}
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

  const steps = [
    { id: 1, label: "Chi Sei", icon: "👤" },
    { id: 2, label: "Dettagli", icon: "🍽️" },
    { id: 3, label: "Orario", icon: "🕒" },
    { id: 4, label: "Conferma", icon: "✓" }
  ];

  return (
    <div className="animate-fade-in">
      {/* Dynamic Island Progress Indicator */}
      <div className="flex justify-center mb-10">
        <div className="bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 p-1.5 rounded-full flex items-center gap-1 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden">
          {steps.map(s => (
            <button 
              key={s.id}
              type="button"
              onClick={() => {
                if (s.id < step) setStep(s.id);
              }}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                step === s.id 
                  ? 'bg-primary/20 text-primary-light' 
                  : step > s.id 
                    ? 'text-white hover:bg-white/10 cursor-pointer' 
                    : 'text-text-dim opacity-50 cursor-not-allowed'
              }`}
            >
              <span className="text-sm">{s.icon}</span>
              {step === s.id && (
                <span className="text-xs font-bold tracking-widest uppercase whitespace-nowrap animate-fade-in-right pr-1">
                  {s.label}
                </span>
              )}
            </button>
          ))}
        </div>
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

        {/* Step 2: Dettagli Ristorante */}
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

        {/* Step 3: Data e Ora (Controllo Errori) */}
        <div className={`space-y-5 transition-all duration-500 ${step === 3 ? "block" : "hidden"}`}>
          <div className="grid grid-cols-2 gap-4">
            <FieldWrapper label="Data" required index={0}>
              <input
                type="date"
                name="data"
                required
                value={form.data}
                onChange={handleChange}
                onFocus={() => setFocusedField("data")}
                onBlur={() => setFocusedField(null)}
                min={getLocalDateString()}
                className={`w-full px-4 py-3.5 bg-surface/50 border rounded-lg text-white text-sm 
                  focus:outline-none focus:ring-1 transition-all duration-300 [color-scheme:dark]
                  hover:border-white/20
                  ${focusedField === "data" ? "border-primary ring-primary/30 shadow-lg shadow-primary/5" : "border-white/10"}`}
              />
            </FieldWrapper>

            <FieldWrapper label="Ora" required index={1}>
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

          {timeError && (
            <p className="text-red-500 text-xs mt-1 animate-fade-in font-medium bg-red-950/20 border border-red-500/20 p-2.5 rounded-lg shadow-inner">
              ⚠️ {timeError}
            </p>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => { setTimeError(""); setStep(2); }}
              className="flex-1 py-3.5 border border-white/10 hover:border-white/30 text-white text-sm tracking-widest uppercase rounded-lg transition-all duration-300"
            >
              Indietro
            </button>
            <button
              type="button"
              onClick={() => {
                if (validateTime()) {
                  setStep(4);
                }
              }}
              className="flex-[2] py-3.5 bg-primary hover:bg-primary-light text-white text-sm tracking-widest uppercase rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 group"
            >
              Continua
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Step 4: Conferma e Note */}
        <div className={`space-y-5 transition-all duration-500 ${step === 4 ? "block" : "hidden"}`}>
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

          <div className="p-5 rounded-lg bg-primary/5 border border-primary/20 space-y-2 animate-fade-in shadow-inner">
            <p className="text-xs text-text-dim tracking-widest uppercase">Riepilogo</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex flex-col">
                <span className="text-text-dim text-xs">Nome</span>
                <span className="text-white font-medium">{form.nome} {form.cognome}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-text-dim text-xs">Telefono</span>
                <span className="text-white font-medium">{form.telefono}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-text-dim text-xs">Persone</span>
                <span className="text-white font-medium">{form.persone}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-text-dim text-xs">Data e Ora</span>
                <span className="text-white font-medium">{form.data} • {form.ora}</span>
              </div>
              <div className="flex flex-col col-span-2">
                <span className="text-text-dim text-xs">Ristorante</span>
                <span className="text-white font-medium">{restaurants.find(r => r.id === form.ristorante)?.name}</span>
              </div>
            </div>
            {form.note && (
              <div className="pt-2 border-t border-white/5 mt-2">
                <span className="text-text-dim text-xs">Note</span>
                <p className="text-white text-sm mt-0.5">{form.note}</p>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(3)}
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
