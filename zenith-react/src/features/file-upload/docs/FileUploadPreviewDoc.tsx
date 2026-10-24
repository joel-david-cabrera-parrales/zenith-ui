import { ComponentDoc } from '../../../shared/components/doc';
import { FileUpload } from '../components';
import { FILE_UPLOAD_PREVIEW_HTML, FILE_UPLOAD_PREVIEW_TSX } from '../snippets';

export const FileUploadPreviewDoc = () => (
  <ComponentDoc
    title="File Upload con preview"
    description="Muestra una miniatura para imágenes y detalles de archivo para otros formatos. Las previews se crean localmente en el navegador."
    maxWidth="6xl"
    preview={
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <FileUpload
          variant="preview"
          accept="image/*"
          maxFiles={3}
          maxSize={4 * 1024 * 1024}
        />
      </div>
    }
    htmlCode={FILE_UPLOAD_PREVIEW_HTML}
    jsxCode={FILE_UPLOAD_PREVIEW_TSX}
  />
);
