import { useEffect, useRef, useState } from 'react';
import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../../botones/components';
import { ApiKeyToast, MentionToast, TelemetryToast, UndoToast } from '../components';
import { RICH_TOASTS_HTML, RICH_TOASTS_TSX } from '../snippets';

type RichKey = 'mention' | 'apiKey' | 'undo' | 'telemetry';

const EMPTY_EXITING: Record<RichKey, boolean> = {
  mention: false,
  apiKey: false,
  undo: false,
  telemetry: false,
};

export const RichToastsDoc = () => {
  const [order, setOrder] = useState<RichKey[]>([]);
  const [exiting, setExiting] = useState<Record<RichKey, boolean>>(EMPTY_EXITING);
  const [undoCycle, setUndoCycle] = useState(0);
  const exitTimers = useRef<Record<RichKey, number | null>>({
    mention: null,
    apiKey: null,
    undo: null,
    telemetry: null,
  });

  useEffect(() => {
    const exits = exitTimers.current;
    return () => {
      (Object.keys(exits) as RichKey[]).forEach((key) => {
        if (exits[key] !== null) window.clearTimeout(exits[key]);
      });
    };
  }, []);

  const close = (key: RichKey) => {
    setExiting((prev) => ({ ...prev, [key]: true }));
    if (exitTimers.current[key] !== null) window.clearTimeout(exitTimers.current[key]);
    exitTimers.current[key] = window.setTimeout(() => {
      setOrder((prev) => prev.filter((k) => k !== key));
      setExiting((prev) => ({ ...prev, [key]: false }));
      exitTimers.current[key] = null;
    }, 200);
  };

  const show = (key: RichKey) => {
    if (exitTimers.current[key] !== null) {
      window.clearTimeout(exitTimers.current[key]);
      exitTimers.current[key] = null;
    }
    setExiting((prev) => ({ ...prev, [key]: false }));
    if (key === 'undo') setUndoCycle((prev) => prev + 1);
    setOrder((prev) => [key, ...prev.filter((k) => k !== key)]);
  };

  const showAll = () => {
    (Object.keys(EMPTY_EXITING) as RichKey[]).forEach(show);
  };

  const handleAction = (label: string) => {
    window.alert(`Presionaste: ${label}`);
  };

  return (
    <ComponentDoc
      title="Toasts ricos — avatar, token, undo y telemetría"
      description="Mención con respuesta rápida inline, token API con copiar, undo transaccional con cuenta atrás de 10s y alerta de telemetría con sparkline. Cada demo dispara su toast flotante arriba a la derecha."
      preview={
        <>
          <div className="flex w-full flex-wrap gap-2">
            <Button variant="primary" leadingIcon="person" onClick={() => show('mention')}>
              Disparar Mención
            </Button>
            <Button variant="subtle" leadingIcon="key" onClick={() => show('apiKey')}>
              Disparar Token API
            </Button>
            <Button variant="dangerOutline" leadingIcon="undo" onClick={() => show('undo')}>
              Disparar Undo
            </Button>
            <Button variant="outline" leadingIcon="monitoring" onClick={() => show('telemetry')}>
              Disparar Telemetría
            </Button>
            <Button variant="ghost" leadingIcon="refresh" onClick={showAll}>
              Mostrar Todos
            </Button>
          </div>
          <div className="fixed top-4 right-4 z-50 flex w-80 flex-col gap-3 md:w-96">
            {order.map((key) => {
              if (key === 'mention') {
                return (
                  <MentionToast
                    key={key}
                    exiting={exiting.mention}
                    onClose={() => close('mention')}
                    onReply={() => handleAction('Enviar respuesta')}
                  />
                );
              }
              if (key === 'apiKey') {
                return <ApiKeyToast key={key} exiting={exiting.apiKey} onClose={() => close('apiKey')} />;
              }
              if (key === 'undo') {
                return (
                  <UndoToast
                    key={`undo-${undoCycle}`}
                    exiting={exiting.undo}
                    onUndo={() => handleAction('Deshacer eliminación')}
                    onClose={() => close('undo')}
                  />
                );
              }
              return (
                <TelemetryToast
                  key={key}
                  exiting={exiting.telemetry}
                  onOpenGrafana={() => handleAction('Abrir Grafana')}
                  onClose={() => close('telemetry')}
                />
              );
            })}
          </div>
        </>
      }
      htmlCode={RICH_TOASTS_HTML}
      jsxCode={RICH_TOASTS_TSX}
    />
  );
};
