import { Hero } from '@/components/Hero';
import { ServicesGrid } from '@/components/ServicesGrid';
import { FuelPrices } from '@/components/FuelPrices';
import { News } from '@/components/News';
import { CTA } from '@/components/CTA';
import { getDictionary, type Locale } from '@/lib/i18n';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <Hero locale={locale as Locale} dict={dict} />
      <ServicesGrid locale={locale as Locale} dict={dict} />
      <FuelPrices dict={dict} />
      <News locale={locale as Locale} dict={dict} />
      <CTA locale={locale as Locale} dict={dict} />
    </>
  );
}
