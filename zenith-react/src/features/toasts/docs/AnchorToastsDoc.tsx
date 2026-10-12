import { useEffect, useRef, useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones/components';
import { AnchorSimulator } from '../components/AnchorSimulator';
import type { AnchorPosition } from '../components/AnchorSimulator';
import { Toast } from '../components';
import { ANCHOR_TOASTS_HTML, ANCHOR_TOASTS_TSX } from '../snippets';

const POSITION_CLASSES: Record<AnchorPosition, string> = {
  'top-left': 'fixed top-4 left-4 z-50 flex w-80 flex-col gap-3',
  'top-center': 'fixed top-4 left-1/2 z-50 flex w-80 -translate-x-1/2 flex-col gap-3',
  'top-right': 'fixed top-4 right-4 z-50 flex w-80 flex-col gap-3 md:w-96',
  'bottom-left': 'fixed bottom-4 left-4 z-50 flex w-80 flex-col gap-3',
  'bottom-center': 'fixed bottom-4 left-1/2 z-50 flex w-80 -translate-x-1/2 flex-col gap-3',
  'bottom-right': 'fixed right-4 bottom-4 z-50 flex w-80 flex-col gap-3',
};

const ANCHORS: AnchorPosition[] = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

interface StackItem {
  id: number;
  anchor: AnchorPosition;
  exiting: boolean;
}

const MAX_VISIBLE = 4;

export const AnchorToastsDoc = () => {
  const [stack, setStack] = useState<StackItem[]>([]);
  const nextId = useRef(1);
  const autoTimers = useRef<Record<number, number | null>>({});
  const exitTimers = useRef<Record<number, number | null>>({});
  const stackRef = useRef<StackItem[]>([]);
  const selectRef = useRef<(position: AnchorPosition) => void>(() => {});

  const syncStack = (next: StackItem[]) => {
    stackRef.current = next;
    setStack(next);
  };

  const dismiss = (id: number) => {
    if (autoTimers.current[id] !== null && autoTimers.current[id] !== undefined) {
      window.clearTimeout(autoTimers.current[id]);
      autoTimers.current[id] = null;
    }
    syncStack(stackRef.current.map((item) => (item.id === id ? { ...item, exiting: true } : item)));
    if (exitTimers.current[id] !== null && exitTimers.current[id] !== undefined) {
      window.clearTimeout(exitTimers.current[id]);
    }
    exitTimers.current[id] = window.setTimeout(() => {
      syncStack(stackRef.current.filter((item) => item.id !== id));
      exitTimers.current[id] = null;
    }, 200);
  };

  const dismissRef = useRef(dismiss);

  useEffect(() => {
    dismissRef.current = dismiss;
  });

  const select = (position: AnchorPosition) => {
    const id = nextId.current++;
    const dropped = stackRef.current.length >= MAX_VISIBLE ? [stackRef.current[stackRef.current.length - 1]] : [];
    dropped.forEach((item) => {
      const auto = autoTimers.current[item.id];
      if (auto !== null && auto !== undefined) {
        window.clearTimeout(auto);
        autoTimers.current[item.id] = null;
      }
      const exit = exitTimers.current[item.id];
      if (exit !== null && exit !== undefined) {
        window.clearTimeout(exit);
        exitTimers.current[item.id] = null;
      }
    });
    syncStack([{ id, anchor: position, exiting: false }, ...stackRef.current].slice(0, MAX_VISIBLE));
    autoTimers.current[id] = window.setTimeout(() => dismissRef.current(id), 5000);
  };

  useEffect(() => {
    selectRef.current = select;
  });

  useEffect(() => {
    const demo = window.setTimeout(() => selectRef.current('top-right'), 350);
    const auto = autoTimers.current;
    const exits = exitTimers.current;
    return () => {
      window.clearTimeout(demo);
      Object.values(auto).forEach((timer) => {
        if (timer !== null) window.clearTimeout(timer);
      });
      Object.values(exits).forEach((timer) => {
        if (timer !== null) window.clearTimeout(timer);
      });
    };
  }, []);

  const clearAll = () => {
    Object.values(autoTimers.current).forEach((timer) => {
      if (timer !== null) window.clearTimeout(timer);
    });
    Object.values(exitTimers.current).forEach((timer) => {
      if (timer !== null) window.clearTimeout(timer);
    });
    autoTimers.current = {};
    exitTimers.current = {};
    syncStack([]);
  };

  const activeAnchor = stack.length > 0 ? stack[0].anchor : null;

  return (
    <ComponentDoc
      title="Anclajes y apilamiento"
      description="Matriz de 6 anclajes canónicos: cada botón dispara un toast real flotante en esa región (auto-dismiss 5s). Repetir el mismo botón apila otro ejemplar encima, del más reciente al más antiguo (máx. 4)."
      preview={
        <div className="w-full space-y-4">
          <AnchorSimulator active={activeAnchor} onAnchorSelect={select} />
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-slate-500">APILADOS: {stack.length}/{MAX_VISIBLE}</span>
            <Button variant="ghost" leadingIcon="delete_sweep" onClick={clearAll}>
              Limpiar
            </Button>
          </div>
          {ANCHORS.map((position) => {
            const items = stack.filter((item) => item.anchor === position);
            if (items.length === 0) return null;
            return (
              <div key={position} className={POSITION_CLASSES[position]}>
                {items.map((item) => (
                  <Toast
                    key={item.id}
                    mode="soft"
                    tone="info"
                    title={`Toast en ${position}`}
                    message={`Ejemplar #${item.id} — auto-dismiss de 5s.`}
                    meta={`${position} · N=${items.length}`}
                    actionLabel="Entendido"
                    exiting={item.exiting}
                    onClose={() => dismiss(item.id)}
                    onAction={() => window.alert(`Presionaste: Entendido (${position} #${item.id})`)}
                  />
                ))}
              </div>
            );
          })}
        </div>
      }
      htmlCode={ANCHOR_TOASTS_HTML}
      jsxCode={ANCHOR_TOASTS_TSX}
    />
  );
};
