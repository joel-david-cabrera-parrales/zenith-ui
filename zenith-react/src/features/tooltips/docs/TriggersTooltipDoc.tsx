import { ComponentDoc } from '../../../shared/components/doc';
import { Tooltip } from '../components';
import { TRIGGERS_TOOLTIP_HTML, TRIGGERS_TOOLTIP_TSX } from '../snippets';

export const TriggersTooltipDoc = () => {
  return (
    <ComponentDoc
      title="Triggers y casos borde"
      description="Funciona sobre iconos, avatares y botones: usa elementos enfocables como triggers para soporte de teclado. Con disabled no se muestra, y el texto largo envuelve hasta max-w-64 sin desbordar."
      preview={
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white p-10">
          <Tooltip content="3 sin leer" size="sm">
            <button type="button" aria-label="Notificaciones" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              <span aria-hidden="true" className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
          </Tooltip>
          <Tooltip content="Jonathan J. - Admin" size="sm">
            <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              JJ
            </button>
          </Tooltip>
          <Tooltip content="Nunca veras esto" disabled>
            <button type="button" disabled className="cursor-not-allowed rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-300">
              Deshabilitado
            </button>
          </Tooltip>
          <Tooltip content="El contenido envuelve hasta max-w-64 y nunca desborda la pantalla en movil.">
            <button type="button" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Texto largo
            </button>
          </Tooltip>
        </div>
      }
      htmlCode={TRIGGERS_TOOLTIP_HTML}
      jsxCode={TRIGGERS_TOOLTIP_TSX}
      maxWidth="4xl"
    />
  );
};
