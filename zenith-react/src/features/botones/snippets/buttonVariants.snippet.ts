export const BUTTON_VARIANTS_HTML = `
<div class="flex flex-wrap items-center gap-3">
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm"
  >
    <span>Primary</span>
  </button>
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 transition-colors shadow-sm"
  >
    <span>Secondary</span>
  </button>
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 transition-colors shadow-sm"
  >
    <span>Outline</span>
  </button>
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200 transition-colors"
  >
    <span>Subtle</span>
  </button>
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 active:bg-slate-200 transition-colors"
  >
    <span>Ghost</span>
  </button>
  <button
    type="button"
    class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
  >
    <span>Link</span>
    <span class="material-symbols-outlined text-[16px]">arrow_outward</span>
  </button>
</div>
`;

export const BUTTON_VARIANTS_TSX = `
export const ButtonVariants = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm"
      >
        <span>Primary</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 transition-colors shadow-sm"
      >
        <span>Secondary</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 transition-colors shadow-sm"
      >
        <span>Outline</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200 transition-colors"
      >
        <span>Subtle</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 active:bg-slate-200 transition-colors"
      >
        <span>Ghost</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
      >
        <span>Link</span>
        <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
      </button>
    </div>
  );
};
`;
