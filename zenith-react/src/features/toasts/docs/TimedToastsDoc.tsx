import { useEffect, useRef, useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones/components';
import { BackgroundTaskToast, CountdownToast, TimedToast } from '../components';
import { TIMED_TOASTS_HTML, TIMED_TOASTS_TSX } from '../snippets';

const TIMED_DURATION = 4000;

type TimedKey = 'timed' | 'countdown' | 'task';

const EMPTY_EXITING: Record<TimedKey, boolean> = {
  timed: false,
  countdown: false,
  task: false,
};

export const TimedToastsDoc = () => {
  const [order, setOrder] = useState<TimedKey[]>([]);
  const [exiting, setExiting] = useState<Record<TimedKey, boolean>>(EMPTY_EXITING);
  const [countdownCycle, setCountdownCycle] = useState(0);
  const [taskCycle, setTaskCycle] = useState(0);
  const autoTimers = useRef<Record<TimedKey, number | null>>({
    timed: null,
    countdown: null,
    task: null,
  });
  const exitTimers = useRef<Record<TimedKey, number | null>>({
    timed: null,
    countdown: null,
    task: null,
  });

  useEffect(() => {
    const auto = autoTimers.current;
    const exits = exitTimers.current;
    return () => {
      (Object.keys(auto) as TimedKey[]).forEach((key) => {
        if (auto[key] !== null) window.clearTimeout(auto[key]);
        if (exits[key] !== null) window.clearTimeout(exits[key]);
      });
    };
  }, []);

  const close = (key: TimedKey) => {
    if (autoTimers.current[key] !== null) {
      window.clearTimeout(autoTimers.current[key]);
      autoTimers.current[key] = null;
    }
    setExiting((prev) => ({ ...prev, [key]: true }));
    if (exitTimers.current[key] !== null) window.clearTimeout(exitTimers.current[key]);
    exitTimers.current[key] = window.setTimeout(() => {
      setOrder((prev) => prev.filter((k) => k !== key));
      setExiting((prev) => ({ ...prev, [key]: false }));
      exitTimers.current[key] = null;
    }, 200);
  };

  const show = (key: TimedKey, duration?: number) => {
    if (exitTimers.current[key] !== null) {
      window.clearTimeout(exitTimers.current[key]);
      exitTimers.current[key] = null;
    }
    if (autoTimers.current[key] !== null) window.clearTimeout(autoTimers.current[key]);
    setExiting((prev) => ({ ...prev, [key]: false }));
    if (key === 'countdown') setCountdownCycle((prev) => prev + 1);
    if (key === 'task') setTaskCycle((prev) => prev + 1);
    setOrder((prev) => [key, ...prev.filter((k) => k !== key)]);
    if (duration !== undefined) {
      autoTimers.current[key] = window.setTimeout(() => close(key), duration);
    }
  };

  const handleUndo = (label: string) => {
    window.alert(`Presionaste: ${label}`);
  };

  return (
    <ComponentDoc
      title="Toasts temporizados — progreso y contadores"
      description="Barra lineal con auto-dismiss 4s, cuenta atrás circular con Deshacer y tarea en segundo plano con progreso simulado y Cancelar. Cada demo dispara su toast flotante arriba a la derecha, encolados del más reciente al más antiguo."
      preview={
        <>
          <div className="flex w-full flex-wrap gap-2">
            <Button variant="primary" leadingIcon="timer" onClick={() => show('timed', TIMED_DURATION)}>
              Disparar Sincronización
            </Button>
            <Button variant="subtle" leadingIcon="undo" onClick={() => show('countdown')}>
              Disparar Deshacer
            </Button>
            <Button variant="outline" leadingIcon="cloud_upload" onClick={() => show('task')}>
              Disparar Exportación
            </Button>
          </div>
          <div className="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3 md:w-96">
            {order.map((key) => {
              if (key === 'timed') {
                return (
                  <TimedToast
                    key={key}
                    title="Sincronización Completada"
                    message="384 nodos de telemetría actualizados en el cluster EU-Central-1."
                    duration={TIMED_DURATION}
                    exiting={exiting.timed}
                    onClose={() => close('timed')}
                  />
                );
              }
              if (key === 'countdown') {
                return (
                  <CountdownToast
                    key={`countdown-${countdownCycle}`}
                    seconds={4}
                    exiting={exiting.countdown}
                    onUndo={() => handleUndo('Deshacer')}
                    onClose={() => close('countdown')}
                  />
                );
              }
              return (
                <BackgroundTaskToast
                  key={`task-${taskCycle}`}
                  fileName="reporte CSV"
                  exiting={exiting.task}
                  onCancel={() => close('task')}
                  onClose={() => close('task')}
                />
              );
            })}
          </div>
        </>
      }
      htmlCode={TIMED_TOASTS_HTML}
      jsxCode={TIMED_TOASTS_TSX}
    />
  );
};
