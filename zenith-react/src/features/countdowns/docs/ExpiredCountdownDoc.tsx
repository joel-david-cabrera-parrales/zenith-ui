import { ComponentDoc } from '../../../shared/components/doc';
import { StatefulCountdown } from '../components';
import { EXPIRED_COUNTDOWN_HTML, EXPIRED_COUNTDOWN_TSX } from '../snippets';

export const ExpiredCountdownDoc = () => (
  <ComponentDoc
    title="Estado expirado"
    description="ESTADO_04 semántico (SEC_03.4, 00:00:00): dígitos tachados y trigger de regeneración. El preview parte de 5 s para mostrar la transición vivo."
    preview={
      <div className="w-full max-w-sm">
        <StatefulCountdown initialHours={0} initialMinutes={0} initialSeconds={5} />
      </div>
    }
    htmlCode={EXPIRED_COUNTDOWN_HTML}
    jsxCode={EXPIRED_COUNTDOWN_TSX}
  />
);
