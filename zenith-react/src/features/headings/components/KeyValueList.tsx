import type { HTMLAttributes } from 'react';

export interface KeyValueItem {
  term: string;
  value: string;
  accent?: boolean;
}

export interface KeyValueListProps extends HTMLAttributes<HTMLElement> {
  items: KeyValueItem[];
}

export const KeyValueList = ({
  items,
  className = '',
  ...rest
}: KeyValueListProps) => {
  return (
    <dl
      className={`text-xs space-y-1.5 font-mono ${className}`}
      {...rest}
    >
      {items.map((item) => (
        <div
          key={item.term}
          className="flex justify-between py-1 border-b border-dashed border-slate-200"
        >
          <dt className="text-slate-400">{item.term}:</dt>
          <dd
            className={`font-semibold ${item.accent === true ? 'text-blue-600' : 'text-slate-900'}`}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
