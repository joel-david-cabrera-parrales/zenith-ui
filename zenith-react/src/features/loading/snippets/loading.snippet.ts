export const LOADING_VARIANTS_HTML = `
<div class="flex flex-wrap items-center gap-8">
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando spinner">
    <div class="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true"></div>
    <span class="text-xs text-slate-500">Spinner</span>
  </div>
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando barra">
    <div class="h-2 w-48 overflow-hidden rounded-full bg-slate-200">
      <div class="h-full w-1/3 rounded-full bg-blue-600 animate-loading-bar"></div>
    </div>
    <span class="text-xs text-slate-500">Barra</span>
  </div>
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando puntos">
    <div class="flex items-center gap-1.5" aria-hidden="true">
      <div class="h-2 w-2 rounded-full bg-blue-600 animate-loading-dot"></div>
      <div class="h-2 w-2 rounded-full bg-blue-600 animate-loading-dot" style="animation-delay: 160ms"></div>
      <div class="h-2 w-2 rounded-full bg-blue-600 animate-loading-dot" style="animation-delay: 320ms"></div>
    </div>
    <span class="text-xs text-slate-500">Dots</span>
  </div>
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando pulso">
    <div class="h-6 w-6 rounded-full bg-blue-600 animate-loading-pulse" aria-hidden="true"></div>
    <span class="text-xs text-slate-500">Pulso</span>
  </div>
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando anillo">
    <div class="relative flex items-center justify-center" aria-hidden="true">
      <div class="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin opacity-30"></div>
      <div class="absolute h-2 w-2 rounded-full bg-blue-600 animate-loading-pulse"></div>
    </div>
    <span class="text-xs text-slate-500">Anillo</span>
  </div>
</div>
`;

export const LOADING_VARIANTS_TSX = `
export const LoadingVariants = () => {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <div className="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando spinner">
        <div className="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true" />
        <span className="text-xs text-slate-500">Spinner</span>
      </div>
      <div className="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando barra">
        <div className="h-2 w-48 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-1/3 rounded-full bg-blue-600 animate-loading-bar" />
        </div>
        <span className="text-xs text-slate-500">Barra</span>
      </div>
      <div className="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando puntos">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-blue-600 animate-loading-dot"
              style={{ animationDelay: (i * 160) + 'ms' }}
            />
          ))}
        </div>
        <span className="text-xs text-slate-500">Dots</span>
      </div>
      <div className="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando pulso">
        <div className="h-6 w-6 rounded-full bg-blue-600 animate-loading-pulse" aria-hidden="true" />
        <span className="text-xs text-slate-500">Pulso</span>
      </div>
      <div className="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando anillo">
        <div className="relative flex items-center justify-center" aria-hidden="true">
          <div className="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin opacity-30" />
          <div className="absolute h-2 w-2 rounded-full bg-blue-600 animate-loading-pulse" />
        </div>
        <span className="text-xs text-slate-500">Anillo</span>
      </div>
    </div>
  );
};
`;

export const LOADING_SIZES_HTML = `
<div class="flex items-end gap-8">
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando pequeño">
    <div class="h-4 w-4 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true"></div>
    <span class="text-xs text-slate-500">Small</span>
  </div>
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando mediano">
    <div class="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true"></div>
    <span class="text-xs text-slate-500">Medium</span>
  </div>
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando grande">
    <div class="h-10 w-10 rounded-full border-[3px] border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true"></div>
    <span class="text-xs text-slate-500">Large</span>
  </div>
</div>
`;

export const LOADING_SIZES_TSX = `
export const LoadingSizes = () => {
  const sizes = [
    { name: 'Small', spinner: 'h-4 w-4 border-2' },
    { name: 'Medium', spinner: 'h-6 w-6 border-2' },
    { name: 'Large', spinner: 'h-10 w-10 border-[3px]' },
  ];
  return (
    <div className="flex items-end gap-8">
      {sizes.map((size) => (
        <div key={size.name} className="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label={'Cargando ' + size.name}>
          <div className={size.spinner + ' rounded-full border-slate-200 border-t-blue-600 animate-spin'} aria-hidden="true" />
          <span className="text-xs text-slate-500">{size.name}</span>
        </div>
      ))}
    </div>
  );
};
`;

