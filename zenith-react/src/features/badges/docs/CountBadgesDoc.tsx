import { ComponentDoc } from '../../../shared/components/doc';
import { CountBadge } from '../components';
import { COUNT_BADGES_HTML, COUNT_BADGES_TSX } from '../snippets';

export const CountBadgesDoc = () => {
  return (
    <ComponentDoc
      title="Badges con contadores y métricas"
      description="Badges ricos de SEC_03 con micro-chip numérico integrado (alertas, PRs, versión de build y tier). Uno al lado del otro, sin tabla."
      preview={
        <div className="flex flex-wrap items-center gap-2">
          <CountBadge
            label="Alertas"
            className="bg-red-100 text-red-700"
            detail={
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-600 font-mono text-[10px] font-bold text-white">
                14
              </span>
            }
          />
          <CountBadge
            label="PRs Mergeados"
            className="border border-slate-200 bg-slate-100 text-slate-700"
            detail={
              <span className="rounded-full bg-blue-600 px-1.5 font-mono text-[10px] font-bold text-white">
                #402
              </span>
            }
          />
          <CountBadge
            label="Build"
            className="border border-slate-200 bg-slate-50 text-slate-600"
            detail={<span className="font-mono text-[10px] font-semibold text-blue-700">v2.4.1</span>}
          />
          <CountBadge
            label="Tier"
            className="bg-slate-900 font-semibold text-white"
            detail={
              <span className="rounded bg-emerald-600 px-1.5 py-0.5 text-[9px] uppercase tracking-wide text-white">
                PRO
              </span>
            }
          />
        </div>
      }
      htmlCode={COUNT_BADGES_HTML}
      jsxCode={COUNT_BADGES_TSX}
    />
  );
};
