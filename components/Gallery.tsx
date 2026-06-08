"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations as tr } from "@/data/translations";

// Uses available real dish photos; the last tile (interior) stays as a gradient
// placeholder until a restaurant photo is supplied at /images/gallery-interior.jpg.
const tiles = [
  {
    src: "/images/pupusa-revuelta.png",
    name: { en: "Handmade Pupusas", es: "Pupusas Hechas a Mano" },
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/sopa-gallinas.png",
    name: { en: "Sopa de Gallina India", es: "Sopa de Gallina India" },
    span: "",
  },
  {
    src: "/images/horchata.png",
    name: { en: "Frescos Naturales", es: "Frescos Naturales" },
    span: "",
  },
  {
    src: "/images/camarones.jpg",
    name: { en: "Fresh Shrimp", es: "Camarones Frescos" },
    span: "",
  },
  {
    src: "/images/platanos-fritos.png",
    name: { en: "Plátanos Fritos", es: "Plátanos Fritos" },
    span: "",
  },
  {
    src: "/images/carne-asada.png",
    name: { en: "Carne Asada", es: "Carne Asada" },
    span: "sm:col-span-2",
  },
];

export default function Gallery() {
  const { lang } = useLanguage();

  return (
    <section id="gallery" className="bg-cream-dark py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow-ember mb-3">
            {tr.gallery.eyebrow[lang]}
          </span>
          <h2 className="section-title">{tr.gallery.title[lang]}</h2>
          <p className="mt-3 text-charcoal-light">{tr.gallery.subtitle[lang]}</p>
        </motion.div>

        <div
          className="mt-12 grid auto-rows-[14rem] grid-cols-2 gap-4 lg:grid-cols-4"
          role="list"
          aria-label={lang === "es" ? "Galería de platillos" : "Food gallery"}
        >
          {tiles.map((tile, i) => (
            <motion.figure
              key={i}
              role="listitem"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-3xl shadow-warm-sm ${tile.span}`}
            >
              {tile.src ? (
                <Image
                  src={tile.src}
                  alt={tile.name[lang]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              ) : (
                // Placeholder for restaurant interior — replace with real photo
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-ember-gradient text-cream/60">
                  <span className="text-5xl">🏮</span>
                  <span className="mt-2 text-xs opacity-60">/images/gallery-interior.jpg</span>
                </div>
              )}

              {/* Persistent bottom label + hover darkening */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/75 via-burgundy-dark/10 to-transparent transition-all duration-300 group-hover:from-burgundy-dark/85" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <span className="font-serif text-sm font-semibold leading-tight text-cream drop-shadow sm:text-base">
                  {tile.name[lang]}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
