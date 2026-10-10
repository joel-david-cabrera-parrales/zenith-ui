import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Modal } from '../components';
import { INFO_MODAL_HTML, INFO_MODAL_TSX } from '../snippets';

export const InfoModalDoc = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Modal informativo"
      description="Aviso neutral con icono y una sola acción de confirmación."
      preview={
        <div className="w-full">
          <Button leadingIcon="info" onClick={() => setOpen(true)}>
            Modal Informativo
          </Button>
          <Modal
            open={open}
            onClose={close}
            size="base"
            showClose={false}
            actions={
              <Button size="sm" onClick={close}>
                Entendido, gracias
              </Button>
            }
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                <span aria-hidden="true" className="material-symbols-outlined text-xl">
                  info
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Mantenimiento de Servidores
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Actualización del motor v2.4.0 programada. Sin interrupción
                  en los endpoints públicos.
                </p>
              </div>
            </div>
          </Modal>
        </div>
      }
      htmlCode={INFO_MODAL_HTML}
      jsxCode={INFO_MODAL_TSX}
    />
  );
}
