import { ComponentDoc } from '../../../shared/components/doc';
import { Tooltip } from '../components';
import { PLACEMENTS_TOOLTIP_HTML, PLACEMENTS_TOOLTIP_TSX } from '../snippets';

const btn = 'rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600';

export const PlacementsTooltipDoc = () => {
  return (
    <ComponentDoc
      title="Posiciones"
      description="Cuatro posiciones con flecha y entrada slide direccional de 150ms: el tooltip desliza 4px hacia el trigger. Escape lo cierra y el foco por teclado lo abre igual que el hover."
      preview={
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-10">
          <Tooltip content="Tooltip superior" placement="top" animation="slide">
            <button type="button" className={btn}>Arriba</button>
          </Tooltip>
          <Tooltip content="Tooltip inferior" placement="bottom" animation="slide">
            <button type="button" className={btn}>Abajo</button>
          </Tooltip>
          <Tooltip content="Tooltip a la izquierda" placement="left" animation="slide">
            <button type="button" className={btn}>Izquierda</button>
          </Tooltip>
          <Tooltip content="Tooltip a la derecha" placement="right" animation="slide">
            <button type="button" className={btn}>Derecha</button>
          </Tooltip>
        </div>
      }
      htmlCode={PLACEMENTS_TOOLTIP_HTML}
      jsxCode={PLACEMENTS_TOOLTIP_TSX}
      maxWidth="4xl"
    />
  );
};
