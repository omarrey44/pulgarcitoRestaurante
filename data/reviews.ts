// Guest reviews shown in the Reviews carousel.
// Add new reviews by appending objects to this array.

export type Review = {
  id: number;
  name: string;
  badge?: string; // e.g. "Local Guide"
  rating: number; // out of 5
  text: { en: string; es: string };
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Cecilia Williams",
    badge: "Local Guide",
    rating: 5,
    text: {
      en: "While bike riding CicLAvia today, Pulgarcito was on the street handing out the best lemonade we've ever had! Didn't get to stop to eat, but we'll return soon to try some food! Thank you from all riders who enjoyed the lemonade! — The SouthLAnds (w/ East Side Riders Bike Club). Food: 5/5 · Service: 5/5 · Atmosphere: 5/5",
      es: "¡Mientras andábamos en bici por CicLAvia, Pulgarcito estaba en la calle repartiendo la mejor limonada que hemos probado! No pudimos parar a comer, pero volveremos pronto. ¡Gracias de parte de todos los ciclistas! — The SouthLAnds (con East Side Riders Bike Club). Comida: 5/5 · Servicio: 5/5 · Ambiente: 5/5",
    },
  },
  {
    id: 2,
    name: "cloudfar",
    rating: 5,
    text: {
      en: "I got a chicken sandwich with fries here for only $10 — it was great.",
      es: "Pedí un sándwich de pollo con papas por solo $10 — estuvo buenísimo.",
    },
  },
  {
    id: 3,
    name: "Jordan Guerrero",
    rating: 5,
    text: {
      en: "Atmosphere, food and night vibes on Saturdays is cool and ecstatic! Must visit on the weekends!",
      es: "¡El ambiente, la comida y la vibra nocturna de los sábados son geniales y emocionantes! ¡Hay que visitarlo los fines de semana!",
    },
  },
  {
    id: 4,
    name: "Edgar Rivera",
    badge: "Local Guide",
    rating: 5,
    text: {
      en: "The food has great flavor — I came for breakfast. The best thing I found was the atol de pañuela, simply delicious and something I hadn't found at any other Salvadoran restaurant. Great place to eat, highly recommended.",
      es: "La comida tiene buen sabor. Fui para la hora del desayuno y lo mejor que pude encontrar fue el atol de pañuela, simplemente delicioso, algo que no había encontrado en ningún otro restaurante salvadoreño. Buen lugar para comer, recomendado.",
    },
  },
  {
    id: 6,
    name: "Jaquema Kunen",
    badge: "Local Guide",
    rating: 5,
    text: {
      en: "The staff is very attentive, always ready to assist and satisfy customers. The restaurant space is comfortable and luxurious. The food is delicious, beautifully presented and served quickly. I am very satisfied and will definitely return. Food: 4/5 · Service: 5/5 · Atmosphere: 4/5",
      es: "El personal es muy atento, siempre listo para ayudar y satisfacer a los clientes. El espacio del restaurante es cómodo y elegante. La comida es deliciosa, está muy bien presentada y se sirve rápido. Estoy muy satisfecha y definitivamente volvería. Comida: 4/5 · Servicio: 5/5 · Ambiente: 4/5",
    },
  },
  {
    id: 5,
    name: "Derek Streichman",
    rating: 5,
    text: {
      en: "Great experience here. The food (pupusas) were amazing. Got to meet the owner Dominic, very chill and friendly. Definitely coming back!",
      es: "Una experiencia increíble. La comida (pupusas) estaba asombrosa. Tuve la oportunidad de conocer al dueño Dominic, muy tranquilo y amigable. ¡Definitivamente vuelvo!",
    },
  },
];
