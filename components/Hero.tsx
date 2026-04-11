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
    <section className="relative pt-32 md:pt-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[size:64px_64px] mask-fade-b opacity-40 -z-10" />
      <div className="absolute inset-0 bg-radial-fade -z-10" />
      <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-brand-500/15 blur-3xl -z-10" />
      <div className="absolute top-40 -left-32 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-3xl -z-10" />
      {/* Diagonal red accent */}
      <div className="absolute top-0 right-0 w-1/3 h-2 bg-brand-600 -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          {/* LEFT — copy */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="eyebrow">
                <ShieldCheck className="w-3 h-3" />
                {dict.hero.eyebrow}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                <Star className="w-3 h-3 fill-current" />
                4.8/5 · 2400+ opinii
              </span>
            </motion.div>

            <div className="flex items-start gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.15, type: 'spring', stiffness: 120 }}
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="flex-shrink-0 mt-2 hidden sm:block"
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                  <div className="absolute inset-0 rounded-full bg-brand-500/25 blur-2xl scale-110" />
                  <Image
                    src="/pksstwola-logo.png"
                    alt="Logo PKS Stalowa Wola S.A."
                    fill
                    sizes="(min-width: 1024px) 192px, (min-width: 768px) 160px, 128px"
                    className="object-contain drop-shadow-xl relative"
                    priority
                  />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="h-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] whitespace-pre-line"
              >
                {dict.hero.title}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg md:text-xl text-ink-600 dark:text-ink-400 max-w-xl text-pretty"
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
              className="mt-8 flex flex-wrap items-center gap-3"
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
          className="mt-8 lg:-mt-12 max-w-5xl mx-auto relative z-20"
        >
          <SearchWidget locale={locale} dict={dict} />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 md:mt-24 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl mx-auto"
        >
          {dict.hero.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-br from-brand-600 to-brand-800 dark:from-brand-400 dark:to-brand-600 bg-clip-text text-transparent">
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
