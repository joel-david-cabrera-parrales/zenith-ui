import { ComponentDoc } from '../../../shared/components/doc';
import { Badge } from '../components';
import { BADGE_SIZES_HTML, BADGE_SIZES_TSX } from '../snippets';

export const BadgeSizesDoc = () => {
  return (
    <ComponentDoc
      title="Escala de tamaños y densidad"
      description="Tokens de tamaño de SEC_05 (micro, small, medium y large con punto pulsante) adaptados a la paleta slate/blue. Uno al lado del otro, sin tabla."
      preview={
        <div className="flex flex-wrap items-end gap-3">
          <Badge tone="primary" variant="soft" size="micro" shape="square">
            MICRO_TAG
          </Badge>
          <Badge tone="primary" variant="soft" size="small" shape="square">
            Small Data
          </Badge>
          <Badge tone="primary" variant="solid" size="medium" shape="square">
            Medium Default
          </Badge>
          <Badge tone="success" variant="solid" size="large" shape="pill">
            <span aria-hidden="true" className="mr-1.5 h-2 w-2 animate-pulse rounded-full bg-white" />
            Large Prominent
          </Badge>
        </div>
      }
      htmlCode={BADGE_SIZES_HTML}
      jsxCode={BADGE_SIZES_TSX}
    />
  );
};
