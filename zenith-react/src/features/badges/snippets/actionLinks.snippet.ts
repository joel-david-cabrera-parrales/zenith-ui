export const ACTION_LINKS_HTML = `
<div class="flex flex-wrap items-center gap-2">
  <a href="#spec-docs" class="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-blue-700 hover:border-blue-500 transition-colors">
    <span>Docs API</span>
    <span class="material-symbols-outlined text-[13px]">arrow_outward</span>
  </a>
  <a href="#changelog" class="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-slate-500 transition-colors">
    <span>Diff Log</span>
    <span class="material-symbols-outlined text-[13px]">history</span>
  </a>
  <button type="button" class="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-500 hover:text-blue-700 transition-colors">
    <span class="material-symbols-outlined text-[13px]">content_copy</span>
    <span>Copy SHA</span>
  </button>
</div>
`;

export const ACTION_LINKS_TSX = `
import { useState } from 'react';

export const ActionLinks = () => {
  const [copied, setCopied] = useState(false);

  const copySha = () => {
    window.navigator.clipboard?.writeText('a1b2c3d').catch(() => undefined);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
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
  );
};
`;
