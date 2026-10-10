import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Modal } from '../components';
import { SUCCESS_MODAL_HTML, SUCCESS_MODAL_TSX } from '../snippets';

export const SuccessModalDoc = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Modal de éxito"
      description="Confirmación centrada con icono y acción principal en verde."
      preview={
        <div className="w-full">
          <Button
            variant="success"
            leadingIcon="check_circle"
            onClick={() => setOpen(true)}
          >
            Modal Confirmación / Éxito
          </Button>
          <Modal open={open} onClose={close} size="base" showClose={false}>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600">
                <span aria-hidden="true" className="material-symbols-outlined text-2xl">
                  check_circle
                </span>
              </div>
              <h3 className="mb-1 text-base font-bold text-slate-900">
                ¡Evento Publicado con Éxito!
              </h3>
              <p className="mb-6 text-xs leading-relaxed text-slate-500">
                El evento ya se encuentra sincronizado y visible en el portal
                público.
              </p>
              <div className="flex justify-center gap-2">
                <Button size="sm" variant="outline" onClick={close}>
                  Ver Lista
                </Button>
                <Button size="sm" variant="success" onClick={close}>
                  Copiar Enlace
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      }
      htmlCode={SUCCESS_MODAL_HTML}
      jsxCode={SUCCESS_MODAL_TSX}
    />
  );
}
