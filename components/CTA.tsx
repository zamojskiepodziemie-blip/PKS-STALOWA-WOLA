'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

export function CTA({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-ink-900 dark:bg-ink-900 p-10 md:p-16 lg:p-20"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-ink-900" />
          <div className="absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-20" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-400/20 blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-400/30 blur-3xl translate-y-1/2 -translate-x-1/3" />

          <div className="relative max-w-3xl">
            <h2 className="h-display text-4xl md:text-5xl lg:text-6xl text-white">
              {dict.cta.title}
            </h2>
            <p className="mt-5 text-lg md:text-xl text-white/80 max-w-xl text-pretty">
              {dict.cta.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={`/${locale}/schedule`} className="btn bg-white text-ink-900 hover:bg-ink-100 group">
                {dict.cta.primary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href={`/${locale}/contact`} className="btn bg-white/10 text-white border border-white/20 backdrop-blur hover:bg-white/20">
                <Phone className="w-4 h-4" />
                {dict.cta.secondary}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
