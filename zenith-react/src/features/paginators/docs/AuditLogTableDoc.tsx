import { ComponentDoc } from '../../../shared/components/doc';
import { AuditLogTable } from '../components';
import { AUDIT_LOG_TABLE_HTML, AUDIT_LOG_TABLE_TSX } from '../snippets';

export const AuditLogTableDoc = () => {
  return (
    <ComponentDoc
      title="Tabla de auditoría paginada en vivo"
      description="Dataset de despliegues con filtro, selector de filas y navegación completa sincronizada."
      preview={
        <div className="w-full">
          <AuditLogTable />
        </div>
      }
      htmlCode={AUDIT_LOG_TABLE_HTML}
      jsxCode={AUDIT_LOG_TABLE_TSX}
    />
  );
}
