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

          {/* Animated bus routes — buses traveling from Stalowa Wola to each city */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="bus-glow">
                <stop offset="0" stopColor="#22c55e" stopOpacity="0.9" />
                <stop offset="0.5" stopColor="#16a34a" stopOpacity="0.4" />
                <stop offset="1" stopColor="#16a34a" stopOpacity="0" />
              </radialGradient>
            </defs>
            {[
              { id: 'wwa', d: 'M 74 70 Q 70 55 68.7 44.7', dur: '4s' },
              { id: 'lub', d: 'M 74 70 Q 80 65 84.3 61.5', dur: '2.6s' },
              { id: 'krk', d: 'M 74 70 Q 64 77 58 81.9', dur: '3.2s' },
              { id: 'rze', d: 'M 74 70 Q 77 76 78.5 82.2', dur: '1.8s' },
            ].map((r) => (
              <g key={r.id}>
                {/* Subtle route path */}
                <path
                  d={r.d}
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="0.5"
                  strokeDasharray="0.6 0.8"
                  strokeLinecap="round"
                  opacity="0.55"
                  vectorEffect="non-scaling-stroke"
                />
                <path id={`route-${r.id}`} d={r.d} fill="none" stroke="none" />

                {/* Glow halo following the bus */}
                <circle r="2.6" fill="url(#bus-glow)">
                  <animateMotion dur={r.dur} repeatCount="indefinite">
                    <mpath href={`#route-${r.id}`} />
                  </animateMotion>
                </circle>

                {/* Bus icon traveling along route */}
                <g>
                  <animateMotion dur={r.dur} repeatCount="indefinite">
                    <mpath href={`#route-${r.id}`} />
                  </animateMotion>
                  {/* Bus body */}
                  <rect x="-2.4" y="-1.25" width="4.8" height="2.5" rx="0.55" fill="#16a34a" stroke="white" strokeWidth="0.25" vectorEffect="non-scaling-stroke" />
                  {/* Roof highlight */}
                  <rect x="-2.4" y="-1.25" width="4.8" height="0.4" rx="0.55" fill="rgba(255,255,255,0.3)" />
                  {/* Windows */}
                  <rect x="-2" y="-0.85" width="0.85" height="0.95" rx="0.12" fill="#bfdbfe" />
                  <rect x="-1" y="-0.85" width="0.85" height="0.95" rx="0.12" fill="#bfdbfe" />
                  <rect x="0" y="-0.85" width="0.85" height="0.95" rx="0.12" fill="#bfdbfe" />
                  <rect x="1" y="-0.85" width="0.85" height="0.95" rx="0.12" fill="#bfdbfe" />
                  {/* Yellow stripe */}
                  <rect x="-2.4" y="0.3" width="4.8" height="0.25" fill="#facc15" />
                  {/* Wheels */}
                  <circle cx="-1.5" cy="1.4" r="0.45" fill="#0a0a0a" />
                  <circle cx="1.5" cy="1.4" r="0.45" fill="#0a0a0a" />
                  <circle cx="-1.5" cy="1.4" r="0.2" fill="#525252" />
                  <circle cx="1.5" cy="1.4" r="0.2" fill="#525252" />
                  {/* Headlight */}
                  <circle cx="-2.25" cy="-0.2" r="0.18" fill="#fef3c7" />
                </g>
              </g>
            ))}
          </svg>

          {/* Voivodeship names — positioned at geographic centers */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
              { name: 'dolnośląskie', left: '25%', top: '66%', small: false },
              { name: 'kujawsko-\npomorskie', left: '44%', top: '30%', small: false },
              { name: 'lubelskie', left: '85%', top: '52%', small: false },
              { name: 'lubuskie', left: '11%', top: '48%', small: false },
              { name: 'łódzkie', left: '53%', top: '55%', small: false },
              { name: 'małopolskie', left: '58%', top: '86%', small: true },
              { name: 'mazowieckie', left: '68%', top: '48%', small: false },
              { name: 'opolskie', left: '38%', top: '74%', small: true },
              { name: 'podkarpackie', left: '81%', top: '86%', small: false },
              { name: 'podlaskie', left: '87%', top: '27%', small: false },
              { name: 'pomorskie', left: '38%', top: '13%', small: false },
              { name: 'śląskie', left: '47%', top: '80%', small: true },
              { name: 'świętokrzyskie', left: '66%', top: '72%', small: true },
              { name: 'warmińsko-\nmazurskie', left: '66%', top: '17%', small: false },
              { name: 'wielkopolskie', left: '30%', top: '42%', small: false },
              { name: 'zachodnio-\npomorskie', left: '15%', top: '18%', small: false },
            ].map((woj) => (
              <div
                key={woj.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 select-none text-center"
                style={{ left: woj.left, top: woj.top }}
              >
                <span className={`font-display font-semibold text-black dark:text-white/70 italic tracking-wider leading-tight whitespace-pre-line ${woj.small ? 'text-[5px] md:text-[7px]' : 'text-[6px] md:text-[8px]'}`}>
                  {woj.name}
                </span>
              </div>
            ))}
          </div>

          {/* City pins at true geographic positions (Poland bounding box 14.12°E–24.15°E, 49°N–54.84°N) */}
          {[
            { name: 'Warszawa', left: '68.7%', top: '44.7%', delay: 1.5 },
            { name: 'Lublin', left: '84.3%', top: '61.5%', delay: 1.65 },
            { name: 'Kraków', left: '58%', top: '81.9%', delay: 1.8 },
            { name: 'Rzeszów', left: '78.5%', top: '82.2%', delay: 1.95 },
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
