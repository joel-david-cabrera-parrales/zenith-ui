import type { HTMLAttributes } from 'react';

export interface CheckListProps extends HTMLAttributes<HTMLUListElement> {
  items: string[];
  icon?: string;
}

export function CheckList({
  items,
  icon = 'verified',
  className = '',
  ...rest
}: CheckListProps) {
  return (
    <ul className={`space-y-2 text-sm text-slate-600 ${className}`} {...rest}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-blue-600 text-[18px]"
          >
            {icon}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
