import { ComponentDoc } from '../../../shared/components/doc';
import { SelectableOptions } from '../components';
import { SELECTABLE_OPTIONS_HTML, SELECTABLE_OPTIONS_TSX } from '../snippets';

export function SelectableOptionsDoc() {
  return (
    <ComponentDoc
      title="Opciones seleccionables"
      description="Card 4.1 interactiva: grupo radio con dos estados (clic para alternar entre alta disponibilidad y zona única)."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <SelectableOptions />
          </div>
        </div>
      }
      htmlCode={SELECTABLE_OPTIONS_HTML}
      jsxCode={SELECTABLE_OPTIONS_TSX}
    />
  );
}
