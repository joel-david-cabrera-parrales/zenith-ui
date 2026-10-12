import { useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { ACTION_LINKS_HTML, ACTION_LINKS_TSX } from '../snippets';

export const ActionLinksDoc = () => {
  const [copied, setCopied] = useState(false);

  const copySha = () => {
    window.navigator.clipboard?.writeText('a1b2c3d').catch(() => undefined);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <ComponentDoc
      title="Micro-enlaces y acciones rápidas"
      description="Enlaces y botones compactos de SEC_04 (Docs API, Diff Log y copiar SHA con confirmación). Uno al lado del otro, sin tabla."
      preview={
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="#spec-docs"
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-blue-700 transition-colors hover:border-blue-500"
          >
            <span>Docs API</span>
            <span aria-hidden="true" className="material-symbols-outlined text-[13px]">
              arrow_outward
            </span>
          </a>
          <a
            href="#changelog"
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-slate-500"
          >
            <span>Diff Log</span>
            <span aria-hidden="true" className="material-symbols-outlined text-[13px]">
              history
            </span>
          </a>
          <button
            type="button"
            onClick={copySha}
            className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-500 transition-colors hover:text-blue-700"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[13px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'Copiado' : 'Copy SHA'}</span>
          </button>
        </div>
      }
      htmlCode={ACTION_LINKS_HTML}
      jsxCode={ACTION_LINKS_TSX}
    />
  );
};
