export const RICH_TOASTS_HTML = `
<div class="flex flex-wrap gap-2">
  <button type="button" class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Disparar Mención</button>
  <button type="button" class="rounded-lg bg-blue-50 border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700">Disparar Token API</button>
  <button type="button" class="rounded-lg border border-rose-300 px-4 py-2 text-sm font-semibold text-rose-600">Disparar Undo</button>
  <button type="button" class="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Telemetría</button>
</div>
<div class="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3">
  <div role="status" class="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg animate-toast-in">
    <div class="flex items-start gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">MD</div>
      <div>
        <span class="text-sm font-bold text-slate-900">@marcus_dev</span>
        <span class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-500">GitHub PR #302</span>
        <p class="mt-1 text-sm text-slate-500">Revisar la latencia de queries en <code class="rounded bg-slate-100 px-1 py-0.5 font-mono text-blue-600">/api/v1/telemetry</code> antes de mergear.</p>
      </div>
    </div>
    <div class="flex items-center gap-2 border-t border-slate-200 pt-2">
      <input type="text" placeholder="Escribe una respuesta rápida inline..." class="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs" />
      <button type="button" class="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">Enviar</button>
    </div>
  </div>
  <div role="status" class="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg animate-toast-in">
    <h4 class="text-sm font-bold text-slate-900">Clave API Generada</h4>
    <div class="flex items-center justify-between rounded-lg bg-slate-900 p-2.5 font-mono text-xs">
      <span class="truncate text-blue-200">zenith_live_pk_9942a8b30d88fe21c43...</span>
      <button type="button" class="ml-2 rounded bg-white/10 px-2 py-1 text-white">Copiar Token</button>
    </div>
    <span class="font-mono text-[10px] text-slate-500">SCOPES: READ/WRITE — Expira en 30 días</span>
  </div>
  <div role="alert" class="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-lg animate-toast-in">
    <div class="flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
        <span class="material-symbols-outlined">delete</span>
      </div>
      <div>
        <span class="text-sm font-bold text-slate-900">Registro Eliminado</span>
        <p class="text-xs text-slate-500">El usuario Alonso Vargas fue retirado del equipo.</p>
      </div>
    </div>
    <button type="button" class="rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white">Deshacer (10s)</button>
  </div>
  <div role="alert" class="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg animate-toast-in">
    <h4 class="text-sm font-bold text-slate-900">Pico de CPU Detectado: 94.2%</h4>
    <div class="flex h-12 items-end gap-1 rounded-lg border border-slate-200 bg-slate-50 p-2">
      <div class="w-1/12 rounded-t bg-blue-600/40 h-4"></div>
      <div class="w-1/12 rounded-t bg-blue-600/70 h-7"></div>
      <div class="w-1/12 rounded-t bg-blue-600 h-9"></div>
      <div class="w-1/12 rounded-t bg-rose-600 h-11"></div>
    </div>
    <div class="flex items-center justify-between text-xs">
      <span class="font-mono text-slate-500">Host: ip-10-0-4-88.internal</span>
      <button type="button" class="text-xs font-semibold text-blue-600">Abrir Grafana</button>
    </div>
  </div>
</div>
`;

