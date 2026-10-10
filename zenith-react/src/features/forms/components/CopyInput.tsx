import { useId } from 'react';
import { useCopyToClipboard } from '../../../shared/hooks';

export interface CopyInputProps {
  label?: string;
  value: string;
  shortcut?: string;
  id?: string;
}

export function CopyInput({
  label,
  value,
  shortcut = '⌘K',
  id,
}: CopyInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const { copied, copy } = useCopyToClipboard();

  return (
    <div>
      {label !== undefined && (
        <label
          htmlFor={inputId}
          className="mb-1 block text-xs font-medium text-slate-600"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          id={inputId}
          type="text"
          readOnly
          value={value}
          className="h-10 w-full rounded-lg border border-slate-300 bg-slate-50 pr-24 pl-3 font-mono text-xs text-slate-900 focus:outline-none"
        />
        <div className="absolute right-1.5 flex items-center gap-1.5">
          <span className="hidden border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-[9px] text-slate-500 sm:inline-flex">
            {shortcut}
          </span>
          <button
            type="button"
            onClick={() => void copy(value)}
            className="flex h-7 items-center gap-1 rounded-md bg-blue-600 px-2 text-xs font-medium text-white transition-colors hover:bg-blue-700"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-sm"
            >
              {copied ? 'check' : 'content_copy'}
            </span>
            <span className="text-[11px]">{copied ? 'Copiado' : 'Copiar'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
