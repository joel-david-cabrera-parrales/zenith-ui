import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Modal } from '../components';
import { MEDIUM_MODAL_HTML, MEDIUM_MODAL_TSX } from '../snippets';

export const MediumModalDoc = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Modal estándar"
      description="Diálogo de 520px para configuraciones simples con contenido seleccionable."
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
              crop_landscape
            </span>
            <span>Modal Estándar (Medium - 520px)</span>
          </button>
          <Modal
            open={open}
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
        </div>
      }
      htmlCode={MEDIUM_MODAL_HTML}
      jsxCode={MEDIUM_MODAL_TSX}
    />
  );
}
