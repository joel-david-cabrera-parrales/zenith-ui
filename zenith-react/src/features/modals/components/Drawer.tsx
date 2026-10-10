import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useOverlayBehavior } from './useOverlay';

export type DrawerSide = 'right' | 'left' | 'bottom';
export type DrawerWidth = 'narrow' | 'base' | 'wide';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: DrawerSide;
  width?: DrawerWidth;
  icon?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  closeLabel?: string;
}

const WIDTH_CLASSES: Record<DrawerWidth, string> = {
  narrow: 'max-w-xs',
  base: 'max-w-md',
  wide: 'max-w-2xl',
};

const PANEL_ANIMATION: Record<DrawerSide, { in: string; out: string }> = {
  right: { in: 'animate-drawer-right-in', out: 'animate-drawer-right-out' },
  left: { in: 'animate-drawer-left-in', out: 'animate-drawer-left-out' },
  bottom: { in: 'animate-drawer-bottom-in', out: 'animate-drawer-bottom-out' },
};

const EXIT_DELAY = 200;

export const Drawer = ({
  open,
  onClose,
  side = 'right',
  width = 'base',
  icon,
  title,
  subtitle,
  children,
  footer,
  closeLabel = 'Cerrar panel',
}: DrawerProps) => {
  const [exiting, setExiting] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  const requestClose = useCallback(() => {
    if (exiting) return;
    setExiting(true);
    onClose();
    timer.current = window.setTimeout(() => setExiting(false), EXIT_DELAY);
  }, [exiting, onClose]);

  useOverlayBehavior(open, requestClose);

  if (!open && !exiting) return null;
  const isExiting = exiting && !open;
  const animation = isExiting
    ? PANEL_ANIMATION[side].out
    : PANEL_ANIMATION[side].in;

  const closeButton = (
    <button
      type="button"
      onClick={requestClose}
      aria-label={closeLabel}
      className="shrink-0 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
    >
      <span aria-hidden="true" className="material-symbols-outlined text-lg">
        close
      </span>
    </button>
  );

  const header = (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
      <div className="flex items-center gap-2">
        {icon !== undefined && (
          <span aria-hidden="true" className="material-symbols-outlined text-blue-600">
            {icon}
          </span>
        )}
        <div>
          {title !== undefined && (
            <h3 className="text-base font-bold text-slate-900">{title}</h3>
          )}
          {subtitle !== undefined && (
            <p className="font-mono text-[11px] text-slate-400">{subtitle}</p>
          )}
        </div>
      </div>
      {closeButton}
    </div>
  );

  if (side === 'bottom') {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === 'string' ? title : undefined}
        className="fixed inset-0 z-50 flex flex-col justify-end"
      >
        <div
          aria-hidden="true"
          onClick={requestClose}
          className={`absolute inset-0 bg-slate-900/55 backdrop-blur-sm ${isExiting ? 'animate-overlay-out' : 'animate-overlay-in'}`}
        />
        <div
          className={`relative mx-auto flex w-full max-w-2xl flex-col rounded-t-2xl border-t border-slate-200 bg-white p-6 shadow-2xl ${animation}`}
        >
          <div aria-hidden="true" className="mx-auto mb-4 h-1 w-12 rounded-full bg-slate-200" />
          {header}
          <div className="py-4">{children}</div>
          {footer !== undefined && (
            <div className="mt-2 border-t border-slate-100 pt-4">{footer}</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === 'string' ? title : undefined}
      className="fixed inset-0 z-50"
    >
      <div
        aria-hidden="true"
        onClick={requestClose}
        className={`absolute inset-0 bg-slate-900/55 backdrop-blur-sm ${isExiting ? 'animate-overlay-out' : 'animate-overlay-in'}`}
      />
      <div
        className={`fixed top-0 bottom-0 flex w-full flex-col bg-white p-6 shadow-2xl ${WIDTH_CLASSES[width]} ${
          side === 'right' ? 'right-0 border-l border-slate-200' : 'left-0 border-r border-slate-200'
        } ${animation}`}
      >
        {header}
        <div className="flex-1 space-y-5 overflow-y-auto py-5 text-xs text-slate-600">
          {children}
        </div>
        {footer !== undefined && (
          <div className="flex gap-2 border-t border-slate-100 pt-4">{footer}</div>
        )}
      </div>
    </div>
  );
}
