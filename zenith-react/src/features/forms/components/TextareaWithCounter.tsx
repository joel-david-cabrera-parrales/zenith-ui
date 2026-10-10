import { useId, useState } from 'react';
import type { TextareaHTMLAttributes } from 'react';

export interface TextareaWithCounterProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: string;
  maxLength?: number;
}

export const TextareaWithCounter = ({
  label,
  maxLength = 250,
  rows = 3,
  defaultValue = '',
  id,
  ...rest
}: TextareaWithCounterProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [length, setLength] = useState(
    typeof defaultValue === 'string' ? defaultValue.length : 0,
  );

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        {label !== undefined && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium text-slate-600"
          >
            {label}
          </label>
        )}
        <span className="font-mono text-[10px] font-semibold text-slate-500">
          {length} / {maxLength}
        </span>
      </div>
      <textarea
        id={inputId}
        rows={rows}
        maxLength={maxLength}
        defaultValue={defaultValue}
        onChange={(e) => setLength(e.target.value.length)}
        className="w-full resize-none rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        {...rest}
      />
    </div>
  );
}
