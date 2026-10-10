import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones';
import { Modal } from '../components';
import { LARGE_MODAL_HTML, LARGE_MODAL_TSX } from '../snippets';

const AUDIT_ROWS = [
  {
    event: 'auth.token.generated',
    user: 'jonathan.j@email.com',
    status: '200 OK',
    tone: 'bg-emerald-50 text-emerald-700',
  },
  {
    event: 'event.schema.update',
    user: 'alex@devconsole.io',
    status: '200 OK',
    tone: 'bg-emerald-50 text-emerald-700',
  },
  {
    event: 'deploy.pipeline.rollback',
    user: 'system.daemon',
    status: '409 Warning',
    tone: 'bg-amber-50 text-amber-700',
  },
];

export function LargeModalDoc() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <ComponentDoc
      title="Modal amplio"
      description="Diálogo de 720px para tablas y contenido denso como auditoría."
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
              fullscreen
            </span>
            <span>Modal Amplio (Large - 720px)</span>
          </button>
          <Modal
            open={open}
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
                  {AUDIT_ROWS.map((row) => (
                    <tr key={row.event}>
                      <td className="p-3 font-sans font-medium text-slate-800">
                        {row.event}
                      </td>
                      <td className="p-3">{row.user}</td>
                      <td className="p-3">
                        <span
                          className={`rounded-full px-2 py-0.5 font-sans text-[10px] font-semibold ${row.tone}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Modal>
        </div>
      }
      htmlCode={LARGE_MODAL_HTML}
      jsxCode={LARGE_MODAL_TSX}
    />
  );
}
