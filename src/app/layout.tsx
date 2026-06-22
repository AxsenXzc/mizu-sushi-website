import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DynamicIsland from "@/components/DynamicIsland";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import "./globals.css";
import "./animations.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mizusushiyan.vercel.app"),
  title: "Mizu Sushi & Sushi Yan | Ristoranti Giapponesi e Cinesi",
  description:
    "Mizu Sushi (Feltre) e Sushi Yan (Belluno): cucina giapponese e cinese, All You Can Eat e take-away. Scopri il vero gusto dell'Oriente.",
  keywords: [
    "sushi",
    "feltre",
    "belluno",
    "ristorante giapponese",
    "mizu sushi",
    "sushi yan",
    "all you can eat",
    "take away sushi",
  ],
  openGraph: {
    title: "Mizu Sushi & Sushi Yan | Ristoranti Giapponesi e Cinesi",
    description:
      "Cucina giapponese e cinese a Feltre e Belluno. All You Can Eat, take-away e prenotazioni online.",
    url: "https://mizusushiyan.vercel.app",
    siteName: "Mizu Sushi & Sushi Yan",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="min-h-screen flex flex-col bg-gradient-radial">
        <DynamicIsland />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
