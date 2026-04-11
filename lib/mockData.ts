export const cities = [
  'Stalowa Wola', 'Tarnobrzeg', 'Rzeszów', 'Lublin', 'Sandomierz',
  'Janów Lubelski', 'Nisko', 'Mielec', 'Kraśnik', 'Warszawa',
  'Kraków', 'Zamość', 'Biłgoraj', 'Leżajsk', 'Łańcut',
];

export const popularRoutes = [
  { from: 'Stalowa Wola', to: 'Rzeszów', price: 18, duration: '1h 25min' },
  { from: 'Stalowa Wola', to: 'Lublin', price: 22, duration: '1h 50min' },
  { from: 'Stalowa Wola', to: 'Warszawa', price: 49, duration: '4h 10min' },
  { from: 'Stalowa Wola', to: 'Kraków', price: 39, duration: '3h 30min' },
];

export type Connection = {
  id: string;
  departure: string;
  arrival: string;
  duration: string;
  transfers: number;
  price: number;
  carrier: string;
  amenities: string[];
  seatsLeft: number;
};

export const mockConnections: Connection[] = [
  { id: '1', departure: '06:15', arrival: '07:40', duration: '1h 25min', transfers: 0, price: 18, carrier: 'PKS Stalowa Wola', amenities: ['WiFi', 'USB', 'AC'], seatsLeft: 23 },
  { id: '2', departure: '07:30', arrival: '09:05', duration: '1h 35min', transfers: 0, price: 18, carrier: 'PKS Stalowa Wola', amenities: ['WiFi', 'USB', 'AC'], seatsLeft: 14 },
  { id: '3', departure: '09:00', arrival: '10:25', duration: '1h 25min', transfers: 0, price: 22, carrier: 'PKS Stalowa Wola', amenities: ['WiFi', 'USB', 'AC', 'WC'], seatsLeft: 41 },
  { id: '4', departure: '11:45', arrival: '13:30', duration: '1h 45min', transfers: 1, price: 16, carrier: 'PKS Stalowa Wola', amenities: ['WiFi', 'AC'], seatsLeft: 8 },
  { id: '5', departure: '14:20', arrival: '15:50', duration: '1h 30min', transfers: 0, price: 18, carrier: 'PKS Stalowa Wola', amenities: ['WiFi', 'USB', 'AC'], seatsLeft: 32 },
  { id: '6', departure: '16:00', arrival: '17:25', duration: '1h 25min', transfers: 0, price: 24, carrier: 'PKS Stalowa Wola', amenities: ['WiFi', 'USB', 'AC', 'WC'], seatsLeft: 19 },
  { id: '7', departure: '18:15', arrival: '19:55', duration: '1h 40min', transfers: 0, price: 18, carrier: 'PKS Stalowa Wola', amenities: ['WiFi', 'USB', 'AC'], seatsLeft: 27 },
  { id: '8', departure: '20:30', arrival: '21:55', duration: '1h 25min', transfers: 0, price: 16, carrier: 'PKS Stalowa Wola', amenities: ['AC'], seatsLeft: 5 },
];

export type FuelStation = {
  id: string;
  name: string;
  address: string;
  city: string;
  open247: boolean;
  prices: { type: string; price: number; trend: 'up' | 'down' | 'stable' }[];
};

export const fuelStations: FuelStation[] = [
  {
    id: 'sw',
    name: 'Stacja Paliw Stalowa Wola',
    address: 'ul. Ofiar Katynia 30',
    city: 'Stalowa Wola',
    open247: true,
    prices: [
      { type: 'Pb 95', price: 6.29, trend: 'down' },
      { type: 'Pb 98', price: 6.79, trend: 'stable' },
      { type: 'ON', price: 6.45, trend: 'down' },
      { type: 'ON Premium', price: 6.89, trend: 'up' },
      { type: 'LPG', price: 3.19, trend: 'stable' },
    ],
  },
  {
    id: 'jl',
    name: 'Stacja Paliw Janów Lubelski',
    address: 'ul. Wojska Polskiego 12',
    city: 'Janów Lubelski',
    open247: false,
    prices: [
      { type: 'Pb 95', price: 6.31, trend: 'down' },
      { type: 'Pb 98', price: 6.81, trend: 'stable' },
      { type: 'ON', price: 6.47, trend: 'down' },
      { type: 'ON Premium', price: 6.91, trend: 'up' },
      { type: 'LPG', price: 3.21, trend: 'stable' },
    ],
  },
];

export const newsItems = {
  pl: [
    { id: 1, date: '2026-04-08', category: 'Połączenia', title: 'Nowe połączenie Stalowa Wola – Warszawa Zachodnia', excerpt: 'Od 15 kwietnia uruchamiamy bezpośrednie codzienne połączenie do stolicy. Czas przejazdu skrócony o 25 minut.' },
    { id: 2, date: '2026-04-02', category: 'Flota', title: 'Pięć nowych autokarów Setra w naszej flocie', excerpt: 'Inwestujemy w komfort pasażerów. Nowe pojazdy z WiFi 5G, gniazdami USB-C i klimatyzacją indywidualną.' },
    { id: 3, date: '2026-03-28', category: 'Promocja', title: '−20% na bilety weekendowe w kwietniu', excerpt: 'Kup bilet w piątek lub sobotę przez aplikację i zyskaj 20% rabatu na połączenia regionalne.' },
  ],
  en: [
    { id: 1, date: '2026-04-08', category: 'Routes', title: 'New connection Stalowa Wola – Warsaw West', excerpt: 'Starting April 15, we launch a direct daily connection to the capital. Travel time reduced by 25 minutes.' },
    { id: 2, date: '2026-04-02', category: 'Fleet', title: 'Five new Setra coaches join our fleet', excerpt: 'We invest in passenger comfort. New vehicles with 5G WiFi, USB-C ports and individual air conditioning.' },
    { id: 3, date: '2026-03-28', category: 'Promo', title: '−20% on weekend tickets in April', excerpt: 'Buy a ticket on Friday or Saturday via the app and get 20% off regional connections.' },
  ],
};
