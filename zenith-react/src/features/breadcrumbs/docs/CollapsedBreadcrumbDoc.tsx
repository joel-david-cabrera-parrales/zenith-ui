import { ComponentDoc } from '../../../shared/components/doc';
import { Breadcrumb } from '../components';
import type { BreadcrumbItem } from '../components';
import { COLLAPSED_BREADCRUMB_HTML, COLLAPSED_BREADCRUMB_TSX } from '../snippets';

const LONG_TRAIL: BreadcrumbItem[] = [
  { id: 'inicio', label: 'Inicio', href: '/' },
  { id: 'biblioteca', label: 'Biblioteca', href: '/biblioteca' },
  { id: 'artista', label: 'Artista', href: '/biblioteca/artista' },
  { id: 'album', label: 'Álbum', href: '/biblioteca/album' },
  { id: 'cancion', label: 'Canción' },
];

export const CollapsedBreadcrumbDoc = () => {
  return (
    <ComponentDoc
      title="Ruta larga colapsada"
      description="Si la ruta supera maxItems se colapsa a primero + ellipsis + últimos dos. El botón more_horiz expande la ruta completa."
      preview={
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4">
          <Breadcrumb items={LONG_TRAIL} maxItems={3} />
        </div>
      }
      htmlCode={COLLAPSED_BREADCRUMB_HTML}
      jsxCode={COLLAPSED_BREADCRUMB_TSX}
      maxWidth="4xl"
    />
  );
};