export const LOADING_TONES_HTML = `
<div class="flex flex-wrap items-center gap-6">
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando primary">
    <div class="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true"></div>
    <span class="text-xs text-slate-500">Primary</span>
  </div>
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando success">
    <div class="h-6 w-6 rounded-full border-2 border-slate-200 border-t-emerald-600 animate-spin" aria-hidden="true"></div>
    <span class="text-xs text-slate-500">Success</span>
  </div>
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando warning">
    <div class="h-6 w-6 rounded-full border-2 border-slate-200 border-t-amber-600 animate-spin" aria-hidden="true"></div>
    <span class="text-xs text-slate-500">Warning</span>
  </div>
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando danger">
    <div class="h-6 w-6 rounded-full border-2 border-slate-200 border-t-red-600 animate-spin" aria-hidden="true"></div>
    <span class="text-xs text-slate-500">Danger</span>
  </div>
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando info">
    <div class="h-6 w-6 rounded-full border-2 border-slate-200 border-t-sky-600 animate-spin" aria-hidden="true"></div>
    <span class="text-xs text-slate-500">Info</span>
  </div>
  <div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando neutral">
    <div class="h-6 w-6 rounded-full border-2 border-slate-200 border-t-slate-600 animate-spin" aria-hidden="true"></div>
    <span class="text-xs text-slate-500">Neutral</span>
  </div>
</div>
`;

export const LOADING_TONES_TSX = `
export const LoadingTones = () => {
  const tones = [
    { name: 'Primary', spinner: 'border-t-blue-600' },
    { name: 'Success', spinner: 'border-t-emerald-600' },
    { name: 'Warning', spinner: 'border-t-amber-600' },
    { name: 'Danger', spinner: 'border-t-red-600' },
    { name: 'Info', spinner: 'border-t-sky-600' },
    { name: 'Neutral', spinner: 'border-t-slate-600' },
  ];
  return (
    <div className="flex flex-wrap items-center gap-6">
      {tones.map((tone) => (
        <div key={tone.name} className="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label={'Cargando ' + tone.name}>
          <div className={'h-6 w-6 rounded-full border-2 border-slate-200 animate-spin ' + tone.spinner} aria-hidden="true" />
          <span className="text-xs text-slate-500">{tone.name}</span>
        </div>
      ))}
    </div>
  );
};
`;

export const LOADING_USE_CASES_HTML = `
<div class="space-y-6">
  <div class="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
    <h4 class="text-sm font-medium text-slate-900 dark:text-white mb-3">Botón con carga</h4>
    <button type="button" disabled class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-80" aria-busy="true">
      <span class="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true"></span>
      Guardando...
    </button>
  </div>

  <div class="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
    <h4 class="text-sm font-medium text-slate-900 dark:text-white mb-3">Campo de formulario</h4>
    <label class="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Buscando resultados</label>
    <div class="relative">
      <input type="text" value=" zenith" disabled class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 pr-10 text-sm text-slate-500" aria-busy="true" />
      <span class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true"></span>
    </div>
  </div>

  <div class="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
    <h4 class="text-sm font-medium text-slate-900 dark:text-white mb-3">Tarjeta con overlay</h4>
    <div class="relative rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
      <p class="text-sm text-slate-500">Contenido de la tarjeta mientras se cargan los datos...</p>
      <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg bg-white/80 backdrop-blur-sm" role="status" aria-busy="true" aria-label="Cargando tarjeta">
        <div class="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true"></div>
        <span class="text-xs text-slate-500">Cargando datos...</span>
      </div>
    </div>
  </div>
</div>
`;

export const LOADING_USE_CASES_TSX = `
export const LoadingUseCases = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
        <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Botón con carga</h4>
        <button type="button" disabled className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-80" aria-busy="true">
          <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />
          Guardando...
        </button>
      </div>

      <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
        <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Campo de formulario</h4>
        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Buscando resultados</label>
        <div className="relative">
          <input type="text" defaultValue=" zenith" disabled className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 pr-10 text-sm text-slate-500" aria-busy="true" />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true" />
        </div>
      </div>

      <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
        <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Tarjeta con overlay</h4>
        <div className="relative rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
          <p className="text-sm text-slate-500">Contenido de la tarjeta mientras se cargan los datos...</p>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg bg-white/80 backdrop-blur-sm" role="status" aria-busy="true" aria-label="Cargando tarjeta">
            <div className="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true" />
            <span className="text-xs text-slate-500">Cargando datos...</span>
          </div>
        </div>
      </div>
    </div>
  );
};
`;

export const LOADING_SPINNER_HTML = `
<div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando contenido">
  <div class="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true"></div>
  <span class="text-xs text-slate-500">Cargando contenido...</span>
</div>
`;

export const LOADING_SPINNER_TSX = `
export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando contenido">
      <div className="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true" />
      <span className="text-xs text-slate-500">Cargando contenido...</span>
    </div>
  );
};
`;

export const LOADING_BAR_HTML = `
<div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando contenido">
  <div class="h-2 w-48 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-label="Cargando contenido">
    <div class="h-full w-1/3 rounded-full bg-blue-600 animate-loading-bar"></div>
  </div>
  <span class="text-xs text-slate-500">Cargando contenido...</span>
</div>
`;

