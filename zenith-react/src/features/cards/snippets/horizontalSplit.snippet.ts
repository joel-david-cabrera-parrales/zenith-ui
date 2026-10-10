export const HORIZONTAL_SPLIT_HTML = `<div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row">
  <div class="sm:w-2/5 min-h-[180px] relative bg-gradient-to-br from-blue-100 via-slate-100 to-slate-200 flex items-center justify-center">
    <span class="absolute top-3 left-3 px-2 py-0.5 rounded bg-white/90 text-blue-600 font-mono text-[9px] font-semibold border border-slate-200">RELEASE_LOG</span>
  </div>
  <div class="p-5 sm:w-3/5 flex flex-col justify-between">
    <div>
      <div class="mb-2 font-mono text-[9px] text-slate-500">V2.4.0 ENGINE UPDATE • OCT 28, 2024</div>
      <h3 class="text-sm font-semibold text-slate-900 mb-2 leading-snug">Kernel Memory Optimization &amp; Sub-Millisecond RPC Routing</h3>
      <p class="text-xs text-slate-500 mb-4">Redesigned zero-copy ring buffers and eBPF observability filters.</p>
    </div>
    <div class="flex items-center justify-between pt-3 border-t border-slate-200">
      <div class="flex items-center gap-2">
        <span class="px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-mono text-[9px]">#NETWORKING</span>
        <span class="px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-mono text-[9px]">#EBPF</span>
      </div>
      <a href="#" class="text-sm font-semibold text-blue-600">Read Spec</a>
    </div>
  </div>
</div>`;

export const HORIZONTAL_SPLIT_TSX = `export const HorizontalSplitCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row">
      <div className="sm:w-2/5 min-h-[180px] relative bg-gradient-to-br from-blue-100 via-slate-100 to-slate-200 flex items-center justify-center">
        <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-white/90 text-blue-600 font-mono text-[9px] font-semibold border border-slate-200">RELEASE_LOG</span>
      </div>
      <div className="p-5 sm:w-3/5 flex flex-col justify-between">
        <div>
          <div className="mb-2 font-mono text-[9px] text-slate-500">V2.4.0 ENGINE UPDATE • OCT 28, 2024</div>
          <h3 className="text-sm font-semibold text-slate-900 mb-2 leading-snug">Kernel Memory Optimization &amp; Sub-Millisecond RPC Routing</h3>
          <p className="text-xs text-slate-500 mb-4">Redesigned zero-copy ring buffers and eBPF observability filters.</p>
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-mono text-[9px]">#NETWORKING</span>
            <span className="px-2 py-0.5 rounded bg-slate-50 text-slate-500 font-mono text-[9px]">#EBPF</span>
          </div>
          <a href="#" className="text-sm font-semibold text-blue-600">Read Spec</a>
        </div>
      </div>
    </div>
  );
};`;
