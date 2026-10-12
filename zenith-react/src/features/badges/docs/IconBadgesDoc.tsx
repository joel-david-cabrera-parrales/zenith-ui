import { ComponentDoc } from '../../../shared/components/doc';
import { IconBadge } from '../components';
import { ICON_BADGES_HTML, ICON_BADGES_TSX } from '../snippets';

export const IconBadgesDoc = () => {
  return (
    <ComponentDoc
      title="Badges con iconos semánticos"
      description="Badges ricos de SEC_03 con icono a la izquierda (material-symbols-outlined) y paleta slate/blue. Uno al lado del otro, sin tabla."
      preview={
        <div className="flex flex-wrap items-center gap-2">
          <IconBadge tone="primary" icon="cloud">Cloud Engine</IconBadge>
          <IconBadge tone="success" icon="verified">Audit Passed</IconBadge>
          <IconBadge tone="info" icon="terminal">Console v2.4</IconBadge>
          <IconBadge tone="warning" icon="bolt">Fast Gateway</IconBadge>
        </div>
      }
      htmlCode={ICON_BADGES_HTML}
      jsxCode={ICON_BADGES_TSX}
    />
  );
};
