import { ComponentDoc } from '../../../shared/components/doc';
import { FileUpload } from '../components';
import { FILE_UPLOAD_STATES_HTML, FILE_UPLOAD_STATES_TSX } from '../snippets';

export const FileUploadStatesDoc = () => (
  <ComponentDoc
    title="Estados de File Upload"
    description="Los estados de procesamiento son una demostración local: no se realiza ninguna petición ni se transfieren archivos a un servidor."
    maxWidth="6xl"
    preview={
      <div className="w-full space-y-5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <FileUpload label="Inactivo" description="Listo para seleccionar un archivo." />
        <FileUpload status="uploading" label="Cargando" description="Preparando los archivos localmente…" />
        <FileUpload status="error" error="El archivo supera el límite permitido de 5 MB." label="Error" />
        <FileUpload status="success" label="Éxito" description="Los archivos están listos para continuar." />
      </div>
    }
    htmlCode={FILE_UPLOAD_STATES_HTML}
    jsxCode={FILE_UPLOAD_STATES_TSX}
  />
);
