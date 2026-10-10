import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Modal } from '../components';
import { SMALL_MODAL_HTML, SMALL_MODAL_TSX } from '../snippets';

export function SmallModalDoc() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Modal pequeño"
      description="Diálogo compacto de 400px para avisos breves con una sola acción."
      preview={
        <div className="w-full">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-95"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-base text-slate-500"
            >
              crop_portrait
            </span>
            <span>Modal Pequeño (Small - 400px)</span>
          </button>
          <Modal
            open={open}
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
        </div>
      }
      htmlCode={SMALL_MODAL_HTML}
      jsxCode={SMALL_MODAL_TSX}
    />
  );
}
