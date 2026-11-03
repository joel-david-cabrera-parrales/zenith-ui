import type { ProfileData } from './profile.types';
import { inputClass, labelClass } from './profile.styles';

export const ProfileField = ({ label, name, value, onChange, type = 'text', className = '' }: {
  label: string;
  name: keyof ProfileData;
  value: string;
  onChange: (name: keyof ProfileData, value: string) => void;
  type?: string;
  className?: string;
}) => (
  <label className={`block ${className}`}>
    <span className={labelClass}>{label}</span>
    <input type={type} name={name} value={value} onChange={event => onChange(name, event.target.value)} className={inputClass} />
  </label>
);
