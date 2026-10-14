import { ComponentDoc } from '../../../shared/components/doc';
import { Loading } from '../components';
import { LOADING_SIZES_HTML, LOADING_SIZES_TSX } from '../snippets';

export const LoadingSizesDoc = () => {
  return (
    <ComponentDoc
      title="Loading — Tamaños"
      description="Tres tamaños: small, medium y large. Ajustan w-*, h-* y grosor del borde."
      preview={
        <div className="flex items-end gap-8">
          <div className="flex flex-col items-center gap-2">
            <Loading size="small" label="Pequeño" />
            <span className="text-xs text-slate-500">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Loading size="medium" label="Mediano" />
            <span className="text-xs text-slate-500">Medium</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Loading size="large" label="Grande" />
            <span className="text-xs text-slate-500">Large</span>
          </div>
        </div>
      }
      htmlCode={LOADING_SIZES_HTML}
      jsxCode={LOADING_SIZES_TSX}
    />
  );
};
