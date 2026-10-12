import { ComponentDoc } from '../../../shared/components/doc';
import { CompactPillsCountdown } from '../components';
import { COMPACT_PILLS_HTML, COMPACT_PILLS_TSX } from '../snippets';

export const CompactPillsDoc = () => (
  <ComponentDoc
    title="Micro-pills compactas"
    description="VAR_04 inline (SEC_02.4): pills de 24–28px para filas de datagrid — pill de sesión con latido y badge ámbar de timeout, ambas con cuenta viva independiente."
    preview={
      <div className="w-full max-w-xl">
        <CompactPillsCountdown />
      </div>
    }
    htmlCode={COMPACT_PILLS_HTML}
    jsxCode={COMPACT_PILLS_TSX}
  />
);
