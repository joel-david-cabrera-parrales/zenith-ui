import { ComponentDoc } from '../../../shared/components/doc';
import { FileUpload } from '../components';
import { FILE_UPLOAD_SIMPLE_HTML, FILE_UPLOAD_SIMPLE_TSX } from '../snippets';

export const FileUploadSimpleDoc = () => (
  <ComponentDoc
    title="File Upload simple"
    description="Permite seleccionar un único archivo. Define los formatos aceptados y el tamaño máximo para validar la selección en el navegador."
    maxWidth="6xl"
    preview={
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <FileUpload
          variant="simple"
          accept=".pdf,.doc,.docx"
          maxSize={5 * 1024 * 1024}
        />
      </div>
    }
    htmlCode={FILE_UPLOAD_SIMPLE_HTML}
    jsxCode={FILE_UPLOAD_SIMPLE_TSX}
  />
);
