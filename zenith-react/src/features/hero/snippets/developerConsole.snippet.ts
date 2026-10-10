export const DEVELOPER_CONSOLE_HTML = `
<div
  class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
>
  <div class="lg:col-span-5 space-y-6">
    <span class="rounded bg-slate-100 px-3 py-1 font-mono text-xs font-semibold text-blue-700"
      >SDK v3.2.0 • Zero Dependencies</span
    >
    <h2 class="text-4xl font-extrabold text-slate-900">Una línea de comando para unificar todas tus APIs.</h2>
    <div class="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3.5">
      <span class="font-mono text-sm"><span class="font-bold text-blue-600">$</span> npm i @zenith/core</span>
      <button class="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold">Copiar</button>
    </div>
  </div>
  <div class="lg:col-span-7">
    <div class="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 font-mono text-sm text-slate-300">
      <div class="flex justify-between border-b border-slate-800 bg-slate-900 px-4 py-2.5">
        <span class="text-xs text-slate-400">sandbox-response.json</span
        ><span class="text-xs text-emerald-400">HTTP 200 OK • 18ms</span>
      </div>
      <div class="space-y-1 p-6">
        <p>{</p>
        <p class="pl-4">"status": "dispatched",</p>
        <p class="pl-4">"region": "europe-west3",</p>
        <p>}</p>
      </div>
    </div>
  </div>
</div>
`;

export const DEVELOPER_CONSOLE_TSX = `
export const DeveloperConsole = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="lg:col-span-5 space-y-6">
        <span className="rounded bg-slate-100 px-3 py-1 font-mono text-xs font-semibold text-blue-700">
          SDK v3.2.0 • Zero Dependencies
        </span>
        <h2 className="text-4xl font-extrabold text-slate-900">Una línea de comando para unificar todas tus APIs.</h2>
        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3.5">
          <span className="font-mono text-sm">
            <span className="font-bold text-blue-600">$</span> npm i @zenith/core
          </span>
          <button className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold">
            Copiar
          </button>
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 font-mono text-sm text-slate-300">
          <div className="flex justify-between border-b border-slate-800 bg-slate-900 px-4 py-2.5">
            <span className="text-xs text-slate-400">sandbox-response.json</span>
            <span className="text-xs text-emerald-400">HTTP 200 OK • 18ms</span>
          </div>
          <div className="space-y-1 p-6">
            <p>{'{'}</p>
            <p className="pl-4">"status": "dispatched",</p>
            <p className="pl-4">"region": "europe-west3",</p>
            <p>{'}'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
`;
