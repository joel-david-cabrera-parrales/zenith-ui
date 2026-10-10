import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Drawer } from '../components';
import { SETTINGS_PANEL_HTML, SETTINGS_PANEL_TSX } from '../snippets';

export const SettingsPanelDoc = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Panel de parámetros"
      description="Drawer lateral con entorno de ejecución y variables de seguridad."
      preview={
        <div className="w-full">
          <Button variant="subtle" leadingIcon="dock_to_right" onClick={() => setOpen(true)}>
            Drawer / Panel Lateral Deslizante
          </Button>
          <Drawer
            open={open}
            onClose={close}
            icon="settings"
            title="Panel de Parámetros Globales"
            footer={
              <Button size="sm" onClick={close} className="w-full justify-center">
                Guardar Parámetros
              </Button>
            }
          >
            <div>
              <h4 className="mb-2 font-semibold text-slate-900">
                Entorno de Ejecución
              </h4>
              <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-3 font-mono text-[11px]">
                <div className="flex justify-between">
                  <span className="text-slate-500">ENV:</span>
                  <span className="font-bold text-blue-600">production-cluster-01</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Node:</span>
                  <span className="text-slate-900">v20.12.2 LTS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Región:</span>
                  <span className="text-slate-900">us-east-1</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-slate-900">
                Variables de Seguridad
              </h4>
              <label className="mb-2 flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-3">
                <span>Forzar HTTPS & SSL estricto</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                />
              </label>
              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-3">
                <span>Autenticación 2FA obligatoria</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                />
              </label>
            </div>
          </Drawer>
        </div>
      }
      htmlCode={SETTINGS_PANEL_HTML}
      jsxCode={SETTINGS_PANEL_TSX}
    />
  );
}
