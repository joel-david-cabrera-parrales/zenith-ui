const STATE_TONE_CSS = `
const toneOf = (total: number): string => {
  if (total <= 0) return 'expired';
  if (total < 60) return 'critical';
  if (total < 600) return 'warning';
  return 'normal';
};
`;

export const NORMAL_COUNTDOWN_HTML = `
<div class="rounded-xl border border-slate-200 bg-white p-5">
  <div class="flex items-center justify-between">
    <span class="flex items-center gap-1 font-mono text-[11px] font-bold text-emerald-700">
      <span class="h-2 w-2 rounded-full bg-emerald-600"></span>
      ESTADO_01: NORMAL
    </span>
    <span class="rounded bg-emerald-600/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-emerald-700">&gt; 60 MIN</span>
  </div>
  <div role="timer" aria-live="off" aria-label="02:45:18 restantes" class="mt-3 space-y-2 rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm">
    <div class="font-mono text-2xl font-bold tracking-tight text-slate-900">02:45:18</div>
    <div class="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-700">
      <span class="material-symbols-outlined text-[14px]">check_circle</span>
      <span>En rango nominal de operación</span>
    </div>
  </div>
  <div class="mt-2 border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">COLOR_TOKEN: #2563EB / #007E37</div>
</div>
`;

export const NORMAL_COUNTDOWN_TSX = `
import { useEffect, useState } from 'react';
${STATE_TONE_CSS}
export const NormalCountdown = () => {
  const [total, setTotal] = useState(2 * 3600 + 45 * 60 + 18);
  const done = total <= 0;

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done]);

  const tone = toneOf(total);
  const text =
    String(Math.floor(total / 3600)).padStart(2, '0') +
    ':' +
    String(Math.floor((total % 3600) / 60)).padStart(2, '0') +
    ':' +
    String(total % 60).padStart(2, '0');

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 font-mono text-[11px] font-bold text-emerald-700">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-600" />
          ESTADO_01: NORMAL
        </span>
        <span className="rounded bg-emerald-600/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-emerald-700">
          &gt; 60 MIN
        </span>
      </div>
      <div
        role="timer"
        aria-live="off"
        aria-label={text + ' restantes, estado ' + tone}
        className="mt-3 space-y-2 rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm"
      >
        <div className="font-mono text-2xl font-bold tabular-nums tracking-tight text-slate-900">{text}</div>
        <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-700">
          <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
            check_circle
          </span>
          <span>En rango nominal de operación</span>
        </div>
      </div>
      <div className="mt-2 border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">
        COLOR_TOKEN: #2563EB / #007E37
      </div>
    </div>
  );
};
`;

export const WARNING_COUNTDOWN_HTML = `
<div class="rounded-xl border border-amber-200 bg-amber-50/20 p-5">
  <div class="flex items-center justify-between">
    <span class="flex items-center gap-1 font-mono text-[11px] font-bold text-amber-600">
      <span class="h-2 w-2 rounded-full bg-amber-500"></span>
      ESTADO_02: WARNING
    </span>
    <span class="rounded bg-amber-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-amber-600">&lt; 10 MIN</span>
  </div>
  <div role="timer" aria-live="off" aria-label="00:08:42 restantes" class="mt-3 space-y-2 rounded-lg border border-amber-300 bg-white p-4 text-center shadow-sm">
    <div class="font-mono text-2xl font-bold tracking-tight text-amber-600">00:08:42</div>
    <div class="flex items-center justify-center gap-1 text-[11px] font-semibold text-amber-600">
      <span class="material-symbols-outlined text-[14px]">warning</span>
      <span>Guardado preventivo requerido</span>
    </div>
  </div>
  <div class="mt-2 border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">COLOR_TOKEN: #F59E0B / AMBER-500</div>
</div>
`;

export const WARNING_COUNTDOWN_TSX = `
import { useEffect, useState } from 'react';
${STATE_TONE_CSS}
export const WarningCountdown = () => {
  const [total, setTotal] = useState(8 * 60 + 42);
  const done = total <= 0;

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done]);

  const tone = toneOf(total);
  const text =
    String(Math.floor(total / 3600)).padStart(2, '0') +
    ':' +
    String(Math.floor((total % 3600) / 60)).padStart(2, '0') +
    ':' +
    String(total % 60).padStart(2, '0');

  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50/20 p-5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 font-mono text-[11px] font-bold text-amber-600">
          <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
          ESTADO_02: WARNING
        </span>
        <span className="rounded bg-amber-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-amber-600">
          &lt; 10 MIN
        </span>
      </div>
      <div
        role="timer"
        aria-live="off"
        aria-label={text + ' restantes, estado ' + tone}
        className="mt-3 space-y-2 rounded-lg border border-amber-300 bg-white p-4 text-center shadow-sm"
      >
        <div className="font-mono text-2xl font-bold tabular-nums tracking-tight text-amber-600">{text}</div>
        <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-amber-600">
          <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
            warning
          </span>
          <span>Guardado preventivo requerido</span>
        </div>
      </div>
      <div className="mt-2 border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">
        COLOR_TOKEN: #F59E0B / AMBER-500
      </div>
    </div>
  );
};
`;