export const LOADING_BAR_TSX = `
export const LoadingBar = () => {
  return (
    <div className="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando contenido">
      <div className="h-2 w-48 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-label="Cargando contenido">
        <div className="h-full w-1/3 rounded-full bg-blue-600 animate-loading-bar" />
      </div>
      <span className="text-xs text-slate-500">Cargando contenido...</span>
    </div>
  );
};
`;

export const LOADING_DOTS_HTML = `
<div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando contenido">
  <div class="flex items-center gap-1.5" aria-hidden="true">
    <div class="h-2 w-2 rounded-full bg-blue-600 animate-loading-dot"></div>
    <div class="h-2 w-2 rounded-full bg-blue-600 animate-loading-dot" style="animation-delay: 160ms"></div>
    <div class="h-2 w-2 rounded-full bg-blue-600 animate-loading-dot" style="animation-delay: 320ms"></div>
  </div>
  <span class="text-xs text-slate-500">Cargando contenido...</span>
</div>
`;

export const LOADING_DOTS_TSX = `
export const LoadingDots = () => {
  return (
    <div className="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando contenido">
      <div className="flex items-center gap-1.5" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-2 w-2 rounded-full bg-blue-600 animate-loading-dot"
            style={{ animationDelay: (i * 160) + 'ms' }}
          />
        ))}
      </div>
      <span className="text-xs text-slate-500">Cargando contenido...</span>
    </div>
  );
};
`;

export const LOADING_PULSE_HTML = `
<div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando contenido">
  <div class="h-6 w-6 rounded-full bg-blue-600 animate-loading-pulse" aria-hidden="true"></div>
  <span class="text-xs text-slate-500">Cargando contenido...</span>
</div>
`;

export const LOADING_PULSE_TSX = `
export const LoadingPulse = () => {
  return (
    <div className="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando contenido">
      <div className="h-6 w-6 rounded-full bg-blue-600 animate-loading-pulse" aria-hidden="true" />
      <span className="text-xs text-slate-500">Cargando contenido...</span>
    </div>
  );
};
`;

export const LOADING_RING_HTML = `
<div class="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando contenido">
  <div class="relative flex items-center justify-center" aria-hidden="true">
    <div class="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin opacity-30"></div>
    <div class="absolute h-2 w-2 rounded-full bg-blue-600 animate-loading-pulse"></div>
  </div>
  <span class="text-xs text-slate-500">Cargando contenido...</span>
</div>
`;

export const LOADING_RING_TSX = `
export const LoadingRing = () => {
  return (
    <div className="flex flex-col items-center gap-2" role="status" aria-busy="true" aria-label="Cargando contenido">
      <div className="relative flex items-center justify-center" aria-hidden="true">
        <div className="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin opacity-30" />
        <div className="absolute h-2 w-2 rounded-full bg-blue-600 animate-loading-pulse" />
      </div>
      <span className="text-xs text-slate-500">Cargando contenido...</span>
    </div>
  );
};
`;

export const LOADING_BUTTON_HTML = `
<button type="button" disabled class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-80" aria-busy="true">
  <span class="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true"></span>
  Guardando...
</button>
`;

export const LOADING_BUTTON_TSX = `
export const LoadingButton = () => {
  return (
    <button type="button" disabled className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-80" aria-busy="true">
      <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />
      Guardando...
    </button>
  );
};
`;

export const LOADING_FORM_FIELD_HTML = `
<div>
  <label class="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Buscando resultados</label>
  <div class="relative">
    <input type="text" value=" zenith" disabled class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 pr-10 text-sm text-slate-500" aria-busy="true" />
    <span class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true"></span>
  </div>
</div>
`;

export const LOADING_FORM_FIELD_TSX = `
export const LoadingFormField = () => {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Buscando resultados</label>
      <div className="relative">
        <input type="text" defaultValue=" zenith" disabled className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 pr-10 text-sm text-slate-500" aria-busy="true" />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true" />
      </div>
    </div>
  );
};
`;

export const LOADING_CARD_OVERLAY_HTML = `
<div class="relative rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
  <p class="text-sm text-slate-500">Contenido de la tarjeta mientras se cargan los datos...</p>
  <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg bg-white/80 backdrop-blur-sm" role="status" aria-busy="true" aria-label="Cargando tarjeta">
    <div class="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true"></div>
    <span class="text-xs text-slate-500">Cargando datos...</span>
  </div>
</div>
`;

export const LOADING_CARD_OVERLAY_TSX = `
export const LoadingCardOverlay = () => {
  return (
    <div className="relative rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6">
      <p className="text-sm text-slate-500">Contenido de la tarjeta mientras se cargan los datos...</p>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg bg-white/80 backdrop-blur-sm" role="status" aria-busy="true" aria-label="Cargando tarjeta">
        <div className="h-6 w-6 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin" aria-hidden="true" />
        <span className="text-xs text-slate-500">Cargando datos...</span>
      </div>
    </div>
  );
};
`;

