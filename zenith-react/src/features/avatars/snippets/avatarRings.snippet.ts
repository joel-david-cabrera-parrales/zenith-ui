export const AVATAR_RINGS_HTML = `
<div class="flex flex-wrap items-end gap-4">
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-2 ring-blue-600 ring-offset-2 ring-offset-white">JD</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">OFFSET RING</span>
    <span class="font-mono text-[9px] text-slate-500">ring-offset-2</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-4 ring-blue-600/40 ring-offset-1 ring-offset-white">AR</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">FOCUS GLOW</span>
    <span class="font-mono text-[9px] text-slate-500">ring-4 ring-blue-600/40</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-emerald-100 text-base font-bold text-emerald-800 ring-2 ring-emerald-600 ring-offset-2 ring-offset-white">SC</span>
    <span class="font-mono text-[10px] font-semibold text-emerald-700">SUCCESS RING</span>
    <span class="font-mono text-[9px] text-slate-500">ring-emerald-600</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-red-100 text-base font-bold text-red-700 ring-2 ring-red-600 ring-offset-2 ring-offset-white">KL</span>
    <span class="font-mono text-[10px] font-semibold text-red-700">CRITICAL RING</span>
    <span class="font-mono text-[9px] text-slate-500">ring-red-600</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex shrink-0 cursor-pointer rounded-full bg-gradient-to-tr from-blue-600 via-blue-400 to-emerald-300 p-[2.5px]">
      <span class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800 ring-2 ring-white">EV</span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">VIP GRADIENT</span>
    <span class="font-mono text-[9px] text-slate-500">linear-gradient</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex shrink-0 cursor-pointer rounded-full border border-blue-600/50 p-0.5">
      <span class="inline-flex rounded-full border border-blue-600 p-0.5">
        <span class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">MS</span>
      </span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-slate-500">DOUBLE RIM</span>
    <span class="font-mono text-[9px] text-slate-500">double-rim-spec</span>
  </div>
</div>
`;

export const AVATAR_RINGS_TSX = `
export const AvatarRings = () => {
  const rings = [
    { token: 'OFFSET RING', meta: 'ring-offset-2', label: 'JD', classes: 'bg-blue-100 text-blue-800 ring-2 ring-blue-600 ring-offset-2 ring-offset-white' },
    { token: 'FOCUS GLOW', meta: 'ring-4 ring-blue-600/40', label: 'AR', classes: 'bg-blue-100 text-blue-800 ring-4 ring-blue-600/40 ring-offset-1 ring-offset-white' },
    { token: 'SUCCESS RING', meta: 'ring-emerald-600', label: 'SC', classes: 'bg-emerald-100 text-emerald-800 ring-2 ring-emerald-600 ring-offset-2 ring-offset-white' },
    { token: 'CRITICAL RING', meta: 'ring-red-600', label: 'KL', classes: 'bg-red-100 text-red-700 ring-2 ring-red-600 ring-offset-2 ring-offset-white' },
  ];
  return (
    <div className="flex flex-wrap items-end gap-4">
      {rings.map((item) => (
        <div key={item.token} className="flex flex-col items-center gap-1.5">
          <span role="img" aria-label={'Avatar ' + item.token} className={'inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full text-base font-bold ' + item.classes}>
            {item.label}
          </span>
          <span className="font-mono text-[10px] font-semibold text-blue-700">{item.token}</span>
          <span className="font-mono text-[9px] text-slate-500">{item.meta}</span>
        </div>
      ))}
      <div className="flex flex-col items-center gap-1.5">
        <span className="inline-flex shrink-0 cursor-pointer rounded-full bg-gradient-to-tr from-blue-600 via-blue-400 to-emerald-300 p-[2.5px]">
          <span role="img" aria-label="Avatar VIP" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800 ring-2 ring-white">EV</span>
        </span>
        <span className="font-mono text-[10px] font-semibold text-blue-700">VIP GRADIENT</span>
        <span className="font-mono text-[9px] text-slate-500">linear-gradient</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="inline-flex shrink-0 cursor-pointer rounded-full border border-blue-600/50 p-0.5">
          <span className="inline-flex rounded-full border border-blue-600 p-0.5">
            <span role="img" aria-label="Avatar concéntrico" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">MS</span>
          </span>
        </span>
        <span className="font-mono text-[10px] font-semibold text-slate-500">DOUBLE RIM</span>
        <span className="font-mono text-[9px] text-slate-500">double-rim-spec</span>
      </div>
    </div>
  );
};
`;
