import { ComponentDoc } from '../../../shared/components/doc';
import { MetricMini } from '../components';
import { METRIC_MINI_HTML, METRIC_MINI_TSX } from '../snippets';

export const MetricMiniDoc = () => {
  return (
    <ComponentDoc
      title="Mini métrica con estado"
      description="Card 6.2 mínima: icono, badge de estado, valor con delta y pie de benchmark."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <MetricMini />
          </div>
        </div>
      }
      htmlCode={METRIC_MINI_HTML}
      jsxCode={METRIC_MINI_TSX}
    />
  );
}
