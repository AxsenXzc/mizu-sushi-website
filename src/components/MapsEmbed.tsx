interface MapsEmbedProps {
  src: string;
  title: string;
}

export default function MapsEmbed({ src, title }: MapsEmbedProps) {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden border border-white/5">
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    </div>
  );
}
