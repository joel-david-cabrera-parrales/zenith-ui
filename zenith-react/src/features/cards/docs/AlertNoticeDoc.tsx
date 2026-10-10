import { ComponentDoc } from '../../../shared/components/doc';
import { AlertNotice } from '../components';
import { ALERT_NOTICE_HTML, ALERT_NOTICE_TSX } from '../snippets';
import type { MaxWidth } from '@/shared/components/doc';

interface AlertNoticeDocProps {
  maxWidth?: MaxWidth;
}

export const AlertNoticeDoc = ({ maxWidth = '4xl' }: AlertNoticeDocProps) => {
  return (
    <ComponentDoc
      title="Aviso de sistema descartable"
      description="Card 4.3 de notificación: ventana de mantenimiento, regiones impactadas y acciones (se puede descartar y restaurar)."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <AlertNotice />
          </div>
        </div>
      }
      htmlCode={ALERT_NOTICE_HTML}
      jsxCode={ALERT_NOTICE_TSX}
      maxWidth={maxWidth}
    />
  );
};