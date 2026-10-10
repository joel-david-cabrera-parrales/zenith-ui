import { ComponentDoc } from '../../../shared/components/doc';
import { EventForm } from '../components';
import { EVENT_FORM_HTML, EVENT_FORM_TSX } from '../snippets';

export function EventFormDoc() {
  return (
    <ComponentDoc
      title="Registro de Evento en Zenith Dash"
      description="Formulario completo de producción: compone TextInput, Select, AffixInput, TextareaWithCounter, FileDropzone y Switch."
      preview={
        <div className="w-full">
          <EventForm />
        </div>
      }
      htmlCode={EVENT_FORM_HTML}
      jsxCode={EVENT_FORM_TSX}
    />
  );
}
