import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { RichTextEditor } from '../components';
import { RICH_TEXT_EDITOR_HTML, RICH_TEXT_EDITOR_TSX } from '../snippets';

const INITIAL_CONTENT = '<p>Presentamos una forma más clara de entender lo que ocurre en tu infraestructura. En esta sesión conocerás la nueva consola de observabilidad.</p><h2>Qué veremos</h2><ul><li>Métricas y trazas en una vista unificada.</li><li>Un flujo para investigar incidentes.</li></ul><p>Consulta el <a href="https://example.com/agenda">programa completo</a>.</p>';

export const RichTextEditorDoc = () => {
  const [html, setHtml] = useState(INITIAL_CONTENT);

  return (
    <ComponentDoc
      title="Editor de texto enriquecido"
      description="Editor basado en TipTap con formato de texto, títulos, listas, citas y enlaces. El contenido se expone como HTML para conectarlo a formularios."
      maxWidth="6xl"
      preview={
        <div className="w-full space-y-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Nuevo evento</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Descripción que verán los asistentes</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
              <span aria-hidden="true" className="material-symbols-outlined text-[15px]">cloud_done</span>
              Listo para guardar
            </span>
          </div>
          <RichTextEditor
            label="Descripción"
            description="Añade la agenda, los puntos clave y enlaces útiles."
            name="description"
            value={html}
            onChange={setHtml}
            minHeight={280}
          />
          <details className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950">
            <summary className="cursor-pointer text-xs font-semibold text-slate-700 dark:text-slate-200">Ver HTML generado</summary>
            <pre className="mt-3 overflow-auto whitespace-pre-wrap break-all font-mono text-[11px] leading-5 text-slate-600 dark:text-slate-400">{html}</pre>
          </details>
        </div>
      }
      htmlCode={RICH_TEXT_EDITOR_HTML}
      jsxCode={RICH_TEXT_EDITOR_TSX}
    />
  );
};
