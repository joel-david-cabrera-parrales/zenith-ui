import { useState } from 'react';
import type { ReactNode } from 'react';
import { CodeBlock } from './CodeBlock';

export type TabId = 'preview' | 'html' | 'jsx';

export interface TabbedViewProps {
  preview?: ReactNode;
  htmlCode?: string;
  jsxCode?: string;
}

const TABS: { id: TabId; label: string }[] = [
  { id: 'preview', label: 'Preview' },
  { id: 'html', label: 'HTML' },
  { id: 'jsx', label: 'JSX' },
];

export const TabbedView = ({ preview, htmlCode, jsxCode }: TabbedViewProps) => {
  const visibleTabs = TABS.filter((tab) => {
    if (tab.id === 'preview') return preview !== undefined;
    if (tab.id === 'html') return htmlCode !== undefined;
    return jsxCode !== undefined;
  });

  const [active, setActive] = useState<TabId>('preview');
  const activeTab = visibleTabs.some((tab) => tab.id === active)
    ? active
    : visibleTabs[0]?.id;

  if (activeTab === undefined) return null;

  return (
    <div className="w-full max-w-4xl min-w-[18rem] overflow-hidden rounded-lg border border-slate-200">
      <div role="tablist" aria-label="Vista del componente" className="flex gap-1 border-b border-slate-200 bg-slate-50 p-2">
        {visibleTabs.map((tab) => {
          const selected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tab.id)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                selected
                  ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="bg-white">
        {activeTab === 'preview' && (
          <div
            role="tabpanel"
            className="flex min-h-[6rem] flex-wrap items-center justify-center gap-2 p-4"
          >
            {preview}
          </div>
        )}
        {activeTab === 'html' && htmlCode !== undefined && (
          <div role="tabpanel">
            <CodeBlock code={htmlCode} label="código HTML" language="html" />
          </div>
        )}
        {activeTab === 'jsx' && jsxCode !== undefined && (
          <div role="tabpanel">
            <CodeBlock code={jsxCode} label="código JSX" language="tsx" />
          </div>
        )}
      </div>
    </div>
  );
}