export const RICH_TOASTS_TSX = `
import { useEffect, useRef, useState } from 'react';

const TOKEN = 'zenith_live_pk_9942a8b30d88fe21c43';

type RichKey = 'mention' | 'apiKey' | 'undo' | 'telemetry';

export const RichToasts = () => {
  const [order, setOrder] = useState<RichKey[]>([]);
  const [draft, setDraft] = useState('');
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [remaining, setRemaining] = useState(10);
  const [undoCycle, setUndoCycle] = useState(0);
  const copyTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    };
  }, []);

  const undoVisible = order.includes('undo');

  useEffect(() => {
    if (!undoVisible || remaining <= 0) return;
    const timer = window.setTimeout(() => setRemaining((prev) => prev - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [undoVisible, remaining]);

  useEffect(() => {
    if (undoVisible && remaining <= 0) {
      const done = window.setTimeout(() => setOrder((prev) => prev.filter((key) => key !== 'undo')), 200);
      return () => window.clearTimeout(done);
    }
  }, [undoVisible, remaining]);

  const hide = (key: RichKey) => setOrder((prev) => prev.filter((k) => k !== key));

  const show = (key: RichKey) => {
    if (key === 'undo') {
      setRemaining(10);
      setUndoCycle((prev) => prev + 1);
    }
    setOrder((prev) => [key, ...prev.filter((k) => k !== key)]);
  };

  const showAll = () => {
    (['mention', 'apiKey', 'undo', 'telemetry'] as RichKey[]).forEach(show);
  };

  const send = () => {
    if (draft.trim() === '') return;
    window.alert('Presionaste: Enviar respuesta');
    setDraft('');
    setSent(true);
  };

  const copy = () => {
    window.alert('Token copiado: ' + TOKEN);
    setCopied(true);
    if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => show('mention')} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Disparar Mención</button>
        <button type="button" onClick={() => show('apiKey')} className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">Disparar Token API</button>
        <button type="button" onClick={() => show('undo')} className="rounded-lg border border-rose-300 px-4 py-2 text-sm font-semibold text-rose-600">Disparar Undo</button>
        <button type="button" onClick={() => show('telemetry')} className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Disparar Telemetría</button>
        <button type="button" onClick={showAll} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Mostrar Todos</button>
      </div>
      <div className="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3">
        {order.includes('mention') && (
          <div role="status" className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg animate-toast-in">
            <p className="text-sm font-bold text-slate-900">@marcus_dev — GitHub PR #302</p>
            <div className="mt-2 flex items-center gap-2">
              <input
                type="text"
                value={draft}
                onChange={(event) => {
                  setDraft(event.target.value);
                  setSent(false);
                }}
                placeholder="Escribe una respuesta rápida inline..."
                className="flex-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
              />
              <button type="button" onClick={send} className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">Enviar</button>
            </div>
            {sent && <p className="mt-1 text-xs font-medium text-emerald-600">Respuesta enviada</p>}
            <button type="button" onClick={() => hide('mention')} className="mt-2 text-xs text-slate-400">Descartar</button>
          </div>
        )}
        {order.includes('apiKey') && (
          <div role="status" className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg animate-toast-in">
            <p className="text-sm font-bold text-slate-900">Clave API Generada</p>
            <div className="mt-2 flex items-center justify-between rounded-lg bg-slate-900 p-2.5 font-mono text-xs">
              <span className="truncate text-blue-200">{TOKEN}...</span>
              <button type="button" onClick={copy} className="ml-2 rounded bg-white/10 px-2 py-1 text-white">{copied ? '¡Copiado!' : 'Copiar Token'}</button>
            </div>
            <button type="button" onClick={() => hide('apiKey')} className="mt-2 text-xs text-slate-400">Descartar</button>
          </div>
        )}
        {order.includes('undo') && (
          <div key={undoCycle} role="alert" className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-lg animate-toast-in">
            <p className="text-sm font-bold text-slate-900">Registro Eliminado</p>
            <button type="button" onClick={() => window.alert('Presionaste: Deshacer eliminación')} className="rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white">Deshacer ({remaining}s)</button>
          </div>
        )}
        {order.includes('telemetry') && (
          <div role="alert" className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg animate-toast-in">
            <p className="text-sm font-bold text-slate-900">Pico de CPU Detectado: 94.2%</p>
            <p className="font-mono text-xs text-slate-500">Host: ip-10-0-4-88.internal</p>
            <div className="mt-2 flex gap-2">
              <button type="button" onClick={() => window.alert('Presionaste: Abrir Grafana')} className="text-xs font-semibold text-blue-600">Abrir Grafana</button>
              <button type="button" onClick={() => hide('telemetry')} className="text-xs text-slate-400">Descartar</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
`;
