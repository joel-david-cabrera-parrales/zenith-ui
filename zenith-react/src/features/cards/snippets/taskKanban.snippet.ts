export const TASK_KANBAN_HTML = `<div class="bg-white border border-slate-200 border-l-4 border-l-rose-600 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div>
    <div class="flex items-center justify-between mb-3">
      <span class="px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-mono text-[9px] font-bold">URGENT_P0</span>
    </div>
    <h3 class="text-sm font-semibold text-slate-900 mb-2 leading-snug">Investigate TCP connection drops on node worker-us-e-04</h3>
    <p class="text-xs text-slate-500 mb-4">Buffer exhaustion detected after release v2.3.9 during peak traffic burst.</p>
    <div class="flex items-center gap-2 mb-4">
      <span class="px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-mono text-[9px] border border-slate-200">#INFRA-902</span>
      <span class="px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-mono text-[9px] border border-slate-200">BACKLOG</span>
    </div>
  </div>
  <div class="pt-3 border-t border-slate-200 flex items-center justify-between">
    <div class="flex items-center -space-x-2">
      <div class="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-700 text-[8px] font-bold">JT</div>
      <div class="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-700 text-[8px] font-bold">AK</div>
      <span class="w-6 h-6 rounded-full border-2 border-white bg-slate-200 text-slate-500 font-mono text-[9px] flex items-center justify-center font-bold">+1</span>
    </div>
    <div class="flex items-center gap-3 text-slate-500 font-mono text-[9px]">
      <span>3 adjuntos</span>
      <span>8 comentarios</span>
    </div>
  </div>
</div>`;

export const TASK_KANBAN_TSX = `export const TaskKanbanCard = () => {
  return (
    <div className="bg-white border border-slate-200 border-l-4 border-l-rose-600 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-mono text-[9px] font-bold">URGENT_P0</span>
        </div>
        <h3 className="text-sm font-semibold text-slate-900 mb-2 leading-snug">Investigate TCP connection drops on node worker-us-e-04</h3>
        <p className="text-xs text-slate-500 mb-4">Buffer exhaustion detected after release v2.3.9 during peak traffic burst.</p>
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-mono text-[9px] border border-slate-200">#INFRA-902</span>
          <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-mono text-[9px] border border-slate-200">BACKLOG</span>
        </div>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
        <div className="flex items-center -space-x-2">
          <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-700 text-[8px] font-bold">JT</div>
          <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-700 text-[8px] font-bold">AK</div>
          <span className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 text-slate-500 font-mono text-[9px] flex items-center justify-center font-bold">+1</span>
        </div>
        <div className="flex items-center gap-3 text-slate-500 font-mono text-[9px]">
          <span>3 adjuntos</span>
          <span>8 comentarios</span>
        </div>
      </div>
    </div>
  );
};`;
