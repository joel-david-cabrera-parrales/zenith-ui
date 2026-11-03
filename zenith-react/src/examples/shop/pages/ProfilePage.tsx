import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import { Badge } from '@/features/badges/components/Badge';
import { Button } from '@/features/botones/components/Button';
import { useShopCart } from '../hooks/useShopCart';
import { ShopFooter } from '../components/ShopFooter';
import { ShopTopBar } from '../components/ShopTopBar';
import {
  AddressCard,
  AddressDialog,
  countryOptions,
  currencyOptions,
  documentTypeOptions,
  initialAddresses,
  initialProfile,
  initialSessions,
  inputClass,
  labelClass,
  languageOptions,
  PreferenceToggle,
  primaryButtonClass,
  ProfileDropdown,
  ProfileField,
  ProfileSection,
  profileNavigation,
} from '../components/profile';
import type { Address, ProfileData, Session } from '../components/profile';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { itemCount } = useShopCart();
  const [query, setQuery] = useState('');
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [savedProfile, setSavedProfile] = useState<ProfileData>(initialProfile);
  const [saveMessage, setSaveMessage] = useState('');
  const [avatar, setAvatar] = useState('');
  const [activeSection, setActiveSection] = useState(profileNavigation[0].id);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('es');
  const [currency, setCurrency] = useState('MXN');
  const [notifications, setNotifications] = useState({ orders: true, offers: true, weekly: false, security: true });
  const [sessions, setSessions] = useState(initialSessions);
  const [addresses, setAddresses] = useState(initialAddresses);
  const [defaultAddressId, setDefaultAddressId] = useState('home');
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [showAddressDialog, setShowAddressDialog] = useState(false);
  const [deactivated, setDeactivated] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const savedMessageTimeout = useRef<number | undefined>(undefined);
  const pendingSectionNavigation = useRef<{ id: string; timeout: number } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (pendingSectionNavigation.current) return;
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: '-110px 0px -65% 0px', threshold: [0, 0.1, 0.25, 0.5] });
    profileNavigation.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });
    const completeNavigation = () => {
      const pending = pendingSectionNavigation.current;
      if (!pending) return;
      window.clearTimeout(pending.timeout);
      pendingSectionNavigation.current = null;
      setActiveSection(pending.id);
    };
    const cancelNavigation = () => {
      const pending = pendingSectionNavigation.current;
      if (!pending) return;
      window.clearTimeout(pending.timeout);
      pendingSectionNavigation.current = null;
    };
    window.addEventListener('scrollend', completeNavigation);
    window.addEventListener('wheel', cancelNavigation, { passive: true });
    window.addEventListener('touchstart', cancelNavigation, { passive: true });
    window.addEventListener('pointerdown', cancelNavigation);
    window.addEventListener('keydown', cancelNavigation);
    return () => {
      observer.disconnect();
      window.removeEventListener('scrollend', completeNavigation);
      window.removeEventListener('wheel', cancelNavigation);
      window.removeEventListener('touchstart', cancelNavigation);
      window.removeEventListener('pointerdown', cancelNavigation);
      window.removeEventListener('keydown', cancelNavigation);
      if (pendingSectionNavigation.current) window.clearTimeout(pendingSectionNavigation.current.timeout);
    };
  }, []);

  useEffect(() => () => {
    if (savedMessageTimeout.current !== undefined) window.clearTimeout(savedMessageTimeout.current);
  }, []);

  const updateProfile = (name: keyof ProfileData, value: string) => setProfile(current => ({ ...current, [name]: value }));
  const handleSaveProfile = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSavedProfile(profile);
    setSaveMessage('Tus cambios se guardaron en esta demostración.');
    if (savedMessageTimeout.current !== undefined) window.clearTimeout(savedMessageTimeout.current);
    savedMessageTimeout.current = window.setTimeout(() => setSaveMessage(''), 3500);
  };
  const handleCancelProfile = () => {
    setProfile(savedProfile);
    setSaveMessage('Se descartaron los cambios sin guardar.');
    if (savedMessageTimeout.current !== undefined) window.clearTimeout(savedMessageTimeout.current);
    savedMessageTimeout.current = window.setTimeout(() => setSaveMessage(''), 3500);
  };
  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      window.alert('Selecciona un archivo de imagen.');
      event.target.value = '';
      return;
    }
    setAvatar(URL.createObjectURL(file));
  };
  const closeSession = (session: Session) => {
    if (session.current) return;
    if (window.confirm(`¿Quieres cerrar la sesión de ${session.device}?`)) setSessions(current => current.filter(item => item.id !== session.id));
  };
  const closeOtherSessions = () => {
    const count = sessions.filter(session => !session.current).length;
    if (count && window.confirm(`Se cerrarán ${count} sesiones en otros dispositivos. ¿Continuar?`)) setSessions(current => current.filter(session => session.current));
  };
  const saveAddress = (address: Address) => {
    const exists = addresses.some(item => item.id === address.id);
    setAddresses(current => exists ? current.map(item => item.id === address.id ? address : item) : [...current, address]);
    if (!defaultAddressId) setDefaultAddressId(address.id);
    setShowAddressDialog(false);
    setEditingAddress(null);
  };
  const deleteAddress = (address: Address) => {
    if (!window.confirm(`¿Eliminar la dirección “${address.title}”?`)) return;
    const remaining = addresses.filter(item => item.id !== address.id);
    setAddresses(remaining);
    if (defaultAddressId === address.id) setDefaultAddressId(remaining[0]?.id ?? '');
  };
  const makeDefaultAddress = (address: Address) => setDefaultAddressId(address.id);
  const toggleNotification = (key: keyof typeof notifications, checked: boolean) => setNotifications(current => ({ ...current, [key]: checked }));
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (!section) return;

    if (pendingSectionNavigation.current) window.clearTimeout(pendingSectionNavigation.current.timeout);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const top = window.scrollY + section.getBoundingClientRect().top - 96;
    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    const timeout = window.setTimeout(() => {
      if (pendingSectionNavigation.current?.id === sectionId) {
        pendingSectionNavigation.current = null;
        setActiveSection(sectionId);
      }
    }, 1200);
    pendingSectionNavigation.current = { id: sectionId, timeout };
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${sectionId}`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <ShopTopBar query={query} onQueryChange={setQuery} cartCount={itemCount} />
      <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <nav aria-label="Miga de pan" className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-500 sm:text-sm">
          <Link to="/examples/shop" className="inline-flex items-center gap-1 rounded px-1 py-1 hover:text-sky-700"><span aria-hidden="true" className="material-symbols-outlined text-base">home</span>Inicio</Link>
          <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
          <span>Mi Cuenta</span>
          <span aria-hidden="true" className="material-symbols-outlined text-base text-slate-300">chevron_right</span>
          <span aria-current="page" className="font-semibold text-slate-900">Configuración de Perfil</span>
        </nav>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4 sm:items-center sm:gap-5">
              <div className="relative shrink-0">
                {avatar
                  ? <img src={avatar} alt="Foto de perfil de Alejandro Morales" className="h-16 w-16 rounded-xl border-2 border-slate-200 object-cover sm:h-20 sm:w-20" />
                  : <div className="flex h-16 w-16 items-center justify-center rounded-xl border-2 border-slate-200 bg-sky-50 text-xl font-bold text-sky-800 sm:h-20 sm:w-20">AM</div>}
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarChange} className="sr-only" aria-label="Seleccionar foto de perfil" />
                <button type="button" onClick={() => fileInputRef.current?.click()} aria-label="Cambiar foto de perfil" title="Cambiar foto de perfil" className="absolute -right-2 -bottom-2 flex h-8 w-8 items-center justify-center rounded-lg border-2 border-white bg-sky-700 text-white shadow transition hover:bg-sky-800"><span aria-hidden="true" className="material-symbols-outlined text-base">photo_camera</span></button>
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{profile.name || 'Tu perfil'}</h1>
                  <Badge tone="success" variant="soft" size="small">Comprador verificado</Badge>
                  <Badge tone="primary" variant="soft" size="small" className="border border-sky-200 bg-sky-100 text-sky-800">✦ Cliente VIP</Badge>
                </div>
                <p className="flex items-center gap-1.5 text-sm text-slate-600"><span aria-hidden="true" className="material-symbols-outlined text-base text-slate-400">mail</span>{profile.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-slate-200 pt-4 sm:gap-3 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0">
              {[['18', 'Pedidos Hechos'], [String(addresses.length), 'Direcciones'], ['2022', 'Miembro Desde']].map(([value, label]) => <div key={label} className="flex flex-col justify-center rounded-lg border border-slate-200/70 bg-slate-50 p-3"><span className="text-lg font-bold text-sky-700">{value}</span><span className="text-[10px] text-slate-600 sm:text-xs">{label}</span></div>)}
            </div>
          </div>
        </section>

        <div className="grid items-start gap-6 lg:grid-cols-[288px_minmax(0,1fr)] lg:gap-8">
          <aside className="w-full shrink-0 rounded-xl border border-slate-200 bg-white p-3 shadow-sm lg:sticky lg:top-24 lg:w-72">
            <div className="space-y-1">
              <p className="px-3 pb-2 text-[10px] font-bold tracking-[0.12em] text-slate-400">CONFIGURACIÓN GENERAL</p>
              <nav aria-label="Secciones de configuración" className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">
                {profileNavigation.map(item => <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined} onClick={event => scrollToSection(event, item.id)} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${activeSection === item.id ? 'border-l-4 border-sky-700 bg-sky-100 font-semibold text-sky-800' : item.danger ? 'text-rose-700 hover:bg-rose-50' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-800'}`}><span aria-hidden="true" className="material-symbols-outlined text-xl">{item.icon}</span>{item.label}</a>)}
              </nav>
            </div>
            <div className="mt-4 border-t border-slate-200 pt-4">
              <p className="px-3 pb-1 text-[10px] font-bold tracking-[0.12em] text-slate-400">ASISTENCIA</p>
              <a href="mailto:privacidad@casaclara.example" className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs text-slate-600 transition hover:bg-sky-50 hover:text-sky-800"><span aria-hidden="true" className="material-symbols-outlined text-lg">shield</span>Centro de Privacidad</a>
              <a href="mailto:soporte@casaclara.example" className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs text-slate-600 transition hover:bg-sky-50 hover:text-sky-800"><span aria-hidden="true" className="material-symbols-outlined text-lg">headset_mic</span>Soporte Técnico</a>
            </div>
            <div className="mt-3 border-t border-slate-200 pt-3">
              <button type="button" onClick={() => navigate('/auth')} className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-rose-700 transition hover:bg-rose-50"><span aria-hidden="true" className="material-symbols-outlined text-lg">logout</span>Cerrar Sesión</button>
            </div>
          </aside>

          <div className="min-w-0 flex-1 space-y-6">
            <ProfileSection id="seccion-personal" title="Información Personal" description="Actualiza tus datos de contacto y documentación para validar tus compras." icon="badge">
              <form onSubmit={handleSaveProfile} className="space-y-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <ProfileField label="Nombre y Apellido" name="name" value={profile.name} onChange={updateProfile} />
                  <label className="block"><span className={`${labelClass} flex items-center justify-between`}>Correo Electrónico <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700"><span aria-hidden="true" className="material-symbols-outlined text-sm">check_circle</span>Verificado</span></span><input type="email" required name="email" value={profile.email} onChange={event => updateProfile('email', event.target.value)} className={inputClass} /></label>
                  <ProfileField label="Teléfono de Contacto" name="phone" type="tel" value={profile.phone} onChange={updateProfile} />
                  <ProfileDropdown label="Tipo de Documento (RUT / DNI / RFC)" value={profile.documentType} options={documentTypeOptions} onChange={value => updateProfile('documentType', value)} />
                  <ProfileField label="Fecha de Nacimiento" name="birthDate" type="date" value={profile.birthDate} onChange={updateProfile} />
                  <ProfileDropdown label="País de Residencia" value={profile.country} options={countryOptions} onChange={value => updateProfile('country', value)} />
                </div>
                <div className="flex flex-col-reverse items-stretch justify-between gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-end">
                  {saveMessage && <span role="status" className="mr-auto text-xs font-medium text-emerald-700">{saveMessage}</span>}
                  <Button type="button" variant="outline" onClick={handleCancelProfile} className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50">Cancelar</Button>
                  <Button type="submit" variant="info" className={primaryButtonClass}>Guardar Cambios</Button>
                </div>
              </form>
            </ProfileSection>

            <ProfileSection id="seccion-preferencias" title="Preferencias del Sistema" description="Controla el aspecto visual, canales de comunicación y moneda predeterminada." icon="tune">
              <div>
                <label className={labelClass}>Tema de la Interfaz</label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { value: 'light', name: 'Modo Claro', detail: 'Alto contraste para el día', icon: 'light_mode' },
                    { value: 'dark', name: 'Modo Oscuro', detail: 'Descanso visual en penumbra', icon: 'dark_mode' },
                    { value: 'auto', name: 'Automático / Sistema', detail: 'Sincronizar con el SO', icon: 'settings_brightness' },
                  ].map(option => <label key={option.value} className={`relative flex cursor-pointer flex-col rounded-xl border p-4 transition hover:border-sky-600 ${theme === option.value ? 'border-2 border-sky-700 bg-sky-50' : 'border-slate-200 bg-slate-50'}`}><input type="radio" name="theme-mode" value={option.value} checked={theme === option.value} onChange={() => setTheme(option.value)} className="sr-only" /><span className="mb-3 flex items-center justify-between"><span aria-hidden="true" className={`material-symbols-outlined text-xl ${theme === option.value ? 'text-sky-700' : 'text-slate-600'}`}>{option.icon}</span><span className={`h-4 w-4 rounded-full border-4 bg-white ${theme === option.value ? 'border-sky-700' : 'border-slate-300'}`} /></span><span className="text-xs font-semibold text-slate-900">{option.name}</span><span className="mt-0.5 text-xs text-slate-600">{option.detail}</span></label>)}
                </div>
                <p className="mt-2 text-[11px] text-slate-500">La selección se guarda en esta pantalla de demostración; no cambia el tema global de la tienda.</p>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <h3 className="mb-1 text-sm font-semibold text-slate-900">Canales de Notificaciones</h3>
                <PreferenceToggle id="notify-orders" title="Notificaciones de estado de pedidos" description="Alertas inmediatas vía SMS y correo sobre envíos y entregas" checked={notifications.orders} onChange={checked => toggleNotification('orders', checked)} />
                <PreferenceToggle id="notify-offers" title="Ofertas flash y promociones personalizadas" description="Descuentos en productos marcados como favoritos y rebajas exclusivas" checked={notifications.offers} onChange={checked => toggleNotification('offers', checked)} />
                <PreferenceToggle id="notify-weekly" title="Resumen semanal y recomendaciones de compras" description="Boletín con novedades en tus categorías más exploradas" checked={notifications.weekly} onChange={checked => toggleNotification('weekly', checked)} />
                <PreferenceToggle id="notify-security" title="Alertas críticas de seguridad" description="Avisos urgentes ante inicios de sesión desde nuevas IPs o dispositivos" checked={notifications.security} onChange={checked => toggleNotification('security', checked)} />
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 border-t border-slate-200 pt-5 sm:grid-cols-2">
                <ProfileDropdown label="Idioma del Portal" value={language} options={languageOptions} onChange={setLanguage} />
                <ProfileDropdown label="Moneda Predeterminada" value={currency} options={currencyOptions} onChange={setCurrency} />
              </div>
              <div className="mt-5 flex justify-end border-t border-slate-200 pt-4"><Button type="button" variant="info" className={primaryButtonClass} onClick={() => window.alert('Preferencias guardadas en esta demostración.')}>Guardar Preferencias</Button></div>
            </ProfileSection>

            <ProfileSection id="seccion-seguridad" title="Sesiones Activas y Seguridad" description="Revisa las sesiones iniciadas en distintos navegadores y administra el acceso a tu cuenta." icon="security" action={<Button type="button" variant="dangerOutline" size="sm" onClick={closeOtherSessions}>Cerrar todas las demás sesiones</Button>}>
              <div className="divide-y divide-slate-200/70">
                {sessions.map(session => <div key={session.id} className="flex flex-col justify-between gap-4 py-4 md:flex-row md:items-center"><div className="flex items-start gap-4"><span className={`flex shrink-0 items-center justify-center rounded-lg p-2.5 ${session.current ? 'bg-sky-100 text-sky-800' : 'border border-slate-200 bg-slate-50 text-slate-600'}`}><span aria-hidden="true" className="material-symbols-outlined text-2xl">{session.icon}</span></span><div className="space-y-1"><div className="flex flex-wrap items-center gap-2.5"><h3 className="text-sm font-semibold text-slate-900">{session.device}</h3>{session.current && <Badge tone="success" variant="soft" size="small"><span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />Activa ahora (Este dispositivo)</Badge>}</div><div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600"><span className="flex items-center gap-1"><span aria-hidden="true" className="material-symbols-outlined text-sm">location_on</span>{session.location}</span><span className="font-mono">IP: {session.ip}</span>{!session.current && <span>{session.activity}</span>}</div></div></div><Button type="button" variant={session.current ? 'outline' : 'dangerOutline'} size="sm" disabled={session.current} onClick={() => closeSession(session)} className={session.current ? 'self-start border-slate-200 bg-slate-50 text-slate-500 md:self-center' : 'self-start md:self-center'}>{session.current ? 'Sesión Actual' : 'Cerrar esta sesión'}</Button></div>)}
                {!sessions.length && <p className="py-8 text-center text-sm text-slate-500">No hay sesiones activas.</p>}
              </div>
            </ProfileSection>

            <ProfileSection id="seccion-direcciones" title="Direcciones de Envío" description="Gestiona tus puntos de entrega para compras rápidas con 1-click checkout." icon="local_shipping" action={<Button type="button" variant="info" size="sm" leadingIcon="add" className={primaryButtonClass} onClick={() => { setEditingAddress(null); setShowAddressDialog(true); }}>Agregar nueva dirección</Button>}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {addresses.map(address => <AddressCard key={address.id} address={address} isDefault={address.id === defaultAddressId} onEdit={item => { setEditingAddress(item); setShowAddressDialog(true); }} onDelete={deleteAddress} onMakeDefault={makeDefaultAddress} />)}
                {!addresses.length && <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center md:col-span-2"><span aria-hidden="true" className="material-symbols-outlined text-3xl text-sky-700">location_on</span><p className="mt-2 text-sm font-medium text-slate-800">Aún no tienes direcciones guardadas</p><p className="mt-1 text-xs text-slate-500">Agrega una dirección para agilizar tus compras.</p></div>}
              </div>
            </ProfileSection>

            <section id="zona-peligro" className="scroll-mt-28 rounded-xl border border-rose-200 bg-white p-5 shadow-sm sm:p-8">
              <div className="flex flex-col justify-between gap-4 border-b border-rose-100 pb-5 sm:flex-row sm:items-center">
                <div><h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900"><span aria-hidden="true" className="material-symbols-outlined text-2xl text-rose-600">warning</span>Zona de Peligro</h2><p className="mt-1 text-sm text-slate-600">Acciones irreversibles y administración del estado de tu perfil en Casa Clara.</p></div>
                <Badge tone="danger" variant="soft" size="small" className="self-start sm:self-auto">Acción Crítica</Badge>
              </div>
              <div className="mt-6 flex flex-col justify-between gap-6 rounded-xl border border-rose-200/70 bg-rose-50/40 p-5 lg:flex-row lg:items-center">
                <div className="flex-1 space-y-3"><h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900"><span aria-hidden="true" className="material-symbols-outlined text-xl text-rose-600">person_off</span>Desactivar Cuenta Temporalmente</h3><p className="text-sm leading-6 text-slate-600">Al desactivar tu cuenta se pausará temporalmente tu perfil público, tus publicaciones de catálogo y compras en curso no serán visibles y se cancelarán tus suscripciones activas. Podrás reactivar tu cuenta iniciando sesión en cualquier momento antes de 30 días.</p><div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-xs font-medium text-slate-600"><span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className="material-symbols-outlined text-sm text-rose-500">schedule</span>Periodo de gracia de 30 días</span><span className="inline-flex items-center gap-1.5"><span aria-hidden="true" className="material-symbols-outlined text-sm text-rose-500">lock</span>Datos protegidos y cifrados</span></div>{deactivated && <p role="status" className="text-sm font-semibold text-rose-700">La cuenta quedó desactivada en esta demostración.</p>}</div>
                <Button type="button" variant="dangerOutline" disabled={deactivated} onClick={() => { if (window.confirm('¿Desactivar tu cuenta temporalmente? Podrás reactivarla iniciando sesión dentro de 30 días.')) setDeactivated(true); }} className="shrink-0">{deactivated ? 'Cuenta desactivada' : 'Desactivar cuenta'}</Button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <ShopFooter />
      {showAddressDialog && <AddressDialog address={editingAddress} onClose={() => { setShowAddressDialog(false); setEditingAddress(null); }} onSave={saveAddress} />}
    </div>
  );
};

