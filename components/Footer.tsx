import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Logo } from './Logo';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-ink-200 dark:border-ink-800 bg-ink-50 dark:bg-ink-950">
      <div className="container py-10 sm:py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href={`/${locale}`} className="inline-block mb-5">
              <Logo />
            </Link>
            <p className="text-sm text-ink-600 dark:text-ink-400 max-w-sm mb-6">
              {dict.footer.tagline}
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 grid place-items-center hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-colors" aria-label="social">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-ink-500 mb-4">{dict.footer.services}</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href={`/${locale}/schedule`} className="hover:text-brand-600">{dict.nav.schedule}</Link></li>
              <li><Link href={`/${locale}/charter`} className="hover:text-brand-600">{dict.nav.charter}</Link></li>
              <li><Link href={`/${locale}/fuel`} className="hover:text-brand-600">{dict.nav.fuel}</Link></li>
              <li><Link href={`/${locale}/inspection`} className="hover:text-brand-600">{dict.nav.inspection}</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-ink-500 mb-4">{dict.footer.legal}</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href={`/${locale}/about`} className="hover:text-brand-600">{dict.nav.about}</Link></li>
              <li><a href="#" className="hover:text-brand-600">{dict.footer.privacy}</a></li>
              <li><a href="#" className="hover:text-brand-600">{dict.footer.cookies}</a></li>
              <li><a href="#" className="hover:text-brand-600">{dict.footer.bip}</a></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-ink-500 mb-4">{dict.footer.contact}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-brand-600 flex-shrink-0" /><span>ul. Ofiar Katynia 30<br />37-450 Stalowa Wola</span></li>
              <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-brand-600 flex-shrink-0" /><a href="tel:+48158425811" className="hover:text-brand-600">+48 15 842 58 11</a></li>
              <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-brand-600 flex-shrink-0" /><a href="mailto:sekretariat@pksstwola.com.pl" className="hover:text-brand-600">sekretariat@pksstwola.com.pl</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ink-200 dark:border-ink-800 flex flex-col sm:flex-row justify-between gap-4 text-xs text-ink-500">
          <p>© {year} PKS Stalowa Wola S.A. {dict.footer.rights}</p>
          <p className="opacity-60">Demo portfolio · Next.js 15 · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
