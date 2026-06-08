# Pulgarcito Family Restaurant 🇸🇻

Premium bilingual (EN/ES) website for **Pulgarcito Family Restaurant**, a Salvadoran family restaurant at 2500 W Pico Blvd, Los Angeles, CA.

Built with **Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · lucide-react**. No backend — all content lives in static data files. Deploy-ready for Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Project structure

```
app/            layout (fonts, SEO metadata), page (section order), globals.css
components/     Navbar, Hero, FeaturedDishes, MenuSection, MenuCard, About,
                Reviews, Gallery, Location, Footer, LanguageToggle
context/        LanguageContext (EN/ES toggle + localStorage)
data/           menu.ts, reviews.ts, translations.ts, restaurant.ts
public/images/  logo.png (real) + drop real photos here
```

## How to customize

| What | Where |
|------|-------|
| Menu items & prices | `data/menu.ts` — **verify against the Uber Eats store** |
| Featured 6 dishes | `featured: true` flag in `data/menu.ts` |
| Reviews | `data/reviews.ts` |
| All UI text (EN/ES) | `data/translations.ts` |
| Phone, hours, address, socials, Uber Eats / Maps links | `data/restaurant.ts` |
| Brand colors | `tailwind.config.ts` (`burgundy`, `ember`, `cream`, `salva`) |

## Replacing placeholder images

Food images are currently warm-gradient + emoji placeholders. Each shows its
target path (e.g. `/images/hero-food.jpg`). Drop real photos into
`public/images/` and replace the placeholder `<div>`s with `next/image`, e.g.:

```tsx
import Image from "next/image";

<Image src="/images/pupusa-revuelta.jpg" alt="Pupusa Revuelta" fill className="object-cover" />
```

Suggested filenames: `hero-food.jpg`, `pupusa-revuelta.jpg`, `pupusa-queso.jpg`,
`sopa-gallina.jpg`, `platanos-fritos.jpg`, `horchata.jpg`, `carne-asada.jpg`,
`desayuno-salvadoreno.jpg`, `restaurant-interior.jpg`, and the `gallery-*.jpg` set.

## Deploy to Vercel

Push to GitHub and import the repo at vercel.com — zero config needed.

---
TODO before launch: confirm real **phone**, **hours**, and **social links** in `data/restaurant.ts`, and verify menu prices.
