import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Breadcrumb } from '../components';
import type { BreadcrumbItem } from '../components';
import { DYNAMIC_BREADCRUMB_HTML, DYNAMIC_BREADCRUMB_TSX } from '../snippets';

const TRAIL: BreadcrumbItem[] = [
  { id: 'inicio', label: 'Inicio', href: '/' },
  { id: 'biblioteca', label: 'Biblioteca', href: '/biblioteca' },
  { id: 'album', label: 'Álbum', href: '/biblioteca/album' },
  { id: 'cancion', label: 'Canción' },
];

export const DynamicBreadcrumbDoc = () => {
  const [depth, setDepth] = useState(2);
  const visible = TRAIL.slice(0, depth + 1);
  const current = visible[visible.length - 1];

  const handleNavigate = (item: BreadcrumbItem) => {
    const position = TRAIL.findIndex((entry) => entry.id === item.id);
    if (position >= 0) setDepth(position);
  };

  return (
    <ComponentDoc
      title="Actualización dinámica"
      description="El breadcrumb se actualiza según la vista actual. Cambia de sección con los botones o haciendo clic en un nivel anterior."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
          <Breadcrumb items={visible} onNavigate={handleNavigate} />
          <p className="mt-3 text-sm text-slate-500">
            Vista actual: {current?.label} — haz clic en un nivel anterior para navegar.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setDepth((value) => Math.max(0, value - 1))}
              disabled={depth === 0}
              className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-40"
            >
              Subir un nivel
            </button>
            <button
              type="button"
              onClick={() => setDepth((value) => Math.min(TRAIL.length - 1, value + 1))}
              disabled={depth === TRAIL.length - 1}
              className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-40"
            >
              Bajar un nivel
            </button>
          </div>
        </div>
      }
      htmlCode={DYNAMIC_BREADCRUMB_HTML}
      jsxCode={DYNAMIC_BREADCRUMB_TSX}
      maxWidth="4xl"
    />
  );
};
