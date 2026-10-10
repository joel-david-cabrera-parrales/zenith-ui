import { ComponentDoc } from '../../../shared/components/doc';
import { Testimonial } from '../components';
import { TESTIMONIAL_HTML, TESTIMONIAL_TSX } from '../snippets';

export function TestimonialDoc() {
  return (
    <ComponentDoc
      title="Testimonio con rating"
      description="Card 3.3 editorial: estrellas, cita en cursiva y perfil con iniciales."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <Testimonial />
          </div>
        </div>
      }
      htmlCode={TESTIMONIAL_HTML}
      jsxCode={TESTIMONIAL_TSX}
    />
  );
}
