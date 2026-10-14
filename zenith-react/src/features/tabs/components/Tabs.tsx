import { useId, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  icon?: string;
  badge?: string;
  disabled?: boolean;
  content?: ReactNode;
}

export interface TabsProps {
  tabs?: TabItem[];
  defaultActiveId?: string;
  activeId?: string;
  onTabChange?: (id: string) => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'underline' | 'pills' | 'boxed';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const DEFAULT_TABS: TabItem[] = [
  { id: 'resumen', label: 'Resumen', content: 'Contenido de resumen del proyecto.' },
  { id: 'actividad', label: 'Actividad', content: 'Última actividad del equipo.' },
  { id: 'ajustes', label: 'Ajustes', content: 'Opciones de configuración.' },
];

const tabClassOf = (size: NonNullable<TabsProps['size']>): string => {
  if (size === 'sm') return 'gap-1.5 px-2.5 py-1.5 text-xs';
  if (size === 'lg') return 'gap-2.5 px-5 py-2.5 text-base';
  return 'gap-2 px-3.5 py-2 text-sm';
};

const iconClassOf = (size: NonNullable<TabsProps['size']>): string => {
  if (size === 'sm') return 'text-[16px]';
  if (size === 'lg') return 'text-[20px]';
  return 'text-[18px]';
};

export const Tabs = ({
  tabs = DEFAULT_TABS,
  defaultActiveId,
  activeId,
  onTabChange,
  size = 'md',
  variant = 'underline',
  orientation = 'horizontal',
  className = '',
}: TabsProps) => {
  const baseId = useId();
  const [internal, setInternal] = useState(defaultActiveId ?? tabs[0]?.id ?? '');
  const current = activeId ?? internal;
  const isVertical = orientation === 'vertical';

  const select = (id: string) => {
    const target = tabs.find((tab) => tab.id === id);
    if (target === undefined || target.disabled === true) return;
    if (activeId === undefined) setInternal(id);
    onTabChange?.(id);
  };

  const focusTab = (id: string) => {
    document.getElementById(`${baseId}-${id}`)?.focus();
  };

  const move = (fromId: string, delta: number) => {
    const enabled = tabs.filter((tab) => tab.disabled !== true);
    const position = enabled.findIndex((tab) => tab.id === fromId);
    if (position === -1 || enabled.length === 0) return;
    const next = enabled[(position + delta + enabled.length) % enabled.length];
    if (next !== undefined) {
      select(next.id);
      focusTab(next.id);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, id: string) => {
    const horizontal = !isVertical;
    if (horizontal && event.key === 'ArrowRight') {
      event.preventDefault();
      move(id, 1);
    } else if (horizontal && event.key === 'ArrowLeft') {
      event.preventDefault();
      move(id, -1);
    } else if (!horizontal && event.key === 'ArrowDown') {
      event.preventDefault();
      move(id, 1);
    } else if (!horizontal && event.key === 'ArrowUp') {
      event.preventDefault();
      move(id, -1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      const first = tabs.find((tab) => tab.disabled !== true);
      if (first !== undefined) {
        select(first.id);
        focusTab(first.id);
      }
    } else if (event.key === 'End') {
      event.preventDefault();
      const reversed = [...tabs].reverse();
      const last = reversed.find((tab) => tab.disabled !== true);
      if (last !== undefined) {
        select(last.id);
        focusTab(last.id);
      }
    }
  };

  const listClass =
    variant === 'pills'
      ? `flex ${isVertical ? 'flex-col' : 'flex-row flex-wrap'} gap-1 rounded-xl bg-slate-100 p-1`
      : variant === 'boxed'
        ? `flex ${isVertical ? 'flex-col' : 'flex-row flex-wrap'} gap-2`
        : `flex ${isVertical ? 'flex-col border-l border-slate-200' : 'flex-row flex-wrap border-b border-slate-200'} gap-1`;

  const tabClasses = (active: boolean, disabled: boolean): string => {
    const base = `flex items-center rounded-lg font-medium transition-all duration-200 select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.97] ${tabClassOf(size)}`;
    if (disabled) return `${base} cursor-not-allowed text-slate-300 active:scale-100`;
    if (variant === 'pills') {
      return active
        ? `${base} bg-white text-slate-900 shadow ring-1 ring-slate-200 hover:bg-white`
        : `${base} text-slate-500 hover:bg-white/70 hover:text-slate-900`;
    }
    if (variant === 'boxed') {
      return active
        ? `${base} border border-blue-600 bg-blue-50 text-blue-700 hover:bg-blue-50`
        : `${base} border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900`;
    }
    if (isVertical) {
      return active
        ? `${base} -ml-px border-l-2 border-blue-600 bg-blue-50/60 text-blue-700 hover:bg-blue-50`
        : `${base} -ml-px border-l-2 border-transparent text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900`;
    }
    return active
      ? `${base} relative text-blue-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-blue-600 after:transition-all after:duration-200 hover:bg-blue-50/60`
      : `${base} relative text-slate-500 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:scale-x-0 after:bg-blue-600 after:opacity-0 after:transition-all after:duration-200 hover:bg-slate-50 hover:text-slate-900 hover:after:scale-x-100 hover:after:opacity-30`;
  };

  const activeTab = tabs.find((tab) => tab.id === current) ?? tabs[0];

  return (
    <div className={`w-full ${isVertical ? 'flex flex-col gap-4 sm:flex-row' : 'flex flex-col gap-3'} ${className}`}>
      <div
        role="tablist"
        aria-orientation={orientation}
        aria-label="Pestañas"
        className={`${listClass} ${isVertical ? 'w-full shrink-0 sm:w-52' : 'w-full'}`}
      >
        {tabs.map((tab) => {
          const active = tab.id === activeTab?.id;
          const disabled = tab.disabled === true;
          return (
            <button
              key={tab.id}
              id={`${baseId}-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-disabled={disabled || undefined}
              aria-controls={`${baseId}-${tab.id}-panel`}
              tabIndex={disabled ? -1 : active ? 0 : -1}
              disabled={disabled}
              onClick={() => select(tab.id)}
              onKeyDown={(event) => handleKeyDown(event, tab.id)}
              title={tab.label}
              className={tabClasses(active, disabled)}
            >
              {tab.icon !== undefined && (
                <span aria-hidden="true" className={`material-symbols-outlined ${iconClassOf(size)} ${active ? 'text-blue-600' : ''}`}>
                  {tab.icon}
                </span>
              )}
              <span className="truncate">{tab.label}</span>
              {tab.badge !== undefined && (
                <span
                  aria-label={`${tab.badge} elementos`}
                  className={`rounded-full px-1.5 py-0.5 text-[11px] font-semibold tabular-nums ${active ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {activeTab !== undefined && (
        <div
          key={activeTab.id}
          id={`${baseId}-${activeTab.id}-panel`}
          role="tabpanel"
          aria-label={activeTab.label}
          tabIndex={0}
          className="w-full animate-tab-panel-in rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          {activeTab.content ?? <p>Contenido de {activeTab.label}.</p>}
        </div>
      )}
    </div>
  );
};
