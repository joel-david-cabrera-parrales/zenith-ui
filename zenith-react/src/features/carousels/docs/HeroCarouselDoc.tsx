import { ComponentDoc } from '../../../shared/components/doc';
import { HeroCarousel } from '../components';
import { HERO_CAROUSEL_HTML, HERO_CAROUSEL_TSX } from '../snippets';

export const HeroCarouselDoc = () => {
  return (
    <ComponentDoc
      title="Hero showcase"
      description="Carousel hero con gradiente slate/blue, texto + CTAs e imagen, autoplay de 5s."
      preview={<HeroCarousel />}
      htmlCode={HERO_CAROUSEL_HTML}
      jsxCode={HERO_CAROUSEL_TSX}
      maxWidth="4xl"
    />
  );
};
