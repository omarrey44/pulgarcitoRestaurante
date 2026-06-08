"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  UtensilsCrossed,
  BookOpen,
} from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./BrandIcons";
import UberEatsLabel from "./UberEatsLabel";
import { useLanguage } from "@/context/LanguageContext";
import { translations as tr } from "@/data/translations";
import { restaurant } from "@/data/restaurant";

export default function Location() {
  const { lang } = useLanguage();

  return (
    <section id="location" className="masa-grain py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow-burgundy mb-3">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {tr.location.eyebrow[lang]}
          </span>
          <h2 className="section-title">{tr.location.title[lang]}</h2>
          <p className="mt-3 text-charcoal-light">{tr.location.subtitle[lang]}</p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Map card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border-4 border-white shadow-warm"
          >
            {/* Google Maps embed — swap restaurant.mapEmbed for an exact place embed if desired. */}
            <iframe
              title="Pulgarcito Family Restaurant location"
              src={restaurant.mapEmbed}
              className="h-80 w-full lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          {/* Contact + actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Info cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={MapPin} title={tr.location.address[lang]}>
                {restaurant.address}
              </InfoCard>
              <InfoCard icon={Phone} title={tr.location.phone[lang]}>
                <a href={restaurant.phoneHref} className="hover:text-ember">
                  {restaurant.phone}
                </a>
              </InfoCard>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-burgundy/10 bg-white p-5 shadow-warm-sm">
              <div className="mb-3 flex items-center gap-2 font-serif text-lg font-semibold text-burgundy">
                <Clock className="h-5 w-5 text-ember" />
                {tr.location.hours[lang]}
              </div>
              <ul className="space-y-1.5 text-sm">
                {restaurant.hours.map((h) => (
                  <li key={h.day.en} className="flex justify-between gap-4">
                    <span className="text-charcoal-light">{h.day[lang]}</span>
                    <span className="font-semibold text-charcoal">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={restaurant.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-4 !py-3 text-sm"
              >
                <Navigation className="h-4 w-4" />
                {tr.location.directions[lang]}
              </a>
              <a href={restaurant.phoneHref} className="btn-secondary !px-4 !py-3 text-sm">
                <Phone className="h-4 w-4" />
                {tr.location.call[lang]}
              </a>
              <a
                href={restaurant.uberEats}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-4 !py-3 text-sm"
              >
                <UtensilsCrossed className="h-4 w-4" />
                <UberEatsLabel />
              </a>
              <a href="#menu" className="btn-secondary !px-4 !py-3 text-sm">
                <BookOpen className="h-4 w-4" />
                {tr.location.viewMenu[lang]}
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-charcoal-light">
                {tr.location.follow[lang]}:
              </span>
              <a
                href={restaurant.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-gradient text-cream shadow-warm-sm transition hover:-translate-y-0.5"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={restaurant.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-gradient text-cream shadow-warm-sm transition hover:-translate-y-0.5"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-burgundy/10 bg-white p-5 shadow-warm-sm">
      <div className="mb-1 flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-warm-gradient text-cream">
          <Icon className="h-4 w-4" />
        </span>
        <span className="font-serif text-base font-semibold text-burgundy">{title}</span>
      </div>
      <p className="mt-1 text-sm text-charcoal-light">{children}</p>
    </div>
  );
}
