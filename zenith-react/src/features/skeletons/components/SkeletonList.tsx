import type { HTMLAttributes } from 'react';
import { Skeleton } from './Skeleton';
import type { SkeletonAnimation } from './Skeleton';

export interface SkeletonListProps extends HTMLAttributes<HTMLUListElement> {
  animation?: SkeletonAnimation;
  rows?: number;
}

export const SkeletonList = ({
  animation = 'pulse',
  rows = 3,
  className = '',
  ...rest
}: SkeletonListProps) => {
  return (
    <ul
      aria-busy="true"
      aria-label="Cargando lista"
      className={`space-y-3 ${className}`}
      {...rest}
    >
      {Array.from({ length: rows }).map((_, i) => (
        <li key={i} className="flex items-center gap-3" aria-hidden="true">
          <Skeleton animation={animation} shape="circle" className="h-8 w-8 shrink-0" />
          <div className="flex-1 space-y-1.5">
            <Skeleton animation={animation} className="h-2.5 w-1/2" />
            <Skeleton animation={animation} className="h-2 w-1/4" />
          </div>
          <Skeleton animation={animation} shape="pill" className="h-6 w-12 shrink-0" />
        </li>
      ))}
    </ul>
  );
};
