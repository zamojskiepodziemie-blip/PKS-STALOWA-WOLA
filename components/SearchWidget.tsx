'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftRight, Calendar, MapPin, Search, Users } from 'lucide-react';
import { cities, popularRoutes } from '@/lib/mockData';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

export function SearchWidget({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const router = useRouter();
  const today = new Date().toISOString().slice(0, 10);
  const [from, setFrom] = useState('Stalowa Wola');
  const [to, setTo] = useState('Rzeszów');
  const [date, setDate] = useState(today);
  const [pax, setPax] = useState(1);

  function swap() {
    setFrom(to);
    setTo(from);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({ from, to, date, pax: String(pax) });
    router.push(`/${locale}/schedule?${params}`);
  }

  return (
    <form
      onSubmit={submit}
      className="card !rounded-3xl p-2 shadow-2xl shadow-ink-900/10 dark:shadow-black/40 ring-1 ring-ink-200/50 dark:ring-ink-800/50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_auto_1fr_1fr_auto_auto] gap-2 items-stretch">
        <Field icon={<MapPin className="w-4 h-4 text-brand-600" />} label={dict.search.from}>
          <CityInput value={from} onChange={setFrom} />
        </Field>

        <button
          type="button"
          onClick={swap}
          aria-label={dict.search.swap}
          className="hidden md:grid place-items-center w-10 self-center rounded-full hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
        >
          <ArrowLeftRight className="w-4 h-4" />
        </button>

        <Field icon={<MapPin className="w-4 h-4 text-brand-600" />} label={dict.search.to}>
          <CityInput value={to} onChange={setTo} />
        </Field>

        <Field icon={<Calendar className="w-4 h-4 text-brand-600" />} label={dict.search.date}>
          <input
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            className="input cursor-pointer"
          />
        </Field>

        <Field icon={<Users className="w-4 h-4 text-brand-600" />} label={dict.search.passengers}>
          <select
            value={pax}
            onChange={(e) => setPax(Number(e.target.value))}
            className="input cursor-pointer bg-transparent"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? dict.search.passenger : dict.search.passengersFew}</option>
            ))}
          </select>
        </Field>

        <button type="submit" className="btn-primary md:!rounded-2xl !rounded-2xl h-full min-h-[52px] px-6 sm:col-span-2 md:col-span-1">
          <Search className="w-4 h-4" />
          <span className="md:hidden lg:inline">{dict.search.search}</span>
        </button>
      </div>

      {/* Popular */}
      <div className="px-3 pt-3 pb-1 flex items-center gap-1.5 sm:gap-2 flex-wrap text-[11px] sm:text-xs">
        <span className="text-ink-500 font-medium w-full sm:w-auto">{dict.search.popular}:</span>
        {popularRoutes.map((r) => (
          <button
            key={`${r.from}-${r.to}`}
            type="button"
            onClick={() => { setFrom(r.from); setTo(r.to); }}
            className="px-2.5 py-1 rounded-full bg-ink-100 dark:bg-ink-800 hover:bg-brand-600 hover:text-white transition-colors whitespace-nowrap"
          >
            {r.from} → {r.to}
          </button>
        ))}
      </div>
    </form>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="group rounded-2xl px-4 py-3 bg-ink-50/50 dark:bg-ink-950/50 hover:bg-ink-100 dark:hover:bg-ink-900 transition-colors cursor-text focus-within:bg-ink-100 dark:focus-within:bg-ink-900">
      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-ink-500">
        {icon} {label}
      </div>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function CityInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        list="cities"
        className="input font-medium"
        autoComplete="off"
      />
      <datalist id="cities">
        {cities.map((c) => <option key={c} value={c} />)}
      </datalist>
    </>
  );
}
