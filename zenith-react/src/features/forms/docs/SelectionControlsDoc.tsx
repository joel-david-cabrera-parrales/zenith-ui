import { ComponentDoc } from '../../../shared/components/doc';
import { Switch } from '../components';
import {
  SELECTION_CONTROLS_HTML,
  SELECTION_CONTROLS_TSX,
} from '../snippets';

export function SelectionControlsDoc() {
  return (
    <ComponentDoc
      title="Selección (checkbox, radio, switch)"
      description="Controles de selección en sus tres estados: default, activo y disabled."
      preview={
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="space-y-3">
            <span className="block font-mono text-[10px] font-semibold text-slate-500">
              CHECKBOXES
            </span>
            <label className="flex cursor-pointer items-center gap-2.5 select-none">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
              />
              <span className="text-sm text-slate-900">
                Default / Sin marcar
              </span>
            </label>
            <label className="flex cursor-pointer items-center gap-2.5 select-none">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
              />
              <span className="text-sm text-slate-900">Checked activo</span>
            </label>
            <label className="flex cursor-not-allowed items-center gap-2.5 opacity-50 select-none">
              <input
                type="checkbox"
                defaultChecked
                disabled
                className="h-4 w-4 rounded border-slate-300 text-slate-500"
              />
              <span className="text-sm text-slate-500">Disabled checked</span>
            </label>
          </div>
          <div className="space-y-3">
            <span className="block font-mono text-[10px] font-semibold text-slate-500">
              RADIO BUTTONS
            </span>
            <label className="flex cursor-pointer items-center gap-2.5 select-none">
              <input
                type="radio"
                name="demo-radio"
                className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-600"
              />
              <span className="text-sm text-slate-900">Opción A (Libre)</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2.5 select-none">
              <input
                type="radio"
                name="demo-radio"
                defaultChecked
                className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-600"
              />
              <span className="text-sm text-slate-900">Opción B (Activa)</span>
            </label>
            <label className="flex cursor-not-allowed items-center gap-2.5 opacity-50 select-none">
              <input
                type="radio"
                disabled
                className="h-4 w-4 border-slate-300 text-slate-500"
              />
              <span className="text-sm text-slate-500">
                Opción C (Bloqueada)
              </span>
            </label>
          </div>
          <div className="space-y-3">
            <span className="block font-mono text-[10px] font-semibold text-slate-500">
              SWITCHES
            </span>
            <Switch label="Modo Rápido" />
            <Switch label="Auto-Sync Activo" defaultChecked />
            <Switch label="Forzar SSL" defaultChecked disabled />
          </div>
        </div>
      }
      htmlCode={SELECTION_CONTROLS_HTML}
      jsxCode={SELECTION_CONTROLS_TSX}
    />
  );
}
