import { ComponentDoc } from '../../../shared/components/doc';
import { FlipCountdown } from '../components';
import { FLIP_COUNTDOWN_HTML, FLIP_COUNTDOWN_TSX } from '../snippets';

export const FlipCountdownDoc = () => (
  <ComponentDoc
    title="Flip card / split-flap"
    description="VAR_01 mecánica (SEC_02.1): tarjetas partidas con bisagra horizontal sobre fondo oscuro, segundos en acento azul. Cada tarjeta hace flip 3D (rotateX, token animate-flip-tick) cuando su valor cambia."
    preview={
      <div className="w-full overflow-x-auto">
        <FlipCountdown />
      </div>
    }
    htmlCode={FLIP_COUNTDOWN_HTML}
    jsxCode={FLIP_COUNTDOWN_TSX}
  />
);
