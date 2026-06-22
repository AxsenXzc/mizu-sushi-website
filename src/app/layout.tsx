import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import DynamicIsland from "@/components/DynamicIsland";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mizu Sushi | Ristorante Giapponese & Cinese",
  description:
    "Mizu Sushi Ristorante a Feltre (BL). Cucina giapponese e cinese, All You Can Eat, take-away. Scopri il vero gusto dell'Oriente.",
  keywords: [
    "sushi",
    "feltre",
    "ristorante giapponese",
    "mizu sushi",
    "all you can eat",
    "take away sushi",
  ],
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
        <Script src="https://cdn.iubenda.com/iubenda.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
