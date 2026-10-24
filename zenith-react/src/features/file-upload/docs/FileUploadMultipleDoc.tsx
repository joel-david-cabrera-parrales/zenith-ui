import { ComponentDoc } from '../../../shared/components/doc';
import { FileUpload } from '../components';
import { FILE_UPLOAD_MULTIPLE_HTML, FILE_UPLOAD_MULTIPLE_TSX } from '../snippets';

export const FileUploadMultipleDoc = () => (
  <ComponentDoc
    title="File Upload múltiple"
    description="Permite seleccionar varios archivos y administra una lista removible. Configura la cantidad máxima, los formatos y el tamaño por archivo."
    maxWidth="6xl"
    preview={
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <FileUpload
          variant="multiple"
          accept="application/pdf,image/*"
          maxFiles={4}
          maxSize={8 * 1024 * 1024}
        />
      </div>
    }
    htmlCode={FILE_UPLOAD_MULTIPLE_HTML}
    jsxCode={FILE_UPLOAD_MULTIPLE_TSX}
  />
);
