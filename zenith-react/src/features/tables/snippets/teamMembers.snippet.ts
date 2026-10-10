export const TEAM_MEMBERS_HTML = `
<div class="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
  <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 border-b p-4">
    <div>
      <h3 class="text-sm font-bold">EQUIPO // MIEMBROS Y ACCESOS</h3>
      <p class="font-mono text-xs">5 miembros · roles editables</p>
    </div>
    <div class="flex flex-col sm:flex-row gap-2">
      <input
        placeholder="Buscar miembro..."
        class="w-full sm:w-56 rounded-lg border bg-slate-50 px-3 py-1.5 text-sm"
      /><button class="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">+ Invitar miembro</button>
    </div>
  </div>
  <div class="overflow-x-auto">
    <table class="w-full min-w-[680px] text-left text-sm">
      <thead>
        <tr class="border-b bg-slate-50 font-mono text-[11px] uppercase text-slate-500">
          <th class="px-4 py-3">Usuario</th>
          <th class="px-4 py-3">Rol</th>
          <th class="px-4 py-3">Estado</th>
          <th class="hidden md:table-cell px-4 py-3">2FA</th>
          <th class="hidden lg:table-cell px-4 py-3">Actividad</th>
          <th class="px-4 py-3 text-right">Acciones</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr class="hover:bg-slate-50">
          <td class="px-4 py-3">
            <p class="text-xs font-semibold">Carla Torres</p>
            <p class="font-mono text-[11px]">c.torres@zenith.dev</p>
          </td>
          <td class="px-4 py-3"><span class="rounded-lg border px-2 py-1 text-xs">Admin</span></td>
          <td class="px-4 py-3">
            <span class="rounded-full bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold uppercase"
              >Activo</span
            >
          </td>
          <td class="hidden md:table-cell px-4 py-3">
            <span class="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[10px] text-blue-700">2FA ON</span>
          </td>
          <td class="hidden lg:table-cell px-4 py-3 font-mono text-xs">hace 5 min</td>
          <td class="px-4 py-3 text-right">···</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`;

export const TEAM_MEMBERS_TSX = `
import { useState } from 'react';

const MEMBERS = [
  { id: 'm1', name: 'Carla Torres', email: 'c.torres@zenith.dev' },
  { id: 'm2', name: 'Mario Santos', email: 'm.santos@zenith.dev' },
  { id: 'm3', name: 'Aiko Novak', email: 'a.novak@zenith.dev' },
];

const ROLES = ['Admin', 'Editor', 'Viewer', 'Billing'];

export const TeamMembers = () => {
  const [query, setQuery] = useState('');
  const [roles, setRoles] = useState<Record<string, string>>({ m1: 'Admin', m2: 'Editor', m3: 'Editor' });
  const [active, setActive] = useState<Record<string, boolean>>({ m1: true, m2: true, m3: false });

  const filtered = MEMBERS.filter(
    m =>
      query.trim() === '' || m.name.toLowerCase().includes(query.toLowerCase()) || m.email.includes(query.toLowerCase())
  );

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 border-b p-4">
        <div>
          <h3 className="text-sm font-bold">EQUIPO // MIEMBROS Y ACCESOS</h3>
          <p className="font-mono text-xs">{filtered.length} miembros · roles editables</p>
        </div>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Buscar miembro..."
          className="w-full sm:w-56 rounded-lg border bg-slate-50 px-3 py-1.5 text-sm"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead>
            <tr className="border-b bg-slate-50 font-mono text-[11px] uppercase text-slate-500">
              <th className="px-4 py-3">Usuario</th>
              <th className="px-4 py-3">Rol</th>
              <th className="px-4 py-3">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map(m => (
              <tr key={m.id} className="hover:bg-slate-50">
                <td className="px-4 py-3">
                  <p className="text-xs font-semibold">{m.name}</p>
                  <p className="font-mono text-[11px]">{m.email}</p>
                </td>
                <td className="px-4 py-3">
                  <select
                    value={roles[m.id]}
                    onChange={e => setRoles(r => ({ ...r, [m.id]: e.target.value }))}
                    className="rounded-lg border px-2 py-1 text-xs"
                  >
                    {ROLES.map(r => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => setActive(a => ({ ...a, [m.id]: !(a[m.id] ?? false) }))}
                    className={
                      active[m.id] ?? false
                        ? 'rounded-full bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold uppercase'
                        : 'rounded-full bg-slate-200 px-2 py-0.5 font-mono text-[10px] font-bold uppercase'
                    }
                  >
                    {active[m.id] ?? false ? 'Activo' : 'Inactivo'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
`;
