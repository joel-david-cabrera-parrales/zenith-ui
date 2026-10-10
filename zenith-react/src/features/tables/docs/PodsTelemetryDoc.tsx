import { ComponentDoc } from '../../../shared/components/doc';
import { PodsTelemetryTable } from '../components';
import { PODS_TELEMETRY_HTML, PODS_TELEMETRY_TSX } from '../snippets';

export const PodsTelemetryDoc = () => {
  return (
    <ComponentDoc
      title="Telemetría densa de pods"
      description="Tabla compacta monoespaciada: health dots, CPU/mem con alerta, QPS/p99 y reinicios con paginación densa. Columnas secundarias por breakpoint."
      preview={
        <div className="w-full">
          <PodsTelemetryTable />
        </div>
      }
      htmlCode={PODS_TELEMETRY_HTML}
      jsxCode={PODS_TELEMETRY_TSX}
    />
  );
}
