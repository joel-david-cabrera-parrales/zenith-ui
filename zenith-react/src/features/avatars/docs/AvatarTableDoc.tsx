import { ComponentDoc } from '../../../shared/components/doc';
import { Avatar, AvatarGroup, PresenceAvatar } from '../components';
import { AVATAR_TABLE_HTML, AVATAR_TABLE_TSX } from '../snippets';

export const AvatarTableDoc = () => {
  return (
    <ComponentDoc
      title="Aplicación en dashboards & tablas de alta densidad"
      description="Integración de tokens de avatar en filas de tabla SaaS con presencia, equipos, revisores y telemetría. Responsive con scroll horizontal y columnas progresivas."
      preview={
        <div className="w-full overflow-x-auto rounded-lg border border-slate-200 bg-white">
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
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="relative inline-flex shrink-0">
                      <Avatar size="sm" initials="EV" alt="Avatar de Elena Vasquez" />
                      <span role="status" aria-label="En línea" className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                    </span>
                    <div>
                      <span className="block text-sm font-semibold text-slate-900">Elena Vasquez</span>
                      <span className="font-mono text-[10px] text-slate-400">elena.v@zenithdash.internal</span>
                    </div>
                  </div>
                </td>
                <td className="hidden px-4 py-3 md:table-cell">
                  <AvatarGroup
                    size="xs"
                    members={[{ initials: 'JD' }, { initials: 'AR' }, { initials: 'SC' }]}
                    max={2}
                  />
                </td>
                <td className="hidden px-4 py-3 lg:table-cell">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm" shape="soft" initials="SG" alt="Avatar de SecOps Team Lead" />
                    <div>
                      <span className="block text-xs font-medium text-slate-900">SecOps Team Lead</span>
                      <span className="font-mono text-[10px] text-emerald-700">Aprobado</span>
                    </div>
                  </div>
                </td>
                <td className="hidden px-4 py-3 xl:table-cell">
                  <span className="inline-flex items-center gap-1.5 rounded bg-slate-100 px-2 py-1 text-xs text-slate-900">
                    <span aria-hidden="true" className="material-symbols-outlined text-[14px] text-blue-600">
                      smart_toy
                    </span>
                    gh-runner-04
                    <span className="rounded bg-emerald-100 px-1 font-mono text-[9px] text-emerald-700">VERIFIED</span>
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="font-mono text-[11px] font-semibold text-emerald-700">200 OK // 4.2ms</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="relative inline-flex shrink-0">
                      <Avatar size="sm" initials="KL" alt="Avatar de Klaus Lindemann" className="bg-blue-600 text-white" />
                      <span role="status" aria-label="Bloqueado" className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-white" />
                    </span>
                    <div>
                      <span className="block text-sm font-semibold text-slate-900">Klaus Lindemann</span>
                      <span className="font-mono text-[10px] font-medium text-red-600">klaus.l [IAM_LOCKED]</span>
                    </div>
                  </div>
                </td>
                <td className="hidden px-4 py-3 md:table-cell">
                  <AvatarGroup size="xs" members={[{ initials: 'NP' }, { initials: 'QR' }]} />
                </td>
                <td className="hidden px-4 py-3 lg:table-cell">
                  <div className="flex items-center gap-2">
                    <span role="img" aria-label="SOC Tier 3" className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-red-100 text-xs font-bold text-red-700 ring-1 ring-red-600">
                      !
                    </span>
                    <div>
                      <span className="block text-xs font-medium text-red-700">SOC Tier 3</span>
                      <span className="font-mono text-[10px] text-red-600">Bloqueado</span>
                    </div>
                  </div>
                </td>
                <td className="hidden px-4 py-3 xl:table-cell">
                  <span className="inline-flex items-center gap-1.5 rounded bg-red-100/50 px-2 py-1 text-xs text-red-700">
                    <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
                      lock
                    </span>
                    vault-guard-auth
                    <span className="rounded bg-red-100 px-1 font-mono text-[9px]">REVOKED</span>
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="font-mono text-[11px] font-semibold text-red-600">403 FORBIDDEN</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <PresenceAvatar status="away" initials="MS" alt="Avatar de Marcus Sterling" />
                    <div>
                      <span className="block text-sm font-semibold text-slate-900">Marcus Sterling</span>
                      <span className="font-mono text-[10px] text-slate-400">m.sterling@zenithdash.internal</span>
                    </div>
                  </div>
                </td>
                <td className="hidden px-4 py-3 md:table-cell">
                  <AvatarGroup
                    size="xs"
                    members={[{ initials: 'TR' }, { initials: 'JM' }, { initials: 'BOT', icon: 'smart_toy' }]}
                  />
                </td>
                <td className="hidden px-4 py-3 lg:table-cell">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm" shape="soft" initials="CG" alt="Avatar de Compliance Guard" />
                    <div>
                      <span className="block text-xs font-medium text-slate-900">Compliance Guard</span>
                      <span className="font-mono text-[10px] text-slate-500">Pendiente</span>
                    </div>
                  </div>
                </td>
                <td className="hidden px-4 py-3 xl:table-cell">
                  <span className="inline-flex items-center gap-1.5 rounded bg-slate-100 px-2 py-1 text-xs text-slate-900">
                    <span aria-hidden="true" className="material-symbols-outlined text-[14px] text-blue-600">
                      terminal
                    </span>
                    iam-sync-job
                    <span className="rounded bg-blue-100 px-1 font-mono text-[9px] text-blue-700">CRON</span>
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className="font-mono text-[11px] text-slate-500">QUEUED // 0.0ms</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      }
      htmlCode={AVATAR_TABLE_HTML}
      jsxCode={AVATAR_TABLE_TSX}
    />
  );
};
