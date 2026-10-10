export const MONO_DATA_HTML = `<div class="space-y-6">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
      <div class="flex items-center justify-between text-xs text-slate-400 font-mono"><span>AVAILABILITY_SLA</span><span class="text-emerald-600 font-bold">+0.02%</span></div>
      <div class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-mono">99.98%</div>
      <p class="text-xs text-slate-500">Sin incidencias en 45 días contiguos.</p>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
      <div class="flex items-center justify-between text-xs text-slate-400 font-mono"><span>ANNUAL_RUN_RATE</span><span class="text-emerald-600 font-bold">+34.2%</span></div>
      <div class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-mono">$148,290.00</div>
      <p class="text-xs text-slate-500">Facturación consolidada.</p>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
      <div class="flex items-center justify-between text-xs text-slate-400 font-mono"><span>LATENCY_P99</span><span class="text-blue-600 font-bold">OPTIMAL</span></div>
      <div class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-mono">11.4 ms</div>
      <p class="text-xs text-slate-500">Medición vía HTTP/3.</p>
    </div>
    <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
      <div class="flex items-center justify-between text-xs text-slate-400 font-mono"><span>PROCESSED_EVENTS</span><span class="text-emerald-600 font-bold">LIVE</span></div>
      <div class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-mono">4.82B</div>
      <p class="text-xs text-slate-500">Ingesta streaming sin drop.</p>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div class="bg-slate-900 rounded-xl border border-slate-800 p-5 text-slate-100 font-mono text-xs sm:text-sm leading-relaxed">
      <p><span class="text-emerald-400">$</span> zenith deployment rollouts --cluster=us-east-prod</p>
      <p class="text-blue-300">==&gt; Handshaking with cluster endpoint (200 OK)</p>
      <p>[2025-05-18T14:40:03Z] <span class="text-emerald-400">OK</span> Health-check passes for 64 / 64 nodes</p>
      <p class="text-emerald-300 font-bold">[SUCCESS] Zero-downtime cutover completed in 412ms</p>
    </div>
    <div class="bg-slate-900 rounded-xl border border-slate-800 p-5 text-slate-100 font-mono text-xs sm:text-sm leading-relaxed">
      <pre>{"cluster_id": "zth-node-9941", "status": "HEALTHY", "concurrency": 18400, "tls_enabled": true}</pre>
    </div>
  </div>
</div>`;

export const MONO_DATA_TSX = `export const MonoDataSpecimen = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono"><span>AVAILABILITY_SLA</span><span className="text-emerald-600 font-bold">+0.02%</span></div>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-mono">99.98%</div>
          <p className="text-xs text-slate-500">Sin incidencias en 45 días contiguos.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono"><span>ANNUAL_RUN_RATE</span><span className="text-emerald-600 font-bold">+34.2%</span></div>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-mono">$148,290.00</div>
          <p className="text-xs text-slate-500">Facturación consolidada.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono"><span>LATENCY_P99</span><span className="text-blue-600 font-bold">OPTIMAL</span></div>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-mono">11.4 ms</div>
          <p className="text-xs text-slate-500">Medición vía HTTP/3.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono"><span>PROCESSED_EVENTS</span><span className="text-emerald-600 font-bold">LIVE</span></div>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-mono">4.82B</div>
          <p className="text-xs text-slate-500">Ingesta streaming sin drop.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-5 text-slate-100 font-mono text-xs sm:text-sm leading-relaxed">
          <p><span className="text-emerald-400">$</span> zenith deployment rollouts --cluster=us-east-prod</p>
          <p className="text-blue-300">==&gt; Handshaking with cluster endpoint (200 OK)</p>
          <p>[2025-05-18T14:40:03Z] <span className="text-emerald-400">OK</span> Health-check passes for 64 / 64 nodes</p>
          <p className="text-emerald-300 font-bold">[SUCCESS] Zero-downtime cutover completed in 412ms</p>
        </div>
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-5 text-slate-100 font-mono text-xs sm:text-sm leading-relaxed">
          <pre>{'{"cluster_id": "zth-node-9941", "status": "HEALTHY", "concurrency": 18400, "tls_enabled": true}'}</pre>
        </div>
      </div>
    </div>
  );
};`;
