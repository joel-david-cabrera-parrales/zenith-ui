export const PROGRESS_BASIC_HTML = `
<div class="space-y-4">
  <div>
    <div class="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
      <span>25% Complete</span>
    </div>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-blue-600 rounded-full transition-all duration-300" style="width: 25%"></div>
    </div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
      <span>50% Complete</span>
    </div>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-blue-600 rounded-full transition-all duration-300" style="width: 50%"></div>
    </div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
      <span>75% Complete</span>
    </div>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-blue-600 rounded-full transition-all duration-300" style="width: 75%"></div>
    </div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
      <span>100% Complete</span>
    </div>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-blue-600 rounded-full transition-all duration-300" style="width: 100%"></div>
    </div>
  </div>
</div>
`;

export const PROGRESS_BASIC_TSX = `
export const ProgressBasic = () => {
  const values = [25, 50, 75, 100];
  return (
    <div className="space-y-4">
      {values.map((value) => (
        <div key={value}>
          <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
            <span>{value}% Complete</span>
          </div>
          <div
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={\`\${value}% Complete\`}
          >
            <div
              className="h-2 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: \`\${value}%\` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
`;

export const PROGRESS_SIZES_HTML = `
<div class="space-y-4">
  <div>
    <p class="text-xs text-slate-600 dark:text-slate-400 mb-1">Small</p>
    <div class="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-1 bg-blue-600 rounded-full" style="width: 60%"></div>
    </div>
  </div>
  <div>
    <p class="text-xs text-slate-600 dark:text-slate-400 mb-1">Medium</p>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-blue-600 rounded-full" style="width: 60%"></div>
    </div>
  </div>
  <div>
    <p class="text-xs text-slate-600 dark:text-slate-400 mb-1">Large</p>
    <div class="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-3 bg-blue-600 rounded-full" style="width: 60%"></div>
    </div>
  </div>
</div>
`;

export const PROGRESS_SIZES_TSX = `
export const ProgressSizes = () => {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Small</p>
        <div
          className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={60}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-1 bg-blue-600 rounded-full" style={{ width: '60%' }} />
        </div>
      </div>
      <div>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Medium</p>
        <div
          className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={60}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-2 bg-blue-600 rounded-full" style={{ width: '60%' }} />
        </div>
      </div>
      <div>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Large</p>
        <div
          className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={60}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-3 bg-blue-600 rounded-full" style={{ width: '60%' }} />
        </div>
      </div>
    </div>
  );
};
`;

export const PROGRESS_TONES_HTML = `
<div class="space-y-4">
  <div>
    <div class="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
      <span>Primary</span>
    </div>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-blue-600 rounded-full" style="width: 65%"></div>
    </div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
      <span>Success</span>
    </div>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-emerald-600 rounded-full" style="width: 65%"></div>
    </div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
      <span>Warning</span>
    </div>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-amber-600 rounded-full" style="width: 65%"></div>
    </div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
      <span>Danger</span>
    </div>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-red-600 rounded-full" style="width: 65%"></div>
    </div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
      <span>Info</span>
    </div>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-sky-600 rounded-full" style="width: 65%"></div>
    </div>
  </div>
  <div>
    <div class="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
      <span>Neutral</span>
    </div>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-slate-600 rounded-full" style="width: 65%"></div>
    </div>
  </div>
</div>
`;

export const PROGRESS_TONES_TSX = `
export const ProgressTones = () => {
  const tones = [
    { name: 'Primary', color: 'bg-blue-600' },
    { name: 'Success', color: 'bg-emerald-600' },
    { name: 'Warning', color: 'bg-amber-600' },
    { name: 'Danger', color: 'bg-red-600' },
    { name: 'Info', color: 'bg-sky-600' },
    { name: 'Neutral', color: 'bg-slate-600' },
  ];
  return (
    <div className="space-y-4">
      {tones.map((tone) => (
        <div key={tone.name}>
          <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
            <span>{tone.name}</span>
          </div>
          <div
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={65}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={\`\${tone.name} progress\`}
          >
            <div className={\`h-2 \${tone.color} rounded-full\`} style={{ width: '65%' }} />
          </div>
        </div>
      ))}
    </div>
  );
};
`;