export const CRITICAL_COUNTDOWN_HTML = `
<div class="rounded-xl border border-red-200 bg-red-50/25 p-5">
  <div class="flex items-center justify-between">
    <span class="flex items-center gap-1 font-mono text-[11px] font-bold text-red-600">
      <span class="h-2 w-2 rounded-full bg-red-600"></span>
      ESTADO_03: CRÍTICO
    </span>
    <span class="rounded bg-red-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-red-600">&lt; 60 SEG</span>
  </div>
  <div role="timer" aria-live="off" aria-label="00:00:38 restantes" class="mt-3 space-y-2 rounded-lg border border-red-300 bg-white p-4 text-center shadow-sm">
    <div class="font-mono text-2xl font-bold tracking-tight text-red-600">00:00:38</div>
    <div class="flex items-center justify-center gap-1 text-[11px] font-semibold text-red-600">
      <span class="material-symbols-outlined text-[14px]">error</span>
      <span>Acción requerida de inmediato</span>
    </div>
  </div>
  <div class="mt-2 border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">COLOR_TOKEN: #EF4444 / #BA1A1A</div>
</div>
`;

export const CRITICAL_COUNTDOWN_TSX = `
import { useEffect, useState } from 'react';
${STATE_TONE_CSS}
export const CriticalCountdown = () => {
  const [total, setTotal] = useState(38);
  const done = total <= 0;

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done]);

  const tone = toneOf(total);
  const text =
    String(Math.floor(total / 3600)).padStart(2, '0') +
    ':' +
    String(Math.floor((total % 3600) / 60)).padStart(2, '0') +
    ':' +
    String(total % 60).padStart(2, '0');

  return (
    <div className="rounded-xl border border-red-200 bg-red-50/25 p-5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 font-mono text-[11px] font-bold text-red-600">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-red-600" />
          ESTADO_03: CRÍTICO
        </span>
        <span className="rounded bg-red-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-red-600">
          &lt; 60 SEG
        </span>
      </div>
      <div
        role="timer"
        aria-live="off"
        aria-label={text + ' restantes, estado ' + tone}
        className="mt-3 space-y-2 rounded-lg border border-red-300 bg-white p-4 text-center shadow-sm"
      >
        <div className="animate-pulse font-mono text-2xl font-bold tabular-nums tracking-tight text-red-600">
          {text}
        </div>
        <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-red-600">
          <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
            error
          </span>
          <span>Acción requerida de inmediato</span>
        </div>
      </div>
      <div className="mt-2 border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">
        COLOR_TOKEN: #EF4444 / #BA1A1A
      </div>
    </div>
  );
};
`;

export const EXPIRED_COUNTDOWN_HTML = `
<div class="rounded-xl border border-slate-200 bg-slate-50 p-5">
  <div class="flex items-center justify-between">
    <span class="flex items-center gap-1 font-mono text-[11px] font-bold text-slate-500">
      <span class="h-2 w-2 rounded-full bg-slate-400"></span>
      ESTADO_04: EXPIRED
    </span>
    <span class="rounded bg-slate-200 px-2 py-0.5 font-mono text-[9px] font-semibold text-slate-700">00:00:00</span>
  </div>
  <div role="timer" aria-live="off" aria-label="00:00:00 restantes" class="mt-3 space-y-2 rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm">
    <div class="font-mono text-2xl font-bold tracking-tight text-slate-400 line-through">00:00:00</div>
    <div class="flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-500">
      <span class="material-symbols-outlined text-[14px]">sync_problem</span>
      <span>Disparador de recarga activado</span>
    </div>
  </div>
  <div class="mt-2 border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">TRIGGER: ON_TIMEOUT_CALLBACK()</div>
</div>
`;

export const EXPIRED_COUNTDOWN_TSX = `
import { useEffect, useState } from 'react';
${STATE_TONE_CSS}
export const ExpiredCountdown = () => {
  const [total, setTotal] = useState(5);
  const done = total <= 0;

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done]);

  const tone = toneOf(total);
  const text =
    String(Math.floor(total / 3600)).padStart(2, '0') +
    ':' +
    String(Math.floor((total % 3600) / 60)).padStart(2, '0') +
    ':' +
    String(total % 60).padStart(2, '0');

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 font-mono text-[11px] font-bold text-slate-500">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-slate-400" />
          ESTADO_04: EXPIRED
        </span>
        <span className="rounded bg-slate-200 px-2 py-0.5 font-mono text-[9px] font-semibold text-slate-700">
          00:00:00
        </span>
      </div>
      <div
        role="timer"
        aria-live="off"
        aria-label={text + ' restantes, estado ' + tone}
        className="mt-3 space-y-2 rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm"
      >
        <div className="font-mono text-2xl font-bold tabular-nums tracking-tight text-slate-400 line-through">
          {text}
        </div>
        <div className="flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-500">
          <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
            sync_problem
          </span>
          <span>Disparador de recarga activado</span>
        </div>
      </div>
      <div className="mt-2 border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">
        TRIGGER: ON_TIMEOUT_CALLBACK()
      </div>
    </div>
  );
};
`;
