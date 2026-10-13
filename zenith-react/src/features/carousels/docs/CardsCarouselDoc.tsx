import { ComponentDoc } from '../../../shared/components/doc';
import { CardsCarousel } from '../components';
import { CARDS_CAROUSEL_HTML, CARDS_CAROUSEL_TSX } from '../snippets';

export const CardsCarouselDoc = () => {
  return (
    <ComponentDoc
      title="Cards deslizables"
      description="Carousel de cards con slide horizontal de 300ms, autoplay de 4s y pausa en hover."
      preview={<CardsCarousel />}
      htmlCode={CARDS_CAROUSEL_HTML}
      jsxCode={CARDS_CAROUSEL_TSX}
      maxWidth="4xl"
    />
  );
};
