import { ComponentDoc } from '../../../shared/components/doc';
import { TaskKanban } from '../components';
import { TASK_KANBAN_HTML, TASK_KANBAN_TSX } from '../snippets';
import type { MaxWidth } from '@/shared/components/doc';



interface TaskKanbanDocProps {
  maxWidth?: MaxWidth;
}

export const TaskKanbanDoc = ({ maxWidth = '4xl' }: TaskKanbanDocProps) => {
  return (
    <ComponentDoc
      title="Tarea kanban arrastrable"
      description="Card 4.2 de tarea: prioridad, acento lateral de severidad, tags, stack de asignados y contadores."
      preview={
        <div className="flex w-full justify-center">
          <div className="w-full max-w-md">
            <TaskKanban />
          </div>
        </div>
      }
      htmlCode={TASK_KANBAN_HTML}
      jsxCode={TASK_KANBAN_TSX}
    />
  );
}
