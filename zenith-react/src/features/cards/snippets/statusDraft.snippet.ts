export const STATUS_DRAFT_HTML = `
<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div>
    <div class="flex items-center justify-between mb-3">
      <span
        class="px-2 py-0.5 rounded-full bg-slate-50 text-slate-500 font-mono text-[9px] font-semibold border border-slate-200"
        >DRAFT</span
      >
      <span class="font-mono text-[9px] text-slate-500">REV #04</span>
    </div>
    <h3 class="text-sm font-semibold text-slate-900 mb-1.5">Observability Pipeline v3</h3>
    <p class="text-xs text-slate-500 mb-4 leading-relaxed">Specification proposal for tracing collector ingress.</p>
  </div>
  <div class="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
    <span>AUTHOR: @alec</span>
    <span>MODIFIED 4H AGO</span>
  </div>
</div>
`;

export const STATUS_DRAFT_TSX = `
export const StatusDraftCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-2 py-0.5 rounded-full bg-slate-50 text-slate-500 font-mono text-[9px] font-semibold border border-slate-200">
            DRAFT
          </span>
          <span className="font-mono text-[9px] text-slate-500">REV #04</span>
        </div>
        <h3 className="text-sm font-semibold text-slate-900 mb-1.5">Observability Pipeline v3</h3>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed">
          Specification proposal for tracing collector ingress.
        </p>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>AUTHOR: @alec</span>
        <span>MODIFIED 4H AGO</span>
      </div>
    </div>
  );
};
`;
