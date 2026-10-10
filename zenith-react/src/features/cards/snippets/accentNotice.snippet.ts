export const ACCENT_NOTICE_HTML = `
<div
  class="bg-white border border-slate-200 border-l-4 border-l-blue-600 rounded-xl p-5 shadow-sm flex flex-col justify-between"
>
  <div>
    <div class="flex items-center justify-between mb-3">
      <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-600 font-mono text-[9px] font-bold">NOTICE // AUDIT</span>
    </div>
    <h3 class="text-sm font-semibold text-slate-900 mb-1.5">SOC2 Compliance Attestation</h3>
    <p class="text-xs text-slate-500 mb-4 leading-relaxed">Automated evidence collection cycle completed for Q4.</p>
  </div>
  <div class="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
    <span>PERIOD: 2024-Q4</span>
    <a href="#" class="text-blue-600 font-semibold">VIEW AUDIT &gt;</a>
  </div>
</div>
`;

export const ACCENT_NOTICE_TSX = `
export const AccentNoticeCard = () => {
  return (
    <div className="bg-white border border-slate-200 border-l-4 border-l-blue-600 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-600 font-mono text-[9px] font-bold">
            NOTICE // AUDIT
          </span>
        </div>
        <h3 className="text-sm font-semibold text-slate-900 mb-1.5">SOC2 Compliance Attestation</h3>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed">
          Automated evidence collection cycle completed for Q4.
        </p>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>PERIOD: 2024-Q4</span>
        <a href="#" className="text-blue-600 font-semibold">
          VIEW AUDIT &gt;
        </a>
      </div>
    </div>
  );
};
`;
