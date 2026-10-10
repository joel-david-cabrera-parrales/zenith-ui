export const TESTIMONIAL_HTML = `<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div>
    <div class="flex items-center justify-between mb-3">
      <div aria-label="5 de 5 estrellas">★★★★★</div>
    </div>
    <p class="text-sm text-slate-900 italic mb-4 leading-relaxed">"Migrating our payment ingestion cluster to Zenith reduced our P99 latency from 140ms down to 18ms."</p>
  </div>
  <div class="pt-3 border-t border-slate-200 flex items-center gap-3">
    <div class="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">AP</div>
    <div>
      <span class="block text-sm font-semibold text-slate-900">Arthur Pendelton</span>
      <span class="block font-mono text-[9px] text-slate-500">VP Infrastructure @ FinEdge</span>
    </div>
  </div>
</div>`;

export const TESTIMONIAL_TSX = `export const TestimonialCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div aria-label="5 de 5 estrellas">★★★★★</div>
        </div>
        <p className="text-sm text-slate-900 italic mb-4 leading-relaxed">"Migrating our payment ingestion cluster to Zenith reduced our P99 latency from 140ms down to 18ms."</p>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">AP</div>
        <div>
          <span className="block text-sm font-semibold text-slate-900">Arthur Pendelton</span>
          <span className="block font-mono text-[9px] text-slate-500">VP Infrastructure @ FinEdge</span>
        </div>
      </div>
    </div>
  );
};`;
