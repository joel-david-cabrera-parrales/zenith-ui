import { ComponentDoc } from '../../../shared/components/doc';
import { Badge } from '../components';
import { OUTLINE_BADGES_HTML, OUTLINE_BADGES_TSX } from '../snippets';

export const OutlineBadgesDoc = () => {
  return (
    <ComponentDoc
      title="Badges Outline — Minimal con borde"
      description="Variantes con borde de SEC_01 (Primary, Success, Warning, Danger, Neutral, Info, System) adaptadas a la paleta slate/blue. Presentadas una al lado de otra, sin tabla."
      preview={
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="primary" variant="outline">Primary Outline</Badge>
          <Badge tone="success" variant="outline">Success Outline</Badge>
          <Badge tone="warning" variant="outline">Warning Outline</Badge>
          <Badge tone="danger" variant="outline">Critical Outline</Badge>
          <Badge tone="neutral" variant="outline">Neutral Outline</Badge>
          <Badge tone="info" variant="outline">Info Outline</Badge>
          <Badge tone="system" variant="outline">Indigo Outline</Badge>
        </div>
      }
      htmlCode={OUTLINE_BADGES_HTML}
      jsxCode={OUTLINE_BADGES_TSX}
    />
  );
};
