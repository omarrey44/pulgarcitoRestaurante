"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { HandPlatter, Users, GlassWater, PartyPopper, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations as tr } from "@/data/translations";
import { useCountUp } from "@/hooks/useCountUp";

// Exterior + interior as heroes (row-span-2), food tiles below.
const collage = [
  { src: "/images/exterior.png",        alt: "Fachada de Pulgarcito",         span: "col-span-2 row-span-2" },
  { src: "/images/gallery-interior.jpg", alt: "Interior del restaurante",      span: "row-span-2" },
  { src: "/images/parrillada.jpg",       alt: "Parrillada familiar",           span: "" },
  { src: "/images/camarones.jpg",        alt: "Camarones frescos",             span: "" },
  { src: "/images/desayuno-salvadoreno.jpg", alt: "Desayuno típico salvadoreño", span: "" },
];

const stats = [
  { value: 15, suffix: "+", label: { en: "Years in LA", es: "Años en LA" } },
  { value: 4, suffix: ".8★", label: { en: "Rating", es: "Calificación" } },
  { value: 100, suffix: "%", label: { en: "Salvadoran Soul", es: "Alma Salvadoreña" } },
];

function StatNumber({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const n = useCountUp(value, active, 1600);
  return (
    <span className="font-serif text-4xl font-bold leading-none text-burgundy">
      {n}{suffix}
    </span>
  );
}

function BananaLeaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M40,220 C18,165 2,110 8,55 C14,8 28,0 40,0 C52,0 66,8 72,55 C78,110 62,165 40,220 Z" fill="currentColor" />
      <line x1="40" y1="0" x2="40" y2="220" stroke="white" strokeWidth="2" opacity="0.2" />
      <path d="M40,55 L18,75 M40,90 L12,107 M40,125 L16,135 M40,160 L20,168" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.12" />
      <path d="M40,55 L62,75 M40,90 L68,107 M40,125 L64,135 M40,160 L60,168" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.12" />
    </svg>
  );
}

export default function About() {
  const { lang } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setZoomSrc(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const features = [
    { icon: HandPlatter, label: tr.about.feature1[lang] },
    { icon: Users, label: tr.about.feature2[lang] },
    { icon: GlassWater, label: tr.about.feature3[lang] },
    { icon: PartyPopper, label: tr.about.feature4[lang] },
  ];

  return (
    <section id="about" className="masa-grain relative overflow-hidden py-20 md:py-28">
      {/* Banana leaf decorations — Salvadoran culinary symbol */}
      <BananaLeaf className="pointer-events-none absolute -right-6 -top-10 h-72 rotate-[20deg] text-ember/15 lg:h-96" />
      <BananaLeaf className="pointer-events-none absolute -bottom-20 -left-6 h-64 -rotate-[15deg] text-burgundy/10 lg:h-80" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: photo collage — exterior + interior as heroes, food below */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-3"
          style={{ gridTemplateRows: "auto auto auto" }}
        >
          {collage.map((tile, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setZoomSrc(tile.src)}
              aria-label={`Ampliar: ${tile.alt}`}
              className={`group relative cursor-zoom-in overflow-hidden rounded-2xl bg-ember-gradient shadow-warm-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ember ${tile.span}`}
              style={{ minHeight: i < 2 ? "200px" : "130px" }}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              {/* zoom hint */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                <span className="scale-0 rounded-full bg-white/90 p-2 text-burgundy opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Lightbox */}
        {zoomSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setZoomSrc(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Imagen ampliada"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-h-[90vh] max-w-5xl w-full overflow-hidden rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={zoomSrc}
                alt="Imagen ampliada"
                width={1200}
                height={800}
                className="h-auto max-h-[90vh] w-full object-contain"
              />
              <button
                onClick={() => setZoomSrc(null)}
                aria-label="Cerrar"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-black/80"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Right: story */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow-burgundy mb-3">
            {tr.about.eyebrow[lang]}
          </span>
          <h2 className="section-title">{tr.about.title[lang]}</h2>

          <p className="mt-5 text-lg leading-relaxed text-charcoal-light">
            {tr.about.body[lang]}
          </p>

          {/* Decorative quote */}
          <blockquote className="mt-6 flex items-start gap-3 rounded-2xl border-l-4 border-ember bg-white/60 p-4">
            <Quote className="h-6 w-6 shrink-0 text-ember" aria-hidden="true" />
            <p className="font-serif text-lg italic text-burgundy">
              {tr.about.quote[lang]}
            </p>
          </blockquote>

          {/* Feature icons */}
          <ul className="mt-8 grid grid-cols-2 gap-4" role="list">
            {features.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-warm-gradient text-cream shadow-warm-sm"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-charcoal">{label}</span>
              </li>
            ))}
          </ul>

          {/* Animated stats strip */}
          <div
            ref={statsRef}
            className="mt-10 grid grid-cols-3 divide-x divide-burgundy/15 overflow-hidden rounded-2xl border border-burgundy/10 bg-white/70 shadow-warm-sm"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center gap-1 py-5"
              >
                <StatNumber value={s.value} suffix={s.suffix} active={statsInView} />
                <span className="text-xs font-semibold uppercase tracking-wide text-charcoal-light">
                  {s.label[lang]}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
