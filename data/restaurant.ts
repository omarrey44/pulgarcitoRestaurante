// Central restaurant info. Update phone, hours, socials, and the real
// Uber Eats / Google Maps links here once confirmed with the owner.

export const restaurant = {
  name: "Pulgarcito Family Restaurant",
  address: "2500 W Pico Blvd, Los Angeles, CA 90006",
  phone: "(213) 388-6635",
  phoneHref: "tel:+12133886635",
  // Real Uber Eats store link
  uberEats:
    "https://www.ubereats.com/store/pulgarcito-family-restaurant/569BCyJhQyu8BdhKDhlyvA",
  // Google Maps directions link (address pre-filled)
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=2500+W+Pico+Blvd+Los+Angeles+CA+90006",
  // Google Maps embed URL (address query). Replace with an exact place embed if desired.
  mapEmbed:
    "https://www.google.com/maps?q=2500+W+Pico+Blvd,+Los+Angeles,+CA+90006&output=embed",
  // TODO: confirm real hours with the owner
  hours: [
    { day: { en: "Monday – Thursday", es: "Lunes – Jueves" }, time: "8:00 AM – 9:00 PM" },
    { day: { en: "Friday", es: "Viernes" }, time: "8:00 AM – 11:00 PM" },
    { day: { en: "Saturday", es: "Sábado" }, time: "7:00 AM – 11:00 PM" },
    { day: { en: "Sunday", es: "Domingo" }, time: "7:00 AM – 9:00 PM" },
  ],
  // TODO: replace with real social media handles/links
  social: {
    instagram: "https://www.instagram.com/pulgarcitorestaurant/",
    facebook: "https://www.facebook.com/pulgarcito.familyrestaurant",
    tiktok: "https://tiktok.com/",
  },
} as const;
