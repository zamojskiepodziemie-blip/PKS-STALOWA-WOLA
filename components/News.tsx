'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { newsItems } from '@/lib/mockData';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

const newsImages = [
  '/news-connections.jpg',
  '/news-fleet.svg',
  '/news-promo.jpg',
];

export function News({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items = newsItems[locale] ?? newsItems.pl;

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow mb-4">{dict.news.eyebrow}</span>
            <h2 className="h-display text-4xl md:text-5xl mt-4">{dict.news.title}</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((n, i) => (
            <motion.article
              key={n.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card overflow-hidden hover:border-brand-300 dark:hover:border-brand-800 hover:shadow-xl transition-all"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-ink-200 dark:bg-ink-800">
                <Image
                  src={newsImages[i] ?? newsImages[0]}
                  alt={n.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-white/95 text-ink-900 backdrop-blur shadow-md">
                    {n.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <time className="text-xs text-ink-500">{n.date}</time>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-brand-600 transition-colors">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-400 line-clamp-2">{n.excerpt}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  {dict.news.readMore}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
