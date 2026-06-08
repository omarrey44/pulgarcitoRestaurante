"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations as tr } from "@/data/translations";
import type { MenuItem } from "@/data/menu";

export default function MenuCard({ item }: { item: MenuItem }) {
  const { lang } = useLanguage();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative flex min-h-[160px] overflow-hidden rounded-2xl border border-burgundy/10 bg-white shadow-warm-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/30 hover:shadow-warm sm:min-h-[180px]"
    >
      {/* Image — left column, fixed width */}
      <div className="relative w-36 shrink-0 sm:w-44">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.nameEs ?? item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 144px, 176px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-ember-gradient text-4xl">
            🍽️
          </div>
        )}
        {/* Popular badge */}
        {item.popular && (
          <span className="absolute left-2 top-2 rounded-full bg-burgundy px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cream shadow">
            {tr.filters.popular[lang]}
          </span>
        )}
      </div>

      {/* Content — right column */}
      <div className="flex min-w-0 flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-serif text-base font-bold leading-tight text-burgundy sm:text-lg">
              {item.name}
            </h4>
            <span className="shrink-0 text-base font-bold text-ember sm:text-lg">
              {item.price}
            </span>
          </div>
          {item.nameEs && item.nameEs !== item.name && (
            <p className="mt-0.5 text-xs italic text-charcoal-light">{item.nameEs}</p>
          )}
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal-light">
            {item.description[lang]}
          </p>
        </div>

        {item.rating && (
          <div className="mt-3 flex items-center gap-1.5 text-xs">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-charcoal">{item.rating}%</span>
            {item.reviewCount && (
              <span className="text-charcoal-light">
                · {item.reviewCount} {tr.menu.reviews[lang]}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
