import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  variant?: 'full' | 'mark' | 'stacked';
  invert?: boolean;
};

export function Logo({ className, variant = 'full', invert = false }: Props) {
  const text = invert ? '#ffffff' : 'currentColor';

  if (variant === 'mark') {
    return (
      <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
        <defs>
          <linearGradient id="pks-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22c55e" />
            <stop offset="1" stopColor="#15803d" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#pks-grad)" />
        <rect x="2" y="2" width="60" height="60" rx="14" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        <path d="M 6 44 L 58 44" stroke="rgba(255,255,255,0.35)" strokeWidth="1" strokeDasharray="3 3" />
        <text
          x="32"
          y="38"
          textAnchor="middle"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontSize="22"
          fontWeight="800"
          fill="#ffffff"
          letterSpacing="-0.5"
        >
          PKS
        </text>
      </svg>
    );
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <svg viewBox="0 0 64 64" className="w-11 h-11 md:w-12 md:h-12 flex-shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="pks-grad-h" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22c55e" />
            <stop offset="1" stopColor="#15803d" />
          </linearGradient>
          <filter id="pks-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#16a34a" floodOpacity="0.35" />
          </filter>
        </defs>
        <g filter="url(#pks-shadow)">
          <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#pks-grad-h)" />
          <rect x="2" y="2" width="60" height="60" rx="14" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        </g>
        <path d="M 8 46 L 56 46" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeDasharray="3 3" />
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontSize="22"
          fontWeight="800"
          fill="#ffffff"
          letterSpacing="-0.5"
        >
          PKS
        </text>
      </svg>
      <div className="leading-none">
        <div
          className="font-display font-extrabold tracking-tight text-xl md:text-2xl"
          style={{ color: text }}
        >
          PKS Stalowa Wola
        </div>
        <div
          className={cn(
            'mt-1 text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-semibold',
            invert ? 'text-white/70' : 'text-brand-600'
          )}
        >
          Spółka Akcyjna · od 1999
        </div>
      </div>
    </div>
  );
}
