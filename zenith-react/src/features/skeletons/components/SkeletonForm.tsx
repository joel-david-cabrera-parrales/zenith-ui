import type { HTMLAttributes } from 'react';
import { Skeleton } from './Skeleton';
import type { SkeletonAnimation } from './Skeleton';

export interface SkeletonFormProps extends HTMLAttributes<HTMLDivElement> {
  animation?: SkeletonAnimation;
}

export const SkeletonForm = ({ animation = 'pulse', className = '', ...rest }: SkeletonFormProps) => {
  return (
    <div role="status" aria-label="Cargando formulario" aria-busy="true" className={`space-y-4 rounded-xl border border-slate-200 bg-white p-4 ${className}`} {...rest}>
      <div>
        <Skeleton animation={animation} className="h-2.5 w-24" />
        <Skeleton animation={animation} className="mt-1.5 h-9 w-full" />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <Skeleton animation={animation} className="h-2.5 w-20" />
          <Skeleton animation={animation} className="mt-1.5 h-9 w-full" />
        </div>
        <div>
          <Skeleton animation={animation} className="h-2.5 w-20" />
          <Skeleton animation={animation} className="mt-1.5 h-9 w-full" />
        </div>
      </div>
      <div>
        <Skeleton animation={animation} className="h-2.5 w-28" />
        <Skeleton animation={animation} className="mt-1.5 h-20 w-full" />
      </div>
      <div className="flex gap-2">
        <Skeleton animation={animation} className="h-9 flex-1" />
        <Skeleton animation={animation} className="h-9 w-28" />
      </div>
    </div>
  );
};
