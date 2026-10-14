export const SETTINGS_TABS_HTML = `
<div class="flex w-full flex-col gap-3">
  <div role="tablist" aria-label="Ajustes del proyecto" class="flex flex-row flex-wrap gap-1 border-b border-slate-200">
    <button type="button" role="tab" aria-selected="true" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 active:scale-[0.97]">Cuenta</button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">Seguridad</button>
    <button type="button" role="tab" aria-selected="false" class="relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97]">Notificaciones</button>
  </div>
  <div role="tabpanel" aria-label="Cuenta" class="w-full animate-tab-panel-in rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
    <label for="nombre">Nombre del proyecto</label>
    <input id="nombre" type="text" value="Zenith UI" class="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
    <button type="button" class="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">Guardar cambios</button>
  </div>
</div>
`;

export const SETTINGS_TABS_TSX = `
import { useState } from 'react';

export const SettingsTabs = () => {
  const [current, setCurrent] = useState('cuenta');
  const [name, setName] = useState('Zenith UI');
  const [twoFactor, setTwoFactor] = useState(true);
  const [digest, setDigest] = useState('semanal');
  const [saved, setSaved] = useState(false);

  const tabs = [
    { id: 'cuenta', label: 'Cuenta' },
    { id: 'seguridad', label: 'Seguridad' },
    { id: 'notificaciones', label: 'Notificaciones' },
  ];

  const save = () => {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <div role="tablist" aria-label="Ajustes del proyecto" className="flex flex-row flex-wrap gap-1 border-b border-slate-200">
        {tabs.map((tab) => {
          const selected = tab.id === current;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setCurrent(tab.id)}
              className={
                selected
                  ? 'relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 hover:bg-blue-50/60 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600'
                  : 'relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 select-none text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-blue-600'
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div key={current} role="tabpanel" aria-label={current} className="w-full animate-tab-panel-in rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
        {current === 'cuenta' && (
          <div className="max-w-md space-y-3">
            <div>
              <label htmlFor="settings-name" className="text-sm font-medium text-slate-900">Nombre del proyecto</label>
              <input
                id="settings-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600"
              />
            </div>
            <button type="button" onClick={save} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600">
              {saved ? 'Guardado ✓' : 'Guardar cambios'}
            </button>
          </div>
        )}
        {current === 'seguridad' && (
          <div className="flex max-w-md items-center justify-between gap-4">
            <div>
              <p className="font-medium text-slate-900">Verificación en dos pasos</p>
              <p className="text-xs text-slate-500">Exige un código además de la contraseña.</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={twoFactor}
              onClick={() => setTwoFactor((value) => !value)}
              className={'relative h-6 w-11 shrink-0 rounded-full transition-colors ' + (twoFactor ? 'bg-blue-600' : 'bg-slate-200')}
            >
              <span className={'absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ' + (twoFactor ? 'left-[22px]' : 'left-0.5')} />
            </button>
          </div>
        )}
        {current === 'notificaciones' && (
          <fieldset className="max-w-md space-y-2">
            <legend className="font-medium text-slate-900">Resumen por correo</legend>
            {['diario', 'semanal', 'nunca'].map((option) => (
              <label key={option} className="flex cursor-pointer items-center gap-2 text-sm">
                <input type="radio" name="digest" value={option} checked={digest === option} onChange={() => setDigest(option)} className="accent-blue-600" />
                {option[0].toUpperCase() + option.slice(1)}
              </label>
            ))}
          </fieldset>
        )}
      </div>
    </div>
  );
};
`;
