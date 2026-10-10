import { ComponentDoc } from '../../../shared/components/doc';
import { CreatorStudioHero } from '../components';
import { CREATOR_STUDIO_HTML, CREATOR_STUDIO_TSX } from '../snippets';

export const CreatorStudioDoc = () => {
  return (
    <ComponentDoc
      title="Hero creator con timeline NLE"
      description="Hero_04 marketing/foto: métricas de retención, mini player vertical y pistas TXT/V1/A1 con transporte."
      preview={
        <div className="w-full">
          <CreatorStudioHero />
        </div>
      }
      htmlCode={CREATOR_STUDIO_HTML}
      jsxCode={CREATOR_STUDIO_TSX}
    />
  );
}
