import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Breadcrumb } from '../components';
import type { BreadcrumbItem } from '../components';
import { BASIC_BREADCRUMB_HTML, BASIC_BREADCRUMB_TSX } from '../snippets';

const TRAIL: BreadcrumbItem[] = [
  { id: 'inicio', label: 'Inicio', href: '/' },
  { id: 'biblioteca', label: 'Biblioteca', href: '/biblioteca' },
  { id: 'album', label: 'Álbum', href: '/biblioteca/album' },
  { id: 'cancion', label: 'Canción' },
];

export const BasicBreadcrumbDoc = () => {
  const [depth, setDepth] = useState(3);
  const visible = TRAIL.slice(0, depth + 1);

  const handleNavigate = (item: BreadcrumbItem) => {
    const position = TRAIL.findIndex((entry) => entry.id === item.id);
    if (position >= 0) setDepth(position);
  };

  return (
    <ComponentDoc
      title="Ruta básica"
      description="Muestra la ruta actual Inicio > Biblioteca > Álbum > Canción. Cada nivel anterior es un enlace con un solo clic y el último lleva aria-current."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
          <Breadcrumb items={visible} onNavigate={handleNavigate} />
          <p className="mt-3 text-sm text-slate-500">
            Vista actual: {visible[visible.length - 1]?.label} — haz clic en un nivel anterior para navegar.
          </p>
        </div>
      }
      htmlCode={BASIC_BREADCRUMB_HTML}
      jsxCode={BASIC_BREADCRUMB_TSX}
      maxWidth="4xl"
    />
  );
};
