import type { HTMLAttributes } from 'react';
import { Skeleton } from './Skeleton';
import type { SkeletonAnimation } from './Skeleton';

export interface SkeletonArticleProps extends HTMLAttributes<HTMLDivElement> {
  animation?: SkeletonAnimation;
}

export const SkeletonArticle = ({ animation = 'pulse', className = '', ...rest }: SkeletonArticleProps) => {
  return (
    <div role="status" aria-label="Cargando artículo" aria-busy="true" className={`rounded-xl border border-slate-200 bg-white p-4 ${className}`} {...rest}>
      <Skeleton animation={animation} className="h-4 w-3/4" />
      <Skeleton animation={animation} className="mt-2 h-3 w-1/3" />
      <div className="mt-4 space-y-2">
        <Skeleton animation={animation} className="h-3 w-full" />
        <Skeleton animation={animation} className="h-3 w-full" />
        <Skeleton animation={animation} className="h-3 w-11/12" />
        <Skeleton animation={animation} className="h-3 w-2/3" />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Skeleton animation={animation} shape="circle" className="h-6 w-6" />
        <Skeleton animation={animation} className="h-2.5 w-24" />
        <Skeleton animation={animation} className="h-2.5 w-16" />
      </div>
    </div>
  );
};
