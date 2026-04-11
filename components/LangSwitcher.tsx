'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function LangSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();

  function pathFor(loc: Locale) {
    const segments = pathname.split('/');
    segments[1] = loc;
    return segments.join('/') || `/${loc}`;
  }

  return (
    <div className="flex items-center gap-0.5 p-0.5 rounded-full bg-ink-100 dark:bg-ink-800">
      {locales.map((loc) => (
        <Link
          key={loc}
          href={pathFor(loc)}
          className={cn(
            'px-2.5 py-1 rounded-full text-xs font-semibold uppercase transition-colors',
            currentLocale === loc
              ? 'bg-white dark:bg-ink-950 text-ink-900 dark:text-ink-50 shadow-sm'
              : 'text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-50'
          )}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
}
