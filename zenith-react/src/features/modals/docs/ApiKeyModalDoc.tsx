import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { useCopyToClipboard } from '../../../shared/hooks';
import { Modal } from '../components';
import { API_KEY_MODAL_HTML, API_KEY_MODAL_TSX } from '../snippets';

const TOKEN = 'zenith_live_pk_884f629fe01a4bc';

export const ApiKeyModalDoc = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const { copied, copy } = useCopyToClipboard(2000);

  return (
    <ComponentDoc
      title="Modal de API key"
      description="Token generado una sola vez, con copia segura integrada."
      preview={
        <div className="w-full">
          <Button variant="outline" leadingIcon="key" onClick={() => setOpen(true)}>
            Generar API Key (Copia Segura)
          </Button>
          <Modal open={open} onClose={close} size="base" showClose={false}>
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <span aria-hidden="true" className="material-symbols-outlined text-lg">
                key
              </span>
            </div>
            <h3 className="mb-1 text-base font-bold text-slate-900">
              Nueva Clave de API Generada
            </h3>
            <p className="mb-4 text-xs text-slate-500">
              Guarda este token en un lugar seguro. Por motivos de seguridad,
              no volverá a mostrarse.
            </p>
            <div className="mb-6 flex items-center justify-between rounded-xl bg-slate-900 p-3 font-mono text-xs text-slate-200">
              <span className="mr-2 truncate text-emerald-400">{TOKEN}</span>
              <button
                type="button"
                onClick={() => void copy(TOKEN)}
                className="flex shrink-0 items-center gap-1 rounded bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-slate-700"
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-xs"
                >
                  {copied ? 'check' : 'content_copy'}
                </span>
                {copied ? '¡Copiado!' : 'Copiar'}
              </button>
            </div>
            <Button size="sm" onClick={close} className="w-full justify-center">
              He guardado mi clave
            </Button>
          </Modal>
        </div>
      }
      htmlCode={API_KEY_MODAL_HTML}
      jsxCode={API_KEY_MODAL_TSX}
    />
  );
}
