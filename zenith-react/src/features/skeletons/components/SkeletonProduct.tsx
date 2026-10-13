import type { HTMLAttributes } from 'react';
import { Skeleton } from './Skeleton';
import type { SkeletonAnimation } from './Skeleton';

export interface SkeletonProductProps extends HTMLAttributes<HTMLDivElement> {
  animation?: SkeletonAnimation;
}

export const SkeletonProduct = ({ animation = 'pulse', className = '', ...rest }: SkeletonProductProps) => {
  return (
    <div role="status" aria-label="Cargando producto" aria-busy="true" className={`flex gap-3 rounded-xl border border-slate-200 bg-white p-3 ${className}`} {...rest}>
      <Skeleton animation={animation} className="h-24 w-24 shrink-0 rounded-xl" />
      <div className="flex-1 space-y-2 py-1">
        <Skeleton animation={animation} className="h-3 w-2/3" />
        <Skeleton animation={animation} className="h-2.5 w-1/3" />
        <Skeleton animation={animation} className="h-4 w-20" />
        <div className="flex gap-1.5 pt-1">
          <Skeleton animation={animation} className="h-7 w-20" />
          <Skeleton animation={animation} className="h-7 w-9" />
        </div>
      </div>
    </div>
  );
};
