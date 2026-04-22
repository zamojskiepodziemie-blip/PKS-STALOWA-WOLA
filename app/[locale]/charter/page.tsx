import { getDictionary, type Locale } from '@/lib/i18n';
import { CharterForm } from '@/components/CharterForm';
import { Check } from 'lucide-react';

export default async function CharterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="container">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12 items-start">
          <div>
            <span className="eyebrow mb-4">{dict.nav.charter}</span>
            <h1 className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4">{dict.charterPage.title}</h1>
            <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-400">{dict.charterPage.subtitle}</p>

            <div className="mt-8 sm:mt-10 card p-5 sm:p-6">
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-4">{dict.charterPage.includes}</h3>
              <ul className="space-y-3">
                {dict.charterPage.includesItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-950/50 grid place-items-center text-emerald-600 flex-shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { v: '9', l: 'min' },
                { v: '55', l: 'max' },
                { v: '24h', l: 'quote' },
              ].map((s) => (
                <div key={s.l} className="card p-3 sm:p-4 text-center">
                  <div className="font-display text-xl sm:text-2xl font-bold text-brand-600">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-wider text-ink-500 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <CharterForm dict={dict} />
        </div>
      </div>
    </div>
  );
}
