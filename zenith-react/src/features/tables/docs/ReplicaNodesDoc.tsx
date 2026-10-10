import { ComponentDoc } from '../../../shared/components/doc';
import { ReplicaNodesTable } from '../components';
import { REPLICA_NODES_HTML, REPLICA_NODES_TSX } from '../snippets';

export function ReplicaNodesDoc() {
  return (
    <ComponentDoc
      title="Réplicas NVMe con latencia e IOPS"
      description="Sub-tabla de replicación: filtro por id/zona, barras de latencia y almacenamiento, selección y paginación. Latencia/IOPS/NVMe se ocultan por breakpoints."
      preview={
        <div className="w-full">
          <ReplicaNodesTable />
        </div>
      }
      htmlCode={REPLICA_NODES_HTML}
      jsxCode={REPLICA_NODES_TSX}
    />
  );
}
