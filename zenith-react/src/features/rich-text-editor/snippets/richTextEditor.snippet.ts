export const RICH_TEXT_EDITOR_HTML = `
<div class="overflow-hidden rounded-xl border border-slate-300 bg-white">
  <div role="toolbar" aria-label="Formato de texto" class="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 p-2">
    <button type="button" aria-label="Negrita" class="h-8 w-8 rounded-md text-slate-600 hover:bg-white"><span class="material-symbols-outlined">format_bold</span></button>
    <button type="button" aria-label="Cursiva" class="h-8 w-8 rounded-md text-slate-600 hover:bg-white"><span class="material-symbols-outlined">format_italic</span></button>
    <button type="button" aria-label="Subrayado" class="h-8 w-8 rounded-md text-slate-600 hover:bg-white"><span class="material-symbols-outlined">format_underlined</span></button>
    <button type="button" aria-label="Lista con viñetas" class="h-8 w-8 rounded-md text-slate-600 hover:bg-white"><span class="material-symbols-outlined">format_list_bulleted</span></button>
    <button type="button" aria-label="Lista numerada" class="h-8 w-8 rounded-md text-slate-600 hover:bg-white"><span class="material-symbols-outlined">format_list_numbered</span></button>
    <button type="button" aria-label="Insertar enlace" class="h-8 w-8 rounded-md text-slate-600 hover:bg-white"><span class="material-symbols-outlined">link</span></button>
  </div>
  <div contenteditable="true" role="textbox" aria-label="Descripción del evento" aria-multiline="true" class="min-h-56 px-5 py-4 text-sm leading-7 text-slate-700 outline-none">
    <p>Presentamos una forma más clara de entender lo que ocurre en tu infraestructura.</p>
    <h2>Qué veremos</h2>
    <ul><li>Métricas y trazas en una vista unificada.</li><li>Flujos para investigar incidentes.</li></ul>
    <p>Consulta el <a href="https://example.com/agenda" class="text-blue-700 underline">programa completo</a>.</p>
  </div>
  <div class="flex items-center justify-between border-t border-slate-100 px-4 py-2 text-[11px] text-slate-500">
    <span>Contenido listo para guardar · 38 palabras</span><span class="font-mono">HTML</span>
  </div>
</div>
`;

export const RICH_TEXT_EDITOR_TSX = `
// Instala las dependencias: @tiptap/react, @tiptap/starter-kit,
// @tiptap/extension-link y @tiptap/extension-underline.
import { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';

type RichTextEditorProps = {
  value: string;
  onChange: (html: string) => void;
  toolbar?: 'full' | 'compact';
};

const INITIAL_CONTENT = '<p>Presentamos una forma más clara de entender tu infraestructura.</p><h2>Qué veremos</h2><ul><li>Métricas y trazas unificadas.</li><li>Flujos para investigar incidentes.</li></ul>';

const RichTextEditor = ({ value, onChange, toolbar = 'full' }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Underline,
      Link.configure({ openOnClick: false }),
    ],
    content: value,
    editorProps: { attributes: { role: 'textbox', 'aria-label': 'Descripción del evento', 'aria-multiline': 'true' } },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  const link = () => {
    const href = window.prompt('Introduce la URL del enlace');
    if (href) editor.chain().focus().setLink({ href }).run();
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-300 bg-white">
      <div role="toolbar" aria-label="Formato de texto" className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 p-2">
        <button type="button" aria-label="Negrita" aria-pressed={editor.isActive('bold')} onMouseDown={(event) => event.preventDefault()} onClick={() => editor.chain().focus().toggleBold().run()} className="h-8 w-8 rounded-md hover:bg-white">B</button>
        <button type="button" aria-label="Cursiva" aria-pressed={editor.isActive('italic')} onMouseDown={(event) => event.preventDefault()} onClick={() => editor.chain().focus().toggleItalic().run()} className="h-8 w-8 rounded-md italic hover:bg-white">I</button>
        {toolbar === 'full' && <button type="button" aria-label="Subrayado" onMouseDown={(event) => event.preventDefault()} onClick={() => editor.chain().focus().toggleUnderline().run()} className="h-8 w-8 rounded-md underline hover:bg-white">U</button>}
        {toolbar === 'full' && <button type="button" aria-label="Tachado" onMouseDown={(event) => event.preventDefault()} onClick={() => editor.chain().focus().toggleStrike().run()} className="h-8 w-8 rounded-md line-through hover:bg-white">S</button>}
        <button type="button" aria-label="Lista con viñetas" onMouseDown={(event) => event.preventDefault()} onClick={() => editor.chain().focus().toggleBulletList().run()} className="h-8 w-8 rounded-md hover:bg-white">•</button>
        {toolbar === 'full' && <button type="button" aria-label="Lista numerada" onMouseDown={(event) => event.preventDefault()} onClick={() => editor.chain().focus().toggleOrderedList().run()} className="h-8 w-8 rounded-md hover:bg-white">1.</button>}
        {toolbar === 'full' && <button type="button" aria-label="Cita" onMouseDown={(event) => event.preventDefault()} onClick={() => editor.chain().focus().toggleBlockquote().run()} className="h-8 w-8 rounded-md hover:bg-white">“</button>}
        <button type="button" aria-label="Insertar enlace" onMouseDown={(event) => event.preventDefault()} onClick={link} className="h-8 w-8 rounded-md hover:bg-white">↗</button>
        {toolbar === 'full' && <button type="button" aria-label="Deshacer" onMouseDown={(event) => event.preventDefault()} onClick={() => editor.chain().focus().undo().run()} className="ml-auto h-8 w-8 rounded-md hover:bg-white">↶</button>}
        {toolbar === 'full' && <button type="button" aria-label="Rehacer" onMouseDown={(event) => event.preventDefault()} onClick={() => editor.chain().focus().redo().run()} className="h-8 w-8 rounded-md hover:bg-white">↷</button>}
      </div>
      <EditorContent editor={editor} className="min-h-56 px-5 py-4 text-sm leading-7 text-slate-700 outline-none" />
    </div>
  );
};

export const RichTextEditorExample = () => {
  const [html, setHtml] = useState(INITIAL_CONTENT);
  return (
    <form onSubmit={(event) => { event.preventDefault(); console.log(html); }} className="space-y-3">
      <p className="block text-xs font-semibold text-slate-700">Descripción del evento</p>
      <RichTextEditor value={html} onChange={setHtml} />
      <input type="hidden" name="description" value={html} readOnly />
      <button type="submit" className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white">Guardar descripción</button>
    </form>
  );
};
`;
