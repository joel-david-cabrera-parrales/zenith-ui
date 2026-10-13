import type { HTMLAttributes } from 'react';
import { Skeleton } from './Skeleton';
import type { SkeletonAnimation } from './Skeleton';

export interface SkeletonTableProps extends HTMLAttributes<HTMLDivElement> {
  animation?: SkeletonAnimation;
  rows?: number;
}

export const SkeletonTable = ({ animation = 'pulse', rows = 4, className = '', ...rest }: SkeletonTableProps) => {
  return (
    <div role="status" aria-label="Cargando tabla" aria-busy="true" className={`overflow-hidden rounded-xl border border-slate-200 bg-white ${className}`} {...rest}>
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 p-3">
        <Skeleton animation={animation} className="h-8 min-w-32 flex-1" />
        <Skeleton animation={animation} className="h-8 w-24" />
        <Skeleton animation={animation} className="h-8 w-20" />
      </div>
      <div className="space-y-px bg-slate-100">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 bg-white px-3 py-2.5">
            <Skeleton animation={animation} shape="circle" className="h-8 w-8 shrink-0" />
            <Skeleton animation={animation} className="h-3 flex-1" />
            <Skeleton animation={animation} className="hidden h-3 w-24 sm:block" />
            <Skeleton animation={animation} shape="pill" className="h-6 w-16 shrink-0" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-slate-200 p-3">
        <Skeleton animation={animation} className="h-2.5 w-28" />
        <div className="flex gap-1.5">
          <Skeleton animation={animation} className="h-7 w-7 rounded-md" />
          <Skeleton animation={animation} className="h-7 w-7 rounded-md" />
          <Skeleton animation={animation} className="h-7 w-7 rounded-md" />
        </div>
      </div>
    </div>
  );
};
