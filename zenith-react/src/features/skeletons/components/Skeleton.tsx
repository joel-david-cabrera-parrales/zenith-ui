import type { HTMLAttributes } from 'react';

export type SkeletonAnimation = 'pulse' | 'shimmer';
export type SkeletonShape = 'rounded' | 'circle' | 'pill';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  animation?: SkeletonAnimation;
  shape?: SkeletonShape;
  width?: string;
  height?: string;
}

const SHAPE_CLASSES: Record<SkeletonShape, string> = {
  rounded: 'rounded-lg',
  circle: 'rounded-full',
  pill: 'rounded-full',
};

export const Skeleton = ({
  animation = 'pulse',
  shape = 'rounded',
  width,
  height,
  className = '',
  style,
  ...rest
}: SkeletonProps) => {
  const anim = animation === 'pulse' ? 'animate-pulse bg-slate-200' : 'skeleton-shimmer';
  return (
    <div
      aria-hidden="true"
      style={{ width, height, ...style }}
      className={`${SHAPE_CLASSES[shape]} ${anim} ${className}`}
      {...rest}
    />
  );
};
