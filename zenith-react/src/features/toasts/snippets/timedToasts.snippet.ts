export const TIMED_TOASTS_HTML = `
<div class="flex flex-wrap gap-2">
  <button type="button" class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Disparar Sincronización</button>
  <button type="button" class="rounded-lg bg-blue-50 border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700">Disparar Deshacer</button>
  <button type="button" class="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Exportación</button>
</div>
<div class="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3">
  <div role="status" class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md animate-toast-in">
    <div class="p-4">
      <div class="mb-2 flex items-center justify-between">
        <span class="rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800">AUTO_DISMISS // 4000MS</span>
        <button type="button" aria-label="Descartar notificación" class="text-slate-400 hover:text-slate-900">
          <span class="material-symbols-outlined text-sm">close</span>
        </button>
      </div>
      <div class="flex items-start gap-3">
        <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-blue-600">
          <span class="material-symbols-outlined">sync</span>
        </div>
        <div>
          <h4 class="text-sm font-bold text-slate-900">Sincronización Completada</h4>
          <p class="mt-0.5 text-xs text-slate-500">384 nodos de telemetría actualizados en el cluster EU-Central-1.</p>
        </div>
      </div>
    </div>
    <div class="h-1.5 w-full bg-slate-100">
      <div class="h-full bg-blue-600 animate-toast-progress" style="animation-duration: 4000ms;"></div>
    </div>
  </div>
  <div role="status" class="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md animate-toast-in">
    <div class="flex items-center gap-3">
      <div class="relative flex h-10 w-10 items-center justify-center">
        <svg class="h-10 w-10 -rotate-90" viewBox="0 0 36 36">
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3" class="text-slate-200"></path>
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="75, 100" class="text-blue-600"></path>
        </svg>
        <span class="absolute text-[10px] font-bold text-slate-900">4s</span>
      </div>
      <div>
        <h4 class="text-sm font-bold text-slate-900">Deshacer Disponible</h4>
        <p class="text-xs text-slate-500">Cerrando en 4s automáticamente</p>
      </div>
    </div>
    <button type="button" class="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-blue-600">Deshacer</button>
  </div>
  <div role="status" class="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md animate-toast-in">
    <div class="flex items-start justify-between">
      <div class="flex items-center gap-2">
        <div class="h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
        <span class="text-sm font-bold text-slate-900">Exportando reporte CSV (42%)...</span>
      </div>
      <span class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-500">PID 9081</span>
    </div>
    <div class="h-1.5 w-full rounded-full bg-slate-100">
      <div class="h-full rounded-full bg-blue-600" style="width: 42%;"></div>
    </div>
    <div class="flex items-center justify-between pt-1">
      <span class="text-xs text-slate-500">2.1 MB de 5.0 MB transferidos</span>
      <button type="button" class="text-xs font-semibold text-rose-600">Cancelar</button>
    </div>
  </div>
</div>
`;

export const TIMED_TOASTS_TSX = `
import { useEffect, useRef, useState } from 'react';

export const TimedToasts = () => {
  const [timedVisible, setTimedVisible] = useState(false);
  const [countdownVisible, setCountdownVisible] = useState(false);
  const [remaining, setRemaining] = useState(4);
  const [progress, setProgress] = useState(42);
  const [taskDone, setTaskDone] = useState(false);
  const autoTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (autoTimer.current !== null) window.clearTimeout(autoTimer.current);
    };
  }, []);

  const showTimed = () => {
    if (autoTimer.current !== null) window.clearTimeout(autoTimer.current);
    setTimedVisible(true);
    autoTimer.current = window.setTimeout(() => setTimedVisible(false), 4000);
  };

  const showCountdown = () => {
    setRemaining(4);
    setCountdownVisible(true);
  };

  useEffect(() => {
    if (!countdownVisible) return;
    if (remaining <= 0) {
      const done = window.setTimeout(() => setCountdownVisible(false), 200);
      return () => window.clearTimeout(done);
    }
    const timer = window.setTimeout(() => setRemaining((prev) => prev - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [countdownVisible, remaining]);

  const showTask = () => {
    setProgress(42);
    setTaskDone(false);
  };

  useEffect(() => {
    if (taskDone || progress >= 100) return;
    const timer = window.setTimeout(() => {
      const next = Math.min(progress + 7, 100);
      setProgress(next);
      if (next >= 100) setTaskDone(true);
    }, 600);
    return () => window.clearTimeout(timer);
  }, [progress, taskDone]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={showTimed} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Disparar Sincronización</button>
        <button type="button" onClick={showCountdown} className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">Disparar Deshacer</button>
        <button type="button" onClick={showTask} className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Exportación</button>
      </div>
      <div className="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3">
        {timedVisible && (
          <div role="status" className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md animate-toast-in">
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800">AUTO_DISMISS // 4000MS</span>
                <button type="button" aria-label="Descartar notificación" onClick={() => setTimedVisible(false)} className="text-slate-400 hover:text-slate-900">
                  <span aria-hidden="true" className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
              <p className="text-sm font-bold text-slate-900">Sincronización Completada</p>
              <p className="mt-0.5 text-xs text-slate-500">384 nodos actualizados en EU-Central-1.</p>
            </div>
            <div className="h-1.5 w-full bg-slate-100">
              <div className="h-full bg-blue-600 animate-toast-progress" style={{ animationDuration: '4000ms' }} />
            </div>
          </div>
        )}
        {countdownVisible && (
          <div role="status" className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md animate-toast-in">
            <p className="text-sm font-bold text-slate-900">Deshacer Disponible — {remaining}s</p>
            <button type="button" onClick={() => window.alert('Presionaste: Deshacer')} className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-blue-600">Deshacer</button>
          </div>
        )}
        <div role="status" className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md">
          <span className="text-sm font-bold text-slate-900">{taskDone ? 'Exportación completada' : 'Exportando reporte CSV (' + progress + '%)...'}</span>
          <div className="h-1.5 w-full rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-blue-600" style={{ width: progress + '%' }} />
          </div>
          <button type="button" onClick={() => window.alert('Presionaste: Cancelar')} className="self-end text-xs font-semibold text-rose-600">Cancelar</button>
        </div>
      </div>
    </div>
  );
};
`;
