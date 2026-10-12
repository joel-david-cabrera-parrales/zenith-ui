export const SOLID_TOASTS_HTML = `
<div class="flex flex-wrap gap-2">
  <button type="button" class="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">Disparar Exito</button>
  <button type="button" class="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white">Disparar Error</button>
  <button type="button" class="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Disparar Aviso</button>
  <button type="button" class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Disparar Info</button>
  <button type="button" class="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white">Disparar Undo</button>
</div>
<div class="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3">
  <div role="status" class="rounded-xl border border-emerald-700 bg-emerald-600 p-3 text-white shadow-md animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg">check_circle</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-white">Guardado Exitoso</p>
        <p class="mt-0.5 text-xs text-white/80">Cambios guardados con exito</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-white/70 hover:text-white">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-white/20 pt-1">
      <span class="font-mono text-[10px] text-white/80">Auto: 5.0s</span>
      <button type="button" class="rounded bg-white/20 px-2 py-0.5 text-xs font-semibold text-white">Ver registro</button>
    </div>
  </div>
  <div role="alert" class="rounded-xl border border-rose-700 bg-rose-600 p-3 text-white shadow-md animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg">cancel</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-white">Error Critico</p>
        <p class="mt-0.5 text-xs text-white/80">Fallo de conexion con PostgreSQL</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-white/70 hover:text-white">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-white/20 pt-1">
      <span class="font-mono text-[10px] text-white/80">ERR_503</span>
      <button type="button" class="rounded bg-white/20 px-2 py-0.5 text-xs font-semibold text-white">Reintentar ahora</button>
    </div>
  </div>
  <div role="alert" class="rounded-xl border border-slate-900 bg-slate-900 p-3 text-white shadow-md animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg">warning</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-white">Cuota Elevada</p>
        <p class="mt-0.5 text-xs text-white/80">Cuota de almacenamiento al 85%</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-white/70 hover:text-white">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-white/20 pt-1">
      <span class="font-mono text-[10px] text-white/80">Umbral: 80%</span>
      <button type="button" class="rounded bg-white/20 px-2 py-0.5 text-xs font-semibold text-white">Aumentar limite</button>
    </div>
  </div>
  <div role="status" class="rounded-xl border border-blue-700 bg-blue-600 p-3 text-white shadow-md animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg">info</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-white">Actualizacion</p>
        <p class="mt-0.5 text-xs text-white/80">Nueva version v2.4.2 disponible</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-white/70 hover:text-white">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-white/20 pt-1">
      <span class="font-mono text-[10px] text-white/80">Kernel 2.4</span>
      <button type="button" class="rounded bg-white/20 px-2 py-0.5 text-xs font-semibold text-white">Detalles</button>
    </div>
  </div>
  <div role="status" class="rounded-xl border border-slate-800 bg-slate-800 p-3 text-slate-100 shadow-md animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg">inventory_2</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-white">Elemento Archivado</p>
        <p class="mt-0.5 text-xs text-white/80">Elemento archivado temporalmente</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-white/70 hover:text-white">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-white/20 pt-1">
      <span class="font-mono text-[10px] text-white/80">TTL: 30d</span>
      <button type="button" class="rounded bg-white/20 px-2 py-0.5 text-xs font-semibold text-white">Deshacer (Undo)</button>
    </div>
  </div>
</div>
`;

