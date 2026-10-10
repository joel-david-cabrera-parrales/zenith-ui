export const SEMANTIC_BUTTONS_HTML = `
<div class="flex flex-wrap items-center gap-3">
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 transition-colors shadow-sm"
  >
    <span class="material-symbols-outlined text-[18px]">check_circle</span>
    <span>Success</span>
  </button>
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors border border-emerald-200"
  >
    <span>Success Subtle</span>
  </button>
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700 transition-colors shadow-sm"
  >
    <span class="material-symbols-outlined text-[18px]">warning</span>
    <span>Warning</span>
  </button>
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 transition-colors border border-amber-200"
  >
    <span>Warning Subtle</span>
  </button>
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 transition-colors shadow-sm"
  >
    <span class="material-symbols-outlined text-[18px]">delete</span>
    <span>Danger</span>
  </button>
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-rose-300 text-rose-600 bg-white hover:bg-rose-50 transition-colors shadow-sm"
  >
    <span>Danger Outline</span>
  </button>
  <button
    type="button"
    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm"
  >
    <span class="material-symbols-outlined text-[18px]">info</span>
    <span>Info</span>
  </button>
</div>
`;

export const SEMANTIC_BUTTONS_TSX = `
export const SemanticButtons = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 transition-colors shadow-sm"
      >
        <span className="material-symbols-outlined text-[18px]">check_circle</span>
        <span>Success</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors border border-emerald-200"
      >
        <span>Success Subtle</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700 transition-colors shadow-sm"
      >
        <span className="material-symbols-outlined text-[18px]">warning</span>
        <span>Warning</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 transition-colors border border-amber-200"
      >
        <span>Warning Subtle</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 transition-colors shadow-sm"
      >
        <span className="material-symbols-outlined text-[18px]">delete</span>
        <span>Danger</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-rose-300 text-rose-600 bg-white hover:bg-rose-50 transition-colors shadow-sm"
      >
        <span>Danger Outline</span>
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm"
      >
        <span className="material-symbols-outlined text-[18px]">info</span>
        <span>Info</span>
      </button>
    </div>
  );
};
`;
