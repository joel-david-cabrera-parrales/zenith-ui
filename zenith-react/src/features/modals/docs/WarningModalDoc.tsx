import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Modal } from '../components';
import { WARNING_MODAL_HTML, WARNING_MODAL_TSX } from '../snippets';

export function WarningModalDoc() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Modal de advertencia"
      description="Decisión reversible con acción principal en ámbar."
      preview={
        <div className="w-full">
          <Button
            variant="warning"
            leadingIcon="warning"
            onClick={() => setOpen(true)}
          >
            Modal Advertencia (Warning)
          </Button>
          <Modal open={open} onClose={close} size="base" showClose={false}>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-600">
                <span aria-hidden="true" className="material-symbols-outlined text-xl">
                  warning
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  ¿Descartar cambios sin guardar?
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Los cambios no sincronizados se perderán definitivamente.
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2 border-t border-slate-100 pt-2">
              <Button size="sm" variant="warning" onClick={close}>
                Descartar Cambios
              </Button>
              <button
                type="button"
                onClick={close}
                className="rounded-lg bg-slate-100 px-4 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-200"
              >
                Continuar Editando
              </button>
            </div>
          </Modal>
        </div>
      }
      htmlCode={WARNING_MODAL_HTML}
      jsxCode={WARNING_MODAL_TSX}
    />
  );
}
