import { ComponentDoc } from '../../../shared/components/doc';
import { Badge } from '../components';
import { SOLID_BADGES_HTML, SOLID_BADGES_TSX } from '../snippets';

export const SolidBadgesDoc = () => {
  return (
    <ComponentDoc
      title="Badges Solid — Alto contraste"
      description="Variantes sólidas de SEC_01 (Primary, Success, Warning, Danger, Neutral, Info, System) adaptadas a la paleta slate/blue. Presentadas una al lado de otra, sin tabla."
      preview={
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="primary">Primary Solid</Badge>
          <Badge tone="success">Success Solid</Badge>
          <Badge tone="warning">Warning Solid</Badge>
          <Badge tone="danger">Critical Solid</Badge>
          <Badge tone="neutral">Neutral Solid</Badge>
          <Badge tone="info">Info Solid</Badge>
          <Badge tone="system">Indigo Solid</Badge>
        </div>
      }
      htmlCode={SOLID_BADGES_HTML}
      jsxCode={SOLID_BADGES_TSX}
    />
  );
};
