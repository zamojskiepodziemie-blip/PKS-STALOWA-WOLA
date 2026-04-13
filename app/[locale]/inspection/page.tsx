import { getDictionary, type Locale } from '@/lib/i18n';
import { Calendar, Check, Clock } from 'lucide-react';

export default async function InspectionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  const slots = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00'];

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow mb-4">{dict.nav.inspection}</span>
          <h1 className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4">{dict.inspectionPage.title}</h1>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-400">{dict.inspectionPage.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
          <div className="card p-8">
            <h3 className="font-display text-xl font-semibold mb-4">Stacja Kontroli Pojazdów</h3>
            <ul className="space-y-3 text-sm">
              {['Samochody osobowe', 'Motocykle', 'Pojazdy ciężarowe', 'Autobusy', 'Pojazdy z instalacją gazową'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-ink-200 dark:border-ink-800 text-sm space-y-2">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-600" /> Pn–Pt: 7:00 – 19:00</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-600" /> Sob: 8:00 – 14:00</div>
            </div>
          </div>

          <div className="card p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl font-semibold">{dict.inspectionPage.bookSlot}</h3>
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <Calendar className="w-4 h-4" /> 12 kwietnia 2026
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {slots.map((s, i) => (
                <button
                  key={s}
                  disabled={i === 2 || i === 6}
                  className="px-3 py-3 rounded-2xl border border-ink-200 dark:border-ink-800 text-sm font-semibold hover:border-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950/30 hover:text-brand-700 dark:hover:text-brand-400 disabled:opacity-30 disabled:cursor-not-allowed disabled:line-through transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
            <button className="btn-primary w-full mt-6">{dict.inspectionPage.bookSlot}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
