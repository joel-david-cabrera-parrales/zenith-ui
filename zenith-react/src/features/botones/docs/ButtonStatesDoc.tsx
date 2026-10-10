import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../components';
import { BUTTON_STATES_HTML, BUTTON_STATES_TSX } from '../snippets';

export function ButtonStatesDoc() {
  return (
    <ComponentDoc
      title="Estados interactivos"
      description="Loading, disabled, focused y pressed."
      preview={
        <div className="flex w-full flex-wrap items-center gap-3">
          <Button loading>Procesando...</Button>
          <Button variant="outline" loading>
            Cargando
          </Button>
          <Button disabled>Disabled Solid</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-4 ring-blue-500/20"
          >
            <span>Focused State</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-800 px-4 py-2 text-sm font-semibold text-white shadow-inner"
          >
            <span>Pressed State</span>
          </button>
        </div>
      }
      htmlCode={BUTTON_STATES_HTML}
      jsxCode={BUTTON_STATES_TSX}
    />
  );
}
