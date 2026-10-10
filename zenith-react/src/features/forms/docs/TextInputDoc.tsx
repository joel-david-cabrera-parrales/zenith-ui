import { ComponentDoc } from '../../../shared/components/doc';
import { TextInput } from '../components';
import { TEXT_INPUT_HTML, TEXT_INPUT_TSX } from '../snippets';

export function TextInputDoc() {
  return (
    <ComponentDoc
      title="Inputs de texto"
      description="Variantes Small (32px), Default (40px) y Large (48px) del diseño forms, adaptadas a la paleta default."
      preview={
        <div className="w-full space-y-4">
          <TextInput
            size="sm"
            label="Input Small (32px)"
            hint="h-8 / py-1"
            placeholder="Entrada compacta..."
          />
          <TextInput
            size="md"
            label="Input Default (40px)"
            hint="h-10 / py-2"
            placeholder="Entrada estándar de formulario..."
          />
          <TextInput
            size="lg"
            label="Input Large (48px)"
            hint="h-12 / py-3"
            placeholder="Entrada destacada o de búsqueda principal..."
          />
        </div>
      }
      htmlCode={TEXT_INPUT_HTML}
      jsxCode={TEXT_INPUT_TSX}
    />
  );
}
