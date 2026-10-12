import { useEffect, useId, useRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

export interface CloudRegion {
  id: string;
  label: string;
  latency: string;
  latencyTone: 'fast' | 'warm';
  description: string;
}

export interface RegionSelectProps extends HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
  onAction?: (id: string) => void;
}

const REGIONS: CloudRegion[] = [
  {
    id: 'us-east-1',
    label: 'us-east-1 (N. Virginia)',
    latency: '18ms',
    latencyTone: 'fast',
    description: 'Tier 1 Primary Hub • 6 AZs',
  },
  {
    id: 'us-east-2',
    label: 'us-east-2 (Ohio)',
    latency: '24ms',
    latencyTone: 'fast',
    description: 'Secondary Disaster Recovery • 3 AZs',
  },
  {
    id: 'us-west-2',
    label: 'us-west-2 (Oregon)',
    latency: '42ms',
    latencyTone: 'warm',
    description: 'Edge Optimized • 4 AZs',
  },
  {
    id: 'eu-central-1',
    label: 'eu-central-1 (Frankfurt)',
    latency: '8ms',
    latencyTone: 'fast',
    description: 'Primary EU Hub • 3 AZs',
  },
];

export const RegionSelect = ({ defaultOpen = true, onAction, className = '', ...rest }: RegionSelectProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const [exiting, setExiting] = useState(false);
  const [selectedId, setSelectedId] = useState('eu-central-1');
  const [query, setQuery] = useState('us-');
  const searchId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!open || exiting) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current !== null && !rootRef.current.contains(event.target as Node)) {
        setExiting(true);
        timer.current = window.setTimeout(() => {
          setOpen(false);
          setExiting(false);
        }, 200);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExiting(true);
        timer.current = window.setTimeout(() => {
          setOpen(false);
          setExiting(false);
        }, 200);
      }
    };
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, exiting]);

  const close = () => {
    if (exiting) return;
    setExiting(true);
    timer.current = window.setTimeout(() => {
      setOpen(false);
      setExiting(false);
    }, 200);
  };

  const toggle = () => {
    if (open && !exiting) {
      close();
      return;
    }
    setExiting(false);
    setOpen(true);
  };

  const handleSelect = (id: string) => {
    setSelectedId(id);
    onAction?.(id);
    close();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  const normalized = query.trim().toLowerCase();
  const filtered =
    normalized === ''
      ? REGIONS
      : REGIONS.filter(
          (region) =>
            region.id.toLowerCase().includes(normalized) ||
            region.label.toLowerCase().includes(normalized),
        );

  const selected = REGIONS.find((region) => region.id === selectedId) ?? REGIONS[0];
  const visible = open || exiting;

  return (
    <div ref={rootRef} className={`relative w-full ${className}`} {...rest} onKeyDown={handleKeyDown}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open && !exiting}
        onClick={toggle}
        className="flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
      >
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="material-symbols-outlined text-[18px] text-blue-600">
            public
          </span>
          {selected.label}
        </span>
        <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-slate-500">
          unfold_more
        </span>
      </button>

      {visible && (
        <div
          role="listbox"
          aria-label="Selección de región cloud"
          className={
            exiting
              ? 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-out space-y-2 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
              : 'absolute top-full right-0 left-0 z-50 mt-2 w-full animate-modal-in space-y-2 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_20px_35px_-10px_rgba(11,28,48,0.12)]'
          }
        >
          <div className="relative">
            <label htmlFor={searchId} className="sr-only">
              Buscar región o zona
            </label>
            <span
              aria-hidden="true"
              className="material-symbols-outlined absolute top-2 left-2.5 text-[16px] text-slate-500"
            >
              search
            </span>
            <input
              id={searchId}
              type="text"
              placeholder="Buscar región o zona..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white py-1.5 pr-12 pl-8 text-sm font-medium text-slate-700 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
            />
            <span className="absolute top-2 right-2 font-mono text-[10px] font-semibold text-slate-500">
              {filtered.length} hits
            </span>
          </div>

          <div className="max-h-48 space-y-1 overflow-y-auto pr-1">
            {filtered.map((region) => {
              const isSelected = region.id === selectedId;
              return (
                <div
                  key={region.id}
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={0}
                  onClick={() => handleSelect(region.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      handleSelect(region.id);
                    }
                  }}
                  className={
                    isSelected
                      ? 'cursor-pointer rounded-lg border border-blue-600/20 bg-blue-50 p-2 transition-colors'
                      : 'cursor-pointer rounded-lg border border-transparent p-2 transition-colors hover:border-slate-200 hover:bg-slate-100'
                  }
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={
                        isSelected
                          ? 'text-sm font-semibold text-blue-600'
                          : 'text-sm font-semibold text-slate-700'
                      }
                    >
                      {region.label}
                    </span>
                    <span
                      className={
                        region.latencyTone === 'fast'
                          ? 'rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-slate-500'
                          : 'rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold text-amber-700'
                      }
                    >
                      {region.latency}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500">{region.description}</div>
                </div>
              );
            })}
            {filtered.length === 0 && (
              <p className="px-2 py-4 text-center text-xs text-slate-500">Sin resultados para “{query}”.</p>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 pt-2 font-mono text-[10px] font-semibold text-slate-500">
            <span>Total indexado: 24 regiones</span>
            <span className="cursor-pointer text-blue-600 hover:underline">Ver Mapa Latencias</span>
          </div>
        </div>
      )}
    </div>
  );
};
