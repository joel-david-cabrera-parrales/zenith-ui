import { ComponentDoc } from '../../../shared/components/doc';
import { Progress } from '../components';
import { PROGRESS_BASIC_HTML, PROGRESS_BASIC_TSX } from '../snippets';

export const ProgressBasicDoc = () => {
  return (
    <ComponentDoc
      title="Progress — Valores Básicos"
      description="Barras de progreso con porcentajes estándar (25%, 50%, 75%, 100%) usando la variante sólida por defecto."
      preview={
        <div className="space-y-4">
          {[25, 50, 75, 100].map((value) => (
            <div key={value}>
              <Progress value={value} showLabel label={value + '% Complete'} />
            </div>
          ))}
        </div>
      }
      htmlCode={PROGRESS_BASIC_HTML}
      jsxCode={PROGRESS_BASIC_TSX}
    />
  );
};