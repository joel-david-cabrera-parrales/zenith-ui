import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';
import { Button } from '../../botones/components';

export interface SessionExpiryCardProps extends HTMLAttributes<HTMLDivElement> {
  initialMinutes?: number;
  initialSeconds?: number;
  onExpire?: () => void;
}

const pad = (n: number): string => String(n).padStart(2, '0');

export const SessionExpiryCard = ({
  initialMinutes = 2,
  initialSeconds = 45,
  onExpire,
  className = '',
  ...rest
}: SessionExpiryCardProps) => {
  const initial = initialMinutes * 60 + initialSeconds;
  const [total, setTotal] = useState(initial);
  const [closed, setClosed] = useState(false);
  const expired = total <= 0;
  const done = expired || closed;
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    if (done || closed) {
      if (expired) onExpireRef.current?.();
      return;
    }
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done, closed, expired]);

  const extend = () => {
    setTotal(initial);
    setClosed(false);
  };

  const text = `${pad(Math.floor(total / 60))}:${pad(total % 60)}`;

  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-5 shadow-md ${className}`} {...rest}>
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
          <span aria-hidden="true" className="material-symbols-outlined text-[20px]">
            lock_clock
          </span>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">
            {closed ? 'Sesión cerrada por seguridad' : 'Tu sesión caduca en breve'}
          </h4>
          <p className="text-xs text-slate-500">
            {closed ? 'Vuelve a autenticarte para seguir operando.' : 'Por motivos de seguridad cerraremos la consola.'}
          </p>
        </div>
      </div>
      <div
        role="timer"
        aria-live="off"
        aria-label={`${total} segundos restantes de sesión`}
        className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-center"
      >
        <span className="block font-mono text-[11px] text-slate-500">TIEMPO RESTANTE</span>
        <div className="font-mono text-3xl font-bold tabular-nums tracking-tight text-amber-600">
          {text} <span className="text-sm font-normal text-slate-500">min</span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {closed ? (
          <Button size="sm" variant="primary" onClick={extend} className="col-span-2 justify-center">
            Volver a entrar
          </Button>
        ) : (
          <>
            <Button size="sm" variant="outline" onClick={() => setClosed(true)} className="justify-center">
              Cerrar Ahora
            </Button>
            <Button size="sm" variant="primary" onClick={extend} className="justify-center">
              Extender Sesión
            </Button>
          </>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">
        <span>ACTION: POST /api/v2/auth/refresh</span>
        <span className="text-emerald-700">OK</span>
      </div>
    </div>
  );
};
