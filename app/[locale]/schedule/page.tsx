import { getDictionary, type Locale } from '@/lib/i18n';
import { ScheduleSearch } from '@/components/ScheduleSearch';

export default async function SchedulePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <div className="max-w-3xl mb-10">
          <span className="eyebrow mb-4">{dict.nav.schedule}</span>
          <h1 className="h-display text-5xl md:text-6xl mt-4">{dict.schedulePage.title}</h1>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-400">{dict.schedulePage.subtitle}</p>
        </div>
        <ScheduleSearch locale={locale as Locale} dict={dict} />
      </div>
    </div>
  );
}
