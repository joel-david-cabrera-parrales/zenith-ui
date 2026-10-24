export const RICH_TEXT_USE_CASES_HTML = `
<form class="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
  <label class="block text-xs font-semibold text-slate-700">Respuesta rápida</label>
  <div class="overflow-hidden rounded-xl border border-slate-300">
    <div role="toolbar" aria-label="Formato de respuesta" class="flex items-center gap-1 border-b border-slate-200 bg-slate-50 p-1.5">
      <button type="button" aria-label="Negrita" class="h-8 w-8 rounded-md">B</button>
      <button type="button" aria-label="Cursiva" class="h-8 w-8 rounded-md">I</button>
      <button type="button" aria-label="Insertar enlace" class="h-8 w-8 rounded-md">↗</button>
    </div>
    <div contenteditable="true" role="textbox" aria-label="Escribe una respuesta" aria-multiline="true" class="min-h-28 px-4 py-3 text-sm leading-6">
      <p>Gracias por compartir la propuesta. Te respondemos hoy.</p>
    </div>
  </div>
  <button type="submit" class="rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white">Responder</button>
</form>
<article class="rounded-xl border border-slate-200 bg-white p-5">
  <h2 class="text-xl font-bold text-slate-900">Observabilidad en una sola vista</h2>
  <p class="mt-3 text-sm leading-6 text-slate-600">Consulta métricas y trazas sin cambiar de herramienta.</p>
</article>
<div class="grid gap-4 md:grid-cols-2">
  <div class="rounded-xl border border-rose-200 bg-white p-4"><label class="mb-2 block text-xs font-semibold text-slate-700">Resumen · error</label><div class="min-h-20 rounded-lg border border-rose-300 p-3 text-sm text-slate-400">Añade un resumen…</div><p class="mt-1 text-[11px] text-rose-600">Escribe un resumen antes de publicar.</p></div>
  <div class="rounded-xl border border-slate-200 bg-slate-100 p-4"><label class="mb-2 block text-xs font-semibold text-slate-500">Contenido bloqueado · disabled</label><div aria-disabled="true" class="min-h-20 rounded-lg border border-slate-200 bg-slate-100 p-3 text-sm text-slate-400">El documento está bloqueado mientras se procesa la publicación.</div></div>
</div>
`;

export const RICH_TEXT_USE_CASES_TSX = `
// Instala las dependencias: @tiptap/react, @tiptap/starter-kit,
// @tiptap/extension-link y @tiptap/extension-underline.
import { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';

type MiniRichTextEditorProps = {
  value: string;
  onChange?: (html: string) => void;
  readOnly?: boolean;
  compact?: boolean;
  disabled?: boolean;
  error?: string;
};

const MiniRichTextEditor = ({ value, onChange, readOnly = false, compact = false, disabled = false, error }: MiniRichTextEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link.configure({ openOnClick: false })],
    content: value,
    editable: !readOnly && !disabled,
    editorProps: { attributes: { role: 'textbox', 'aria-label': 'Contenido enriquecido', 'aria-multiline': 'true' } },
    onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
  });
  if (!editor) return null;

  return (
    <div className={'overflow-hidden rounded-xl border bg-white ' + (error ? 'border-rose-300' : disabled ? 'border-slate-200 bg-slate-100 opacity-60' : 'border-slate-300')}>
      {!readOnly && (
        <div role="toolbar" aria-label="Formato de texto" className="flex items-center gap-1 border-b border-slate-200 bg-slate-50 p-1.5">
          <button type="button" aria-label="Negrita" disabled={disabled} onMouseDown={(event) => event.preventDefault()} onClick={() => editor.chain().focus().toggleBold().run()} className="h-8 w-8 rounded-md hover:bg-white">B</button>
          <button type="button" aria-label="Cursiva" disabled={disabled} onMouseDown={(event) => event.preventDefault()} onClick={() => editor.chain().focus().toggleItalic().run()} className="h-8 w-8 rounded-md hover:bg-white">I</button>
          {!compact && <button type="button" aria-label="Lista" disabled={disabled} onMouseDown={(event) => event.preventDefault()} onClick={() => editor.chain().focus().toggleBulletList().run()} className="h-8 w-8 rounded-md hover:bg-white">•</button>}
          <button type="button" aria-label="Insertar enlace" disabled={disabled} onMouseDown={(event) => event.preventDefault()} onClick={() => { const href = window.prompt('URL del enlace'); if (href) editor.chain().focus().setLink({ href }).run(); }} className="h-8 w-8 rounded-md hover:bg-white">↗</button>
        </div>
      )}
      <EditorContent editor={editor} className="min-h-28 px-4 py-3 text-sm leading-6 text-slate-700 outline-none" />
      {error && <p role="alert" className="border-t border-rose-100 px-3 py-2 text-[11px] text-rose-600">{error}</p>}
    </div>
  );
};

export const RichTextUseCases = () => {
  const [reply, setReply] = useState('<p>Gracias por compartir la propuesta. Te respondemos hoy.</p>');
  const [submitted, setSubmitted] = useState(false);
  const article = '<h2>Observabilidad en una sola vista</h2><p>Consulta métricas y trazas sin cambiar de herramienta.</p>';

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="space-y-3 rounded-xl border border-slate-200 bg-white p-5">
        <label className="block text-xs font-semibold text-slate-700">Respuesta rápida</label>
        <MiniRichTextEditor value={reply} onChange={setReply} compact />
        <button type="submit" className="rounded-lg bg-blue-700 px-3 py-2 text-xs font-semibold text-white">Responder</button>
        {submitted && <p role="status" className="text-xs text-emerald-700">Respuesta guardada.</p>}
      </form>
      <article className="rounded-xl border border-slate-200 bg-white p-5">
        <p className="mb-3 text-xs font-medium text-slate-500">Vista de artículo · Solo lectura</p>
        <MiniRichTextEditor value={article} readOnly />
      </article>
      <div className="grid gap-4 md:col-span-2 md:grid-cols-2">
        <MiniRichTextEditor value="" compact error="Escribe un resumen antes de publicar." />
        <MiniRichTextEditor value="<p>El documento está bloqueado mientras se procesa la publicación.</p>" compact disabled />
      </div>
    </div>
  );
};
`;
