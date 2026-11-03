import { ModeSelectMenu, type ModeOption } from '@/features/dropdowns';
import { labelClass } from './profile.styles';

export const ProfileDropdown = ({ label, value, options, onChange }: {
  label: string;
  value: string;
  options: ModeOption[];
  onChange: (value: string) => void;
}) => (
  <div className="min-w-0">
    <p className={labelClass}>{label}</p>
    <ModeSelectMenu
      aria-label={label}
      options={options}
      label={label}
      selectedId={value}
      defaultOpen={false}
      palette="sky"
      onAction={onChange}
    />
  </div>
);
