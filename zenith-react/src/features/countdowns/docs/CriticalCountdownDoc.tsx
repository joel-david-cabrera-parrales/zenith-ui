import { ComponentDoc } from '../../../shared/components/doc';
import { StatefulCountdown } from '../components';
import { CRITICAL_COUNTDOWN_HTML, CRITICAL_COUNTDOWN_TSX } from '../snippets';

export const CriticalCountdownDoc = () => (
  <ComponentDoc
    title="Estado crítico"
    description="ESTADO_03 semántico (SEC_03.3, < 60 s): rojo con dígitos pulsantes; al llegar a cero transiciona vivo a expirado."
    preview={
      <div className="w-full max-w-sm">
        <StatefulCountdown initialHours={0} initialMinutes={0} initialSeconds={38} />
      </div>
    }
    htmlCode={CRITICAL_COUNTDOWN_HTML}
    jsxCode={CRITICAL_COUNTDOWN_TSX}
  />
);
