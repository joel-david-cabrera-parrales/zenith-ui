import type { HTMLAttributes } from 'react';
import { Skeleton } from './Skeleton';
import type { SkeletonAnimation } from './Skeleton';

export interface SkeletonCardProps extends HTMLAttributes<HTMLDivElement> {
  animation?: SkeletonAnimation;
  lines?: number;
}

export const SkeletonCard = ({
  animation = 'pulse',
  lines = 3,
  className = '',
  ...rest
}: SkeletonCardProps) => {
  return (
    <div
      role="status"
      aria-label="Cargando contenido"
      aria-busy="true"
      className={`rounded-xl border border-slate-200 bg-white p-4 ${className}`}
      {...rest}
    >
      <div className="flex items-center gap-3">
        <Skeleton animation={animation} shape="circle" className="h-10 w-10 shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton animation={animation} className="h-3 w-2/3" />
          <Skeleton animation={animation} className="h-2.5 w-1/3" />
        </div>
        <Skeleton animation={animation} className="h-8 w-20 shrink-0" />
      </div>
      <Skeleton animation={animation} className="mt-4 h-28 rounded-xl" />
      <div className="mt-4 space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton
            key={i}
            animation={animation}
            className={i === 0 ? 'h-3 w-full' : i === lines - 1 ? 'h-3 w-2/3' : 'h-3 w-11/12'}
          />
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <Skeleton animation={animation} className="h-8 flex-1" />
        <Skeleton animation={animation} className="h-8 flex-1" />
      </div>
    </div>
  );
};
