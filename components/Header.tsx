'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LangSwitcher } from './LangSwitcher';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { href: `/${locale}/schedule`, label: dict.nav.schedule },
    { href: `/${locale}/charter`, label: dict.nav.charter },
    { href: `/${locale}/fuel`, label: dict.nav.fuel },
    { href: `/${locale}/inspection`, label: dict.nav.inspection },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 dark:bg-ink-950/90 backdrop-blur-xl border-b border-ink-200/60 dark:border-ink-800/60 shadow-sm'
          : 'bg-white/40 dark:bg-ink-950/40 backdrop-blur-md'
      )}
    >
      {/* Top utility bar */}
      <div className="hidden md:block bg-brand-600 text-white text-xs">
        <div className="container flex items-center justify-between h-8">
          <div className="flex items-center gap-5">
            <a href="tel:+48158425811" className="flex items-center gap-1.5 hover:text-sun-200 transition-colors">
              <Phone className="w-3 h-3" />
              <span className="font-semibold">+48 15 842 58 11</span>
            </a>
            <span className="opacity-80">Pn–Pt 7:00–17:00 · Sob 8:00–13:00</span>
          </div>
          <div className="flex items-center gap-5 opacity-90">
            <span>Centrala wew. 50</span>
            <span>Informacja wew. 33</span>
          </div>
        </div>
      </div>
      {/* Mobile phone bar */}
      <div className="md:hidden bg-brand-600 text-white text-xs">
        <div className="container flex items-center justify-center h-7">
          <a href="tel:+48158425811" className="flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            <span className="font-semibold">+48 15 842 58 11</span>
          </a>
        </div>
      </div>

      <div className={cn('container flex items-center justify-between gap-3 sm:gap-6 transition-all', scrolled ? 'py-2.5' : 'py-4')}>
        <Link href={`/${locale}`} className="group min-w-0" aria-label="PKS Stalowa Wola — strona główna">
          <Logo className="group-hover:opacity-90 transition-opacity" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  active
                    ? 'bg-ink-100 dark:bg-ink-800 text-ink-900 dark:text-ink-50'
                    : 'text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50 hover:bg-ink-50 dark:hover:bg-ink-900'
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitcher currentLocale={locale} />
          <ThemeToggle />
          <Link href={`/${locale}/schedule`} className="hidden md:inline-flex btn-primary !px-5 !py-2.5 text-sm">
            {dict.nav.bookNow}
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-full hover:bg-ink-100 dark:hover:bg-ink-800"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-y-auto transition-all duration-300',
          open ? 'max-h-[calc(100vh-7rem)] mt-4 pb-4' : 'max-h-0'
        )}
      >
        <div className="container">
          <nav className="card p-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-3 rounded-2xl text-sm font-medium hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link href={`/${locale}/schedule`} className="btn-primary mt-2">
              {dict.nav.bookNow}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
