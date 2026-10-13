import { ComponentDoc } from '../../../shared/components/doc';
import { BadgedAccordion } from '../components';
import { BADGED_HTML, BADGED_TSX } from '../snippets';

export const BadgedAccordionDoc = () => {
  return (
    <ComponentDoc
      title="Badges + hint por fila"
      description="Changelog con badge de estado y subtítulo con conteo y fecha. Ideal para releases y novedades."
      preview={
        <div className="mx-auto w-full max-w-2xl">
          <BadgedAccordion />
        </div>
      }
      htmlCode={BADGED_HTML}
      jsxCode={BADGED_TSX}
    />
  );
};
