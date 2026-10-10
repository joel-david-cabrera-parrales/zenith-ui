import { ComponentDoc } from '../../../shared/components/doc';
import { FileDropzone, TextareaWithCounter } from '../components';
import {
  TEXTAREA_UPLOAD_HTML,
  TEXTAREA_UPLOAD_TSX,
} from '../snippets';

export function TextareaUploadDoc() {
  return (
    <ComponentDoc
      title="Áreas de texto & upload"
      description="Textarea con contador de caracteres y zona de carga drag & drop."
      preview={
        <div className="w-full space-y-5">
          <TextareaWithCounter
            label="Área de Texto Multilínea"
            defaultValue="Resumen operativo con límite estricto."
          />
          <FileDropzone
            label="Carga de Archivo / Drag & Drop"
            title="Selecciona un archivo o arrástralo aquí"
            hint="PNG, JPG o SVG (Máximo 5MB)"
          />
        </div>
      }
      htmlCode={TEXTAREA_UPLOAD_HTML}
      jsxCode={TEXTAREA_UPLOAD_TSX}
    />
  );
}
