import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../components';
import { BUTTON_VARIANTS_HTML, BUTTON_VARIANTS_TSX } from '../snippets';

export function ButtonVariantsDoc() {
  return (
    <ComponentDoc
      title="Variantes de estilo"
      description="Primary, Secondary, Outline, Subtle, Ghost y Link en tamaño default."
      preview={
        <div className="flex w-full flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link" trailingIcon="arrow_outward">
            Link
          </Button>
        </div>
      }
      htmlCode={BUTTON_VARIANTS_HTML}
      jsxCode={BUTTON_VARIANTS_TSX}
    />
  );
}
