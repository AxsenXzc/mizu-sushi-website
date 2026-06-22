const SITE_URL = "https://mizusushiyan.vercel.app";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Mizu Sushi Ristorante",
    url: SITE_URL,
    telephone: "+39 0439 068034",
    servesCuisine: ["Giapponese", "Cinese", "Sushi"],
    priceRange: "€€",
    acceptsReservations: true,
    menu: SITE_URL + "/menu",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Viale Monte Grappa, 8",
      addressLocality: "Feltre",
      addressRegion: "BL",
      postalCode: "32032",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.0184,
      longitude: 11.9098,
    },
    openingHours: ["Mo-Su 11:00-15:00", "Mo-Su 18:00-23:30"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Sushi Yan",
    url: SITE_URL,
    telephone: "+39 0437 27044",
    servesCuisine: ["Giapponese", "Cinese", "Sushi"],
    priceRange: "€€",
    acceptsReservations: true,
    menu: SITE_URL + "/menu",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Piazzale Vittime delle Foibe, 23",
      addressLocality: "Belluno",
      addressRegion: "BL",
      postalCode: "32100",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.13964,
      longitude: 12.21199,
    },
    openingHours: ["Mo-Su 11:00-15:00", "Mo-Su 18:00-23:30"],
  },
];

export default function StructuredData() {
  const json = JSON.stringify(structuredData);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML= __html: json 
    />
  );
}
