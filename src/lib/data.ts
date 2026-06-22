export const restaurants = [
  {
    id: "mizu",
    name: "Mizu Sushi Ristorante",
    address: "Viale Monte Grappa, 8 – 32032 Feltre (BL)",
    tel: "+39 0439 068034",
    whatsapp: "+39 327 289 8873",
    whatsappLink: "393272898873",
    hours: "Lun–Dom 11:00–15:00, 18:00–23:30",
    owner: "Mizu Sushi Ristorante",
    location: "Centro Commerciale Altanon",
    mapQuery: "Viale+Monte+Grappa+8+Feltre",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763!2d11.9098!3d46.0184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778e375ca3d4931%3A0x9eba204372626397!2sViale%20Monte%20Grappa%2C%208%2C%2032032%20Feltre%20BL!5e0!3m2!1sit!2sit!4v1716100000000!5m2!1sit!2sit",
    isMain: true,
  },
  {
    id: "susiyan",
    name: "Sushi Yan",
    address: "Piazzale Vittime delle Foibe, 23, 32100 Belluno (BL)",
    tel: "+39 0437 27044",
    whatsapp: "+39 389 047 2652",
    whatsappLink: "393890472652",
    hours: "Lun–Dom 11:00–15:00, 18:00–23:30",
    owner: "Sushi Yan",
    location: "Belluno",
    mapQuery: "Piazzale+Vittime+delle+Foibe+23+Belluno",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.606368819448!2d12.211990476483526!3d46.13964177112002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778e3170e972621%3A0x5ca9c64b5ea3c9a!2sPiazzale%20Vittime%20delle%20Foibe%2C%2023%2C%2032100%20Belluno%20BL!5e0!3m2!1sit!2sit!4v1716100000000!5m2!1sit!2sit",
    isMain: false,
  },
];

