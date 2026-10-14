import { ComponentDoc } from '../../../shared/components/doc';
import { Progress } from '../components';
import { PROGRESS_SIZES_HTML, PROGRESS_SIZES_TSX } from '../snippets';

export const ProgressSizesDoc = () => {
  return (
    <ComponentDoc
      title="Progress — Tamaños"
      description="Tres tamaños disponibles: small (h-1), medium (h-2), large (h-3)."
      preview={
        <div className="space-y-4">
          <div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Small</p>
            <Progress value={60} size="small" showLabel />
          </div>
          <div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Medium</p>
            <Progress value={60} size="medium" showLabel />
          </div>
          <div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Large</p>
            <Progress value={60} size="large" showLabel />
          </div>
        </div>
      }
      htmlCode={PROGRESS_SIZES_HTML}
      jsxCode={PROGRESS_SIZES_TSX}
    />
  );
};