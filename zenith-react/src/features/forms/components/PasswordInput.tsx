import { useId, useState } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  leadingIcon?: string;
}

export const PasswordInput = ({
  label,
  leadingIcon = 'lock',
  id,
  ...rest
}: PasswordInputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [visible, setVisible] = useState(false);

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
      <div className="relative">
        <span
          aria-hidden="true"
          className="material-symbols-outlined pointer-events-none absolute top-2.5 left-3 text-lg text-slate-400"
        >
          {leadingIcon}
        </span>
        <input
          id={inputId}
          type={visible ? 'text' : 'password'}
          className="h-10 w-full rounded-lg border border-slate-300 bg-white pr-10 pl-10 text-sm text-slate-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
          {...rest}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          aria-pressed={visible}
          className="absolute top-2.5 right-2.5 flex items-center justify-center rounded p-0.5 text-slate-400 transition-colors hover:text-slate-900"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-lg">
            {visible ? 'visibility_off' : 'visibility'}
          </span>
        </button>
      </div>
    </div>
  );
}
