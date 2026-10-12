import { ComponentDoc } from '../../../shared/components/doc';
import { SessionExpiryCard } from '../components';
import { SESSION_EXPIRY_HTML, SESSION_EXPIRY_TSX } from '../snippets';

export const SessionExpiryDoc = () => (
  <ComponentDoc
    title="Caducidad de sesión IAM"
    description="CASO_A overlay (SEC_04.1): diálogo de expiración SOC2 con cuenta viva, Extender Sesión que reinicia y Cerrar Ahora que muestra el estado de sesión cerrada. Botones del catálogo."
    preview={
      <div className="w-full max-w-sm">
        <SessionExpiryCard />
      </div>
    }
    htmlCode={SESSION_EXPIRY_HTML}
    jsxCode={SESSION_EXPIRY_TSX}
  />
);
