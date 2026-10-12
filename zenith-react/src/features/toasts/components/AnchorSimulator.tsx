import type { HTMLAttributes } from 'react';

export type AnchorPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface AnchorSimulatorProps extends HTMLAttributes<HTMLDivElement> {
  active?: AnchorPosition | null;
  onAnchorSelect?: (anchor: AnchorPosition) => void;
}

interface AnchorDef {
  id: AnchorPosition;
  label: string;
  hint: string;
  icon: string;
}

const TOP_ANCHORS: AnchorDef[] = [
  { id: 'top-left', label: 'Top-Left', hint: 'top-4 left-4', icon: 'north_west' },
  { id: 'top-center', label: 'Top-Center', hint: 'top-4 left-1/2', icon: 'north' },
  { id: 'top-right', label: 'Top-Right (Default)', hint: 'PREFERRED', icon: 'north_east' },
];

const BOTTOM_ANCHORS: AnchorDef[] = [
  { id: 'bottom-left', label: 'Bottom-Left', hint: 'bottom-4 left-4', icon: 'south_west' },
  { id: 'bottom-center', label: 'Bottom-Center', hint: 'bottom-4 (SnackBar)', icon: 'south' },
  { id: 'bottom-right', label: 'Bottom-Right', hint: 'bottom-4 right-4', icon: 'south_east' },
];

export const AnchorSimulator = ({ active = null, onAnchorSelect, className = '', ...rest }: AnchorSimulatorProps) => {
  const renderButton = (anchor: AnchorDef) => {
    const selected = active === anchor.id;
    return (
      <div key={anchor.id} className="flex flex-col items-center gap-1">
        <button
          type="button"
          onClick={() => onAnchorSelect?.(anchor.id)}
          aria-pressed={selected}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs shadow-sm transition-all ${
            selected
              ? 'bg-blue-600 text-white shadow-md'
              : 'border border-slate-300 bg-white text-slate-700 hover:border-blue-600'
          }`}
        >
          <span aria-hidden="true" className={`material-symbols-outlined text-xs ${selected ? '' : 'text-blue-600'}`}>
            {anchor.icon}
          </span>
          <span>{anchor.label}</span>
        </button>
        <span className="font-mono text-[10px] text-slate-500">{anchor.hint}</span>
      </div>
    );
  };

  return (
    <div className={`w-full ${className}`} {...rest}>
      <div className="flex w-full flex-col justify-between gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 p-4">
        <div className="flex items-center justify-between">{TOP_ANCHORS.map(renderButton)}</div>
        <p className="text-center font-mono text-xs font-bold tracking-widest text-slate-400 uppercase">
          [Application Canvas Viewport]
        </p>
        <div className="flex items-center justify-between">{BOTTOM_ANCHORS.map(renderButton)}</div>
      </div>
    </div>
  );
};
