'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, ShieldCheck, Star } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';
import { SearchWidget } from './SearchWidget';
import { BusIllustration } from './BusIllustration';
import { CityTicker } from './CityTicker';
import { Logo } from './Logo';

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative pt-36 sm:pt-32 md:pt-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[size:64px_64px] mask-fade-b opacity-40 -z-10" />
      <div className="absolute inset-0 bg-radial-fade -z-10" />
      <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-brand-500/15 blur-3xl -z-10" />
      <div className="absolute top-40 -left-32 w-[400px] h-[400px] rounded-full bg-sun-400/15 blur-3xl -z-10" />
      {/* Top accent stripes */}
      <div className="absolute top-0 right-0 w-1/4 h-2 bg-brand-600 -z-10" />
      <div className="absolute top-0 right-1/4 w-[8%] h-2 bg-sun-400 -z-10" />
      <div className="absolute top-0 right-[33%] w-[6%] h-2 bg-sky-600 -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          {/* LEFT — copy */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-20 flex flex-wrap items-start sm:items-center gap-2 sm:gap-3 mb-6"
            >
              <span className="eyebrow w-fit">
                <ShieldCheck className="w-3 h-3" />
                {dict.hero.eyebrow}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-sun-50 dark:bg-sun-950/40 text-sun-700 dark:text-sun-400 border border-sun-200 dark:border-sun-900 w-fit">
                <Star className="w-3 h-3 fill-current" />
                4.8/5 · 2400+ opinii
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] whitespace-pre-line"
            >
              {dict.hero.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mt-7 relative max-w-[720px]"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ink-900/20 ring-1 ring-ink-200/60 dark:ring-ink-800">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/autobus-2.jpg"
                    alt="Autobusy PKS Stalowa Wola"
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    className="object-cover"
                    priority
                  />
                  {/* Subtle bottom gradient just for caption legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  {/* Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-ink-900/90 backdrop-blur-md shadow-lg">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-75" />
                      <span className="relative rounded-full w-2 h-2 bg-brand-600" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-900 dark:text-white">
                      Nasza flota
                    </span>
                  </div>
                  {/* Bottom caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 text-white">
                    <div className="font-display text-sm sm:text-lg font-bold leading-tight drop-shadow-lg">
                      Nowoczesne autokary PKS
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/85 mt-0.5 drop-shadow">
                      Komfort i bezpieczeństwo na każdej trasie
                    </div>
                  </div>
                </div>
              </div>

              {/* Logo on the sky (top center) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 140 }}
                whileHover={{ scale: 1.08 }}
                className="absolute top-[-2%] sm:top-[-13%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
              >
                <div className="relative w-24 h-24 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72">
                  <Image
                    src="/pksstwola-logo.png"
                    alt="Logo PKS Stalowa Wola S.A."
                    fill
                    sizes="(min-width: 1024px) 288px, (min-width: 768px) 240px, 208px"
                    className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-ink-600 dark:text-ink-400 max-w-xl text-pretty"
            >
              {dict.hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-5 flex items-center gap-3 max-w-xl"
            >
              <span className="h-px flex-shrink-0 w-8 bg-brand-600" />
              <span className="font-display font-semibold text-base md:text-lg text-ink-900 dark:text-white italic">
                Twój komfort i bezpieczeństwo to <span className="text-brand-600 not-italic">Nasz priorytet.</span>
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3"
            >
              <Link href={`/${locale}/schedule`} className="btn-primary group">
                {dict.hero.cta1}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a href="tel:+48158425811" className="btn-outline">
                <Phone className="w-4 h-4" />
                +48 15 842 58 11
              </a>
            </motion.div>
          </div>

          {/* RIGHT — bus illustration */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <Logo variant="mark" className="w-[520px] h-[520px] opacity-[0.04] dark:opacity-[0.08]" />
            </div>
            <BusIllustration className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl" />
          </div>
        </div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 lg:mt-8 max-w-5xl mx-auto relative z-20"
        >
          <SearchWidget locale={locale} dict={dict} />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 sm:mt-16 md:mt-24 mb-12 sm:mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 max-w-4xl mx-auto"
        >
          {dict.hero.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
              className="text-center"
            >
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-brand-600 via-brand-700 to-sky-700 dark:from-brand-400 dark:via-brand-500 dark:to-sky-500 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-ink-500 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <CityTicker />
    </section>
  );
}
