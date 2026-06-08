// ============================================================================
// Pulgarcito Family Restaurant — static menu data
// ----------------------------------------------------------------------------
// Prices and item names are representative of a Salvadoran restaurant menu.
// TODO: Verify every price / item against the live Uber Eats store before launch:
//   https://www.ubereats.com/store/pulgarcito-family-restaurant/569BCyJhQyu8BdhKDhlyvA
// ============================================================================

export type FilterTag = "popular" | "pupusas" | "breakfast" | "seafood" | "drinks";

export type MenuItem = {
  id: string;
  categoryId: string;
  name: string; // primary (English-friendly / Spanish dish name)
  nameEs?: string; // Spanish name when it differs
  description: { en: string; es: string };
  price: string; // formatted with $
  popular?: boolean;
  tag?: { en: string; es: string }; // e.g. Popular / Traditional / Family Favorite
  rating?: number; // percent, e.g. 96
  reviewCount?: number;
  filters?: FilterTag[];
  featured?: boolean; // appears in the Featured Dishes section
  image?: string; // optional placeholder image path
};

export type MenuCategory = {
  id: string;
  name: { en: string; es: string };
};

export const categories: MenuCategory[] = [
  { id: "breakfast", name: { en: "Breakfast", es: "Desayunos" } },
  { id: "pupusas", name: { en: "Pupusas", es: "Pupusas" } },
  { id: "appetizers", name: { en: "Salvadoran Appetizers", es: "Antojitos Salvadoreños" } },
  { id: "alacarta", name: { en: "A La Carta", es: "A La Carta" } },
  { id: "soups", name: { en: "Soups", es: "Sopas" } },
  { id: "botanas", name: { en: "Botanas", es: "Botanas" } },
  { id: "sides", name: { en: "Side Orders", es: "Órdenes Extra" } },
  { id: "seafood", name: { en: "Seafood", es: "Mariscos" } },
  { id: "cocktails", name: { en: "Seafood Cocktails", es: "Cócteles de Mariscos" } },
  { id: "mexican", name: { en: "Mexican Food", es: "Comida Mexicana" } },
  { id: "cheeseburger", name: { en: "Cheeseburger", es: "Cheeseburger" } },
  { id: "parrilladas", name: { en: "Parrilladas", es: "Parrilladas" } },
  { id: "sodas", name: { en: "Sodas", es: "Sodas" } },
  { id: "frescos", name: { en: "Fresh Drinks", es: "Frescos" } },
  { id: "juices", name: { en: "Natural Juices", es: "Jugos Naturales" } },
];

const POPULAR = { en: "Popular", es: "Popular" };
const TRADITIONAL = { en: "Traditional", es: "Tradicional" };
const FAMILY = { en: "Family Favorite", es: "Favorito Familiar" };

