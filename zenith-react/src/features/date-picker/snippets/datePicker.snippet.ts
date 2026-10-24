export const DATE_PICKER_HTML = `
<label for="event-date" class="mb-1.5 block text-xs font-semibold text-slate-700">Fecha del evento</label>
<input
  id="event-date"
  name="eventDate"
  type="date"
  value="2026-10-24"
  min="2026-10-01"
  lang="es-ES"
  class="h-11 w-full max-w-sm rounded-lg border border-slate-300 bg-white px-3.5 text-sm shadow-sm accent-blue-700"
/>
`;

export const DATE_PICKER_TSX = `
import { useState } from 'react';

type DatePickerFieldProps = {
  label: string;
  name: string;
  locale?: string;
  min?: string;
  max?: string;
};

const DatePickerField = ({ label, name, locale = 'es-ES', min, max }: DatePickerFieldProps) => {
  const [date, setDate] = useState('2026-10-24');
  const displayDate = date
    ? new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' })
        .format(new Date(
          Number(date.slice(0, 4)),
          Number(date.slice(5, 7)) - 1,
          Number(date.slice(8, 10)),
        ))
    : 'Selecciona una fecha';

  return (
    <label className="grid max-w-sm gap-1.5 text-xs font-semibold text-slate-700">
      {label}
      <span className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm font-normal">
          {displayDate}
        </span>
        <input
          aria-label={label}
          className="h-11 w-full cursor-pointer rounded-lg border border-slate-300 bg-transparent px-3.5 text-transparent accent-blue-700"
          type="date"
          name={name}
          lang={locale}
          value={date}
          min={min}
          max={max}
          onChange={(event) => setDate(event.target.value)}
        />
      </span>
    </label>
  );
};

export const EventDateForm = () => (
  <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
    <DatePickerField label="Fecha del evento" name="eventDate" locale="es-ES" min="2026-01-01" />
    <button className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white" type="submit">
      Guardar
    </button>
  </form>
);
`;
