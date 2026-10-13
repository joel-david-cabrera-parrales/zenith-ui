import { useId, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface ActionsAccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onCopy'> {
  keyName?: string;
  keyValue?: string;
  body?: string;
  defaultOpen?: boolean;
  onCopy?: (value: string) => void;
  onOpenDocs?: () => void;
}

export const ActionsAccordion = ({
  keyName = 'prod_client_eu',
  keyValue = 'sk-live-…8492',
  body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  defaultOpen = true,
  onCopy,
  onOpenDocs,
  className = '',
  ...rest
}: ActionsAccordionProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [copied, setCopied] = useState(false);
  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const panelId = `${baseId}-panel`;

  const handleCopy = () => {
    onCopy?.(keyValue);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white ${className}`}
      {...rest}
    >
      <div>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((prev) => !prev)}
          className={
            open
              ? 'flex w-full cursor-pointer items-center justify-between gap-3 bg-blue-50/60 px-4 py-3 text-left text-sm font-semibold text-slate-900'
              : 'flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50'
          }
        >
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={
                open
                  ? 'material-symbols-outlined text-[18px] text-blue-600'
                  : 'material-symbols-outlined text-[18px] text-slate-400'
              }
            >
              key
            </span>
            {keyName}
            <span className="rounded bg-slate-900 px-1.5 py-0.5 font-mono text-[9px] text-white">{keyValue}</span>
          </span>
          <span
            aria-hidden="true"
            className={
              open
                ? 'material-symbols-outlined rotate-180 text-[20px] text-blue-600 transition-transform duration-300 ease-in-out'
                : 'material-symbols-outlined text-[20px] text-slate-400 transition-transform duration-300 ease-in-out'
            }
          >
            expand_more
          </span>
        </button>
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          inert={!open}
          className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-3 px-4 pb-4">
            <p className="text-sm leading-relaxed text-slate-600">{body}</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="flex cursor-pointer items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
                  {copied ? 'check' : 'content_copy'}
                </span>
                {copied ? 'Copiado' : 'Copiar'}
              </button>
              <button
                type="button"
                onClick={onOpenDocs}
                className="cursor-pointer rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Ver docs
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-60">
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="flex w-full cursor-not-allowed items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-500"
        >
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="material-symbols-outlined text-[18px]">
              lock
            </span>
            legacy_2023 — Revocada
          </span>
          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
            block
          </span>
        </button>
      </div>
    </div>
  );
};
