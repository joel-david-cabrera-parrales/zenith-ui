export const NOTIFICATIONS_FLYOUT_HTML = `
<div class="relative w-full">
  <div class="mb-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-2">
    <span class="text-sm text-slate-500">Barra de Herramientas Global</span>
    <div class="relative">
      <button type="button" aria-haspopup="menu" aria-expanded="true" class="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100">
        <span class="material-symbols-outlined text-[20px]">notifications</span>
      </button>
      <span class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white ring-2 ring-white">3</span>
    </div>
  </div>
  <div role="menu" aria-label="Notificaciones" class="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-2.5 rounded-xl border border-slate-200 bg-white p-3 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
    <div class="flex items-center justify-between border-b border-slate-200 pb-2">
      <div class="flex items-center gap-2">
        <span class="text-base font-semibold text-slate-900">Notificaciones</span>
        <span class="rounded bg-rose-100 px-1.5 py-0.5 text-[11px] font-bold text-rose-700">3 NUEVAS</span>
      </div>
      <div class="flex items-center gap-1">
        <button type="button" class="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-900">Todas</button>
        <button type="button" class="rounded px-2 py-0.5 text-[11px] text-slate-500">No leídas</button>
      </div>
    </div>
    <div class="space-y-1.5">
      <button type="button" role="menuitem" class="flex w-full items-start gap-2.5 rounded-lg border border-rose-200 bg-rose-50 p-2 text-left">
        <span class="material-symbols-outlined mt-0.5 shrink-0 text-[18px] text-rose-600">error</span>
        <span class="flex-1 space-y-0.5">
          <span class="flex items-center justify-between gap-2">
            <span class="text-sm font-semibold text-rose-600">Fallo de Pipeline #4901</span>
            <span class="font-mono text-xs text-slate-500">2m atrás</span>
          </span>
          <span class="block text-xs text-slate-500">Cluster eu-west-1 reportó OOMKilled en pod auth-svc.</span>
        </span>
      </button>
      <button type="button" role="menuitem" class="flex w-full items-start gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-2 text-left">
        <span class="material-symbols-outlined mt-0.5 shrink-0 text-[18px] text-teal-600">check_circle</span>
        <span class="flex-1 space-y-0.5">
          <span class="flex items-center justify-between gap-2">
            <span class="text-sm font-semibold text-slate-900">Despliegue a Staging OK</span>
            <span class="font-mono text-xs text-slate-500">14m atrás</span>
          </span>
          <span class="block text-xs text-slate-500">Release v2.4.0-rc3 promovido por @marta_dev.</span>
        </span>
      </button>
      <button type="button" role="menuitem" class="flex w-full items-start gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-2 text-left">
        <span class="material-symbols-outlined mt-0.5 shrink-0 text-[18px] text-amber-600">warning</span>
        <span class="flex-1 space-y-0.5">
          <span class="flex items-center justify-between gap-2">
            <span class="text-sm font-semibold text-slate-900">Llave API por expirar</span>
            <span class="font-mono text-xs text-slate-500">1h atrás</span>
          </span>
          <span class="block text-xs text-slate-500">Token CI/CD GitHub expira en 48 horas hábiles.</span>
        </span>
      </button>
    </div>
    <div class="flex items-center justify-between border-t border-slate-200 pt-2">
      <button type="button" class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Marcar todo como leído</button>
      <button type="button" class="text-[11px] font-bold uppercase tracking-wide text-blue-600">Centro de Auditoría →</button>
    </div>
  </div>
</div>
`;

export const NOTIFICATIONS_FLYOUT_TSX = `
import { useEffect, useRef, useState } from 'react';

const NOTIFICATIONS = [
  {
    id: 'pipeline',
    label: 'Fallo de Pipeline #4901 (2m atrás)',
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
    label: 'Despliegue a Staging OK (14m atrás)',
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
    label: 'Llave API por expirar (1h atrás)',
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

export const NotificationsFlyout = () => {
  const [open, setOpen] = useState(true);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current !== null && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const handleAction = (label: string) => {
    window.alert(\`Presionaste: \${label}\`);
    setOpen(false);
  };

  const items = filter === 'all' ? NOTIFICATIONS : NOTIFICATIONS.filter((item) => item.unread);

  return (
    <div ref={rootRef} className="relative w-full">
      <div className="mb-4 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-2">
        <span className="text-sm text-slate-500">Barra de Herramientas Global</span>
        <div className="relative">
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
              notifications
            </span>
          </button>
          <span aria-hidden="true" className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white ring-2 ring-white">
            3
          </span>
        </div>
      </div>
      {open && (
        <div
          role="menu"
          aria-label="Notificaciones"
          className="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-2.5 rounded-xl border border-slate-200 bg-white p-3 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]"
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
                className={filter === 'all' ? 'rounded bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-900' : 'rounded px-2 py-0.5 text-[11px] text-slate-500'}
              >
                Todas
              </button>
              <button
                type="button"
                onClick={() => setFilter('unread')}
                className={filter === 'unread' ? 'rounded bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-900' : 'rounded px-2 py-0.5 text-[11px] text-slate-500'}
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
                onClick={() => handleAction(item.label)}
                className={\`flex w-full items-start gap-2.5 rounded-lg border p-2 text-left hover:bg-slate-100 \${item.containerClass}\`}
              >
                <span aria-hidden="true" className={\`material-symbols-outlined mt-0.5 shrink-0 text-[18px] \${item.iconClass}\`}>
                  {item.icon}
                </span>
                <span className="flex-1 space-y-0.5">
                  <span className="flex items-center justify-between gap-2">
                    <span className={\`text-sm font-semibold \${item.titleClass}\`}>{item.title}</span>
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
              onClick={() => handleAction('Marcar todo como leído')}
              className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 hover:text-blue-600"
            >
              Marcar todo como leído
            </button>
            <button
              type="button"
              onClick={() => handleAction('Centro de Auditoría')}
              className="text-[11px] font-bold uppercase tracking-wide text-blue-600 hover:underline"
            >
              Centro de Auditoría →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
`;
