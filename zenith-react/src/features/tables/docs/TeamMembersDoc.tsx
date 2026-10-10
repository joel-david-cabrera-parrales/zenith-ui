import { ComponentDoc } from '../../../shared/components/doc';
import { TeamMembersTable } from '../components';
import { TEAM_MEMBERS_HTML, TEAM_MEMBERS_TSX } from '../snippets';

export const TeamMembersDoc = () => {
  return (
    <ComponentDoc
      title="Equipo con roles editables"
      description="Tabla simple: avatares, select de rol en línea, toggle activo/inactivo, badge 2FA y última actividad. 2FA y actividad colapsan en móvil."
      preview={
        <div className="w-full">
          <TeamMembersTable />
        </div>
      }
      htmlCode={TEAM_MEMBERS_HTML}
      jsxCode={TEAM_MEMBERS_TSX}
    />
  );
}
