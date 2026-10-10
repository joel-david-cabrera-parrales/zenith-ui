export const BODY_TEXT_HTML = `<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <div class="bg-white border border-slate-200 rounded-xl p-6 space-y-6 shadow-sm">
    <div class="space-y-2">
      <span class="font-mono text-[10px] text-blue-600 font-bold">LEAD / HERO PARAGRAPH</span>
      <p class="text-lg md:text-xl text-slate-600 leading-relaxed">La plataforma Zenith Dash acelera el ciclo de ingeniería distribuyendo telemetría en tiempo real.</p>
    </div>
    <hr class="border-slate-200" />
    <div class="space-y-2">
      <span class="font-mono text-[10px] text-blue-600 font-bold">BODY REGULAR / LARGE (EDITORIAL)</span>
      <p class="text-base text-slate-600 leading-relaxed">El motor reactivo procesa millones de transacciones por segundo garantizando 60 FPS.</p>
    </div>
    <hr class="border-slate-200" />
    <div class="space-y-2">
      <span class="font-mono text-[10px] text-blue-600 font-bold">BODY MEDIUM / STANDARD (DASHBOARD)</span>
      <p class="text-sm text-slate-600 leading-normal">Estado de sincronización completado para la región us-east-1 sin pérdidas de paquetes.</p>
    </div>
    <hr class="border-slate-200" />
    <div class="space-y-2">
      <span class="font-mono text-[10px] text-blue-600 font-bold">BODY SMALL / CAPTIONS</span>
      <p class="text-xs text-slate-400 leading-normal">Última actualización: 2025-05-18 14:32:09 UTC • Commit SHA: 8a4f91e.</p>
    </div>
  </div>
  <div class="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
    <span class="font-mono text-[10px] text-blue-600 font-bold">INLINE TEXT FORMATTING SPECIMEN</span>
    <p class="text-base text-slate-600 leading-relaxed">Combina <strong class="font-bold text-slate-900">texto en negrita con peso 700</strong>, <em class="italic text-slate-900">énfasis cursivo sutil</em> y comandos como <code class="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-xs text-blue-600 font-medium">kubectl rollout status</code>.</p>
    <p class="text-base text-slate-600 leading-relaxed">Los enlaces usan <a href="#doc-link" class="text-blue-600 font-medium underline underline-offset-4">documentación interactiva de APIs</a>, versiones deprecadas <del class="line-through text-slate-400">v1.12 legacy endpoints</del> y <mark class="bg-blue-100 text-blue-900 px-1 rounded">resaltado institucional</mark>.</p>
  </div>
</div>`;

export const BODY_TEXT_TSX = `export const BodyTextSpecimen = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6 shadow-sm">
        <div className="space-y-2">
          <span className="font-mono text-[10px] text-blue-600 font-bold">LEAD / HERO PARAGRAPH</span>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">La plataforma Zenith Dash acelera el ciclo de ingeniería distribuyendo telemetría en tiempo real.</p>
        </div>
        <hr className="border-slate-200" />
        <div className="space-y-2">
          <span className="font-mono text-[10px] text-blue-600 font-bold">BODY REGULAR / LARGE (EDITORIAL)</span>
          <p className="text-base text-slate-600 leading-relaxed">El motor reactivo procesa millones de transacciones por segundo garantizando 60 FPS.</p>
        </div>
        <hr className="border-slate-200" />
        <div className="space-y-2">
          <span className="font-mono text-[10px] text-blue-600 font-bold">BODY MEDIUM / STANDARD (DASHBOARD)</span>
          <p className="text-sm text-slate-600 leading-normal">Estado de sincronización completado para la región us-east-1 sin pérdidas de paquetes.</p>
        </div>
        <hr className="border-slate-200" />
        <div className="space-y-2">
          <span className="font-mono text-[10px] text-blue-600 font-bold">BODY SMALL / CAPTIONS</span>
          <p className="text-xs text-slate-400 leading-normal">Última actualización: 2025-05-18 14:32:09 UTC • Commit SHA: 8a4f91e.</p>
        </div>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
        <span className="font-mono text-[10px] text-blue-600 font-bold">INLINE TEXT FORMATTING SPECIMEN</span>
        <p className="text-base text-slate-600 leading-relaxed">Combina <strong className="font-bold text-slate-900">texto en negrita con peso 700</strong>, <em className="italic text-slate-900">énfasis cursivo sutil</em> y comandos como <code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-xs text-blue-600 font-medium">kubectl rollout status</code>.</p>
        <p className="text-base text-slate-600 leading-relaxed">Los enlaces usan <a href="#doc-link" className="text-blue-600 font-medium underline underline-offset-4">documentación interactiva de APIs</a>, versiones deprecadas <del className="line-through text-slate-400">v1.12 legacy endpoints</del> y <mark className="bg-blue-100 text-blue-900 px-1 rounded">resaltado institucional</mark>.</p>
      </div>
    </div>
  );
};`;
