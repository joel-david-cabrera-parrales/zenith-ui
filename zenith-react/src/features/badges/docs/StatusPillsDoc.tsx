import { ComponentDoc } from '../../../shared/components/doc';
import { StatusPill } from '../components';
import type { StatusKind } from '../components';
import { STATUS_PILLS_HTML, STATUS_PILLS_TSX } from '../snippets';

const STATUSES: StatusKind[] = ['online', 'degraded', 'offline', 'maintenance', 'standby'];

export const StatusPillsDoc = () => {
  return (
    <ComponentDoc
      title="Indicadores de estado — Dot pulse"
      description="Píldoras de telemetría de SEC_02 con punto vivo (animate-ping en Online y Offline): forma pill redondeada y forma técnica con códigos de sistema. Una al lado de otra, sin tabla."
      preview={
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {STATUSES.map((status) => (
              <StatusPill key={status} status={status} shape="pill" />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {STATUSES.map((status) => (
              <StatusPill key={status} status={status} shape="tech" />
            ))}
          </div>
        </div>
      }
      htmlCode={STATUS_PILLS_HTML}
      jsxCode={STATUS_PILLS_TSX}
    />
  );
};
