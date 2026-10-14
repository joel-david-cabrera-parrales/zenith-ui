import { ComponentDoc } from '../../../shared/components/doc';
import { Progress } from '../components';
import { PROGRESS_VARIANTS_HTML, PROGRESS_VARIANTS_TSX } from '../snippets';

export const ProgressVariantsDoc = () => {
  return (
    <ComponentDoc
      title="Progress — Variantes Visuales"
      description="Tres variantes: solid (color sólido), gradient (degradado), animated (rayado animado)."
      preview={
        <div className="space-y-4">
          <div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Solid</p>
            <Progress value={70} tone="success" variant="solid" showLabel />
          </div>
          <div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Gradient</p>
            <Progress value={70} tone="success" variant="gradient" showLabel />
          </div>
          <div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Animated (Striped)</p>
            <Progress value={70} tone="success" variant="animated" striped showLabel />
          </div>
        </div>
      }
      htmlCode={PROGRESS_VARIANTS_HTML}
      jsxCode={PROGRESS_VARIANTS_TSX}
    />
  );
};