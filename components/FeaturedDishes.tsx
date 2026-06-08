"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations as tr } from "@/data/translations";
import { featuredDishes } from "@/data/menu";
import { useCountUp } from "@/hooks/useCountUp";

// Fallback emoji if image is missing
const emojiById: Record<string, string> = {
  "pup-revuelta": "🫓",
  "pup-queso": "🧀",
  "sp-gallina": "🍲",
  "ap-platanos": "🍌",
  "fr-horchata": "🥤",
  "ac-carne-asada": "🥩",
};

function RatingBadge({
  rating,
  reviewCount,
  reviews,
  sectionVisible,
}: {
  rating: number;
  reviewCount?: number;
  reviews: string;
  sectionVisible: boolean;
}) {
  const count = useCountUp(rating, sectionVisible, 1200);
  return (
    <div className="mt-4 flex items-center gap-1.5 text-sm">
      <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
      <span className="font-bold tabular-nums text-charcoal">{count}%</span>
      {reviewCount && (
        <span className="text-charcoal-light">
          · {reviewCount} {reviews}
        </span>
      )}
    </div>
  );
}

export default function FeaturedDishes() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="favorites" ref={sectionRef} className="masa-grain maiz-pattern relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow-ember mb-3">
            <span className="text-gold" aria-hidden="true">★</span>
            {tr.featured.eyebrow[lang]}
          </span>
          <h2 className="section-title">{tr.featured.title[lang]}</h2>
          <p className="mt-3 text-charcoal-light">{tr.featured.subtitle[lang]}</p>
        </motion.div>

        {/* Cards grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDishes.map((dish, i) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              aria-label={dish.name}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-warm-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-warm"
            >
              {/* Dish photo */}
              <div className="relative h-52 overflow-hidden bg-ember-gradient">
                {dish.image ? (
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-6xl">
                    {emojiById[dish.id] ?? "🍽️"}
                  </span>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Warm glow on hover */}
                <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30 bg-ember" />
                {dish.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-burgundy shadow-warm-sm">
                    {dish.tag[lang]}
                  </span>
                )}
                {/* Price badge floating on image */}
                <span className="absolute bottom-3 right-3 rounded-full bg-burgundy/90 px-3 py-1 font-bold text-cream shadow backdrop-blur">
                  {dish.price}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold leading-snug text-burgundy">
                  {dish.name}
                </h3>
                {dish.nameEs && dish.nameEs !== dish.name && (
                  <p className="text-sm italic text-charcoal-light">{dish.nameEs}</p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                  {dish.description[lang]}
                </p>

                {dish.rating && (
                  <RatingBadge
                    rating={dish.rating}
                    reviewCount={dish.reviewCount}
                    reviews={tr.menu.reviews[lang]}
                    sectionVisible={isInView}
                  />
                )}
              </div>

              {/* Bottom accent bar — slides in on hover */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-warm-gradient transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
