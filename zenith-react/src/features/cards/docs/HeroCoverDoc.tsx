import { ComponentDoc } from '../../../shared/components/doc';
import { HeroCover } from '../components';
import { HERO_COVER_HTML, HERO_COVER_TSX } from '../snippets';

export const HeroCoverDoc = () => {
  return (
    <ComponentDoc
      title="Hero cover con overlay"
      description="Card 2.1 de media: portada con scrim en gradiente, pill de categoría, tiempo de lectura, autor y CTA circular. La foto se sustituye por gradiente institucional."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <HeroCover />
          </div>
        </div>
      }
      htmlCode={HERO_COVER_HTML}
      jsxCode={HERO_COVER_TSX}
    />
  );
}
