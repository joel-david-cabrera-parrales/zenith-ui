import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Drawer } from '../components';
import {
  CONNECTION_DRAWER_HTML,
  CONNECTION_DRAWER_TSX,
} from '../snippets';

export const ConnectionDrawerDoc = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Drawer de conexión"
      description="Panel derecho estándar (450px) con estado de servicio y ajustes rápidos."
      preview={
        <div className="w-full">
          <Button variant="outline" leadingIcon="dock_to_right" onClick={() => setOpen(true)}>
            Drawer Derecho Estándar (Right - 450px)
          </Button>
          <Drawer
            open={open}
            onClose={close}
            icon="tune"
            title="Detalles de Conexión"
            subtitle="Drawer Derecho (450px)"
            footer={
              <>
                <Button size="sm" variant="outline" onClick={close}>
                  Cancelar
                </Button>
                <Button size="sm" onClick={close} className="flex-1 justify-center">
                  Aplicar Cambios
                </Button>
              </>
            }
          >
            <div className="space-y-2 rounded-xl border border-blue-100 bg-blue-50/50 p-3.5">
              <div className="flex items-center justify-between font-medium">
                <span className="text-slate-700">Estado de Servicio</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600" />
                  En línea
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Conexión TLS 1.3 autenticada vía Zenith Gateway.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900">Configuración Rápida</h4>
              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-3 hover:bg-slate-50">
                <div>
                  <p className="font-medium text-slate-800">
                    Sincronización en segundo plano
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Frecuencia estimada cada 15 segundos
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                />
              </label>
              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-3 hover:bg-slate-50">
                <div>
                  <p className="font-medium text-slate-800">
                    Alertas Push a Discord/Slack
                  </p>
                  <p className="text-[10px] text-slate-400">Notificar errores HTTP 5xx</p>
                </div>
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
                />
              </label>
            </div>
          </Drawer>
        </div>
      }
      htmlCode={CONNECTION_DRAWER_HTML}
      jsxCode={CONNECTION_DRAWER_TSX}
    />
  );
}
