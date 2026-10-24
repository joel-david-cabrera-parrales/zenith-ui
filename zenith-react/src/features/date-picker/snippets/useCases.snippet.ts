export const DATE_PICKER_USE_CASES_HTML = `
<div class="grid gap-4 lg:grid-cols-3">
  <form class="rounded-xl border border-slate-200 bg-white p-4">
    <label class="grid gap-2 text-xs font-semibold text-slate-700">Fecha de reserva
      <input type="date" name="bookingDate" class="h-10 rounded-lg border border-slate-300 px-3 text-sm" />
    </label>
    <button class="mt-3 rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white">Buscar disponibilidad</button>
  </form>
  <form class="rounded-xl border border-slate-200 bg-white p-4">
    <label class="grid gap-2 text-xs font-semibold text-slate-700">Filtrar desde
      <input type="date" name="filterStart" value="2026-10-01" class="h-10 rounded-lg border border-slate-300 px-3 text-sm" />
    </label>
    <label class="mt-3 grid gap-2 text-xs font-semibold text-slate-700">Filtrar hasta
      <input type="date" name="filterEnd" value="2026-10-24" class="h-10 rounded-lg border border-slate-300 px-3 text-sm" />
    </label>
  </form>
  <section aria-label="Resumen del periodo" class="rounded-xl border border-slate-200 bg-white p-4">
    <p class="text-xs font-medium text-slate-500">Ingresos del periodo</p>
    <p class="mt-2 text-2xl font-bold text-slate-900">$24,680</p>
    <p class="mt-1 text-xs text-emerald-700">1 – 24 oct 2026 · +12.8%</p>
  </section>
</div>
`;

export const DATE_PICKER_USE_CASES_TSX = `
import { useState } from 'react';

const DateUseCases = () => {
  const [bookingDate, setBookingDate] = useState('');
  const [period, setPeriod] = useState({ start: '2026-10-01', end: '2026-10-24' });
  const dateLabel = (value: string) => value
    ? new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium' })
        .format(new Date(
          Number(value.slice(0, 4)),
          Number(value.slice(5, 7)) - 1,
          Number(value.slice(8, 10)),
        ))
    : 'Sin fecha';

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <form className="space-y-3 rounded-xl border border-slate-200 bg-white p-4" onSubmit={(event) => event.preventDefault()}>
        <label className="grid gap-2 text-xs font-semibold text-slate-700">
          Fecha de reserva
          <input className="h-10 rounded-lg border border-slate-300 px-3 text-sm" type="date" value={bookingDate} onChange={(event) => setBookingDate(event.target.value)} />
        </label>
        <button className="rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white" type="submit">Buscar disponibilidad</button>
        {bookingDate && <p aria-live="polite" className="text-xs text-slate-500">Reserva para {dateLabel(bookingDate)}</p>}
      </form>

      <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4">
        <label className="grid gap-2 text-xs font-semibold text-slate-700">
          Filtrar desde
          <input className="h-10 rounded-lg border border-slate-300 px-3 text-sm" type="date" value={period.start} onChange={(event) => setPeriod({ ...period, start: event.target.value })} />
        </label>
        <label className="grid gap-2 text-xs font-semibold text-slate-700">
          Filtrar hasta
          <input className="h-10 rounded-lg border border-slate-300 px-3 text-sm" type="date" min={period.start} value={period.end} onChange={(event) => setPeriod({ ...period, end: event.target.value })} />
        </label>
        <p aria-live="polite" className="text-xs text-slate-500">{dateLabel(period.start)} – {dateLabel(period.end)}</p>
      </div>

      <section aria-label="Resumen del periodo" className="rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-xs font-medium text-slate-500">Ingresos del periodo</p>
        <p className="mt-2 text-2xl font-bold text-slate-900">$24,680</p>
        <p className="mt-1 text-xs text-emerald-700">{dateLabel(period.start)} – {dateLabel(period.end)} · +12.8%</p>
      </section>
    </div>
  );
};
`;
