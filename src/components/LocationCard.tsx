interface LocationCardProps {
  id: string;
  name: string;
  address: string;
  tel: string;
  whatsapp: string;
  whatsappLink: string;
  hours: string;
  mapQuery: string;
  isMain?: boolean;
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
  isMain,
}: LocationCardProps) {
  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <div
      className={`relative p-6 rounded-xl border transition-all duration-500 group hover:translate-y-[-6px] ${
        isMain
          ? "bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20"
          : "bg-surface/80 border-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-black/30"
      }`}
    >
      {isMain && (
        <span className="absolute -top-2.5 left-4 px-3 py-0.5 bg-primary text-white text-[10px] tracking-[0.15em] uppercase rounded-full">
          Principale
        </span>
      )}

      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-white group-hover:text-primary-light transition-colors duration-300">
          {name}
        </h3>
        <span className={`text-xs tracking-widest uppercase px-2 py-0.5 rounded-full border ${isMain ? "border-primary/40 text-primary-light" : "border-white/10 text-text-dim"}`}>
          {id === "mizu" ? "水" : id === "shanghai" ? "海" : "味"}
        </span>
      </div>

      <p className="text-sm text-text-muted mb-1.5 leading-relaxed">{address}</p>
      <p className="text-sm text-text-muted/70 mb-1.5">{hours}</p>

      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <a
            href={`tel:${tel}`}
            className="flex items-center gap-2 text-text-muted hover:text-primary-light transition-all duration-300 group/icon"
          >
            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/icon:bg-primary/20 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            {tel}
          </a>
        </div>

        <a
          href={`https://wa.me/${whatsappLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-primary-light hover:text-primary transition-all duration-300 group/icon"
        >
          <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover/icon:bg-primary/20 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </span>
          {whatsapp}
        </a>
      </div>

      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-5 w-full flex items-center justify-center gap-2 py-3 text-xs tracking-widest uppercase rounded-lg border transition-all duration-500 group/btn ${
          isMain
            ? "border-primary/40 text-primary-light hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
            : "border-white/10 text-text-muted hover:border-primary/40 hover:text-primary-light hover:bg-primary/5"
        }`}
      >
        <svg className={`w-4 h-4 transition-transform duration-500 group-hover/btn:scale-110`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Portami Qui
        <svg className="w-3 h-3 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
}
