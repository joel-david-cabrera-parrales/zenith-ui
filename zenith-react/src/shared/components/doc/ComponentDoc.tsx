import { TabbedView } from "./TabbedView";
import type { TabbedViewProps } from "./TabbedView";
import type { MaxWidth } from "./max-width";

export interface ComponentDocProps extends TabbedViewProps {
  title: string;
  description?: string;
  maxWidth?: MaxWidth;
}

export const ComponentDoc = ({
  title,
  description,
  preview,
  htmlCode,
  jsxCode,
  maxWidth = '4xl',
}: ComponentDocProps) => {
  return (
    <section className={`w-full max-w-${maxWidth}`}>
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      {description !== undefined && (
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      )}
      <div className="mt-4">
        <TabbedView preview={preview} htmlCode={htmlCode} jsxCode={jsxCode} maxWidth={maxWidth} />
      </div>
    </section>
  );
};