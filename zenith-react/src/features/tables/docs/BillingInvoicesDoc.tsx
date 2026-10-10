import { ComponentDoc } from '../../../shared/components/doc';
import { BillingInvoicesTable } from '../components';
import { BILLING_INVOICES_HTML, BILLING_INVOICES_TSX } from '../snippets';

export const BillingInvoicesDoc = () => {
  return (
    <ComponentDoc
      title="Facturación con estados de pago"
      description="Tabla simple: buscador, total agregado, badges pagada/pendiente/vencida y acciones PDF/detalle con paginación. Emisión y método colapsan en móvil."
      preview={
        <div className="w-full">
          <BillingInvoicesTable />
        </div>
      }
      htmlCode={BILLING_INVOICES_HTML}
      jsxCode={BILLING_INVOICES_TSX}
    />
  );
}
