import { ComponentDoc } from '../../../shared/components/doc';
import { DashboardMetricsHero } from '../components';
import { DASHBOARD_METRICS_HTML, DASHBOARD_METRICS_TSX } from '../snippets';
import type { MaxWidth } from '@/shared/components/doc';

interface DashboardMetricsDocProps {
  maxWidth?: MaxWidth;
}

export const DashboardMetricsDoc = ({ maxWidth = '4xl' }: DashboardMetricsDocProps) => {
  return (
    <ComponentDoc
      title="Hero producto con telemetría live"
      description="Hero_03 catálogo secciones: badges, prueba social y panel de nodos con barras de CPU/MEM y latencia p99."
      preview={
        <div className="w-full">
          <DashboardMetricsHero />
        </div>
      }
      htmlCode={DASHBOARD_METRICS_HTML}
      jsxCode={DASHBOARD_METRICS_TSX}
      maxWidth={maxWidth}
    />
  );
};