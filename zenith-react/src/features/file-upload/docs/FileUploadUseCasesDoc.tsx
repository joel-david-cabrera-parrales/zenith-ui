import { useState } from 'react';
import type { FormEvent } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { FileUpload } from '../components';
import { FILE_UPLOAD_USE_CASES_HTML, FILE_UPLOAD_USE_CASES_TSX } from '../snippets';

export const FileUploadUseCasesDoc = () => {
  const [attachments, setAttachments] = useState<File[]>([]);
  const [saved, setSaved] = useState(false);
  const [avatarFiles, setAvatarFiles] = useState<File[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <ComponentDoc
      title="Ejemplos de uso"
      description="Integra la selección local de archivos en un formulario o úsala como campo de preview en una página de perfil."
      maxWidth="6xl"
      preview={
        <div className="grid w-full gap-5 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Nuevo informe</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Adjunta hasta tres documentos para el equipo.</p>
            </div>
            <FileUpload
              label="Documentos"
              name="documents"
              variant="multiple"
              accept=".pdf,.doc,.docx"
              maxFiles={3}
              maxSize={10 * 1024 * 1024}
              onFilesChange={(files) => { setAttachments(files); setSaved(false); }}
            />
            <div className="flex items-center justify-between gap-3">
              <p role="status" className="text-xs text-emerald-700 dark:text-emerald-300">
                {saved ? `${attachments.length} archivo(s) listos en el navegador.` : ''}
              </p>
              <button type="submit" disabled={attachments.length === 0} className="inline-flex h-9 items-center gap-2 rounded-lg bg-blue-700 px-3.5 text-xs font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-50">
                Guardar borrador
                <span aria-hidden="true" className="material-symbols-outlined text-[15px]">save</span>
              </button>
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500">Ejemplo local: al guardar no se realiza ninguna petición.</p>
          </form>

          <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Foto de perfil</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Preview de imagen antes de aplicar cambios.</p>
            </div>
            <FileUpload
              label="Imagen de perfil"
              variant="preview"
              accept="image/png,image/jpeg,image/webp"
              maxSize={2 * 1024 * 1024}
              maxFiles={1}
              onFilesChange={setAvatarFiles}
            />
            {avatarFiles.length > 0 && <p className="text-xs text-slate-500 dark:text-slate-400">Vista local de {avatarFiles[0].name}; todavía no se ha guardado ni enviado.</p>}
          </section>
        </div>
      }
      htmlCode={FILE_UPLOAD_USE_CASES_HTML}
      jsxCode={FILE_UPLOAD_USE_CASES_TSX}
    />
  );
};
