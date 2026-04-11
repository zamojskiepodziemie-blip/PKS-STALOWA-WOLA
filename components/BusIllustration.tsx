'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function BusIllustration({ className }: { className?: string }) {
  return (
    <div
      className={`relative ${className ?? ''}`}
      role="img"
      aria-label="Mapa Polski z lokalizacją PKS Stalowa Wola"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="relative w-full aspect-[1/0.92] flex items-center justify-center"
      >
        <div className="relative w-[88%] h-full">
          <Image
            src="/mapa.png"
            alt="Mapa Polski"
            fill
            sizes="(min-width: 1024px) 520px, 80vw"
            className="object-contain drop-shadow-[0_18px_36px_rgba(0,0,0,0.25)]"
            priority
          />

          {/* Connected city pins */}
          {[
            { name: 'Warszawa', left: '58%', top: '38%', delay: 1.5 },
            { name: 'Lublin', left: '75%', top: '53%', delay: 1.65 },
            { name: 'Kraków', left: '58%', top: '78%', delay: 1.8 },
            { name: 'Rzeszów', left: '76%', top: '78%', delay: 1.95 },
          ].map((city) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: -6, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: city.delay, type: 'spring', stiffness: 240 }}
              className="absolute"
              style={{ left: city.left, top: city.top }}
            >
              <div className="relative -translate-x-1/2 -translate-y-full flex flex-col items-center">
                <div className="relative w-3 h-3">
                  <div className="absolute inset-0 rounded-full bg-sky-600 ring-2 ring-white shadow-md" />
                  <div className="absolute inset-0 rounded-full bg-sky-500 animate-ping opacity-50" />
                </div>
                <span className="mt-1 px-1.5 py-0.5 rounded bg-white/95 dark:bg-ink-900/95 text-[8px] md:text-[9px] font-bold uppercase tracking-wide text-sky-700 dark:text-sky-400 shadow-sm whitespace-nowrap ring-1 ring-sky-200 dark:ring-sky-900">
                  {city.name}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Pin marking Stalowa Wola (HQ — larger, brand color) */}
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1, type: 'spring', stiffness: 260 }}
            className="absolute z-10"
            style={{ left: '74%', top: '70%' }}
          >
            <div className="relative -translate-x-1/2 -translate-y-full flex flex-col items-center">
              <div className="relative w-5 h-5">
                <div className="absolute inset-0 rounded-full bg-brand-600 ring-4 ring-white shadow-lg" />
                <div className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-60" />
              </div>
              <span className="mt-1.5 px-2.5 py-1 rounded-md bg-white/95 dark:bg-ink-900/95 text-[10px] md:text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 shadow-md whitespace-nowrap animate-pulse-soft ring-1 ring-brand-200 dark:ring-brand-900">
                Stalowa Wola
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated road under the map (driving motion) */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' }}
        className="relative mx-auto w-[80%] max-w-md h-24 overflow-hidden text-ink-900 dark:text-white"
      >
        {/* Top dashed edge line */}
        <div
          className="absolute top-1 left-0 right-0 h-[6px]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, currentColor 0 18px, transparent 18px 30px)',
          }}
        />
        {/* Bottom dashed edge line */}
        <div
          className="absolute bottom-1 left-0 right-0 h-[6px]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, currentColor 0 18px, transparent 18px 30px)',
          }}
        />

        {/* Center animated marquee text */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <motion.div
            className="flex items-center gap-8 flex-shrink-0 whitespace-nowrap"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className="font-display font-extrabold text-xs md:text-sm uppercase tracking-[0.2em] text-sun-500 drop-shadow-[0_0_6px_rgba(250,204,21,0.5)] flex-shrink-0"
              >
                PKS Stalowa Wola
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
