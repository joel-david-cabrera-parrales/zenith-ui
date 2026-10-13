export const AVATAR_SHAPES_HTML = `
<div class="flex flex-wrap items-end gap-4">
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-blue-600/20">JD</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">CIRCULAR</span>
    <span class="font-mono text-[9px] text-slate-500">rounded-full</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-blue-600/20">AR</span>
    <span class="font-mono text-[10px] font-semibold text-slate-500">SOFT 8PX</span>
    <span class="font-mono text-[9px] text-slate-500">rounded-lg</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-blue-600/20">SC</span>
    <span class="font-mono text-[10px] font-semibold text-slate-500">SMOOTH 12PX</span>
    <span class="font-mono text-[9px] text-slate-500">rounded-xl</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-2xl bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-blue-600/20">EV</span>
    <span class="font-mono text-[10px] font-semibold text-slate-500">SQUIRCLE 16PX</span>
    <span class="font-mono text-[9px] text-slate-500">rounded-2xl</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-none bg-slate-800 text-base font-bold text-white ring-1 ring-slate-800">KL</span>
    <span class="font-mono text-[10px] font-semibold text-slate-500">SHARP 0PX</span>
    <span class="font-mono text-[9px] text-slate-500">rounded-none</span>
  </div>
</div>
`;

export const AVATAR_SHAPES_TSX = `
export const AvatarShapes = () => {
  const shapes = [
    { token: 'CIRCULAR', radius: 'rounded-full', label: 'JD', classes: 'rounded-full bg-blue-100 text-blue-800 ring-1 ring-blue-600/20' },
    { token: 'SOFT 8PX', radius: 'rounded-lg', label: 'AR', classes: 'rounded-lg bg-blue-100 text-blue-800 ring-1 ring-blue-600/20' },
    { token: 'SMOOTH 12PX', radius: 'rounded-xl', label: 'SC', classes: 'rounded-xl bg-blue-100 text-blue-800 ring-1 ring-blue-600/20' },
    { token: 'SQUIRCLE 16PX', radius: 'rounded-2xl', label: 'EV', classes: 'rounded-2xl bg-blue-100 text-blue-800 ring-1 ring-blue-600/20' },
    { token: 'SHARP 0PX', radius: 'rounded-none', label: 'KL', classes: 'rounded-none bg-slate-800 text-white ring-1 ring-slate-800' },
  ];
  return (
    <div className="flex flex-wrap items-end gap-4">
      {shapes.map((item) => (
        <div key={item.token} className="flex flex-col items-center gap-1.5">
          <span
            role="img"
            aria-label={'Avatar ' + item.token}
            className={'inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center text-base font-bold ' + item.classes}
          >
            {item.label}
          </span>
          <span className="font-mono text-[10px] font-semibold text-slate-500">{item.token}</span>
          <span className="font-mono text-[9px] text-slate-500">{item.radius}</span>
        </div>
      ))}
    </div>
  );
};
`;
