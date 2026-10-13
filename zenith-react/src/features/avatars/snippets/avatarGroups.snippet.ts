export const AVATAR_GROUPS_HTML = `
<div class="flex flex-col gap-6">
  <div class="flex items-center -space-x-2 py-1" role="group" aria-label="Grupo de 4 avatares">
    <span class="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 ring-2 ring-white">JD</span>
    <span class="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 ring-2 ring-white">AR</span>
    <span class="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 ring-2 ring-white">SC</span>
    <span class="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 ring-2 ring-white">EV</span>
  </div>
  <div class="flex items-center -space-x-2 py-1" role="group" aria-label="Grupo de 4 avatares con desborde">
    <span class="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 ring-2 ring-white">JD</span>
    <span class="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 ring-2 ring-white">AR</span>
    <span class="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 ring-2 ring-white">SC</span>
    <span class="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-xs font-bold text-blue-700 ring-2 ring-white">+12</span>
  </div>
  <div class="group/avatar-group flex items-center -space-x-2 py-1 transition-all duration-300 hover:space-x-1" role="group" aria-label="Grupo expandible">
    <span class="transition-all duration-200 group-hover/avatar-group:-translate-y-1 inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 ring-2 ring-white">JD</span>
    <span class="transition-all duration-200 group-hover/avatar-group:-translate-y-1 inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white ring-2 ring-white">SC</span>
    <span class="transition-all duration-200 group-hover/avatar-group:-translate-y-1 inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-blue-600 ring-2 ring-white">BOT</span>
    <span class="transition-all duration-200 group-hover/avatar-group:-translate-y-1 inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white ring-2 ring-white">AR</span>
  </div>
</div>
`;

export const AVATAR_GROUPS_TSX = `
export const AvatarGroups = () => {
  const team = ['JD', 'AR', 'SC', 'EV'];
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center -space-x-2 py-1" role="group" aria-label="Grupo de 4 avatares">
        {team.map((initials) => (
          <span key={initials} role="img" aria-label={'Avatar de ' + initials} className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 ring-2 ring-white">
            {initials}
          </span>
        ))}
      </div>
      <div className="flex items-center -space-x-2 py-1" role="group" aria-label="Grupo de 4 avatares con desborde">
        {team.slice(0, 3).map((initials) => (
          <span key={initials} role="img" aria-label={'Avatar de ' + initials} className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 ring-2 ring-white">
            {initials}
          </span>
        ))}
        <span aria-label="12 más" className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-xs font-bold text-blue-700 ring-2 ring-white">
          +12
        </span>
      </div>
      <div className="group/avatar-group flex items-center -space-x-2 py-1 transition-all duration-300 hover:space-x-1" role="group" aria-label="Grupo expandible">
        {team.map((initials) => (
          <span key={initials} role="img" aria-label={'Avatar de ' + initials} className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-800 ring-2 ring-white transition-all duration-200 group-hover/avatar-group:-translate-y-1">
            {initials}
          </span>
        ))}
      </div>
    </div>
  );
};
`;
