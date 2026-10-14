import { ComponentDoc } from '../../../shared/components/doc';
import { Tooltip } from '../components';
import { SIZES_ARROWS_TOOLTIP_HTML, SIZES_ARROWS_TOOLTIP_TSX } from '../snippets';

const btn = 'rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600';

export const SizesArrowsTooltipDoc = () => {
  return (
    <ComponentDoc
      title="Tamanos y flecha"
      description="Dos tamanos (sm compacto para etiquetas cortas, md para descripciones) y flecha opcional: sin flecha la burbuja queda limpia, con flecha ancla visualmente el trigger."
      preview={
        <div className="flex flex-wrap items-end justify-center gap-6 rounded-xl border border-slate-200 bg-white p-10">
          <Tooltip content="Ayuda breve" size="sm">
            <button type="button" className={btn}>Compacto</button>
          </Tooltip>
          <Tooltip content="Descripcion mas larga del campo">
            <button type="button" className={btn}>Amplio</button>
          </Tooltip>
          <Tooltip content="Burbuja limpia sin flecha" withArrow={false}>
            <button type="button" className={btn}>Sin flecha</button>
          </Tooltip>
          <Tooltip content="Burbuja con flecha" withArrow>
            <button type="button" className={btn}>Con flecha</button>
          </Tooltip>
        </div>
      }
      htmlCode={SIZES_ARROWS_TOOLTIP_HTML}
      jsxCode={SIZES_ARROWS_TOOLTIP_TSX}
      maxWidth="4xl"
    />
  );
};
