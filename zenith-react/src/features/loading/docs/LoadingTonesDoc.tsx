import { ComponentDoc } from '../../../shared/components/doc';
import { Loading } from '../components';
import type { LoadingTone } from '../components';
import { LOADING_TONES_HTML, LOADING_TONES_TSX } from '../snippets';

const TONES: Array<{ name: string; tone: LoadingTone }> = [
  { name: 'Primary', tone: 'primary' },
  { name: 'Success', tone: 'success' },
  { name: 'Warning', tone: 'warning' },
  { name: 'Danger', tone: 'danger' },
  { name: 'Info', tone: 'info' },
  { name: 'Neutral', tone: 'neutral' },
];

export const LoadingTonesDoc = () => {
  return (
    <ComponentDoc
      title="Loading — Tonos de color"
      description="Seis tonos semánticos consistentes con el resto del catálogo: primary, success, warning, danger, info y neutral."
      preview={
        <div className="flex flex-wrap items-center gap-6">
          {TONES.map((item) => (
            <div key={item.tone} className="flex flex-col items-center gap-2">
              <Loading tone={item.tone} label={item.name} />
              <span className="text-xs text-slate-500">{item.name}</span>
            </div>
          ))}
        </div>
      }
      htmlCode={LOADING_TONES_HTML}
      jsxCode={LOADING_TONES_TSX}
    />
  );
};
