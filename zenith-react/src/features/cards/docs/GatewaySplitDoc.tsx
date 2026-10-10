import { ComponentDoc } from '../../../shared/components/doc';
import { GatewaySplit } from '../components';
import { GATEWAY_SPLIT_HTML, GATEWAY_SPLIT_TSX } from '../snippets';

export const GatewaySplitDoc = () => {
  return (
    <ComponentDoc
      title="Card multi-métrica dividida"
      description="Card 1.3 de stats/KPI: total principal con tres mini-celdas (latencia, éxito, descartes) y pie de nodos."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <GatewaySplit />
          </div>
        </div>
      }
      htmlCode={GATEWAY_SPLIT_HTML}
      jsxCode={GATEWAY_SPLIT_TSX}
    />
  );
}
