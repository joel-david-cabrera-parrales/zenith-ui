export const ACTIONS_HTML = `
<div class="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
  <div>
    <button type="button" aria-expanded="true" class="flex w-full items-center justify-between gap-3 bg-blue-50/60 px-4 py-3 text-left text-sm font-semibold text-slate-900">prod_client_eu <span class="rounded bg-slate-900 px-1.5 py-0.5 font-mono text-[9px] text-white">sk-live-…8492</span></button>
    <div class="space-y-3 px-4 pb-4">
      <p class="text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div class="flex gap-2">
        <button type="button" class="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">Copiar</button>
        <button type="button" class="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700">Ver docs</button>
      </div>
    </div>
  </div>
  <div class="opacity-60">
    <button type="button" disabled class="flex w-full cursor-not-allowed items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-500">legacy_2023 — Revocada</button>
  </div>
</div>
`;

export const ACTIONS_TSX = `
import { useId, useState } from 'react';

export const ActionsAccordion = () => {
  const [open, setOpen] = useState(true);
  const [copied, setCopied] = useState(false);
  const baseId = useId();
  const handleCopy = () => {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      <div>
        <button type="button" aria-expanded={open} onClick={() => setOpen((prev) => !prev)} className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900">
          <span className="flex items-center gap-2">
            prod_client_eu
            <span className="rounded bg-slate-900 px-1.5 py-0.5 font-mono text-[9px] text-white">sk-live-…8492</span>
          </span>
          <span aria-hidden="true" className={open ? 'material-symbols-outlined rotate-180 text-[20px] text-blue-600 transition-transform duration-300 ease-in-out' : 'material-symbols-outlined text-[20px] text-slate-400 transition-transform duration-300 ease-in-out'}>expand_more</span>
        </button>
        <div role="region" inert={!open} className={'grid transition-all duration-300 ease-in-out motion-reduce:transition-none ' + (open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
          <div className="overflow-hidden">
            <div className="space-y-3 px-4 pb-4">
              <p className="text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex gap-2">
                <button type="button" onClick={handleCopy} className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">{copied ? 'Copiado' : 'Copiar'}</button>
                <button type="button" className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700">Ver docs</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-60">
        <button type="button" disabled className="flex w-full cursor-not-allowed items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-500">legacy_2023 — Revocada</button>
      </div>
    </div>
  );
};
`;
