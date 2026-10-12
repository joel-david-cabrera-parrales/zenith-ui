export const PLAYGROUND_HTML = `
<div class="flex flex-wrap gap-2.5">
  <button type="button" class="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">Disparar Éxito</button>
  <button type="button" class="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white">Disparar Error Crítico</button>
  <button type="button" class="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Disparar Advertencia</button>
  <button type="button" class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Disparar Sistema / Info</button>
  <button type="button" class="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white">Disparar Deshacer (Undo)</button>
  <button type="button" class="rounded-lg border border-rose-300 px-4 py-2 text-sm font-semibold text-rose-600">Limpiar Todos</button>
</div>
<div class="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3">
  <div role="status" class="rounded-xl border border-emerald-200 bg-emerald-50 p-3 animate-toast-in">
    <p class="text-sm font-bold text-slate-900">Guardado Exitoso</p>
    <p class="mt-0.5 text-xs text-slate-500">Operación procesada con éxito.</p>
  </div>
  <div role="alert" class="rounded-xl border border-rose-200 bg-rose-50 p-3 animate-toast-in">
    <p class="text-sm font-bold text-slate-900">Error Crítico</p>
    <p class="mt-0.5 text-xs text-slate-500">Fallo de conexión con PostgreSQL.</p>
  </div>
</div>
`;

export const PLAYGROUND_TSX = `
import { useEffect, useRef, useState } from 'react';

const TOASTS = [
  { id: 'success', title: 'Guardado Exitoso', message: 'Operación procesada con éxito.', box: 'border-emerald-200 bg-emerald-50', role: 'status' },
  { id: 'error', title: 'Error Crítico', message: 'Fallo de conexión con PostgreSQL.', box: 'border-rose-200 bg-rose-50', role: 'alert' },
  { id: 'warning', title: 'Cuota Elevada', message: 'Cuota de almacenamiento al 85%.', box: 'border-amber-200 bg-amber-50', role: 'alert' },
  { id: 'info', title: 'Notificación del Sistema', message: 'Nueva versión v2.4.2 disponible.', box: 'border-blue-200 bg-blue-50', role: 'status' },
  { id: 'neutral', title: 'Elemento Archivado', message: 'Elemento archivado temporalmente.', box: 'border-slate-200 bg-slate-100', role: 'status' },
] as const;

type ToastId = (typeof TOASTS)[number]['id'];

export const ToastPlayground = () => {
  const [order, setOrder] = useState<ToastId[]>([]);
  const autoTimers = useRef<Record<string, number | null>>({});

  useEffect(() => {
    const timers = autoTimers.current;
    return () => {
      Object.values(timers).forEach((timer) => {
        if (timer !== null) window.clearTimeout(timer);
      });
    };
  }, []);

  const show = (id: ToastId) => {
    const current = autoTimers.current[id];
    if (current !== null && current !== undefined) window.clearTimeout(current);
    setOrder((prev) => [id, ...prev.filter((toastId) => toastId !== id)]);
    autoTimers.current[id] = window.setTimeout(() => {
      setOrder((prev) => prev.filter((toastId) => toastId !== id));
    }, 5000);
  };

  const clearAll = () => {
    Object.values(autoTimers.current).forEach((timer) => {
      if (timer !== null) window.clearTimeout(timer);
    });
    autoTimers.current = {};
    setOrder([]);
  };

  const byId = (id: ToastId) => TOASTS.find((toast) => toast.id === id) ?? TOASTS[0];

  return (
    <>
      <div className="flex flex-wrap gap-2.5">
        <button type="button" onClick={() => show('success')} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">Disparar Éxito</button>
        <button type="button" onClick={() => show('error')} className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white">Disparar Error Crítico</button>
        <button type="button" onClick={() => show('warning')} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Disparar Advertencia</button>
        <button type="button" onClick={() => show('info')} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Disparar Sistema / Info</button>
        <button type="button" onClick={() => show('neutral')} className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white">Disparar Deshacer (Undo)</button>
        <button type="button" onClick={clearAll} className="rounded-lg border border-rose-300 px-4 py-2 text-sm font-semibold text-rose-600">Limpiar Todos</button>
      </div>
      <div className="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3">
        {order.map((id) => {
          const toast = byId(id);
          return (
            <div key={toast.id} role={toast.role} className={'rounded-xl border p-3 animate-toast-in ' + toast.box}>
              <p className="text-sm font-bold text-slate-900">{toast.title}</p>
              <p className="mt-0.5 text-xs text-slate-500">{toast.message}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
`;
