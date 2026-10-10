import { ComponentDoc } from '../../../shared/components/doc';
import { QuickActions } from '../components';
import { QUICK_ACTIONS_HTML, QUICK_ACTIONS_TSX } from '../snippets';

export const QuickActionsDoc = () => {
  return (
    <ComponentDoc
      title="Acciones rápidas"
      description="Card 6.5 de atajos: dos quick-actions compactas con shortcut y pie de command bar."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <QuickActions />
          </div>
        </div>
      }
      htmlCode={QUICK_ACTIONS_HTML}
      jsxCode={QUICK_ACTIONS_TSX}
    />
  );
}
