import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface GroupedResource {
  id: string;
  label: string;
  icon: string;
  meta: string;
  status: 'online' | 'text';
}

export interface ResourceGroup {
  title: string;
  badge: string;
  items: GroupedResource[];
}

export interface GroupedResourcesMenuProps extends HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
  onAction?: (id: string) => void;
}

const GROUPS: ResourceGroup[] = [
  {
    title: 'Entornos cloud // Infra',
    badge: 'AWS & GCP',
    items: [
      { id: 'eks', label: 'Kubernetes Clusters EKS', icon: 'cloud_queue', meta: '', status: 'online' },
      { id: 'rds', label: 'PostgreSQL Aurora RDS', icon: 'database', meta: '', status: 'online' },
    ],
  },
  {
    title: 'Herramientas locales // Dev',
    badge: 'CLI & Runtimes',
    items: [
      { id: 'cli', label: 'Zenith CLI v2.4 (Daemon)', icon: 'terminal', meta: 'Active', status: 'text' },
      {
        id: 'proxy',
        label: 'Proxy WireGuard Localhost',
        icon: 'lan',
        meta: ':8080',
        status: 'text',
      },
    ],
  },
];

export const GroupedResourcesMenu = ({
  defaultOpen = true,
  onAction,
  className = '',
  ...rest
}: GroupedResourcesMenuProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [exiting, setExiting] = useState(false);
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

  const handleAction = (id: string) => {
    onAction?.(id);
    close();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  const visible = open || exiting;

  return (
    <div ref={rootRef} className={`relative w-full ${className}`} {...rest} onKeyDown={handleKeyDown}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open && !exiting}
        onClick={toggle}
        className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
      >
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-blue-600">
            category
          </span>
          Seleccionar Recurso Global
        </span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
          expand_more
        </span>
      </button>

      {visible && (
        <div
          role="menu"
          aria-label="Catálogo de herramientas"
          className={
            exiting
              ? 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-out space-y-3 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
              : 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-in space-y-3 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
          }
        >
          {GROUPS.map((group, groupIndex) => (
            <div key={group.title}>
              {groupIndex > 0 && <div className="mb-3 border-t border-slate-200" />}
              <div className="flex items-center justify-between px-2 py-1 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                <span>{group.title}</span>
                <span className="rounded bg-slate-100 px-1 text-[9px]">{group.badge}</span>
              </div>
              <div className="mt-1 space-y-0.5">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="menuitem"
                    onClick={() => handleAction(item.id)}
                    className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                  >
                    <span className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className={
                          item.id === 'eks'
                            ? 'material-symbols-outlined text-[16px] text-blue-600'
                            : 'material-symbols-outlined text-[16px] text-slate-500'
                        }
                      >
                        {item.icon}
                      </span>
                      {item.label}
                    </span>
                    {item.status === 'online' ? (
                      <span aria-label="En línea" className="h-2 w-2 rounded-full bg-emerald-500" />
                    ) : (
                      <span className="font-mono text-[10px] text-slate-500">{item.meta}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
