import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface NotificationsFlyoutProps extends HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
  onAction?: (id: string) => void;
}

type Filter = 'all' | 'unread';

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: string;
  unread: boolean;
  containerClass: string;
  iconClass: string;
  titleClass: string;
}

const NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'pipeline',
    title: 'Fallo de Pipeline #4901',
    description: 'Cluster eu-west-1 reportó OOMKilled en pod auth-svc.',
    time: '2m atrás',
    icon: 'error',
    unread: true,
    containerClass: 'border-rose-200 bg-rose-50',
    iconClass: 'text-rose-600',
    titleClass: 'text-rose-600',
  },
  {
    id: 'deploy',
    title: 'Despliegue a Staging OK',
    description: 'Release v2.4.0-rc3 promovido por @marta_dev.',
    time: '14m atrás',
    icon: 'check_circle',
    unread: true,
    containerClass: 'border-slate-200 bg-slate-50',
    iconClass: 'text-teal-600',
    titleClass: 'text-slate-900',
  },
  {
    id: 'api-key',
    title: 'Llave API por expirar',
    description: 'Token CI/CD GitHub expira en 48 horas hábiles.',
    time: '1h atrás',
    icon: 'warning',
    unread: false,
    containerClass: 'border-slate-200 bg-slate-50',
    iconClass: 'text-amber-600',
    titleClass: 'text-slate-900',
  },
];

export const NotificationsFlyout = ({
  defaultOpen = true,
  onAction,
  className = '',
  ...rest
}: NotificationsFlyoutProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [exiting, setExiting] = useState(false);
  const [filter, setFilter] = useState<Filter>('all');
  const rootRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open || exiting) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current !== null && !rootRef.current.contains(event.target as Node)) {
        setExiting(true);
        timer.current = window.setTimeout(() => {
          setOpen(false);
          setExiting(false);
        }, 200);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExiting(true);
        timer.current = window.setTimeout(() => {
          setOpen(false);
          setExiting(false);
        }, 200);
      }
    };
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, exiting]);

  const close = () => {
    if (exiting) return;
    setExiting(true);
    timer.current = window.setTimeout(() => {
      setOpen(false);
      setExiting(false);
    }, 200);
  };

  const toggle = () => {
    if (open && !exiting) {
      close();
      return;
    }
    setExiting(false);
    setOpen(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  const handleAction = (id: string) => {
    onAction?.(id);
    close();
  };

  const visible = open || exiting;
  const items = filter === 'all' ? NOTIFICATIONS : NOTIFICATIONS.filter((item) => item.unread);

  return (
    <div ref={rootRef} className={`relative w-full ${className}`} {...rest} onKeyDown={handleKeyDown}>
      <div className="mb-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-2">
        <span className="text-sm text-slate-500">Barra de Herramientas Global</span>
        <div className="relative">
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={open && !exiting}
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition-colors hover:bg-slate-100"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
              notifications
            </span>
          </button>
          <span
            aria-hidden="true"
            className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white ring-2 ring-white"
          >
            3
          </span>
        </div>
      </div>

      {visible && (
        <div
          role="menu"
          aria-label="Notificaciones"
          className={
            exiting
              ? 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-out space-y-2.5 rounded-xl border border-slate-200 bg-white p-3 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
              : 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-in space-y-2.5 rounded-xl border border-slate-200 bg-white p-3 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
          }
        >
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-slate-900">Notificaciones</span>
              <span className="rounded bg-rose-100 px-1.5 py-0.5 text-[11px] font-bold text-rose-700">
                3 NUEVAS
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={
                  filter === 'all'
                    ? 'rounded bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-900'
                    : 'rounded px-2 py-0.5 text-[11px] text-slate-500 hover:text-slate-900'
                }
              >
                Todas
              </button>
              <button
                type="button"
                onClick={() => setFilter('unread')}
                className={
                  filter === 'unread'
                    ? 'rounded bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-900'
                    : 'rounded px-2 py-0.5 text-[11px] text-slate-500 hover:text-slate-900'
                }
              >
                No leídas
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                role="menuitem"
                onClick={() => handleAction(item.id)}
                className={`flex w-full items-start gap-2.5 rounded-lg border p-2 text-left transition-colors hover:bg-slate-100 ${item.containerClass}`}
              >
                <span aria-hidden="true" className={`material-symbols-outlined mt-0.5 shrink-0 text-[18px] ${item.iconClass}`}>
                  {item.icon}
                </span>
                <span className="flex-1 space-y-0.5">
                  <span className="flex items-center justify-between gap-2">
                    <span className={`text-sm font-semibold ${item.titleClass}`}>{item.title}</span>
                    <span className="font-mono text-xs text-slate-500">{item.time}</span>
                  </span>
                  <span className="block text-xs text-slate-500">{item.description}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 pt-2">
            <button
              type="button"
              onClick={() => handleAction('mark-all-read')}
              className="text-[11px] font-semibold tracking-wide text-slate-500 uppercase transition-colors hover:text-blue-600"
            >
              Marcar todo como leído
            </button>
            <button
              type="button"
              onClick={() => handleAction('audit-center')}
              className="text-[11px] font-bold tracking-wide text-blue-600 uppercase hover:underline"
            >
              Centro de Auditoría →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
