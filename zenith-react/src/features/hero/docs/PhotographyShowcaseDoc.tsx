import { ComponentDoc } from '../../../shared/components/doc';
import { PhotographyShowcaseHero } from '../components';
import {
  PHOTOGRAPHY_SHOWCASE_HTML,
  PHOTOGRAPHY_SHOWCASE_TSX,
} from '../snippets';

export function PhotographyShowcaseDoc() {
  return (
    <ComponentDoc
      title="Hero fotografía con tríptico EXIF"
      description="Hero_02 marketing/foto: titular editorial, selector de disciplina y galería triple con telemetría EXIF."
      preview={
        <div className="w-full">
          <PhotographyShowcaseHero />
        </div>
      }
      htmlCode={PHOTOGRAPHY_SHOWCASE_HTML}
      jsxCode={PHOTOGRAPHY_SHOWCASE_TSX}
    />
  );
}
