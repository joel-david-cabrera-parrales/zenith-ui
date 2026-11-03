import { useState } from 'react';
import { Button } from '@/features/botones/components/Button';
import { inputClass, labelClass, primaryButtonClass } from './profile.styles';
import type { Address } from './profile.types';

export const AddressDialog = ({ address, onClose, onSave }: {
  address: Address | null;
  onClose: () => void;
  onSave: (address: Address) => void;
}) => {
  const [draft, setDraft] = useState<Address>(address ?? { id: '', title: '', icon: 'location_on', lines: ['', '', ''], phone: '', recipient: '' });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="address-dialog-title" className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div><h2 id="address-dialog-title" className="text-lg font-semibold text-slate-900">{address ? 'Editar dirección' : 'Agregar nueva dirección'}</h2><p className="mt-1 text-sm text-slate-500">Completa los datos del punto de entrega.</p></div>
          <button type="button" onClick={onClose} aria-label="Cerrar" className="rounded-lg p-1 text-slate-500 hover:bg-slate-100"><span aria-hidden="true" className="material-symbols-outlined">close</span></button>
        </div>
        <form onSubmit={event => { event.preventDefault(); onSave({ ...draft, id: draft.id || `address-${Date.now()}`, lines: draft.lines.map(line => line.trim()).filter(Boolean) }); }} className="space-y-4">
          <label className="block"><span className={labelClass}>Nombre de la dirección</span><input required autoFocus className={inputClass} value={draft.title} onChange={event => setDraft({ ...draft, title: event.target.value })} placeholder="Casa, oficina..." /></label>
          <label className="block"><span className={labelClass}>Dirección</span><textarea required rows={3} className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm leading-6 text-slate-900 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20" value={draft.lines.join('\n')} onChange={event => setDraft({ ...draft, lines: event.target.value.split('\n') })} placeholder="Calle y número&#10;Colonia y alcaldía&#10;Ciudad, código postal y país" /></label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block"><span className={labelClass}>Teléfono</span><input required className={inputClass} value={draft.phone} onChange={event => setDraft({ ...draft, phone: event.target.value })} /></label>
            <label className="block"><span className={labelClass}>Persona que recibe</span><input required className={inputClass} value={draft.recipient} onChange={event => setDraft({ ...draft, recipient: event.target.value })} /></label>
          </div>
          <div className="flex justify-end gap-2 border-t border-slate-200 pt-4">
            <Button type="button" variant="outline" className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50" onClick={onClose}>Cancelar</Button>
            <Button type="submit" variant="info" className={primaryButtonClass}>Guardar dirección</Button>
          </div>
        </form>
      </section>
    </div>
  );
};
