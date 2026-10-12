export const SESSION_EXPIRY_HTML = `
<div class="rounded-xl border border-slate-200 bg-white p-5 shadow-md">
  <div class="flex items-center gap-3">
    <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
      <span class="material-symbols-outlined text-[20px]">lock_clock</span>
    </div>
    <div>
      <h4 class="text-sm font-semibold text-slate-900">Tu sesión caduca en breve</h4>
      <p class="text-xs text-slate-500">Por motivos de seguridad cerraremos la consola.</p>
    </div>
  </div>
  <div role="timer" aria-live="off" aria-label="165 segundos restantes de sesión" class="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-center">
    <span class="block font-mono text-[11px] text-slate-500">TIEMPO RESTANTE</span>
    <div class="font-mono text-3xl font-bold tracking-tight text-amber-600">02:45 <span class="text-sm font-normal text-slate-500">min</span></div>
  </div>
  <div class="mt-3 grid grid-cols-2 gap-2">
    <button type="button" class="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">Cerrar Ahora</button>
    <button type="button" class="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">Extender Sesión</button>
  </div>
  <div class="mt-3 flex items-center justify-between border-t border-slate-200 pt-2 font-mono text-[10px] text-slate-500">
    <span>ACTION: POST /api/v2/auth/refresh</span>
    <span class="text-emerald-700">OK</span>
  </div>
</div>
`;

export const SESSION_EXPIRY_TSX = `
import { useEffect, useState } from 'react';

export const SessionExpiryCard = () => {
  const initial = 2 * 60 + 45;
  const [total, setTotal] = useState(initial);
  const [closed, setClosed] = useState(false);
  const done = total <= 0 || closed;

  useEffect(() => {
    if (done || closed) return;
    const id = window.setInterval(() => {
      setTotal((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [done, closed]);

  const text =
    String(Math.floor(total / 60)).padStart(2, '0') + ':' + String(total % 60).padStart(2, '0');

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-md">
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
        aria-label={total + ' segundos restantes de sesión'}
        className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-center"
      >
        <span className="block font-mono text-[11px] text-slate-500">TIEMPO RESTANTE</span>
        <div className="font-mono text-3xl font-bold tabular-nums tracking-tight text-amber-600">
          {text} <span className="text-sm font-normal text-slate-500">min</span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {closed ? (
          <button
            type="button"
            onClick={() => {
              setTotal(initial);
              setClosed(false);
            }}
            className="col-span-2 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white"
          >
            Volver a entrar
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setClosed(true)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
            >
              Cerrar Ahora
            </button>
            <button
              type="button"
              onClick={() => setTotal(initial)}
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white"
            >
              Extender Sesión
            </button>
          </>
        )}
      </div>
    </div>
  );
};
`;
