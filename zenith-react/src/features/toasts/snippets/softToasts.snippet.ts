export const SOFT_TOASTS_HTML = `
<div class="flex flex-wrap gap-2">
  <button type="button" class="rounded-lg bg-emerald-50 border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700">Disparar Exito</button>
  <button type="button" class="rounded-lg bg-rose-50 border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-600">Disparar Error</button>
  <button type="button" class="rounded-lg bg-amber-50 border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-800">Disparar Aviso</button>
  <button type="button" class="rounded-lg bg-blue-50 border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700">Disparar Info</button>
  <button type="button" class="rounded-lg bg-slate-100 border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">Disparar Undo</button>
</div>
<div class="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3">
  <div role="status" class="rounded-xl border border-emerald-200 bg-emerald-50 p-3 animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg text-emerald-600">check_circle</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-slate-900">Cambios Guardados</p>
        <p class="mt-0.5 text-xs text-slate-500">Cambios guardados con exito</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-slate-400 hover:text-slate-900">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-slate-200 pt-1">
      <span class="font-mono text-[10px] text-slate-500">Auto: 5.0s</span>
      <button type="button" class="text-xs font-bold text-emerald-600">Ver registro</button>
    </div>
  </div>
  <div role="alert" class="rounded-xl border border-rose-200 bg-rose-50 p-3 animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg text-rose-600">cancel</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-slate-900">Fallo de Conexion</p>
        <p class="mt-0.5 text-xs text-slate-500">PostgreSQL timeout despues de 30s</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-slate-400 hover:text-slate-900">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-slate-200 pt-1">
      <span class="font-mono text-[10px] text-slate-500">ECONNREFUSED</span>
      <button type="button" class="text-xs font-bold text-rose-600">Reintentar ahora</button>
    </div>
  </div>
  <div role="alert" class="rounded-xl border border-amber-200 bg-amber-50 p-3 animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg text-amber-600">warning</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-slate-900">Cuota al 85%</p>
        <p class="mt-0.5 text-xs text-slate-500">Cuota de almacenamiento al 85%</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-slate-400 hover:text-slate-900">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-slate-200 pt-1">
      <span class="font-mono text-[10px] text-slate-500">17.2 GB / 20 GB</span>
      <button type="button" class="text-xs font-bold text-amber-800">Aumentar limite</button>
    </div>
  </div>
  <div role="status" class="rounded-xl border border-blue-200 bg-blue-50 p-3 animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg text-blue-600">info</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-slate-900">v2.4.2 Disponible</p>
        <p class="mt-0.5 text-xs text-slate-500">Nueva version lista para desplegar</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-slate-400 hover:text-slate-900">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-slate-200 pt-1">
      <span class="font-mono text-[10px] text-slate-500">BUILD_490</span>
      <button type="button" class="text-xs font-bold text-blue-600">Detalles</button>
    </div>
  </div>
  <div role="status" class="rounded-xl border border-slate-200 bg-slate-100 p-3 animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg text-slate-500">inventory_2</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-slate-900">Archivado</p>
        <p class="mt-0.5 text-xs text-slate-500">Elemento archivado temporalmente</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-slate-400 hover:text-slate-900">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-slate-200 pt-1">
      <span class="font-mono text-[10px] text-slate-500">ID #8831</span>
      <button type="button" class="text-xs font-bold text-blue-600">Deshacer (Undo)</button>
    </div>
  </div>
</div>
`;

export const SOFT_TOASTS_TSX = `
import { useEffect, useRef, useState } from 'react';

const TOASTS = [
  { id: 'success', icon: 'check_circle', box: 'border-emerald-200 bg-emerald-50', iconColor: 'text-emerald-600', title: 'Cambios Guardados', message: 'Cambios guardados con exito', meta: 'Auto: 5.0s', action: 'Ver registro', role: 'status' },
  { id: 'error', icon: 'cancel', box: 'border-rose-200 bg-rose-50', iconColor: 'text-rose-600', title: 'Fallo de Conexion', message: 'PostgreSQL timeout despues de 30s', meta: 'ECONNREFUSED', action: 'Reintentar ahora', role: 'alert' },
  { id: 'warning', icon: 'warning', box: 'border-amber-200 bg-amber-50', iconColor: 'text-amber-600', title: 'Cuota al 85%', message: 'Cuota de almacenamiento al 85%', meta: '17.2 GB / 20 GB', action: 'Aumentar limite', role: 'alert' },
  { id: 'info', icon: 'info', box: 'border-blue-200 bg-blue-50', iconColor: 'text-blue-600', title: 'v2.4.2 Disponible', message: 'Nueva version lista para desplegar', meta: 'BUILD_490', action: 'Detalles', role: 'status' },
  { id: 'neutral', icon: 'inventory_2', box: 'border-slate-200 bg-slate-100', iconColor: 'text-slate-500', title: 'Archivado', message: 'Elemento archivado temporalmente', meta: 'ID #8831', action: 'Deshacer (Undo)', role: 'status' },
] as const;

type ToastId = (typeof TOASTS)[number]['id'];

export const SoftToasts = () => {
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
        <button type="button" onClick={() => show('success')} className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">Disparar Exito</button>
        <button type="button" onClick={() => show('error')} className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600">Disparar Error</button>
        <button type="button" onClick={() => show('warning')} className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">Disparar Aviso</button>
        <button type="button" onClick={() => show('info')} className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">Disparar Info</button>
        <button type="button" onClick={() => show('neutral')} className="rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">Disparar Undo</button>
      </div>
      <div className="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3">
        {order.map((id) => {
          const toast = byId(id);
          const isExiting = exiting[id] === true;
          return (
            <div key={toast.id} role={toast.role} className={'rounded-xl border p-3 ' + toast.box + (isExiting ? ' animate-toast-out' : ' animate-toast-in')}>
              <div className="flex items-start gap-2">
                <span aria-hidden="true" className={'material-symbols-outlined text-lg ' + toast.iconColor}>{toast.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900">{toast.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{toast.message}</p>
                </div>
                <button type="button" aria-label="Descartar notificación" onClick={() => close(toast.id)} className="text-slate-400 hover:text-slate-900">
                  <span aria-hidden="true" className="material-symbols-outlined text-base">close</span>
                </button>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-1">
                <span className="font-mono text-[10px] text-slate-500">{toast.meta}</span>
                <button type="button" onClick={() => window.alert('Presionaste: ' + toast.action)} className={'text-xs font-bold hover:underline ' + toast.iconColor}>
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
