export const DOC_LINK_HTML = `
<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div>
    <span class="font-mono text-[9px] text-slate-500 uppercase block mb-1">DOCS // QUICKSTART</span>
    <h3 class="text-sm font-semibold text-slate-900 mb-1.5">Environment Variables</h3>
    <p class="text-xs text-slate-500 mb-4 leading-relaxed">
      Configure global secrets and staging environment variables.
    </p>
  </div>
  <div class="pt-3 border-t border-slate-200 flex items-center justify-between">
    <span class="font-mono text-[9px] text-slate-500">3 MIN READ</span>
    <a href="#" class="text-sm font-semibold text-blue-600">Configure →</a>
  </div>
</div>
`;

export const DOC_LINK_TSX = `
export const DocLinkCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <span className="font-mono text-[9px] text-slate-500 uppercase block mb-1">DOCS // QUICKSTART</span>
        <h3 className="text-sm font-semibold text-slate-900 mb-1.5">Environment Variables</h3>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed">
          Configure global secrets and staging environment variables.
        </p>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
        <span className="font-mono text-[9px] text-slate-500">3 MIN READ</span>
        <a href="#" className="text-sm font-semibold text-blue-600">
          Configure →
        </a>
      </div>
    </div>
  );
};
`;
