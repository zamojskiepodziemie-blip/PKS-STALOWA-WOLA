'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Bus, Truck, Fuel, Wrench, Compass, CircleDot } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

const icons = [Bus, Truck, Fuel, Wrench, Compass, CircleDot];

export function ServicesGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section relative">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow mb-4">{dict.services.eyebrow}</span>
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl mt-4">{dict.services.title}</h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-400 text-pretty">{dict.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dict.services.items.map((item, i) => {
            const Icon = icons[i] ?? Bus;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  href={`/${locale}${item.href}`}
                  className="group relative block card p-7 h-full overflow-hidden hover:border-brand-300 dark:hover:border-brand-800 hover:shadow-2xl hover:shadow-brand-600/5 transition-all duration-300"
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-brand-500/0 group-hover:bg-brand-500/10 blur-3xl transition-all duration-500" />

                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-900 grid place-items-center text-brand-600 dark:text-brand-400 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <Icon className="w-5 h-5" strokeWidth={2.2} />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-ink-400 group-hover:text-brand-600 group-hover:rotate-12 transition-all" />
                  </div>

                  <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-600 dark:text-brand-400">
                    {item.tag}
                  </span>
                  <h3 className="mt-1 text-xl font-display font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
