export const THUMBNAIL_TAGS_HTML = `<div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
  <div>
    <div class="aspect-video w-full relative bg-gradient-to-br from-slate-700 via-blue-900 to-slate-900 flex items-center justify-center">
      <span class="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-white/90 text-slate-900 font-mono text-[9px] font-medium">GUIDE</span>
    </div>
    <div class="p-4">
      <div class="flex flex-wrap gap-1.5 mb-2">
        <span class="px-2 py-0.5 rounded bg-slate-100 text-blue-600 font-mono text-[9px]">Security</span>
        <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-mono text-[9px]">IAM</span>
      </div>
      <h3 class="text-sm font-semibold text-slate-900 mb-1.5 leading-snug">Configuring Mutual TLS for Microservices</h3>
      <p class="text-xs text-slate-500">Step-by-step cryptographic setup for pod-to-pod mesh networking.</p>
    </div>
  </div>
  <div class="p-4 pt-0">
    <div class="pt-3 border-t border-slate-200 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-[9px] font-bold">MR</div>
        <span class="text-xs text-slate-900 font-medium">M. Rostova</span>
      </div>
      <button class="text-slate-400 p-1">bookmark</button>
    </div>
  </div>
</div>`;

export const THUMBNAIL_TAGS_TSX = `export const ThumbnailTagsCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
      <div>
        <div className="aspect-video w-full relative bg-gradient-to-br from-slate-700 via-blue-900 to-slate-900 flex items-center justify-center">
          <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-white/90 text-slate-900 font-mono text-[9px] font-medium">GUIDE</span>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-1.5 mb-2">
            <span className="px-2 py-0.5 rounded bg-slate-100 text-blue-600 font-mono text-[9px]">Security</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-mono text-[9px]">IAM</span>
          </div>
          <h3 className="text-sm font-semibold text-slate-900 mb-1.5 leading-snug">Configuring Mutual TLS for Microservices</h3>
          <p className="text-xs text-slate-500">Step-by-step cryptographic setup for pod-to-pod mesh networking.</p>
        </div>
      </div>
      <div className="p-4 pt-0">
        <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-[9px] font-bold">MR</div>
            <span className="text-xs text-slate-900 font-medium">M. Rostova</span>
          </div>
          <button className="text-slate-400 p-1">bookmark</button>
        </div>
      </div>
    </div>
  );
};`;
