import type { HTMLAttributes } from 'react';

export interface TaskKanbanProps extends HTMLAttributes<HTMLDivElement> {
  priority?: string;
  title?: string;
  excerpt?: string;
  tags?: string[];
  assignees?: string[];
  extra?: string;
  attachments?: number;
  comments?: number;
}

export const TaskKanban = ({
  priority = 'URGENT_P0',
  title = 'Investigate TCP connection drops on node worker-us-e-04',
  excerpt = 'Buffer exhaustion detected after release v2.3.9 during peak traffic burst.',
  tags = ['#INFRA-902', 'BACKLOG'],
  assignees = ['JT', 'AK'],
  extra = '+1',
  attachments = 3,
  comments = 8,
  className = '',
  ...rest
}: TaskKanbanProps) => {
  return (
    <div
      className={`bg-white border border-slate-200 border-l-4 border-l-rose-600 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between cursor-grab active:cursor-grabbing ${className}`}
      {...rest}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-mono text-[9px] font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
            {priority}
          </span>
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-slate-400 text-[18px]"
          >
            drag_indicator
          </span>
        </div>
        <h3 className="text-sm font-semibold text-slate-900 mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-xs text-slate-500 mb-4">{excerpt}</p>
        <div className="flex items-center gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-mono text-[9px] border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
        <div className="flex items-center -space-x-2">
          {assignees.map((initials) => (
            <div
              key={initials}
              aria-hidden="true"
              className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-700 text-[8px] font-bold"
            >
              {initials}
            </div>
          ))}
          <span className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 text-slate-500 font-mono text-[9px] flex items-center justify-center font-bold">
            {extra}
          </span>
        </div>
        <div className="flex items-center gap-3 text-slate-500 font-mono text-[9px]">
          <span className="flex items-center gap-0.5">
            <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
              attach_file
            </span>
            {attachments}
          </span>
          <span className="flex items-center gap-0.5">
            <span aria-hidden="true" className="material-symbols-outlined text-[14px]">
              chat_bubble_outline
            </span>
            {comments}
          </span>
        </div>
      </div>
    </div>
  );
}
