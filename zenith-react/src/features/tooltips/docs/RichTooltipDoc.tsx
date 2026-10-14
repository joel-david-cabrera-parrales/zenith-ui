import { ComponentDoc } from '../../../shared/components/doc';
import { Tooltip } from '../components';
import { RICH_TOOLTIP_HTML, RICH_TOOLTIP_TSX } from '../snippets';

export const RichTooltipDoc = () => {
  return (
    <ComponentDoc
      title="Contenido enriquecido"
      description="El contenido acepta nodos: titulo en seminegrita mas descripcion para atajos de teclado, perfiles de usuario o ayuda contextual con iconos."
      preview={
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-10">
          <Tooltip
            content={
              <span className="block text-left">
                <span className="block text-[13px] font-semibold text-white">Guardar cambios</span>
                <span className="mt-0.5 block text-xs text-slate-300">Persiste el formulario en el servidor.</span>
              </span>
            }
          >
            <button type="button" className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Guardar
              <kbd className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 text-[11px] text-slate-500">Ctrl S</kbd>
            </button>
          </Tooltip>
          <Tooltip
            content={
              <span className="block text-left">
                <span className="block text-[13px] font-semibold text-white">Mariana Duarte</span>
                <span className="mt-0.5 block text-xs text-slate-300">Coordinadora VIP - En linea</span>
              </span>
            }
          >
            <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              MD
            </button>
          </Tooltip>
          <Tooltip
            content={
              <span className="block text-left">
                <span className="block text-[13px] font-semibold text-white">Ventana de sincronizacion</span>
                <span className="mt-0.5 block text-xs text-slate-300">Las replicas se sincronizan cada 30 segundos.</span>
              </span>
            }
          >
            <button type="button" aria-label="Mas informacion" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500 hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              <span aria-hidden="true" className="material-symbols-outlined text-[20px]">info</span>
            </button>
          </Tooltip>
        </div>
      }
      htmlCode={RICH_TOOLTIP_HTML}
      jsxCode={RICH_TOOLTIP_TSX}
      maxWidth="4xl"
    />
  );
};
