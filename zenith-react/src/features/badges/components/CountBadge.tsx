import type { HTMLAttributes, ReactNode } from 'react';

export interface CountBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  detail?: ReactNode;
}

export const CountBadge = ({ label, detail, className = '', ...rest }: CountBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${className}`}
      {...rest}
    >
      <span>{label}</span>
      {detail}
    </span>
  );
};
