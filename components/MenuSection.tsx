"use client";

import { useMemo, useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Sun,
  Wheat,
  Leaf,
  UtensilsCrossed,
  Soup,
  Cookie,
  Plus,
  Fish,
  Wine,
  Utensils,
  Sandwich,
  Flame,
  GlassWater,
  Droplets,
  Apple,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations as tr } from "@/data/translations";
import { categories, menu } from "@/data/menu";
import MenuCard from "./MenuCard";

const categoryIcons: Record<string, LucideIcon> = {
  breakfast: Sun,
  pupusas: Wheat,
  appetizers: Leaf,
  alacarta: UtensilsCrossed,
  soups: Soup,
  botanas: Cookie,
  sides: Plus,
  seafood: Fish,
  cocktails: Wine,
  mexican: Utensils,
  cheeseburger: Sandwich,
  parrilladas: Flame,
  sodas: GlassWater,
  frescos: Droplets,
  juices: Apple,
};


export default function MenuSection() {
  const { lang } = useLanguage();
  const [activeCat, setActiveCat] = useState<string>(categories[0].id);
  const [query, setQuery] = useState("");
  const tabsRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = tabsRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scrollTabs = (dir: "left" | "right") => {
    tabsRef.current?.scrollBy({ left: dir === "right" ? 220 : -220, behavior: "smooth" });
  };

  // Search mode: ignore active category, search whole menu.
  const searching = query.trim().length > 0;

  const visibleItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu.filter((item) => {
      if (!searching && item.categoryId !== activeCat) return false;

      if (q) {
        const haystack = [
          item.name,
          item.nameEs ?? "",
          item.description.en,
          item.description.es,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [activeCat, query, searching]);

  return (
    <section id="menu" className="relative bg-cream-dark py-20 md:py-28">
      <div className="textile-bg absolute inset-0 opacity-[0.06]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow-burgundy mb-3">
            {tr.menu.eyebrow[lang]}
          </span>
          <h2 className="section-title">{tr.menu.title[lang]}</h2>
          <p className="mt-3 text-charcoal-light">{tr.menu.subtitle[lang]}</p>
        </motion.div>

        {/* Search + filter chips */}
        <div className="mx-auto mt-8 max-w-3xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-burgundy/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={tr.menu.search[lang]}
              className="w-full rounded-full border border-burgundy/15 bg-white py-3.5 pl-12 pr-4 text-charcoal shadow-warm-sm outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/20"
            />
          </div>

        </div>

        {/* Category tabs with icons (hidden while searching/filtering) */}
        {!searching && (
          <div className="relative mt-8">
            {/* Left arrow */}
            {canLeft && (
              <button
                onClick={() => scrollTabs("left")}
                aria-label="Scroll tabs left"
                className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-3 flex h-8 w-8 items-center justify-center rounded-full border border-burgundy/15 bg-white shadow-warm-sm text-burgundy transition hover:bg-burgundy hover:text-cream"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
            {/* Right arrow */}
            {canRight && (
              <button
                onClick={() => scrollTabs("right")}
                aria-label="Scroll tabs right"
                className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-3 flex h-8 w-8 items-center justify-center rounded-full border border-burgundy/15 bg-white shadow-warm-sm text-burgundy transition hover:bg-burgundy hover:text-cream"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
            {/* Fade edges */}
            {canLeft && <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 rounded-l-2xl bg-gradient-to-r from-[#F3E7D3] to-transparent" />}
            {canRight && <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 rounded-r-2xl bg-gradient-to-l from-[#F3E7D3] to-transparent" />}

            <div
              ref={tabsRef}
              className="no-scrollbar overflow-x-auto rounded-2xl border border-burgundy/10 bg-white shadow-warm-sm"
            >
              <div className="flex min-w-max gap-1 px-2 py-2">
                {categories.map((cat) => {
                  const Icon = categoryIcons[cat.id] ?? UtensilsCrossed;
                  const active = activeCat === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCat(cat.id)}
                      className={`flex flex-col items-center gap-1.5 rounded-xl px-4 py-2.5 transition-all duration-200 ${
                        active
                          ? "bg-burgundy/5 text-burgundy"
                          : "text-charcoal-light hover:bg-burgundy/5 hover:text-burgundy"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 transition-colors ${active ? "text-ember" : ""}`}
                        strokeWidth={1.5}
                      />
                      <span className={`relative whitespace-nowrap text-xs font-semibold ${active ? "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-ember after:content-['']" : ""}`}>
                        {cat.name[lang]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Items */}
        <motion.div layout className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleItems.length === 0 && (
          <p className="mt-10 text-center text-charcoal-light">{tr.menu.noResults[lang]}</p>
        )}
      </div>
    </section>
  );
}
