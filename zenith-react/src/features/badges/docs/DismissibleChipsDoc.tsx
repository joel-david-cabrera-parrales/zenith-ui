import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { DismissibleChip } from '../components';
import { DISMISSIBLE_CHIPS_HTML, DISMISSIBLE_CHIPS_TSX } from '../snippets';

const INITIAL_FILTERS = ['Cluster: k8s-eu', 'Sev: High', 'Tier: Enterprise'];

export const DismissibleChipsDoc = () => {
  const [resetKey, setResetKey] = useState(0);
  const [dismissedCount, setDismissedCount] = useState(0);

  const handleDismiss = () => {
    setDismissedCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
    setDismissedCount(0);
  };

  const empty = dismissedCount >= INITIAL_FILTERS.length;

  return (
    <ComponentDoc
      title="Filtros activos descartables"
      description="Chips de SEC_04 con botón × que descarta el filtro (con estado interno y aviso aria-label). Si descartas los tres, usa Restaurar para traerlos de vuelta."
      preview={
        <div className="flex flex-wrap items-center gap-2">
          {!empty && (
            <div key={resetKey} className="flex flex-wrap items-center gap-2">
              <DismissibleChip label={INITIAL_FILTERS[0]} tone="neutral" onDismiss={handleDismiss} />
              <DismissibleChip label={INITIAL_FILTERS[1]} tone="neutral" onDismiss={handleDismiss} />
              <DismissibleChip label={INITIAL_FILTERS[2]} tone="primary" onDismiss={handleDismiss} />
            </div>
          )}
          {empty && (
            <>
              <span className="text-xs text-slate-500">Sin filtros activos</span>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-blue-700 transition-colors hover:border-blue-500"
              >
                Restaurar filtros
              </button>
            </>
          )}
        </div>
      }
      htmlCode={DISMISSIBLE_CHIPS_HTML}
      jsxCode={DISMISSIBLE_CHIPS_TSX}
    />
  );
};
