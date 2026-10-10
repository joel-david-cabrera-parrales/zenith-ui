import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Drawer } from '../components';
import { BOTTOM_SHEET_HTML, BOTTOM_SHEET_TSX } from '../snippets';

const ACTIONS = [
  {
    icon: 'restart_alt',
    label: 'Reiniciar Clúster',
    tone: 'text-blue-600',
    hover: 'hover:border-blue-500 hover:bg-blue-50/50',
  },
  {
    icon: 'download_for_offline',
    label: 'Exportar Dump SQL',
    tone: 'text-emerald-600',
    hover: 'hover:border-blue-500 hover:bg-blue-50/50',
  },
  {
    icon: 'pause_circle',
    label: 'Pausar Workers',
    tone: 'text-amber-600',
    hover: 'hover:border-blue-500 hover:bg-blue-50/50',
  },
  {
    icon: 'lock_reset',
    label: 'Revocar Sesiones',
    tone: 'text-rose-600',
    hover: 'hover:border-rose-500 hover:bg-rose-50',
  },
];

export function BottomSheetDoc() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Bottom sheet"
      description="Hoja inferior mobile-first con acciones rápidas en mosaico."
      preview={
        <div className="w-full">
          <Button variant="outline" leadingIcon="vertical_align_bottom" onClick={() => setOpen(true)}>
            Bottom Sheet / Drawer Inferior
          </Button>
          <Drawer
            open={open}
            onClose={close}
            side="bottom"
            icon="touch_app"
            title="Acciones Rápidas (Bottom Sheet)"
            footer={
              <Button
                size="sm"
                variant="subtle"
                onClick={close}
                className="w-full justify-center bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                Cerrar Hoja
              </Button>
            }
          >
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {ACTIONS.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  onClick={close}
                  className={`flex flex-col items-center gap-2 rounded-xl border border-slate-200 p-3 text-center transition-all ${action.hover}`}
                >
                  <span
                    aria-hidden="true"
                    className={`material-symbols-outlined text-2xl ${action.tone}`}
                  >
                    {action.icon}
                  </span>
                  <span className="font-medium text-slate-800">{action.label}</span>
                </button>
              ))}
            </div>
          </Drawer>
        </div>
      }
      htmlCode={BOTTOM_SHEET_HTML}
      jsxCode={BOTTOM_SHEET_TSX}
    />
  );
}
