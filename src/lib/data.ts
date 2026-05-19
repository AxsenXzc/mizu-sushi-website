export const restaurants = [
  {
    id: "mizu",
    name: "Mizu Sushi Ristorante",
    address: "Viale Monte Grappa, 8 – 32032 Feltre (BL)",
    tel: "+39 0439 068034",
    whatsapp: "+39 327 289 8873",
    whatsappLink: "393272898873",
    hours: "Lun–Dom 11:00–15:00, 18:00–23:30",
    owner: "MIZU Ristorante S.A.S. di He Lixian & C.",
    location: "Centro Commerciale Altanon",
    mapQuery: "Viale+Monte+Grappa+8+Feltre",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.5!2d11.9!3d46.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sViale+Monte+Grappa+8%2C+32032+Feltre+BL!5e0!3m2!1sit!2sit!4v1",
    isMain: true,
  },
  {
    id: "shanghai",
    name: "Shanghai Sushi",
    address: "Via Montelungo, 3 – 32032 Feltre (BL)",
    tel: "+39 0439 89141",
    whatsapp: "+39 327 705 8080",
    whatsappLink: "393277058080",
    hours: "Lun–Dom 11:00–15:00, 18:00–23:30",
    owner: "Stessa proprietà di Mizu (gestione Asiann)",
    location: "",
    mapQuery: "Via+Montelungo+3+Feltre",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.5!2d11.9!3d46.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia+Montelungo+3%2C+32032+Feltre+BL!5e0!3m2!1sit!2sit!4v1",
    isMain: false,
  },
  {
    id: "asia",
    name: "Asia Sushi",
    address: "Piazzale Vittime delle Foibe, 23 – 32100 Belluno (BL)",
    tel: "+39 0437 27044",
    whatsapp: "+39 380 150 6689",
    whatsappLink: "393801506689",
    hours: "Mer–Lun 11:00–15:00, 18:00–23:30",
    owner: "Stessa proprietà di Mizu (gestione Asiann)",
    location: "",
    mapQuery: "Piazzale+Vittime+delle+Foibe+23+Belluno",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.5!2d12.0!3d46.14!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPiazzale+Vittime+delle+Foibe+23%2C+32100+Belluno+BL!5e0!3m2!1sit!2sit!4v1",
    isMain: false,
  },
];

export const menuCategories = [
  {
    name: "Antipasti",
    items: [
      { name: "Gyoza (3 pz)", price: "€5,00", description: "Ravioli giapponesi ripieni di carne e verdure, cotti in padella" },
      { name: "Edamame", price: "€4,00", description: "Baccelli di soia al vapore con sale marino" },
      { name: "Wakame", price: "€4,50", description: "Insalata di alghe con sesamo" },
    ],
  },
  {
    name: "Zuppe & Insalate",
    items: [
      { name: "Zuppa di Miso", price: "€3,00", description: "Tradizionale zuppa giapponese con tofu e alghe wakame" },
      { name: "Insalata Sashimi", price: "€6,00", description: "Insalata mista con sashimi fresco" },
      { name: "Insalata di Riso", price: "€5,00", description: "Insalata di riso con verdure e sesamo" },
    ],
  },
  {
    name: "Nigiri",
    items: [
      { name: "Nigiri Sake (salmone) 2 pz", price: "€4,00", description: "Nigiri di salmone fresco su letto di riso" },
      { name: "Nigiri Maguro (tonno) 2 pz", price: "€5,00", description: "Nigiri di tonno fresco" },
      { name: "Nigiri Ebi (gambero) 2 pz", price: "€4,50", description: "Nigiri di gambero bollito" },
    ],
  },
  {
    name: "Maki & Gunkan",
    items: [
      { name: "California Roll (8 pz)", price: "€8,00", description: "Riso e surimi con avocado" },
      { name: "Philadelphia Roll (8 pz)", price: "€9,00", description: "Salmone, formaggio philadelphia e avocado" },
      { name: "Dragon Roll (8 pz)", price: "€10,00", description: "Gambero tempura, avocado e salsa unagi" },
    ],
  },
  {
    name: "Sashimi & Tataki",
    items: [
      { name: "Tataki Maguro", price: "€12,00", description: "Tonno scottato con sesamo e salsa ponzu" },
      { name: "Sashimi Misto", price: "€14,00", description: "Selezione di sashimi del giorno" },
      { name: "Sashimi Sake", price: "€10,00", description: "Sashimi di salmone fresco" },
    ],
  },
  {
    name: "Piatti Caldi",
    items: [
      { name: "Yakitori (3 pz)", price: "€6,00", description: "Spiedini di pollo marinati con salsa teriyaki" },
      { name: "Tempura Mista", price: "€9,00", description: "Gamberi e verdure in pastella leggera" },
      { name: "Riso Saltato", price: "€5,00", description: "Riso saltato con verdure e uovo" },
    ],
  },
  {
    name: "Menu Fissi",
    items: [
      { name: "Menu Pranzo", price: "€14,90", description: "Lun–Ven, 11:00–15:00. Antipasto + piatto principale + bevanda" },
      { name: "Menu Cena", price: "€24,90", description: "Lun–Dom. Antipasto + piatto principale + dessert + bevanda" },
      { name: "All You Can Eat", price: "—", description: "Formula serale con selezione illimitata di piatti" },
    ],
  },
];

export const reviews = [
  {
    name: "Marco R.",
    rating: 5,
    text: "Sushi freschissimo, ampia scelta di piatti. Il salmone è scioglievole! Personale molto cortese.",
    date: "2 settimane fa",
  },
  {
    name: "Laura B.",
    rating: 4,
    text: "Locale accogliente, menu vario. Ottimo rapporto qualità-prezzo per l'All You Can Eat. Tornerò!",
    date: "1 mese fa",
  },
  {
    name: "Andrea M.",
    rating: 4,
    text: "Il miglior sushi di Feltre. Consiglio il Tataki Maguro e i gunkan. Servizio veloce.",
    date: "3 settimane fa",
  },
  {
    name: "Sofia C.",
    rating: 5,
    text: "Atmosfera piacevole, piatti ben presentati. Il California roll è eccezionale!",
    date: "1 mese fa",
  },
  {
    name: "Giovanni P.",
    rating: 3,
    text: "Buona qualità generale, ma qualche miglioramento negli ingredienti sarebbe gradito. Comunque positivo.",
    date: "2 mesi fa",
  },
];
