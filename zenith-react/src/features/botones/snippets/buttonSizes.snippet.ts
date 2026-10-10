export const BUTTON_SIZES_HTML = `<div class="flex flex-wrap items-center gap-3">
  <button type="button" class="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm">
    <span>Extra Small</span>
  </button>
  <button type="button" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm">
    <span>Small</span>
  </button>
  <button type="button" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm">
    <span>Default</span>
  </button>
  <button type="button" class="inline-flex items-center gap-2 px-5 py-2.5 text-base font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm">
    <span>Large</span>
  </button>
  <button type="button" class="inline-flex items-center gap-2.5 px-6 py-3 text-lg font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md">
    <span>Extra Large</span>
  </button>
</div>`;

export const BUTTON_SIZES_TSX = `export const ButtonSizes = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm">
        <span>Extra Small</span>
      </button>
      <button type="button" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm">
        <span>Small</span>
      </button>
      <button type="button" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm">
        <span>Default</span>
      </button>
      <button type="button" className="inline-flex items-center gap-2 px-5 py-2.5 text-base font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm">
        <span>Large</span>
      </button>
      <button type="button" className="inline-flex items-center gap-2.5 px-6 py-3 text-lg font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md">
        <span>Extra Large</span>
      </button>
    </div>
  );
};`;
