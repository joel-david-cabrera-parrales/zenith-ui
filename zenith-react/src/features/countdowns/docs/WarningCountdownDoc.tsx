import { ComponentDoc } from '../../../shared/components/doc';
import { StatefulCountdown } from '../components';
import { WARNING_COUNTDOWN_HTML, WARNING_COUNTDOWN_TSX } from '../snippets';

export const WarningCountdownDoc = () => (
  <ComponentDoc
    title="Estado de advertencia"
    description="ESTADO_02 semántico (SEC_03.2, < 10 min): ámbar con pulso tenue, aviso preventivo de expiración de sesión."
    preview={
      <div className="w-full max-w-sm">
        <StatefulCountdown initialHours={0} initialMinutes={8} initialSeconds={42} />
      </div>
    }
    htmlCode={WARNING_COUNTDOWN_HTML}
    jsxCode={WARNING_COUNTDOWN_TSX}
  />
);
