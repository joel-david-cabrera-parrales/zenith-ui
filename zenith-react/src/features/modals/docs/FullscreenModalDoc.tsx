import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Modal } from '../components';
import { FULLSCREEN_MODAL_HTML, FULLSCREEN_MODAL_TSX } from '../snippets';

export function FullscreenModalDoc() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Modal pantalla completa"
      description="Vista enfocada sin distracciones para editores y visualizadores grandes."
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
              fit_screen
            </span>
            <span>Pantalla Completa (Fullscreen)</span>
          </button>
          <Modal
            open={open}
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
      htmlCode={FULLSCREEN_MODAL_HTML}
      jsxCode={FULLSCREEN_MODAL_TSX}
    />
  );
}
