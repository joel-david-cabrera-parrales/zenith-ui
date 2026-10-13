export const AVATAR_SIZES_HTML = `
<div class="flex flex-wrap items-end gap-4">
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-[8px] font-bold text-blue-800 ring-1 ring-blue-600/20">JD</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">2XS</span>
    <span class="font-mono text-[9px] text-slate-500">16px</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-[9px] font-bold text-blue-800 ring-1 ring-blue-600/20">AR</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">XS</span>
    <span class="font-mono text-[9px] text-slate-500">20px</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-800 ring-1 ring-blue-600/20">SC</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">SM</span>
    <span class="font-mono text-[9px] text-slate-500">28px</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white ring-2 ring-blue-600/40">EV</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">MD · DEFAULT</span>
    <span class="font-mono text-[9px] text-slate-500">36px</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800 ring-1 ring-blue-600/20">MS</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">LG</span>
    <span class="font-mono text-[9px] text-slate-500">48px</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-blue-600/20">TR</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">XL</span>
    <span class="font-mono text-[9px] text-slate-500">64px</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-20 w-20 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-800 ring-1 ring-blue-600/20">JM</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">2XL</span>
    <span class="font-mono text-[9px] text-slate-500">80px</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="inline-flex h-24 w-24 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-800 ring-1 ring-slate-200">ZF</span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">3XL</span>
    <span class="font-mono text-[9px] text-slate-500">96px</span>
  </div>
</div>
`;

export const AVATAR_SIZES_TSX = `
export const AvatarSizes = () => {
  const sizes = [
    { token: '2XS', px: '16px', label: 'JD', classes: 'h-4 w-4 text-[8px]' },
    { token: 'XS', px: '20px', label: 'AR', classes: 'h-5 w-5 text-[9px]' },
    { token: 'SM', px: '28px', label: 'SC', classes: 'h-7 w-7 text-[10px]' },
    { token: 'MD · DEFAULT', px: '36px', label: 'EV', classes: 'h-9 w-9 text-xs bg-blue-600 text-white ring-2 ring-blue-600/40' },
    { token: 'LG', px: '48px', label: 'MS', classes: 'h-12 w-12 text-sm' },
    { token: 'XL', px: '64px', label: 'TR', classes: 'h-16 w-16 text-base' },
    { token: '2XL', px: '80px', label: 'JM', classes: 'h-20 w-20 text-lg' },
    { token: '3XL', px: '96px', label: 'ZF', classes: 'h-24 w-24 text-xl' },
  ];
  return (
    <div className="flex flex-wrap items-end gap-4">
      {sizes.map((item) => (
        <div key={item.token} className="flex flex-col items-center gap-1.5">
          <span
            role="img"
            aria-label={'Avatar ' + item.token}
            className={'inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 font-bold text-blue-800 ring-1 ring-blue-600/20 ' + item.classes}
          >
            {item.label}
          </span>
          <span className="font-mono text-[10px] font-semibold text-blue-700">{item.token}</span>
          <span className="font-mono text-[9px] text-slate-500">{item.px}</span>
        </div>
      ))}
    </div>
  );
};
`;
