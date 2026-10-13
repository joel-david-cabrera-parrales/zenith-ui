export const AVATAR_MASKS_HTML = `
<div class="flex flex-wrap items-end gap-4">
  <div class="flex flex-col items-center gap-1.5">
    <span class="mask-hex inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center bg-gradient-to-tr from-blue-600 to-blue-400 p-0.5">
      <span class="mask-hex flex h-full w-full items-center justify-center bg-blue-100 text-base font-bold text-blue-800">JD</span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">HEXAGON</span>
    <span class="font-mono text-[9px] text-slate-500">clip: 6-pt</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="mask-oct inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center bg-gradient-to-tr from-slate-800 to-slate-500 p-0.5">
      <span class="mask-oct flex h-full w-full items-center justify-center bg-blue-100 text-base font-bold text-blue-800">AR</span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">OCTAGON</span>
    <span class="font-mono text-[9px] text-slate-500">clip: 8-pt</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="mask-shield inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center bg-gradient-to-tr from-emerald-600 to-emerald-300 p-0.5">
      <span class="mask-shield flex h-full w-full items-center justify-center bg-emerald-100 text-base font-bold text-emerald-800">SC</span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-emerald-700">SHIELD</span>
    <span class="font-mono text-[9px] text-slate-500">security</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="mask-star inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center bg-gradient-to-tr from-blue-600 to-slate-300 p-0.5">
      <span class="mask-star flex h-full w-full items-center justify-center bg-blue-100 text-base font-bold text-blue-800">EV</span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">STARBURST</span>
    <span class="font-mono text-[9px] text-slate-500">clip: star-16</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="mask-diamond inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center bg-gradient-to-tr from-slate-500 to-slate-300 p-0.5">
      <span class="mask-diamond flex h-full w-full items-center justify-center bg-slate-100 text-base font-bold text-slate-700">MS</span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-slate-500">DIAMOND</span>
    <span class="font-mono text-[9px] text-slate-500">clip: 4-diag</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="relative inline-flex h-16 w-16 shrink-0 cursor-pointer">
      <span class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-slate-200">TR</span>
      <span class="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 ring-2 ring-white">
        <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
      </span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">CUTOUT NOTCH</span>
    <span class="font-mono text-[9px] text-slate-500">zero overlap</span>
  </div>
</div>
`;

export const AVATAR_MASKS_TSX = `
export const AvatarMasks = () => {
  const masks = [
    { token: 'HEXAGON', meta: 'clip: 6-pt', label: 'JD', mask: 'mask-hex', frame: 'bg-gradient-to-tr from-blue-600 to-blue-400' },
    { token: 'OCTAGON', meta: 'clip: 8-pt', label: 'AR', mask: 'mask-oct', frame: 'bg-gradient-to-tr from-slate-800 to-slate-500' },
    { token: 'SHIELD', meta: 'security', label: 'SC', mask: 'mask-shield', frame: 'bg-gradient-to-tr from-emerald-600 to-emerald-300' },
    { token: 'STARBURST', meta: 'clip: star-16', label: 'EV', mask: 'mask-star', frame: 'bg-gradient-to-tr from-blue-600 to-slate-300' },
    { token: 'DIAMOND', meta: 'clip: 4-diag', label: 'MS', mask: 'mask-diamond', frame: 'bg-gradient-to-tr from-slate-500 to-slate-300' },
  ];
  return (
    <div className="flex flex-wrap items-end gap-4">
      {masks.map((item) => (
        <div key={item.token} className="flex flex-col items-center gap-1.5">
          <span className={'inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center p-0.5 shadow-sm ' + item.mask + ' ' + item.frame}>
            <span role="img" aria-label={'Avatar ' + item.token} className={'flex h-full w-full items-center justify-center bg-blue-100 text-base font-bold text-blue-800 ' + item.mask}>
              {item.label}
            </span>
          </span>
          <span className="font-mono text-[10px] font-semibold text-blue-700">{item.token}</span>
          <span className="font-mono text-[9px] text-slate-500">{item.meta}</span>
        </div>
      ))}
      <div className="flex flex-col items-center gap-1.5">
        <span className="relative inline-flex h-16 w-16 shrink-0 cursor-pointer">
          <span role="img" aria-label="Avatar con recorte" className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-slate-200">TR</span>
          <span role="status" aria-label="En línea" className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 ring-2 ring-white">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </span>
        </span>
        <span className="font-mono text-[10px] font-semibold text-blue-700">CUTOUT NOTCH</span>
        <span className="font-mono text-[9px] text-slate-500">zero overlap</span>
      </div>
    </div>
  );
};
`;
