export const USER_PILLS_HTML = `
<div class="flex flex-wrap items-center gap-2">
  <span class="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white py-0.5 pl-1 pr-2.5 text-xs font-medium text-slate-700 shadow-sm">
    <span class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">VR</span>
    <span>Valeria R.</span>
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white py-0.5 pl-1 pr-2.5 text-xs font-medium text-slate-700 shadow-sm">
    <span class="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">DL</span>
    <span>DevOps Lead</span>
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 py-0.5 pl-1.5 pr-2.5 text-xs font-medium text-slate-600">
    <span class="relative flex h-2 w-2">
      <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
    </span>
    <span>K. Tanaka</span>
  </span>
  <span class="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-100 py-0.5 pl-1 pr-2.5 text-xs font-medium text-blue-700">
    <span class="material-symbols-outlined text-[15px]">smart_toy</span>
    <span>Bot Agent #9</span>
  </span>
</div>
`;

export const USER_PILLS_TSX = `
export const UserPills = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white py-0.5 pl-1 pr-2.5 text-xs font-medium text-slate-700 shadow-sm">
        <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">VR</span>
        <span>Valeria R.</span>
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white py-0.5 pl-1 pr-2.5 text-xs font-medium text-slate-700 shadow-sm">
        <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">DL</span>
        <span>DevOps Lead</span>
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 py-0.5 pl-1.5 pr-2.5 text-xs font-medium text-slate-600">
        <span className="relative ml-0.5 flex h-2 w-2">
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span>K. Tanaka</span>
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-100 py-0.5 pl-1 pr-2.5 text-xs font-medium text-blue-700">
        <span aria-hidden="true" className="material-symbols-outlined text-[15px]">smart_toy</span>
        <span>Bot Agent #9</span>
      </span>
    </div>
  );
};
`;
