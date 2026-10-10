import { useId, useState } from 'react';

interface Member {
  id: string;
  name: string;
  email: string;
  initials: string;
  color: string;
  active: boolean;
  twoFa: boolean;
  lastSeen: string;
}

const INITIAL: Member[] = [
  { id: 'm1', name: 'Carla Torres', email: 'c.torres@zenith.dev', initials: 'CT', color: 'bg-blue-600', active: true, twoFa: true, lastSeen: 'hace 5 min' },
  { id: 'm2', name: 'Mario Santos', email: 'm.santos@zenith.dev', initials: 'MS', color: 'bg-slate-700', active: true, twoFa: true, lastSeen: 'hace 1 h' },
  { id: 'm3', name: 'Aiko Novak', email: 'a.novak@zenith.dev', initials: 'AN', color: 'bg-emerald-600', active: true, twoFa: false, lastSeen: 'hace 3 h' },
  { id: 'm4', name: 'Jon Weiss', email: 'j.weiss@zenith.dev', initials: 'JW', color: 'bg-amber-600', active: false, twoFa: true, lastSeen: 'hace 6 días' },
  { id: 'm5', name: 'Lucía Prats', email: 'l.prats@zenith.dev', initials: 'LP', color: 'bg-rose-600', active: true, twoFa: true, lastSeen: 'ayer' },
];

const ROLES = ['Admin', 'Editor', 'Viewer', 'Billing'] as const;

export function TeamMembersTable() {
  const searchId = useId();
  const [query, setQuery] = useState('');
  const [roles, setRoles] = useState<Record<string, string>>({
    m1: 'Admin',
    m2: 'Editor',
    m3: 'Editor',
    m4: 'Viewer',
    m5: 'Billing',
  });
  const [members, setMembers] = useState(INITIAL);

  const filtered = members.filter(
    (m) =>
      query.trim() === '' ||
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.email.toLowerCase().includes(query.toLowerCase()),
  );

  const toggleActive = (id: string) => {
    setMembers((ms) => ms.map((m) => (m.id === id ? { ...m, active: !m.active } : m)));
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900">EQUIPO // MIEMBROS Y ACCESOS</h3>
          <p className="font-mono text-xs text-slate-500">{filtered.length} miembros · roles editables en línea</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-56">
            <span aria-hidden="true" className="material-symbols-outlined absolute top-2 left-2.5 text-base text-slate-400">
              search
            </span>
            <input
              id={searchId}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar miembro..."
              type="search"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-1.5 pr-3 pl-8 text-sm outline-none placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <button type="button" className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700">
            <span aria-hidden="true" className="material-symbols-outlined text-base">add</span>
            Invitar miembro
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 font-mono text-[11px] tracking-wider text-slate-500 uppercase">
              <th className="px-4 py-3 font-semibold sm:pl-5">Usuario</th>
              <th className="px-4 py-3 font-semibold">Rol</th>
              <th className="px-4 py-3 font-semibold">Estado</th>
              <th className="hidden px-4 py-3 font-semibold md:table-cell">2FA</th>
              <th className="hidden px-4 py-3 font-semibold lg:table-cell">Actividad</th>
              <th className="px-4 py-3 text-right font-semibold sm:pr-5">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filtered.map((m) => (
              <tr key={m.id} className="transition-colors hover:bg-slate-50">
                <td className="px-4 py-3 sm:pl-5">
                  <div className="flex items-center gap-2.5">
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${m.color}`}>
                      {m.initials}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-slate-900">{m.name}</p>
                      <p className="truncate font-mono text-[11px] text-slate-500">{m.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <select
                    value={roles[m.id]}
                    onChange={(e) => setRoles((r) => ({ ...r, [m.id]: e.target.value }))}
                    aria-label={`Rol de ${m.name}`}
                    className="rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs text-slate-900 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  >
                    {ROLES.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => toggleActive(m.id)}
                    aria-pressed={m.active}
                    title={m.active ? 'Desactivar' : 'Activar'}
                    className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${m.active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-500'}`}
                  >
                    <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${m.active ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                    {m.active ? 'Activo' : 'Inactivo'}
                  </button>
                </td>
                <td className="hidden px-4 py-3 md:table-cell">
                  {m.twoFa ? (
                    <span className="inline-flex items-center gap-1 rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-blue-700">
                      <span aria-hidden="true" className="material-symbols-outlined text-xs">lock</span>
                      2FA ON
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded bg-amber-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-amber-800">
                      <span aria-hidden="true" className="material-symbols-outlined text-xs">lock_open</span>
                      2FA OFF
                    </span>
                  )}
                </td>
                <td className="hidden px-4 py-3 font-mono text-xs text-slate-500 lg:table-cell">{m.lastSeen}</td>
                <td className="px-4 py-3 text-right sm:pr-5">
                  <div className="inline-flex items-center gap-1">
                    <button type="button" title="Editar" className="rounded-lg border border-slate-200 p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                      <span aria-hidden="true" className="material-symbols-outlined text-base">edit</span>
                    </button>
                    <button type="button" title="Eliminar" className="rounded-lg border border-slate-200 p-1.5 text-slate-500 hover:bg-rose-50 hover:text-rose-700">
                      <span aria-hidden="true" className="material-symbols-outlined text-base">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-sm text-slate-500">
                  Sin miembros para “{query}”.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
