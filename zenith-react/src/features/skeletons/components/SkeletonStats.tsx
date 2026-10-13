import type { HTMLAttributes } from 'react';
import { Skeleton } from './Skeleton';
import type { SkeletonAnimation } from './Skeleton';

export interface SkeletonStatsProps extends HTMLAttributes<HTMLDivElement> {
  animation?: SkeletonAnimation;
  items?: number;
}

export const SkeletonStats = ({ animation = 'pulse', items = 3, className = '', ...rest }: SkeletonStatsProps) => {
  return (
    <div role="status" aria-label="Cargando métricas" aria-busy="true" className={`grid grid-cols-1 gap-3 sm:grid-cols-3 ${className}`} {...rest}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="rounded-xl border border-slate-200 bg-white p-4">
          <Skeleton animation={animation} className="h-2.5 w-20" />
          <Skeleton animation={animation} className="mt-2 h-6 w-24" />
          <Skeleton animation={animation} className="mt-2 h-2 w-full" />
        </div>
      ))}
    </div>
  );
};
