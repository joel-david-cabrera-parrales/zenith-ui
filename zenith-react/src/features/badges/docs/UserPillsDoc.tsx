import { ComponentDoc } from '../../../shared/components/doc';
import { UserPill } from '../components';
import { USER_PILLS_HTML, USER_PILLS_TSX } from '../snippets';

export const UserPillsDoc = () => {
  return (
    <ComponentDoc
      title="Píldoras de usuario con avatar"
      description="Badges ricos de SEC_03 con avatar de iniciales, indicador online y variante bot. Uno al lado del otro, sin tabla."
      preview={
        <div className="flex flex-wrap items-center gap-2">
          <UserPill
            name="Valeria R."
            initials="VR"
            avatarTone="primary"
            className="border border-slate-300 bg-white text-slate-700 shadow-sm"
          />
          <UserPill
            name="DevOps Lead"
            initials="DL"
            avatarTone="success"
            className="border border-slate-300 bg-white text-slate-700 shadow-sm"
          />
          <UserPill name="K. Tanaka" online className="bg-slate-100 text-slate-600" />
          <UserPill
            name="Bot Agent #9"
            icon="smart_toy"
            className="border border-blue-500/30 bg-blue-100 text-blue-700"
          />
        </div>
      }
      htmlCode={USER_PILLS_HTML}
      jsxCode={USER_PILLS_TSX}
    />
  );
};
