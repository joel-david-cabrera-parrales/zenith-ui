export const AVATAR_TABLE_HTML = `
<div class="overflow-x-auto rounded-lg border border-slate-200">
  <table class="w-full min-w-[720px] border-collapse text-left">
    <thead>
      <tr class="border-b border-slate-200 bg-slate-50 text-xs text-slate-500">
        <th class="px-4 py-2.5 font-mono text-[10px] font-semibold">IDENTIDAD PRINCIPAL</th>
        <th class="hidden px-4 py-2.5 font-mono text-[10px] font-semibold md:table-cell">EQUIPO ASIGNADO</th>
        <th class="hidden px-4 py-2.5 font-mono text-[10px] font-semibold lg:table-cell">REVISOR AUDITOR</th>
        <th class="hidden px-4 py-2.5 font-mono text-[10px] font-semibold xl:table-cell">AUTOR DEL EVENTO</th>
        <th class="px-4 py-2.5 text-right font-mono text-[10px] font-semibold">TELEMETRÍA</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200 text-sm">
      <tr class="hover:bg-slate-50">
        <td class="px-4 py-3">
          <div class="flex items-center gap-3">
            <span class="relative inline-flex shrink-0">
              <span class="inline-flex cursor-pointer h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 ring-1 ring-slate-200">EV</span>
              <span class="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" role="status" aria-label="En línea"></span>
            </span>
            <div>
              <span class="block text-sm font-semibold text-slate-900">Elena Vasquez</span>
              <span class="font-mono text-[10px] text-slate-400">elena.v@zenithdash.internal</span>
            </div>
          </div>
        </td>
        <td class="hidden px-4 py-3 md:table-cell">
          <div class="flex items-center -space-x-1.5">
            <span class="inline-flex cursor-pointer h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[9px] font-bold text-blue-800 ring-2 ring-white">JD</span>
            <span class="inline-flex cursor-pointer h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[9px] font-bold text-blue-800 ring-2 ring-white">AR</span>
            <span class="inline-flex cursor-pointer h-6 w-6 items-center justify-center rounded-full bg-slate-100 font-mono text-[10px] font-bold text-blue-700 ring-2 ring-white">+3</span>
          </div>
        </td>
        <td class="hidden px-4 py-3 lg:table-cell">
          <div class="flex items-center gap-2">
            <span class="inline-flex cursor-pointer h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-[10px] font-bold text-blue-800 ring-1 ring-blue-600/20">SG</span>
            <div>
              <span class="block text-xs font-medium text-slate-900">SecOps Team Lead</span>
              <span class="font-mono text-[10px] text-emerald-700">Aprobado</span>
            </div>
          </div>
        </td>
        <td class="hidden px-4 py-3 xl:table-cell">
          <span class="inline-flex items-center gap-1.5 rounded bg-slate-100 px-2 py-1 text-xs text-slate-900">gh-runner-04
            <span class="rounded bg-emerald-100 px-1 font-mono text-[9px] text-emerald-700">VERIFIED</span>
          </span>
        </td>
        <td class="px-4 py-3 text-right"><span class="font-mono text-[11px] font-semibold text-emerald-700">200 OK // 4.2ms</span></td>
      </tr>
      <tr class="hover:bg-slate-50">
        <td class="px-4 py-3">
          <div class="flex items-center gap-3">
            <span class="relative inline-flex shrink-0">
              <span class="inline-flex cursor-pointer h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">KL</span>
              <span class="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-white" role="status" aria-label="Bloqueado"></span>
            </span>
            <div>
              <span class="block text-sm font-semibold text-slate-900">Klaus Lindemann</span>
              <span class="font-mono text-[10px] font-medium text-red-600">klaus.l [IAM_LOCKED]</span>
            </div>
          </div>
        </td>
        <td class="hidden px-4 py-3 md:table-cell">
          <div class="flex items-center -space-x-1.5">
            <span class="inline-flex cursor-pointer h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[9px] font-bold text-blue-800 ring-2 ring-white">NP</span>
            <span class="inline-flex cursor-pointer h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[9px] font-bold text-blue-800 ring-2 ring-white">QR</span>
          </div>
        </td>
        <td class="hidden px-4 py-3 lg:table-cell">
          <div class="flex items-center gap-2">
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-red-100 text-xs font-bold text-red-700 ring-1 ring-red-600">!</span>
            <div>
              <span class="block text-xs font-medium text-red-700">SOC Tier 3</span>
              <span class="font-mono text-[10px] text-red-600">Bloqueado</span>
            </div>
          </div>
        </td>
        <td class="hidden px-4 py-3 xl:table-cell">
          <span class="inline-flex items-center gap-1.5 rounded bg-red-100/50 px-2 py-1 text-xs text-red-700">vault-guard-auth
            <span class="rounded bg-red-100 px-1 font-mono text-[9px]">REVOKED</span>
          </span>
        </td>
        <td class="px-4 py-3 text-right"><span class="font-mono text-[11px] font-semibold text-red-600">403 FORBIDDEN</span></td>
      </tr>
    </tbody>
  </table>
</div>
`;

