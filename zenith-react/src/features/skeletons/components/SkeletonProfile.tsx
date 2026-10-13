import type { HTMLAttributes } from 'react';
import { Skeleton } from './Skeleton';
import type { SkeletonAnimation } from './Skeleton';

export interface SkeletonProfileProps extends HTMLAttributes<HTMLDivElement> {
  animation?: SkeletonAnimation;
}

export const SkeletonProfile = ({ animation = 'pulse', className = '', ...rest }: SkeletonProfileProps) => {
  return (
    <div role="status" aria-label="Cargando perfil" aria-busy="true" className={`overflow-hidden rounded-xl border border-slate-200 bg-white ${className}`} {...rest}>
      <Skeleton animation={animation} className="h-20 w-full rounded-none" />
      <div className="p-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="flex items-center gap-3">
            <Skeleton animation={animation} shape="circle" className="-mt-10 h-14 w-14 ring-4 ring-white" />
            <div className="space-y-2">
              <Skeleton animation={animation} className="h-3.5 w-36" />
              <Skeleton animation={animation} className="h-2.5 w-24" />
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton animation={animation} className="h-8 w-24" />
            <Skeleton animation={animation} className="h-8 w-10" />
          </div>
        </div>
        <div className="mt-4 flex gap-4">
          <Skeleton animation={animation} className="h-2.5 w-20" />
          <Skeleton animation={animation} className="h-2.5 w-20" />
          <Skeleton animation={animation} className="h-2.5 w-20" />
        </div>
      </div>
    </div>
  );
};
