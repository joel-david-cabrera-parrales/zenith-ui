import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';
import { Button } from '../../botones/components';

export interface SecondsOnlyTimerProps extends HTMLAttributes<HTMLDivElement> {
  initialSeconds?: number;
  totalSeconds?: number;
  onExpire?: () => void;
}

const pad = (n: number): string => String(n).padStart(2, '0');

export const SecondsOnlyTimer = ({
  initialSeconds = 42,
  totalSeconds = 60,
  onExpire,
  className = '',
  ...rest
}: SecondsOnlyTimerProps) => {
  const [remaining, setRemaining] = useState(initialSeconds);
  const done = remaining <= 0;
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
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done]);

  const progress = Math.max(0, Math.min(100, (remaining / totalSeconds) * 100));

  const replay = () => setRemaining(initialSeconds);

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label={`${remaining} segundos restantes`}
      className={`w-full rounded-lg border border-slate-200 bg-slate-50 p-4 text-center ${className}`}
      {...rest}
    >
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-3xl font-bold tracking-tight tabular-nums text-blue-600">
          00:{pad(remaining)}
        </span>
        <span className="text-xs font-semibold text-slate-500">seg</span>
      </div>
      <div className="mt-3 space-y-1">
        <div
          className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200"
          role="progressbar"
          aria-valuenow={remaining}
          aria-valuemin={0}
          aria-valuemax={totalSeconds}
        >
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between font-mono text-[9px] text-slate-500">
          <span>00s</span>
          <span className="font-semibold text-blue-600">{remaining}s restantes</span>
          <span>{totalSeconds}s</span>
        </div>
      </div>
      <Button
        size="xs"
        variant="outline"
        trailingIcon="replay"
        onClick={replay}
        className="mt-3"
      >
        Probar
      </Button>
    </div>
  );
};
