import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { useOverlayBehavior } from './useOverlay';

export type ModalSize = 'sm' | 'base' | 'md' | 'lg' | 'full';
export type ModalTone = 'default' | 'danger';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  size?: ModalSize;
  tone?: ModalTone;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  showClose?: boolean;
  closeLabel?: string;
}

const PANEL_CLASSES: Record<Exclude<ModalSize, 'full'>, string> = {
  sm: 'max-w-sm p-6',
  base: 'max-w-md p-6',
  md: 'max-w-lg p-6',
  lg: 'max-w-2xl p-6 md:p-8',
};

const TONE_BORDER: Record<ModalTone, string> = {
  default: 'border-slate-200/80',
  danger: 'border-rose-100',
};

const EXIT_DELAY = 200;

export const Modal = ({
  open,
  onClose,
  size = 'md',
  tone = 'default',
  title,
  description,
  children,
  actions,
  showClose = true,
  closeLabel = 'Cerrar diálogo',
}: ModalProps) => {
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

  const closeButton = showClose && (
    <button
      type="button"
      onClick={requestClose}
      aria-label={closeLabel}
      className="shrink-0 rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
    >
      <span aria-hidden="true" className="material-symbols-outlined text-lg">
        close
      </span>
    </button>
  );

  if (size === 'full') {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === 'string' ? title : undefined}
        className={`fixed inset-0 z-50 flex flex-col bg-white ${isExiting ? 'animate-modal-out' : 'animate-modal-in'}`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">
          <div>
            {title !== undefined && (
              <h2 className="text-sm font-bold text-slate-900">{title}</h2>
            )}
            {description !== undefined && (
              <p className="font-mono text-[11px] text-slate-500">{description}</p>
            )}
          </div>
          {closeButton}
        </div>
        <div className="flex-1 overflow-y-auto bg-slate-50 p-8">{children}</div>
        {actions !== undefined && (
          <div className="flex justify-end gap-2 border-t border-slate-200 px-6 py-4">
            {actions}
          </div>
        )}
      </div>
    );
  }

  const hasHeader =
    title !== undefined || description !== undefined || showClose;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === 'string' ? title : undefined}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        aria-hidden="true"
        onClick={requestClose}
        className={`absolute inset-0 bg-slate-900/55 backdrop-blur-sm ${isExiting ? 'animate-overlay-out' : 'animate-overlay-in'}`}
      />
      <div
        className={`relative w-full rounded-2xl border bg-white shadow-2xl ${PANEL_CLASSES[size]} ${TONE_BORDER[tone]} ${isExiting ? 'animate-modal-out' : 'animate-modal-in'}`}
      >
        {hasHeader && (
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              {title !== undefined && (
                <h3 className="text-base font-semibold text-slate-900">{title}</h3>
              )}
              {description !== undefined && (
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {description}
                </p>
              )}
            </div>
            {closeButton}
          </div>
        )}
        {children}
        {actions !== undefined && (
          <div className="mt-6 flex justify-end gap-2">{actions}</div>
        )}
      </div>
    </div>
  );
}