export const AVATAR_TABLE_TSX = `
export const AvatarTable = () => {
  const rows = [
    {
      name: 'Elena Vasquez',
      email: 'elena.v@zenithdash.internal',
      initials: 'EV',
      team: ['JD', 'AR'],
      extra: 3,
      reviewer: 'SecOps Team Lead',
      reviewState: 'Aprobado',
      bot: 'gh-runner-04',
      chip: 'VERIFIED',
      telemetry: '200 OK // 4.2ms',
      locked: false,
    },
    {
      name: 'Klaus Lindemann',
      email: 'klaus.l [IAM_LOCKED]',
      initials: 'KL',
      team: ['NP', 'QR'],
      extra: 0,
      reviewer: 'SOC Tier 3',
      reviewState: 'Bloqueado',
      bot: 'vault-guard-auth',
      chip: 'REVOKED',
      telemetry: '403 FORBIDDEN',
      locked: true,
    },
  ];
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-xs text-slate-500">
            <th className="px-4 py-2.5 font-mono text-[10px] font-semibold">IDENTIDAD PRINCIPAL</th>
            <th className="hidden px-4 py-2.5 font-mono text-[10px] font-semibold md:table-cell">EQUIPO ASIGNADO</th>
            <th className="hidden px-4 py-2.5 font-mono text-[10px] font-semibold lg:table-cell">REVISOR AUDITOR</th>
            <th className="hidden px-4 py-2.5 font-mono text-[10px] font-semibold xl:table-cell">AUTOR DEL EVENTO</th>
            <th className="px-4 py-2.5 text-right font-mono text-[10px] font-semibold">TELEMETRÍA</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 text-sm">
          {rows.map((row) => (
            <tr key={row.email} className="hover:bg-slate-50">
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="relative inline-flex shrink-0">
                    <span role="img" aria-label={'Avatar de ' + row.name} className="inline-flex cursor-pointer h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 ring-1 ring-slate-200">
                      {row.initials}
                    </span>
                    <span role="status" aria-label={row.locked ? 'Bloqueado' : 'En línea'} className={'absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-white ' + (row.locked ? 'bg-red-600' : 'bg-emerald-500')} />
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-slate-900">{row.name}</span>
                    <span className="font-mono text-[10px] text-slate-400">{row.email}</span>
                  </div>
                </div>
              </td>
              <td className="hidden px-4 py-3 md:table-cell">
                <div className="flex items-center -space-x-1.5">
                  {row.team.map((initials) => (
                    <span key={initials} className="inline-flex cursor-pointer h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-[9px] font-bold text-blue-800 ring-2 ring-white">
                      {initials}
                    </span>
                  ))}
                  {row.extra > 0 && (
                    <span className="inline-flex cursor-pointer h-6 w-6 items-center justify-center rounded-full bg-slate-100 font-mono text-[10px] font-bold text-blue-700 ring-2 ring-white">
                      +{row.extra}
                    </span>
                  )}
                </div>
              </td>
              <td className="hidden px-4 py-3 lg:table-cell">
                <span className="block text-xs font-medium text-slate-900">{row.reviewer}</span>
                <span className="font-mono text-[10px] text-slate-500">{row.reviewState}</span>
              </td>
              <td className="hidden px-4 py-3 xl:table-cell">
                <span className="inline-flex items-center gap-1.5 rounded bg-slate-100 px-2 py-1 text-xs text-slate-900">
                  {row.bot}
                  <span className="rounded bg-slate-200 px-1 font-mono text-[9px]">{row.chip}</span>
                </span>
              </td>
              <td className="px-4 py-3 text-right">
                <span className="font-mono text-[11px] font-semibold text-slate-600">{row.telemetry}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
`;
