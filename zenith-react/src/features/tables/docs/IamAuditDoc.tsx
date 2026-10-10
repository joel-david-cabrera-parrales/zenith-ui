import { ComponentDoc } from '../../../shared/components/doc';
import { IamAuditTable } from '../components';
import { IAM_AUDIT_HTML, IAM_AUDIT_TSX } from '../snippets';

export function IamAuditDoc() {
  return (
    <ComponentDoc
      title="Auditoría IAM zero-trust"
      description="Registro denso: filtro por severidad, búsqueda por actor/acción, avatares, IP/geo y códigos con paginación. Timestamp e IP colapsan en móvil."
      preview={
        <div className="w-full">
          <IamAuditTable />
        </div>
      }
      htmlCode={IAM_AUDIT_HTML}
      jsxCode={IAM_AUDIT_TSX}
    />
  );
}
