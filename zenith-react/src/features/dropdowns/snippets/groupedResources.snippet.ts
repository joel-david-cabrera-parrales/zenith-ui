export const GROUPED_RESOURCES_HTML = `
<div class="relative w-full">
  <button
    type="button"
    aria-haspopup="menu"
    aria-expanded="true"
    class="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
  >
    <span class="flex items-center gap-2">
      <span class="material-symbols-outlined text-[18px] text-blue-600">category</span>
      Seleccionar Recurso Global
    </span>
    <span class="material-symbols-outlined text-[16px] text-slate-500">expand_more</span>
  </button>
  <div role="menu" aria-label="Catálogo de herramientas" class="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-3 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
    <div>
      <div class="flex items-center justify-between px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
        <span>Entornos cloud // Infra</span>
        <span class="rounded bg-slate-100 px-1 text-[9px]">AWS & GCP</span>
      </div>
      <div class="mt-1 space-y-0.5">
        <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[16px] text-blue-600">cloud_queue</span>
            Kubernetes Clusters EKS
          </span>
          <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
        </button>
        <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[16px] text-slate-500">database</span>
            PostgreSQL Aurora RDS
          </span>
          <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
        </button>
      </div>
    </div>
    <div class="border-t border-slate-200"></div>
    <div>
      <div class="flex items-center justify-between px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
        <span>Herramientas locales // Dev</span>
        <span class="rounded bg-slate-100 px-1 text-[9px]">CLI & Runtimes</span>
      </div>
      <div class="mt-1 space-y-0.5">
        <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[16px] text-slate-500">terminal</span>
            Zenith CLI v2.4 (Daemon)
          </span>
          <span class="font-mono text-[10px] text-slate-500">Active</span>
        </button>
        <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
          <span class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[16px] text-slate-500">lan</span>
            Proxy WireGuard Localhost
          </span>
          <span class="font-mono text-[10px] text-slate-500">:8080</span>
        </button>
      </div>
    </div>
  </div>
</div>
`;

export const GROUPED_RESOURCES_TSX = `
import { useState } from 'react';

const GROUPS = [
  {
    title: 'Entornos cloud // Infra',
    badge: 'AWS & GCP',
    items: [
      { id: 'eks', label: 'Kubernetes Clusters EKS', icon: 'cloud_queue', meta: '', online: true },
      { id: 'rds', label: 'PostgreSQL Aurora RDS', icon: 'database', meta: '', online: true },
    ],
  },
  {
    title: 'Herramientas locales // Dev',
    badge: 'CLI & Runtimes',
    items: [
      { id: 'cli', label: 'Zenith CLI v2.4 (Daemon)', icon: 'terminal', meta: 'Active', online: false },
      { id: 'proxy', label: 'Proxy WireGuard Localhost', icon: 'lan', meta: ':8080', online: false },
    ],
  },
];

export const GroupedResourcesMenu = () => {
  const [open, setOpen] = useState(true);

  const handleAction = (label: string) => {
    window.alert(\`Presionaste: \${label}\`);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
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
      {open && (
        <div
          role="menu"
          aria-label="Catálogo de herramientas"
          className="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-3 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]"
        >
          {GROUPS.map((group, groupIndex) => (
            <div key={group.title}>
              {groupIndex > 0 && <div className="mb-3 border-t border-slate-200" />}
              <div className="flex items-center justify-between px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <span>{group.title}</span>
                <span className="rounded bg-slate-100 px-1 text-[9px]">{group.badge}</span>
              </div>
              <div className="mt-1 space-y-0.5">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="menuitem"
                    onClick={() => handleAction(item.label)}
                    className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                  >
                    <span className="flex items-center gap-2">
                      <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
                        {item.icon}
                      </span>
                      {item.label}
                    </span>
                    {item.online ? (
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
`;
