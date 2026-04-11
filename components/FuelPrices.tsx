'use client';

import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Minus, MapPin, Clock } from 'lucide-react';
import { fuelStations } from '@/lib/mockData';
import type { Dictionary } from '@/lib/dictionaries';

const trendIcons = {
  down: { Icon: TrendingDown, color: 'text-emerald-500' },
  up: { Icon: TrendingUp, color: 'text-brand-500' },
  stable: { Icon: Minus, color: 'text-ink-400' },
};

export function FuelPrices({ dict }: { dict: Dictionary }) {
  return (
    <section className="section bg-ink-50 dark:bg-ink-950/50 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow mb-4">{dict.fuel.eyebrow}</span>
            <h2 className="h-display text-4xl md:text-5xl mt-4">{dict.fuel.title}</h2>
            <p className="mt-3 text-lg text-ink-600 dark:text-ink-400">{dict.fuel.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-ink-500">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
              <span className="relative rounded-full w-2 h-2 bg-emerald-500" />
            </span>
            {dict.fuel.updated}: 2 min
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {fuelStations.map((station, i) => (
            <motion.article
              key={station.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-7"
            >
              <header className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-ink-200 dark:border-ink-800">
                <div>
                  <h3 className="font-display text-xl font-semibold">{station.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-500">
                    <MapPin className="w-3.5 h-3.5" />
                    {station.address}, {station.city}
                  </p>
                </div>
                {station.open247 && (
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-200 dark:border-emerald-900">
                    <Clock className="w-3 h-3" />
                    {dict.fuel.open247}
                  </span>
                )}
              </header>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {station.prices.map((p) => {
                  const { Icon, color } = trendIcons[p.trend];
                  return (
                    <div key={p.type} className="relative p-4 rounded-2xl bg-ink-50 dark:bg-ink-950/70 border border-ink-200/60 dark:border-ink-800">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-ink-500">{p.type}</span>
                        <Icon className={`w-3.5 h-3.5 ${color}`} />
                      </div>
                      <div className="mt-1 font-display text-2xl font-bold tabular-nums">
                        {p.price.toFixed(2)}
                        <span className="text-xs font-medium text-ink-500 ml-1">zł/l</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="mt-6 btn-ghost w-full">
                <MapPin className="w-4 h-4" />
                {dict.fuel.directions}
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
