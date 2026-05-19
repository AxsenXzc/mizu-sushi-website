import { restaurants } from "@/lib/data";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-text-muted leading-relaxed">
              Ristorante giapponese e cinese a Feltre (BL). Scopri il vero gusto
              dell&apos;oriente con i nostri piatti preparati con ingredienti
              freschissimi.
            </p>
          </div>

          <div>
            <h3 className="text-sm tracking-widest uppercase text-gold mb-6">
              I Nostri Ristoranti
            </h3>
            <ul className="space-y-4">
              {restaurants.map((r) => (
                <li key={r.id}>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-text-muted mt-0.5">{r.address}</p>
                  <p className="text-xs text-text-muted">{r.tel}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-widest uppercase text-gold mb-6">
              Link Rapidi
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/chi-siamo", label: "Chi Siamo" },
                { href: "/menu", label: "Menu" },
                { href: "/galleria", label: "Galleria" },
                { href: "/contatti", label: "Contatti" },
                { href: "/prenotazioni", label: "Prenotazioni" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-widest uppercase text-gold mb-6">
              Orari di Apertura
            </h3>
            <div className="space-y-3">
              {restaurants.slice(0, 1).map((r) => (
                <div key={r.id}>
                  <p className="text-sm font-semibold text-white mb-2">{r.name}</p>
                  <p className="text-sm text-text-muted">{r.hours}</p>
                  <div className="mt-4 space-y-2">
                    <a
                      href={`tel:${r.tel}`}
                      className="block text-sm text-text-muted hover:text-primary-light transition-colors"
                    >
                      {r.tel}
                    </a>
                    <a
                      href={`https://wa.me/${r.whatsappLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-primary-light hover:text-primary transition-colors"
                    >
                      WhatsApp: {r.whatsapp}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-dim">
            &copy; {new Date().getFullYear()} Mizu Sushi Ristorante. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-text-dim">
            MIZU Ristorante S.A.S. di He Lixian &amp; C. | P.IVA — —
          </p>
        </div>
      </div>
    </footer>
  );
}
