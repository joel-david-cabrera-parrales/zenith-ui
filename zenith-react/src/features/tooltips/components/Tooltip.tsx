import { useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export type TooltipTone = 'dark' | 'light' | 'info' | 'success' | 'warning' | 'danger';
export type TooltipAnimation = 'fade' | 'scale' | 'slide';
export type TooltipSize = 'sm' | 'md';

export interface TooltipProps {
  content: ReactNode;
  placement?: TooltipPlacement;
  tone?: TooltipTone;
  size?: TooltipSize;
  animation?: TooltipAnimation;
  withArrow?: boolean;
  enterDelay?: number;
  disabled?: boolean;
  className?: string;
  tooltipClassName?: string;
  children: ReactNode;
}

const EXIT_MS = 150;

const cx = (...parts: Array<string | false | undefined>): string =>
  parts.filter(Boolean).join(' ');

const BOX_OF: Record<TooltipTone, string> = {
  dark: 'bg-slate-900 text-white shadow-lg',
  light: 'bg-white text-slate-700 shadow-lg ring-1 ring-slate-200',
  info: 'bg-blue-600 text-white shadow-lg',
  success: 'bg-emerald-600 text-white shadow-lg',
  warning: 'bg-amber-400 text-slate-900 shadow-lg',
  danger: 'bg-rose-600 text-white shadow-lg',
};

const ARROW_BG_OF: Record<TooltipTone, string> = {
  dark: 'bg-slate-900',
  light: 'bg-white ring-1 ring-slate-200',
  info: 'bg-blue-600',
  success: 'bg-emerald-600',
  warning: 'bg-amber-400',
  danger: 'bg-rose-600',
};

const OUTER_OF: Record<TooltipPlacement, string> = {
  top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
  bottom: 'left-1/2 top-full mt-2 -translate-x-1/2',
  left: 'right-full top-1/2 mr-2 -translate-y-1/2',
  right: 'left-full top-1/2 ml-2 -translate-y-1/2',
};

const ARROW_POS_OF: Record<TooltipPlacement, string> = {
  top: 'left-1/2 top-full -mt-1 -translate-x-1/2',
  bottom: 'bottom-full left-1/2 -mb-1 -translate-x-1/2',
  left: 'left-full top-1/2 -ml-1 -translate-y-1/2',
  right: 'right-full top-1/2 -mr-1 -translate-y-1/2',
};

const sizeClassOf = (size: TooltipSize): string => {
  if (size === 'sm') return 'max-w-48 px-2 py-1 text-xs';
  return 'max-w-64 px-2.5 py-1.5 text-[13px] leading-snug';
};

const animationClassOf = (
  animation: TooltipAnimation,
  placement: TooltipPlacement,
  exiting: boolean,
): string => {
  if (animation === 'fade') return exiting ? 'animate-tooltip-fade-out' : 'animate-tooltip-fade-in';
  if (animation === 'slide' && !exiting) {
    if (placement === 'top') return 'animate-tooltip-top-in';
    if (placement === 'bottom') return 'animate-tooltip-bottom-in';
    if (placement === 'left') return 'animate-tooltip-left-in';
    return 'animate-tooltip-right-in';
  }
  return exiting ? 'animate-tooltip-out' : 'animate-tooltip-in';
};

export const Tooltip = ({
  content,
  placement = 'top',
  tone = 'dark',
  size = 'md',
  animation = 'scale',
  withArrow = true,
  enterDelay = 120,
  disabled = false,
  className = '',
  tooltipClassName = '',
  children,
}: TooltipProps) => {
  const tooltipId = useId();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const enterTimer = useRef<number | undefined>(undefined);
  const exitTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      window.clearTimeout(enterTimer.current);
      window.clearTimeout(exitTimer.current);
    };
  }, []);

  const show = () => {
    if (disabled) return;
    window.clearTimeout(exitTimer.current);
    window.clearTimeout(enterTimer.current);
    setExiting(false);
    enterTimer.current = window.setTimeout(() => {
      setVisible(true);
    }, enterDelay);
  };

  const hide = () => {
    window.clearTimeout(enterTimer.current);
    if (!visible && !exiting) return;
    if (!visible) {
      setExiting(false);
      return;
    }
    setExiting(true);
    window.clearTimeout(exitTimer.current);
    exitTimer.current = window.setTimeout(() => {
      setVisible(false);
      setExiting(false);
    }, EXIT_MS);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Escape') {
      window.clearTimeout(enterTimer.current);
      setExiting(false);
      setVisible(false);
    }
  };

  return (
    <span
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onKeyDown={handleKeyDown}
      aria-describedby={visible ? tooltipId : undefined}
      className={cx('relative inline-block', className)}
    >
      {children}
      {(visible || exiting) && !disabled && (
        <span role="presentation" className={cx('pointer-events-none absolute z-50 w-max', OUTER_OF[placement])}>
          <span
            id={tooltipId}
            role="tooltip"
            className={cx(
              'relative block rounded-lg font-medium whitespace-normal',
              BOX_OF[tone],
              sizeClassOf(size),
              animationClassOf(animation, placement, exiting),
              tooltipClassName,
            )}
          >
            {content}
            {withArrow && (
              <span aria-hidden="true" className={cx('absolute h-2 w-2 rotate-45', ARROW_BG_OF[tone], ARROW_POS_OF[placement])} />
            )}
          </span>
        </span>
      )}
    </span>
  );
};
