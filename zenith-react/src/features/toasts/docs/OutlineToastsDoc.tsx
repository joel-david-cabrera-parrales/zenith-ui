import { useEffect, useRef, useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones/components';
import { Toast } from '../components';
import type { ToastTone } from '../components';
import { OUTLINE_TOASTS_HTML, OUTLINE_TOASTS_TSX } from '../snippets';

const ITEMS: { tone: ToastTone; title: string; message: string; meta: string; action: string }[] = [
  { tone: 'success', title: 'Configuración', message: 'Cambios guardados con éxito', meta: 'Auto: 5.0s', action: 'Ver registro' },
  { tone: 'error', title: 'PostgreSQL', message: 'Fallo de conexión crítico', meta: 'PORT 5432 ERR', action: 'Reintentar ahora' },
  { tone: 'warning', title: 'Capacidad', message: 'Cuota de almacenamiento al 85%', meta: 'QUOTA_WARN', action: 'Aumentar límite' },
  { tone: 'info', title: 'Distribución', message: 'Nueva versión v2.4.2 disponible', meta: 'RELEASE.LATEST', action: 'Detalles' },
  { tone: 'neutral', title: 'Inventario', message: 'Elemento archivado temporalmente', meta: 'EXP_24H', action: 'Deshacer (Undo)' },
];

const ITEM_BY_TONE: Record<ToastTone, (typeof ITEMS)[number]> = {
  success: ITEMS[0],
  error: ITEMS[1],
  warning: ITEMS[2],
  info: ITEMS[3],
  neutral: ITEMS[4],
};

const EMPTY_EXITING: Record<ToastTone, boolean> = {
  success: false,
  error: false,
  warning: false,
  info: false,
  neutral: false,
};

export const OutlineToastsDoc = () => {
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
    if (exitTimers.current[tone] !== null) {
      window.clearTimeout(exitTimers.current[tone]);
    }
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
    if (autoTimers.current[tone] !== null) {
      window.clearTimeout(autoTimers.current[tone]);
    }
    setExiting((prev) => ({ ...prev, [tone]: false }));
    setOrder((prev) => [tone, ...prev.filter((t) => t !== tone)]);
    autoTimers.current[tone] = window.setTimeout(() => close(tone), 5000);
  };

  const handleAction = (action: string) => {
    window.alert(`Presionaste: ${action}`);
  };

  return (
    <ComponentDoc
      title="Toasts Outline con acento lateral"
      description="Variantes outline flotantes: aparecen arriba a la derecha con animación de entrada/salida, se auto-ocultan a los 5s y se encolan del más reciente al más antiguo."
      preview={
        <>
          <div className="flex w-full flex-wrap gap-2">
            <Button variant="outline" leadingIcon="check_circle" onClick={() => show('success')}>
              Disparar Éxito
            </Button>
            <Button variant="dangerOutline" leadingIcon="cancel" onClick={() => show('error')}>
              Disparar Error
            </Button>
            <Button variant="outline" leadingIcon="warning" onClick={() => show('warning')}>
              Disparar Aviso
            </Button>
            <Button variant="outline" leadingIcon="info" onClick={() => show('info')}>
              Disparar Info
            </Button>
            <Button variant="ghost" leadingIcon="inventory_2" onClick={() => show('neutral')}>
              Disparar Undo
            </Button>
          </div>
          <div className="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3 md:w-96">
            {order.map((tone) => {
              const item = ITEM_BY_TONE[tone];
              return (
                <Toast
                  key={tone}
                  mode="outline"
                  tone={item.tone}
                  title={item.title}
                  message={item.message}
                  meta={item.meta}
                  actionLabel={item.action}
                  exiting={exiting[tone]}
                  onClose={() => close(tone)}
                  onAction={() => handleAction(item.action)}
                />
              );
            })}
          </div>
        </>
      }
      htmlCode={OUTLINE_TOASTS_HTML}
      jsxCode={OUTLINE_TOASTS_TSX}
    />
  );
};
