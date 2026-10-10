import type { HTMLAttributes } from 'react';

export interface ProductResourceProps extends HTMLAttributes<HTMLDivElement> {
  status?: string;
  pkg?: string;
  version?: string;
  title?: string;
  excerpt?: string;
  license?: string;
  size?: string;
  action?: string;
}

export const ProductResource = ({
  status = 'STABLE',
  pkg = 'PKG // DEV-TOOLKIT',
  version = 'v3.12.4',
  title = 'Zenith Sensor Agent',
  excerpt = 'Ultra-lightweight Linux telemetry exporter with Prometheus native endpoints.',
  license = 'LICENSED: MIT',
  size = 'SIZE: 8.4MB',
  action = 'Install Package',
  className = '',
  ...rest
}: ProductResourceProps) => {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${className}`}
      {...rest}
    >
      <div>
        <div className="relative rounded-lg overflow-hidden border border-slate-200/60 mb-3 aspect-square bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 flex items-center justify-center">
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[72px] text-blue-400 drop-shadow"
          >
            sensors
          </span>
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-white text-emerald-700 font-mono text-[9px] font-bold border border-slate-200">
            {status}
          </span>
        </div>
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-[9px] text-slate-500">{pkg}</span>
          <span className="text-sm font-bold text-blue-600">{version}</span>
        </div>
        <h3 className="text-sm font-semibold text-slate-900 mb-1">{title}</h3>
        <p className="text-xs text-slate-500 line-clamp-2 mb-3">{excerpt}</p>
      </div>
      <div className="pt-3 border-t border-slate-200">
        <div className="flex items-center justify-between mb-3 font-mono text-[9px] text-slate-500">
          <span>{license}</span>
          <span>{size}</span>
        </div>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-sm"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
            download
          </span>
          {action}
        </button>
      </div>
    </div>
  );
}
