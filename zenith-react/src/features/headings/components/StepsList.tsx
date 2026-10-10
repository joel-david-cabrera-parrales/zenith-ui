import type { HTMLAttributes } from 'react';

export interface StepsListProps extends HTMLAttributes<HTMLOListElement> {
  items: string[];
}

export const StepsList = ({ items, className = '', ...rest }: StepsListProps) => {
  return (
    <ol className={`space-y-2.5 text-sm text-slate-600 ${className}`} {...rest}>
      {items.map((item, index) => (
        <li key={item} className="flex items-start gap-2.5">
          <span
            aria-hidden="true"
            className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5"
          >
            {index + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}
