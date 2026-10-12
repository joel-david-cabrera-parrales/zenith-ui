import { ComponentDoc } from '../../../shared/components/doc';
import { StatefulCountdown } from '../components';
import { NORMAL_COUNTDOWN_HTML, NORMAL_COUNTDOWN_TSX } from '../snippets';

export const NormalCountdownDoc = () => (
  <ComponentDoc
    title="Estado normal"
    description="ESTADO_01 semántico (SEC_03.1, > 60 min): acento esmeralda, sin interrupción. El tono se deriva vivo del tiempo restante (< 10 min → warning, < 60 s → crítico, 0 → expirado)."
    preview={
      <div className="w-full max-w-sm">
        <StatefulCountdown initialHours={2} initialMinutes={45} initialSeconds={18} />
      </div>
    }
    htmlCode={NORMAL_COUNTDOWN_HTML}
    jsxCode={NORMAL_COUNTDOWN_TSX}
  />
);
