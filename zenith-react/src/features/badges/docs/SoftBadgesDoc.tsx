import { ComponentDoc } from '../../../shared/components/doc';
import { Badge } from '../components';
import { SOFT_BADGES_HTML, SOFT_BADGES_TSX } from '../snippets';

export const SoftBadgesDoc = () => {
  return (
    <ComponentDoc
      title="Badges Soft — Tinta suave"
      description="Variantes suaves de SEC_01 (Primary, Success, Warning, Danger, Neutral, Info, System) adaptadas a la paleta slate/blue. Presentadas una al lado de otra, sin tabla."
      preview={
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="primary" variant="soft">Primary Soft</Badge>
          <Badge tone="success" variant="soft">Success Soft</Badge>
          <Badge tone="warning" variant="soft">Warning Soft</Badge>
          <Badge tone="danger" variant="soft">Critical Soft</Badge>
          <Badge tone="neutral" variant="soft">Neutral Soft</Badge>
          <Badge tone="info" variant="soft">Info Soft</Badge>
          <Badge tone="system" variant="soft">Indigo Soft</Badge>
        </div>
      }
      htmlCode={SOFT_BADGES_HTML}
      jsxCode={SOFT_BADGES_TSX}
    />
  );
};
