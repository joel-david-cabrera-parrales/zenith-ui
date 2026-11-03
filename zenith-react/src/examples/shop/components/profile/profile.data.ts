import type { ModeOption } from '@/features/dropdowns';
import type { Address, ProfileData, Session } from './profile.types';

export const initialProfile: ProfileData = {
  name: 'Alejandro Morales',
  email: 'alejandro.morales@example.com',
  phone: '+52 55 1234 5678',
  documentType: 'RFC',
  birthDate: '1992-08-15',
  country: 'MX',
};

export const initialAddresses: Address[] = [
  {
    id: 'home',
    title: 'Casa (Principal)',
    icon: 'home',
    lines: ['Av. Insurgentes Sur 1200, Depto 402', 'Col. Del Valle, Alcaldía Benito Juárez', 'Ciudad de México, CP 03100, México'],
    phone: '+52 55 1234 5678',
    recipient: 'Alejandro Morales',
  },
  {
    id: 'office',
    title: 'Oficina / Trabajo',
    icon: 'apartment',
    lines: ['Paseo de la Reforma 250, Piso 12 (Torre B)', 'Col. Juárez, Alcaldía Cuauhtémoc', 'Ciudad de México, CP 06600, México'],
    phone: '+52 55 9876 5432 (Ext. 401)',
    recipient: 'Alejandro Morales (Recepción)',
  },
];

export const initialSessions: Session[] = [
  { id: 'mac', device: 'MacBook Pro 16” - Chrome 122.0', location: 'Ciudad de México, México', ip: '189.204.142.88', activity: 'Activa ahora (Este dispositivo)', icon: 'laptop_mac', current: true },
  { id: 'iphone', device: 'iPhone 14 Pro - App MarketHub iOS', location: 'Guadalajara, Jalisco', ip: '201.140.76.12', activity: 'Última actividad: hace 2 horas', icon: 'smartphone' },
  { id: 'windows', device: 'Windows PC - Firefox 120.0', location: 'Monterrey, Nuevo León', ip: '187.190.22.45', activity: 'Última actividad: hace 3 días', icon: 'desktop_windows' },
];

export const profileNavigation = [
  { id: 'seccion-personal', label: 'Información Personal', icon: 'person' },
  { id: 'seccion-preferencias', label: 'Preferencias del Sistema', icon: 'tune' },
  { id: 'seccion-seguridad', label: 'Sesiones Activas y Seguridad', icon: 'security' },
  { id: 'seccion-direcciones', label: 'Direcciones de Envío', icon: 'local_shipping' },
  { id: 'zona-peligro', label: 'Desactivar Cuenta', icon: 'warning', danger: true },
];

export const documentTypeOptions: ModeOption[] = [
  { id: 'RFC', label: 'RFC', icon: 'badge' },
  { id: 'DNI', label: 'DNI', icon: 'badge' },
  { id: 'RUT', label: 'RUT', icon: 'badge' },
  { id: 'Pasaporte', label: 'Pasaporte', icon: 'flight' },
];

export const countryOptions: ModeOption[] = [
  { id: 'MX', label: 'México (MX)', icon: 'flag' },
  { id: 'CO', label: 'Colombia (CO)', icon: 'flag' },
  { id: 'CL', label: 'Chile (CL)', icon: 'flag' },
  { id: 'AR', label: 'Argentina (AR)', icon: 'flag' },
  { id: 'ES', label: 'España (ES)', icon: 'flag' },
];

export const languageOptions: ModeOption[] = [
  { id: 'es', label: 'Español (Latinoamérica)', icon: 'language' },
  { id: 'en', label: 'English (United States)', icon: 'language' },
  { id: 'pt', label: 'Português (Brasil)', icon: 'language' },
];

export const currencyOptions: ModeOption[] = [
  { id: 'MXN', label: 'MXN - Peso Mexicano ($)', icon: 'payments' },
  { id: 'USD', label: 'USD - Dólar Estadounidense ($)', icon: 'payments' },
  { id: 'EUR', label: 'EUR - Euro (€)', icon: 'payments' },
  { id: 'CLP', label: 'CLP - Peso Chileno ($)', icon: 'payments' },
];
