import { useEffect, useRef, useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones/components';
import { Toast } from '../components';
import type { ToastTone } from '../components';
import { PLAYGROUND_HTML, PLAYGROUND_TSX } from '../snippets';

const ITEM_BY_TONE: Record<ToastTone, { title: string; message: string; meta: string; action: string }> = {
  success: { title: 'Guardado Exitoso', message: 'Operación procesada con éxito.', meta: 'Auto: 5.0s', action: 'Ver registro' },
  error: { title: 'Error Crítico', message: 'Fallo de conexión con PostgreSQL.', meta: 'ERR_503', action: 'Reintentar ahora' },
  warning: { title: 'Cuota Elevada', message: 'Cuota de almacenamiento al 85%.', meta: 'Umbral: 80%', action: 'Aumentar límite' },
  info: { title: 'Notificación del Sistema', message: 'Nueva versión v2.4.2 disponible.', meta: 'Kernel 2.4', action: 'Detalles' },
  neutral: { title: 'Elemento Archivado', message: 'Elemento archivado temporalmente.', meta: 'TTL: 30d', action: 'Deshacer (Undo)' },
};

const EMPTY_EXITING: Record<ToastTone, boolean> = {
  success: false,
  error: false,
  warning: false,
  info: false,
  neutral: false,
};

export const PlaygroundDoc = () => {
  const [order, setOrder] = useState<ToastTone[]>([]);
  const [exiting, setExiting] = useState<Record<ToastTone, boolean>>(EMPTY_EXITING);
  const autoTimers = useRef<Record<ToastTone, number | null>>({
    success: null,
    error: null,
    warning: null,
    info: null,
    neutral: null,
  });
  const exitTimers = useRef<Record<ToastTone, number | null>>({
    success: null,
    error: null,
    warning: null,
    info: null,
    neutral: null,
  });

  useEffect(() => {
    const auto = autoTimers.current;
    const exits = exitTimers.current;
    return () => {
      (Object.keys(auto) as ToastTone[]).forEach((tone) => {
        if (auto[tone] !== null) window.clearTimeout(auto[tone]);
        if (exits[tone] !== null) window.clearTimeout(exits[tone]);
      });
    };
  }, []);

  const close = (tone: ToastTone) => {
    if (autoTimers.current[tone] !== null) {
      window.clearTimeout(autoTimers.current[tone]);
      autoTimers.current[tone] = null;
    }
    setExiting((prev) => ({ ...prev, [tone]: true }));
    if (exitTimers.current[tone] !== null) window.clearTimeout(exitTimers.current[tone]);
    exitTimers.current[tone] = window.setTimeout(() => {
      setOrder((prev) => prev.filter((t) => t !== tone));
      setExiting((prev) => ({ ...prev, [tone]: false }));
      exitTimers.current[tone] = null;
    }, 200);
  };

  const show = (tone: ToastTone) => {
    if (exitTimers.current[tone] !== null) {
      window.clearTimeout(exitTimers.current[tone]);
      exitTimers.current[tone] = null;
    }
    if (autoTimers.current[tone] !== null) window.clearTimeout(autoTimers.current[tone]);
    setExiting((prev) => ({ ...prev, [tone]: false }));
    setOrder((prev) => [tone, ...prev.filter((t) => t !== tone)]);
    autoTimers.current[tone] = window.setTimeout(() => close(tone), 5000);
  };

  const clearAll = () => {
    (Object.keys(autoTimers.current) as ToastTone[]).forEach((tone) => {
      if (autoTimers.current[tone] !== null) {
        window.clearTimeout(autoTimers.current[tone]);
        autoTimers.current[tone] = null;
      }
    });
    setOrder([]);
    setExiting(EMPTY_EXITING);
  };

  return (
    <ComponentDoc
      title="Playground — disparo interactivo en vivo"
      description="Panel de prueba: los 5 tonos se inyectan en el viewport superior derecho con cola del más reciente al más antiguo, auto-dismiss 5s y limpieza total."
      preview={
        <>
          <div className="flex w-full flex-wrap items-center gap-2.5">
            <Button variant="success" leadingIcon="check_circle" onClick={() => show('success')}>
              Disparar Éxito
            </Button>
            <Button variant="danger" leadingIcon="cancel" onClick={() => show('error')}>
              Disparar Error Crítico
            </Button>
            <Button variant="warning" leadingIcon="warning" onClick={() => show('warning')}>
              Disparar Advertencia
            </Button>
            <Button variant="info" leadingIcon="info" onClick={() => show('info')}>
              Disparar Sistema / Info
            </Button>
            <Button variant="secondary" leadingIcon="inventory_2" onClick={() => show('neutral')}>
              Disparar Deshacer (Undo)
            </Button>
            <Button variant="dangerOutline" leadingIcon="delete_sweep" onClick={clearAll}>
              Limpiar Todos
            </Button>
          </div>
          <div className="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3 md:w-96">
            {order.map((tone) => {
              const item = ITEM_BY_TONE[tone];
              return (
                <Toast
                  key={tone}
                  mode="soft"
                  tone={tone}
                  title={item.title}
                  message={item.message}
                  meta={item.meta}
                  actionLabel={item.action}
                  exiting={exiting[tone]}
                  onClose={() => close(tone)}
                  onAction={() => window.alert(`Presionaste: ${item.action}`)}
                />
              );
            })}
          </div>
        </>
      }
      htmlCode={PLAYGROUND_HTML}
      jsxCode={PLAYGROUND_TSX}
    />
  );
};
