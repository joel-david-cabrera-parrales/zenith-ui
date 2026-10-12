export const ACCOUNT_SWITCHER_HTML = `
<div class="relative w-full">
  <button
    type="button"
    aria-haspopup="menu"
    aria-expanded="true"
    class="flex w-full items-center justify-between rounded-xl border border-slate-300 bg-white p-2 hover:bg-slate-50 transition-colors"
  >
    <span class="flex items-center gap-3">
      <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">AD</span>
      <span class="text-left">
        <span class="block text-sm font-semibold text-slate-900">Alex Dormann</span>
        <span class="block font-mono text-xs text-slate-500">alex@zenithdash.io</span>
      </span>
    </span>
    <span class="material-symbols-outlined text-[18px] text-slate-500">unfold_more</span>
  </button>
  <div role="menu" aria-label="Menú de cuenta y jerarquía" class="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-3 rounded-xl border border-slate-200 bg-white p-3 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]">
    <div class="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
      <div class="mb-1.5 flex items-center justify-between">
        <span class="text-[11px] font-bold uppercase tracking-wide text-slate-900">Organización Principal</span>
        <span class="rounded bg-blue-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Org Admin</span>
      </div>
      <div class="mb-2 text-xs text-slate-500">Zenith Cloud Architecture Inc.</div>
      <div class="space-y-1">
        <div class="flex justify-between text-[11px] text-slate-500">
          <span>Cuota de Computo (vCPU)</span>
          <span class="font-bold text-slate-900">78% (78/100)</span>
        </div>
        <div class="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
          <div class="h-full rounded-full bg-blue-600" style="width: 78%"></div>
        </div>
      </div>
    </div>
    <div class="space-y-1">
      <div class="px-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">Cambiar espacio de trabajo</div>
      <button type="button" role="menuitemradio" aria-checked="true" class="flex w-full items-center justify-between rounded-lg bg-blue-50 px-2.5 py-1.5 text-sm font-semibold text-blue-700">
        <span class="flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-blue-600"></span>
          Zenith Prod Infrastructure
        </span>
        <span class="material-symbols-outlined text-[16px] text-blue-600">done</span>
      </button>
      <button type="button" role="menuitemradio" aria-checked="false" class="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100">
        <span class="flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-slate-300"></span>
          Hyperion Labs R&D
        </span>
        <span class="font-mono text-xs text-slate-500">Member</span>
      </button>
    </div>
    <div class="space-y-0.5 border-t border-slate-200 pt-2">
      <button type="button" role="menuitem" class="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100">
        <span class="material-symbols-outlined text-[16px] text-slate-500">manage_accounts</span>
        Configuración de Perfil
      </button>
      <button type="button" role="menuitem" class="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100">
        <span class="material-symbols-outlined text-[16px] text-slate-500">shield</span>
        Seguridad y Llaves SSH
      </button>
      <button type="button" role="menuitem" class="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100">
        <span class="material-symbols-outlined text-[16px] text-slate-500">credit_card</span>
        Facturación y Licencias
      </button>
    </div>
    <div class="border-t border-slate-200 pt-2">
      <button type="button" role="menuitem" class="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-semibold text-rose-600 hover:bg-rose-50">
        <span class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[16px]">logout</span>
          Cerrar Sesión Global
        </span>
        <span class="font-mono text-xs">ESC</span>
      </button>
    </div>
  </div>
</div>
`;

export const ACCOUNT_SWITCHER_TSX = `
import { useEffect, useRef, useState } from 'react';

const WORKSPACES = [
  { id: 'workspace-zenith', name: 'Zenith Prod Infrastructure', role: 'Admin' },
  { id: 'workspace-hyperion', name: 'Hyperion Labs R&D', role: 'Member' },
];

const LINKS = [
  { id: 'profile', label: 'Configuración de Perfil', icon: 'manage_accounts' },
  { id: 'security', label: 'Seguridad y Llaves SSH', icon: 'shield' },
  { id: 'billing', label: 'Facturación y Licencias', icon: 'credit_card' },
];

export const AccountSwitcher = () => {
  const [open, setOpen] = useState(true);
  const [workspace, setWorkspace] = useState('workspace-zenith');
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

  const handleWorkspace = (id: string, label: string) => {
    setWorkspace(id);
    window.alert(\`Presionaste: \${label}\`);
  };

  const handleAction = (label: string) => {
    window.alert(\`Presionaste: \${label}\`);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative w-full">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-xl border border-slate-300 bg-white p-2 transition-colors hover:bg-slate-50"
      >
        <span className="flex items-center gap-3">
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            AD
          </span>
          <span className="text-left">
            <span className="block text-sm font-semibold text-slate-900">Alex Dormann</span>
            <span className="block font-mono text-xs text-slate-500">alex@zenithdash.io</span>
          </span>
        </span>
        <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-slate-500">
          unfold_more
        </span>
      </button>
      {open && (
        <div
          role="menu"
          aria-label="Menú de cuenta y jerarquía"
          className="absolute top-full right-0 left-0 z-50 mt-2 w-full space-y-3 rounded-xl border border-slate-200 bg-white p-3 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]"
        >
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wide text-slate-900">
                Organización Principal
              </span>
              <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Org Admin
              </span>
            </div>
            <div className="mb-2 text-xs text-slate-500">Zenith Cloud Architecture Inc.</div>
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>Cuota de Computo (vCPU)</span>
                <span className="font-bold text-slate-900">78% (78/100)</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-blue-600" style={{ width: '78%' }} />
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="px-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Cambiar espacio de trabajo
            </div>
            {WORKSPACES.map((item) => {
              const selected = workspace === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="menuitemradio"
                  aria-checked={selected}
                  onClick={() => handleWorkspace(item.id, item.name)}
                  className={
                    selected
                      ? 'flex w-full items-center justify-between rounded-lg bg-blue-50 px-2.5 py-1.5 text-sm font-semibold text-blue-700'
                      : 'flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100'
                  }
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden="true" className={selected ? 'h-2 w-2 rounded-full bg-blue-600' : 'h-2 w-2 rounded-full bg-slate-300'} />
                    {item.name}
                  </span>
                  {selected ? (
                    <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-blue-600">
                      done
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-slate-500">{item.role}</span>
                  )}
                </button>
              );
            })}
          </div>
          <div className="space-y-0.5 border-t border-slate-200 pt-2">
            {LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                role="menuitem"
                onClick={() => handleAction(link.label)}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
                  {link.icon}
                </span>
                {link.label}
              </button>
            ))}
          </div>
          <div className="border-t border-slate-200 pt-2">
            <button
              type="button"
              role="menuitem"
              onClick={() => handleAction('Cerrar Sesión Global (ESC)')}
              className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm font-semibold text-rose-600 hover:bg-rose-50"
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
                  logout
                </span>
                Cerrar Sesión Global
              </span>
              <span className="font-mono text-xs">ESC</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
`;
