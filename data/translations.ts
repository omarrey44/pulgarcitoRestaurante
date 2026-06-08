// Bilingual UI copy. Keys are stable; values hold EN/ES strings.
// To add/adjust wording, edit the matching { en, es } pair below.

export type Language = "en" | "es";

export type Bilingual = { en: string; es: string };

export const translations = {
  nav: {
    home: { en: "Home", es: "Inicio" },
    menu: { en: "Menu", es: "Menú" },
    favorites: { en: "Favorites", es: "Favoritos" },
    about: { en: "About", es: "Nosotros" },
    reviews: { en: "Reviews", es: "Reseñas" },
    location: { en: "Location", es: "Ubicación" },
    order: { en: "Order Now", es: "Ordenar Ahora" },
  },
  hero: {
    badge: { en: "Salvadoran Family Restaurant", es: "Restaurante Familiar Salvadoreño" },
    eyebrow: { en: "Salvadoran Flavor", es: "Sabor Salvadoreño" },
    word1: { en: "Authentic.", es: "Auténtico." },
    word2: { en: "Family.", es: "Familiar." },
    word3: { en: "Unforgettable.", es: "Inolvidable." },
    sealTop: { en: "Proudly Made", es: "Hecho con Orgullo" },
    sealBottom: { en: "Salvadoran", es: "Salvadoreño" },
    title: {
      en: "Authentic Salvadoran Flavor in the Heart of Los Angeles",
      es: "Sabor Salvadoreño Auténtico en el Corazón de Los Ángeles",
    },
    subtitle: {
      en: "Pupusas, traditional breakfasts, handmade tortillas, fresh drinks, soups, seafood, and family-style plates made with the warmth of El Salvador.",
      es: "Pupusas, desayunos típicos, tortillas hechas a mano, frescos naturales, sopas, mariscos y platos familiares preparados con el calor de El Salvador.",
    },
    viewMenu: { en: "View Menu", es: "Ver Menú" },
    orderUber: { en: "Order on Uber Eats", es: "Ordenar en Uber Eats" },
    trust1: { en: "Family Restaurant", es: "Restaurante Familiar" },
    trust2: { en: "Located in Los Angeles", es: "En Los Ángeles" },
    trust3: { en: "Authentic Salvadoran Food", es: "Comida Salvadoreña Auténtica" },
    trust4: { en: "Weekend Vibes", es: "Ambiente de Fin de Semana" },
  },
  featured: {
    eyebrow: { en: "Guest Favorites", es: "Los Más Pedidos" },
    title: { en: "Most Loved by Our Guests", es: "Los Favoritos de Nuestros Clientes" },
    subtitle: {
      en: "Each dish is handmade daily using recipes that have crossed generations and borders.",
      es: "Cada platillo se prepara a mano cada día, con recetas que han cruzado generaciones y fronteras.",
    },
  },
  menu: {
    eyebrow: { en: "What We Cook", es: "Lo Que Cocinamos" },
    title: { en: "Our Full Menu", es: "Nuestro Menú Completo" },
    subtitle: {
      en: "From handmade pupusas to fresh mariscos — everything made in-house, every single day.",
      es: "De pupusas hechas a mano hasta mariscos frescos — todo preparado en casa, cada día.",
    },
    search: { en: "Search dishes…", es: "Buscar platillos…" },
    noResults: { en: "No dishes found. Try another search.", es: "No se encontraron platillos. Intenta otra búsqueda." },
    reviews: { en: "reviews", es: "reseñas" },
    all: { en: "All", es: "Todo" },
  },
  filters: {
    popular: { en: "Popular", es: "Popular" },
    pupusas: { en: "Pupusas", es: "Pupusas" },
    breakfast: { en: "Breakfast", es: "Desayuno" },
    seafood: { en: "Seafood", es: "Mariscos" },
    drinks: { en: "Drinks", es: "Bebidas" },
  },
  about: {
    eyebrow: { en: "Who We Are", es: "Quiénes Somos" },
    title: { en: "Our Story", es: "Nuestra Historia" },
    body: {
      en: "Pulgarcito Family Restaurant is a vibrant dining spot located at 2500 W Pico Blvd in Los Angeles, CA. Renowned for its inviting atmosphere, this eatery is a favorite for families and friends alike. The menu highlights include delicious chicken sandwiches, crispy fries, and the celebrated pupusas, which have garnered rave reviews for their authentic flavor. Guests appreciate the lively weekend vibes, making it a perfect place to unwind with loved ones. Additionally, their refreshing lemonade has won hearts during events like CicLAvia. With friendly service and a welcoming bar, Pulgarcito promises a delightful culinary experience worth revisiting.",
      es: "Pulgarcito Family Restaurant es un animado restaurante ubicado en 2500 W Pico Blvd en Los Ángeles, CA. Reconocido por su ambiente acogedor, es el favorito de familias y amigos por igual. Los platillos destacados incluyen deliciosos sándwiches de pollo, papas crujientes y las celebradas pupusas, que han ganado elogios por su sabor auténtico. Los clientes disfrutan de la animada vibra de los fines de semana, convirtiéndolo en el lugar perfecto para relajarse con seres queridos. Además, su refrescante limonada ha conquistado corazones en eventos como CicLAvia. Con un servicio amable y un acogedor bar, Pulgarcito promete una experiencia culinaria que vale la pena repetir.",
    },
    quote: {
      en: "Every plate carries the soul of El Salvador.",
      es: "Cada platillo lleva el alma de El Salvador.",
    },
    feature1: { en: "Handmade Pupusas", es: "Pupusas Hechas a Mano" },
    feature2: { en: "Family Atmosphere", es: "Ambiente Familiar" },
    feature3: { en: "Fresh Natural Drinks", es: "Frescos Naturales" },
    feature4: { en: "Weekend Vibes", es: "Vibra de Fin de Semana" },
  },
  reviews: {
    eyebrow: { en: "Real Guests, Real Words", es: "Clientes Reales, Palabras Reales" },
    title: { en: "What Our Guests Say", es: "Lo Que Dicen Nuestros Clientes" },
    subtitle: {
      en: "Straight from the people of Los Angeles who know good food.",
      es: "Directo de la gente de Los Ángeles que sabe lo que es buena comida.",
    },
    cta: {
      en: "Come taste why guests keep coming back.",
      es: "Ven a probar por qué nuestros clientes siempre regresan.",
    },
  },
  gallery: {
    eyebrow: { en: "From Our Kitchen", es: "Desde Nuestra Cocina" },
    title: { en: "A Taste of Pulgarcito", es: "Un Sabor de Pulgarcito" },
    subtitle: {
      en: "Real food, real warmth, real Salvadoran soul — plated with love in Los Angeles.",
      es: "Comida real, calor real, alma salvadoreña — servida con amor en Los Ángeles.",
    },
  },
  location: {
    eyebrow: { en: "Find Us", es: "Encuéntranos" },
    title: { en: "Visit Us", es: "Visítanos" },
    subtitle: {
      en: "We're at the heart of Los Angeles, ready to welcome you like family.",
      es: "Estamos en el corazón de Los Ángeles, listos para recibirte como en familia.",
    },
    directions: { en: "Get Directions", es: "Cómo Llegar" },
    call: { en: "Call Now", es: "Llamar Ahora" },
    orderUber: { en: "Order on Uber Eats", es: "Ordenar en Uber Eats" },
    viewMenu: { en: "View Menu", es: "Ver Menú" },
    hours: { en: "Hours", es: "Horario" },
    phone: { en: "Phone", es: "Teléfono" },
    address: { en: "Address", es: "Dirección" },
    follow: { en: "Follow Us", es: "Síguenos" },
  },
  footer: {
    tagline: {
      en: "Authentic Salvadoran food made with family love in Los Angeles.",
      es: "Comida salvadoreña auténtica hecha con amor de familia en Los Ángeles.",
    },
    rights: { en: "All rights reserved.", es: "Todos los derechos reservados." },
    explore: { en: "Explore", es: "Explorar" },
    contact: { en: "Contact", es: "Contacto" },
  },
} as const;

// Helper: pick the right language string from a Bilingual value.
export function t(value: Bilingual, lang: Language): string {
  return value[lang];
}
