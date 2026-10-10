import { ComponentDoc } from '../../../shared/components/doc';
import { SegmentedControl } from '../components';
import { BUTTON_GROUPS_HTML, BUTTON_GROUPS_TSX } from '../snippets';

const PERIOD_OPTIONS = [
  { value: 'Día', label: 'Día' },
  { value: 'Semana', label: 'Semana' },
  { value: 'Mes', label: 'Mes' },
  { value: 'Año', label: 'Año' },
];

const ALIGN_OPTIONS = [
  { value: 'left', icon: 'format_align_left', ariaLabel: 'Alineación izquierda' },
  { value: 'center', icon: 'format_align_center', ariaLabel: 'Alineación centro' },
  { value: 'right', icon: 'format_align_right', ariaLabel: 'Alineación derecha' },
];

export function ButtonGroupsDoc() {
  return (
    <ComponentDoc
      title="Grupos & segmentados"
      description="Segmentados de texto e iconos con selección, split button y grupo outline."
      preview={
        <div className="flex w-full flex-wrap items-center gap-6">
          <SegmentedControl
            ariaLabel="Periodo"
            defaultValue="Día"
            options={PERIOD_OPTIONS}
          />
          <SegmentedControl
            ariaLabel="Alineación"
            defaultValue="left"
            options={ALIGN_OPTIONS}
          />
          <div className="inline-flex rounded-lg shadow-sm">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-l-lg border-r border-blue-500 bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-[18px]"
              >
                save
              </span>
              <span>Publicar</span>
            </button>
            <button
              type="button"
              aria-label="Opciones de publicación"
              className="inline-flex items-center rounded-r-lg bg-blue-600 px-2 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-[18px]"
              >
                expand_more
              </span>
            </button>
          </div>
          <div className="inline-flex rounded-lg shadow-sm">
            <button
              type="button"
              className="rounded-l-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Anterior
            </button>
            <button
              type="button"
              className="-ml-px border-t border-b border-slate-300 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Hoy
            </button>
            <button
              type="button"
              className="-ml-px rounded-r-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              Siguiente
            </button>
          </div>
        </div>
      }
      htmlCode={BUTTON_GROUPS_HTML}
      jsxCode={BUTTON_GROUPS_TSX}
    />
  );
}
