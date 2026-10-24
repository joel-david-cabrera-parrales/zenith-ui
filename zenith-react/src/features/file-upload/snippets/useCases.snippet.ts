export const FILE_UPLOAD_USE_CASES_HTML = `
<form class="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
  <div>
    <h3 class="text-sm font-semibold text-slate-900">Crear informe</h3>
    <p class="mt-1 text-xs text-slate-500">Adjunta el documento que compartirás con el equipo.</p>
  </div>
  <label for="report" class="flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-slate-300 px-5 py-7 text-center">
    <span class="material-symbols-outlined text-2xl text-blue-600">upload_file</span>
    <span class="mt-2 text-sm font-medium text-slate-800">Seleccionar informe PDF</span>
    <input id="report" name="report" type="file" accept="application/pdf" class="sr-only" />
  </label>
  <button class="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white">Guardar borrador</button>
</form>
`;

export const FILE_UPLOAD_USE_CASES_TSX = `
import { useState } from 'react';
import type { FormEvent } from 'react';
import { FileUpload } from '@/features/file-upload';

export const ReportForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [saved, setSaved] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Demo local: no se hace ninguna petición ni se envían los archivos.
    setSaved(true);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <FileUpload accept="application/pdf" maxSize={10 * 1024 * 1024} onFilesChange={setFiles} />
      <button type="submit" disabled={files.length === 0}>Guardar borrador</button>
      <p role="status">{saved ? 'Borrador listo en esta sesión.' : ''}</p>
    </form>
  );
};

export const ProfilePhoto = () => (
  <section>
    <h2>Foto de perfil</h2>
    <FileUpload variant="preview" accept="image/*" maxSize={2 * 1024 * 1024} />
  </section>
);
`;
