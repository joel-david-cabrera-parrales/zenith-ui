import { useState } from 'react';
import type { FormEvent } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { DatePicker, DateRangePicker } from '../components';
import type { DateRangeValue } from '../components';
import { DATE_PICKER_USE_CASES_HTML, DATE_PICKER_USE_CASES_TSX } from '../snippets';

export const DatePickerUseCasesDoc = () => {
  const [bookingDate, setBookingDate] = useState('2026-10-24');
  const [filterRange, setFilterRange] = useState<DateRangeValue>({
    startDate: '2026-10-01',
    endDate: '2026-10-24',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <ComponentDoc
      title="Ejemplos de integración"
      description="Combina la selección individual con formularios de reserva, filtros por periodo y resúmenes de dashboard. Los valores ISO pueden enviarse a una API o usarse para filtrar los datos visibles."
      maxWidth="6xl"
      previewOverflow
      preview={
        <div className="grid w-full gap-4 lg:grid-cols-3">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Nueva reserva</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Formulario con una fecha requerida.</p>
            </div>
            <DatePicker
              label="Fecha de la reserva"
              name="bookingDate"
              value={bookingDate}
              onChange={(nextDate) => {
                setBookingDate(nextDate);
                setSubmitted(false);
              }}
              minDate="2026-10-01"
            />
            <div className="flex items-center justify-between gap-2">
              <p role="status" className="text-[11px] text-emerald-700 dark:text-emerald-300">
                {submitted ? `Reserva preparada para ${bookingDate}.` : ''}
              </p>
              <button type="submit" className="shrink-0 rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Confirmar
              </button>
            </div>
          </form>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Filtro por periodo</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">El rango puede filtrar listas, tablas o gráficos.</p>
            </div>
            <DateRangePicker
              label="Fechas del informe"
              value={filterRange}
              onChange={setFilterRange}
              locale="es-ES"
              format={{ day: 'numeric', month: 'short' }}
              className="max-w-none"
            />
            <p className="rounded-lg bg-slate-50 px-3 py-2 text-[11px] text-slate-500 dark:bg-slate-950 dark:text-slate-400">
              Filtro ISO: {filterRange.startDate ?? 'inicio'} → {filterRange.endDate ?? 'fin'}
            </p>
          </div>

          <section aria-label="Resumen del dashboard" className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Ingresos</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Resumen del periodo elegido</p>
              </div>
              <span aria-hidden="true" className="material-symbols-outlined rounded-lg bg-emerald-50 p-2 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">payments</span>
            </div>
            <p className="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">$24,680</p>
            <p className="mt-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">↑ 12.8% vs. periodo anterior</p>
            <p className="mt-auto pt-4 text-[11px] text-slate-400 dark:text-slate-500">
              {filterRange.startDate ?? '—'} – {filterRange.endDate ?? '—'}
            </p>
          </section>
        </div>
      }
      htmlCode={DATE_PICKER_USE_CASES_HTML}
      jsxCode={DATE_PICKER_USE_CASES_TSX}
    />
  );
};
