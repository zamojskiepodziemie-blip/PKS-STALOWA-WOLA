import { getDictionary, type Locale } from '@/lib/i18n';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  const timeline = [
    { year: '1999', title: 'Komercjalizacja', desc: 'Powstanie spółki PKS Stalowa Wola S.A.' },
    { year: '2008', title: 'Rozbudowa floty', desc: 'Pierwsze nowoczesne autokary turystyczne.' },
    { year: '2015', title: 'Stacje paliw', desc: 'Otwarcie drugiej stacji w Janowie Lubelskim.' },
    { year: '2020', title: 'Cyfryzacja', desc: 'Zakupy biletów online i system rezerwacji.' },
    { year: '2026', title: 'Nowy etap', desc: 'Inwestycja w autokary z napędem hybrydowym.' },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="container">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="eyebrow mb-4">{dict.nav.about}</span>
          <h1 className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4">{dict.aboutPage.title}</h1>
          <p className="mt-5 sm:mt-6 text-base sm:text-xl text-ink-600 dark:text-ink-400 leading-relaxed">
            Od ponad 25 lat łączymy mieszkańców Podkarpacia i Lubelszczyzny z resztą Polski. Inwestujemy w nowoczesną flotę, kierowców i komfort pasażerów.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-600 via-brand-400 to-transparent" />

          {timeline.map((t, i) => (
            <div key={t.year} className={`relative pl-10 sm:pl-12 md:pl-0 mb-8 sm:mb-12 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? '' : 'md:[direction:rtl]'}`}>
              <div className="absolute -left-1 sm:left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-8 h-8 rounded-full bg-brand-600 ring-4 ring-white dark:ring-ink-950 grid place-items-center text-white text-xs font-bold">
                {i + 1}
              </div>
              <div className="card p-5 sm:p-6 [direction:ltr]">
                <div className="text-brand-600 font-display text-2xl sm:text-3xl font-bold">{t.year}</div>
                <h3 className="mt-1 font-semibold text-base sm:text-lg">{t.title}</h3>
                <p className="mt-1 text-sm text-ink-600 dark:text-ink-400">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