export const menuCategories = [
  {
    name: "Antipasti",
    items: [
      { name: "1. STICK GAMBERI 2pz", price: "€ 4,00", description: "involtini di gamberi*" },
      { name: "2. INVOLTINO 2pz", price: "€ 3,00", description: "verdure miste*e carne" },
      { name: "3. PATATINE FRITTE", price: "€ 2,50", description: "stick patate*" },
      { name: "4. PANE FRITTO 2 pz", price: "€ 3,00", description: "croccante e dorato" },
      { name: "5. GYOZA 3 pz", price: "€ 5,00", description: "carne di maiale e verdure*" },
      { name: "6. SHAOMAI 3 pz", price: "€ 5,00", description: "carne di maiale e gamberi*" },
      { name: "7. GYOZA DI VERDURE 3 pz", price: "€ 5,00", description: "verdure miste*" },
      { name: "8. RAVIOLI DI CRISTALLO 3pz", price: "€ 7,00", description: "raviolo gamberi al vapore" },
      { name: "9. PANE CINESE 2 pz", price: "€ 3,00", description: "pane al vapore*" },
      { name: "10. GOMA WAKAME", price: "€ 5,00", description: "insalata di alghe piccante*" },
      { name: "11. COCKTAIL DI GAMBERI", price: "€ 7,00", description: "gamberetti con salsa rosa*" },
      { name: "12. WAKAME NERO", price: "€ 4,00", description: "insalata di alghe e sesamo" },
      { name: "13. EDAMAME", price: "€ 4,00", description: "fagiolini di soia e sale*" },
      { name: "14. PANE DOLCE CONIGLIO", price: "€ 3,50", description: "farina, uova al vapore" },
    ]
  },
  {
    name: "Insalate",
    items: [
      { name: "15. INSALATA GOMA WAKAME", price: "€ 5,00", description: "insalata mista con goma wakame*, sesamo e salsa" },
      { name: "16. INSALATA ALGHE", price: "€ 5,00", description: "insalata mista con alghe, sesamo e salsa" },
      { name: "17. INSALATA MAIS", price: "€ 5,00", description: "insalata mais, sesamo e salsa" },
      { name: "18. INSALATA GRANCHIO", price: "€ 5,00", description: "insalata polpa di surimi, sesamo e salsa*" },
      { name: "19. INSALATA SASHIMI", price: "€ 6,00", description: "insalata con fette di branzino, gamberi, salmone, sesamo e salsa*" },
      { name: "20. INSALATA DI POLIPO E RUCOLA", price: "€ 7,00", description: "polipo tenero e rucola" },
    ]
  },
  {
    name: "Zuppe",
    items: [
      { name: "21. MISOSHIRO", price: "€ 3,00", description: "zuppa di miso (tofu, alghe giapponese, erba cippolina)" },
      { name: "22. ZUPPA AGROPICCANTE", price: "€ 4,00", description: "zuppa con uova, toufu, verdure miste e pollo" },
      { name: "23. FRUTTI DI MARE", price: "€ 4,00", description: "zuppa con surimi, gamberi, uova*" },
      { name: "24. ZUPPA DI MAIS", price: "€ 4,00", description: "zuppa con mais e uova" },
    ]
  },
  {
    name: "Tartare & Poke",
    items: [
      { name: "29. TARTAR SAKE", price: "€ 8,00", description: "salmone tritato con salsa di sesamo" },
      { name: "30. TARTAR SUZUKI", price: "€ 8,00", description: "branzino tritato con salsa di sesamo" },
      { name: "31. TARTAR TUNA", price: "€ 6,00", description: "tonno tritato con salsa di sesamo" },
      { name: "32. TARTAR SPECIALE SALMONE", price: "€ 14,00", description: "salmone tritato, avocado, uova di pesce volante, salsa di sesamo, riso bianco" },
    ]
  },
  {
    name: "Tataki & Duton",
    items: [
      { name: "37. TATAKI SAKE", price: "€ 11,00", description: "salmone scottato con sesamo e salsa teriyaki" },
      { name: "38. TATAKI MAGURO", price: "€ 12,00", description: "tonno scottato con sesamo e salsa teriyaki" },
      { name: "39. DUTOU SAKE", price: "€ 4,00", description: "involtino di salmone con cetriolo, salsa di sesamo e wasabi" },
      { name: "40. DUTOU SAKE SCOTTATO", price: "€ 4,00", description: "involtino di salmone scottato con insalata, cetriolo, salsa di sesamo e wasabi" },
      { name: "41. DUTOU FLAMBE' PURE", price: "€ 8,00", description: "salmone scottato, purèè di patate" },
      { name: "42. DUTOU FLAMBE' EBI", price: "€ 8,00", description: "salmone scottato, tempurèa di gamberi*, salsa teriyaki" },
    ]
  },
  {
    name: "Sashimi e Chirashi",
    items: [
      { name: "45. SASHIMI SAKE", price: "€ 8,00", description: "salmone" },
      { name: "46. SASHIMI MAGURO", price: "€ 9,00", description: "tonno" },
      { name: "47. SASHIMI SUZUKI", price: "€ 8,00", description: "branzino" },
      { name: "99. TEMAKI CALIFORNIA", price: "€ 4,00", description: "surimi, gambero cotto e avocado*" },
      { name: "100. CHIRASHI MISTO", price: "€ 12,00", description: "riso con pesce misto e sesamo" },
      { name: "101. CHIRASHI SAKE", price: "€ 11,00", description: "riso con salmone e sesamo" },
    ]
  },
  {
    name: "Carpaccio",
    items: [
      { name: "48. CARPACCIO MISTO", price: "€ 12,00", description: "salmone, tonno, branzino, salsa di sesamo e wasabi" },
      { name: "49. CARPACCIO SAKE", price: "€ 9,00", description: "salmone, salsa di sesamo e wasabi" },
      { name: "50. CARPACCIO MAGURO", price: "€ 12,00", description: "tonno, salsa di sesamo e wasabi" },
      { name: "51. CARPACCIO SUZUKI", price: "€ 10,00", description: "branzino, salsa di sesamo e wasabi" },
      { name: "52. CARPACCIO DI POLIPO", price: "€ 11,00", description: "polipo, salsa di sesamo e wasabi" },
    ]
  },
  {
    name: "Sushi Misto & Party",
    items: [
      { name: "53. SUSHII MIX", price: "€ 15,00", description: "4 hossomaki, 4 uramaki, 4 nigiri" },
      { name: "54. SUSHI SASHIMI MIX", price: "€ 22,00", description: "4 uramaki, 4 hossomaki, 4 nigiri, 6 sashimi mix, 1 gambero rosso" },
    ]
  },
  {
    name: "Nighiri",
    items: [
      { name: "55. NIGIRI MIX", price: "€ 9,00", description: "6 pz misto dello chef" },
      { name: "56. NIGIRI SAKE KIRO", price: "€ 4,00", description: "Salmone scottato, salsa teriyaki e sesamo, salsa piccante" },
      { name: "57. NIGIRI BLACK KIRO", price: "€ 4,50", description: "salmone scottato, philadelphia e kataifi" },
      { name: "58. NIGIRI BLACK SAKE", price: "€ 3,50", description: "salmone" },
      { name: "59. NIGIRI BLACK MAGURO", price: "€ 6,00", description: "tonno" },
      { name: "60. NIGIRI BLACK SUZUKI", price: "€ 3,50", description: "branzino" },
      { name: "61. NIGIRI SAKE", price: "€ 3,00", description: "salmone" },
      { name: "62. NIGIRI SURIMI", price: "€ 2,50", description: "polpa di granchio*" },
      { name: "63. NIGIRI AVOCADO", price: "€ 3,50", description: "avocado" },
      { name: "64. NIGIRI SUZUKI", price: "€ 3,00", description: "branzino" },
      { name: "65. NIGIRI AMAEBI", price: "€ 4,00", description: "gamberi crudi*" },
      { name: "66. NIGIRI TAKO", price: "€ 3,00", description: "polipo*" },
      { name: "67. NIGIRI MAGURO", price: "€ 3,50", description: "tonno" },
      { name: "68. NIGIRI ANGUILLA", price: "€ 4,00", description: "anguilla* e sesamo" },
      { name: "69. NIGIRI EBI", price: "€ 3,00", description: "gambero cotto*" },
    ]
  },
  {
    name: "Gunkan",
    items: [
      { name: "70. GUNKAN TOBIKO", price: "€ 5,00", description: "uova di pesce volante e alghe esterno*" },
      { name: "71. GUNKAN SPICY SALMON", price: "€ 4,00", description: "salmone piccante e alghe esterno" },
      { name: "72. GUNKAN SPICY TUNA", price: "€ 4,00", description: "tonno piccante e alghe esterno" },
      { name: "73. GUNKAN SURIMI", price: "€ 3,50", description: "surimi, gamberi cotti, maionese, alghe esterno*" },
      { name: "74. GUNKAN WAKAME", price: "€ 3,00", description: "alghe giapponese con alghe esterno*" },
      { name: "75. GUNKAN IKURA", price: "€ 5,00", description: "uova di salmone e alghe esterno*" },
      { name: "76. GUNKAN KATAIFI", price: "€ 5,00", description: "philadelphia, esterno salmone scottato e kataifi" },
      { name: "77. GUNKAN SCOTTATO SURIMI", price: "€ 5,00", description: "surimi, gamberi cotti, maionese, esterno salmone scottato e salsa gamberi" },
      { name: "78. GUNKAN MAIS", price: "€ 4,50", description: "mais, esterno salmone" },
      { name: "79. GUNKAN SPICY ZUCCHINE", price: "€ 4,50", description: "salmone piccante, maionese, zucchine esterno e salsa gamberi" },
      { name: "80. GUNKAN ZUCCHINE", price: "€ 4,50", description: "surimi, gamberi cotti, maionese e zucchine esterno*" },
      { name: "81. GUNKAN FRASH", price: "€ 4,50", description: "philadelphia, esterno salmone" },
      { name: "82. GUNKAN SPICY SAKE", price: "€ 5,00", description: "salmone esterno con salsa piccante" },
      { name: "83. GUNKAN SPICY MAGURO", price: "€ 5,00", description: "tonno esterno con salsa piccante" },
    ]
  },
  {
    name: "Temaki",
    items: [
      { name: "92. TEMAKI SAKE", price: "€ 4,00", description: "salmone crudo, avocado e philadelphia" },
      { name: "93. TEMAKI TEKKA", price: "€ 5,00", description: "tonno crudo e avocado" },
      { name: "94. TEMAKI EBI", price: "€ 4,00", description: "gambero cotto e avocado*" },
      { name: "95. TEMAKI VEGETARIANO", price: "€ 4,00", description: "avocado, cetrioli, insalata" },
      { name: "96. TEMAKI EBI FRITTO", price: "€ 5,00", description: "gambero fritto, insalata, maionese e salsa teriyaki*" },
      { name: "97. TEMAKI SPICY SALMON", price: "€ 4,00", description: "salmone e salsa piccante" },
      { name: "98. TEMAKI SPICY TUNA", price: "€ 4,50", description: "tonno e salsa piccante" },
    ]
  },
  {
    name: "Temaki Soia",
    items: [
      { name: "84. TEMAKI SOIA SAKE", price: "€ 5,00", description: "foglio di soia, avocado, salmone e philadelphia" },
      { name: "85. TEMAKI SOIA MAGURO", price: "€ 5,00", description: "foglio di soia, avocado, tonno" },
      { name: "86. TEMAKI SOIA EBI", price: "€ 5,00", description: "foglio di soia, avocado, gambero cotto" },
      { name: "87. TEMAKI SOIA YASAI", price: "€ 5,00", description: "foglio di soia, avocado, cetrioli, insalata" },
      { name: "88. TEMAKI BLACK SAKE", price: "€ 5,50", description: "foglio di soia, riso venere, avocado, salmone e philadelphia" },
      { name: "89. TEMAKI BLACK MAGURO", price: "€ 5,50", description: "foglio di soia, riso venere, avocado, tonno" },
      { name: "90. TEMAKI SOIA VEGETARIANO", price: "€ 5,00", description: "foglio di soia, cetrioli, insalata, avocado" },
      { name: "91. TEMAKI SOIA GAMBERO", price: "€ 5,00", description: "foglio di soia, gambero cotto, avocado, maionase" },
    ]
  },
  {
    name: "Futomaki",
    items: [
      { name: "102. CHIRASHI TUNA", price: "€ 12,50", description: "riso con tonno e sesamo" },
      { name: "103. FUTO CALIFORNIA", price: "€ 7,00", description: "surimi, avocado e maionese*" },
      { name: "104. FUTO PHILADELPHIA", price: "€ 7,00", description: "salmone, philadelphia, avocado e salsa teriyaki" },
      { name: "105. FUTO VEGETARIANO", price: "€ 6,00", description: "insalata, cetrioli, avocado" },
      { name: "106. FUTO FRITTO", price: "€ 9,00", description: "salmone, avocado, philadelphia, kataifi e salsa teriyaki" },
    ]
  },
  {
    name: "Futomaki Soia",
    items: [
      { name: "107. FUTO SOY PHILADELPHIA", price: "€ 8,00", description: "foglia di soia, salmone, philadelphia e avocado" },
      { name: "108. FUTO SOY VEGETARIANO", price: "€ 7,00", description: "foglia di soia, insalata, cetrioli, avocado" },
      { name: "109. FUTO SOY KATAIFI", price: "€ 9,00", description: "foglia di soia, salmone, avocado, philadelphia, esterno kataifi e salsa teriyaki" },
    ]
  },
  {
    name: "Hosomaki",
    items: [
      { name: "110. HOSSO SAKE", price: "€ 6,00", description: "salmone" },
      { name: "111. HOSSO KAPPA", price: "€ 5,00", description: "cetrioli" },
      { name: "112. HOSSO SURIMI", price: "€ 5,00", description: "surimi*" },
      { name: "113. HOSSO TAKUAN", price: "€ 6,00", description: "rapa gialla" },
      { name: "114. HOSSO MAGURO", price: "€ 7,00", description: "tonno" },
    ]
  },
  {
    name: "Hosomaki Soia",
    items: [
      { name: "115. HOSSO EBI", price: "€ 6,00", description: "gamberi cotti*" },
      { name: "116. HOSSO AVOCADO", price: "€ 6,00", description: "avocado" },
      { name: "117. HOSSO FRITTO CON FRAGOLA", price: "€ 8,00", description: "salmone, philadelphia e fragola" },
    ]
  },
  {
    name: "Hosomaki Fritti",
    items: [
      { name: "118. HOSSO FRITTO CON MANGO", price: "€ 8,00", description: "salmone, philadelphia e mango" },
      { name: "119. HOSSO FRITTO", price: "€ 7,00", description: "salmone, philadelphia e salsa teriyaki" },
      { name: "120. HOSSO SOY MANGO", price: "€ 8,00", description: "foglio di soia, mango" },
      { name: "121. HOSSO SOY AVOCADO", price: "€ 8,00", description: "foglio di soia, avocado" },
    ]
  },
  {
    name: "Uramaki",
    items: [
      { name: "127. URA CALIFORNIA", price: "€ 8,00", description: "surimi, avocado e maionese*" },
      { name: "128. URA SAKE", price: "€ 8,00", description: "salmone, avocado e philadelphia" },
      { name: "129. URA PHILADELPHIA", price: "€ 8,00", description: "philadelphia, gamberi cotti e avocado*" },
      { name: "130. URA VEGETARIANO", price: "€ 8,00", description: "avocado, cetrioli e insalata" },
      { name: "131. URA SPICY SALMON", price: "€ 9,00", description: "salmone, avocado e salsa piccante" },
      { name: "132. URA SPICY TUNA", price: "€ 10,00", description: "tonno, avocado e salsa piccante" },
      { name: "133. URA MAGURO", price: "€ 10,00", description: "tonno e avocado" },
      { name: "134. URA EBITEN", price: "€ 10,00", description: "gamberi fritti, insalata, maionese, kataifi e salsa teriyaki*" },
      { name: "135. URA SALMONE FRITTO", price: "€ 10,00", description: "salmone fritto, philadelphia kataifi e salsa teriyaki" },
      { name: "136. URA BRANZINO FRITTO", price: "€ 10,00", description: "branzino fritto, philadelphia, avocado, salsa teriyaki e cipolla fritto" },
      { name: "137. URA POLLO FRITTO", price: "€ 10,00", description: "pollo fritto, maionese, insalata e salsa teriyaki*" },
    ]
  },
  {
    name: "Uramaki Speciali",
    items: [
      { name: "138. URA KASAI", price: "€ 8,00", description: "salmone, philadelphia, granulato tempurèa, salsa teriyaki" },
      { name: "139. URA PISTACCHIO", price: "€ 14,00", description: "gamberi fritti, maionase, pistacchio, salsa teriyaki" },
      { name: "140. URA TIGER", price: "€ 13,00", description: "gamberi fritti e maionese esterno salmone, salsa teriyaki e kataifi*" },
      { name: "141. URA ARCOBALENO", price: "€ 13,00", description: "surimi, avocado, maionese, esterno pesce misto e salsa teriyaki*" },
      { name: "142. URA SUPER", price: "€ 13,00", description: "salmone, avocado, philadelphia esterno avocado, tonno crudo, tobiko e salsa teriyaki" },
      { name: "143. URA LIME", price: "€ 14,00", description: "salmone fritto, philadelphia, esterno salmone, salsa lime, granulato tempurèa" },
      { name: "144. URA SMOKED", price: "€ 13,00", description: "gambero fritto, esterno salmone afumicato, salsa, rucola, kataifi" },
      { name: "145. URA FELICIT", price: "€ 15,00", description: "salmone, avocado, philadelphia, maionase, salsa piccante, teriyaki" },
    ]
  },
  {
    name: "Uramaki Venere & Pink",
    items: [
      { name: "146. URA BLACK TIGER", price: "€ 15,00", description: "riso venere, gamberi fritti, insalata, philadelphia, esterno salmone, salsa di tartufo" },
      { name: "147. URA BLACK MIURA", price: "€ 12,00", description: "riso venere, salmone cotto, insalata, philadelphia, esterno salsa teriyaki e kataifi" },
      { name: "148. URA BLACK AVOCADO", price: "€ 12,00", description: "riso venere, philadelphia, avocado, esterno madorle" },
      { name: "149. URA BLACK SAKE", price: "€ 12,00", description: "riso venere, salmone, avocado e philadelphia" },
      { name: "150. URA BLACK VEGETARIANO", price: "€ 10,00", description: "riso venere, avocado, cetrioli e insalata" },
      { name: "151. URA VENERE CALIFORNIA", price: "€ 9,00", description: "riso venere, surimi, avocado e maionese*" },
      { name: "152. URA PINK SAKE", price: "€ 13,00", description: "riso rosa, salmone, avocado, philadelphia esterno salsa sanshi speciale," },
      { name: "153. URA PINK FRITTO", price: "€ 13,00", description: "riso rosa, verdure fritte, sesamo, esterno salsa teriyaki" },
      { name: "154. URA PINK MANGO", price: "€ 13,00", description: "riso rosa, mango, salmone, piladelphia, esterno salsa mango" },
    ]
  },
  {
    name: "Primi (Spaghetti, Udon, Ramen)",
    items: [
      { name: "155. UDON CON GAMBERI", price: "€ 9,00", description: "gamberi, verdure miste*" },
      { name: "156. UDON CON POLLO", price: "€ 8,00", description: "pollo, verdure miste*" },
      { name: "157. UDON CON MANZO", price: "€ 8,00", description: "manzo, verdure miste*" },
      { name: "158. UDON CON VERDURE", price: "€ 6,00", description: "verdure miste" },
      { name: "159. YAKI SOBA EBI", price: "€ 8,00", description: "spaghetti di verdure e gamberi*" },
      { name: "160. YAKI SOBA MANZO", price: "€ 8,00", description: "spaghetti di verdure e manzo" },
      { name: "161. GNOCCHI DI RISO CON VERDURE", price: "€ 6,00", description: "gnocchi morbidi e verdure" },
      { name: "162. SPAGHETTI DI RISO CON GAMBERI", price: "€ 8,00", description: "gamberi, verdure miste e uova*" },
      { name: "163. SPAGHETTI DI RISO CON VERDURE MISTE", price: "€ 6,00", description: "verdure miste e uova" },
      { name: "164. SPAGHETTI DI SOIA CON GAMBERI", price: "€ 8,00", description: "gamberi e verdure miste*" },
      { name: "165. SPAGHETTI DI SOIA CON CARNE PICCANTE", price: "€ 8,00", description: "carne di maiale macinato e verdure miste piccante*" },
      { name: "166. SPAGHETTI DI SOIA CON VERDURE MISTE", price: "€ 6,00", description: "verdure miste" },
      { name: "167. RAMEN IN BRODO CON GAMBERI E UOVA", price: "€ 8,00", description: "gamberi, verdure miste e uova*" },
      { name: "168. RAMEN IN BRODO CON POLLO E UOVA", price: "€ 8,00", description: "pollo, verdure miste e uova*" },
      { name: "169. RAMEN IN BRODO CON MANZO E UOVA", price: "€ 8,00", description: "manzo, verdure miste e uova*" },
      { name: "170. RAMEN IN BRODO CON VERDURE E UOVA", price: "€ 6,00", description: "verdure miste e uova" },
    ]
  },
  {
    name: "Riso",
    items: [
      { name: "171. GOHAN", price: "€ 2,50", description: "riso bianco con sesamo" },
      { name: "172. RISO SALTATO CON VERDURE MISTE", price: "€ 6,00", description: "verdure miste e uova" },
      { name: "173. RISO SALTATO CON GAMBERI", price: "€ 8,00", description: "verdure miste, gamberi e uova*" },
      { name: "174. RISO SALTATO CON MANZO", price: "€ 7,00", description: "manzo, verdure miste e uova*" },
      { name: "175. RISO SALTATO CON POLLO", price: "€ 7,00", description: "pollo, verdure miste e uova*" },
      { name: "176. RISO ALLA CANTONESE", price: "€ 6,00", description: "piselli, prosciutto cotto e uova*" },
      { name: "177. RISO VENERE SALTATO CON VERDURE E GAMBERI", price: "€ 8,00", description: "riso nero, gamberi, verdure" },
    ]
  },
  {
    name: "Secondi - Pollo",
    items: [
      { name: "178. POLLO ALLE MANDORLE", price: "€ 6,00", description: "pollo, mandorle, peperoni e cipolla*" },
      { name: "179. POLLO CON SALSA PICCANTE", price: "€ 6,00", description: "pollo, peperoni, cipolla e salsa piccante*" },
      { name: "180. POLLO AL LIMONE", price: "€ 6,00", description: "pollo fritto con salsa di limone e sesamo*" },
      { name: "181. POLLO CON FUNGHI E BAMBÙ", price: "€ 6,00", description: "funghi, bambù saltati" },
      { name: "182. POLLO CON VERDURE", price: "€ 6,00", description: "verdure miste saltate" },
      { name: "183. POLLO AL CURRY", price: "€ 6,00", description: "pollo, curry e verdure mix*" },
      { name: "184. POLLO AGRODOLCE", price: "€ 6,00", description: "pollo, verdure e ananas*" },
    ]
  },
  {
    name: "Secondi - Manzo",
    items: [
      { name: "188. MANZO CON PATATE", price: "€ 6,50", description: "manzo e patate saltate" },
      { name: "189. MANZO CON VERDURE MIX", price: "€ 6,50", description: "verdure miste saltate" },
      { name: "190. MANZO CON SALSA PICCANTE", price: "€ 6,50", description: "manzo, peperoni, cipolla piccante" },
      { name: "191. MANZO CON FUNGHI E BAMBÙ", price: "€ 6,50", description: "funghi e bambù saltati" },
      { name: "192. MANZO AL CURRY", price: "€ 6,50", description: "manzo, patate, cipolla, latte al cocco e salsa al curry*" },
    ]
  },
  {
    name: "Secondi - Gamberi",
    items: [
      { name: "193. GAMBERI SALTATO CON VERDURE", price: "€ 8,00", description: "gamberi e verdure miste" },
      { name: "194. GAMBERI CON BAMBÙ E FUNGHI", price: "€ 8,00", description: "bambù, funghi e gamberi" },
      { name: "195. GAMBERI CON SALSA PICCANTE", price: "€ 8,00", description: "gamberi, peperoni, cipolla piccante" },
      { name: "196. GAMBERI SALE E PEPE", price: "€ 8,00", description: "gamberi, peperoni, cipolla, sale e pepe*" },
      { name: "197. GAMBERI AL CURRY", price: "€ 8,00", description: "gamberi, cipolla, latte al cocco e salsa al curry*" },
      { name: "198. GAMBERONI", price: "€ 9,00", description: "gamberoni alla piastra calda" },
    ]
  },
  {
    name: "Secondi - Piastra",
    items: [
      { name: "199. VERDURE ALLA GRIGLIA", price: "€ 5,00", description: "peperoni, zucchine" },
      { name: "200. TERIYAKI MAGURO TEPPAN", price: "€ 11,00", description: "tonno con salsa teriyaki*" },
      { name: "201. TERIYAKI SUZUKI TEPPAN", price: "€ 9,00", description: "branzino con salsa teriyaki*" },
      { name: "202. YAKI EBI", price: "€ 6,00", description: "spiedini di gamberi*, salsa teriyaki" },
      { name: "203. SPIEDINI DI POLLO", price: "€ 6,00", description: "spiedini di pollo marinato* salsa teriyaki" },
      { name: "204. CALAMARI ALLA GRIGLIA", price: "€ 8,00", description: "calamari, salsa teriyaki" },
    ]
  },
  {
    name: "Tempura & Fritti",
    items: [
      { name: "205. TEMPURA EBI", price: "€ 10,00", description: "gamberi fritti*" },
      { name: "206. TEMPURA YASAI", price: "€ 8,00", description: "verdure miste fritte" },
      { name: "207. TEMPURA MISTO", price: "€ 9,00", description: "gamberi e verdure fritte*" },
      { name: "208. TEMPURA POLLO", price: "€ 8,00", description: "pollo fritto*" },
      { name: "209. IKA FRY", price: "€ 10,00", description: "calamari fritti*" },
    ]
  },
  {
    name: "Contorni",
    items: [
      { name: "185. GERMOGLI DI SOIA", price: "€ 4,00", description: "germogli freschi saltati" },
      { name: "186. VERDURE MIX", price: "€ 5,00", description: "verdure miste di stagione" },
      { name: "187. FUNGHI E BAMBÙ", price: "€ 5,00", description: "funghi e bambù saltati" },
    ]
  },
  {
    name: "Dessert",
    items: [
      { name: "GELATO FRITTO", price: "€ 4,50", description: "gelato in tempura croccante" },
      { name: "TARTUFO BIANCO", price: "€ 4,50", description: "gelato vaniglia e cioccolato" },
      { name: "TARTUFO NERO", price: "€ 4,50", description: "gelato cioccolato fondente" },
      { name: "TARTUFO AL CAFFÈ", price: "€ 4,50", description: "gelato al gusto caffè" },
      { name: "MOCHI MISTO 3pz", price: "€ 5,50", description: "dolcetti giapponesi di riso" },
      { name: "COPPA AL COCCO", price: "€ 5,00", description: "crema di cocco fresca" },
      { name: "PROFITEROL NERO 3 pz", price: "€ 5,00", description: "bignè al cioccolato fondente" },
      { name: "CHEESE CAKE", price: "€ 5,50", description: "cheesecake cremosa classica" },
      { name: "TARTUFO AL PISTACCHIO", price: "€ 5,50", description: "gelato al pistacchio siciliano" },
      { name: "TIRAMISU", price: "€ 4,50", description: "classico con mascarpone e caffè" },
      { name: "TORTINO AL CIOCCOLATO", price: "€ 4,50", description: "cuore fondente caldo" },
      { name: "GELATO", price: "€ 3,50", description: "gusti assortiti artigianale" },
    ]
  },
  {
    name: "Altro",
    items: [
      { name: "122. HOSSO SOY SAKE", price: "€ 8,00", description: "foglia di soia, salmone" },
      { name: "123. HOSSO SOY MAGURO", price: "€ 8,00", description: "foglia di soia, tonno" },
      { name: "124. HOSSO SOY SURIMI", price: "€ 9,00", description: "foglia di soia, surimi, gambero cotto e maionese" },
      { name: "125. HOSSO SOY BLACK SURIMI", price: "€ 9,00", description: "foglia di soia, riso venere, surimi e gambero cotto" },
      { name: "126. URA MIURA", price: "€ 10,00", description: "salmone cotto, insalata, philadelphia e salsa teriyaki" },
    ]
  },
  {
    name: "Bibite & Vini",
    items: [
      { name: "Acqua 75 cl", price: "€ 2,50", description: "Naturale o Frizzante" },
      { name: "Acqua 50 cl", price: "€ 1,80", description: "Naturale o Frizzante" },
      { name: "Tè Cinese Jasmine", price: "€ 2,50", description: "" },
      { name: "Coca Cola 33 cl", price: "€ 2,50", description: "In lattina" },
      { name: "Fanta 33 cl", price: "€ 2,50", description: "In lattina" },
      { name: "Sprite 33 cl", price: "€ 2,50", description: "In lattina" },
      { name: "Tè limone-pesca 33 cl", price: "€ 2,50", description: "" },
      { name: "Caffè", price: "€ 1,20", description: "" },
      { name: "Caffè corretto", price: "€ 1,50", description: "" },
      { name: "Pinot Grigio", price: "€ 12,50", description: "Vino Bianco" },
      { name: "Gewurztraminer", price: "€ 15,00", description: "Vino Bianco" },
      { name: "Chardonnay", price: "€ 12,50", description: "Vino Bianco" },
      { name: "Vino Bianco della casa", price: "€ 10,00", description: "1 litro (€10) / 0.5l (€5.50) / 0.25l (€3.30)" },
      { name: "Chianti doc Classico", price: "€ 12,50", description: "Vino Rosso" },
      { name: "Cabernet", price: "€ 12,50", description: "Vino Rosso" },
      { name: "Vino Rosso della casa", price: "€ 10,00", description: "1 litro (€10) / 0.5l (€5.50) / 0.25l (€3.30)" },
      { name: "Prosecco in bottiglia", price: "€ 15,00", description: "1 litro (€12.50) / 0.5l (€10) / 0.25l (€5)" },
      { name: "Birra Cinese TsingTao 64 cl", price: "€ 4,50", description: "" },
      { name: "Birra Asahi 50 cl", price: "€ 5,00", description: "" },
      { name: "Birra Becks 33 cl", price: "€ 3,00", description: "" },
      { name: "Birra Forst 20 cl", price: "€ 3,00", description: "" },
    ]
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
