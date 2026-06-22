# Mizu Sushi & Sushi Yan — Sito Web

Sito web ufficiale dei ristoranti giapponesi/cinesi **Mizu Sushi** (Feltre, BL) e **Sushi Yan** (Belluno, BL): menu, galleria, contatti, mappe e prenotazioni via WhatsApp.

## Stack tecnologico

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- Deploy su **Netlify** (`@netlify/plugin-nextjs`)

## Requisiti

- Node.js **20+**
- npm

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

Script disponibili:

| Comando | Descrizione |
| --- | --- |
| `npm run dev` | Avvia il server di sviluppo |
| `npm run build` | Build di produzione |
| `npm run start` | Avvia il build di produzione |
| `npm run lint` | Esegue ESLint |

## Variabili d'ambiente

Le prenotazioni/notifiche WhatsApp usano l'API [CallMeBot](https://www.callmebot.com/). Crea un file `.env.local` (non committare) con:

```bash
# Mizu Sushi (Feltre)
CALLMEBOT_API_KEY=la_tua_api_key
CALLMEBOT_PHONE=393272898873

# Sushi Yan (Belluno) — opzionale, fallback su Mizu se assenti
CALLMEBOT_API_KEY_SUSIYAN=la_tua_api_key
CALLMEBOT_PHONE_SUSIYAN=39043727044
```

> Le stesse chiavi possono essere definite con prefisso `NEXT_PUBLIC_` se necessario lato client.

## Immagini della galleria

Le foto vanno caricate localmente in `public/images/gallery/` con i nomi indicati nella pagina Galleria (es. `piatto.jpg`, `locale1.jpg`, ...). Le immagini sono servite come asset statici locali.

## Build & Deploy (Netlify)

Il deploy è configurato in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"
```

Ricorda di impostare le variabili d'ambiente CallMeBot anche nelle impostazioni del sito Netlify.

## Struttura del progetto

```
src/
  app/            # Pagine (App Router): home, menu, galleria, contatti, chi-siamo, prenotazioni
    api/booking/  # Endpoint prenotazione (CallMeBot)
  components/     # Componenti UI riutilizzabili
  lib/            # Dati (ristoranti, menu, recensioni)
public/           # Asset statici (immagini, ecc.)
```

## Crediti

Realizzato da [DevDuos](https://devduos.netlify.app).
