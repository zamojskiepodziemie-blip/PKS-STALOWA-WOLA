import { getDictionary, type Locale } from '@/lib/i18n';
import { FuelPrices } from '@/components/FuelPrices';
import { MapView } from '@/components/MapView';

export default async function FuelPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <div className="pt-32">
      <div className="container mb-10">
        <span className="eyebrow mb-4">{dict.nav.fuel}</span>
        <h1 className="h-display text-5xl md:text-6xl mt-4">{dict.fuelPage.title}</h1>
        <p className="mt-4 text-lg text-ink-600 dark:text-ink-400 max-w-2xl">{dict.fuelPage.subtitle}</p>
      </div>

      <div className="container mb-12">
        <div className="card overflow-hidden h-[460px] relative">
          <MapView
            className="absolute inset-0 w-full h-full"
            markers={[
              { lng: 22.0535, lat: 50.5826, title: 'Stacja Stalowa Wola', description: 'ul. Ofiar Katynia 30 · 24/7' },
              { lng: 22.4112, lat: 50.7050, title: 'Stacja Janów Lubelski', description: 'ul. Wojska Polskiego 12' },
            ]}
          />
        </div>
      </div>

      <FuelPrices dict={dict} />
    </div>
  );
}
