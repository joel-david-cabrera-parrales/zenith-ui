export const OUTLINE_TOASTS_HTML = `
<div class="flex flex-wrap gap-2">
  <button type="button" class="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Exito</button>
  <button type="button" class="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Error</button>
  <button type="button" class="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Aviso</button>
  <button type="button" class="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Info</button>
  <button type="button" class="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Undo</button>
</div>
<div class="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3">
  <div role="status" class="rounded-r-xl rounded-l border border-slate-200 border-l-4 border-l-emerald-600 bg-white p-3 shadow-sm animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg text-emerald-600">check_circle</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-slate-900">Configuracion</p>
        <p class="mt-0.5 text-xs text-slate-500">Cambios guardados con exito</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-slate-400 hover:text-slate-900">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-slate-200 pt-1">
      <span class="font-mono text-[10px] text-slate-500">Auto: 5.0s</span>
      <button type="button" class="text-xs font-semibold text-blue-600">Ver registro</button>
    </div>
  </div>
  <div role="alert" class="rounded-r-xl rounded-l border border-slate-200 border-l-4 border-l-rose-600 bg-white p-3 shadow-sm animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg text-rose-600">cancel</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-slate-900">PostgreSQL</p>
        <p class="mt-0.5 text-xs text-slate-500">Fallo de conexion critico</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-slate-400 hover:text-slate-900">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-slate-200 pt-1">
      <span class="font-mono text-[10px] text-slate-500">PORT 5432 ERR</span>
      <button type="button" class="text-xs font-semibold text-blue-600">Reintentar ahora</button>
    </div>
  </div>
  <div role="alert" class="rounded-r-xl rounded-l border border-slate-200 border-l-4 border-l-slate-900 bg-white p-3 shadow-sm animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg text-slate-900">warning</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-slate-900">Capacidad</p>
        <p class="mt-0.5 text-xs text-slate-500">Cuota de almacenamiento al 85%</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-slate-400 hover:text-slate-900">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-slate-200 pt-1">
      <span class="font-mono text-[10px] text-slate-500">QUOTA_WARN</span>
      <button type="button" class="text-xs font-semibold text-blue-600">Aumentar limite</button>
    </div>
  </div>
  <div role="status" class="rounded-r-xl rounded-l border border-slate-200 border-l-4 border-l-blue-600 bg-white p-3 shadow-sm animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg text-blue-600">info</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-slate-900">Distribucion</p>
        <p class="mt-0.5 text-xs text-slate-500">Nueva version v2.4.2 disponible</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-slate-400 hover:text-slate-900">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-slate-200 pt-1">
      <span class="font-mono text-[10px] text-slate-500">RELEASE.LATEST</span>
      <button type="button" class="text-xs font-semibold text-blue-600">Detalles</button>
    </div>
  </div>
  <div role="status" class="rounded-r-xl rounded-l border border-slate-200 border-l-4 border-l-slate-400 bg-white p-3 shadow-sm animate-toast-in">
    <div class="flex items-start gap-2">
      <span class="material-symbols-outlined text-lg text-slate-500">inventory_2</span>
      <div class="flex-1">
        <p class="text-sm font-bold text-slate-900">Inventario</p>
        <p class="mt-0.5 text-xs text-slate-500">Elemento archivado temporalmente</p>
      </div>
      <button type="button" aria-label="Descartar notificación" class="text-slate-400 hover:text-slate-900">
        <span class="material-symbols-outlined text-base">close</span>
      </button>
    </div>
    <div class="mt-2 flex items-center justify-between border-t border-slate-200 pt-1">
      <span class="font-mono text-[10px] text-slate-500">EXP_24H</span>
      <button type="button" class="text-xs font-semibold text-blue-600">Deshacer (Undo)</button>
    </div>
  </div>
</div>
`;

export const OUTLINE_TOASTS_TSX = `
import { useEffect, useRef, useState } from 'react';

const TOASTS = [
  { id: 'success', icon: 'check_circle', accent: 'border-l-emerald-600', iconColor: 'text-emerald-600', title: 'Configuracion', message: 'Cambios guardados con exito', meta: 'Auto: 5.0s', action: 'Ver registro', role: 'status' },
  { id: 'error', icon: 'cancel', accent: 'border-l-rose-600', iconColor: 'text-rose-600', title: 'PostgreSQL', message: 'Fallo de conexion critico', meta: 'PORT 5432 ERR', action: 'Reintentar ahora', role: 'alert' },
  { id: 'warning', icon: 'warning', accent: 'border-l-slate-900', iconColor: 'text-slate-900', title: 'Capacidad', message: 'Cuota de almacenamiento al 85%', meta: 'QUOTA_WARN', action: 'Aumentar limite', role: 'alert' },
  { id: 'info', icon: 'info', accent: 'border-l-blue-600', iconColor: 'text-blue-600', title: 'Distribucion', message: 'Nueva version v2.4.2 disponible', meta: 'RELEASE.LATEST', action: 'Detalles', role: 'status' },
  { id: 'neutral', icon: 'inventory_2', accent: 'border-l-slate-400', iconColor: 'text-slate-500', title: 'Inventario', message: 'Elemento archivado temporalmente', meta: 'EXP_24H', action: 'Deshacer (Undo)', role: 'status' },
] as const;

type ToastId = (typeof TOASTS)[number]['id'];

export const OutlineToasts = () => {
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
        <button type="button" onClick={() => show('success')} className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Exito</button>
        <button type="button" onClick={() => show('error')} className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Error</button>
        <button type="button" onClick={() => show('warning')} className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Aviso</button>
        <button type="button" onClick={() => show('info')} className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Info</button>
        <button type="button" onClick={() => show('neutral')} className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Undo</button>
      </div>
      <div className="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3">
        {order.map((id) => {
          const toast = byId(id);
          const isExiting = exiting[id] === true;
          return (
            <div key={toast.id} role={toast.role} className={'rounded-r-xl rounded-l border border-slate-200 border-l-4 bg-white p-3 shadow-sm ' + toast.accent + (isExiting ? ' animate-toast-out' : ' animate-toast-in')}>
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
                <button type="button" onClick={() => window.alert('Presionaste: ' + toast.action)} className="text-xs font-semibold text-blue-600 hover:underline">
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
