export const MEMBER_CARD_HTML = `
<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div>
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm flex items-center justify-center border border-blue-200"
        >
          MR
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-900">Marcus Reed</h3>
          <span class="font-mono text-[9px] text-slate-500 block">SecOps Lead // Identity</span>
        </div>
      </div>
      <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
    </div>
    <p class="text-xs text-slate-500 mb-4">Admin permissions across 4 cluster environments.</p>
  </div>
  <div class="pt-3 border-t border-slate-200 flex items-center justify-between">
    <span class="font-mono text-[9px] text-slate-500">2FA ENABLED</span>
    <button class="px-3 py-1 rounded bg-slate-50 text-slate-900 text-sm font-semibold border border-slate-200">
      Manage Role
    </button>
  </div>
</div>
`;

export const MEMBER_CARD_TSX = `
export const MemberCardItem = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm flex items-center justify-center border border-blue-200">
              MR
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Marcus Reed</h3>
              <span className="font-mono text-[9px] text-slate-500 block">SecOps Lead // Identity</span>
            </div>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
        </div>
        <p className="text-xs text-slate-500 mb-4">Admin permissions across 4 cluster environments.</p>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
        <span className="font-mono text-[9px] text-slate-500">2FA ENABLED</span>
        <button className="px-3 py-1 rounded bg-slate-50 text-slate-900 text-sm font-semibold border border-slate-200">
          Manage Role
        </button>
      </div>
    </div>
  );
};
`;
