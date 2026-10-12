import { ComponentDoc } from '../../../shared/components/doc';
import { SelectableChip } from '../components';
import { SELECTABLE_CHIPS_HTML, SELECTABLE_CHIPS_TSX } from '../snippets';

export const SelectableChipsDoc = () => {
  return (
    <ComponentDoc
      title="Chips seleccionables"
      description="Chips de SEC_04 con estado toggle (aria-pressed): seleccionado sólido con check, sin seleccionar con borde y punto gris. Pulsa para alternar."
      preview={
        <div className="flex flex-wrap items-center gap-2">
          <SelectableChip label="Telemetry ON" defaultSelected selectedTone="primary" />
          <SelectableChip label="Memory Profiling" defaultSelected={false} />
          <SelectableChip label="Auto-Scaling" defaultSelected selectedTone="success" />
        </div>
      }
      htmlCode={SELECTABLE_CHIPS_HTML}
      jsxCode={SELECTABLE_CHIPS_TSX}
    />
  );
};
