import { ComponentDoc } from '../../../shared/components/doc';
import { HorizontalSplit } from '../components';
import { HORIZONTAL_SPLIT_HTML, HORIZONTAL_SPLIT_TSX } from '../snippets';
import type { MaxWidth } from '@/shared/components/doc';

interface HorizontalSplitDocProps {
  maxWidth?: MaxWidth;
}

export const HorizontalSplitDoc = ({ maxWidth = '4xl' }: HorizontalSplitDocProps) => {
  return (
    <ComponentDoc
      title="Horizontal con imagen lateral"
      description="Card 2.2 de media: imagen a la izquierda con badge, contenido y tags a la derecha con enlace de spec."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-2xl">
            <HorizontalSplit />
          </div>
        </div>
      }
      htmlCode={HORIZONTAL_SPLIT_HTML}
      jsxCode={HORIZONTAL_SPLIT_TSX}
      maxWidth={maxWidth}
    />
  );
};