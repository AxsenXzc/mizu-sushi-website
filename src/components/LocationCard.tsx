interface LocationCardProps {
  id: string;
  name: string;
  address: string;
  tel: string;
  whatsapp: string;
  whatsappLink: string;
  hours: string;
  mapQuery: string;
}

export default function LocationCard({
  id,
  name,
  address,
  tel,
  whatsapp,
  whatsappLink,
  hours,
  mapQuery,
}: LocationCardProps) {
  const mapUrl = "https://" + "www.google.com/maps/dir/?api=1&destination=" + mapQuery;

  return (
    <div
      className="relative p-8 rounded-2xl bg-gradient-to-br from-surface-light to-surface border border-white/10 transition-all duration-500 group hover:translate-y-[-6px] hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(196,30,58,0.2)] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/20 transition-colors duration-500" />

      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-primary-light transition-colors duration-300">
          {name}
        </h3>
        <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-primary/40 text-primary-light bg-primary/10">
          水
        </span>
      </div>

      <p className="text-base text-text-muted mb-2 leading-relaxed">{address}</p>
      <p className="text-sm text-text-muted/70 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        {hours}
      </p>

      <div className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3 text-sm">
          <a
            href={`tel:${tel.replace(/\s+/g, "")}`}
            className="flex items-center gap-3 text-text-muted hover:text-white transition-all duration-300 group/icon"
          >
            <span className="w-10 h-10 rounded-full bg-surface-light border border-white/5 flex items-center justify-center group-hover/icon:bg-primary group-hover/icon:border-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <span className="font-medium tracking-wider">{tel}</span>
          </a>
        </div>

        <a
          href={"https://" + "wa.me/" + whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-green-500 hover:text-green-400 transition-all duration-300 group/icon"
        >
          <span className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover/icon:bg-green-500 group-hover/icon:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </span>
          <span className="font-medium tracking-wider">{whatsapp}</span>
        </a>
      </div>

      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full flex items-center justify-center gap-2 py-4 text-sm font-semibold tracking-widest uppercase rounded-xl border border-primary/40 text-primary-light hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group/btn"
      >
        <svg className="w-5 h-5 transition-transform duration-500 group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Ottieni Indicazioni
        <svg className="w-4 h-4 opacity-0 -translate-x-3 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
}