export const SOLID_TOASTS_TSX = `
import { useEffect, useRef, useState } from 'react';

const TOASTS = [
  { id: 'success', icon: 'check_circle', box: 'border-emerald-700 bg-emerald-600', title: 'Guardado Exitoso', message: 'Cambios guardados con exito', meta: 'Auto: 5.0s', action: 'Ver registro', role: 'status' },
  { id: 'error', icon: 'cancel', box: 'border-rose-700 bg-rose-600', title: 'Error Critico', message: 'Fallo de conexion con PostgreSQL', meta: 'ERR_503', action: 'Reintentar ahora', role: 'alert' },
  { id: 'warning', icon: 'warning', box: 'border-slate-900 bg-slate-900', title: 'Cuota Elevada', message: 'Cuota de almacenamiento al 85%', meta: 'Umbral: 80%', action: 'Aumentar limite', role: 'alert' },
  { id: 'info', icon: 'info', box: 'border-blue-700 bg-blue-600', title: 'Actualizacion', message: 'Nueva version v2.4.2 disponible', meta: 'Kernel 2.4', action: 'Detalles', role: 'status' },
  { id: 'neutral', icon: 'inventory_2', box: 'border-slate-800 bg-slate-800', title: 'Elemento Archivado', message: 'Elemento archivado temporalmente', meta: 'TTL: 30d', action: 'Deshacer (Undo)', role: 'status' },
] as const;

type ToastId = (typeof TOASTS)[number]['id'];

export const SolidToasts = () => {
  const [order, setOrder] = useState<ToastId[]>([]);
  const [exiting, setExiting] = useState<Record<string, boolean>>({});
  const autoTimers = useRef<Record<string, number | null>>({});
  const exitTimers = useRef<Record<string, number | null>>({});

  useEffect(() => {
    const auto = autoTimers.current;
    const exits = exitTimers.current;
    return () => {
      Object.values(auto).forEach((timer) => {
        if (timer !== null) window.clearTimeout(timer);
      });
      Object.values(exits).forEach((timer) => {
        if (timer !== null) window.clearTimeout(timer);
      });
    };
  }, []);

  const close = (id: string) => {
    const autoTimer = autoTimers.current[id];
    if (autoTimer !== null && autoTimer !== undefined) {
      window.clearTimeout(autoTimer);
      autoTimers.current[id] = null;
    }
    setExiting((prev) => ({ ...prev, [id]: true }));
    const exitTimer = exitTimers.current[id];
    if (exitTimer !== null && exitTimer !== undefined) window.clearTimeout(exitTimer);
    exitTimers.current[id] = window.setTimeout(() => {
      setOrder((prev) => prev.filter((toastId) => toastId !== id));
      setExiting((prev) => ({ ...prev, [id]: false }));
      exitTimers.current[id] = null;
    }, 200);
  };

  const show = (id: ToastId) => {
    const exitTimer = exitTimers.current[id];
    if (exitTimer !== null && exitTimer !== undefined) {
      window.clearTimeout(exitTimer);
      exitTimers.current[id] = null;
    }
    const autoTimer = autoTimers.current[id];
    if (autoTimer !== null && autoTimer !== undefined) window.clearTimeout(autoTimer);
    setExiting((prev) => ({ ...prev, [id]: false }));
    setOrder((prev) => [id, ...prev.filter((toastId) => toastId !== id)]);
    autoTimers.current[id] = window.setTimeout(() => close(id), 5000);
  };

  const byId = (id: ToastId) => TOASTS.find((toast) => toast.id === id) ?? TOASTS[0];

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => show('success')} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">Disparar Exito</button>
        <button type="button" onClick={() => show('error')} className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white">Disparar Error</button>
        <button type="button" onClick={() => show('warning')} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Disparar Aviso</button>
        <button type="button" onClick={() => show('info')} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Disparar Info</button>
        <button type="button" onClick={() => show('neutral')} className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white">Disparar Undo</button>
      </div>
      <div className="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3">
        {order.map((id) => {
          const toast = byId(id);
          const isExiting = exiting[id] === true;
          return (
            <div key={toast.id} role={toast.role} className={'rounded-xl border p-3 text-white shadow-md ' + toast.box + (isExiting ? ' animate-toast-out' : ' animate-toast-in')}>
              <div className="flex items-start gap-2">
                <span aria-hidden="true" className="material-symbols-outlined text-lg">{toast.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">{toast.title}</p>
                  <p className="mt-0.5 text-xs text-white/80">{toast.message}</p>
                </div>
                <button type="button" aria-label="Descartar notificación" onClick={() => close(toast.id)} className="text-white/70 hover:text-white">
                  <span aria-hidden="true" className="material-symbols-outlined text-base">close</span>
                </button>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-white/20 pt-1">
                <span className="font-mono text-[10px] text-white/80">{toast.meta}</span>
                <button type="button" onClick={() => window.alert('Presionaste: ' + toast.action)} className="rounded bg-white/20 px-2 py-0.5 text-xs font-semibold text-white">
                  {toast.action}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
`;
