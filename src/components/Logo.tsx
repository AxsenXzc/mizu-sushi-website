import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <span
        className="font-[family-name:var(--font-jp)] text-3xl font-bold text-primary"
        style={{ textShadow: "0 0 20px rgba(196,30,58,0.3)" }}
      >
        水
      </span>
      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-widest text-white group-hover:text-primary-light transition-colors">
          MIZU SUSHI
        </span>
        <span className="text-[10px] tracking-[0.2em] text-gold uppercase -mt-1">
          Ristorante Giapponese &amp; Cinese
        </span>
      </div>
    </Link>
  );
}
