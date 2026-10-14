import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Breadcrumb } from '../components';
import type { BreadcrumbItem } from '../components';
import { ICON_BREADCRUMB_HTML, ICON_BREADCRUMB_TSX } from '../snippets';

const TRAIL: BreadcrumbItem[] = [
  { id: 'inicio', label: 'Inicio', href: '/', icon: 'home' },
  { id: 'biblioteca', label: 'Biblioteca', href: '/biblioteca', icon: 'library_music' },
  { id: 'album', label: 'Álbum', href: '/biblioteca/album', icon: 'album' },
  { id: 'cancion', label: 'Canción', icon: 'music_note' },
];

export const IconBreadcrumbDoc = () => {
  const [depth, setDepth] = useState(3);
  const visible = TRAIL.slice(0, depth + 1);

  const handleNavigate = (item: BreadcrumbItem) => {
    const position = TRAIL.findIndex((entry) => entry.id === item.id);
    if (position >= 0) setDepth(position);
  };

  return (
    <ComponentDoc
      title="Con iconos"
      description="Variante con iconos material-symbols por nivel. Mantiene la misma navegación por clic y coherencia visual slate/blue."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
          <Breadcrumb items={visible} onNavigate={handleNavigate} />
        </div>
      }
      htmlCode={ICON_BREADCRUMB_HTML}
      jsxCode={ICON_BREADCRUMB_TSX}
      maxWidth="4xl"
    />
  );
};
