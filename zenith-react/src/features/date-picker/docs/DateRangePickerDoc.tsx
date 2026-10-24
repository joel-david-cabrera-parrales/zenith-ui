import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { DateRangePicker } from '../components';
import type { DateRangeValue } from '../components';
import { DATE_RANGE_PICKER_HTML, DATE_RANGE_PICKER_TSX } from '../snippets';

export const DateRangePickerDoc = () => {
  const [range, setRange] = useState<DateRangeValue>({
    startDate: '2026-10-08',
    endDate: '2026-10-18',
  });

  return (
    <ComponentDoc
      title="Date Range Picker"
      description="Selecciona una fecha inicial y otra final en un calendario de dos meses. El componente ordena las fechas automáticamente, previsualiza el rango al pasar el cursor y permite limpiar la selección."
      maxWidth="6xl"
      previewOverflow
      preview={
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Periodo del informe</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Selecciona inicio y fin; ambos valores quedan disponibles en formato ISO.</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
              <span aria-hidden="true" className="material-symbols-outlined text-[14px]">date_range</span>
              Rango activo
            </span>
          </div>
          <DateRangePicker
            label="Rango de fechas"
            name="reportPeriod"
            value={range}
            onChange={setRange}
            locale="es-ES"
            format={{ day: 'numeric', month: 'short', year: 'numeric' }}
            minDate="2026-10-01"
            maxDate="2026-12-31"
            className="max-w-xl"
          />
          <div className="mt-4 grid gap-3 rounded-xl bg-slate-50 p-3 text-xs dark:bg-slate-950 sm:grid-cols-2">
            <p className="text-slate-500 dark:text-slate-400">Inicio: <code className="font-mono text-slate-800 dark:text-slate-200">{range.startDate ?? '—'}</code></p>
            <p className="text-slate-500 dark:text-slate-400">Fin: <code className="font-mono text-slate-800 dark:text-slate-200">{range.endDate ?? '—'}</code></p>
          </div>
        </div>
      }
      htmlCode={DATE_RANGE_PICKER_HTML}
      jsxCode={DATE_RANGE_PICKER_TSX}
    />
  );
};
