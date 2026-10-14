import { ComponentDoc } from '../../../shared/components/doc';
import { Loading } from '../components';
import { LOADING_CARD_OVERLAY_HTML, LOADING_CARD_OVERLAY_TSX } from '../snippets';

export const LoadingCardOverlayDoc = () => {
  return (
    <ComponentDoc
      title="Loading — Tarjeta con overlay"
      description="Overlay con blur sobre el contenido mientras se cargan los datos. Bloquea la interacción y anuncia el estado con role=status."
      preview={
        <div className="relative rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
          <p className="text-sm text-slate-500">Contenido de la tarjeta mientras se cargan los datos...</p>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg bg-white/80 backdrop-blur-sm"
            role="status"
            aria-busy="true"
            aria-label="Cargando tarjeta"
          >
            <Loading label="Cargando datos" showLabel />
          </div>
        </div>
      }
      htmlCode={LOADING_CARD_OVERLAY_HTML}
      jsxCode={LOADING_CARD_OVERLAY_TSX}
    />
  );
};
