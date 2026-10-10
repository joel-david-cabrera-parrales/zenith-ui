import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Modal } from '../components';
import type { ModalSize } from '../components';
import { MODAL_SIZES_HTML, MODAL_SIZES_TSX } from '../snippets';

const TRIGGERS: { size: ModalSize; icon: string; label: string }[] = [
  { size: 'sm', icon: 'crop_portrait', label: 'Modal Pequeño (Small - 400px)' },
  { size: 'md', icon: 'crop_landscape', label: 'Modal Estándar (Medium - 520px)' },
  { size: 'lg', icon: 'fullscreen', label: 'Modal Amplio (Large - 720px)' },
  { size: 'full', icon: 'fit_screen', label: 'Pantalla Completa (Fullscreen)' },
];

export function ModalSizesDoc() {
  const [open, setOpen] = useState<ModalSize | null>(null);
  const close = () => setOpen(null);

  return (
    <ComponentDoc
      title="Modales por tamaño"
      description="Small (400px), Medium (520px), Large (720px) y Fullscreen. Cierran con ESC, clic en el backdrop o la X."
      preview={
        <div className="w-full">
          <div className="flex flex-wrap items-center gap-3">
            {TRIGGERS.map((trigger) => (
              <button
                key={trigger.size}
                type="button"
                onClick={() => setOpen(trigger.size)}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-95"
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-base text-slate-500"
                >
                  {trigger.icon}
                </span>
                <span>{trigger.label}</span>
              </button>
            ))}
          </div>

          <Modal
            open={open === 'sm'}
            onClose={close}
            size="sm"
            title="Notificaciones activadas"
            description="Se enviará un resumen diario de telemetría y eventos al correo registrado."
            actions={
              <Button size="sm" onClick={close} className="w-full">
                Entendido
              </Button>
            }
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <span aria-hidden="true" className="material-symbols-outlined text-lg">
                notifications
              </span>
            </span>
          </Modal>

          <Modal
            open={open === 'md'}
            onClose={close}
            size="md"
            title="Configuración de Despliegue"
            description="Selecciona la región institucional para alojar los microservicios."
            actions={
              <>
                <Button size="sm" variant="outline" onClick={close}>
                  Cancelar
                </Button>
                <Button size="sm" onClick={close}>
                  Guardar Cambios
                </Button>
              </>
            }
          >
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex cursor-pointer items-center justify-between rounded-xl border border-blue-500 bg-blue-50/50 p-3">
                <div>
                  <p className="font-semibold text-slate-900">us-east-1</p>
                  <p className="text-[10px] text-slate-500">N. Virginia (Primaria)</p>
                </div>
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-sm text-blue-600"
                >
                  check_circle
                </span>
              </div>
              <div className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-3 hover:border-slate-300">
                <div>
                  <p className="font-semibold text-slate-900">sa-east-1</p>
                  <p className="text-[10px] text-slate-500">São Paulo (Latam)</p>
                </div>
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-sm text-slate-300"
                >
                  radio_button_unchecked
                </span>
              </div>
            </div>
          </Modal>

          <Modal
            open={open === 'lg'}
            onClose={close}
            size="lg"
            title="Historial de Auditoría & Logs"
            description="Últimos eventos registrados en el clúster institucional"
            actions={
              <Button size="sm" variant="secondary" onClick={close}>
                Cerrar Auditoría
              </Button>
            }
          >
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-slate-200 bg-slate-50 font-medium text-slate-600">
                  <tr>
                    <th className="p-3">Evento</th>
                    <th className="p-3">Usuario</th>
                    <th className="p-3">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono text-[11px] text-slate-600">
                  <tr>
                    <td className="p-3 font-sans font-medium text-slate-800">
                      auth.token.generated
                    </td>
                    <td className="p-3">jonathan.j@email.com</td>
                    <td className="p-3">
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-sans text-[10px] font-semibold text-emerald-700">
                        200 OK
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-sans font-medium text-slate-800">
                      deploy.pipeline.rollback
                    </td>
                    <td className="p-3">system.daemon</td>
                    <td className="p-3">
                      <span className="rounded-full bg-amber-50 px-2 py-0.5 font-sans text-[10px] font-semibold text-amber-700">
                        409 Warning
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Modal>

          <Modal
            open={open === 'full'}
            onClose={close}
            size="full"
            title="Zenith Dash // Explorador de Esquemas"
            description="Modo pantalla completa enfocado"
          >
            <div className="mx-auto max-w-xl space-y-4 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-5xl text-blue-600"
              >
                developer_board
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Editor de Esquema & Modelo de Base de Datos
              </h3>
              <p className="text-xs leading-relaxed text-slate-500">
                Edición libre de diagramas entidad-relación y visualizadores
                de gran tamaño sin distracciones.
              </p>
              <Button size="sm" onClick={close}>
                Finalizar y Volver al Catálogo
              </Button>
            </div>
          </Modal>
        </div>
      }
      htmlCode={MODAL_SIZES_HTML}
      jsxCode={MODAL_SIZES_TSX}
    />
  );
}
