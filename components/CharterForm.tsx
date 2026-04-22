'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import type { Dictionary } from '@/lib/dictionaries';

const vehicles = [
  { id: 'mini', name: 'Mini Bus', seats: '9–19', img: '🚐' },
  { id: 'midi', name: 'Midi Coach', seats: '20–35', img: '🚌' },
  { id: 'full', name: 'Full Coach', seats: '36–55', img: '🚍' },
];

export function CharterForm({ dict }: { dict: Dictionary }) {
  const [vehicle, setVehicle] = useState('midi');
  const [state, setState] = useState<'idle' | 'loading' | 'sent'>('idle');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setState('loading');
    setTimeout(() => setState('sent'), 1200);
  }

  if (state === 'sent') {
    return (
      <div className="card p-6 sm:p-10 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 dark:bg-emerald-950/50 grid place-items-center text-emerald-600 mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display text-2xl font-bold">Wysłane!</h3>
        <p className="mt-2 text-ink-600 dark:text-ink-400 text-sm">Skontaktujemy się w ciągu 24h.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card p-4 sm:p-6 md:p-8 space-y-5">
      <div>
        <label className="text-xs uppercase tracking-wider font-semibold text-ink-500 mb-3 block">
          {dict.charterPage.vehicleType}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {vehicles.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setVehicle(v.id)}
              className={`p-3 sm:p-4 rounded-2xl border-2 text-center transition-all ${
                vehicle === v.id
                  ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/30'
                  : 'border-ink-200 dark:border-ink-800 hover:border-ink-300'
              }`}
            >
              <div className="text-2xl sm:text-3xl mb-1 leading-none">{v.img}</div>
              <div className="text-[11px] sm:text-xs font-semibold leading-tight">{v.name}</div>
              <div className="text-[10px] text-ink-500">{v.seats}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input label={dict.charterPage.from} required />
        <Input label={dict.charterPage.destination} required />
        <Input label={dict.charterPage.departureDate} type="date" required />
        <Input label={dict.charterPage.returnDate} type="date" />
      </div>

      <Input label={dict.charterPage.name} required />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input label={dict.charterPage.email} type="email" required />
        <Input label={dict.charterPage.phone} type="tel" required />
      </div>

      <label className="block">
        <span className="text-xs uppercase tracking-wider font-semibold text-ink-500">{dict.charterPage.message}</span>
        <textarea
          rows={3}
          className="mt-1.5 w-full rounded-2xl border border-ink-200 dark:border-ink-800 bg-transparent p-3 text-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none"
        />
      </label>

      <button type="submit" disabled={state === 'loading'} className="btn-primary w-full">
        {state === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
        {dict.charterPage.submit}
      </button>
    </form>
  );
}

function Input({ label, type = 'text', required }: { label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider font-semibold text-ink-500">{label}{required && ' *'}</span>
      <input
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-2xl border border-ink-200 dark:border-ink-800 bg-transparent px-3 py-2.5 text-sm focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none"
      />
    </label>
  );
}
