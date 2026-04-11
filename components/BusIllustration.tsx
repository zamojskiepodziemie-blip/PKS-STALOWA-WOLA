'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export function BusIllustration({ className }: { className?: string }) {
  const [driving, setDriving] = useState(false);

  return (
    <div
      className={`relative ${className ?? ''}`}
      onMouseEnter={() => setDriving(true)}
      onMouseLeave={() => setDriving(false)}
      onFocus={() => setDriving(true)}
      onBlur={() => setDriving(false)}
      tabIndex={0}
      role="img"
      aria-label="Autobus PKS Stalowa Wola"
    >
      {/* Map background + wordmark — revealed when bus drives away */}
      <AnimatePresence>
        {driving && (
          <>
            <motion.div
              key="map"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="relative w-[78%] aspect-[1/0.92] max-w-md">
                <Image
                  src="/mapa.png"
                  alt="Mapa Polski"
                  fill
                  sizes="(min-width: 1024px) 480px, 70vw"
                  className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.25)]"
                />
                {/* Pin marking Stalowa Wola */}
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7, type: 'spring', stiffness: 260 }}
                  className="absolute"
                  style={{ left: '74%', top: '70%' }}
                >
                  <div className="relative -translate-x-1/2 -translate-y-full flex flex-col items-center">
                    <div className="relative w-4 h-4">
                      <div className="absolute inset-0 rounded-full bg-brand-600 ring-4 ring-white shadow-lg" />
                      <div className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-60" />
                    </div>
                    <span className="mt-1 px-2 py-0.5 rounded-md bg-white/95 dark:bg-ink-900/95 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-brand-700 dark:text-brand-400 shadow-md whitespace-nowrap animate-pulse-soft ring-1 ring-brand-200 dark:ring-brand-900">
                      Stalowa Wola
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </>
        )}
      </AnimatePresence>

      <svg viewBox="0 0 600 320" className="w-full h-auto" aria-hidden="true">
        <defs>
          <linearGradient id="bus-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ef4444" />
            <stop offset="0.6" stopColor="#dc2626" />
            <stop offset="1" stopColor="#991b1b" />
          </linearGradient>
          <linearGradient id="bus-window" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1e293b" />
            <stop offset="1" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="bus-stripe" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fbbf24" />
            <stop offset="1" stopColor="#f59e0b" />
          </linearGradient>
          <radialGradient id="ground-shadow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#000" stopOpacity="0.18" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ground shadow — moves with bus */}
        <motion.ellipse
          cx="300"
          cy="290"
          rx="240"
          ry="14"
          fill="url(#ground-shadow)"
          animate={{ x: driving ? 720 : 0, opacity: driving ? 0 : 1 }}
          transition={{ duration: driving ? 1.4 : 0.9, ease: driving ? 'easeIn' : 'easeOut' }}
        />

        {/* Speed lines — appear and stretch when driving */}
        <motion.g
          initial={false}
          animate={{ opacity: driving ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { y: 130, w: 160, op: 0.7 },
            { y: 155, w: 220, op: 0.5 },
            { y: 180, w: 180, op: 0.6 },
            { y: 205, w: 240, op: 0.5 },
            { y: 230, w: 170, op: 0.7 },
            { y: 255, w: 200, op: 0.5 },
          ].map((l, i) => (
            <motion.line
              key={i}
              x1="0"
              y1={l.y}
              x2={l.w}
              y2={l.y}
              stroke="#dc2626"
              strokeWidth="3"
              strokeLinecap="round"
              opacity={l.op}
              animate={{ x: driving ? [0, 600] : 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.04,
                repeat: driving ? Infinity : 0,
                ease: 'linear',
              }}
            />
          ))}
        </motion.g>

        {/* Static decorative lines (when idle) */}
        <motion.g
          animate={{ opacity: driving ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <line x1="20" y1="120" x2="80" y2="120" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <line x1="10" y1="155" x2="90" y2="155" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
          <line x1="25" y1="190" x2="75" y2="190" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <line x1="15" y1="225" x2="85" y2="225" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
        </motion.g>

        {/* Bus group — drives away on hover */}
        <motion.g
          initial={{ x: 0 }}
          animate={
            driving
              ? { x: 800, y: [0, -3, 0, -2, 0] }
              : { x: 0, y: [0, -2, 0] }
          }
          transition={
            driving
              ? { x: { duration: 1.4, ease: [0.5, 0, 0.75, 0] }, y: { duration: 0.4, repeat: Infinity, ease: 'easeInOut' } }
              : { x: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.05 }, y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }
          }
        >
          {/* Main body */}
          <rect x="100" y="100" width="450" height="160" rx="22" fill="url(#bus-body)" />
          <rect x="100" y="100" width="450" height="14" rx="22" fill="rgba(255,255,255,0.18)" />
          <rect x="100" y="218" width="450" height="6" fill="url(#bus-stripe)" />

          {/* Front nose */}
          <path d="M 100 120 Q 88 120 86 138 L 86 240 Q 86 260 100 260 Z" fill="url(#bus-body)" />
          <path d="M 86 138 Q 88 120 100 120 L 100 132 Q 92 132 92 142 Z" fill="rgba(255,255,255,0.15)" />

          {/* Headlight */}
          <circle cx="92" cy="200" r="6" fill="#fef3c7" />
          <circle cx="92" cy="200" r="4" fill="#fde68a" />
          <circle cx="92" cy="200" r="2" fill="#fffbeb" />

          {/* Windshield */}
          <path d="M 105 130 Q 105 122 113 122 L 145 122 Q 152 122 152 130 L 152 175 Q 152 182 145 182 L 113 182 Q 105 182 105 175 Z" fill="url(#bus-window)" />
          <path d="M 108 128 Q 116 124 130 124 L 140 124" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Side windows */}
          {[170, 220, 270, 320, 370, 420, 470].map((x) => (
            <g key={x}>
              <rect x={x} y="125" width="38" height="58" rx="6" fill="url(#bus-window)" />
              <path d={`M ${x + 3} 130 Q ${x + 12} 127 ${x + 24} 127 L ${x + 32} 127`} stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </g>
          ))}

          {/* Door */}
          <rect x="515" y="135" width="28" height="100" rx="4" fill="url(#bus-window)" />
          <line x1="529" y1="138" x2="529" y2="232" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

          {/* Wheels (inside the bus group so they translate together) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: driving ? 0.4 : 2, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '160px 270px' }}
          >
            <circle cx="160" cy="270" r="26" fill="#0f172a" />
            <circle cx="160" cy="270" r="20" fill="#1e293b" />
            <circle cx="160" cy="270" r="6" fill="#475569" />
            <line x1="160" y1="252" x2="160" y2="288" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="142" y1="270" x2="178" y2="270" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="148" y1="258" x2="172" y2="282" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="148" y1="282" x2="172" y2="258" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          </motion.g>
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: driving ? 0.4 : 2, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '480px 270px' }}
          >
            <circle cx="480" cy="270" r="26" fill="#0f172a" />
            <circle cx="480" cy="270" r="20" fill="#1e293b" />
            <circle cx="480" cy="270" r="6" fill="#475569" />
            <line x1="480" y1="252" x2="480" y2="288" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="462" y1="270" x2="498" y2="270" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="468" y1="258" x2="492" y2="282" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="468" y1="282" x2="492" y2="258" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
