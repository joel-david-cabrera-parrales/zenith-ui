import { ComponentDoc } from '../../../shared/components/doc';
import { TonedAccordion } from '../components';
import { TONED_HTML, TONED_TSX } from '../snippets';

export const TonedAccordionDoc = () => {
  return (
    <ComponentDoc
      title="Tonos de estado"
      description="Borde lateral semántico success / warning / danger con métrica mono. Para status de plataforma."
      preview={
        <div className="mx-auto w-full max-w-2xl">
          <TonedAccordion />
        </div>
      }
      htmlCode={TONED_HTML}
      jsxCode={TONED_TSX}
    />
  );
};
