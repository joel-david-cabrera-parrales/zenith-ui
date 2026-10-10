import type { HTMLAttributes } from 'react';

export interface MemberCardProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  role?: string;
  initials?: string;
  online?: boolean;
  excerpt?: string;
  meta?: string;
  action?: string;
}

export function MemberCard({
  name = 'Marcus Reed',
  role = 'SecOps Lead // Identity',
  initials = 'MR',
  online = true,
  excerpt = 'Admin permissions across 4 cluster environments and KMS vault rotation routines.',
  meta = '2FA ENABLED',
  action = 'Manage Role',
  className = '',
  ...rest
}: MemberCardProps) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              aria-hidden="true"
              className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm flex items-center justify-center border border-blue-200"
            >
              {initials}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">{name}</h3>
              <span className="font-mono text-[9px] text-slate-500 block">
                {role}
              </span>
            </div>
          </div>
          <span
            title={online ? 'En línea' : 'Desconectado'}
            className={`w-2 h-2 rounded-full ${online ? 'bg-emerald-600' : 'bg-slate-300'}`}
          />
        </div>
        <p className="text-xs text-slate-500 mb-4">{excerpt}</p>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
        <span className="font-mono text-[9px] text-slate-500">{meta}</span>
        <button
          type="button"
          className="px-3 py-1 rounded bg-slate-50 hover:bg-slate-200 text-slate-900 text-sm font-semibold border border-slate-200 transition-colors"
        >
          {action}
        </button>
      </div>
    </div>
  );
}
