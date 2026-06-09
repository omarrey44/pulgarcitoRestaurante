"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations as tr } from "@/data/translations";
import { reviews } from "@/data/reviews";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Reviews() {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  // On desktop we show all three at once; on mobile we page through one at a time.
  const go = (dir: number) =>
    setIndex((prev) => (prev + dir + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="relative overflow-hidden bg-burgundy py-20 text-cream md:py-28">
      <div className="textile-bg absolute inset-0 opacity-30" />
      <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-ember/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow-cream mb-3">
            <span className="text-gold" aria-hidden="true">★</span>
            {tr.reviews.eyebrow[lang]}
          </span>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
            {tr.reviews.title[lang]}
          </h2>
          <p className="mt-3 text-cream/80">{tr.reviews.subtitle[lang]}</p>
        </motion.div>

        {/* Desktop: all cards */}
        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-3">
          {reviews.map((review, i) => (
            <ReviewCard key={review.id} review={review} lang={lang} delay={i * 0.1} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="mt-12 md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                // Swipe left → next, swipe right → previous
                if (info.offset.x < -60 || info.velocity.x < -400) go(1);
                else if (info.offset.x > 60 || info.velocity.x > 400) go(-1);
              }}
              className="cursor-grab touch-pan-y active:cursor-grabbing"
            >
              <ReviewCard review={reviews[index]} lang={lang} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/15 backdrop-blur transition hover:bg-cream/25"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-cream" : "w-2.5 bg-cream/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/15 backdrop-blur transition hover:bg-cream/25"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-2xl text-center font-serif text-xl italic text-cream/90 sm:text-2xl"
        >
          {tr.reviews.cta[lang]}
        </motion.p>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  lang,
  delay = 0,
}: {
  review: (typeof reviews)[number];
  lang: "en" | "es";
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative rounded-3xl bg-cream p-7 pt-9 text-charcoal shadow-warm"
    >
      {/* Decorative bookmark ribbon */}
      <span className="absolute left-7 top-0 h-9 w-6 -translate-y-1 rounded-b-md bg-ember shadow-md after:absolute after:left-0 after:top-full after:border-x-[12px] after:border-t-[6px] after:border-x-transparent after:border-t-ember" />

      <div className="flex justify-center gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="mt-5 text-center font-serif text-lg italic leading-relaxed text-charcoal-light">
        &ldquo;{review.text[lang]}&rdquo;
      </p>

      <div className="mt-6 flex flex-col items-center gap-2">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-warm-gradient font-bold text-cream shadow-warm-sm">
          {initials(review.name)}
        </span>
        <span className="text-sm font-semibold text-burgundy">— {review.name}</span>
        {review.badge && (
          <span className="rounded-full bg-burgundy/10 px-2.5 py-0.5 text-[11px] font-semibold text-burgundy/70">
            {review.badge}
          </span>
        )}
      </div>
    </motion.div>
  );
}
