import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../components';
import { BUTTON_SIZES_HTML, BUTTON_SIZES_TSX } from '../snippets';

export const ButtonSizesDoc = () => {
  return (
    <ComponentDoc
      title="Tamaños de botón"
      description="Variantes Extra Small (xs), Small (sm), Default (md), Large (lg) y Extra Large (xl) del diseño botones."
      preview={
        <div className="flex w-full flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      }
      htmlCode={BUTTON_SIZES_HTML}
      jsxCode={BUTTON_SIZES_TSX}
    />
  );
}
