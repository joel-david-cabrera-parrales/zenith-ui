import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { DatePicker } from '../components';
import { DATE_PICKER_HTML, DATE_PICKER_TSX } from '../snippets';

export const DatePickerDoc = () => {
  const [eventDate, setEventDate] = useState('2026-10-24');
  const [reportDate, setReportDate] = useState('2026-10-15');

  return (
    <ComponentDoc
      title="Date Picker"
      description="Selector de una fecha con calendario mensual, navegación entre meses, restricciones de mínimo/máximo y fechas deshabilitadas. El valor controlado usa el formato ISO yyyy-MM-dd; locale y opciones Intl.DateTimeFormat personalizan su presentación."
      maxWidth="6xl"
      previewOverflow
      preview={
        <div className="grid w-full gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Fecha del evento</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Formato local con fecha mínima y días bloqueados.</p>
            </div>
            <DatePicker
              label="Selecciona una fecha"
              name="eventDate"
              value={eventDate}
              onChange={setEventDate}
              locale="es-ES"
              format={{ day: 'numeric', month: 'long', year: 'numeric' }}
              minDate="2026-10-01"
              disabledDates={['2026-10-12', '2026-10-20']}
            />
            <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              Valor enviado: <code className="font-mono text-slate-700 dark:text-slate-200">{eventDate}</code>
            </p>
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Estados del campo</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Seleccionado, error y deshabilitado.</p>
            </div>
            <DatePicker
              label="Fecha del informe"
              value={reportDate}
              onChange={setReportDate}
              locale="en-US"
              format={{ month: 'short', day: 'numeric', year: 'numeric' }}
            />
            <DatePicker label="Fecha obligatoria" error="Selecciona una fecha para continuar." />
            <DatePicker label="Fecha bloqueada" value="2026-10-24" disabled />
            <p className="text-[11px] leading-5 text-slate-500 dark:text-slate-400">
              Hover resalta el día bajo el puntero; el día actual lleva un anillo y la fecha elegida usa el acento azul. El tema oscuro sigue el tema global.
            </p>
          </div>
        </div>
      }
      htmlCode={DATE_PICKER_HTML}
      jsxCode={DATE_PICKER_TSX}
    />
  );
};
