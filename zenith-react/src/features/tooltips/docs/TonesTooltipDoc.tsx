import { ComponentDoc } from '../../../shared/components/doc';
import { Tooltip } from '../components';
import type { TooltipTone } from '../components';
import { TONES_TOOLTIP_HTML, TONES_TOOLTIP_TSX } from '../snippets';

const TONES: Array<{ tone: TooltipTone; label: string; tip: string; trigger: string }> = [
  { tone: 'dark', label: 'Oscuro', tip: 'Tono oscuro por defecto', trigger: 'rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700' },
  { tone: 'light', label: 'Claro', tip: 'Tono claro para fondos oscuros', trigger: 'rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50' },
  { tone: 'info', label: 'Info', tip: 'Dato informativo del panel', trigger: 'rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500' },
  { tone: 'success', label: 'Exito', tip: 'Despliegue completado sin errores', trigger: 'rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-500' },
  { tone: 'warning', label: 'Aviso', tip: 'La cuota de API esta al 85%', trigger: 'rounded-lg bg-amber-400 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-amber-300' },
  { tone: 'danger', label: 'Error', tip: 'Fallo la sincronizacion del cluster', trigger: 'rounded-lg bg-rose-600 px-3 py-2 text-sm font-medium text-white hover:bg-rose-500' },
];

export const TonesTooltipDoc = () => {
  return (
    <ComponentDoc
      title="Tonos semanticos"
      description="Seis tonos sobre la paleta slate/blue: oscuro por defecto, claro con anillo para fondos oscuros y cuatro semanticos que heredan el color en burbuja y flecha."
      preview={
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-10">
          {TONES.map((item) => (
            <Tooltip key={item.tone} content={item.tip} tone={item.tone}>
              <button type="button" className={`${item.trigger} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}>
                {item.label}
              </button>
            </Tooltip>
          ))}
        </div>
      }
      htmlCode={TONES_TOOLTIP_HTML}
      jsxCode={TONES_TOOLTIP_TSX}
      maxWidth="4xl"
    />
  );
};
