import { getDictionary, type Locale } from '@/lib/i18n';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { MapView } from '@/components/MapView';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  const items = [
    { Icon: MapPin, label: dict.contactPage.address, value: 'ul. Ofiar Katynia 30\n37-450 Stalowa Wola' },
    { Icon: Phone, label: dict.contactPage.phone, value: '+48 15 842 58 11' },
    { Icon: Mail, label: dict.contactPage.email, value: 'sekretariat@pksstwola.com.pl' },
    { Icon: Clock, label: dict.contactPage.hours, value: 'Pn–Pt: 7:00–17:00\nSob: 8:00–13:00' },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="container">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="eyebrow mb-4">{dict.nav.contact}</span>
          <h1 className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4">{dict.contactPage.title}</h1>
          <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-400">{dict.contactPage.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 sm:gap-10">
          <div className="space-y-4">
            {items.map(({ Icon, label, value }) => (
              <div key={label} className="card p-4 sm:p-6 flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/50 grid place-items-center text-brand-600 flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider font-semibold text-ink-500">{label}</div>
                  <div className="mt-1 font-medium whitespace-pre-line break-words">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="card overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-[480px] relative">
            <MapView
              className="absolute inset-0 w-full h-full"
              zoom={14}
              markers={[
                {
                  lng: 22.0535,
                  lat: 50.5826,
                  title: 'PKS Stalowa Wola',
                  description: 'ul. Ofiar Katynia 30, 37-450 Stalowa Wola',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
