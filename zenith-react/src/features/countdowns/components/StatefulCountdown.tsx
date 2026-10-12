import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export type CountdownTone = 'normal' | 'warning' | 'critical' | 'expired';

export interface StatefulCountdownProps extends HTMLAttributes<HTMLDivElement> {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  onExpire?: () => void;
}

const pad = (n: number): string => String(n).padStart(2, '0');

const toneOf = (total: number): CountdownTone => {
  if (total <= 0) return 'expired';
  if (total < 60) return 'critical';
  if (total < 600) return 'warning';
  return 'normal';
};

const TONE_STYLES: Record<
  CountdownTone,
  { card: string; digits: string; badge: string; dot: string; message: string; icon: string; footer: string }
> = {
  normal: {
    card: 'border-slate-200 bg-white',
    digits: 'text-slate-900',
    badge: 'bg-emerald-600/10 text-emerald-700',
    dot: 'bg-emerald-600',
    message: 'text-emerald-700',
    icon: 'check_circle',
    footer: 'COLOR_TOKEN: #2563EB / #007E37',
  },
  warning: {
    card: 'border-amber-200 bg-amber-50/20',
    digits: 'text-amber-600',
    badge: 'bg-amber-500/10 text-amber-600',
    dot: 'animate-pulse bg-amber-500',
    message: 'text-amber-600',
    icon: 'warning',
    footer: 'COLOR_TOKEN: #F59E0B / AMBER-500',
  },
  critical: {
    card: 'border-red-200 bg-red-50/25',
    digits: 'animate-pulse text-red-600',
    badge: 'bg-red-500/10 text-red-600',
    dot: 'bg-red-600',
    message: 'text-red-600',
    icon: 'error',
    footer: 'COLOR_TOKEN: #EF4444 / #BA1A1A',
  },
  expired: {
    card: 'border-slate-200 bg-slate-50',
    digits: 'text-slate-400 line-through',
    badge: 'bg-slate-200 text-slate-700',
    dot: 'bg-slate-400',
    message: 'text-slate-500',
    icon: 'sync_problem',
    footer: 'TRIGGER: ON_TIMEOUT_CALLBACK()',
  },
};

const TONE_LABEL: Record<CountdownTone, string> = {
  normal: 'ESTADO_01: NORMAL',
  warning: 'ESTADO_02: WARNING',
  critical: 'ESTADO_03: CRÍTICO',
  expired: 'ESTADO_04: EXPIRED',
};

const TONE_MESSAGE: Record<CountdownTone, string> = {
  normal: 'En rango nominal de operación',
  warning: 'Guardado preventivo requerido',
  critical: 'Acción requerida de inmediato',
  expired: 'Disparador de recarga activado',
};

export const StatefulCountdown = ({
  initialHours = 2,
  initialMinutes = 45,
  initialSeconds = 18,
  onExpire,
  className = '',
  ...rest
}: StatefulCountdownProps) => {
  const [total, setTotal] = useState(initialHours * 3600 + initialMinutes * 60 + initialSeconds);
  const done = total <= 0;
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    if (done) {
      onExpireRef.current?.();
      return;
    }
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done]);

  const tone = toneOf(total);
  const styles = TONE_STYLES[tone];
  const text = `${pad(Math.floor(total / 3600))}:${pad(Math.floor((total % 3600) / 60))}:${pad(total % 60)}`;

  return (
    <div className={`rounded-xl border p-5 ${styles.card} ${className}`} {...rest}>
      <div className="flex items-center justify-between">
        <span className={`flex items-center gap-1 font-mono text-[11px] font-bold ${styles.message}`}>
          <span aria-hidden="true" className={`h-2 w-2 rounded-full ${styles.dot}`} />
          {TONE_LABEL[tone]}
        </span>
        <span className={`rounded px-2 py-0.5 font-mono text-[9px] font-semibold ${styles.badge}`}>
          {tone === 'normal' ? '> 60 MIN' : tone === 'warning' ? '< 10 MIN' : tone === 'critical' ? '< 60 SEG' : '00:00:00'}
        </span>
      </div>
      <div
        role="timer"
        aria-live="off"
        aria-label={`${text} restantes, estado ${tone}`}
        className="mt-3 space-y-2 rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm"
      >
        <div className={`font-mono text-2xl font-bold tabular-nums tracking-tight ${styles.digits}`}>
          {text}
        </div>
        <div className={`flex items-center justify-center gap-1 text-[11px] font-semibold ${styles.message}`}>
          <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
            {styles.icon}
          </span>
          <span>{TONE_MESSAGE[tone]}</span>
        </div>
      </div>
      <div className="mt-2 border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">
        {styles.footer}
      </div>
    </div>
  );
};
