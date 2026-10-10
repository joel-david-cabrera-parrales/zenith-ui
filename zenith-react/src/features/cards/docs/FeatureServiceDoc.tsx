import { ComponentDoc } from '../../../shared/components/doc';
import { FeatureService } from '../components';
import { FEATURE_SERVICE_HTML, FEATURE_SERVICE_TSX } from '../snippets';

export function FeatureServiceDoc() {
  return (
    <ComponentDoc
      title="Servicio con checklist"
      description="Card 3.2 de texto: icono, titular, checklist de capacidades y enlace con flecha animada."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <FeatureService />
          </div>
        </div>
      }
      htmlCode={FEATURE_SERVICE_HTML}
      jsxCode={FEATURE_SERVICE_TSX}
    />
  );
}
