export const FILE_UPLOAD_SIMPLE_HTML = `
<label for="document" class="block text-xs font-semibold text-slate-700">Documento</label>
<input id="document" name="document" type="file" accept=".pdf,.doc,.docx" class="mt-2 block w-full text-sm text-slate-600" />
<p class="mt-1 text-xs text-slate-500">Un archivo · PDF o Word · Máx. 5 MB</p>
`;

export const FILE_UPLOAD_SIMPLE_TSX = `
import { FileUpload } from '@/features/file-upload';

export const DocumentField = () => (
  <FileUpload
    label="Documento"
    name="document"
    variant="simple"
    accept=".pdf,.doc,.docx"
    maxSize={5 * 1024 * 1024}
  />
);
`;

export const FILE_UPLOAD_MULTIPLE_HTML = `
<label for="attachments" class="block text-xs font-semibold text-slate-700">Adjuntos</label>
<input id="attachments" name="attachments" type="file" accept="application/pdf,image/*" multiple class="mt-2 block w-full text-sm text-slate-600" />
<p class="mt-1 text-xs text-slate-500">Hasta 4 archivos · Máx. 8 MB por archivo</p>
`;

export const FILE_UPLOAD_MULTIPLE_TSX = `
import { useState } from 'react';
import { FileUpload } from '@/features/file-upload';

export const AttachmentsField = () => {
  const [attachments, setAttachments] = useState<File[]>([]);

  return (
    <div className="space-y-2">
      <FileUpload
        label="Adjuntos"
        name="attachments"
        variant="multiple"
        accept="application/pdf,image/*"
        maxFiles={4}
        maxSize={8 * 1024 * 1024}
        onFilesChange={setAttachments}
      />
      <p role="status">{attachments.length} archivo(s) seleccionados</p>
    </div>
  );
};
`;

export const FILE_UPLOAD_PREVIEW_HTML = `
<label for="images" class="block text-xs font-semibold text-slate-700">Imágenes</label>
<input id="images" name="images" type="file" accept="image/*" multiple class="mt-2 block w-full text-sm text-slate-600" />
<div class="mt-3 flex items-center gap-3 rounded-lg border border-slate-200 p-2.5">
  <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">IMG</span>
  <span><strong class="block text-xs text-slate-800">preview-local.jpg</strong><small class="text-slate-500">Imagen · 1.2 MB</small></span>
</div>
<!-- En React, FileUpload crea y libera la miniatura con URL.createObjectURL. -->
`;

export const FILE_UPLOAD_PREVIEW_TSX = `
import { FileUpload } from '@/features/file-upload';

export const ImageGalleryField = () => (
  <FileUpload
    label="Imágenes"
    name="images"
    variant="preview"
    accept="image/*"
    maxFiles={3}
    maxSize={4 * 1024 * 1024}
  />
);
`;

export const FILE_UPLOAD_STATES_HTML = `
<p role="status">Listo para seleccionar</p>
<p role="status">Procesando archivos…</p>
<p role="alert" class="text-rose-600">El archivo supera el límite permitido.</p>
<p role="status" class="text-emerald-700">Archivos listos</p>
`;

export const FILE_UPLOAD_STATES_TSX = `
import { FileUpload } from '@/features/file-upload';

export const FileUploadStatusExamples = () => (
  <div className="space-y-4">
    <FileUpload label="Inactivo" />
    <FileUpload status="uploading" label="Cargando" />
    <FileUpload status="error" error="El archivo supera el límite permitido." label="Error" />
    <FileUpload status="success" label="Éxito" />
  </div>
);
`;
