'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Bus, Truck, Fuel, Wrench, Compass, CircleDot } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

const icons = [Bus, Truck, Fuel, Wrench, Compass, CircleDot];

const images = [
  '/svc-transport.jpg',
  '/svc-charter.jpg',
  '/svc-fuel.jpg',
  '/svc-inspection.jpg',
  '/svc-travel.jpg',
  '/svc-tires.jpg',
];

export function ServicesGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section relative">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow mb-4">{dict.services.eyebrow}</span>
          <h2 className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4">{dict.services.title}</h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-400 text-pretty">{dict.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dict.services.items.map((item, i) => {
            const Icon = icons[i] ?? Bus;
            const img = images[i] ?? images[0];
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
                  className="group relative block card h-full overflow-hidden hover:border-brand-300 dark:hover:border-brand-800 hover:shadow-2xl hover:shadow-brand-600/10 transition-all duration-300"
                >
                  {/* Image banner */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink-200 dark:bg-ink-800">
                    <Image
                      src={img}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />

                    {/* Floating icon badge */}
                    <div className="absolute bottom-3 left-3 w-12 h-12 rounded-2xl bg-white/95 dark:bg-ink-900/95 backdrop-blur-md grid place-items-center text-brand-600 dark:text-brand-400 shadow-lg ring-1 ring-white/40 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <Icon className="w-5 h-5" strokeWidth={2.2} />
                    </div>

                    {/* Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-white/95 dark:bg-ink-900/95 text-brand-700 dark:text-brand-400 backdrop-blur-md shadow-md">
                        {item.tag}
                      </span>
                    </div>

                    <ArrowUpRight className="absolute top-3 right-3 w-5 h-5 text-white drop-shadow-lg group-hover:rotate-12 transition-transform" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-brand-500/0 group-hover:bg-brand-500/15 blur-3xl transition-all duration-500" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
