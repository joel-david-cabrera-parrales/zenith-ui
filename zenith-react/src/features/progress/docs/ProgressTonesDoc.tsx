import { ComponentDoc } from '../../../shared/components/doc';
import { Progress } from '../components';
import { PROGRESS_TONES_HTML, PROGRESS_TONES_TSX } from '../snippets';

export const ProgressTonesDoc = () => {
  const tones = [
    { name: 'Primary', tone: 'primary' as const },
    { name: 'Success', tone: 'success' as const },
    { name: 'Warning', tone: 'warning' as const },
    { name: 'Danger', tone: 'danger' as const },
    { name: 'Info', tone: 'info' as const },
    { name: 'Neutral', tone: 'neutral' as const },
  ] as const;

  return (
    <ComponentDoc
      title="Progress — Tonos de Color"
      description="Seis tonos semánticos para representar diferentes estados: primary, success, warning, danger, info, neutral."
      preview={
        <div className="space-y-4">
          {tones.map(({ name, tone }) => (
            <div key={name}>
              <Progress value={65} tone={tone} showLabel label={name} />
            </div>
          ))}
        </div>
      }
      htmlCode={PROGRESS_TONES_HTML}
      jsxCode={PROGRESS_TONES_TSX}
    />
  );
};