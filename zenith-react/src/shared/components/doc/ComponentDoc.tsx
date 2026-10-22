import { TabbedView } from "./TabbedView";
import type { TabbedViewProps } from "./TabbedView";
import type { MaxWidth } from "./max-width";
import { useTheme } from "@/shared/hooks/useTheme";

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
  const { dark } = useTheme();
  return (
    <section className={`w-full max-w-${maxWidth}`}>
      <h2 className={`text-xl font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {description !== undefined && (
        <p className={`mt-1 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>{description}</p>
      )}
      <div className="mt-4">
        <TabbedView preview={preview} htmlCode={htmlCode} jsxCode={jsxCode} />
      </div>
    </section>
  );
};