import { useEffect } from 'react';
import type { ReactNode } from 'react';

export type ModalSize = 'sm' | 'md' | 'lg' | 'full';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  size?: ModalSize;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  closeLabel?: string;
}

const PANEL_CLASSES: Record<Exclude<ModalSize, 'full'>, string> = {
  sm: 'max-w-sm p-6',
  md: 'max-w-lg p-6',
  lg: 'max-w-2xl p-6 md:p-8',
};

export function Modal({
  open,
  onClose,
  size = 'md',
  title,
  description,
  children,
  actions,
  closeLabel = 'Cerrar diálogo',
}: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  const closeButton = (
    <button
      type="button"
      onClick={onClose}
      aria-label={closeLabel}
      className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
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
        className="fixed inset-0 z-50 flex flex-col bg-white"
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === 'string' ? title : undefined}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm"
      />
      <div
        className={`relative w-full rounded-2xl border border-slate-200/80 bg-white shadow-2xl ${PANEL_CLASSES[size]}`}
      >
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
        {children}
        {actions !== undefined && (
          <div className="mt-6 flex justify-end gap-2">{actions}</div>
        )}
      </div>
    </div>
  );
}
