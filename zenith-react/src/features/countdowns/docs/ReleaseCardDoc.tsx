import { ComponentDoc } from '../../../shared/components/doc';
import { ReleaseCountdownCard } from '../components';
import { RELEASE_CARD_HTML, RELEASE_CARD_TSX } from '../snippets';

export const ReleaseCardDoc = () => (
  <ComponentDoc
    title="Tarjeta de lanzamiento programado"
    description="CASO_C producto (SEC_04.3): tarjeta de release con cuenta completa viva, selector funcional de huso horario UTC/EST y estado de canary rollout."
    preview={
      <div className="w-full max-w-sm">
        <ReleaseCountdownCard />
      </div>
    }
    htmlCode={RELEASE_CARD_HTML}
    jsxCode={RELEASE_CARD_TSX}
  />
);
