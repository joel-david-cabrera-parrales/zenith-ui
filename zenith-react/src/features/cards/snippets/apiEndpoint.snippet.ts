export const API_ENDPOINT_HTML = `<div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
  <div>
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center gap-1.5">
        <span class="px-2 py-0.5 rounded bg-slate-100 font-mono text-[9px] font-bold text-blue-600">POST</span>
        <span class="font-mono text-[9px] text-slate-500">/v2/ingest</span>
      </div>
      <span class="px-2 py-0.5 rounded bg-slate-50 text-emerald-700 font-mono text-[9px] font-bold border border-slate-200">200 OK</span>
    </div>
    <p class="text-xs text-slate-500 mb-3">Submit batch events to ingestion broker with idempotency token verification.</p>
    <div class="bg-slate-900 rounded-lg p-3 font-mono text-[9px] text-slate-100 mb-3">
      <div class="text-slate-500">// Payload Header</div>
      <div><span>Authorization:</span> Bearer &lt;key&gt;</div>
      <div><span>X-Event-Batch:</span> 128</div>
      <div>{"sync": true}</div>
    </div>
  </div>
  <div class="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
    <span>AVG_EXEC: 12ms</span>
    <span class="text-blue-600 font-semibold">API_DOCS →</span>
  </div>
</div>`;

export const API_ENDPOINT_TSX = `export const ApiEndpointCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-slate-100 font-mono text-[9px] font-bold text-blue-600">POST</span>
            <span className="font-mono text-[9px] text-slate-500">/v2/ingest</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-slate-50 text-emerald-700 font-mono text-[9px] font-bold border border-slate-200">200 OK</span>
        </div>
        <p className="text-xs text-slate-500 mb-3">Submit batch events to ingestion broker with idempotency token verification.</p>
        <div className="bg-slate-900 rounded-lg p-3 font-mono text-[9px] text-slate-100 mb-3">
          <div className="text-slate-500">// Payload Header</div>
          <div><span>Authorization:</span> Bearer &lt;key&gt;</div>
          <div><span>X-Event-Batch:</span> 128</div>
          <div>{'{"sync": true}'}</div>
        </div>
      </div>
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between font-mono text-[9px] text-slate-500">
        <span>AVG_EXEC: 12ms</span>
        <span className="text-blue-600 font-semibold">API_DOCS →</span>
      </div>
    </div>
  );
};`;
