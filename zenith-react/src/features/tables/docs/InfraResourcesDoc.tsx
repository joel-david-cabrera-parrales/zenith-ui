import { ComponentDoc } from '../../../shared/components/doc';
import { InfraResourcesTable } from '../components';
import { INFRA_RESOURCES_HTML, INFRA_RESOURCES_TSX } from '../snippets';

export function InfraResourcesDoc() {
  return (
    <ComponentDoc
      title="Recursos cloud con filas expandibles"
      description="Datatable avanzada: búsqueda, ordenación, selección, barras de CPU, badges SLA y drawer anidado de réplicas. Responsive con scroll horizontal y columnas ocultas en móvil."
      preview={
        <div className="w-full">
          <InfraResourcesTable />
        </div>
      }
      htmlCode={INFRA_RESOURCES_HTML}
      jsxCode={INFRA_RESOURCES_TSX}
    />
  );
}
