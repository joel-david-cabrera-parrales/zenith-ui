export const COMPACT_PILLS_HTML = `
<div class="space-y-3">
  <div class="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-2.5">
    <div class="flex items-center gap-2">
      <span class="font-mono text-[11px] font-semibold text-slate-900">SESSION_ID_#8942</span>
      <span class="text-slate-200">|</span>
      <span class="text-xs text-slate-500">Admin IAM Role</span>
    </div>
    <div role="timer" aria-live="off" aria-label="760 segundos restantes de sesión" class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100/60 px-2.5 py-1 font-mono text-[11px] text-slate-900">
      <span class="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
      <span class="font-semibold text-blue-600">12m 40s</span>
      <span class="text-slate-500">rest.</span>
    </div>
  </div>
  <div class="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-2.5">
    <div class="flex items-center gap-2">
      <span class="font-mono text-[11px] font-semibold text-slate-900">TASK_QUEUE_SYNC</span>
      <span class="text-slate-200">|</span>
      <span class="text-xs text-slate-500">Redis Worker Cluster</span>
    </div>
    <div role="timer" aria-live="off" aria-label="252 segundos para timeout" class="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] text-amber-600">
      <span class="material-symbols-outlined text-[14px]">timer</span>
      <span class="font-bold">04:12</span>
      <span>timeout</span>
    </div>
  </div>
</div>
`;

export const COMPACT_PILLS_TSX = `
import { useEffect, useState } from 'react';

const useTicker = (initial: number): number => {
  const [total, setTotal] = useState(initial);
  const done = total <= 0;
  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done]);
  return total;
};

export const CompactPillsCountdown = () => {
  const session = useTicker(760);
  const timeout = useTicker(252);
  const sessionText = Math.floor(session / 60) + 'm ' + String(session % 60).padStart(2, '0') + 's';
  const timeoutText =
    String(Math.floor(timeout / 60)).padStart(2, '0') + ':' + String(timeout % 60).padStart(2, '0');

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-2.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-semibold text-slate-900">SESSION_ID_#8942</span>
          <span className="text-slate-200">|</span>
          <span className="text-xs text-slate-500">Admin IAM Role</span>
        </div>
        <div
          role="timer"
          aria-live="off"
          aria-label={session + ' segundos restantes de sesión'}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100/60 px-2.5 py-1 font-mono text-[11px] text-slate-900"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 animate-ping rounded-full bg-blue-600" />
          <span className="font-semibold tabular-nums text-blue-600">{sessionText}</span>
          <span className="text-slate-500">rest.</span>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-2.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-semibold text-slate-900">TASK_QUEUE_SYNC</span>
          <span className="text-slate-200">|</span>
          <span className="text-xs text-slate-500">Redis Worker Cluster</span>
        </div>
        <div
          role="timer"
          aria-live="off"
          aria-label={timeout + ' segundos para timeout'}
          className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] text-amber-600"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
            timer
          </span>
          <span className="font-bold tabular-nums">{timeoutText}</span>
          <span>timeout</span>
        </div>
      </div>
    </div>
  );
};
`;
