import { ComponentDoc } from '../../../shared/components/doc';
import { ImageCarousel } from '../components';
import { IMAGE_CAROUSEL_HTML, IMAGE_CAROUSEL_TSX } from '../snippets';

export const ImageCarouselDoc = () => {
  return (
    <ComponentDoc
      title="Galería de imágenes"
      description="Carousel clásico con transición slide horizontal de 300ms, flechas, dots, contador y autoplay de 4s con pausa en hover y botón play/pause."
      preview={<ImageCarousel />}
      htmlCode={IMAGE_CAROUSEL_HTML}
      jsxCode={IMAGE_CAROUSEL_TSX}
      maxWidth="4xl"
    />
  );
};
