import { ComponentDoc } from '../../../shared/components/doc';
import { TestimonialsCarousel } from '../components';
import { TESTIMONIALS_CAROUSEL_HTML, TESTIMONIALS_CAROUSEL_TSX } from '../snippets';

export const TestimonialsCarouselDoc = () => {
  return (
    <ComponentDoc
      title="Testimonios"
      description="Carousel oscuro de citas con estrellas, avatar de iniciales y autoplay de 6s."
      preview={<TestimonialsCarousel />}
      htmlCode={TESTIMONIALS_CAROUSEL_HTML}
      jsxCode={TESTIMONIALS_CAROUSEL_TSX}
      maxWidth="4xl"
    />
  );
};
