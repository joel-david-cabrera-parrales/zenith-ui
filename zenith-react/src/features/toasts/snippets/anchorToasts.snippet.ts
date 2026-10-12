export const ANCHOR_TOASTS_HTML = `
<div class="flex w-full flex-col gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 p-4">
  <div class="flex items-center justify-between">
    <button type="button" class="rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs">Top-Left</button>
    <button type="button" class="rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs">Top-Center</button>
    <button type="button" class="rounded-lg bg-blue-600 px-3 py-1.5 font-mono text-xs text-white">Top-Right (Default)</button>
  </div>
  <p class="text-center font-mono text-xs font-bold uppercase text-slate-400">[Application Canvas Viewport]</p>
  <div class="flex items-center justify-between">
    <button type="button" class="rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs">Bottom-Left</button>
    <button type="button" class="rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs">Bottom-Center</button>
    <button type="button" class="rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs">Bottom-Right</button>
  </div>
</div>
<div class="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3">
  <div role="status" class="rounded-xl border border-blue-200 bg-blue-50 p-3 animate-toast-in">
    <p class="text-sm font-bold text-slate-900">Toast en top-right</p>
    <p class="mt-0.5 text-xs text-slate-500">Ejemplar #2 — auto-dismiss de 5s.</p>
  </div>
  <div role="status" class="rounded-xl border border-blue-200 bg-blue-50 p-3 animate-toast-in">
    <p class="text-sm font-bold text-slate-900">Toast en top-right</p>
    <p class="mt-0.5 text-xs text-slate-500">Ejemplar #1 — auto-dismiss de 5s.</p>
  </div>
</div>
`;

export const ANCHOR_TOASTS_TSX = `
import { useEffect, useRef, useState } from 'react';

type Anchor = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

const POSITIONS: Record<Anchor, string> = {
  'top-left': 'fixed top-4 left-4 z-50 flex w-80 flex-col gap-3',
  'top-center': 'fixed top-4 left-1/2 z-50 flex w-80 -translate-x-1/2 flex-col gap-3',
  'top-right': 'fixed top-4 right-4 z-50 flex w-80 flex-col gap-3',
  'bottom-left': 'fixed bottom-4 left-4 z-50 flex w-80 flex-col gap-3',
  'bottom-center': 'fixed bottom-4 left-1/2 z-50 flex w-80 -translate-x-1/2 flex-col gap-3',
  'bottom-right': 'fixed right-4 bottom-4 z-50 flex w-80 flex-col gap-3',
};

const ANCHORS: Anchor[] = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];

interface StackItem {
  id: number;
  anchor: Anchor;
}

export const AnchorToasts = () => {
  const [stack, setStack] = useState<StackItem[]>([{ id: 1, anchor: 'top-right' }]);
  const nextId = useRef(2);
  const autoTimers = useRef<Record<number, number | null>>({ 1: null });

  useEffect(() => {
    autoTimers.current[1] = window.setTimeout(() => {
      setStack((prev) => prev.filter((item) => item.id !== 1));
    }, 5000);
    const timers = autoTimers.current;
    return () => {
      Object.values(timers).forEach((timer) => {
        if (timer !== null) window.clearTimeout(timer);
      });
    };
  }, []);

  const dismiss = (id: number) => {
    const timer = autoTimers.current[id];
    if (timer !== null && timer !== undefined) {
      window.clearTimeout(timer);
      autoTimers.current[id] = null;
    }
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  const select = (position: Anchor) => {
    const id = nextId.current++;
    setStack((prev) => [{ id, anchor: position }, ...prev].slice(0, 4));
    autoTimers.current[id] = window.setTimeout(() => dismiss(id), 5000);
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex w-full flex-col gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 p-4">
        <div className="flex items-center justify-between">
          {ANCHORS.slice(0, 3).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => select(id)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs"
            >
              {id}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          {ANCHORS.slice(3).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => select(id)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-mono text-xs"
            >
              {id}
            </button>
          ))}
        </div>
      </div>
      {ANCHORS.map((position) => {
        const items = stack.filter((item) => item.anchor === position);
        if (items.length === 0) return null;
        return (
          <div key={position} className={POSITIONS[position]}>
            {items.map((item) => (
              <div key={item.id} role="status" className="rounded-xl border border-blue-200 bg-blue-50 p-3 animate-toast-in">
                <p className="text-sm font-bold text-slate-900">Toast en {position}</p>
                <p className="mt-0.5 text-xs text-slate-500">Ejemplar #{item.id} — auto-dismiss de 5s.</p>
                <button type="button" onClick={() => dismiss(item.id)} className="mt-1 text-xs font-semibold text-blue-600">Entendido</button>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
`;
