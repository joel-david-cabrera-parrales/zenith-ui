import { ComponentDoc } from '../../../shared/components/doc';
import { IconButton } from '../components';
import { ICON_BUTTONS_HTML, ICON_BUTTONS_TSX } from '../snippets';

export const IconButtonsDoc = () => {
  return (
    <ComponentDoc
      title="Icon only & formas"
      description="Botones solo-icono cuadrados y circulares, más píldoras con texto."
      preview={
        <div className="flex w-full flex-wrap items-center gap-3">
          <IconButton icon="tune" label="Ajustes" size="xs" />
          <IconButton icon="edit" label="Editar" size="sm" />
          <IconButton icon="add" label="Añadir" tone="primary" />
          <IconButton icon="terminal" label="Terminal" tone="dark" />
          <IconButton icon="star" label="Favorito" size="lg" tone="ghost" />
          <IconButton icon="share" label="Compartir" shape="pill" tone="primary" />
          <IconButton icon="more_vert" label="Más opciones" shape="pill" />
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            <span>Píldora Completa</span>
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[16px]"
            >
              arrow_forward
            </span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[16px] text-blue-600"
            >
              bolt
            </span>
            <span>Píldora Contorno</span>
          </button>
        </div>
      }
      htmlCode={ICON_BUTTONS_HTML}
      jsxCode={ICON_BUTTONS_TSX}
    />
  );
}
