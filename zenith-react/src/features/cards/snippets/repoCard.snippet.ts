export const REPO_CARD_HTML = `
<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div>
    <div class="flex items-start justify-between mb-3">
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600 border border-slate-200"
        >
          T
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-900">zenith-ingress-router</h3>
          <span class="font-mono text-[9px] text-slate-500">git: main (v2.8.1)</span>
        </div>
      </div>
      <span
        class="px-2 py-0.5 rounded bg-slate-100 text-emerald-700 font-mono text-[9px] font-semibold border border-slate-200"
        >LIVE</span
      >
    </div>
    <p class="text-sm text-slate-500 mb-4">
      Core Envoy-backed API gateway managing edge SSL termination and rate limiting.
    </p>
  </div>
  <div class="pt-3 border-t border-slate-200 flex items-center justify-between">
    <div class="flex items-center gap-4 font-mono text-[9px] text-slate-500">
      <span>TypeScript</span>
      <span>Updated 2h ago</span>
    </div>
    <button class="text-blue-600 font-mono text-[9px] font-bold">OPEN REPO →</button>
  </div>
</div>
`;

export const REPO_CARD_TSX = `
export const RepoCardItem = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600 border border-slate-200">
              T
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">zenith-ingress-router</h3>
              <span className="font-mono text-[9px] text-slate-500">git: main (v2.8.1)</span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-slate-100 text-emerald-700 font-mono text-[9px] font-semibold border border-slate-200">
            LIVE
          </span>
        </div>
        <p className="text-sm text-slate-500 mb-4">
          Core Envoy-backed API gateway managing edge SSL termination and rate limiting.
        </p>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-4 font-mono text-[9px] text-slate-500">
          <span>TypeScript</span>
          <span>Updated 2h ago</span>
        </div>
        <button className="text-blue-600 font-mono text-[9px] font-bold">OPEN REPO →</button>
      </div>
    </div>
  );
};
`;
