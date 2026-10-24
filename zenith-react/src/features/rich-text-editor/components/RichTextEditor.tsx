import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import type { Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';

export type RichTextEditorToolbar = 'full' | 'compact';

export interface RichTextEditorProps {
  value?: string;
  defaultValue?: string;
  onChange?: (html: string) => void;
  label?: string;
  description?: string;
  placeholder?: string;
  error?: string;
  name?: string;
  toolbar?: RichTextEditorToolbar;
  minHeight?: number;
  showCount?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
}

interface EditorMetrics {
  words: number;
  characters: number;
}

interface ToolbarButtonProps {
  label: string;
  icon: string;
  pressed?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

const measureText = (text: string): EditorMetrics => {
  const trimmed = text.trim();
  return {
    words: trimmed === '' ? 0 : trimmed.split(/\s+/).length,
    characters: text.length,
  };
};

const normalizeHref = (href: string): string => {
  const trimmed = href.trim();
  if (/^(https?:\/\/|mailto:|tel:|\/|#)/i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
};

const ToolbarButton = ({
  label,
  icon,
  pressed,
  disabled = false,
  onClick,
}: ToolbarButtonProps) => (
  <button
    type="button"
    aria-label={label}
    aria-pressed={pressed}
    title={label}
    disabled={disabled}
    onMouseDown={(event) => event.preventDefault()}
    onClick={onClick}
    className={cx(
      'flex h-8 w-8 items-center justify-center rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600',
      pressed
        ? 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:ring-blue-800'
        : 'text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white',
      disabled && 'cursor-not-allowed opacity-40',
    )}
  >
    <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
      {icon}
    </span>
  </button>
);

const updateMetrics = (editor: Editor): EditorMetrics =>
  measureText(editor.getText());

export const RichTextEditor = ({
  value,
  defaultValue = '',
  onChange,
  label,
  description,
  placeholder = 'Escribe tu contenido…',
  error,
  name,
  toolbar = 'full',
  minHeight = 220,
  showCount = true,
  disabled = false,
  readOnly = false,
  className = '',
}: RichTextEditorProps) => {
  const generatedId = useId();
  const editorId = `rich-text-${generatedId}`;
  const descriptionId = `${editorId}-description`;
  const errorId = `${editorId}-error`;
  const onChangeRef = useRef(onChange);
  const [metrics, setMetrics] = useState<EditorMetrics>({ words: 0, characters: 0 });
  const [selectionVersion, setSelectionVersion] = useState(0);
  const extensions = useMemo(
    () => [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { target: '_blank', rel: 'noopener noreferrer' },
        isAllowedUri: (href) => /^(https?:|mailto:|tel:|\/|#)/i.test(href),
      }),
      Placeholder.configure({ placeholder }),
    ],
    [placeholder],
  );
  const editor = useEditor(
    {
      extensions,
      content: value ?? defaultValue,
      editable: !disabled && !readOnly,
      editorProps: {
        attributes: {
          id: editorId,
          role: 'textbox',
          'aria-multiline': 'true',
          ...(label
            ? { 'aria-labelledby': `${editorId}-label` }
            : { 'aria-label': 'Editor de texto enriquecido' }),
          'aria-describedby': [description ? descriptionId : '', error ? errorId : '']
            .filter(Boolean)
            .join(' '),
          'aria-invalid': error ? 'true' : 'false',
          class: 'rich-text-prose min-h-full px-4 py-5 text-sm leading-7 text-slate-700 outline-none dark:text-slate-200 sm:px-6 sm:py-6',
        },
      },
      onCreate: ({ editor: createdEditor }) => {
        setMetrics(updateMetrics(createdEditor));
      },
      onUpdate: ({ editor: updatedEditor }) => {
        setMetrics(updateMetrics(updatedEditor));
        onChangeRef.current?.(updatedEditor.getHTML());
      },
      onSelectionUpdate: () => {
        setSelectionVersion((current) => current + 1);
      },
    },
    [extensions],
  );

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    editor?.setEditable(!disabled && !readOnly);
  }, [disabled, editor, readOnly]);

  useEffect(() => {
    if (!editor || value === undefined || editor.getHTML() === value || (value === '' && editor.isEmpty)) return;
    editor.commands.setContent(value, true);
  }, [editor, value]);

  const runCommand = (command: string) => {
    if (!editor) return;
    const chain = editor.chain().focus();
    if (command === 'bold') chain.toggleBold().run();
    if (command === 'italic') chain.toggleItalic().run();
    if (command === 'underline') chain.toggleUnderline().run();
    if (command === 'strike') chain.toggleStrike().run();
    if (command === 'bulletList') chain.toggleBulletList().run();
    if (command === 'orderedList') chain.toggleOrderedList().run();
    if (command === 'blockquote') chain.toggleBlockquote().run();
    if (command === 'undo') chain.undo().run();
    if (command === 'redo') chain.redo().run();
  };

  const toggleLink = () => {
    if (!editor) return;
    if (editor.isActive('link')) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    const input = window.prompt('Introduce la URL del enlace');
    if (!input?.trim()) return;
    editor.chain().focus().setLink({ href: normalizeHref(input) }).run();
  };

  const changeBlock = (block: string) => {
    if (!editor) return;
    const chain = editor.chain().focus();
    if (block === 'paragraph') chain.setParagraph().run();
    if (block === 'h2') chain.setHeading({ level: 2 }).run();
    if (block === 'h3') chain.setHeading({ level: 3 }).run();
  };

  if (!editor) {
    return (
      <div className={cx('animate-pulse rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900', className)}>
        <div className="h-12 border-b border-slate-100 dark:border-slate-800" />
        <div className="h-56" />
      </div>
    );
  }

  void selectionVersion;
  const html = editor.getHTML();
  const isUnavailable = disabled || readOnly;
  const isActive = (name: string, attributes?: Record<string, unknown>) =>
    editor.isActive(name, attributes);

  return (
    <div className={cx('w-full', className)}>
      {label && (
        <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
          <label id={`${editorId}-label`} className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            {label}
          </label>
          {error && <span className="text-[10px] font-medium uppercase tracking-wide text-rose-600">Requerido</span>}
        </div>
      )}

      <div
        className={cx(
          'rich-text-content overflow-hidden rounded-xl border bg-white transition-colors dark:bg-slate-900',
          error
            ? 'border-rose-300 ring-1 ring-rose-100 dark:border-rose-800 dark:ring-rose-950'
            : 'border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 dark:border-slate-700 dark:focus-within:border-blue-500 dark:focus-within:ring-blue-950',
          disabled && 'bg-slate-100 opacity-65 dark:bg-slate-800',
          readOnly && 'bg-slate-50 dark:bg-slate-950',
        )}
      >
        {!readOnly && (
          <div
            role="toolbar"
            aria-label="Formato de texto"
            className={cx(
              'flex flex-wrap items-center gap-1 border-b p-2',
              error ? 'border-rose-100 bg-rose-50/50 dark:border-rose-950 dark:bg-rose-950/20' : 'border-slate-200 bg-slate-50/90 dark:border-slate-800 dark:bg-slate-800/70',
            )}
          >
            {toolbar === 'full' && (
              <>
                <select
                  aria-label="Formato de bloque"
                  value={
                    isActive('heading', { level: 2 })
                      ? 'h2'
                      : isActive('heading', { level: 3 })
                        ? 'h3'
                        : 'paragraph'
                  }
                  disabled={isUnavailable}
                  onChange={(event) => changeBlock(event.target.value)}
                  className="h-8 rounded-md border border-slate-200 bg-white px-2.5 pr-7 text-xs font-medium text-slate-700 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-blue-950"
                >
                  <option value="paragraph">Párrafo</option>
                  <option value="h2">Título</option>
                  <option value="h3">Subtítulo</option>
                </select>
                <span aria-hidden="true" className="mx-1 hidden h-5 w-px bg-slate-200 sm:block dark:bg-slate-700" />
              </>
            )}

            <ToolbarButton label="Negrita" icon="format_bold" pressed={isActive('bold')} disabled={isUnavailable} onClick={() => runCommand('bold')} />
            <ToolbarButton label="Cursiva" icon="format_italic" pressed={isActive('italic')} disabled={isUnavailable} onClick={() => runCommand('italic')} />
            {toolbar === 'full' && (
              <>
                <ToolbarButton label="Subrayado" icon="format_underlined" pressed={isActive('underline')} disabled={isUnavailable} onClick={() => runCommand('underline')} />
                <ToolbarButton label="Tachado" icon="format_strikethrough" pressed={isActive('strike')} disabled={isUnavailable} onClick={() => runCommand('strike')} />
              </>
            )}
            <span aria-hidden="true" className="mx-1 hidden h-5 w-px bg-slate-200 sm:block dark:bg-slate-700" />
            <ToolbarButton label="Lista con viñetas" icon="format_list_bulleted" pressed={isActive('bulletList')} disabled={isUnavailable} onClick={() => runCommand('bulletList')} />
            {toolbar === 'full' && (
              <>
                <ToolbarButton label="Lista numerada" icon="format_list_numbered" pressed={isActive('orderedList')} disabled={isUnavailable} onClick={() => runCommand('orderedList')} />
                <ToolbarButton label="Cita" icon="format_quote" pressed={isActive('blockquote')} disabled={isUnavailable} onClick={() => runCommand('blockquote')} />
              </>
            )}
            <span aria-hidden="true" className="mx-1 hidden h-5 w-px bg-slate-200 sm:block dark:bg-slate-700" />
            <ToolbarButton label={isActive('link') ? 'Quitar enlace' : 'Insertar enlace'} icon="link" pressed={isActive('link')} disabled={isUnavailable} onClick={toggleLink} />
            {toolbar === 'full' && (
              <>
                <ToolbarButton label="Deshacer" icon="undo" disabled={isUnavailable || !editor.can().undo()} onClick={() => runCommand('undo')} />
                <ToolbarButton label="Rehacer" icon="redo" disabled={isUnavailable || !editor.can().redo()} onClick={() => runCommand('redo')} />
              </>
            )}
          </div>
        )}

        <div style={{ minHeight }}>
          <EditorContent editor={editor} />
        </div>

        {showCount && !readOnly && (
          <div className="flex flex-col gap-1.5 border-t border-slate-100 bg-white px-3 py-2.5 text-[11px] text-slate-500 dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between sm:px-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {error ? (
                <span id={errorId} className="inline-flex items-center gap-1 text-rose-600" role="alert">
                  <span aria-hidden="true" className="material-symbols-outlined text-[15px]">error</span>
                  {error}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5">
                  <span aria-hidden="true" className="material-symbols-outlined text-[15px] text-emerald-600">check_circle</span>
                  Contenido listo para guardar
                </span>
              )}
              <span className="hidden h-3 w-px bg-slate-200 sm:block dark:bg-slate-700" />
              <span>{metrics.words} palabras</span>
              <span>{metrics.characters} caracteres</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">HTML</span>
          </div>
        )}
      </div>

      {error && (!showCount || readOnly) && <p id={errorId} role="alert" className="mt-1.5 text-[11px] font-medium text-rose-600">{error}</p>}
      {description && <p id={descriptionId} className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400">{description}</p>}
      {name && <input type="hidden" name={name} value={html} readOnly />}
    </div>
  );
};