export const PROGRESS_VARIANTS_HTML = `
<div class="space-y-4">
  <div>
    <p class="text-xs text-slate-600 dark:text-slate-400 mb-1">Solid</p>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-emerald-600 rounded-full" style="width: 70%"></div>
    </div>
  </div>
  <div>
    <p class="text-xs text-slate-600 dark:text-slate-400 mb-1">Gradient</p>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full" style="width: 70%"></div>
    </div>
  </div>
  <div>
    <p class="text-xs text-slate-600 dark:text-slate-400 mb-1">Animated (Striped)</p>
    <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
      <div class="h-2 bg-emerald-600 rounded-full bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[size:1rem_1rem] animate-[progress-bar_1s_linear_infinite]" style="width: 70%"></div>
    </div>
  </div>
</div>
`;

export const PROGRESS_VARIANTS_TSX = `
export const ProgressVariants = () => {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Solid</p>
        <div
          className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={70}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-2 bg-emerald-600 rounded-full" style={{ width: '70%' }} />
        </div>
      </div>
      <div>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Gradient</p>
        <div
          className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={70}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-2 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full" style={{ width: '70%' }} />
        </div>
      </div>
      <div>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Animated (Striped)</p>
        <div
          className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={70}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-2 bg-emerald-600 rounded-full bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[size:1rem_1rem] animate-[progress-bar_1s_linear_infinite]"
            style={{ width: '70%' }}
          />
        </div>
      </div>
    </div>
  );
};
`;

export const PROGRESS_USE_CASES_HTML = `
<div class="space-y-6">
  <div class="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
    <h4 class="text-sm font-medium text-slate-900 dark:text-white mb-3">Formulario de Registro</h4>
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Progreso del formulario</label>
        <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div class="h-2 bg-blue-600 rounded-full transition-all duration-300" style="width: 40%"></div>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Paso 2 de 5 completado</p>
      </div>
    </div>
  </div>

  <div class="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
    <h4 class="text-sm font-medium text-slate-900 dark:text-white mb-3">Carga de Archivo</h4>
    <div class="space-y-3">
      <div class="flex justify-between text-xs mb-1">
        <span class="text-slate-700 dark:text-slate-300">documento.pdf</span>
        <span class="text-slate-500 dark:text-slate-400">2.4 MB / 5.8 MB</span>
      </div>
      <div class="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div class="h-2 bg-sky-600 rounded-full transition-all duration-300" style="width: 41%"></div>
      </div>
      <p class="text-xs text-slate-500 dark:text-slate-400">Subiendo... 41%</p>
    </div>
  </div>

  <div class="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
    <h4 class="text-sm font-medium text-slate-900 dark:text-white mb-3">Proceso Largo - Exportación de Datos</h4>
    <div class="space-y-3">
      <div class="flex justify-between text-xs mb-1">
        <span class="text-slate-700 dark:text-slate-300">Procesando registros...</span>
        <span class="text-slate-500 dark:text-slate-400">12,450 / 50,000</span>
      </div>
      <div class="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div class="h-3 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full animate-[progress-bar_1s_linear_infinite] bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[size:1rem_1rem]" style="width: 25%"></div>
      </div>
      <p class="text-xs text-slate-500 dark:text-slate-400">25% completado - Tiempo estimado: 2m 30s</p>
    </div>
  </div>
</div>
`;

export const PROGRESS_USE_CASES_TSX = `
export const ProgressUseCases = () => {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
        <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Formulario de Registro</h4>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Progreso del formulario</label>
            <div
              className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={40}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progreso del formulario"
            >
              <div className="h-2 bg-blue-600 rounded-full transition-all duration-300" style={{ width: '40%' }} />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Paso 2 de 5 completado</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
        <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Carga de Archivo</h4>
        <div className="space-y-3">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-700 dark:text-slate-300">documento.pdf</span>
            <span className="text-slate-500 dark:text-slate-400">2.4 MB / 5.8 MB</span>
          </div>
          <div
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={41}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Carga de documento.pdf"
          >
            <div className="h-2 bg-sky-600 rounded-full transition-all duration-300" style={{ width: '41%' }} />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Subiendo... 41%</p>
        </div>
      </div>

      <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
        <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Proceso Largo - Exportación de Datos</h4>
        <div className="space-y-3">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-700 dark:text-slate-300">Procesando registros...</span>
            <span className="text-slate-500 dark:text-slate-400">12,450 / 50,000</span>
          </div>
          <div
            className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Exportación de datos"
          >
            <div
              className="h-3 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full animate-[progress-bar_1s_linear_infinite] bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[size:1rem_1rem]"
              style={{ width: '25%' }}
            />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">25% completado - Tiempo estimado: 2m 30s</p>
        </div>
      </div>
    </div>
  );
};
`;