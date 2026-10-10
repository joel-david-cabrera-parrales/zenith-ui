import { ComponentDoc } from '../../../shared/components/doc';
import { CodePanel, StatMetric } from '../components';
import { MONO_DATA_HTML, MONO_DATA_TSX } from '../snippets';

export const MonoDataDoc = () => {
  return (
    <ComponentDoc
      title="Monospace, CLI, JSON y métricas"
      description="Contadores, terminal y payload del diseño headings (05) con cifras tabulares monoespaciadas."
      preview={
        <div className="space-y-6 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatMetric
              label="AVAILABILITY_SLA"
              value="99.98%"
              hint="Sin incidencias en los últimos 45 días contiguos."
              delta="+0.02%"
              tone="success"
              deltaIcon="arrow_upward"
            />
            <StatMetric
              label="ANNUAL_RUN_RATE"
              value="$148,290.00"
              hint="Facturación consolidada de infraestructura."
              delta="+34.2%"
              tone="success"
              deltaIcon="arrow_upward"
            />
            <StatMetric
              label="LATENCY_P99"
              value="11.4 ms"
              hint="Medición extremo a extremo vía HTTP/3."
              delta="OPTIMAL"
              tone="info"
              deltaIcon="check"
            />
            <StatMetric
              label="PROCESSED_EVENTS"
              value="4.82B"
              hint="Ingesta streaming procesada con cero drop."
              delta="LIVE"
              tone="live"
              deltaIcon="bolt"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CodePanel title="bash ~ zenith-cli / telemetry-probe" icon="terminal">
              <p className="text-slate-400">
                <span className="text-emerald-400">$</span> zenith deployment
                rollouts --cluster=us-east-prod
              </p>
              <p className="text-blue-300">
                ==&gt; Handshaking with cluster endpoint (200 OK)
              </p>
              <p>
                [2025-05-18T14:40:02Z]{' '}
                <span className="text-amber-300">INFO</span> Loading manifest
                schema: v2.4.0
              </p>
              <p>
                [2025-05-18T14:40:03Z]{' '}
                <span className="text-emerald-400">OK</span> Health-check passes
                for 64 / 64 nodes
              </p>
              <p className="text-emerald-300 font-bold">
                [SUCCESS] Zero-downtime traffic cutover completed in 412ms
              </p>
            </CodePanel>
            <CodePanel
              title="payload_specimen.json (REST payload)"
              icon="data_object"
            >
              <pre className="text-blue-200">
                <code>
                  {'{\n  "cluster_id": "zth-node-9941",\n  "status": "HEALTHY",\n  "concurrency": 18400,\n  "metrics": {\n    "p99_latency_ms": 11.4,\n    "error_rate_pct": 0.0001\n  },\n  "tls_enabled": true\n}'}
                </code>
              </pre>
            </CodePanel>
          </div>
        </div>
      }
      htmlCode={MONO_DATA_HTML}
      jsxCode={MONO_DATA_TSX}
    />
  );
}
