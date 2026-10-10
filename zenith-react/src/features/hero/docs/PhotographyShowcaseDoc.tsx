import { ComponentDoc } from '../../../shared/components/doc';
import { PhotographyShowcaseHero } from '../components';
import type { MaxWidth } from '@/shared/components/doc';

import {
  PHOTOGRAPHY_SHOWCASE_HTML,
  PHOTOGRAPHY_SHOWCASE_TSX,
} from '../snippets';

interface PhotographyShowcaseDocProps {
  maxWidth?: MaxWidth;
}

export const PhotographyShowcaseDoc = ({ maxWidth = '4xl' }: PhotographyShowcaseDocProps) => {
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
      maxWidth={maxWidth}
    />
  );
};