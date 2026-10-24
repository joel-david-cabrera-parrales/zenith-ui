import { useState } from 'react';
import type { FormEvent } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { RichTextEditor } from '../components';
import { RICH_TEXT_USE_CASES_HTML, RICH_TEXT_USE_CASES_TSX } from '../snippets';

const INITIAL_REPLY = '<p>Gracias por compartir la propuesta. La revisamos con el equipo y te respondemos hoy.</p>';
const ARTICLE_CONTENT = '<h2>Observabilidad en una sola vista</h2><p>Cuando cada señal vive en una herramienta distinta, entender un incidente cuesta más de lo necesario. Reunimos el contexto para que los equipos puedan investigar desde una misma página.</p><blockquote>Menos tiempo buscando señales. Más tiempo resolviendo lo que importa.</blockquote>';

export const RichTextEditorUseCasesDoc = () => {
  const [reply, setReply] = useState(INITIAL_REPLY);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <ComponentDoc
      title="Ejemplos de uso"
      description="Usa la barra compacta en respuestas breves y el modo de solo lectura para mostrar contenido enriquecido dentro de una página."
      maxWidth="6xl"
      preview={
        <div className="grid w-full gap-5 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Respuesta rápida</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Toolbar compacta para comentarios o respuestas.</p>
            </div>
            <RichTextEditor
              label="Comentario"
              name="reply"
              toolbar="compact"
              minHeight={112}
              showCount={false}
              value={reply}
              onChange={setReply}
              placeholder="Escribe una respuesta…"
            />
            <div className="flex items-center justify-between gap-3">
              <p role="status" className="text-xs text-emerald-700 dark:text-emerald-300">
                {submitted ? 'Respuesta guardada.' : ''}
              </p>
              <button type="submit" className="inline-flex h-9 items-center gap-2 rounded-lg bg-blue-700 px-3.5 text-xs font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Responder
                <span aria-hidden="true" className="material-symbols-outlined text-[15px]">send</span>
              </button>
            </div>
          </form>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 dark:border-slate-800">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Vista de artículo</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">El mismo contenido en modo de solo lectura.</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <span aria-hidden="true" className="material-symbols-outlined text-[14px]">visibility</span>
                Vista previa
              </span>
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-center gap-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                <span className="rounded bg-blue-50 px-2 py-1 font-mono uppercase text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">Engineering</span>
                <span>·</span>
                <span>5 min de lectura</span>
              </div>
              <RichTextEditor value={ARTICLE_CONTENT} readOnly showCount={false} minHeight={180} />
            </div>
          </article>

          <div className="grid gap-5 lg:col-span-2 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <RichTextEditor
                label="Resumen del anuncio"
                error="Escribe un resumen antes de publicar."
                toolbar="compact"
                minHeight={90}
                showCount={false}
                placeholder="Añade un resumen para continuar…"
              />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <RichTextEditor
                label="Contenido bloqueado"
                defaultValue="<p>Este documento está bloqueado mientras se procesa la publicación.</p>"
                disabled
                toolbar="compact"
                minHeight={90}
                showCount={false}
              />
            </div>
          </div>
        </div>
      }
      htmlCode={RICH_TEXT_USE_CASES_HTML}
      jsxCode={RICH_TEXT_USE_CASES_TSX}
    />
  );
};
