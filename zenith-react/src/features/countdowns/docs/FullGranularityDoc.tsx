import { ComponentDoc } from '../../../shared/components/doc';
import { FullGranularityTimer } from '../components';
import { FULL_GRANULARITY_HTML, FULL_GRANULARITY_TSX } from '../snippets';

export const FullGranularityDoc = () => (
  <ComponentDoc
    title="Granularidad completa"
    description="T-SCALE DD:HH:MM:SS para releases y cutover de datacenter (SEC_01.4): grid de 4 celdas DÍAS/HOR/MIN/SEG con etiqueta de release y estado PLANIFICADO que pasa a LIBERADO."
    preview={
      <div className="w-full max-w-xs">
        <FullGranularityTimer />
      </div>
    }
    htmlCode={FULL_GRANULARITY_HTML}
    jsxCode={FULL_GRANULARITY_TSX}
  />
);
