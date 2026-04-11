import { MapPin } from 'lucide-react';

const cities = [
  'Stalowa Wola', 'Rzeszów', 'Lublin', 'Warszawa', 'Kraków', 'Sandomierz',
  'Tarnobrzeg', 'Janów Lubelski', 'Mielec', 'Nisko', 'Kraśnik', 'Zamość',
  'Biłgoraj', 'Leżajsk', 'Łańcut',
];

export function CityTicker() {
  const items = [...cities, ...cities];
  return (
    <div className="relative border-y border-brand-700 bg-brand-600 text-white overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-600 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-600 to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap py-3.5">
        {items.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-6 text-sm font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-sun-300" />
            {c}
            <span className="ml-6 text-sun-300/60">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
