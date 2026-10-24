export const DATE_RANGE_PICKER_HTML = `
<fieldset class="max-w-xl space-y-2">
  <legend class="text-xs font-semibold text-slate-700">Periodo del informe</legend>
  <div class="grid gap-3 sm:grid-cols-2">
    <label class="grid gap-1.5 text-xs font-medium text-slate-600">
      Desde
      <input type="date" name="periodStart" value="2026-10-01" class="h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm" />
    </label>
    <label class="grid gap-1.5 text-xs font-medium text-slate-600">
      Hasta
      <input type="date" name="periodEnd" value="2026-10-24" min="2026-10-01" class="h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm" />
    </label>
  </div>
</fieldset>
`;

export const DATE_RANGE_PICKER_TSX = `
import { useState } from 'react';

type DateRange = { startDate: string; endDate: string };

const DateRangeField = () => {
  const [range, setRange] = useState<DateRange>({
    startDate: '2026-10-01',
    endDate: '2026-10-24',
  });
  const rangeLabel = (value: string) => value
    ? new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium' })
        .format(new Date(
          Number(value.slice(0, 4)),
          Number(value.slice(5, 7)) - 1,
          Number(value.slice(8, 10)),
        ))
    : 'Sin seleccionar';

  return (
    <fieldset className="max-w-xl space-y-2">
      <legend className="text-xs font-semibold text-slate-700">Periodo del informe</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs font-medium text-slate-600">
          Desde
          <input
            className="h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm"
            type="date"
            name="periodStart"
            value={range.startDate}
            onChange={(event) => setRange({ ...range, startDate: event.target.value })}
          />
        </label>
        <label className="grid gap-1.5 text-xs font-medium text-slate-600">
          Hasta
          <input
            className="h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm"
            type="date"
            name="periodEnd"
            min={range.startDate}
            value={range.endDate}
            onChange={(event) => setRange({ ...range, endDate: event.target.value })}
          />
        </label>
      </div>
      <p aria-live="polite" className="text-xs text-slate-500">
        {rangeLabel(range.startDate)} – {rangeLabel(range.endDate)}
      </p>
    </fieldset>
  );
};
`;