export const menu: MenuItem[] = [
  // ---------------------------------------------------------------- Breakfast
  {
    id: "bf-tipico",
    categoryId: "breakfast",
    name: "Desayuno Típico Salvadoreño",
    description: {
      en: "Eggs, fried plantains, refried beans, cream, fresh cheese, and handmade tortillas.",
      es: "Huevos, plátanos fritos, frijoles refritos, crema, queso fresco y tortillas hechas a mano.",
    },
    price: "$12.99",
    popular: true,
    tag: TRADITIONAL,
    rating: 96,
    reviewCount: 184,
    filters: ["breakfast", "popular"],
    image: "/images/desayuno-salvadoreno.jpg",
  },
  {
    id: "bf-huevos-frijol",
    categoryId: "breakfast",
    name: "Huevos con Frijoles y Crema",
    nameEs: "Huevos con Frijoles",
    description: {
      en: "Two eggs your way with refried beans, cream, and warm tortillas.",
      es: "Dos huevos al gusto con frijoles refritos, crema y tortillas calientes.",
    },
    price: "$9.99",
    filters: ["breakfast"],
    image: "/images/bf-huevos-frijol.jpg",
  },
  {
    id: "bf-casamiento",
    categoryId: "breakfast",
    name: "Casamiento con Huevos",
    description: {
      en: "Rice and beans cooked together with eggs, plantains, and cheese.",
      es: "Arroz y frijoles cocinados juntos con huevos, plátanos y queso.",
    },
    price: "$10.99",
    filters: ["breakfast"],
    image: "/images/bf-casamiento.jpg",
  },
  {
    id: "bf-pancakes",
    categoryId: "breakfast",
    name: "Pancakes",
    description: {
      en: "Fluffy buttermilk pancakes served with butter and syrup.",
      es: "Esponjosos pancakes servidos con mantequilla y miel.",
    },
    price: "$8.99",
    filters: ["breakfast"],
    image: "/images/bf-pancakes.jpg",
  },

  // ------------------------------------------------------------------ Pupusas
  {
    id: "pup-revuelta",
    categoryId: "pupusas",
    name: "Pupusa Revuelta",
    description: {
      en: "Handmade masa filled with pork, cheese, and beans. Served with curtido and salsa.",
      es: "Masa hecha a mano rellena de cerdo, queso y frijol. Servida con curtido y salsa.",
    },
    price: "$3.50",
    popular: true,
    tag: POPULAR,
    rating: 98,
    reviewCount: 312,
    filters: ["pupusas", "popular"],
    featured: true,
    image: "/images/pupusa-revuelta.png",
  },
  {
    id: "pup-queso",
    categoryId: "pupusas",
    name: "Pupusa de Queso",
    description: {
      en: "Classic handmade pupusa filled with melted Salvadoran cheese.",
      es: "Pupusa clásica hecha a mano rellena de queso salvadoreño derretido.",
    },
    price: "$3.25",
    popular: true,
    tag: FAMILY,
    rating: 97,
    reviewCount: 268,
    filters: ["pupusas", "popular"],
    featured: true,
    image: "/images/pupusa-queso.png",
  },
  {
    id: "pup-frijol-queso",
    categoryId: "pupusas",
    name: "Pupusa de Frijol con Queso",
    description: {
      en: "Refried beans and cheese inside warm handmade masa.",
      es: "Frijoles refritos y queso dentro de masa caliente hecha a mano.",
    },
    price: "$3.25",
    filters: ["pupusas"],
    image: "/images/pup-frijol-queso.jpg",
  },
  {
    id: "pup-loroco",
    categoryId: "pupusas",
    name: "Pupusa de Queso con Loroco",
    description: {
      en: "Salvadoran cheese with loroco — a fragrant native flower bud.",
      es: "Queso salvadoreño con loroco — el aromático botón de flor nativa.",
    },
    price: "$3.75",
    tag: TRADITIONAL,
    filters: ["pupusas"],
    image: "/images/pup-loroco.jpg",
  },
  {
    id: "pup-chicharron",
    categoryId: "pupusas",
    name: "Pupusa de Chicharrón",
    description: {
      en: "Ground seasoned pork inside handmade masa, griddled to golden.",
      es: "Cerdo molido y sazonado dentro de masa hecha a mano, dorada al comal.",
    },
    price: "$3.50",
    filters: ["pupusas"],
    image: "/images/pup-chicharron.jpg",
  },
  {
    id: "pup-arroz",
    categoryId: "pupusas",
    name: "Pupusa de Arroz",
    description: {
      en: "Rice-flour pupusa — lighter and crispier, an Olocuilta specialty.",
      es: "Pupusa de harina de arroz — más ligera y crujiente, especialidad de Olocuilta.",
    },
    price: "$3.50",
    filters: ["pupusas"],
    image: "/images/pup-arroz.jpg",
  },

  // ------------------------------------------------------ Salvadoran Appetizers
  {
    id: "ap-platanos",
    categoryId: "appetizers",
    name: "Plátanos Fritos con Crema",
    nameEs: "Plátanos Fritos",
    description: {
      en: "Sweet fried plantains served with cream and refried beans.",
      es: "Plátanos dulces fritos servidos con crema y frijoles refritos.",
    },
    price: "$7.99",
    popular: true,
    tag: FAMILY,
    rating: 95,
    reviewCount: 142,
    filters: ["popular"],
    featured: true,
    image: "/images/platanos-fritos.png",
  },
  {
    id: "ap-yuca",
    categoryId: "appetizers",
    name: "Yuca Frita con Chicharrón",
    description: {
      en: "Fried cassava topped with crispy pork, curtido, and tomato sauce.",
      es: "Yuca frita cubierta con chicharrón crujiente, curtido y salsa de tomate.",
    },
    price: "$10.99",
    tag: TRADITIONAL,
    filters: [],
    image: "/images/ap-yuca.jpg",
  },
  {
    id: "ap-tamal",
    categoryId: "appetizers",
    name: "Tamal de Elote",
    description: {
      en: "Sweet corn tamal wrapped in a husk, served with cream.",
      es: "Tamal de maíz dulce envuelto en tusa, servido con crema.",
    },
    price: "$4.50",
    filters: [],
    image: "/images/ap-tamal.jpg",
  },
  {
    id: "ap-pastelitos",
    categoryId: "appetizers",
    name: "Pastelitos de Carne",
    description: {
      en: "Crispy corn turnovers filled with seasoned beef and potato.",
      es: "Empanaditas de maíz crujientes rellenas de carne sazonada y papa.",
    },
    price: "$8.99",
    filters: [],
    image: "/images/ap-pastelitos.jpg",
  },

  // ----------------------------------------------------------------- A La Carta
  {
    id: "ac-carne-asada",
    categoryId: "alacarta",
    name: "Carne Asada",
    description: {
      en: "Grilled marinated steak with rice, beans, salad, and tortillas.",
      es: "Bistec asado y marinado con arroz, frijoles, ensalada y tortillas.",
    },
    price: "$16.99",
    popular: true,
    tag: POPULAR,
    rating: 94,
    reviewCount: 176,
    filters: ["popular"],
    featured: true,
    image: "/images/carne-asada.png",
  },
  {
    id: "ac-pollo-encebollado",
    categoryId: "alacarta",
    name: "Pollo Encebollado",
    description: {
      en: "Grilled chicken smothered in sautéed onions, with rice and beans.",
      es: "Pollo a la plancha cubierto de cebolla salteada, con arroz y frijoles.",
    },
    price: "$14.99",
    filters: [],
    image: "/images/ac-pollo-encebollado.jpg",
  },
  {
    id: "ac-bistec",
    categoryId: "alacarta",
    name: "Bistec Entomatado",
    description: {
      en: "Tender beef in a savory tomato and onion sauce.",
      es: "Res tierna en una salsa sabrosa de tomate y cebolla.",
    },
    price: "$15.99",
    filters: [],
    image: "/images/ac-bistec.jpg",
  },
  {
    id: "ac-chuleta",
    categoryId: "alacarta",
    name: "Chuleta de Cerdo",
    description: {
      en: "Grilled pork chop with rice, beans, and salad.",
      es: "Chuleta de cerdo a la parrilla con arroz, frijoles y ensalada.",
    },
    price: "$14.99",
    filters: [],
    image: "/images/ac-chuleta.jpg",
  },

  // --------------------------------------------------------------------- Soups
  {
    id: "sp-gallina",
    categoryId: "soups",
    name: "Sopa de Gallina India",
    description: {
      en: "Hearty free-range hen soup with vegetables and rice — a Salvadoran classic.",
      es: "Sustanciosa sopa de gallina criolla con verduras y arroz — un clásico salvadoreño.",
    },
    price: "$15.99",
    popular: true,
    tag: TRADITIONAL,
    rating: 97,
    reviewCount: 158,
    filters: ["popular"],
    featured: true,
    image: "/images/sopa-gallinas.png",
  },
  {
    id: "sp-res",
    categoryId: "soups",
    name: "Sopa de Res",
    description: {
      en: "Beef and bone broth with yuca, plantain, corn, and vegetables.",
      es: "Caldo de res con hueso, yuca, plátano, elote y verduras.",
    },
    price: "$15.99",
    filters: [],
    image: "/images/sp-res.jpg",
  },
  {
    id: "sp-mariscos",
    categoryId: "soups",
    name: "Sopa de Mariscos",
    description: {
      en: "Rich seafood soup with shrimp, fish, crab, and clams.",
      es: "Sopa de mariscos abundante con camarón, pescado, cangrejo y almejas.",
    },
    price: "$18.99",
    tag: POPULAR,
    filters: ["seafood"],
    image: "/images/sp-mariscos.jpg",
  },
  {
    id: "sp-pata",
    categoryId: "soups",
    name: "Sopa de Pata",
    description: {
      en: "Traditional cow-foot and tripe soup with vegetables and corn.",
      es: "Sopa tradicional de pata y mondongo con verduras y elote.",
    },
    price: "$16.99",
    tag: TRADITIONAL,
    filters: [],
    image: "/images/sp-pata.jpg",
  },

  // ------------------------------------------------------------------- Botanas
  {
    id: "bo-nachos",
    categoryId: "botanas",
    name: "Nachos Supremos",
    description: {
      en: "Tortilla chips loaded with cheese, beans, jalapeños, and cream.",
      es: "Totopos cubiertos de queso, frijoles, jalapeños y crema.",
    },
    price: "$11.99",
    filters: [],
    image: "/images/bo-nachos.jpg",
  },
  {
    id: "bo-alitas",
    categoryId: "botanas",
    name: "Alitas de Pollo",
    description: {
      en: "Crispy chicken wings tossed in your choice of sauce, with fries.",
      es: "Alitas de pollo crujientes con la salsa de tu elección y papas.",
    },
    price: "$12.99",
    tag: POPULAR,
    filters: [],
    image: "/images/bo-alitas.jpg",
  },
  {
    id: "bo-papas",
    categoryId: "botanas",
    name: "Papas con Chorizo",
    description: {
      en: "French fries topped with chorizo, cheese, and cream.",
      es: "Papas fritas cubiertas con chorizo, queso y crema.",
    },
    price: "$10.99",
    filters: [],
    image: "/images/bo-papas.jpg",
  },

  // ---------------------------------------------------------------- Side Orders
  { id: "sd-rice", categoryId: "sides", name: "Arroz", nameEs: "Arroz", description: { en: "Side of Salvadoran-style rice.", es: "Orden de arroz al estilo salvadoreño." }, price: "$3.50", filters: [], image: "/images/sd-rice.jpg" },
  { id: "sd-beans", categoryId: "sides", name: "Frijoles", description: { en: "Refried or whole beans.", es: "Frijoles refritos o enteros." }, price: "$3.50", filters: [], image: "/images/sd-beans.jpg" },
  { id: "sd-tortillas", categoryId: "sides", name: "Tortillas Hechas a Mano (3)", description: { en: "Three warm handmade tortillas.", es: "Tres tortillas calientes hechas a mano." }, price: "$2.50", filters: [], image: "/images/sd-tortillas.jpg" },
  { id: "sd-curtido", categoryId: "sides", name: "Curtido", description: { en: "Fermented cabbage slaw — the classic pupusa companion.", es: "Repollo curtido fermentado — el acompañante clásico de la pupusa." }, price: "$2.00", filters: [], image: "/images/sd-curtido.jpg" },
  { id: "sd-cream", categoryId: "sides", name: "Crema y Queso", description: { en: "Salvadoran cream with fresh cheese.", es: "Crema salvadoreña con queso fresco." }, price: "$4.00", filters: [], image: "/images/sd-cream.jpg" },

  // ------------------------------------------------------------------- Seafood
  {
    id: "sf-camarones",
    categoryId: "seafood",
    name: "Camarones al Ajillo",
    description: {
      en: "Shrimp sautéed in garlic butter, with rice, salad, and tortillas.",
      es: "Camarones salteados en mantequilla de ajo, con arroz, ensalada y tortillas.",
    },
    price: "$19.99",
    popular: true,
    tag: POPULAR,
    rating: 95,
    reviewCount: 121,
    filters: ["seafood", "popular"],
    image: "/images/camarones.jpg",
  },
  {
    id: "sf-pescado",
    categoryId: "seafood",
    name: "Pescado Frito",
    description: {
      en: "Whole fried fish served with rice, salad, and tortillas.",
      es: "Pescado entero frito servido con arroz, ensalada y tortillas.",
    },
    price: "$18.99",
    tag: TRADITIONAL,
    filters: ["seafood"],
    image: "/images/sf-pescado.jpg",
  },
  {
    id: "sf-mojarra",
    categoryId: "seafood",
    name: "Mojarra a la Plancha",
    description: {
      en: "Grilled tilapia seasoned with garlic and lime.",
      es: "Mojarra a la plancha sazonada con ajo y limón.",
    },
    price: "$18.99",
    filters: ["seafood"],
    image: "/images/sf-mojarra.jpg",
  },

  // --------------------------------------------------------- Seafood Cocktails
  {
    id: "co-camaron",
    categoryId: "cocktails",
    name: "Cóctel de Camarón",
    description: {
      en: "Chilled shrimp cocktail in a tangy tomato sauce with avocado.",
      es: "Cóctel de camarón frío en salsa de tomate con aguacate.",
    },
    price: "$15.99",
    popular: true,
    tag: POPULAR,
    rating: 93,
    reviewCount: 98,
    filters: ["seafood", "popular"],
    image: "/images/co-camaron.jpg",
  },
  {
    id: "co-conchas",
    categoryId: "cocktails",
    name: "Cóctel de Conchas",
    description: {
      en: "Black clam cocktail with lime, cilantro, and onion.",
      es: "Cóctel de conchas negras con limón, cilantro y cebolla.",
    },
    price: "$16.99",
    tag: TRADITIONAL,
    filters: ["seafood"],
    image: "/images/co-conchas.jpg",
  },
  {
    id: "co-vuelve",
    categoryId: "cocktails",
    name: "Vuelve a la Vida",
    description: {
      en: "Mixed seafood cocktail — shrimp, octopus, fish, and clams.",
      es: "Cóctel de mariscos mixtos — camarón, pulpo, pescado y conchas.",
    },
    price: "$19.99",
    filters: ["seafood"],
    image: "/images/co-vuelve.jpg",
  },

  // -------------------------------------------------------------- Mexican Food
  {
    id: "mx-tacos",
    categoryId: "mexican",
    name: "Tacos (3)",
    description: {
      en: "Three street-style tacos with onion, cilantro, and salsa.",
      es: "Tres tacos al estilo callejero con cebolla, cilantro y salsa.",
    },
    price: "$11.99",
    popular: true,
    tag: POPULAR,
    filters: ["popular"],
    image: "/images/mx-tacos.jpg",
  },
  {
    id: "mx-burrito",
    categoryId: "mexican",
    name: "Burrito",
    description: {
      en: "Large flour tortilla stuffed with meat, rice, beans, and cheese.",
      es: "Tortilla de harina grande rellena de carne, arroz, frijoles y queso.",
    },
    price: "$12.99",
    filters: [],
    image: "/images/mx-burrito.jpg",
  },
  {
    id: "mx-quesadilla",
    categoryId: "mexican",
    name: "Quesadilla",
    description: {
      en: "Grilled flour tortilla with melted cheese and your choice of meat.",
      es: "Tortilla de harina a la plancha con queso derretido y carne a elección.",
    },
    price: "$10.99",
    filters: [],
    image: "/images/mx-quesadilla.jpg",
  },

  // ------------------------------------------------------------- Cheeseburger
  {
    id: "cb-classic",
    categoryId: "cheeseburger",
    name: "Cheeseburger with Fries",
    nameEs: "Cheeseburger con Papas",
    description: {
      en: "Juicy beef patty with cheese, lettuce, tomato, and a side of fries.",
      es: "Jugosa carne de res con queso, lechuga, tomate y papas fritas.",
    },
    price: "$10.99",
    popular: true,
    tag: FAMILY,
    rating: 92,
    reviewCount: 87,
    filters: ["popular"],
    image: "/images/cb-classic.jpg",
  },
  {
    id: "cb-chicken",
    categoryId: "cheeseburger",
    name: "Chicken Sandwich with Fries",
    nameEs: "Sándwich de Pollo con Papas",
    description: {
      en: "Grilled or crispy chicken sandwich with fries — a guest favorite at $10.",
      es: "Sándwich de pollo a la plancha o crujiente con papas — favorito por $10.",
    },
    price: "$10.99",
    tag: POPULAR,
    filters: [],
    image: "/images/cb-chicken.jpg",
  },

  // -------------------------------------------------------------- Parrilladas
  {
    id: "pa-familiar",
    categoryId: "parrilladas",
    name: "Parrillada Familiar",
    description: {
      en: "Mixed grill for the table — steak, chicken, chorizo, ribs, plantains, and more.",
      es: "Parrillada mixta para la mesa — bistec, pollo, chorizo, costilla, plátanos y más.",
    },
    price: "$49.99",
    popular: true,
    tag: FAMILY,
    rating: 96,
    reviewCount: 64,
    filters: ["popular"],
    image: "/images/parrillada.jpg",
  },
  {
    id: "pa-pareja",
    categoryId: "parrilladas",
    name: "Parrillada para Dos",
    description: {
      en: "Grilled steak, chicken, and chorizo with sides for two.",
      es: "Bistec, pollo y chorizo a la parrilla con guarniciones para dos.",
    },
    price: "$32.99",
    filters: [],
    image: "/images/pa-pareja.jpg",
  },

  // --------------------------------------------------------------------- Sodas
  { id: "so-coke", categoryId: "sodas", name: "Coca-Cola", description: { en: "Classic Coca-Cola.", es: "Coca-Cola clásica." }, price: "$2.50", filters: ["drinks"], image: "/images/so-coke.jpg" },
  { id: "so-tropical", categoryId: "sodas", name: "Tropical (Salvadoran Soda)", nameEs: "Tropical", description: { en: "Salvadoran fruit soda.", es: "Soda salvadoreña de frutas." }, price: "$2.99", filters: ["drinks"], image: "/images/so-tropical.jpg" },
  { id: "so-kolashampan", categoryId: "sodas", name: "Kolashampán", description: { en: "Iconic Salvadoran cream soda.", es: "Icónica soda salvadoreña tipo cream." }, price: "$2.99", tag: TRADITIONAL, filters: ["drinks"], image: "/images/so-kolashampan.jpg" },

  // ------------------------------------------------------------------- Frescos
  {
    id: "fr-horchata",
    categoryId: "frescos",
    name: "Horchata",
    description: {
      en: "Traditional Salvadoran horchata made with morro seeds and spices.",
      es: "Horchata salvadoreña tradicional hecha con semilla de morro y especias.",
    },
    price: "$3.99",
    popular: true,
    tag: TRADITIONAL,
    rating: 97,
    reviewCount: 203,
    filters: ["drinks", "popular"],
    featured: true,
    image: "/images/horchata.png",
  },
  {
    id: "fr-tamarindo",
    categoryId: "frescos",
    name: "Fresco de Tamarindo",
    description: {
      en: "Sweet and tangy fresh tamarind drink.",
      es: "Refrescante fresco de tamarindo dulce y ácido.",
    },
    price: "$3.99",
    filters: ["drinks"],
    image: "/images/fr-tamarindo.jpg",
  },
  {
    id: "fr-jamaica",
    categoryId: "frescos",
    name: "Fresco de Jamaica",
    description: {
      en: "Hibiscus flower iced tea, lightly sweetened.",
      es: "Fresco de flor de jamaica, ligeramente endulzado.",
    },
    price: "$3.99",
    filters: ["drinks"],
    image: "/images/fr-jamaica.jpg",
  },
  {
    id: "fr-ensalada",
    categoryId: "frescos",
    name: "Fresco de Ensalada",
    description: {
      en: "Salvadoran fruit punch loaded with chopped fresh fruit.",
      es: "Fresco de ensalada salvadoreño cargado de fruta fresca picada.",
    },
    price: "$4.99",
    tag: POPULAR,
    filters: ["drinks"],
    image: "/images/fr-ensalada.jpg",
  },

  // ------------------------------------------------------------- Natural Juices
  {
    id: "ju-naranja",
    categoryId: "juices",
    name: "Jugo de Naranja",
    nameEs: "Jugo de Naranja",
    description: {
      en: "Freshly squeezed orange juice.",
      es: "Jugo de naranja recién exprimido.",
    },
    price: "$4.99",
    filters: ["drinks"],
    image: "/images/ju-naranja.jpg",
  },
  {
    id: "ju-zanahoria",
    categoryId: "juices",
    name: "Jugo de Zanahoria",
    description: {
      en: "Fresh carrot juice, naturally sweet.",
      es: "Jugo de zanahoria fresco, naturalmente dulce.",
    },
    price: "$4.99",
    filters: ["drinks"],
    image: "/images/ju-zanahoria.jpg",
  },
  {
    id: "ju-verde",
    categoryId: "juices",
    name: "Jugo Verde",
    description: {
      en: "Green juice with pineapple, celery, and orange.",
      es: "Jugo verde con piña, apio y naranja.",
    },
    price: "$5.49",
    tag: POPULAR,
    filters: ["drinks"],
    image: "/images/ju-verde.jpg",
  },
];

// The 6 dishes highlighted in the Featured Dishes section.
export const featuredDishes: MenuItem[] = menu.filter((item) => item.featured);
