import { ComponentDoc } from '../../../shared/components/doc';
import { SplitBadge } from '../components';
import { SPLIT_BADGES_HTML, SPLIT_BADGES_TSX } from '../snippets';

export const SplitBadgesDoc = () => {
  return (
    <ComponentDoc
      title="Badges split clave-valor"
      description="Badges ricos de SEC_03 con par etiqueta-valor (entorno, región, estado HTTP) en tipografía monoespaciada. Uno al lado del otro, sin tabla."
      preview={
        <div className="flex flex-wrap items-center gap-2">
          <SplitBadge label="ENV" value="PROD" valueTone="success" />
          <SplitBadge label="REGION" value="us-east-1" valueTone="info" />
          <SplitBadge label="STATUS" value="200 OK" valueTone="neutral" />
          <SplitBadge label="HTTP" value="POST" valueTone="primary" />
        </div>
      }
      htmlCode={SPLIT_BADGES_HTML}
      jsxCode={SPLIT_BADGES_TSX}
    />
  );
};
