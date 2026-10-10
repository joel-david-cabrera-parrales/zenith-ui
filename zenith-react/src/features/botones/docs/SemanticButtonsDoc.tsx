import { ComponentDoc } from '../../../shared/components/doc';
import { Button } from '../components';
import { SEMANTIC_BUTTONS_HTML, SEMANTIC_BUTTONS_TSX } from '../snippets';

export const SemanticButtonsDoc = () => {
  return (
    <ComponentDoc
      title="Semánticos & colores"
      description="Feedback de estado: success, warning, danger e info, en sólido y sutil."
      preview={
        <div className="flex w-full flex-wrap items-center gap-3">
          <Button variant="success" leadingIcon="check_circle">
            Success
          </Button>
          <Button variant="successSubtle">Success Subtle</Button>
          <Button variant="warning" leadingIcon="warning">
            Warning
          </Button>
          <Button variant="warningSubtle">Warning Subtle</Button>
          <Button variant="danger" leadingIcon="delete">
            Danger
          </Button>
          <Button variant="dangerOutline">Danger Outline</Button>
          <Button variant="info" leadingIcon="info">
            Info
          </Button>
        </div>
      }
      htmlCode={SEMANTIC_BUTTONS_HTML}
      jsxCode={SEMANTIC_BUTTONS_TSX}
    />
  );
}
