export const BUTTON_STATES_HTML = `
<div class="flex flex-wrap items-center gap-3">
  <button
    type="button"
    disabled
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600/80 text-white cursor-wait shadow-sm"
  >
    <svg
      class="animate-spin -ml-0.5 h-4 w-4 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <span>Procesando...</span>
  </button>
  <button
    type="button"
    disabled
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-slate-300 bg-slate-50 text-slate-400 cursor-wait"
  >
    <svg
      class="animate-spin -ml-0.5 h-4 w-4 text-blue-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <span>Cargando</span>
  </button>
  <button
    type="button"
    disabled
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-slate-200 text-slate-400 cursor-not-allowed"
  >
    <span>Disabled Solid</span>
  </button>
  <button
    type="button"
    disabled
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-slate-200 bg-white text-slate-300 cursor-not-allowed"
  >
    <span>Disabled Outline</span>
  </button>
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white ring-4 ring-blue-500/20 shadow-sm"
  >
    <span>Focused State</span>
  </button>
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-800 text-white shadow-inner"
  >
    <span>Pressed State</span>
  </button>
</div>
`;

export const BUTTON_STATES_TSX = `
export const ButtonStates = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        disabled
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600/80 text-white cursor-wait shadow-sm"
      >
        <svg
          className="animate-spin -ml-0.5 h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span>Procesando...</span>
      </button>
      <button
        type="button"
        disabled
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-slate-300 bg-slate-50 text-slate-400 cursor-wait"
      >
        <svg
          className="animate-spin -ml-0.5 h-4 w-4 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span>Cargando</span>
      </button>
      <button
        type="button"
        disabled
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-slate-200 text-slate-400 cursor-not-allowed"
      >
        <span>Disabled Solid</span>
      </button>
      <button
        type="button"
        disabled
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-slate-200 bg-white text-slate-300 cursor-not-allowed"
      >
        <span>Disabled Outline</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white ring-4 ring-blue-500/20 shadow-sm"
      >
        <span>Focused State</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-800 text-white shadow-inner"
      >
        <span>Pressed State</span>
      </button>
    </div>
  );
};
`;
