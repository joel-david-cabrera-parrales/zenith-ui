export const AVATAR_PRESENCE_HTML = `
<div class="flex flex-wrap items-end gap-4">
  <div class="flex flex-col items-center gap-1.5">
    <span class="relative inline-flex shrink-0 cursor-pointer">
      <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-slate-200">JD</span>
      <span class="absolute bottom-0 right-0 flex h-3.5 w-3.5" role="status" aria-label="En línea">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
        <span class="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
      </span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-emerald-700">ONLINE</span>
    <span class="font-mono text-[9px] text-slate-500">ping-pulse</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="relative inline-flex shrink-0 cursor-pointer">
      <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-slate-200">AR</span>
      <span class="absolute bottom-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-600 ring-2 ring-white" role="status" aria-label="No molestar">
        <span class="h-0.5 w-2 rounded-full bg-white"></span>
      </span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-red-700">DND / BUSY</span>
    <span class="font-mono text-[9px] text-slate-500">solid red</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="relative inline-flex shrink-0 cursor-pointer">
      <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-slate-200">SC</span>
      <span class="absolute bottom-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-200 ring-2 ring-white" role="status" aria-label="Ausente">…</span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-slate-500">AWAY / IDLE</span>
    <span class="font-mono text-[9px] text-slate-500">amber beacon</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="relative inline-flex shrink-0 cursor-pointer">
      <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-slate-200">EV</span>
      <span class="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 ring-2 ring-white" role="status" aria-label="En llamada">…</span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-blue-700">IN CALL</span>
    <span class="font-mono text-[9px] text-slate-500">call badge</span>
  </div>
  <div class="flex flex-col items-center gap-1.5">
    <span class="relative inline-flex shrink-0 cursor-pointer">
      <span class="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-base font-bold text-slate-500 opacity-70 grayscale ring-1 ring-slate-200">MS</span>
      <span class="absolute bottom-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white ring-2 ring-slate-300" role="status" aria-label="Desconectado">
        <span class="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
      </span>
    </span>
    <span class="font-mono text-[10px] font-semibold text-slate-500">OFFLINE</span>
    <span class="font-mono text-[9px] text-slate-500">grayscale hollow</span>
  </div>
</div>
`;

export const AVATAR_PRESENCE_TSX = `
export const AvatarPresence = () => {
  return (
    <div className="flex flex-wrap items-end gap-4">
      <div className="flex flex-col items-center gap-1.5">
        <span className="relative inline-flex shrink-0 cursor-pointer">
          <span role="img" aria-label="Avatar en línea" className="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-slate-200">JD</span>
          <span role="status" aria-label="En línea" className="absolute bottom-0 right-0 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </span>
        </span>
        <span className="font-mono text-[10px] font-semibold text-emerald-700">ONLINE</span>
        <span className="font-mono text-[9px] text-slate-500">ping-pulse</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="relative inline-flex shrink-0 cursor-pointer">
          <span role="img" aria-label="Avatar no molestar" className="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-slate-200">AR</span>
          <span role="status" aria-label="No molestar" className="absolute bottom-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-600 ring-2 ring-white">
            <span className="h-0.5 w-2 rounded-full bg-white" />
          </span>
        </span>
        <span className="font-mono text-[10px] font-semibold text-red-700">DND / BUSY</span>
        <span className="font-mono text-[9px] text-slate-500">solid red</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="relative inline-flex shrink-0 cursor-pointer">
          <span role="img" aria-label="Avatar ausente" className="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-slate-200">SC</span>
          <span role="status" aria-label="Ausente" className="absolute bottom-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-200 ring-2 ring-white">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-800" />
          </span>
        </span>
        <span className="font-mono text-[10px] font-semibold text-slate-500">AWAY / IDLE</span>
        <span className="font-mono text-[9px] text-slate-500">amber beacon</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="relative inline-flex shrink-0 cursor-pointer">
          <span role="img" aria-label="Avatar en llamada" className="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-800 ring-1 ring-slate-200">EV</span>
          <span role="status" aria-label="En llamada" className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 ring-2 ring-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </span>
        </span>
        <span className="font-mono text-[10px] font-semibold text-blue-700">IN CALL</span>
        <span className="font-mono text-[9px] text-slate-500">call badge</span>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="relative inline-flex shrink-0 cursor-pointer">
          <span role="img" aria-label="Avatar desconectado" className="inline-flex h-16 w-16 shrink-0 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-base font-bold text-slate-500 opacity-70 grayscale ring-1 ring-slate-200">MS</span>
          <span role="status" aria-label="Desconectado" className="absolute bottom-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white ring-2 ring-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          </span>
        </span>
        <span className="font-mono text-[10px] font-semibold text-slate-500">OFFLINE</span>
        <span className="font-mono text-[9px] text-slate-500">grayscale hollow</span>
      </div>
    </div>
  );
};
`;
