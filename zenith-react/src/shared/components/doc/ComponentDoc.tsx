import { TabbedView } from "./TabbedView";
import type { TabbedViewProps } from "./TabbedView";

export interface ComponentDocProps extends TabbedViewProps {
  title: string;
  description?: string;
}

export function ComponentDoc({
  title,
  description,
  preview,
  htmlCode,
  jsxCode,
}: ComponentDocProps) {
  return (
    <section className="w-full max-w-4xl">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      {description !== undefined && (
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      )}
      <div className="mt-4">
        <TabbedView preview={preview} htmlCode={htmlCode} jsxCode={jsxCode} />
      </div>
    </section>
  );
}
