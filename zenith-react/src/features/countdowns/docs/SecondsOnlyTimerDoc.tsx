import { ComponentDoc } from '../../../shared/components/doc';
import { SecondsOnlyTimer } from '../components';
import { SECONDS_ONLY_HTML, SECONDS_ONLY_TSX } from '../snippets';

export const SecondsOnlyTimerDoc = () => (
  <ComponentDoc
    title="Micro-timer de segundos"
    description="T-SCALE SS only para OTP/2FA y reintento WebSocket (SEC_01.1): cuenta viva 00:42 con barra de progreso y botón Probar del catálogo (Button xs outline con icono replay) que reinicia. En los snippets el botón es un button nativo autocontenido con las mismas clases."
    preview={
      <div className="w-full max-w-xs">
        <SecondsOnlyTimer />
      </div>
    }
    htmlCode={SECONDS_ONLY_HTML}
    jsxCode={SECONDS_ONLY_TSX}
  />
);
