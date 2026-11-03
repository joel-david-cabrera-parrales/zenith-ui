import { Badge } from '@/features/badges/components/Badge';
import type { Address } from './profile.types';

export const AddressCard = ({ address, isDefault, onEdit, onDelete, onMakeDefault }: {
  address: Address;
  isDefault: boolean;
  onEdit: (address: Address) => void;
  onDelete: (address: Address) => void;
  onMakeDefault: (address: Address) => void;
}) => (
  <article className={`flex min-h-60 flex-col justify-between rounded-xl border p-5 ${isDefault ? 'border-2 border-sky-700 bg-sky-50' : 'border-slate-200 bg-slate-50'}`}>
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="flex items-center gap-2 font-semibold text-slate-900"><span aria-hidden="true" className="material-symbols-outlined text-sky-700">{address.icon}</span>{address.title}</h3>
        {isDefault
          ? <Badge tone="primary" variant="soft" size="small" className="border border-sky-200 bg-sky-100 text-sky-800">Predeterminada</Badge>
          : <button type="button" onClick={() => onMakeDefault(address)} className="text-xs font-semibold text-sky-700 hover:underline">Establecer como predeterminada</button>}
      </div>
      <p className="text-sm leading-6 text-slate-900">{address.lines.map((line, index) => <span key={`${address.id}-${line}`}>{line}{index < address.lines.length - 1 && <br />}</span>)}</p>
      <p className="mt-3 flex items-center gap-1.5 font-mono text-xs text-slate-600"><span aria-hidden="true" className="material-symbols-outlined text-base">call</span>{address.phone}</p>
    </div>
    <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-200/70 pt-3">
      <span className="text-[11px] text-slate-500">Recibe: {address.recipient}</span>
      <div className="flex items-center gap-1">
        <button type="button" onClick={() => onEdit(address)} aria-label={`Editar dirección ${address.title}`} className="rounded p-1.5 text-slate-600 transition hover:bg-sky-100 hover:text-sky-700"><span aria-hidden="true" className="material-symbols-outlined text-lg">edit</span></button>
        <button type="button" onClick={() => onDelete(address)} aria-label={`Eliminar dirección ${address.title}`} className="rounded p-1.5 text-slate-600 transition hover:bg-rose-50 hover:text-rose-700"><span aria-hidden="true" className="material-symbols-outlined text-lg">delete</span></button>
      </div>
    </div>
  </article>
);
