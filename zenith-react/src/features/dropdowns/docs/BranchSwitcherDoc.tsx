import { ComponentDoc } from '../../../shared/components/doc';
import { BranchSwitcher } from '../components/BranchSwitcher';
import { BRANCH_SWITCHER_HTML, BRANCH_SWITCHER_TSX } from '../snippets/branchSwitcher.snippet';

export const BranchSwitcherDoc = () => {
  const handleAction = (id: string) => {
    const labels: Record<string, string> = {
      main: 'Rama main (DEFAULT)',
      'feat-dropdown': 'Rama feat/dropdown-popover-matrix (2 ahead)',
      'fix-zindex': 'Rama fix/zindex-elevation-stack (1 behind)',
      'create-branch': 'Crear Nueva Rama desde Main',
    };
    window.alert(`Presionaste: ${labels[id] ?? id}`);
  };

  return (
    <ComponentDoc
      title="Selector de rama y workspace"
      description="Selector Git con árbol de ramas (VAR_03.3): trigger fork_right main e4b7c19 y panel flotante con búsqueda filtrable, tabs Branches(12)/Tags(48), 3 ramas con metadatos y acción crear rama. La selección persiste con estado. Flota sobre el contenido (absolute, no empuja el layout). Cierra con Escape, clic fuera o al crear rama, con animación de 200ms. Cada acción lanza un alert nativo."
      preview={
        <div className="min-h-[560px] w-full max-w-sm">
          <BranchSwitcher onAction={handleAction} />
        </div>
      }
      htmlCode={BRANCH_SWITCHER_HTML}
      jsxCode={BRANCH_SWITCHER_TSX}
    />
  );
};
