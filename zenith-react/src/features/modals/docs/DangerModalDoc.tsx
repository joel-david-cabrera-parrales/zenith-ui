import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Modal } from '../components';
import { DANGER_MODAL_HTML, DANGER_MODAL_TSX } from '../snippets';

export function DangerModalDoc() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Modal de peligro"
      description="Acción irreversible con confirmación escrita y borde en rojo."
      preview={
        <div className="w-full">
          <Button
            variant="danger"
            leadingIcon="error"
            onClick={() => setOpen(true)}
          >
            Modal Error / Eliminar
          </Button>
          <Modal open={open} onClose={close} size="base" tone="danger" showClose={false}>
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 text-rose-600">
                <span aria-hidden="true" className="material-symbols-outlined text-xl">
                  delete_forever
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-rose-950">
                  Eliminar clúster de producción
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Esta acción es{' '}
                  <strong className="text-rose-600">irreversible</strong>.
                </p>
              </div>
            </div>
            <div className="mt-4 mb-5 rounded-lg border border-rose-100 bg-rose-50/60 p-3">
              <p className="text-[11px] text-rose-700">
                Por seguridad, escribe{' '}
                <span className="font-mono font-bold">DELETE-CLUSTER-09</span>{' '}
                para confirmar:
              </p>
              <input
                type="text"
                placeholder="DELETE-CLUSTER-09"
                aria-label="Confirmación de eliminación"
                className="mt-2 w-full rounded-md border border-rose-200 bg-white px-3 py-1.5 font-mono text-xs focus:ring-1 focus:ring-rose-500 focus:outline-none"
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button size="sm" variant="outline" onClick={close}>
                Cancelar
              </Button>
              <Button size="sm" variant="danger" onClick={close}>
                Eliminar Definitivamente
              </Button>
            </div>
          </Modal>
        </div>
      }
      htmlCode={DANGER_MODAL_HTML}
      jsxCode={DANGER_MODAL_TSX}
    />
  );
}
