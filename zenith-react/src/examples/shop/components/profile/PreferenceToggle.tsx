export const PreferenceToggle = ({ id, title, description, checked, onChange }: {
  id: string;
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => (
  <label htmlFor={id} className="flex cursor-pointer items-center justify-between gap-5 border-b border-slate-200/70 py-4 last:border-0">
    <span>
      <span className="block text-sm font-medium text-slate-900">{title}</span>
      <span className="mt-0.5 block text-xs leading-5 text-slate-600">{description}</span>
    </span>
    <span className="relative shrink-0">
      <input id={id} type="checkbox" checked={checked} onChange={event => onChange(event.target.checked)} className="peer sr-only" />
      <span className="block h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-sky-600 peer-focus-visible:ring-2 peer-focus-visible:ring-sky-600/30" />
      <span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
    </span>
  </label>
);
